export interface CaseInput {
  requestType: 'Zwrot' | 'Reklamacja';
  category: 'Laptop' | 'Smartfon' | 'Monitor' | 'Akcesorium komputerowe';
  model: string;
  purchaseDate: string;
  receiptDate: string;
  buyerType: 'Konsument' | 'Zakup firmowy';
  purchaseChannel: 'Na odległość' | 'W salonie' | 'Nie wiem';
  description: string;
}
export interface ReviewReason { code: string; message: string; origin: 'policy' | 'assessment' | 'chat' }
export interface ReviewState { required: boolean; reasons: ReviewReason[] }
export interface ProcedureFindings {
  assessmentDate: string;
  daysSinceReceipt: number;
  withinStatutoryBaseline: boolean;
  withinCompanyBaseline: boolean;
  withinComplaintBaseline: boolean;
  sourceVersion: string;
  sourceIds: string[];
  limitations: string[];
}

const choices = {
  requestType: ['Zwrot', 'Reklamacja'],
  category: ['Laptop', 'Smartfon', 'Monitor', 'Akcesorium komputerowe'],
  buyerType: ['Konsument', 'Zakup firmowy'],
  purchaseChannel: ['Na odległość', 'W salonie', 'Nie wiem'],
};
const fields = ['requestType', 'category', 'model', 'purchaseDate', 'receiptDate', 'buyerType', 'purchaseChannel', 'description'] as const;

function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number(value.slice(0, 4)) < 1) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

export function validateInput(raw: unknown, today: string): { value: CaseInput | null; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { value: null, errors: { form: 'Prześlij kompletny formularz sprawy.' } };
  const input = raw as Record<string, unknown>;
  const parsed: Record<string, string> = {};
  for (const field of fields) {
    const value = input[field];
    if (field === 'description' && value === undefined) parsed[field] = '';
    else if (typeof value !== 'string') errors[field] = 'Uzupełnij pole tekstowe.';
    else parsed[field] = value.trim();
    if (field !== 'description' && !parsed[field]) errors[field] = 'Uzupełnij wymagane pole.';
  }
  for (const [field, allowed] of Object.entries(choices)) {
    if (parsed[field] && !allowed.includes(parsed[field])) errors[field] = 'Wybierz jedną z dostępnych opcji.';
  }
  if (parsed['requestType'] === 'Reklamacja' && !parsed['description']) errors['description'] = 'Opis objawów jest wymagany dla reklamacji.';
  for (const field of ['purchaseDate', 'receiptDate']) {
    if (parsed[field] && !validDate(parsed[field])) errors[field] = 'Podaj poprawną datę.';
    else if (parsed[field] && parsed[field] > today) errors[field] = 'Data nie może być z przyszłości.';
  }
  if (!errors['purchaseDate'] && !errors['receiptDate'] && parsed['receiptDate'] < parsed['purchaseDate']) errors['receiptDate'] = 'Data otrzymania nie może poprzedzać daty zakupu.';
  return { value: Object.keys(errors).length ? null : parsed as unknown as CaseInput, errors };
}

export function warsawDate(now: Date): string {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Warsaw', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}
export function calendarDays(from: string, to: string): number {
  if (!validDate(from) || !validDate(to)) throw new RangeError('Invalid calendar date.');
  return (Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86_400_000;
}
export function addReviewReasons(state: ReviewState, additions: ReviewReason[]): ReviewState {
  const unique = new Map<string, ReviewReason>();
  for (const reason of [...state.reasons, ...additions]) if (!unique.has(reason.code)) unique.set(reason.code, { ...reason });
  const reasons = [...unique.values()];
  return { required: state.required || reasons.length > 0, reasons };
}
export function evaluateRules(form: CaseInput, today: string): { review: ReviewState; findings: ProcedureFindings } {
  const daysSinceReceipt = calendarDays(form.receiptDate, today);
  const anniversary = new Date(`${form.receiptDate}T00:00:00Z`);
  const month = anniversary.getUTCMonth();
  anniversary.setUTCFullYear(anniversary.getUTCFullYear() + 2);
  if (anniversary.getUTCMonth() !== month) anniversary.setUTCDate(0);
  const findings: ProcedureFindings = {
    assessmentDate: today, daysSinceReceipt,
    withinStatutoryBaseline: daysSinceReceipt >= 0 && daysSinceReceipt <= 14,
    withinCompanyBaseline: daysSinceReceipt >= 0 && daysSinceReceipt <= 15,
    withinComplaintBaseline: daysSinceReceipt >= 0 && today <= anniversary.toISOString().slice(0, 10),
    sourceVersion: '2026-11-06', sourceIds: form.requestType === 'Zwrot' ? ['S1', 'S2', 'S4'] : ['S1', 'S3'],
    limitations: [
      'To bazowe wyliczenia kalendarzowe i wstępna wskazówka, nie rozstrzygnięcie uprawnień ani wygaśnięcia praw.',
      'Nietypowe dostawy, wyjątki i niepewne przedłużenia terminów wymagają weryfikacji.',
      'Data oceny nie jest datą zgłoszenia zwrotu ani reklamacji. Rozmowa niczego nie zgłasza.',
    ],
  };
  const reasons: ReviewReason[] = [];
  const add = (code: string, message: string) => reasons.push({ code, message, origin: 'policy' });
  if (form.buyerType === 'Zakup firmowy') add('business_purchase', 'Zakup firmowy wymaga indywidualnej weryfikacji statusu kupującego i celu zakupu.');
  if (form.purchaseChannel === 'Nie wiem') add('unknown_channel', 'Nie ustalono sposobu zawarcia umowy.');
  if (form.requestType === 'Zwrot' && form.purchaseChannel === 'W salonie') add('in_store_return', 'Zwrot zakupu zawartego w salonie wykracza poza przyjęte reguły zakupów na odległość.');
  if (form.purchaseDate < '2026-03-05') add('historical_policy', 'Należy sprawdzić historyczną wersję warunków zakupu.');
  if (form.requestType === 'Zwrot' ? !findings.withinCompanyBaseline : !findings.withinComplaintBaseline) add('outside_baseline', 'Data wykracza poza przyjęty okres bazowy. Nie oznacza to automatycznie utraty praw.');
  return { findings, review: addReviewReasons({ required: false, reasons: [] }, reasons) };
}
export function assessmentRoute(available: boolean): 'escalation' | 'review' { return available ? 'escalation' : 'review'; }
export function effectiveStatus(type: CaseInput['requestType'], review: ReviewState): 'review_required' | 'return_guidance' | 'complaint_guidance' {
  return review.required ? 'review_required' : type === 'Zwrot' ? 'return_guidance' : 'complaint_guidance';
}
