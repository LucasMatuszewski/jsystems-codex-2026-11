import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('PoC application shell', () => {
  it('labels the synthetic-data and session-loss boundaries in Polish', async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toContain('Pomoc w zwrocie i reklamacji');
    expect(page.textContent).toContain('dane syntetyczne');
    expect(page.textContent).toContain('Odświeżenie strony usuwa sesję');
    expect(page.textContent).toContain('nie składa zwrotu ani reklamacji');
  });
});
