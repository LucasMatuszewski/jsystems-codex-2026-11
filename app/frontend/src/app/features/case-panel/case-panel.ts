import { Component, input } from '@angular/core';
import type { CaseView } from './case-view';
import { MatCardModule } from '@angular/material/card';
@Component({ selector: 'app-case-panel', imports: [MatCardModule], templateUrl: './case-panel.html', styleUrl: './case-panel.scss' })
export class CasePanel {
  readonly value = input.required<CaseView>();
  readonly preview = input<string | null>(null);
  readonly labels: Record<string, string> = { image_usable: 'Czy zdjęcie nadaje się do oceny widocznych obszarów?', item_relevant: 'Czy widoczny przedmiot odpowiada deklarowanej kategorii?', visible_cracks: 'Widoczne pęknięcia', visible_dents: 'Widoczne wgniecenia', visible_scratches: 'Widoczne rysy' };
  get statusLabel(): string {
    const view = this.value();
    if (view.review.required) return 'Wymagana weryfikacja przez pracownika';
    return view.form['requestType'] === 'Zwrot' ? 'Wstępna rekomendacja: procedura zwrotu' : 'Wstępna rekomendacja: procedura reklamacji';
  }
  probability(value: number | null) { return value === null ? 'brak wspieranej wartości' : `${new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 12 }).format(value * 100)}%`; }
  evidence(value: string) { return value === 'supported' ? 'dowody wspierają ocenę w kadrze' : value === 'conflicting' ? 'sprzeczne dowody' : 'niewystarczające dowody'; }
}
