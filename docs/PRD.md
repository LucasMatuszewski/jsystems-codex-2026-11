# PRD - Hardware Service Decision Copilot - Decision Model Variant

## 1. Executive Summary

Build a customer-facing proof of concept for x-kom return and hardware complaint guidance: a customer completes a form with one image, receives an evidence-bounded preliminary recommendation, and continues in an LLM agent chat. The initial assessment combines predefined visual observations, deterministic checks, and, where needed, one deeper multimodal analysis. The PoC provides guidance only; it does not lodge claims, transfer conversations to staff, approve refunds, or reject complaints.

## 2. Problem Statement

Customers need to understand which return or complaint procedure may apply, what information is missing, and what to do next. Descriptions, dates, buyer status, and photographs provide different kinds of evidence; a photograph cannot establish the cause of damage or entitlement to a remedy. Support and service teams also need customers to distinguish an initial explanation from a formal decision or submitted claim.

## 3. Users / Personas

| Persona | Goal | Expected outcome |
|---|---|---|
| Consumer with a return request | Understand the next steps for returning one electronics item | A preliminary explanation based on purchase circumstances, with uncertainties and source references |
| Consumer reporting a fault | Explain symptoms and ask about complaint procedures, including faults invisible in a photo | Guidance without an invented diagnosis or automatic rejection |
| Business buyer | Understand what information staff would need to assess the case | Clarifying questions about buyer status and purchase purpose, followed by a recommendation to seek staff review |

Support and hardware service staff are downstream beneficiaries, not users of a staff interface in this release. All demonstrations use synthetic cases and non-identifying images.

## 4. Main Flows

### 4.1 Valid form and clear initial assessment

1. The customer sees the PoC notice and selects `Zwrot` or `Reklamacja`.
2. The customer supplies the fields in Section 8 and attaches one image. For a complaint, the description is mandatory; for a return, it is optional.
3. The system checks required fields, date consistency, accepted image format, decodability, and size. Invalid entries remain on the form with field-level explanations.
4. Before sending an image to either model, the system compresses it on the server while preserving the visible details needed for assessment.
5. The bounded decision step returns the five observations in Section 11, their probabilities, evidence limitations, and any conflicts.
6. Deterministic rules evaluate dates and the applicable procedure independently of visual probabilities. Unclear visual results, or results without validated routing thresholds, follow Flow 4.2.
7. The system opens the chat with a read-only case panel. The first assistant bubble contains a greeting, preliminary recommendation or review status, justification, limitations, and next steps.
8. The customer asks questions or adds information. The conversational agent uses the complete current-session context, asks focused follow-up questions, and can explain or refine guidance within the restrictions in Section 11.
9. The customer can request a summary and next steps. Nothing is submitted or sent to another person.

### 4.2 Unclear image or conflicting evidence

1. An unvalidated routing profile, intermediate probability, missing visual evidence, poor image usability, uncertain relevance, or a conflict triggers one deeper multimodal analysis after a successful initial assessment. Provider failure follows Flow 4.4 instead.
2. That analysis receives the image, form, initial observations, and the specific uncertainty to resolve. It reports supported observations and remaining limitations, not a legal verdict.
3. If the uncertainty is resolved, the system applies the same deterministic rules and recommendation restrictions.
4. If it remains unresolved, the system displays `Wymagana weryfikacja przez pracownika` and explains what could not be established.
5. Text chat remains available when the conversational provider is available. It may clarify the case but cannot remove a required review status or rerun the initial decision step.

### 4.3 Business purchase or unsupported policy circumstances

1. The customer may select a business purchase, an in-store purchase, or an unknown purchase channel.
2. Business purchases receive the review-required status regardless of image clarity. The agent asks whether the buyer is a sole trader or another entity and whether the purchase relates to their professional activity; `Nie wiem` is an acceptable answer.
3. The agent explains why staff assessment is needed without deciding the buyer's legal classification. It does not request a company name, tax identifier, registration extract, or other identifying data.
4. An unsupported policy version, exceptional product circumstance, missing material fact, or request beyond the supported rules also produces the review-required status.
5. The conversation ends with a preliminary summary and suggested contact with official support. The PoC performs no staff handoff, queue insertion, notification, or ticket creation.

### 4.4 Provider or processing failure

1. If image preparation fails, the system reports the failure on the form and retains the other fields for image replacement; no image is sent for analysis.
2. If the initial decision provider is unavailable, the system displays review required with the reason that visual assessment was unavailable. It does not fabricate observations or silently substitute a successful assessment.
3. If the escalation provider fails, the system displays review required and preserves all completed assessment information.
4. If the conversational provider fails, the system shows an explicit service error, the available structured result, and a non-generated fallback explanation. A retry can retry the failed chat response, without repeating image assessment or clearing review status.
5. If all model services are unavailable, the customer still sees the retained form summary, the failure reason, review required, and an official support link.

### 4.5 New case and session end

1. One browser tab contains one active case and its conversation.
2. `Nowa sprawa` asks for confirmation before clearing the form, image, results, and chat.
3. Refreshing or closing the page ends the PoC session; a visible notice explains this before submission.
4. A new case has no access to the previous case's context. No database-backed history or recovery is provided.

## 5. User Stories

- As a customer, I want to provide purchase details and a photo once, so that the first chat response addresses my case.
- As a customer reporting a fault, I want to describe symptoms that are invisible in the image, so that the absence of visible damage does not invalidate my complaint.
- As a customer, I want to see missing evidence and uncertainty, so that I understand the limits of the recommendation.
- As a business buyer, I want the agent to ask about my circumstances, so that I know what to clarify with support.
- As a customer, I want file and field errors explained before submission, so that I can correct them without re-entering the entire form.
- As a customer, I want an explicit review status when a provider fails, so that a technical failure is not presented as an assessment.
- As a customer, I want follow-up answers to remember my form and earlier messages, so that I do not repeat information.
- As a customer, I want a case summary with next steps, so that I can decide whether to contact official support myself.
- As a customer, I want a new case to start empty, so that recommendations do not mix different devices.

## 6. Acceptance Criteria

### Form and image

- AC-01: The request selector contains exactly `Zwrot` and `Reklamacja`.
- AC-02: The equipment selector contains exactly the four categories listed in Section 8.
- AC-03: Submission is blocked when any universally required field in Section 8 is absent or contains only whitespace.
- AC-04: A complaint with an empty description produces a field-level error.
- AC-05: A return with an empty description can proceed when the other required fields are valid.
- AC-06: A future purchase date or receipt date produces a field-level error.
- AC-07: A receipt date earlier than the purchase date produces a field-level error.
- AC-08: The form rejects a second attached image.
- AC-09: A file exceeding 10,000,000 bytes is rejected with a visible size-limit message.
- AC-10: A file outside the accepted image formats, or a file that cannot be decoded as its declared image format, is rejected before model analysis.
- AC-11: The attached image can be previewed, removed, or replaced before submission.
- AC-12: No model receives the image before server-side image compression completes successfully.
- AC-13: A form validation or image-preparation error preserves all other entered fields.

### Initial assessment and routing

- AC-14: A successful initial assessment returns all five observation records defined in Section 11.
- AC-15: Each observation distinguishes a numeric probability from unavailable evidence.
- AC-16: A supported probability at or below the validated negative threshold for that observation and model is classified as a clear negative, including the boundary value.
- AC-17: A supported probability at or above the validated positive threshold for that observation and model is classified as a clear positive, including the boundary value.
- AC-18: A probability strictly between the validated thresholds triggers deeper analysis. Until thresholds are validated, the clear-observation shortcut is disabled and every successfully assessed case follows the deeper analysis route. Provider failures retain Flow 4.4's review-required behavior.
- AC-19: Missing evidence or conflicting evidence triggers deeper analysis even when a supplied probability is outside the intermediate range.
- AC-20: A clear negative for image usability or item relevance triggers deeper analysis.
- AC-21: At most one deeper multimodal assessment is attempted per submitted case.
- AC-22: Unresolved uncertainty after deeper analysis produces the visible review-required status.
- AC-23: Failure of either assessment provider produces the visible review-required status with the unavailable stage identified.
- AC-24: Required-field checks and date-rule calculations use deterministic results rather than LLM-generated arithmetic.
- AC-25: A business purchase produces review required regardless of visual probabilities.
- AC-26: A visible damage observation cannot alone produce a rejection, legal ineligibility statement, or automatic refund decision.
- AC-27: A clear negative for visible damage is communicated as limited to the visible areas of the supplied image.
- AC-28: A policy circumstance outside the supported rules produces review required rather than an invented rule.

### Chat and explanation

- AC-29: The first successful assistant response contains all six content elements specified in Section 11.5.
- AC-30: Selecting a return versus a complaint selects the corresponding scenario instructions in Section 11.6.
- AC-31: Every follow-up response has access to the form, initial results, any escalation result, deterministic findings, first response, and all earlier messages in the active case.
- AC-32: A chat message never invokes the bounded initial decision step again.
- AC-33: A required review status remains visible after every subsequent chat message.
- AC-34: A later material correction or contradiction to the submitted case produces or preserves review required rather than silently replacing the original assessment.
- AC-35: Business follow-up questions cover entity type and professional character of the purchase without requiring identifying data.
- AC-36: Procedure-based guidance identifies the source and section supporting it.
- AC-37: The first response explicitly states that the chat has not submitted a return or complaint.
- AC-38: Failure to generate a chat response shows an error and a fallback result without displaying generated success text.
- AC-39: Retrying a failed chat response preserves the existing assessment and review status.
- AC-40: Requesting a summary returns the current recommendation or review status, known facts, unresolved questions, and next steps.

### UX, session, and boundaries

- AC-41: During processing, the interface identifies the active stage without displaying a countdown.
- AC-42: Duplicate form submissions and concurrent duplicate sends are disabled while their respective operation is pending.
- AC-43: The chat case panel contains the submitted data, image preview, observation results, and current status.
- AC-44: Confirming `Nowa sprawa` clears all current-case data from the interface and conversation context.
- AC-45: Refreshing the page opens an empty case rather than restoring a previous conversation.
- AC-46: The form and chat show the synthetic-data and preliminary-guidance notices.
- AC-47: All customer-facing labels, errors, status messages, and agent responses are in Polish.
- AC-48: No PoC action sends a case or recommendation to a staff member, creates a claim, or changes an external business record.
- AC-49: Every input has a visible label and can be reached and operated using the keyboard.

## 7. Out of Scope

- **Formal case handling:** claim submission, staff handoff, support queues, staff review module, case numbers, decision approval, automatic rejection, refunds, payments, shipping labels, and external actions.
- **Customer accounts:** authentication, authorization roles, customer identity checks, customer data retrieval, order verification, and purchase-history integration.
- **Persistence:** saved sessions, database-backed decisions or actions, audit-history product features, recovery after refresh, and cross-device history.
- **Knowledge expansion:** RAG, equipment specification lookup, live product catalogs, automatic policy crawling, and arbitrary internet research by the chat agent.
- **Staff tools:** customer-service dashboard, administration, policy editor, reporting, and notifications.
- **Extended evidence:** multiple images, new image uploads during chat, videos, documents, serial-number extraction, authenticity verification, physical diagnostics, and cause-of-damage determination.
- **Expanded legal handling:** conclusive entitlement assessments, automated business-buyer classification, full warranty adjudication, all statutory exceptions, historical regulation support, and cross-border cases.
- **Additional clients:** native mobile applications, multilingual UI, and a full mobile-specific workflow.
- **Exports:** downloadable summaries and automated sending of transcripts.

Future modules may retrieve customer and purchase data, save sessions and actions, add a curated knowledge base, and pass recommendations to customer service. They do not participate in this PoC.

## 8. Constraints

### 8.1 Business and evidence boundaries

- This is a course demonstration using synthetic descriptions and non-identifying images, including for the business-buyer flow. Do not request real customer records, order numbers, addresses, credentials, invoices, or tax identifiers.
- The interface identifies itself as a PoC, not the official channel for lodging a claim. Using x-kom procedures does not imply a deployed or approved x-kom service.
- The user's later decision to use x-kom sources replaces the original fictional-policy proposal. No invented company terms may be presented as x-kom rules.
- Statutory rights take precedence over commercial procedure. Missing or conflicting source material requires review; the agent cannot improvise a legal resolution.
- The required image is a PoC input constraint, not a statement that a photo is legally necessary to make a complaint or exercise withdrawal rights.
- The staff-review status is only advice displayed to the customer. It neither contacts staff nor represents a pending staff assignment.

### 8.2 Form and functional limits

| Field or limit | Requirement |
|---|---|
| Request type | Required; `Zwrot` or `Reklamacja` |
| Equipment category | Required; `Laptop`, `Smartfon`, `Monitor`, `Akcesorium komputerowe` |
| Equipment name/model | Required free text |
| Purchase date | Required date picker |
| Receipt date | Required date picker; separately labeled as receipt, not purchase |
| Buyer type | Required; `Konsument` or `Zakup firmowy` |
| Purchase channel | Required; `Na odległość`, `W salonie`, `Nie wiem`; explanatory text distinguishes contract formation from collection location |
| Reason/description | Textarea; required for complaint, optional for return |
| Equipment image | Exactly one JPEG, PNG, or WebP image, at most 10,000,000 bytes |
| Image handling | Server-side compression before either visual model; do not interpret details lost in processing as absent damage |
| Conversation | Text messages only after initial submission; one active case per tab |
| Language | Polish customer interface and agent responses; English project requirements |
| Primary environment | Desktop browser on Windows 11; Chrome and Edge as the initial PoC targets |
| Deployment | Local Windows 11 development and demonstration; one backend process; no public hosting requirement |

The initial image must show the relevant equipment and its condition. Customers reporting an invisible fault can submit an overall equipment photo and describe the symptoms; visible damage is not required. Images must exclude faces, identifying labels, readable account screens, and personal documents. These are demonstration input requirements, not a promise of automated personal-data detection.

### 8.3 Source register and bounded procedure rules

Sources were consulted on 2026-11-05. These references define a bounded guidance baseline, not a complete legal opinion. Material policy or legal uncertainty must be reported rather than resolved by generated text.

| ID | Document and source | Used for |
|---|---|---|
| S1 | [x-kom distance-sales regulations](https://www.x-kom.pl/regulamin), effective 2026-03-05, Sections I, VIII, IX | Company procedure, applicable version, buyer definitions |
| S2 | [UOKiK: withdrawal deadlines](https://prawakonsumenta.uokik.gov.pl/prawo-odstapienia-od-umowy/terminy-odstapienie/) | Statutory deadline context and counting rules |
| S3 | [UOKiK: non-conformity of goods](https://prawakonsumenta.uokik.gov.pl/reklamacja/niezgodnosc/) | Consumer complaint guidance |
| S4 | [UOKiK: withdrawal costs](https://prawakonsumenta.uokik.gov.pl/prawo-odstapienia-od-umowy/koszty/) | Diminished-value distinction |
| S5 | [Official x-kom return channel](https://www.x-kom.pl/zwroty) and [complaint channel](https://www.x-kom.pl/reklamacje) | Links for customer-initiated next steps only |
| S6 | Existing project design guidance, `design-guidelines.md` alongside this document | Established x-kom visual reference; this PRD defines functional layout only |

Company-source baseline, derived from S1:

| Rule | Bounded source fact |
|---|---|
| R1 | The cited version applies from 2026-03-05; earlier purchases may require earlier terms. |
| R2 | For qualifying private distance purchases, x-kom states a 15-day withdrawal notification period from receipt, without requiring a reason. |
| R3 | The regulations list withdrawal exceptions, including customization and certain unsealed goods. |
| R4 | Return dispatch is distinct from withdrawal notification; the cited dispatch period is 14 days after notification. |
| R5 | Complaint instructions describe a separate official process; PoC chat does not initiate it. |

Supporting consumer context:

- L1: S2 describes the ordinary statutory distance-purchase withdrawal period as 14 days from receipt. Do not describe R2's commercial period as the statutory minimum. Deadline extensions, incomplete withdrawal information, or unusual delivery arrangements require review.
- L2: S3 describes seller responsibility for non-conformity appearing within two years of delivery, with repair/replacement and conditional price-reduction/withdrawal remedies. Elapsed time is a routing signal, not an automatic claim-rejection rule; no photo can establish all remedy conditions.
- L3: S4 distinguishes diminished value resulting from handling beyond necessary inspection from loss of withdrawal rights. Visible damage alone is not an automatic exclusion.

Operational application of those rules:

- Consumer distance returns with clear evidence and a supported applicable rule set receive guidance to consider the official return procedure; no eligibility or payment guarantee is made.
- Consumer complaints receive guidance to describe the fault and consult the official complaint procedure. The agent can ask about the requested remedy and prior repair attempts without deciding entitlement.
- Business purchases, in-store returns, unknown channels, older policy versions, potential exceptions, missing facts, and unresolved conflicts require staff review advice.
- For consumer in-store complaints, use supported consumer complaint guidance; do not misapply distance-withdrawal rules.
- Deterministic calculations use receipt date, a displayed assessment date in Europe/Warsaw, calendar dates rather than hours, and the source-defined period. Exclude the receipt day when counting ordinary day-based withdrawal periods. Cases involving uncertain deadline extensions or a boundary not covered by the adopted source rules require review rather than an invented definitive deadline.
- A date outside a baseline period does not imply expired rights. The conversation is not a withdrawal declaration, so the assessment date must not be described as an actual claim or notification date.

### 8.4 Procedure and instruction content supplied to the agent

The later implementation must supply two distinct, source-attributed procedure documents: a return guidance document covering R1-R4, L1, L3 and escalation boundaries; and a complaint guidance document covering R1, R5, L2 and escalation boundaries. Each must carry its source date and scope. They are authoritative supplied context, not a RAG integration.

Separate procedure files and separate return/complaint instruction artifacts are implementation deliverables; their required content is defined here and in Section 11.6. No fictional procedure documents are required after the agreed switch to real sources.

## 9. UI Description (wireframe level)

### 9.1 Intake form

- Header: product name, PoC notice, Polish-language guidance, and the warning that refresh loses the session.
- Main area: request type, equipment fields, dates, buyer type, purchase channel, conditional description, and one-image upload with preview and remove/replace controls.
- Description label immediately reflects whether it is required. Image guidance explains that invisible faults can be described in text.
- Errors appear next to the relevant input and in a focusable summary after submission. Error states retain valid fields.
- `Przejdź do analizy` submits the case. While pending, disable duplicate submission and show the active stage: validation, image preparation, initial assessment, optional deeper analysis, or preparing the response. No countdown or invented percentage-complete indicator.

### 9.2 Chat and case panel

- Main area: conversation beginning with the formatted assistant recommendation, followed by customer and assistant messages, a text composer, `Wyślij`, and an action to request a summary.
- Side panel: read-only form summary, thumbnail, observation categories and percentages where available, evidence limitations, assessment date, source references, and current recommendation/status.
- The review-required status is persistent and text-labeled; its explanation states explicitly that no case has been transferred to staff.
- Format the first answer into recommendation/status, evidence, uncertainties, and next steps. Observed evidence and customer statements must be distinguishable.
- While a response is pending, show an activity indicator and prevent another simultaneous send. Provider errors appear in the conversation with a retry action where relevant.
- If initial response generation fails, show the structured assessment and fallback explanation instead of an empty chat or fabricated assistant reply.
- `Nowa sprawa` is the route back to an empty form, with confirmation of context loss. Editing the submitted form and adding further images are not available in this release.
- Use the established design guidance for visual styling. This PRD does not introduce new colors, typography, or design tokens.

## 10. User Flow Diagram

```mermaid
flowchart TD
    A[Empty form and PoC notice] --> B[Enter synthetic case and one image]
    B --> C{Input valid?}
    C -- No --> D[Field errors; retain valid entries]
    D --> B
    C -- Yes --> E{Image preparation succeeds?}
    E -- No --> F[Image error; replace image]
    F --> B
    E -- Yes --> G[Bounded initial assessment]
    G --> H{Assessment provider available?}
    H -- No --> R[Human review required]
    H -- Yes --> I{Validated clear shortcut?}
    I -- No --> J[One deeper multimodal analysis]
    J --> K{Resolved and provider available?}
    K -- No --> R
    K -- Yes --> L[Deterministic rules and scope checks]
    I -- Yes --> L
    L --> M{Business or unsupported circumstance?}
    M -- Yes --> R
    M -- No --> N[Preliminary procedural recommendation]
    R --> O{Conversational provider available?}
    N --> O
    O -- No --> P[Explicit error and fallback result]
    P -- Retry chat only --> O
    O -- Yes --> Q[First assistant message and case panel]
    Q --> S[Customer questions and clarifications]
    S --> T[Agent answers; preserve review requirement]
    T --> S
    T --> U[Summary and suggested next steps; no handoff]
    P --> V[New case or end session]
    U --> V
    V -- Confirm new case --> A
    V -- Refresh or close --> W[Session ends without recovery]
```

## 11. Agent / System Behavior Specification

### 11.1 Separate responsibilities

The decision model operates only during initial form assessment. It classifies visible observations; it is not the conversational agent and does not decide legal eligibility. A separate multimodal analysis handles at most one escalation. The conversational LLM explains the supplied results, asks questions, and guides the customer through the bounded procedures.

The conversation context contains the complete submitted form fields, initial observations and probabilities, evidence limitations, any deeper analysis, deterministic findings, applicable procedure content and current review requirement. The initial generation has no earlier assistant message; subsequent generations include the first answer once through the full active history. Preserve partial/failed attempts as explicitly incomplete records, not completed assistant facts; retrying a turn must not duplicate its user message. Do not silently discard context and continue as though it were complete; if it can no longer be used, report the limitation and advise a new case or staff review.

### 11.2 Initial observation contract

| Observation | Meaning of the positive statement |
|---|---|
| Image usable | The image permits assessment of visible condition in the pictured areas |
| Item relevant | The pictured equipment is consistent with the declared category and available model evidence |
| Visible cracks | Cracks are visible in the pictured areas |
| Visible dents | Dents are visible in the pictured areas |
| Visible scratches | Scratches are visible in the pictured areas |

Each record includes its category, probability from 0 to 1 when supportable, evidence basis, uncertainty or missing evidence, and conflicts. Unavailable evidence is explicitly unknown, not probability zero. These are separate observations rather than exclusive outcomes; their probabilities need not sum to one, and statistical independence is not assumed. Item relevance is not authentication or proof of an exact model when identifiers are not visible.

Values of 0.10 and 0.90 are initial evaluation hypotheses, not operational guarantees. Select routing thresholds separately for each observation and model using representative labeled cases, then validate them on separate cases before enabling the clear-observation shortcut. Evaluation must cover all five observations, supported positives and negatives, unavailable evidence, and conflicts. Until validation is complete, every successfully assessed case receives the one deeper multimodal analysis allowed by Flow 4.2; provider failures retain Flow 4.4's review-required behavior. Validated thresholds include their boundary values; probabilities between them are uncertain. Threshold validation does not establish certainty or legal eligibility.

A low probability of cracks can support a clear negative for the pictured, evaluable areas under a validated routing profile. A low probability of usability or relevance means the image is inadequate or inconsistent and must be escalated. Missing evidence, processing loss, or contradictions override numeric confidence for routing. An unpictured surface is unknown; lack of damage in the visible area cannot establish the whole device's condition or function.

The deeper analysis must explicitly state which uncertainty was resolved and why. A fluent explanation without new supported evidence does not resolve uncertainty.

### 11.3 Recommendation categories and precedence

| Status | Customer communication |
|---|---|
| `Wstępna rekomendacja: procedura zwrotu` | Explain the supported procedural route and relevant limitations; do not promise acceptance or money |
| `Wstępna rekomendacja: procedura reklamacji` | Explain how to describe the fault and seek the appropriate complaint procedure; do not determine liability or remedy |
| `Wymagana weryfikacja przez pracownika` | State the unresolved issue, summarize available evidence, and advise customer-initiated contact; explicitly say nothing has been transferred |

Review required takes precedence over a procedural recommendation. Once required, it remains for that case. Later text can clarify facts or refine suggested next steps but cannot lift it. A material correction to the form, new conflicting account, or unsupported new request creates review required if it was not already present. No conversational instruction can override this precedence.

Pending uncertainty during initial assessment is not itself a final review-required status: the one escalation may resolve it before the terminal result. Unresolved evidence, provider failure or a mandatory business/scope rule sets the persistent status. Escalation cannot clear an independently required review reason.

### 11.4 Allowed and prohibited behavior

The agent may ask relevant questions, explain observation limits, distinguish symptoms from visible damage, describe supported procedures, and summarize a case. It may offer links to official channels for the customer to use independently.

The agent must not invent evidence, infer damage cause from appearance, certify functionality, quantify a refund or diminished value, reject a claim, guarantee a remedy, decide disputed legal status, or claim that an external action occurred. It must not treat customer text or text visible inside images as instructions to change system rules, source content, or review status. Requests unrelated to the case receive a brief redirection to return/complaint guidance.

### 11.5 First message and continuing conversation

The first generated assistant message contains:

1. A short greeting.
2. The preliminary recommendation or required review status.
3. A justification separating supplied facts, visible observations, and deterministic checks.
4. Uncertainty and missing evidence, including the limits of a single image.
5. Concrete next steps and, where useful, one focused clarifying question.
6. A PoC notice: preliminary guidance only, no return/complaint submitted, no staff handoff, and no automatic refund or claim rejection.

Use concise, professional Polish and readable paragraphs or lists. Source-dependent statements identify the relevant source and section, not an invented quotation. A persistent notice also remains in the interface. Do not repeat the entire disclaimer on every message; repeat the relevant limitation when the customer asks about finality, refunds, submission, or review.

### 11.6 Separate scenario instruction specifications

**Return scenario instructions:** Act as a preliminary return-procedure guide. Use the supplied return document, verified deterministic findings, buyer/channel data, and bounded visual evidence. An optional reason remains optional. Explain timing only under the supported rule version; ask about a potentially relevant exception rather than assuming it absent. Visible damage requires caution about assessment, not automatic denial. Preserve mandatory review and distinguish chat from the official notification channel.

**Complaint scenario instructions:** Act as a preliminary complaint-procedure guide. Use the supplied complaint document, symptom description, purchase circumstances, and bounded visual evidence. Do not equate lack of visible damage with absence of a fault. Ask about symptoms, when they appeared, requested remedy, and prior remedy attempts where material. Do not infer cause, fault, liability, or legal entitlement. Preserve mandatory review and distinguish advice from a submitted complaint.

Both scenarios follow the same evidence restrictions, full-history requirements, failure behavior, and business-buyer review rule. Select the scenario from the submitted request type; a later request to switch type requires a new case rather than silently changing the basis of assessment.

## 12. Further Notes

- Architecture, technologies, provider selection, provider contracts, compression parameters and verification strategy are defined in the [ADRs](ADR/000-main-architecture.md). Deployable artifacts and application initialization wait for the approved implementation plan.
- Provider support for the selected formats and the full conversation context must be confirmed before implementation; the limits in this PRD are product choices, not verified provider capabilities.
- Source review establishes a bounded guidance baseline. It does not authorize a production legal decision engine or automatic application of unsupported exceptions.
- Historical policy versions, uncertain statutory deadline extensions, warranty-specific questions, and other unsupported legal circumstances use the review-required route in this PoC.
- No empirical accuracy target is claimed for visual classification. Routing thresholds require representative evaluation and separate validation before the clear-observation shortcut is enabled; they control escalation only.
- A later customer-service module may pass the case summary and recommendation to a person. Until then, every such next step remains customer-facing advice only.
