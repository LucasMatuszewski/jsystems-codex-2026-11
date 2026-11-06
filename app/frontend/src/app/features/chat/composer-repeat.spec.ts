import { TestBed } from '@angular/core/testing';
import { Chat } from '@ai-sdk/angular';
import { ChatView } from './chat-view';
import type { CaseView } from '../case-panel/case-view';

describe('repeated follow-up input', () => {
  it('does not treat an old identical turn as acceptance of a newly submitted message', async () => {
    await TestBed.configureTestingModule({ imports: [ChatView] }).compileComponents();
    const fixture = TestBed.createComponent(ChatView);
    const text = 'Czy rozmowa coś zgłosiła?';
    const prior = { id: 'old-turn', intent: 'follow_up', input: text, attempts: [{ id: 'old-attempt', operationId: 'old-op', status: 'complete', text: 'Nie.' }] };
    const value = { turns: [prior], operation: { state: 'completed' } } as CaseView;
    fixture.componentRef.setInput('value', value);
    fixture.componentRef.setInput('chat', new Chat({ messages: [] }));
    fixture.componentRef.setInput('intakeId', 'intake');
    await fixture.whenStable();
    fixture.componentInstance.draft = text;
    fixture.componentInstance.send();
    // A rejected send reconciles a fresh snapshot containing only the old turn.
    fixture.componentRef.setInput('value', { ...value });
    await fixture.whenStable();
    expect(fixture.componentInstance.draft).toBe(text);
    fixture.componentRef.setInput('value', { ...value, turns: [...value.turns, { ...prior, id: 'new-turn', attempts: [] }] });
    await fixture.whenStable();
    expect(fixture.componentInstance.draft).toBe('');
  });
});
