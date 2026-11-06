import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import type { Chat } from '@ai-sdk/angular';
import { CasePanel } from './features/case-panel/case-panel';
import type { CaseView } from './features/case-panel/case-view';
import { ChatView } from './features/chat/chat-view';
import { Intake, type IntakeSubmission } from './features/intake/intake';
import { ResetDialog } from './features/reset/reset-dialog';

const formFields = ['requestType', 'category', 'model', 'purchaseDate', 'receiptDate', 'buyerType', 'purchaseChannel', 'description'] as const;

const formLabels: [string, (typeof formFields)[number]][] = [
  ['Rodzaj sprawy', 'requestType'],
  ['Kategoria sprzętu', 'category'],
  ['Nazwa/model sprzętu', 'model'],
  ['Data zakupu', 'purchaseDate'],
  ['Data otrzymania', 'receiptDate'],
  ['Rodzaj kupującego', 'buyerType'],
  ['Kanał zakupu', 'purchaseChannel'],
  ['Opis sprawy', 'description'],
];

const stageLabels: Record<string, string> = {
  validation: 'Walidacja formularza',
  upload: 'Przesyłanie zdjęcia',
  image_preparation: 'Przygotowanie zdjęcia',
  initial_assessment: 'Ocena wstępna',
  escalation: 'Pogłębiona analiza zdjęcia',
  ready_for_chat: 'Gotowe do rozmowy',
};

interface AssessmentRecord {
  type?: string;
  caseToken?: string;
  stage?: string;
  case?: CaseView;
  errors?: Record<string, string>;
  error?: string;
}

interface AssessmentProblem {
  errors?: Record<string, string>;
  error?: string;
}

@Component({
  selector: 'app-root',
  imports: [CasePanel, ChatView, Intake, MatButtonModule, MatCardModule, MatDialogModule, MatProgressSpinnerModule],
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnDestroy {
  private readonly dialog = inject(MatDialog);
  private abortController = new AbortController();
  private epoch = 0;
  private reconcileInFlight = false;
  private caseRevision = 0;
  private recheckTimer: ReturnType<typeof setTimeout> | null = null;
  private resetOpen = false;

  readonly processing = signal(false);
  readonly stage = signal('validation');
  readonly stageLabel = computed(() => stageLabels[this.stage()] ?? this.stage());
  readonly caseToken = signal<string | null>(null);
  readonly caseView = signal<CaseView | null>(null);
  readonly chatInstance = signal<Chat | null>(null);
  readonly chatLoading = signal(false);
  readonly intakeId = signal('');
  readonly previewUrl = signal<string | null>(null);
  readonly serverFieldErrors = signal<Record<string, string>>({});
  readonly sessionError = signal<string | null>(null);
  readonly intakeGeneration = signal(0);

  onSubmit(submission: IntakeSubmission): void {
    void this.startAssessment(submission);
  }

  openReset(): void {
    if (this.resetOpen) return;
    this.resetOpen = true;
    const ref = this.dialog.open(ResetDialog, { width: '480px' });
    ref.afterClosed().subscribe((confirmed) => {
      this.resetOpen = false;
      if (confirmed) void this.confirmReset();
    });
  }

  onFollowUp(text: string): void {
    const trimmed = text.trim();
    if (!trimmed) return;
    this.sendTurn('follow_up', trimmed);
  }

  onSummary(): void {
    this.sendTurn('summary', 'Poproszę o podsumowanie sprawy.');
  }

  onRetry(): void {
    const chat = this.chatInstance();
    const token = this.caseToken();
    const lastTurn = this.caseView()?.turns.at(-1);
    if (!chat || !token || !lastTurn || this.isChatBusy(chat)) return;
    if (lastTurn.attempts.at(-1)?.status !== 'failed' && lastTurn.attempts.at(-1)?.status !== 'cancelled') return;
    this.sessionError.set(null);
    try {
      chat.clearError();
      const epoch = this.epoch;
      const current = chat;
      void chat
        .regenerate({
          body: {
            caseToken: token,
            operationId: this.uuid(),
            turnId: lastTurn.id,
            attemptId: this.uuid(),
            intent: 'retry',
          },
        })
        .catch(() => {
          if (epoch !== this.epoch || current !== this.chatInstance()) return;
          this.sessionError.set('Nie udało się ponowić odpowiedzi. Możesz spróbować ponownie albo rozpocząć nową sprawę.');
        });
    } catch {
      this.sessionError.set('Nie udało się ponowić odpowiedzi. Możesz spróbować ponownie albo rozpocząć nową sprawę.');
    }
  }

  async onStopped(): Promise<void> {
    const chat = this.chatInstance();
    if (!chat) return;
    const epoch = this.epoch;
    try {
      await chat.stop();
    } catch {
      // stopping is best effort
    }
    if (epoch !== this.epoch || chat !== this.chatInstance()) return;
    await this.reconcile();
  }

  ngOnDestroy(): void {
    this.epoch += 1;
    this.abortController.abort();
    this.clearRecheckTimer();
    this.setPreview(null);
    const chat = this.chatInstance();
    if (chat) {
      try {
        void chat.stop();
        void chat.dispose();
      } catch {
        // teardown is best effort
      }
    }
  }

  private async startAssessment(submission: IntakeSubmission): Promise<void> {
    if (this.processing() || this.caseView()) return;
    const epoch = ++this.epoch;
    const controller = new AbortController();
    this.abortController = controller;
    this.processing.set(true);
    this.sessionError.set(null);
    this.serverFieldErrors.set({});
    this.stage.set('validation');
    this.setPreview(this.createObjectUrl(submission.file));
    const body = new FormData();
    for (const field of formFields) body.append(field, submission.form[field]);
    body.append('operationId', this.uuid());
    body.append('image', submission.file, submission.file.name);
    this.stage.set('upload');
    try {
      const response = await fetch('/api/assessment', { method: 'POST', body, signal: controller.signal });
      if (epoch !== this.epoch) return;
      if (!response.ok) {
        await this.handleAssessmentProblem(response, epoch);
        return;
      }
      await this.consumeAssessmentStream(response, epoch);
    } catch (error) {
      if (epoch !== this.epoch) return;
      if (this.isAbortError(error)) return;
      this.failIntake('Nie udało się wysłać formularza. Spróbuj ponownie.');
    }
  }

  private async handleAssessmentProblem(response: Response, epoch: number): Promise<void> {
    let problem: AssessmentProblem | null = null;
    try {
      problem = (await response.json()) as AssessmentProblem | null;
    } catch {
      problem = null;
    }
    if (epoch !== this.epoch) return;
    const errors = problem ? problem.errors : undefined;
    const message = problem ? problem.error : undefined;
    if (errors && typeof errors === 'object') this.serverFieldErrors.set({ ...errors });
    this.failIntake(
      message ||
        (errors && Object.keys(errors).length
          ? 'Formularz wymaga poprawy. Popraw zaznaczone pola i spróbuj ponownie.'
          : 'Ocena nie powiodła się. Spróbuj ponownie.'),
    );
  }

  private async consumeAssessmentStream(response: Response, epoch: number): Promise<void> {
    const body = response.body;
    if (!body) {
      this.failIntake('Ocena nie powiodła się. Serwer nie zwrócił danych. Spróbuj ponownie.');
      return;
    }
    const reader = body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let terminal = false;
    const applyLine = (line: string): void => {
      if (terminal) return;
      const trimmed = line.trim();
      if (!trimmed) return;
      let record: AssessmentRecord;
      try {
        record = JSON.parse(trimmed) as AssessmentRecord;
      } catch {
        return;
      }
      terminal = this.applyAssessmentRecord(record, epoch);
    };
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (epoch !== this.epoch) {
        try {
          await reader.cancel();
        } catch {
          // ignore
        }
        return;
      }
      buffer += decoder.decode(value, { stream: true });
      let index = buffer.indexOf('\n');
      while (index >= 0) {
        applyLine(buffer.slice(0, index));
        buffer = buffer.slice(index + 1);
        index = buffer.indexOf('\n');
      }
      if (terminal) {
        try {
          await reader.cancel();
        } catch {
          // ignore
        }
        break;
      }
    }
    if (!terminal) {
      buffer += decoder.decode();
      applyLine(buffer);
    }
    if (epoch !== this.epoch) return;
    if (!terminal) this.failIntake('Ocena nie powiodła się. Serwer nie zwrócił wyniku. Spróbuj ponownie.');
  }

  private applyAssessmentRecord(record: AssessmentRecord, epoch: number): boolean {
    if (epoch !== this.epoch) return false;
    if (record.type === 'stage') {
      if (typeof record.caseToken === 'string' && record.caseToken) this.caseToken.set(record.caseToken);
      if (typeof record.stage === 'string' && record.stage) this.stage.set(record.stage);
      return false;
    }
    if (record.type === 'result') {
      const view = record.case;
      if (!view || typeof view.caseToken !== 'string' || !view.caseToken) {
        this.failIntake('Ocena nie powiodła się. Serwer zwrócił niepełny wynik. Spróbuj ponownie.');
        return true;
      }
      this.caseToken.set(typeof record.caseToken === 'string' && record.caseToken ? record.caseToken : view.caseToken);
      this.caseView.set(view);
      this.processing.set(false);
      void this.startChat(view, epoch);
      return true;
    }
    if (record.type === 'error') {
      const errors = record.errors;
      if (errors && typeof errors === 'object') this.serverFieldErrors.set({ ...errors });
      this.failIntake(
        record.error ||
          (errors && Object.keys(errors).length
            ? 'Formularz wymaga poprawy. Popraw zaznaczone pola i spróbuj ponownie.'
            : 'Ocena nie powiodła się. Spróbuj ponownie.'),
      );
      return true;
    }
    return false;
  }

  private failIntake(message: string): void {
    this.processing.set(false);
    this.sessionError.set(message);
  }

  private async startChat(view: CaseView, epoch: number): Promise<void> {
    const token = this.caseToken();
    this.chatLoading.set(true);
    try {
      const [{ Chat }, { DefaultChatTransport }] = await Promise.all([import('@ai-sdk/angular'), import('ai')]);
      if (epoch !== this.epoch || token !== this.caseToken()) return;
      const chat = new Chat({
        transport: new DefaultChatTransport({
          api: '/api/chat',
          prepareSendMessagesRequest: ({ body }) => ({ body: body ?? {} }),
        }),
        onData: (part: unknown) => this.onChatData(part, epoch),
        onFinish: (result: unknown) => this.onChatFinish(result, epoch),
        onError: (error: unknown) => this.onChatError(error, epoch),
      });
      this.chatLoading.set(false);
      this.chatInstance.set(chat);
      this.sendTurn('intake', this.caseText(view));
    } catch {
      if (epoch !== this.epoch || token !== this.caseToken()) return;
      this.chatLoading.set(false);
      this.chatInstance.set(null);
      this.sessionError.set('Rozmowa jest chwilowo niedostępna. Możesz przejrzeć ocenę albo rozpocząć nową sprawę.');
    }
  }

  private caseText(view: CaseView): string {
    return formLabels.map(([label, field]) => `${label}: ${view.form[field] ?? ''}`).join('\n');
  }

  private sendTurn(intent: 'intake' | 'follow_up' | 'summary', text: string): boolean {
    const chat = this.chatInstance();
    const token = this.caseToken();
    if (!chat || !token || this.isChatBusy(chat)) return false;
    const turnId = this.uuid();
    const messageId = turnId;
    if (intent === 'intake') this.intakeId.set(turnId);
    this.sessionError.set(null);
    try {
      chat.clearError();
      const epoch = this.epoch;
      const current = chat;
      void chat
        .sendMessage(
          { id: messageId, role: 'user', parts: [{ type: 'text', text }] },
          {
            body: {
              caseToken: token,
              operationId: this.uuid(),
              turnId,
              attemptId: this.uuid(),
              intent,
              text,
            },
          },
        )
        .catch(() => {
          if (epoch !== this.epoch || current !== this.chatInstance()) return;
          this.sessionError.set('Nie udało się wysłać wiadomości. Możesz spróbować ponownie albo rozpocząć nową sprawę.');
        });
    } catch {
      this.sessionError.set('Nie udało się wysłać wiadomości. Możesz spróbować ponownie albo rozpocząć nową sprawę.');
      return false;
    }
    return true;
  }

  private isChatBusy(chat: Chat): boolean {
    return ['submitted', 'streaming'].includes(chat.status) || this.caseView()?.operation?.state === 'pending';
  }

  private pruneRejectedUsers(view: CaseView): void {
    const chat = this.chatInstance();
    if (!chat) return;
    if (chat.status !== 'ready' && chat.status !== 'error') return;
    const valid = new Set(view.turns.map((turn) => turn.id).filter((id) => typeof id === 'string' && id));
    const intakeId = this.intakeId();
    if (intakeId) valid.add(intakeId);
    chat.messages = chat.messages.filter((message) => message.role !== 'user' || valid.has(message.id));
  }

  private onChatData(part: unknown, epoch: number): void {
    if (epoch !== this.epoch) return;
    const payload = part as { type?: string; data?: CaseView } | null;
    if (!payload || payload.type !== 'data-case-status' || !payload.data) return;
    const current = this.caseView();
    if (!current || payload.data.caseToken !== current.caseToken) return;
    this.caseRevision += 1;
    this.caseView.set(payload.data);
  }

  private onChatFinish(result: unknown, epoch: number): void {
    if (epoch !== this.epoch) return;
    const info = result as { isAbort?: boolean; isError?: boolean; isDisconnect?: boolean } | null;
    if (info?.isError || info?.isDisconnect) {
      this.sessionError.set('Rozmowa została przerwana. Możesz spróbować ponownie albo rozpocząć nową sprawę.');
    }
    void this.reconcile();
  }

  private onChatError(_error: unknown, epoch: number): void {
    if (epoch !== this.epoch) return;
    this.sessionError.set('Rozmowa nie powiodła się. Możesz spróbować ponownie albo rozpocząć nową sprawę.');
    void this.reconcile();
  }

  private async reconcile(): Promise<void> {
    const token = this.caseToken();
    if (!token || this.reconcileInFlight) return;
    const epoch = this.epoch;
    const caseRevision = this.caseRevision;
    let missingCase = false;
    this.reconcileInFlight = true;
    try {
      const response = await fetch('/api/case', {
        method: 'GET',
        headers: { 'x-case-token': token },
        signal: this.abortController.signal,
      });
      if (epoch !== this.epoch || caseRevision !== this.caseRevision) return;
      if (response.status === 410) {
        missingCase = true;
        this.sessionError.set('Ta sprawa nie jest już dostępna po stronie serwera. Rozpocznij nową sprawę.');
        return;
      }
      if (!response.ok) {
        this.sessionError.set('Nie udało się odświeżyć stanu sprawy. Sprawdź połączenie i spróbuj ponownie.');
        return;
      }
      const view = (await response.json()) as CaseView | null;
      if (epoch !== this.epoch || caseRevision !== this.caseRevision) return;
      if (!view || view.caseToken !== token) return;
      this.caseRevision += 1;
      this.caseView.set(view);
      this.pruneRejectedUsers(view);
    } catch {
      if (epoch === this.epoch) this.sessionError.set('Nie udało się odświeżyć stanu sprawy. Sprawdź połączenie i spróbuj ponownie.');
    } finally {
      if (epoch === this.epoch) {
        this.reconcileInFlight = false;
        if (!missingCase && this.caseView()?.operation?.state === 'pending') this.schedulePendingRecheck(epoch);
        else this.clearRecheckTimer();
      }
    }
  }

  private schedulePendingRecheck(epoch: number): void {
    if (epoch !== this.epoch || this.recheckTimer) return;
    this.recheckTimer = setTimeout(() => {
      this.recheckTimer = null;
      if (epoch === this.epoch) void this.reconcile();
    }, 2000);
  }

  private clearRecheckTimer(): void {
    if (this.recheckTimer) {
      clearTimeout(this.recheckTimer);
      this.recheckTimer = null;
    }
  }

  private async confirmReset(): Promise<void> {
    const token = this.caseToken();
    const epoch = ++this.epoch;
    this.abortController.abort();
    this.abortController = new AbortController();
    this.clearRecheckTimer();
    const chat = this.chatInstance();
    if (chat) {
      try {
        await chat.stop();
      } catch {
        // best effort
      }
      try {
        await chat.dispose();
      } catch {
        // best effort
      }
    }
    let deletionWarning: string | null = null;
    if (token) {
      try {
        const response = await fetch('/api/case', { method: 'DELETE', headers: { 'x-case-token': token } });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
      } catch {
        deletionWarning = 'Nie udało się potwierdzić usunięcia sprawy po stronie serwera. Dane w tej karcie zostały wyczyszczone, ale sprawa może nadal istnieć w serwisie.';
      }
    }
    if (epoch !== this.epoch) return;
    this.clearLocalState();
    this.sessionError.set(deletionWarning);
  }

  private clearLocalState(): void {
    this.clearRecheckTimer();
    this.reconcileInFlight = false;
    this.chatInstance.set(null);
    this.chatLoading.set(false);
    this.caseView.set(null);
    this.caseToken.set(null);
    this.intakeId.set('');
    this.serverFieldErrors.set({});
    this.processing.set(false);
    this.stage.set('validation');
    this.setPreview(null);
    this.intakeGeneration.update((value) => value + 1);
  }

  private setPreview(url: string | null): void {
    const previous = this.previewUrl();
    if (previous && previous !== url) this.revokeObjectUrl(previous);
    this.previewUrl.set(url);
  }

  private createObjectUrl(file: File): string | null {
    try {
      return URL.createObjectURL(file);
    } catch {
      return null;
    }
  }

  private revokeObjectUrl(url: string): void {
    try {
      URL.revokeObjectURL(url);
    } catch {
      // ignore
    }
  }

  private isAbortError(error: unknown): boolean {
    return (error as { name?: string } | null)?.name === 'AbortError';
  }

  private uuid(): string {
    const provider = globalThis.crypto as unknown as { randomUUID?: () => string } | undefined;
    if (provider?.randomUUID) return provider.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
      const random = (Math.random() * 16) | 0;
      const value = char === 'x' ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  }
}
