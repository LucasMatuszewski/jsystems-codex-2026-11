import { TestBed } from '@angular/core/testing';
import { Intake } from './intake';
import { readFile } from 'node:fs/promises';

describe('Case intake', () => {
  async function setup() {
    await TestBed.configureTestingModule({ imports: [Intake] }).compileComponents();
    const fixture = TestBed.createComponent(Intake);
    await fixture.whenStable();
    return { fixture, page: fixture.nativeElement as HTMLElement };
  }

  it('offers exactly the specified request and equipment choices with visible labels', async () => {
    const { page } = await setup();
    const choices = (name: string) => Array.from(page.querySelectorAll<HTMLOptionElement>(`select[name="${name}"] option`))
      .filter(option => option.value).map(option => option.textContent?.trim());
    expect(choices('requestType')).toEqual(['Zwrot', 'Reklamacja']);
    expect(choices('category')).toEqual(['Laptop', 'Smartfon', 'Monitor', 'Akcesorium komputerowe']);
    for (const label of ['Rodzaj sprawy', 'Kategoria sprzętu', 'Nazwa/model sprzętu', 'Data zakupu', 'Data otrzymania', 'Rodzaj kupującego', 'Kanał zakupu', 'Zdjęcie urządzenia']) {
      expect(page.textContent).toContain(label);
    }
  });

  it('requires a complaint description, preserves fields on errors and keeps a return reason optional', async () => {
    const { fixture, page } = await setup();
    const change = async (name: string, value: string) => {
      const control = page.querySelector<HTMLInputElement | HTMLSelectElement>(`[name="${name}"]`);
      expect(control).not.toBeNull();
      control!.value = value;
      control!.dispatchEvent(new Event(control!.tagName === 'SELECT' ? 'change' : 'input', { bubbles: true }));
      fixture.detectChanges();
      await fixture.whenStable();
    };
    await change('model', 'Urządzenie testowe');
    await change('requestType', 'Reklamacja');
    const description = page.querySelector<HTMLTextAreaElement>('textarea[name="description"]')!;
    expect(description.required).toBe(true);
    page.querySelector('form')!.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(page.textContent).toMatch(/opis.*wymagany/i);
    await vi.waitFor(() => expect(document.activeElement).toBe(page.querySelector('[role="alert"]')));
    expect(page.querySelector<HTMLInputElement>('[name="model"]')?.value).toBe('Urządzenie testowe');
    await change('requestType', 'Zwrot');
    expect(description.required).toBe(false);
    expect(description.value).toBe('');
  });

  it('prevents another submit while assessment is pending', async () => {
    const { fixture, page } = await setup();
    fixture.componentRef.setInput('busy', true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(page.querySelector<HTMLButtonElement>('button[type="submit"]')?.disabled).toBe(true);
  });

  it('focuses returned field errors and retains the entered model', async () => {
    const { fixture, page } = await setup();
    const model = page.querySelector<HTMLInputElement>('[name=model]')!;
    model.value = 'Zachowany model';
    model.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.componentRef.setInput('serverErrors', { image: 'Zastąp zdjęcie: nie udało się go odczytać.' });
    fixture.detectChanges();
    await fixture.whenStable();
    expect(page.textContent).toContain('Zastąp zdjęcie');
    expect(model.value).toBe('Zachowany model');
    await vi.waitFor(() => expect(document.activeElement).toBe(page.querySelector('[role="alert"]')));
  });

  it('previews the reviewed real photo, emits a copy of form facts and releases replaced previews', async () => {
    const create = vi.fn().mockReturnValueOnce('blob:first').mockReturnValueOnce('blob:second');
    const revoke = vi.fn();
    const BrowserURL = URL;
    vi.stubGlobal('URL', class extends BrowserURL { static override createObjectURL = create; static override revokeObjectURL = revoke; });
    const { fixture, page } = await setup();
    try {
      const bytes = new Uint8Array(await readFile('../../assets/example-images/phone-2.jpeg'));
      const file = new File([bytes], 'phone-2.jpeg', { type: 'image/jpeg' });
      const upload = page.querySelector<HTMLInputElement>('input[type=file]')!;
      const choose = async () => {
        Object.defineProperty(upload, 'files', { value: [file], configurable: true });
        upload.dispatchEvent(new Event('change', { bubbles: true }));
        fixture.detectChanges();
        await fixture.whenStable();
      };
      await choose();
      expect(page.querySelector('img')?.getAttribute('src')).toBe('blob:first');
      await choose();
      expect(revoke).toHaveBeenCalledWith('blob:first');
      expect(page.querySelector('img')?.getAttribute('src')).toBe('blob:second');
      const values: Record<string, string> = {
        requestType: 'Zwrot', category: 'Smartfon', model: '  Urządzenie testowe  ',
        purchaseDate: '2026-03-05', receiptDate: '2026-03-06', buyerType: 'Konsument', purchaseChannel: 'Na odległość',
      };
      for (const [name, value] of Object.entries(values)) {
        const control = page.querySelector<HTMLInputElement | HTMLSelectElement>(`[name="${name}"]`)!;
        control.value = value;
        control.dispatchEvent(new Event(control.tagName === 'SELECT' ? 'change' : 'input', { bubbles: true }));
      }
      fixture.detectChanges();
      await fixture.whenStable();
      const submitted = vi.fn();
      fixture.componentInstance.submitted.subscribe(submitted);
      page.querySelector('form')!.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      expect(submitted).toHaveBeenCalledTimes(1);
      const packet = submitted.mock.calls[0][0];
      expect(packet.file).toBe(file);
      expect(packet.form.model).toBe('Urządzenie testowe');
      expect(packet.form.description).toBe('');
      const model = page.querySelector<HTMLInputElement>('[name=model]')!;
      model.value = 'Późniejsza zmiana';
      model.dispatchEvent(new Event('input', { bubbles: true }));
      expect(packet.form.model).toBe('Urządzenie testowe');
      fixture.destroy();
      expect(revoke).toHaveBeenCalledWith('blob:second');
    } finally { vi.unstubAllGlobals(); }
  });

  it('rejects multiple, oversized and unsupported files without losing other fields', async () => {
    const { fixture, page } = await setup();
    const model = page.querySelector<HTMLInputElement>('[name=model]')!;
    model.value = 'Zachowany model';
    model.dispatchEvent(new Event('input', { bubbles: true }));
    const bytes = new Uint8Array(await readFile('../../assets/example-images/phone-2.jpeg'));
    const original = new File([bytes], 'phone-2.jpeg', { type: 'image/jpeg' });
    // Local invalid size/MIME mutations, never uploaded to a provider.
    const tooLarge = new File([new Uint8Array(10_000_001)], 'invalid-size.jpeg', { type: 'image/jpeg' });
    const unsupported = new File([bytes], 'phone-2.jpeg', { type: 'image/gif' });
    const upload = page.querySelector<HTMLInputElement>('input[type=file]')!;
    for (const [files, message] of [
      [[original, original], 'dokładnie jedno'], [[tooLarge], '10 000 000'], [[unsupported], 'JPEG, PNG lub WebP'],
    ] as Array<[File[], string]>) {
      Object.defineProperty(upload, 'files', { value: files, configurable: true });
      upload.dispatchEvent(new Event('change', { bubbles: true }));
      fixture.detectChanges();
      await fixture.whenStable();
      expect(page.textContent).toContain(message);
      expect(page.querySelector('img')).toBeNull();
      expect(model.value).toBe('Zachowany model');
    }
  });
});
