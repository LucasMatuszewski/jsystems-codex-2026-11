import { TestBed } from '@angular/core/testing';
import { CasePanel } from './case-panel';
import type { CaseView } from './case-view';

// Pure browser rendering state, not an endpoint or provider mock.
export const view: CaseView = { caseToken: 'rendering-only', form: { requestType: 'Zwrot', category: 'Laptop', model: '<script>bad()</script>' }, assessmentDate: '2026-11-06', status: 'review_required', review: { required: true, reasons: [{ code: 'business', message: 'Potrzebna weryfikacja pracownika.', origin: 'policy' }] }, findings: { daysSinceReceipt: 2, withinStatutoryBaseline: true, withinCompanyBaseline: true, withinComplaintBaseline: true, limitations: ['Nie jest to zgłoszenie.'], sourceIds: ['S1'], sourceVersion: '2026-11-06' }, turns: [], assessment: { decision: { available: true, model: 'model-rendering', observations: [{ id: 'visible_cracks', probability: null, evidenceStatus: 'insufficient', limitations: ['Niewidoczne powierzchnie.'], conflicts: [], modelVersion: 'model-rendering', questionVersion: 'q1', imagePipelineVersion: 'p1' }] }, escalation: null, image: { sourceWidth: 387, sourceHeight: 516, width: 387, height: 516, inputBytes: 1000, outputBytes: 800, limitations: ['Kompresja może ukryć drobne szczegóły.'], pipelineVersion: 'p1' }, sourceVersions: { version: '2026-11-06', procedureSha256: 'rendering-only', instructionSha256: 'rendering-only' } } };

const guidance = (requestType: 'Zwrot' | 'Reklamacja'): CaseView => ({ ...view, status: requestType === 'Zwrot' ? 'return_guidance' : 'complaint_guidance', form: { ...view.form, requestType }, review: { required: false, reasons: [] } });

describe('authoritative case panel', () => {
  it('retains review without chat, distinguishes unknown probability and escapes customer HTML', async () => {
    await TestBed.configureTestingModule({ imports: [CasePanel] }).compileComponents();
    const fixture = TestBed.createComponent(CasePanel);
    fixture.componentRef.setInput('value', view);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Wymagana weryfikacja przez pracownika');
    expect(element.textContent).toContain('brak wspieranej wartości');
    expect(element.textContent).not.toContain('0%');
    expect(element.textContent).toContain('Niewidoczne powierzchnie');
    expect(element.textContent).toContain('<script>bad()</script>');
    expect(element.querySelector('script')).toBeNull();
  });

  it('renders the exact PRD label for every outcome and keeps review priority over guidance', async () => {
    await TestBed.configureTestingModule({ imports: [CasePanel] }).compileComponents();
    const fixture = TestBed.createComponent(CasePanel);
    const element = fixture.nativeElement as HTMLElement;

    fixture.componentRef.setInput('value', view);
    await fixture.whenStable();
    expect(element.textContent).toContain('Wymagana weryfikacja przez pracownika');
    expect(element.textContent).not.toContain('Wymagana weryfikacja pracownika');
    expect(element.textContent).toContain('nie przekazanie sprawy');

    fixture.componentRef.setInput('value', guidance('Zwrot'));
    await fixture.whenStable();
    expect(element.textContent).toContain('Wstępna rekomendacja: procedura zwrotu');
    expect(element.textContent).not.toContain('Wstępne wskazówki dotyczące zwrotu');
    expect(element.textContent).not.toContain('Wymagana weryfikacja przez pracownika');
    expect(element.textContent).toContain('nie przekazanie sprawy');

    fixture.componentRef.setInput('value', guidance('Reklamacja'));
    await fixture.whenStable();
    expect(element.textContent).toContain('Wstępna rekomendacja: procedura reklamacji');
    expect(element.textContent).not.toContain('Wstępne wskazówki dotyczące reklamacji');
    expect(element.textContent).toContain('nie przekazanie sprawy');

    // Review priority persists even when the case is otherwise return guidance.
    fixture.componentRef.setInput('value', { ...guidance('Zwrot'), status: 'return_guidance', review: { required: true, reasons: [{ code: 'policy', message: 'Weryfikacja wymagana.', origin: 'policy' }] } });
    await fixture.whenStable();
    expect(element.textContent).toContain('Wymagana weryfikacja przez pracownika');
    expect(element.textContent).not.toContain('Wstępna rekomendacja: procedura zwrotu');
  });
});
