# T13 Evaluation — First Slice

- Labels reviewedOn: 2026-11-06; original SHA-256 values recorded per case in results.json.
- Reviewer: Coordinating agent visual inspection of original supplied pixels
- Scope: Provisional visual annotations for this demonstration only; not a calibrated development or held-out set, physical inspection, identity or functionality verification. Never include these labels or filenames in a model prompt.
- Model provenance (per case, from result.model / observation questionVersion / prepared image pipelineVersion):
  - case 1: decision model `openai/gpt-6-luna-decisions-20261006`, questionVersion `first-slice-questions-v1`, image pipeline `jpeg1568-q85-v1`, escalation model `openai/gpt-6-luna`
  - case 2: decision model `openai/gpt-6-luna-decisions-20261006`, questionVersion `first-slice-questions-v1`, image pipeline `jpeg1568-q85-v1`, escalation model `openai/gpt-6-luna`
- Pipeline provenance: direct module calls via compiled backend dist; one decisions round per case and at most one escalation round.
- No labels, filenames or expected routes were sent to any model.

## Case 1 — laptop-2.webp (Laptop, Zwrot)

| Observation | Provisional label | Evaluable | Actual probability | Evidence status | Basis | Limitations | Conflicts |
| --- | --- | --- | --- | --- | --- | --- | --- |
| image_usable | true | true | 1 | supported | model_estimate, scope=pictured_areas, imageSha256=f8f958dae49282c1c6ef2a82555f4ee437c428c400c619aac28c3ee48a62431a | Ocena tylko na podstawie jednego widoku.; Dokładna tożsamość przedmiotu niezweryfikowana.; Bez diagnozy funkcjonalnej i przyczynowej.; Kompresja zdjęcia może ograniczyć widoczność drobnych szczegółów. Brak widocznego uszkodzenia nie potwierdza jego braku. | none recorded |
| item_relevant | true | true | 0.98 | supported | model_estimate, scope=pictured_areas, imageSha256=f8f958dae49282c1c6ef2a82555f4ee437c428c400c619aac28c3ee48a62431a | Ocena tylko na podstawie jednego widoku.; Dokładna tożsamość przedmiotu niezweryfikowana.; Bez diagnozy funkcjonalnej i przyczynowej.; Kompresja zdjęcia może ograniczyć widoczność drobnych szczegółów. Brak widocznego uszkodzenia nie potwierdza jego braku. | none recorded |
| visible_cracks | false | true | 0.02 | supported | model_estimate, scope=pictured_areas, imageSha256=f8f958dae49282c1c6ef2a82555f4ee437c428c400c619aac28c3ee48a62431a | Ocena tylko na podstawie jednego widoku.; Dokładna tożsamość przedmiotu niezweryfikowana.; Bez diagnozy funkcjonalnej i przyczynowej.; Kompresja zdjęcia może ograniczyć widoczność drobnych szczegółów. Brak widocznego uszkodzenia nie potwierdza jego braku. | none recorded |
| visible_dents | null | false | null | insufficient | model_estimate, scope=pictured_areas, imageSha256=f8f958dae49282c1c6ef2a82555f4ee437c428c400c619aac28c3ee48a62431a | Ocena tylko na podstawie jednego widoku.; Dokładna tożsamość przedmiotu niezweryfikowana.; Bez diagnozy funkcjonalnej i przyczynowej.; Kompresja zdjęcia może ograniczyć widoczność drobnych szczegółów. Brak widocznego uszkodzenia nie potwierdza jego braku. | none recorded |
| visible_scratches | null | false | 0.29 | supported | model_estimate, scope=pictured_areas, imageSha256=f8f958dae49282c1c6ef2a82555f4ee437c428c400c619aac28c3ee48a62431a | Ocena tylko na podstawie jednego widoku.; Dokładna tożsamość przedmiotu niezweryfikowana.; Bez diagnozy funkcjonalnej i przyczynowej.; Kompresja zdjęcia może ograniczyć widoczność drobnych szczegółów. Brak widocznego uszkodzenia nie potwierdza jego braku. | none recorded |

Provisional scope notes: image_usable: Coarse visible front/top areas only; lower/rear surfaces are unpictured. | item_relevant: Broad laptop category; declared exact model will be unknown, no exact identity verification. | visible_cracks: No conspicuous cracks established in the pictured screen/frame/top housing; fine or hidden cracks are not ruled out. | visible_dents: Angle, shading and detail do not reliably establish small dents. | visible_scratches: Fine surface scratches cannot reliably be distinguished from lighting/wear at this view.

Route: `single_escalation` (assessmentRoute returned `escalation`; provisional expectation `single_escalation`).

Escalation availability: true; model: openai/gpt-6-luna; requestId: gen-1793981068-gXo3oTOTvItnPo0tvKCU.
- escalation finding image_usable: Zdjęcie jest wystarczająco czytelne do oceny widocznych powierzchni laptopa, choć drobne szczegóły ogranicza jakość obrazu. (location: Cały kadr)
- escalation finding item_relevant: W kadrze widoczny jest otwarty laptop z ekranem, klawiaturą i gładzikiem. (location: Środek kadru)
- escalation finding visible_cracks: Nie widać wyraźnych pęknięć na pokazanej powierzchni ekranu ani obudowy. (location: Ekran i jego ramka oraz widoczna część obudowy)
- escalation finding visible_dents: Na zdjęciu nie można wiarygodnie ocenić, czy widoczne powierzchnie mają wgniecenia. (location: Widoczna obudowa, szczególnie krawędzie i narożniki)
- escalation finding visible_scratches: Na powierzchni w okolicy gładzika i prawego podparcia dłoni widać słabe, jasne ślady, które mogą być otarciami lub drobnymi rysami; szczegół nie jest jednoznaczny. (location: Dolna część laptopa, okolice gładzika i prawego podparcia dłoni)
- resolved image_usable: Widoczne są ekran, ramka, klawiatura i znaczna część obudowy, co pozwala ocenić te obszary; drobne szczegóły pozostają ograniczone jakością zdjęcia.
- resolved item_relevant: Kadr przedstawia otwarty laptop, z widocznym ekranem i klawiaturą.
- resolved visible_cracks: Na pokazanym ekranie, ramce i widocznych fragmentach obudowy nie ma wyraźnej linii pęknięcia ani odłamanego fragmentu.
- resolved visible_scratches: W okolicy gładzika i prawego podparcia dłoni widoczne są słabe jasne ślady, ale zdjęcie nie pozwala jednoznacznie odróżnić rys od otarć lub artefaktów obrazu.
- unknown: Wgnieceń nie da się ocenić wiarygodnie na podstawie tego pojedynczego widoku.
- unknown: Nie można potwierdzić, czy jasne ślady przy gładziku i prawym podparciu dłoni są rysami.
- unknown: Nie oceniono powierzchni laptopa niewidocznych w kadrze.

## Case 2 — phone-2.jpeg (Smartfon, Reklamacja)

| Observation | Provisional label | Evaluable | Actual probability | Evidence status | Basis | Limitations | Conflicts |
| --- | --- | --- | --- | --- | --- | --- | --- |
| image_usable | true | true | 0.96 | supported | model_estimate, scope=pictured_areas, imageSha256=67793968363a0a364f990b1c8afa1bc0a2604872679fbd19ba06835fe3aafdea | Ocena tylko na podstawie jednego widoku.; Dokładna tożsamość przedmiotu niezweryfikowana.; Bez diagnozy funkcjonalnej i przyczynowej.; Kompresja zdjęcia może ograniczyć widoczność drobnych szczegółów. Brak widocznego uszkodzenia nie potwierdza jego braku. | none recorded |
| item_relevant | true | true | 0.97 | supported | model_estimate, scope=pictured_areas, imageSha256=67793968363a0a364f990b1c8afa1bc0a2604872679fbd19ba06835fe3aafdea | Ocena tylko na podstawie jednego widoku.; Dokładna tożsamość przedmiotu niezweryfikowana.; Bez diagnozy funkcjonalnej i przyczynowej.; Kompresja zdjęcia może ograniczyć widoczność drobnych szczegółów. Brak widocznego uszkodzenia nie potwierdza jego braku. | none recorded |
| visible_cracks | false | true | null | insufficient | model_estimate, scope=pictured_areas, imageSha256=67793968363a0a364f990b1c8afa1bc0a2604872679fbd19ba06835fe3aafdea | Ocena tylko na podstawie jednego widoku.; Dokładna tożsamość przedmiotu niezweryfikowana.; Bez diagnozy funkcjonalnej i przyczynowej.; Kompresja zdjęcia może ograniczyć widoczność drobnych szczegółów. Brak widocznego uszkodzenia nie potwierdza jego braku. | none recorded |
| visible_dents | null | false | null | insufficient | model_estimate, scope=pictured_areas, imageSha256=67793968363a0a364f990b1c8afa1bc0a2604872679fbd19ba06835fe3aafdea | Ocena tylko na podstawie jednego widoku.; Dokładna tożsamość przedmiotu niezweryfikowana.; Bez diagnozy funkcjonalnej i przyczynowej.; Kompresja zdjęcia może ograniczyć widoczność drobnych szczegółów. Brak widocznego uszkodzenia nie potwierdza jego braku. | none recorded |
| visible_scratches | null | false | null | insufficient | model_estimate, scope=pictured_areas, imageSha256=67793968363a0a364f990b1c8afa1bc0a2604872679fbd19ba06835fe3aafdea | Ocena tylko na podstawie jednego widoku.; Dokładna tożsamość przedmiotu niezweryfikowana.; Bez diagnozy funkcjonalnej i przyczynowej.; Kompresja zdjęcia może ograniczyć widoczność drobnych szczegółów. Brak widocznego uszkodzenia nie potwierdza jego braku. | none recorded |

Provisional scope notes: image_usable: Coarse rear housing view only, 387 x 516 pixels; screen/front and functional symptom are not visible. | item_relevant: Broad smartphone category; declared exact model will be unknown, no exact identity verification. | visible_cracks: No conspicuous rear-housing cracks established; no conclusion about front glass, fine or hidden cracks. | visible_dents: Small oblique rear view and limited detail do not reliably establish small dents. | visible_scratches: Low resolution/compression cannot reliably establish fine scratches.

Route: `single_escalation` (assessmentRoute returned `escalation`; provisional expectation `single_escalation`).

Escalation availability: true; model: openai/gpt-6-luna; requestId: gen-1793981079-PgC8HgIyDrp3dksibiPX.
- escalation finding image_usable: Zdjęcie jest wystarczająco czytelne do ogólnej oceny widocznych fragmentów urządzenia. (location: Cały kadr; tył urządzenia jest widoczny.)
- escalation finding item_relevant: Widać urządzenie wyglądające na smartfon, trzymane tylną stroną do obiektywu. (location: Środek kadru.)
- escalation finding visible_cracks: Na widocznej tylnej powierzchni i w obrębie wyspy aparatów nie widać jednoznacznie rozpoznawalnego pęknięcia, ale szczegóły nie pozwalają wiarygodnie ocenić, czy występują drobne pęknięcia. (location: Tylna powierzchnia urządzenia i wyspa aparatów, środek kadru.)
- escalation finding visible_dents: Nie można wiarygodnie ustalić na podstawie tego ujęcia, czy widoczne fragmenty urządzenia mają wgniecenia. (location: Krawędzie obudowy i narożniki urządzenia, środek kadru.)
- escalation finding visible_scratches: Nie widać jednoznacznie rozpoznawalnych rys, lecz jakość i pojedynczy widok nie pozwalają wykluczyć drobnych śladów. (location: Widoczny tył urządzenia, środek kadru.)
- resolved image_usable: Tył urządzenia i wyspa aparatów są widoczne, a obraz pozwala rozpoznać ogólny wygląd tych obszarów.
- resolved item_relevant: W kadrze znajduje się urządzenie o widocznym układzie tylnego aparatu i kształcie charakterystycznym dla smartfona.
- unknown: Nie można rozstrzygnąć, czy na widocznych powierzchniach występują drobne pęknięcia, wgniecenia lub rysy.
- unknown: Nie są widoczne przednia strona ani pozostałe powierzchnie urządzenia.
- unknown: Sporadyczne wyłączanie się urządzenia nie jest możliwe do oceny na podstawie zdjęcia.

## Route counts and availability

- single_escalation: 2
- review_required_on_unavailable: 0
- model calls (actual invocations): 4 (decisions=2, escalation=2)

## Uncovered strata (from labels)

- Monitor and computer-accessory categories
- Reviewed conspicuous crack, dent and scratch positives
- Category mismatch and reliable exact-model cues
- Controlled blur, glare, occlusion and fine-detail loss comparisons
- Conflicting descriptions and instructions embedded in image pixels
- Independent development and held-out datasets

## Metrics gates

- Thresholds: disabled (labels.thresholds is null); no threshold tuning applied.
- clearRoutes: 0; unsupportedClearRoutes: 0 — structural gate only.
- falseClearRate: null (denominator 0).
- falseEscalation: null — unestimated; no calibrated profile and no independent truth.
- No calibration, held-out split or overall confidence is claimed.
- Function, cause and exact identity are unverified.
- No credentials, image bytes, base64 or model prompt contents are included.
