import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-dialog',
  imports: [MatButtonModule, MatDialogModule],
  styles: [
    `
      h2 { margin: 0 0 12px; font-size: 20px; font-weight: 600; }
      p { margin: 0 0 8px; line-height: 22px; }
      [mat-dialog-actions] { margin-top: 16px; }
    `,
  ],
  template: `
    <h2 mat-dialog-title>Rozpocząć nową sprawę?</h2>
    <mat-dialog-content>
      <p>Rozpoczęcie nowej sprawy usuwa wypełniony formularz, dodane zdjęcie, historię rozmowy i zapisaną sprawę po stronie serwera.</p>
      <p>Tej operacji nie można cofnąć. Jeśli wybierzesz "Anuluj", obecna sprawa, formularz, zdjęcie i rozmowa pozostaną bez zmian.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button type="button" (click)="cancel()">Anuluj</button>
      <button mat-flat-button type="button" (click)="confirm()">Rozpocznij nową sprawę</button>
    </mat-dialog-actions>
  `,
})
export class ResetDialog {
  private readonly dialogRef = inject<MatDialogRef<ResetDialog, boolean>>(MatDialogRef);

  cancel(): void {
    this.dialogRef.close(false);
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
}
