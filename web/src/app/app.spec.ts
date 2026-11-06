import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('Synthetic staff workspace', () => {
  it('keeps synthetic-data and staff-decision limitations visible', async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Synthetic cases only');
    expect(fixture.nativeElement.textContent).toContain('Staff make every final decision');
  });
});
