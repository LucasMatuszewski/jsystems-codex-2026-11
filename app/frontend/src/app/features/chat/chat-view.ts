import { Component, input, output } from '@angular/core';
import type { Chat } from '@ai-sdk/angular';
import type { CaseView } from '../case-panel/case-view';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({ selector: 'app-chat-view', imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule], templateUrl: './chat-view.html', styleUrl: './chat-view.scss' })
export class ChatView {
  readonly chat = input.required<Chat>();
  readonly value = input.required<CaseView>();
  readonly intakeId = input.required<string>();
  readonly sent = output<string>();
  readonly summary = output<void>();
  readonly retry = output<void>();
  readonly stopped = output<void>();
  draft = '';
  private pendingInput: string | null = null;
  private pendingBaseTurnIds = new Set<string>();
  ngDoCheck() { this.acceptPendingInput(); }
  get busy() { return ['submitted', 'streaming'].includes(this.chat().status) || this.value().operation?.state === 'pending'; }
  get incomplete() { return this.value().turns.flatMap(turn => turn.attempts).filter(attempt => ['failed', 'cancelled', 'partial'].includes(attempt.status)); }
  get visibleMessages() { const hidden = new Set(this.incomplete.map(attempt => attempt.id)); return this.chat().messages.filter(message => !(message.role === 'assistant' && hidden.has(message.id))); }
  get canRetry() { return !this.busy && ['failed', 'cancelled'].includes(this.value().turns.at(-1)?.attempts.at(-1)?.status ?? ''); }
  incompleteLabel(status: string) { return status === 'cancelled' ? 'przerwana' : status === 'partial' ? 'urwana' : 'błąd generowania'; }
  send() {
    const text = this.draft.trim();
    if (this.busy || !text) return;
    this.pendingInput = text;
    this.pendingBaseTurnIds = new Set(this.value().turns.map(turn => turn.id));
    this.sent.emit(text);
  }
  private acceptPendingInput() {
    const pending = this.pendingInput;
    if (pending === null) return;
    const accepted = this.value().turns.some(
      turn => turn.intent === 'follow_up' && turn.input.trim() === pending && !this.pendingBaseTurnIds.has(turn.id),
    );
    if (!accepted) return;
    this.pendingInput = null;
    this.pendingBaseTurnIds = new Set<string>();
    if (this.draft.trim() === pending) this.draft = '';
  }
}
