import { Component, ElementRef, OnDestroy, ViewChild, effect, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

export interface IntakeSubmission {
  form: Record<'requestType' | 'category' | 'model' | 'purchaseDate' | 'receiptDate' | 'buyerType' | 'purchaseChannel' | 'description', string>;
  file: File;
}

const labels: Record<string, string> = {
  requestType: 'Rodzaj sprawy', category: 'Kategoria sprzętu', model: 'Nazwa/model sprzętu',
  purchaseDate: 'Data zakupu', receiptDate: 'Data otrzymania', buyerType: 'Rodzaj kupującego', purchaseChannel: 'Kanał zakupu',
};

@Component({
  selector: 'app-intake',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './intake.html',
  styleUrl: './intake.scss',
})
export class Intake implements OnDestroy {
  readonly busy = input(false);
  readonly serverErrors = input<Record<string, string>>({});
  readonly submitted = output<IntakeSubmission>();
  @ViewChild('errorSummary') private summary?: ElementRef<HTMLElement>;
  readonly today = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Warsaw', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
  form: IntakeSubmission['form'] = { requestType: '', category: '', model: '', purchaseDate: '', receiptDate: '', buyerType: '', purchaseChannel: '', description: '' };
  errors: Record<string, string> = {};
  file: File | null = null;
  preview: string | null = null;

  constructor() {
    effect(() => {
      this.errors = { ...this.serverErrors() };
      if (Object.keys(this.errors).length) setTimeout(() => this.summary?.nativeElement.focus());
    });
  }

  get errorEntries() { return Object.entries(this.errors); }

  clearError(field: string) { delete this.errors[field]; }

  requestChanged() {
    this.clearError('requestType');
    this.clearError('description');
  }

  chooseImage(event: Event) {
    if (this.busy()) return;
    const control = event.target as HTMLInputElement;
    const files = control.files;
    this.removeImage();
    if (!files?.length) return;
    if (files.length !== 1) this.errors['image'] = 'Dodaj dokładnie jedno zdjęcie.';
    else if (files[0].size > 10_000_000) this.errors['image'] = 'Zdjęcie może mieć maksymalnie 10 000 000 bajtów.';
    else if (!['image/jpeg', 'image/png', 'image/webp'].includes(files[0].type)) this.errors['image'] = 'Wybierz zdjęcie JPEG, PNG lub WebP.';
    else {
      this.file = files[0];
      this.preview = URL.createObjectURL(this.file);
    }
    control.value = '';
  }

  removeImage() {
    if (this.preview) URL.revokeObjectURL(this.preview);
    this.preview = null;
    this.file = null;
    this.clearError('image');
  }

  submit() {
    if (this.busy()) return;
    this.errors = {};
    for (const field of Object.keys(labels)) {
      if (!this.form[field as keyof typeof this.form].trim()) this.errors[field] = `${labels[field]}: uzupełnij pole.`;
    }
    if (this.form.requestType === 'Reklamacja' && !this.form.description.trim()) this.errors['description'] = 'Opis objawów jest wymagany dla reklamacji.';
    for (const field of ['purchaseDate', 'receiptDate'] as const) {
      if (this.form[field] > this.today) this.errors[field] = 'Data nie może być z przyszłości.';
    }
    if (this.form.purchaseDate && this.form.receiptDate && this.form.receiptDate < this.form.purchaseDate) this.errors['receiptDate'] = 'Data otrzymania nie może poprzedzać daty zakupu.';
    if (!this.file) this.errors['image'] = 'Dodaj jedno zdjęcie urządzenia.';
    if (this.errorEntries.length) {
      setTimeout(() => this.summary?.nativeElement.focus());
      return;
    }
    const form = Object.fromEntries(Object.entries(this.form).map(([key, value]) => [key, value.trim()])) as IntakeSubmission['form'];
    this.submitted.emit({ form, file: this.file! });
  }

  ngOnDestroy() { if (this.preview) URL.revokeObjectURL(this.preview); }
}
