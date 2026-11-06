import { TestBed } from '@angular/core/testing';
import { Chat } from '@ai-sdk/angular';
import { ChatView } from './chat-view';
import type { CaseView } from '../case-panel/case-view';

const baseView = (overrides: Partial<CaseView> = {}): CaseView => ({
  caseToken: 'rendering-only',
  form: { requestType: 'Zwrot', category: 'Laptop', model: 'Model testowy' },
  assessmentDate: '2026-11-06',
  review: { required: false, reasons: [] },
  findings: { daysSinceReceipt: 2, withinStatutoryBaseline: true, withinCompanyBaseline: true, withinComplaintBaseline: true, limitations: [], sourceIds: ['S1'], sourceVersion: '2026-11-06' },
  turns: [],
  ...overrides
});

const occurrences = (text: string | null, needle: string) => (text ?? '').split(needle).length - 1;

describe('SDK message presentation', () => {
  it('hides genuine intake, renders escaped text only and retains failed partial attempts beside retry', async () => {
    await TestBed.configureTestingModule({ imports: [ChatView] }).compileComponents();
    const fixture = TestBed.createComponent(ChatView);
    const chat = new Chat({ messages: [{ id: 'intake', role: 'user', parts: [{ type: 'text', text: 'Formularz sprawy: ukryty formularz' }] }, { id: 'answer', role: 'assistant', parts: [{ type: 'text', text: '<b>Zażółć gęślą jaźń</b> https://foreign.example' }] }] });
    fixture.componentRef.setInput('chat', chat);
    fixture.componentRef.setInput('intakeId', 'intake');
    fixture.componentRef.setInput('value', { turns: [{ id: 'intake', intent: 'intake', input: 'actual form', attempts: [{ id: 'partial', operationId: 'op', status: 'cancelled', text: 'Urwany tekst' }] }], operation: { state: 'cancelled' } } as CaseView);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).not.toContain('ukryty formularz');
    expect(element.textContent).toContain('<b>Zażółć gęślą jaźń</b>');
    expect(element.querySelector('b')).toBeNull();
    expect(element.querySelector('a')).toBeNull();
    expect(element.textContent).toContain('Urwany tekst');
    expect(element.textContent).toContain('Niepełna odpowiedź');
    expect(element.textContent).toContain('Ponów odpowiedź');
  });
});

describe('canonical follow-up acceptance', () => {
  it('trims the submission and guards blank or busy sends without clearing the composer', async () => {
    await TestBed.configureTestingModule({ imports: [ChatView] }).compileComponents();
    const fixture = TestBed.createComponent(ChatView);
    fixture.componentRef.setInput('chat', new Chat({ messages: [] }));
    fixture.componentRef.setInput('value', baseView());
    fixture.componentRef.setInput('intakeId', 'intake');
    fixture.detectChanges();
    await fixture.whenStable();
    const sent: string[] = [];
    fixture.componentInstance.sent.subscribe(text => sent.push(text));

    fixture.componentInstance.draft = '   ';
    fixture.componentInstance.send();
    expect(sent).toEqual([]);
    expect(fixture.componentInstance.draft).toBe('   ');

    fixture.componentRef.setInput('value', baseView({ operation: { id: 'op-1', kind: 'follow_up', stage: 'generate', state: 'pending' } }));
    fixture.detectChanges();
    fixture.componentInstance.draft = 'Pytanie podczas przetwarzania';
    fixture.componentInstance.send();
    expect(sent).toEqual([]);
    expect(fixture.componentInstance.draft).toBe('Pytanie podczas przetwarzania');

    fixture.componentRef.setInput('value', baseView());
    fixture.detectChanges();
    fixture.componentInstance.draft = '  Kiedy mija termin?  ';
    fixture.componentInstance.send();
    expect(sent).toEqual(['Kiedy mija termin?']);
    expect(fixture.componentInstance.draft).toBe('  Kiedy mija termin?  ');
  });

  it('keeps the composer until the canonical CaseView confirms the accepted follow_up input', async () => {
    await TestBed.configureTestingModule({ imports: [ChatView] }).compileComponents();
    const fixture = TestBed.createComponent(ChatView);
    fixture.componentRef.setInput('chat', new Chat({ messages: [] }));
    fixture.componentRef.setInput('value', baseView());
    fixture.componentRef.setInput('intakeId', 'intake');
    fixture.detectChanges();
    await fixture.whenStable();
    const sent: string[] = [];
    fixture.componentInstance.sent.subscribe(text => sent.push(text));

    fixture.componentInstance.draft = 'Kiedy mija termin?';
    fixture.componentInstance.send();
    expect(sent).toEqual(['Kiedy mija termin?']);
    expect(fixture.componentInstance.draft).toBe('Kiedy mija termin?');

    // Optimistic SDK state alone must not clear the composer.
    fixture.componentRef.setInput('chat', new Chat({ messages: [{ id: 'optimistic', role: 'user', parts: [{ type: 'text', text: 'Kiedy mija termin?' }] }] }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.draft).toBe('Kiedy mija termin?');

    fixture.componentRef.setInput('value', baseView({ turns: [{ id: 'turn-1', intent: 'follow_up', input: 'inne pytanie', attempts: [] }] }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.draft).toBe('Kiedy mija termin?');

    fixture.componentRef.setInput('value', baseView({ turns: [{ id: 'turn-1', intent: 'follow_up', input: 'inne pytanie', attempts: [] }, { id: 'turn-2', intent: 'follow_up', input: 'Kiedy mija termin?', attempts: [] }] }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.draft).toBe('');
  });
});

describe('incomplete attempts', () => {
  it('shows each canonical incomplete attempt exactly once and hides the matching SDK assistant entry', async () => {
    await TestBed.configureTestingModule({ imports: [ChatView] }).compileComponents();
    const fixture = TestBed.createComponent(ChatView);
    fixture.componentRef.setInput('chat', new Chat({ messages: [{ id: 'intake', role: 'user', parts: [{ type: 'text', text: 'Formularz sprawy' }] }, { id: 'attempt-1', role: 'assistant', parts: [{ type: 'text', text: 'Urwany tekst' }] }, { id: 'retry-1', role: 'assistant', parts: [{ type: 'text', text: 'Pełna odpowiedź po ponowieniu' }] }] }));
    fixture.componentRef.setInput('intakeId', 'intake');
    fixture.componentRef.setInput('value', baseView({ turns: [{ id: 'turn-1', intent: 'follow_up', input: 'Pytanie', attempts: [{ id: 'attempt-1', operationId: 'op-1', status: 'partial', text: 'Urwany tekst' }] }] }));
    fixture.detectChanges();
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    expect(occurrences(element.textContent, 'Urwany tekst')).toBe(1);
    expect(element.textContent).toContain('Niepełna odpowiedź');
    expect(element.textContent).toContain('Pełna odpowiedź po ponowieniu');

    // Regeneration drops the SDK partial message; the saved attempt stays visible once.
    fixture.componentRef.setInput('chat', new Chat({ messages: [{ id: 'intake', role: 'user', parts: [{ type: 'text', text: 'Formularz sprawy' }] }, { id: 'retry-1', role: 'assistant', parts: [{ type: 'text', text: 'Pełna odpowiedź po ponowieniu' }] }] }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(occurrences(element.textContent, 'Urwany tekst')).toBe(1);
  });

  it('keeps streaming text visible while the canonical view only carries pending state', async () => {
    await TestBed.configureTestingModule({ imports: [ChatView] }).compileComponents();
    const fixture = TestBed.createComponent(ChatView);
    fixture.componentRef.setInput('chat', new Chat({ messages: [{ id: 'stream-1', role: 'assistant', parts: [{ type: 'text', text: 'Tekst odpowiedzi w trakcie' }] }] }));
    fixture.componentRef.setInput('intakeId', 'intake');
    fixture.componentRef.setInput('value', baseView({ turns: [{ id: 'turn-1', intent: 'follow_up', input: 'Pytanie', attempts: [{ id: 'attempt-1', operationId: 'op-1', status: 'pending', text: '' }] }] }));
    fixture.detectChanges();
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Tekst odpowiedzi w trakcie');
    expect(element.textContent).not.toContain('Niepełna odpowiedź');
  });
});
