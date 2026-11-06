import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ResetDialog } from './reset-dialog';

function findButton(label: string): HTMLButtonElement | null {
  const buttons = Array.from(document.body.querySelectorAll('button')) as HTMLButtonElement[];
  return buttons.find((button) => button.textContent?.trim() === label) ?? null;
}

async function waitForDialog(): Promise<boolean> {
  const deadline = Date.now() + 4000;
  while (Date.now() < deadline) {
    if (findButton('Rozpocznij nową sprawę')) return true;
    await new Promise((resolve) => setTimeout(resolve, 15));
  }
  return false;
}

describe('ResetDialog', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [MatDialogModule, ResetDialog] }).compileComponents();
  });

  afterEach(() => {
    document.querySelectorAll('.cdk-overlay-container').forEach((element) => element.remove());
  });

  it('explains what a new case deletes and offers both decisions', async () => {
    TestBed.inject(MatDialog).open(ResetDialog);
    expect(await waitForDialog()).toBe(true);
    const text = document.body.textContent ?? '';
    expect(text).toContain('Rozpocząć nową sprawę?');
    expect(text).toContain('formularz');
    expect(text).toContain('zdjęcie');
    expect(text).toContain('rozmow');
    expect(text).toContain('usuwa');
    expect(text).toContain('Anuluj');
    expect(findButton('Anuluj')).toBeTruthy();
    expect(findButton('Rozpocznij nową sprawę')).toBeTruthy();
  });

  it('closes without deleting when cancelled', async () => {
    const ref = TestBed.inject(MatDialog).open(ResetDialog);
    expect(await waitForDialog()).toBe(true);
    const closed = new Promise<unknown>((resolve) => ref.afterClosed().subscribe((value) => resolve(value)));
    findButton('Anuluj')!.click();
    expect(await closed).toBe(false);
  });

  it('closes with confirmation when a new case is requested', async () => {
    const ref = TestBed.inject(MatDialog).open(ResetDialog);
    expect(await waitForDialog()).toBe(true);
    const closed = new Promise<unknown>((resolve) => ref.afterClosed().subscribe((value) => resolve(value)));
    findButton('Rozpocznij nową sprawę')!.click();
    expect(await closed).toBe(true);
  });
});
