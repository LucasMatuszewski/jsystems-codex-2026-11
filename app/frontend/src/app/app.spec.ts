import { DeferBlockBehavior, TestBed, type ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Chat } from '@ai-sdk/angular';
import { DefaultChatTransport } from 'ai';
import { App } from './app';
import type { CaseView } from './features/case-panel/case-view';
import { ChatView } from './features/chat/chat-view';
import { Intake } from './features/intake/intake';

describe('PoC application shell', () => {
  it('labels the synthetic-data and session-loss boundaries in Polish', async () => {
    await TestBed.configureTestingModule({ imports: [App], deferBlockBehavior: DeferBlockBehavior.Playthrough }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toContain('Pomoc w zwrocie i reklamacji');
    expect(page.textContent).toContain('dane syntetyczne');
    expect(page.textContent).toContain('Odświeżenie strony usuwa sesję');
    expect(page.textContent).toContain('nie składa zwrotu ani reklamacji');
  });
});

function findButton(root: ParentNode, label: string): HTMLButtonElement | null {
  const buttons = Array.from(root.querySelectorAll('button')) as HTMLButtonElement[];
  return buttons.find((button) => button.textContent?.trim() === label) ?? null;
}

async function settleUntil(fixture: ComponentFixture<App>, predicate: () => boolean, description: string): Promise<void> {
  const deadline = Date.now() + 4000;
  while (Date.now() < deadline) {
    fixture.detectChanges();
    if (predicate()) {
      fixture.detectChanges();
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 15));
  }
  fixture.detectChanges();
  throw new Error(`Nie uzyskano stanu: ${description}`);
}

function testCaseView(): CaseView {
  return {
    caseToken: 'case-1',
    form: {
      requestType: 'Zwrot',
      category: 'Laptop',
      model: 'Model X',
      purchaseDate: '2026-01-02',
      receiptDate: '2026-01-05',
      buyerType: 'Konsument',
      purchaseChannel: 'Sklep internetowy',
      description: 'Urządzenie wyłącza się pod obciążeniem.',
    },
    assessmentDate: '2026-01-06',
    status: 'review_required',
    review: { required: false, reasons: [] },
    findings: {
      daysSinceReceipt: 3,
      withinStatutoryBaseline: true,
      withinCompanyBaseline: true,
      withinComplaintBaseline: true,
      limitations: [],
      sourceIds: [],
      sourceVersion: 'v1',
    },
    turns: [
      {
        id: 'turn-1',
        intent: 'intake',
        input: 'Formularz zgłoszenia',
        attempts: [{ id: 'attempt-1', operationId: 'operation-1', status: 'failed', text: 'Odpowiedź', error: 'Błąd połączenia' }],
      },
    ],
    operation: { id: 'operation-1', kind: 'chat', stage: 'ready_for_chat', state: 'failed' },
  };
}

describe('PoC application session flow', () => {
  let revoked: string[];
  const originalCreateObjectURL = URL.createObjectURL;
  const originalRevokeObjectURL = URL.revokeObjectURL;

  beforeEach(async () => {
    revoked = [];
    (URL as unknown as Record<string, unknown>)['createObjectURL'] = () => 'blob:utworzony';
    (URL as unknown as Record<string, unknown>)['revokeObjectURL'] = (url: string) => revoked.push(url);
    await TestBed.configureTestingModule({ imports: [App], deferBlockBehavior: DeferBlockBehavior.Playthrough }).compileComponents();
  });

  afterEach(() => {
    (URL as unknown as Record<string, unknown>)['createObjectURL'] = originalCreateObjectURL;
    (URL as unknown as Record<string, unknown>)['revokeObjectURL'] = originalRevokeObjectURL;
    document.querySelectorAll('.cdk-overlay-container').forEach((element) => element.remove());
  });

  it('starts with the intake form and an empty session', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('app-intake')).toBeTruthy();
    expect(page.querySelector('app-case-panel')).toBeNull();
    expect(page.querySelector('app-chat-view')).toBeNull();
    expect(page.querySelector('[data-testid="assessment-progress"]')).toBeNull();
    expect(page.querySelector('[data-testid="session-error"]')).toBeNull();
    expect(findButton(page, 'Nowa sprawa')).toBeTruthy();
    expect(fixture.componentInstance.caseView()).toBeNull();
    expect(fixture.componentInstance.caseToken()).toBeNull();
    expect(fixture.componentInstance.intakeId()).toBe('');
    expect(fixture.componentInstance.chatInstance()).toBeNull();
  });

  it('keeps all local state when the reset dialog is cancelled', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const intake = fixture.debugElement.query(By.directive(Intake)).componentInstance as Intake;
    intake.form.description = 'zachowany opis';
    intake.form.model = 'Model X';
    app.caseToken.set('case-token-1');
    app.previewUrl.set('blob:podglad');

    findButton(fixture.nativeElement as HTMLElement, 'Nowa sprawa')!.click();
    await settleUntil(fixture, () => findButton(document.body, 'Rozpocznij nową sprawę') !== null, 'dialog otwarty');
    const dialogText = document.body.textContent ?? '';
    expect(dialogText).toContain('formularz');
    expect(dialogText).toContain('zdjęcie');
    expect(dialogText).toContain('rozmow');
    expect(findButton(document.body, 'Anuluj')).toBeTruthy();

    findButton(document.body, 'Anuluj')!.click();
    await settleUntil(fixture, () => findButton(document.body, 'Rozpocznij nową sprawę') === null, 'dialog zamknięty');

    const current = fixture.debugElement.query(By.directive(Intake)).componentInstance as Intake;
    expect(current).toBe(intake);
    expect(current.form.description).toBe('zachowany opis');
    expect(current.form.model).toBe('Model X');
    expect(app.caseToken()).toBe('case-token-1');
    expect(app.previewUrl()).toBe('blob:podglad');
    expect(app.sessionError()).toBeNull();
    expect(revoked).toEqual([]);
  });

  it('clears local state when a new case is confirmed without a server token', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const intake = fixture.debugElement.query(By.directive(Intake)).componentInstance as Intake;
    intake.form.description = 'do wyczyszczenia';
    intake.form.model = 'Model Y';
    app.previewUrl.set('blob:podglad-2');
    app.intakeId.set('intake-1');
    app.sessionError.set('poprzedni komunikat');
    expect(app.caseToken()).toBeNull();

    findButton(fixture.nativeElement as HTMLElement, 'Nowa sprawa')!.click();
    await settleUntil(fixture, () => findButton(document.body, 'Rozpocznij nową sprawę') !== null, 'dialog otwarty');
    findButton(document.body, 'Rozpocznij nową sprawę')!.click();
    await settleUntil(
      fixture,
      () => {
        const next = fixture.debugElement.query(By.directive(Intake));
        return !!next && next.componentInstance !== intake && !(next.componentInstance as Intake).form.description;
      },
      'formularz zniszczony i utworzony ponownie',
    );

    const next = fixture.debugElement.query(By.directive(Intake)).componentInstance as Intake;
    expect(next.form.description).toBe('');
    expect(next.form.model).toBe('');
    expect(next.file).toBeNull();
    expect(next.preview).toBeNull();
    expect(app.previewUrl()).toBeNull();
    expect(revoked).toContain('blob:podglad-2');
    expect(app.caseToken()).toBeNull();
    expect(app.caseView()).toBeNull();
    expect(app.intakeId()).toBe('');
    expect(app.chatInstance()).toBeNull();
    expect(app.processing()).toBe(false);
    expect(app.sessionError()).toBeNull();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('app-case-panel')).toBeNull();
    expect(page.querySelector('app-chat-view')).toBeNull();
    expect(page.querySelector('[data-testid="assessment-progress"]')).toBeNull();
    expect(page.querySelector('[data-testid="session-error"]')).toBeNull();
  });

  it('renders session errors as escaped plain text', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.componentInstance.sessionError.set('Komunikat z <znacznikiem> i <img src="x">.');
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    const error = page.querySelector('[data-testid="session-error"]');
    expect(error?.textContent).toContain('Komunikat z <znacznikiem>');
    expect(error?.querySelector('img')).toBeNull();
    expect(error?.querySelector('znacznikiem')).toBeNull();
  });
});

describe('PoC chat transcript rendering', () => {
  it('renders chat transcript text as escaped plain text', async () => {
    await TestBed.configureTestingModule({ imports: [ChatView] }).compileComponents();
    const fixture = TestBed.createComponent(ChatView);
    const chat = new Chat({
      transport: new DefaultChatTransport({ api: '/api/chat' }),
      messages: [
        { id: 'msg-1', role: 'user', parts: [{ type: 'text', text: 'opis z <znacznikami>' }] },
        { id: 'msg-2', role: 'assistant', parts: [{ type: 'text', text: 'odpowiedź <b>pogrubiona</b> i <img src="x">' }] },
      ],
    });
    fixture.componentRef.setInput('chat', chat);
    fixture.componentRef.setInput('value', testCaseView());
    fixture.componentRef.setInput('intakeId', 'intake-1');
    await fixture.whenStable();
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    const text = page.textContent ?? '';
    expect(text).toContain('odpowiedź <b>pogrubiona</b>');
    expect(page.querySelector('b')).toBeNull();
    expect(page.querySelector('img')).toBeNull();
  });
});
