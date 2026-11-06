# Agent usage report

- Generated: 2026-11-06 15:03 UTC
- Mode: historical usage
- Period: Not set to Not set (half-open)
- Calendar timezone: UTC
- Share mode: off

> Costs are API-equivalent estimates from a versioned public rate card. They are not an invoice and not subscription payments.

## Summary

| Metric | Value |
| --- | ---: |
| Requests | 1,906 |
| Sessions | 62 |
| Input tokens (includes cache reads and writes) | 243,681,355 |
| Cache read tokens | 237,139,456 |
| Cache write tokens | 0 |
| Output tokens (includes reasoning) | 1,069,933 |
| Reasoning tokens (subset of output, not added again) | 531,732 |
| Total processed tokens (input + output) | 244,751,288 |
| API-equivalent cost estimate (USD) | $31.81 to $59.40 |
| Priced requests | 1,615 |
| Unpriced requests | 291 |
| Requests missing usage counts | 0 |

The cost covers priced requests only: 291 requests are unpriced.

## Insights

1. **Largest observed tool content**
   - Evidence: exec: 10102565 result characters across 1176 calls.
   - Suggested action: Narrow repeated reads or bound result sizes. This measures visible text, not the tool's full causal token cost.
2. **Pricing coverage is incomplete**
   - Evidence: 291 requests have unknown models or billing dimensions.
   - Suggested action: Supply a verified rate card or retain these requests as unpriced; the displayed cost covers only priced work.
3. **Compaction affects context interpretation**
   - Evidence: 20 recorded compactions in selected sessions.
   - Suggested action: Use the latest measured request and retained-history estimates; lifetime usage is a separate total.
4. **Visible estimate exceeds its measured anchor**
   - Evidence: At least one context estimate has a negative residual.
   - Suggested action: Treat composition as uncertain: pruning, serialization and the heuristic can differ. Categories were not rescaled.

Recommendations are suggestions only; nothing in your configuration was changed.

## Daily usage

| Date | Requests | Input | Cache read | Cache write | Output | Reasoning (in output) | Total | API-equivalent cost |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 2026-11-04 | 31 | 908,121 | 825,088 | 0 | 4,907 | 362 | 913,028 | $0.27 to $0.52 |
| 2026-11-05 | 759 | 109,781,019 | 106,910,336 | 0 | 362,839 | 160,529 | 110,143,858 | $15.14 to $28.88 |
| 2026-11-06 | 1,116 | 132,992,215 | 129,404,032 | 0 | 702,187 | 370,841 | 133,694,402 | $16.40 to $29.99 |

## Monthly usage

| Month | Requests | Input | Cache read | Cache write | Output | Reasoning (in output) | Total | API-equivalent cost |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 2026-11 | 1,906 | 243,681,355 | 237,139,456 | 0 | 1,069,933 | 531,732 | 244,751,288 | $31.81 to $59.40 |

## Models

| Model | Requests | Input | Cache read | Cache write | Output | Reasoning (in output) | Total | API-equivalent cost |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| gpt-6.1-sol | 1,134 | 173,048,382 | 170,251,648 | 0 | 835,071 | 424,892 | 173,883,453 | $30.97 to $57.76 |
| gpt-6-luna | 481 | 53,233,152 | 50,923,520 | 0 | 204,740 | 93,690 | 53,437,892 | $0.84 to $1.63 |
| codex-auto-review | 291 | 17,399,821 | 15,964,288 | 0 | 30,122 | 13,150 | 17,429,943 | $0.00 |

## Sessions

| Session | Agent | Model | Requests | Input | Cache read | Cache write | Output | Reasoning (in output) | Total | API-equivalent cost |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| codex:01a1b0aa-843f-7411-940b-4604d47ddb57 | codex | gpt-6.1-sol | 303 | 51,297,203 | 50,886,912 | 0 | 349,459 | 203,240 | 51,646,662 | $9.40 to $17.06 |
| codex:01a1ac90-5a86-7e11-ad4d-88860112b702 | codex | mixed models | 206 | 50,977,663 | 49,778,944 | 0 | 193,688 | 113,309 | 51,171,351 | $6.83 to $13.04 |
| codex:01a1abe9-117f-76d1-9f17-088a4fdd29ce | codex | gpt-6.1-sol | 256 | 43,019,982 | 42,678,784 | 0 | 112,776 | 31,706 | 43,132,758 | $6.08 to $11.59 |
| codex:01a1b027-6f45-7720-9a6b-c91cf311f8c4 | codex | gpt-6.1-sol | 142 | 20,231,611 | 20,032,512 | 0 | 159,319 | 94,491 | 20,390,930 | $3.99 to $7.19 |
| codex:01a1b0ab-5c2e-7583-bc39-0f80903e7f3f | codex | gpt-6-luna | 137 | 15,754,153 | 15,150,464 | 0 | 48,445 | 21,139 | 15,802,598 | $0.24 to $0.46 |
| codex:01a1b039-8492-7080-bb16-11f813b0f455 | codex | gpt-6-luna | 111 | 12,298,417 | 11,837,568 | 0 | 38,557 | 14,856 | 12,336,974 | $0.18 to $0.36 |
| codex:01a1b039-214b-76e2-8404-5edfccc78288 | codex | gpt-6-luna | 79 | 8,584,457 | 8,247,552 | 0 | 20,251 | 4,728 | 8,604,708 | $0.13 to $0.25 |
| codex:01a1b039-ec84-7973-b6b0-3f7de556fa5e | codex | gpt-6-luna | 72 | 8,322,058 | 8,114,688 | 0 | 21,197 | 9,100 | 8,343,255 | $0.11 to $0.22 |
| codex:01a1b0ad-2938-7b91-b9dd-df7fecb64f21 | codex | codex-auto-review | 52 | 5,040,779 | 4,857,472 | 0 | 5,228 | 1,989 | 5,046,007 | $0.00 |
| codex:01a1b0bc-afcc-7022-a37a-eef2f6930414 | codex | gpt-6.1-sol | 46 | 3,741,487 | 3,334,912 | 0 | 32,020 | 11,067 | 3,773,507 | $1.47 to $2.77 |
| codex:01a1ad22-aab8-7513-91d0-b706ab62325d | codex | codex-auto-review | 43 | 3,238,169 | 3,106,816 | 0 | 3,870 | 1,213 | 3,242,039 | $0.00 |
| codex:01a1abc4-11b9-7c43-9cf0-1acb82b75e24 | codex | gpt-6.1-sol | 33 | 1,885,328 | 1,825,664 | 0 | 10,045 | 741 | 1,895,373 | $0.40 to $0.75 |
| codex:01a1ab99-409b-7292-93bd-703bad88374b | codex | gpt-6.1-sol | 28 | 1,846,761 | 1,643,008 | 0 | 10,922 | 2,746 | 1,857,683 | $0.68 to $1.31 |
| codex:01a1b0ca-815d-7301-905e-96fd9cbe1d0c | codex | codex-auto-review | 29 | 1,606,319 | 1,519,104 | 0 | 2,953 | 1,120 | 1,609,272 | $0.00 |
| codex:01a1ab0f-bde8-79b2-aa87-21b800147279 | codex | gpt-6.1-sol | 26 | 1,411,009 | 1,346,688 | 0 | 5,024 | 720 | 1,416,033 | $0.31 to $0.60 |
| codex:01a1ac29-d0bd-7170-88b5-66c4bc509039 | codex | codex-auto-review | 21 | 1,362,494 | 1,211,136 | 0 | 1,934 | 749 | 1,364,428 | $0.00 |
| codex:01a1b140-6d23-79f0-8b92-73e83c4bb75a | codex | codex-auto-review | 20 | 1,287,317 | 1,205,632 | 0 | 1,408 | 656 | 1,288,725 | $0.00 |
| codex:01a1accc-b86c-7ae1-b3ef-ce9839b7bbde | codex | gpt-6.1-sol | 21 | 1,159,388 | 1,076,992 | 0 | 6,531 | 3,118 | 1,165,919 | $0.34 to $0.64 |
| codex:01a1ac90-732f-7230-95f2-56848ed7e708 | codex | codex-auto-review | 15 | 1,139,841 | 1,025,408 | 0 | 1,967 | 912 | 1,141,808 | $0.00 |
| codex:01a1ab8b-f31c-7cc0-901b-5275a16630ea | codex | gpt-6.1-sol | 25 | 1,056,227 | 1,009,664 | 0 | 3,788 | 551 | 1,060,015 | $0.23 to $0.45 |
| codex:01a1ae53-1d9c-72d0-b7a6-918a29030497 | codex | gpt-6.1-sol | 25 | 1,039,566 | 986,496 | 0 | 5,508 | 879 | 1,045,074 | $0.26 to $0.49 |
| codex:01a1accc-f9be-71c2-9555-de0a650eaf02 | codex | gpt-6.1-sol | 19 | 1,032,914 | 954,752 | 0 | 7,673 | 3,961 | 1,040,587 | $0.33 to $0.62 |
| codex:01a1ad68-bdc4-7541-867f-f7488af780f2 | codex | codex-auto-review | 15 | 817,380 | 752,384 | 0 | 1,539 | 577 | 818,919 | $0.00 |
| codex:01a1b121-e3bb-75b2-b727-4769b266440a | codex | codex-auto-review | 11 | 616,036 | 521,984 | 0 | 1,299 | 904 | 617,335 | $0.00 |
| codex:01a1b05e-5208-7422-9528-42a0b9ff2461 | codex | gpt-6.1-sol | 12 | 422,978 | 359,552 | 0 | 2,503 | 632 | 425,481 | $0.19 to $0.36 |
| codex:01a1ab8c-0640-7b22-bbdf-2913f9e22cc9 | codex | codex-auto-review | 14 | 377,678 | 339,328 | 0 | 1,752 | 678 | 379,430 | $0.00 |
| codex:01a1accb-32ae-7200-8534-14fa79d6f864 | codex | codex-auto-review | 9 | 371,841 | 329,472 | 0 | 901 | 391 | 372,742 | $0.00 |
| codex:01a1b0ca-28f0-70f3-b324-1344ac68b092 | codex | gpt-6-luna | 10 | 356,736 | 307,840 | 0 | 3,154 | 1,031 | 359,890 | $0.0095 to $0.02 |
| codex:01a1a61f-20a2-7632-b40d-392d20aa74c1 | codex | gpt-6.1-sol | 11 | 323,766 | 302,336 | 0 | 1,821 | 19 | 325,587 | $0.09 to $0.17 |
| codex:01a1b12c-31fb-7e81-afed-0240775842c7 | codex | gpt-6.1-sol | 11 | 306,192 | 274,048 | 0 | 1,139 | 229 | 307,331 | $0.10 to $0.20 |
| codex:01a1a646-5e19-7223-be17-5e08a4a43368 | codex | gpt-6.1-sol | 9 | 295,903 | 267,776 | 0 | 1,769 | 84 | 297,672 | $0.10 to $0.19 |
| codex:01a1ad47-6ed3-71d2-b98e-eee078533f25 | codex | codex-auto-review | 6 | 271,879 | 230,912 | 0 | 608 | 215 | 272,487 | $0.00 |
| codex:01a1a6fe-aea7-71b1-b119-805727ebb4e6 | codex | gpt-6.1-sol | 8 | 248,407 | 225,536 | 0 | 1,010 | 45 | 249,417 | $0.08 to $0.15 |
| codex:01a1ad3b-3816-73f3-afc6-52a7fc70b5b3 | codex | gpt-6.1-sol | 8 | 210,932 | 195,584 | 0 | 516 | 0 | 211,448 | $0.06 to $0.11 |
| codex:01a1b079-6660-7ff3-851c-33d8b1fd367e | codex | codex-auto-review | 5 | 188,886 | 149,888 | 0 | 355 | 149 | 189,241 | $0.00 |
| codex:01a1afff-5a2b-79c2-aea2-ceaff241f5c2 | codex | gpt-6.1-sol | 7 | 184,883 | 154,240 | 0 | 884 | 110 | 185,767 | $0.09 to $0.17 |
| codex:01a1b0a6-8167-72a3-bdb7-7d11666e031f | codex | codex-auto-review | 5 | 155,561 | 125,824 | 0 | 551 | 425 | 156,112 | $0.00 |
| codex:01a1ae5a-bc4d-71c3-8deb-f151da42998f | codex | codex-auto-review | 7 | 151,319 | 129,152 | 0 | 850 | 442 | 152,169 | $0.00 |
| codex:01a1b161-362f-7801-bf57-c39383b84f6a | codex | gpt-6.1-sol | 4 | 135,040 | 93,568 | 0 | 1,186 | 80 | 136,226 | $0.10 to $0.20 |
| codex:01a1ad7a-e33b-73b1-b41e-5eaf9c7289cd | codex | codex-auto-review | 3 | 134,200 | 63,360 | 0 | 327 | 143 | 134,527 | $0.00 |
| codex:01a1b027-a0c0-74a3-b61d-fd983e1bcd59 | codex | codex-auto-review | 4 | 101,469 | 66,688 | 0 | 351 | 281 | 101,820 | $0.00 |
| codex:01a1b053-0b3a-7723-ade8-2f9959386a1b | codex | gpt-6-luna | 4 | 97,788 | 68,992 | 0 | 366 | 0 | 98,154 | $0.0038 to $0.0074 |
| codex:01a1ab24-60d2-7210-ab56-d6d07af984e0 | codex | codex-auto-review | 4 | 88,241 | 69,760 | 0 | 615 | 385 | 88,856 | $0.00 |
| codex:01a1ab99-53ef-7191-a1aa-09278d83e093 | codex | codex-auto-review | 4 | 85,159 | 44,672 | 0 | 730 | 361 | 85,889 | $0.00 |
| codex:01a1ae53-2217-7141-984b-a57a4cec9e40 | codex | codex-auto-review | 5 | 67,328 | 48,512 | 0 | 533 | 228 | 67,861 | $0.00 |
| codex:01a1b161-3ab0-71b1-8ae4-19d0785f8987 | codex | codex-auto-review | 4 | 54,892 | 38,144 | 0 | 478 | 216 | 55,370 | $0.00 |
| codex:01a1ab30-527b-7b73-aa3c-50bfe1e9b508 | codex | codex-auto-review | 2 | 42,749 | 26,368 | 0 | 298 | 197 | 43,047 | $0.00 |
| codex:01a1aac5-e160-76f1-ba8b-036a48a6eb4f | codex | gpt-6-luna | 2 | 40,685 | 20,096 | 0 | 260 | 0 | 40,945 | $0.0024 to $0.0047 |
| codex:01a1a6ff-34fd-7d72-8af6-cd2a22a54b3f | codex | codex-auto-review | 3 | 40,045 | 29,440 | 0 | 307 | 214 | 40,352 | $0.00 |
| codex:01a1ada6-a7cf-74f2-ade0-f626c147476d | codex | codex-auto-review | 1 | 38,557 | 11,008 | 0 | 101 | 42 | 38,658 | $0.00 |

Showing the top 50 of 55 rows by total tokens; the JSON report has all rows.

## Task categories

| Task | Requests | Input | Cache read | Cache write | Output | Reasoning (in output) | Total | API-equivalent cost |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| unclassified | 1,906 | 243,681,355 | 237,139,456 | 0 | 1,069,933 | 531,732 | 244,751,288 | $31.81 to $59.40 |

## Current context

Context describes one session at its latest measured request. It is separate from the processed historical totals elsewhere in this report, which count every request.

### Session 01a1b161-3ab0-71b1-8ae4-19d0785f8987

- Agent and model: codex, codex-auto-review
- Observed at: 2026-11-06 15:02 UTC
- Basis: input + output of the latest measured request
- Measured context: 15,665 of 258,400 tokens (6.1% computed occupancy)
- Free (window minus measured): 242,735 tokens
- Compactions: 0; retention: recorded-visible-history; quality: reported
- Visible content estimate: 14,515 tokens (range 9,676 to 29,029); method: visible characters / 4.0; range characters / 6 to / 2
- Unattributed residual (measured minus visible estimate): 1,150 tokens. It covers hidden system prompts, tool schemas, non-text payloads and estimation error.

| Category (estimated) | Characters | Estimated tokens | Range |
| --- | ---: | ---: | ---: |
| instructions | 33,358 | 8,340 | 5,560 to 16,679 |
| user\_messages | 23,043 | 5,761 | 3,840 to 11,522 |
| assistant\_messages | 1,033 | 258 | 172 to 516 |
| environment | 625 | 156 | 104 to 312 |

### Session 01a1b161-362f-7801-bf57-c39383b84f6a

- Agent and model: codex, gpt-6.1-sol
- Observed at: 2026-11-06 15:02 UTC
- Basis: input + output of the latest measured request
- Measured context: 41,014 of 475,000 tokens (8.6% computed occupancy)
- Free (window minus measured): 433,986 tokens
- Compactions: 0; retention: recorded-visible-history; quality: reported
- Visible content estimate: 40,330 tokens (range 26,886 to 80,657); method: visible characters / 4.0; range characters / 6 to / 2
- Unattributed residual (measured minus visible estimate): 684 tokens. It covers hidden system prompts, tool schemas, non-text payloads and estimation error.

| Category (estimated) | Characters | Estimated tokens | Range |
| --- | ---: | ---: | ---: |
| tool\_results | 72,955 | 18,239 | 12,159 to 36,478 |
| instructions | 47,158 | 11,790 | 7,860 to 23,579 |
| skill\_catalog | 22,115 | 5,529 | 3,686 to 11,058 |
| user\_messages | 10,198 | 2,550 | 1,700 to 5,099 |
| tool\_schemas | 4,094 | 1,024 | 682 to 2,047 |
| tool\_arguments | 3,860 | 965 | 643 to 1,930 |
| environment | 628 | 157 | 105 to 314 |
| assistant\_messages | 305 | 76 | 51 to 152 |

### Session 01a1b0aa-843f-7411-940b-4604d47ddb57

- Agent and model: codex, gpt-6.1-sol
- Observed at: 2026-11-06 15:02 UTC
- Basis: input + output of the latest measured request
- Measured context: 267,517 of 475,000 tokens (56.3% computed occupancy)
- Free (window minus measured): 207,483 tokens
- Compactions: 1; retention: recorded-visible-history; quality: reported
- Visible content estimate: 218,490 tokens (range 145,660 to 436,979); method: visible characters / 4.0; range characters / 6 to / 2
- Unattributed residual (measured minus visible estimate): 49,027 tokens. It covers hidden system prompts, tool schemas, non-text payloads and estimation error.

| Category (estimated) | Characters | Estimated tokens | Range |
| --- | ---: | ---: | ---: |
| tool\_results | 504,765 | 126,191 | 84,128 to 252,382 |
| tool\_arguments | 203,865 | 50,966 | 33,978 to 101,932 |
| instructions | 90,489 | 22,622 | 15,082 to 45,244 |
| skill\_catalog | 40,227 | 10,057 | 6,704 to 20,114 |
| user\_messages | 19,207 | 4,802 | 3,201 to 9,604 |
| assistant\_messages | 10,386 | 2,596 | 1,731 to 5,193 |
| tool\_schemas | 4,094 | 1,024 | 682 to 2,047 |
| environment | 926 | 232 | 154 to 463 |

### Session 01a1b140-6d23-79f0-8b92-73e83c4bb75a

- Agent and model: codex, codex-auto-review
- Observed at: 2026-11-06 15:01 UTC
- Basis: input + output of the latest measured request
- Measured context: 91,977 of 258,400 tokens (35.6% computed occupancy)
- Free (window minus measured): 166,423 tokens
- Compactions: 1; retention: unknown-after-compaction; quality: reported
- Visible content estimate: 77,705 tokens (range 51,803 to 155,409); method: visible characters / 4.0; range characters / 6 to / 2
- Unattributed residual (measured minus visible estimate): 14,272 tokens. It covers hidden system prompts, tool schemas, non-text payloads and estimation error.

| Category (estimated) | Characters | Estimated tokens | Range |
| --- | ---: | ---: | ---: |
| user\_messages | 275,358 | 68,840 | 45,893 to 137,679 |
| instructions | 32,218 | 8,054 | 5,370 to 16,109 |
| assistant\_messages | 2,396 | 599 | 399 to 1,198 |
| environment | 846 | 212 | 141 to 423 |

### Session 01a1b0ab-5c2e-7583-bc39-0f80903e7f3f

- Agent and model: codex, gpt-6-luna
- Observed at: 2026-11-06 14:52 UTC
- Basis: input + output of the latest measured request
- Measured context: 174,082 of 258,400 tokens (67.4% computed occupancy)
- Free (window minus measured): 84,318 tokens
- Compactions: 1; retention: recorded-visible-history; quality: reported
- Visible content estimate: 156,479 tokens (range 104,320 to 312,956); method: visible characters / 4.0; range characters / 6 to / 2
- Unattributed residual (measured minus visible estimate): 17,603 tokens. It covers hidden system prompts, tool schemas, non-text payloads and estimation error.

| Category (estimated) | Characters | Estimated tokens | Range |
| --- | ---: | ---: | ---: |
| tool\_results | 508,950 | 127,238 | 84,825 to 254,475 |
| instructions | 48,717 | 12,179 | 8,120 to 24,358 |
| tool\_arguments | 37,366 | 9,342 | 6,228 to 18,683 |
| skill\_catalog | 22,061 | 5,515 | 3,677 to 11,030 |
| tool\_schemas | 4,094 | 1,024 | 682 to 2,047 |
| assistant\_messages | 2,185 | 546 | 364 to 1,092 |
| user\_messages | 1,693 | 423 | 282 to 846 |
| environment | 850 | 212 | 142 to 425 |

### Session 01a1b121-e3bb-75b2-b727-4769b266440a

- Agent and model: codex, codex-auto-review
- Observed at: 2026-11-06 14:25 UTC
- Basis: input + output of the latest measured request
- Measured context: 92,350 of 258,400 tokens (35.7% computed occupancy)
- Free (window minus measured): 166,050 tokens
- Compactions: 1; retention: unknown-after-compaction; quality: reported
- Visible content estimate: 78,537 tokens (range 52,358 to 157,074); method: visible characters / 4.0; range characters / 6 to / 2
- Unattributed residual (measured minus visible estimate): 13,813 tokens. It covers hidden system prompts, tool schemas, non-text payloads and estimation error.

| Category (estimated) | Characters | Estimated tokens | Range |
| --- | ---: | ---: | ---: |
| user\_messages | 280,888 | 70,222 | 46,815 to 140,444 |
| instructions | 31,124 | 7,781 | 5,187 to 15,562 |
| assistant\_messages | 1,290 | 322 | 215 to 645 |
| environment | 846 | 212 | 141 to 423 |

### Session 01a1b12c-31fb-7e81-afed-0240775842c7

- Agent and model: codex, gpt-6.1-sol
- Observed at: 2026-11-06 14:05 UTC
- Basis: input + output of the latest measured request
- Measured context: 29,130 of 475,000 tokens (6.1% computed occupancy)
- Free (window minus measured): 445,870 tokens
- Compactions: 0; retention: recorded-visible-history; quality: reported
- Visible content estimate: 21,523 tokens (range 14,347 to 43,045); method: visible characters / 4.0; range characters / 6 to / 2
- Unattributed residual (measured minus visible estimate): 7,607 tokens. It covers hidden system prompts, tool schemas, non-text payloads and estimation error.

| Category (estimated) | Characters | Estimated tokens | Range |
| --- | ---: | ---: | ---: |
| instructions | 51,737 | 12,934 | 8,623 to 25,868 |
| skill\_catalog | 17,749 | 4,437 | 2,958 to 8,874 |
| tool\_results | 8,636 | 2,159 | 1,439 to 4,318 |
| tool\_schemas | 4,094 | 1,024 | 682 to 2,047 |
| tool\_arguments | 2,331 | 583 | 388 to 1,166 |
| environment | 949 | 237 | 158 to 474 |
| assistant\_messages | 316 | 79 | 53 to 158 |
| user\_messages | 279 | 70 | 46 to 140 |

### Session 01a1b12c-fd97-77d2-9d5b-6be0dea426b1

- Agent and model: codex, codex-auto-review
- Observed at: 2026-11-06 14:04 UTC
- Basis: input + output of the latest measured request
- Measured context: 12,899 of 258,400 tokens (5.0% computed occupancy)
- Free (window minus measured): 245,501 tokens
- Compactions: 0; retention: recorded-visible-history; quality: reported
- Visible content estimate: 11,352 tokens (range 7,568 to 22,704); method: visible characters / 4.0; range characters / 6 to / 2
- Unattributed residual (measured minus visible estimate): 1,547 tokens. It covers hidden system prompts, tool schemas, non-text payloads and estimation error.

| Category (estimated) | Characters | Estimated tokens | Range |
| --- | ---: | ---: | ---: |
| instructions | 29,696 | 7,424 | 4,949 to 14,848 |
| user\_messages | 14,391 | 3,598 | 2,398 to 7,196 |
| environment | 945 | 236 | 158 to 472 |
| assistant\_messages | 376 | 94 | 63 to 188 |

### Session 01a1b0ad-2938-7b91-b9dd-df7fecb64f21

- Agent and model: codex, codex-auto-review
- Observed at: 2026-11-06 13:26 UTC
- Basis: input + output of the latest measured request
- Measured context: 167,043 of 258,400 tokens (64.6% computed occupancy)
- Free (window minus measured): 91,357 tokens
- Compactions: 0; retention: recorded-visible-history; quality: reported
- Visible content estimate: 147,467 tokens (range 98,311 to 294,934); method: visible characters / 4.0; range characters / 6 to / 2
- Unattributed residual (measured minus visible estimate): 19,576 tokens. It covers hidden system prompts, tool schemas, non-text payloads and estimation error.

| Category (estimated) | Characters | Estimated tokens | Range |
| --- | ---: | ---: | ---: |
| user\_messages | 544,873 | 136,218 | 90,812 to 272,436 |
| instructions | 31,124 | 7,781 | 5,187 to 15,562 |
| assistant\_messages | 13,026 | 3,256 | 2,171 to 6,513 |
| environment | 846 | 212 | 141 to 423 |

### Session 01a1b0bc-afcc-7022-a37a-eef2f6930414

- Agent and model: codex, gpt-6.1-sol
- Observed at: 2026-11-06 12:43 UTC
- Basis: input + output of the latest measured request
- Measured context: 111,375 of 475,000 tokens (23.4% computed occupancy)
- Free (window minus measured): 363,625 tokens
- Compactions: 1; retention: recorded-visible-history; quality: reported
- Visible content estimate: 106,298 tokens (range 70,864 to 212,595); method: visible characters / 4.0; range characters / 6 to / 2
- Unattributed residual (measured minus visible estimate): 5,077 tokens. It covers hidden system prompts, tool schemas, non-text payloads and estimation error.

| Category (estimated) | Characters | Estimated tokens | Range |
| --- | ---: | ---: | ---: |
| tool\_results | 223,918 | 55,980 | 37,320 to 111,959 |
| tool\_arguments | 71,443 | 17,861 | 11,907 to 35,722 |
| instructions | 44,924 | 11,231 | 7,487 to 22,462 |
| skill\_catalog | 43,063 | 10,766 | 7,177 to 21,532 |
| user\_messages | 33,819 | 8,455 | 5,636 to 16,910 |
| tool\_schemas | 4,094 | 1,024 | 682 to 2,047 |
| assistant\_messages | 3,298 | 824 | 550 to 1,649 |
| environment | 628 | 157 | 105 to 314 |

Showing the 10 most recent of 62 context observations; the JSON report has all.

## Tools and skills

Ranked by visible content size and invocation counts. These are content proxies, not exact causal charges: a model request is billed for its whole prompt, not per tool.

### Tools

| Name | Agent | Calls | Argument characters | Result characters | Estimated visible tokens |
| --- | --- | ---: | ---: | ---: | ---: |
| exec | codex | 1,176 | 1,546,304 | 10,102,565 | 2,912,217 |
| send\_message | codex | 58 | 191,775 | 0 | 47,944 |
| wait | codex | 30 | 1,702 | 82,519 | 21,055 |
| followup\_task | codex | 24 | 29,887 | 0 | 7,472 |
| js | codex | 1 | 78 | 28,500 | 7,144 |
| spawn\_agent | codex | 8 | 17,601 | 374 | 4,494 |
| request\_user\_input\_async | codex | 28 | 16,976 | 476 | 4,363 |
| sleep | codex | 135 | 2,835 | 6,175 | 2,252 |
| list\_agents | codex | 3 | 6 | 783 | 197 |
| wait\_agent | codex | 10 | 200 | 362 | 140 |

### Skills

| Name | Agent | Calls | Argument characters | Result characters | Estimated visible tokens |
| --- | --- | ---: | ---: | ---: | ---: |
| ponytail | codex | 19 | Unknown | 274,050 | 68,512 |
| openai-docs | codex | 13 | Unknown | 160,482 | 40,120 |
| create-design-system | codex | 3 | Unknown | 72,342 | 18,086 |
| skill-creator | codex | 1 | Unknown | 40,135 | 10,034 |
| context7-mcp | codex | 10 | Unknown | 39,718 | 9,930 |
| documents | codex | 2 | Unknown | 34,325 | 8,581 |
| write-implementation-plan | codex | 7 | Unknown | 32,006 | 8,002 |
| write-agents-md | codex | 4 | Unknown | 30,607 | 7,652 |
| write-adr | codex | 5 | Unknown | 22,825 | 5,706 |
| write-prd | codex | 2 | Unknown | 19,525 | 4,881 |
| computer-use | codex | 4 | Unknown | 3,256 | 814 |
| openai-platform-api-key | codex | 1 | Unknown | Unknown | Unknown |
| agent-usage-analytics | codex | 1 | Unknown | Unknown | Unknown |

## Provider and model attribution

Harness labels can hide GLM or other proxy routes. Reported models are unverified reference comparisons unless their route is recorded or explicitly confirmed.

| Agent | Provider | Reported label | Effective model | Basis | Requests | API-equivalent cost |
| --- | --- | --- | --- | --- | ---: | ---: |
| codex | openai | codex-auto-review | codex-auto-review | recorded | 291 | $0.00 |
| codex | openai | gpt-6-luna | gpt-6-luna | recorded | 481 | $0.84 to $1.63 |
| codex | openai | gpt-6.1-sol | gpt-6.1-sol | recorded | 1,134 | $30.97 to $57.76 |

## Quotas

Provider quota windows, percentages and resets are shown as observed. They are separate from local token totals and are not converted into tokens.

| Agent | Provider | Account | Bucket | Window | Resets at | Used | Observed at |
| --- | --- | --- | --- | --- | --- | ---: | --- |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 10:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 10:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 11:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 0.0% | 2026-11-04 14:39 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 0.0% | 2026-11-05 08:14 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 0.0% | 2026-11-05 08:14 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 0.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 0.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 1.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 1.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 1.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 1.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 1.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 2.0% | 2026-11-05 09:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 2.0% | 2026-11-05 09:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 2.0% | 2026-11-05 09:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 2.0% | 2026-11-05 09:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 3.0% | 2026-11-05 09:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 3.0% | 2026-11-05 09:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 3.0% | 2026-11-05 09:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 3.0% | 2026-11-05 09:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 3.0% | 2026-11-05 09:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 3.0% | 2026-11-05 09:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 3.0% | 2026-11-05 09:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 3.0% | 2026-11-05 09:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 3.0% | 2026-11-05 09:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 4.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 5.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 5.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 11:04 UTC | 5.0% | 2026-11-05 10:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 0.0% | 2026-11-05 11:56 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 0.0% | 2026-11-05 11:56 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 1.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:01 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:01 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:01 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:01 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 3.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 2.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 3.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 3.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 3.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 3.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 3.0% | 2026-11-05 12:04 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 3.0% | 2026-11-05 12:06 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 3.0% | 2026-11-05 12:06 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 4.0% | 2026-11-05 12:06 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 4.0% | 2026-11-05 12:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 4.0% | 2026-11-05 12:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 4.0% | 2026-11-05 12:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 4.0% | 2026-11-05 12:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 4.0% | 2026-11-05 12:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 4.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 4.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 4.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 5.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 4.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 5.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 5.0% | 2026-11-05 12:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 5.0% | 2026-11-05 12:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 5.0% | 2026-11-05 12:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 5.0% | 2026-11-05 12:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 5.0% | 2026-11-05 12:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 6.0% | 2026-11-05 12:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 6.0% | 2026-11-05 12:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 6.0% | 2026-11-05 12:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 6.0% | 2026-11-05 12:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 6.0% | 2026-11-05 12:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 7.0% | 2026-11-05 12:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 7.0% | 2026-11-05 12:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 7.0% | 2026-11-05 12:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 8.0% | 2026-11-05 12:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 8.0% | 2026-11-05 12:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 8.0% | 2026-11-05 12:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 8.0% | 2026-11-05 12:46 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 9.0% | 2026-11-05 12:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 9.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 9.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 10.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 10.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 10.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 10.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 10.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 10.0% | 2026-11-05 12:54 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 10.0% | 2026-11-05 12:54 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 10.0% | 2026-11-05 12:54 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 10.0% | 2026-11-05 12:55 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 11.0% | 2026-11-05 12:55 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 11.0% | 2026-11-05 12:55 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 11.0% | 2026-11-05 12:55 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 11.0% | 2026-11-05 12:56 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 11.0% | 2026-11-05 12:56 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 12.0% | 2026-11-05 12:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 12.0% | 2026-11-05 12:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 12.0% | 2026-11-05 12:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 12.0% | 2026-11-05 12:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 13.0% | 2026-11-05 12:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 13.0% | 2026-11-05 12:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 13.0% | 2026-11-05 12:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 13.0% | 2026-11-05 13:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 13.0% | 2026-11-05 13:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 13.0% | 2026-11-05 13:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 13.0% | 2026-11-05 13:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 13.0% | 2026-11-05 13:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 14.0% | 2026-11-05 13:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 14.0% | 2026-11-05 13:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 14.0% | 2026-11-05 13:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 14.0% | 2026-11-05 13:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 14.0% | 2026-11-05 14:04 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 15.0% | 2026-11-05 14:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 15.0% | 2026-11-05 14:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 15.0% | 2026-11-05 14:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 15.0% | 2026-11-05 14:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 15.0% | 2026-11-05 14:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 15.0% | 2026-11-05 14:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 15.0% | 2026-11-05 14:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:13 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:14 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:15 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:16 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:17 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:18 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:19 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:20 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:21 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:22 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:23 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:25 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:26 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:27 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:28 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:28 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:28 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:28 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:29 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 16.0% | 2026-11-05 14:29 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:30 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:31 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:31 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:31 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:33 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:34 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:34 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:34 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 17.0% | 2026-11-05 14:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 18.0% | 2026-11-05 14:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 18.0% | 2026-11-05 14:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 18.0% | 2026-11-05 14:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 18.0% | 2026-11-05 14:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 18.0% | 2026-11-05 14:37 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 18.0% | 2026-11-05 14:37 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 18.0% | 2026-11-05 14:37 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 18.0% | 2026-11-05 14:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 20.0% | 2026-11-05 14:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 20.0% | 2026-11-05 14:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 20.0% | 2026-11-05 14:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 20.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 20.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 20.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 20.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 20.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 20.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 20.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 20.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 21.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 21.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 21.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 21.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 21.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 21.0% | 2026-11-05 14:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 21.0% | 2026-11-05 14:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 21.0% | 2026-11-05 14:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 21.0% | 2026-11-05 14:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 21.0% | 2026-11-05 14:46 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 22.0% | 2026-11-05 14:46 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 22.0% | 2026-11-05 15:12 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 22.0% | 2026-11-05 15:12 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 22.0% | 2026-11-05 15:13 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 22.0% | 2026-11-05 15:13 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 23.0% | 2026-11-05 15:14 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 23.0% | 2026-11-05 15:15 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 23.0% | 2026-11-05 15:16 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 23.0% | 2026-11-05 15:17 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 23.0% | 2026-11-05 15:18 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 23.0% | 2026-11-05 15:19 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 23.0% | 2026-11-05 15:20 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 24.0% | 2026-11-05 15:21 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 24.0% | 2026-11-05 15:22 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 24.0% | 2026-11-05 15:23 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 24.0% | 2026-11-05 15:24 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 24.0% | 2026-11-05 15:25 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 24.0% | 2026-11-05 15:27 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 24.0% | 2026-11-05 15:28 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 24.0% | 2026-11-05 15:29 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 25.0% | 2026-11-05 15:30 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 25.0% | 2026-11-05 15:31 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 25.0% | 2026-11-05 15:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 25.0% | 2026-11-05 15:33 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 25.0% | 2026-11-05 15:34 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 25.0% | 2026-11-05 15:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 25.0% | 2026-11-05 15:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 26.0% | 2026-11-05 15:37 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 26.0% | 2026-11-05 15:38 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 26.0% | 2026-11-05 15:39 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 26.0% | 2026-11-05 15:40 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 26.0% | 2026-11-05 15:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 26.0% | 2026-11-05 15:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 26.0% | 2026-11-05 15:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 26.0% | 2026-11-05 15:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 27.0% | 2026-11-05 15:46 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 27.0% | 2026-11-05 15:47 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 27.0% | 2026-11-05 15:48 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 27.0% | 2026-11-05 15:49 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 27.0% | 2026-11-05 15:50 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 27.0% | 2026-11-05 15:51 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 27.0% | 2026-11-05 15:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 27.0% | 2026-11-05 15:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 28.0% | 2026-11-05 15:54 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 28.0% | 2026-11-05 15:55 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 28.0% | 2026-11-05 15:56 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 28.0% | 2026-11-05 15:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 28.0% | 2026-11-05 15:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 28.0% | 2026-11-05 15:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 28.0% | 2026-11-05 16:00 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 29.0% | 2026-11-05 16:01 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 29.0% | 2026-11-05 16:02 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 29.0% | 2026-11-05 16:02 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 29.0% | 2026-11-05 16:02 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 29.0% | 2026-11-05 16:02 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 29.0% | 2026-11-05 16:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 29.0% | 2026-11-05 16:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 30.0% | 2026-11-05 16:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 30.0% | 2026-11-05 16:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 30.0% | 2026-11-05 16:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 30.0% | 2026-11-05 16:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 30.0% | 2026-11-05 16:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 30.0% | 2026-11-05 16:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 31.0% | 2026-11-05 16:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 31.0% | 2026-11-05 16:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 31.0% | 2026-11-05 16:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 31.0% | 2026-11-05 16:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 32.0% | 2026-11-05 16:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 32.0% | 2026-11-05 16:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 32.0% | 2026-11-05 16:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 32.0% | 2026-11-05 16:10 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 32.0% | 2026-11-05 16:10 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 33.0% | 2026-11-05 16:10 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 33.0% | 2026-11-05 16:11 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 34.0% | 2026-11-05 16:11 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 34.0% | 2026-11-05 16:11 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 34.0% | 2026-11-05 16:12 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 35.0% | 2026-11-05 16:12 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 35.0% | 2026-11-05 16:13 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 35.0% | 2026-11-05 16:14 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 36.0% | 2026-11-05 16:14 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 36.0% | 2026-11-05 16:15 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 37.0% | 2026-11-05 16:16 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 37.0% | 2026-11-05 16:16 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 40.0% | 2026-11-05 16:24 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 37.0% | 2026-11-05 16:24 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 40.0% | 2026-11-05 16:24 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 40.0% | 2026-11-05 16:26 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 41.0% | 2026-11-05 16:28 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 42.0% | 2026-11-05 16:28 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 42.0% | 2026-11-05 16:29 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 43.0% | 2026-11-05 16:29 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 43.0% | 2026-11-05 16:29 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 43.0% | 2026-11-05 16:30 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 44.0% | 2026-11-05 16:30 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 44.0% | 2026-11-05 16:30 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 44.0% | 2026-11-05 16:30 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 44.0% | 2026-11-05 16:31 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 45.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 45.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 45.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 46.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 46.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 46.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 46.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 46.0% | 2026-11-05 16:33 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 47.0% | 2026-11-05 16:33 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 47.0% | 2026-11-05 16:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 47.0% | 2026-11-05 16:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 48.0% | 2026-11-05 16:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 48.0% | 2026-11-05 16:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 48.0% | 2026-11-05 16:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 50.0% | 2026-11-05 16:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 49.0% | 2026-11-05 16:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 50.0% | 2026-11-05 16:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 50.0% | 2026-11-05 16:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 50.0% | 2026-11-05 16:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 51.0% | 2026-11-05 16:46 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 51.0% | 2026-11-05 16:46 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 52.0% | 2026-11-05 16:47 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 52.0% | 2026-11-05 16:47 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 52.0% | 2026-11-05 16:47 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 53.0% | 2026-11-05 16:48 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 53.0% | 2026-11-05 16:48 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 54.0% | 2026-11-05 16:48 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 55.0% | 2026-11-05 16:49 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 55.0% | 2026-11-05 16:50 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 56.0% | 2026-11-05 16:50 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 56.0% | 2026-11-05 16:50 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 57.0% | 2026-11-05 16:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 58.0% | 2026-11-05 16:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 58.0% | 2026-11-05 16:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 59.0% | 2026-11-05 16:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 59.0% | 2026-11-05 16:54 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 59.0% | 2026-11-05 16:54 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 60.0% | 2026-11-05 16:55 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 61.0% | 2026-11-05 16:55 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 61.0% | 2026-11-05 16:56 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 16:56 UTC | 62.0% | 2026-11-05 16:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 0.0% | 2026-11-05 16:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 0.0% | 2026-11-05 16:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 1.0% | 2026-11-05 17:00 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 1.0% | 2026-11-05 17:00 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 1.0% | 2026-11-05 17:00 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 2.0% | 2026-11-05 17:01 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 2.0% | 2026-11-05 17:01 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 3.0% | 2026-11-05 17:01 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 2.0% | 2026-11-05 17:01 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 3.0% | 2026-11-05 17:02 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 3.0% | 2026-11-05 17:02 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 3.0% | 2026-11-05 17:02 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 4.0% | 2026-11-05 17:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 4.0% | 2026-11-05 17:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 4.0% | 2026-11-05 17:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 5.0% | 2026-11-05 17:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 5.0% | 2026-11-05 17:06 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 6.0% | 2026-11-05 17:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 6.0% | 2026-11-05 17:08 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 6.0% | 2026-11-05 17:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 7.0% | 2026-11-05 17:10 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 7.0% | 2026-11-05 17:11 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 8.0% | 2026-11-05 17:12 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 8.0% | 2026-11-05 17:13 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 8.0% | 2026-11-05 17:14 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 9.0% | 2026-11-05 17:15 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 9.0% | 2026-11-05 17:16 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 9.0% | 2026-11-05 17:17 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 10.0% | 2026-11-05 17:18 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 10.0% | 2026-11-05 17:19 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 10.0% | 2026-11-05 17:19 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 11.0% | 2026-11-05 17:20 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 11.0% | 2026-11-05 17:23 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 12.0% | 2026-11-05 17:23 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 12.0% | 2026-11-05 17:28 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 15.0% | 2026-11-05 17:30 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 14.0% | 2026-11-05 17:30 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 15.0% | 2026-11-05 17:31 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 15.0% | 2026-11-05 17:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 16.0% | 2026-11-05 17:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 16.0% | 2026-11-05 17:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 16.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 17.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 17.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 18.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 17.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 18.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 18.0% | 2026-11-05 17:37 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 18.0% | 2026-11-05 17:37 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 19.0% | 2026-11-05 17:37 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 19.0% | 2026-11-05 17:40 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 20.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 20.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 20.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 21.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 21.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 21.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 21.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 22.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 23.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 23.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 23.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 23.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 23.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 23.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 23.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 24.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 24.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 24.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 24.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 24.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 25.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 25.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 25.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 22.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 25.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 27.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 27.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 27.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 27.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 27.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 28.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 28.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 28.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 29.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 28.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 29.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 30.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 30.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 31.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 29.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 32.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 31.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 32.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 33.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 34.0% | 2026-11-05 17:46 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 33.0% | 2026-11-05 17:46 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 34.0% | 2026-11-05 17:46 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 35.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 37.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 36.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 35.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 37.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 37.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 38.0% | 2026-11-05 17:48 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 37.0% | 2026-11-05 17:48 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 39.0% | 2026-11-05 17:48 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 38.0% | 2026-11-05 17:49 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 41.0% | 2026-11-05 17:49 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 40.0% | 2026-11-05 17:49 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 41.0% | 2026-11-05 17:49 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 42.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 43.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 43.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 43.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 43.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 44.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 44.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 44.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 45.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 45.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 44.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 45.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 46.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 46.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 41.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 46.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 49.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 48.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 50.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 50.0% | 2026-11-05 17:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 47.0% | 2026-11-05 17:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 50.0% | 2026-11-05 17:53 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 51.0% | 2026-11-05 17:54 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 51.0% | 2026-11-05 17:54 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 52.0% | 2026-11-05 17:54 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 50.0% | 2026-11-05 17:54 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 53.0% | 2026-11-05 17:55 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 53.0% | 2026-11-05 17:56 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 53.0% | 2026-11-05 17:56 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 54.0% | 2026-11-05 17:57 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 54.0% | 2026-11-05 17:58 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 55.0% | 2026-11-05 17:59 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 55.0% | 2026-11-05 18:00 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 56.0% | 2026-11-05 18:01 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 57.0% | 2026-11-05 18:02 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 57.0% | 2026-11-05 18:02 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 56.0% | 2026-11-05 18:02 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 58.0% | 2026-11-05 18:02 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 60.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 62.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 62.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 64.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 63.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 59.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 66.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 65.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 66.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 68.0% | 2026-11-05 18:04 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 67.0% | 2026-11-05 18:04 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 65.0% | 2026-11-05 18:04 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 68.0% | 2026-11-05 18:04 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 70.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 70.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 70.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 70.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 68.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 71.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 72.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 72.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 72.0% | 2026-11-05 18:06 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 71.0% | 2026-11-05 18:06 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 72.0% | 2026-11-05 18:06 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 73.0% | 2026-11-05 18:06 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 73.0% | 2026-11-05 18:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 74.0% | 2026-11-05 18:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 75.0% | 2026-11-05 18:07 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 75.0% | 2026-11-05 18:09 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 76.0% | 2026-11-05 18:10 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 76.0% | 2026-11-05 18:11 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 77.0% | 2026-11-05 18:12 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 77.0% | 2026-11-05 18:13 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 78.0% | 2026-11-05 18:14 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 78.0% | 2026-11-05 18:15 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 79.0% | 2026-11-05 18:16 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 79.0% | 2026-11-05 18:17 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 80.0% | 2026-11-05 18:18 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 80.0% | 2026-11-05 18:19 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 81.0% | 2026-11-05 18:20 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 81.0% | 2026-11-05 18:21 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 82.0% | 2026-11-05 18:22 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 82.0% | 2026-11-05 18:23 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 83.0% | 2026-11-05 18:24 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 83.0% | 2026-11-05 18:25 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 84.0% | 2026-11-05 18:25 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 84.0% | 2026-11-05 18:26 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 85.0% | 2026-11-05 18:26 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 85.0% | 2026-11-05 18:26 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 85.0% | 2026-11-05 18:27 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 86.0% | 2026-11-05 18:27 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 86.0% | 2026-11-05 18:27 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 86.0% | 2026-11-05 18:27 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 88.0% | 2026-11-05 18:29 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 87.0% | 2026-11-05 18:29 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 88.0% | 2026-11-05 18:30 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 88.0% | 2026-11-05 18:31 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 89.0% | 2026-11-05 18:31 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 90.0% | 2026-11-05 18:32 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 90.0% | 2026-11-05 18:33 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 91.0% | 2026-11-05 18:34 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 92.0% | 2026-11-05 18:34 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 92.0% | 2026-11-05 18:35 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 93.0% | 2026-11-05 18:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 93.0% | 2026-11-05 18:36 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 94.0% | 2026-11-05 18:38 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 95.0% | 2026-11-05 18:38 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 95.0% | 2026-11-05 18:38 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 95.0% | 2026-11-05 18:39 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 96.0% | 2026-11-05 18:40 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 96.0% | 2026-11-05 18:40 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 97.0% | 2026-11-05 18:40 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 99.0% | 2026-11-05 18:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 98.0% | 2026-11-05 18:41 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 99.0% | 2026-11-05 18:42 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 99.0% | 2026-11-05 18:43 UTC |
| codex | Unknown | local | codex:primary | 5 h | 2026-11-05 21:57 UTC | 99.0% | 2026-11-05 18:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:14 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:14 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:30 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:30 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:30 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:30 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:30 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:30 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:31 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:31 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:32 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:32 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:32 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:32 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:33 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:33 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:35 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 12.0% | 2026-11-05 19:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 13.0% | 2026-11-05 19:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 14.0% | 2026-11-05 19:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:33 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:33 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:33 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:33 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:33 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:35 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:35 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:36 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:36 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:36 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 17.0% | 2026-11-05 20:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 18.0% | 2026-11-05 20:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 20:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 20:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 20:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 20:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 20:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 21:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 21:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 21:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 21:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 21:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 21:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 21:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-05 21:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 00:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 01:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 01:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 01:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 01:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 19.0% | 2026-11-06 01:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 20.0% | 2026-11-06 01:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 20.0% | 2026-11-06 01:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 08:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 08:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 08:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 08:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 08:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 08:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 08:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 08:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:31 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:31 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:32 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:32 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 09:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:03 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:06 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:06 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 23.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:12 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:13 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:14 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:14 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:14 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 10:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:03 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:06 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:14 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:14 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 24.0% | 2026-11-06 11:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:24 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:30 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:30 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:32 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:32 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:32 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:36 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:36 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 25.0% | 2026-11-06 11:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 11:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:03 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:03 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:03 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:06 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:06 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:11 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:11 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:11 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:11 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:12 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:12 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:12 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:12 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:13 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:14 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:17 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 26.0% | 2026-11-06 12:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:23 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:24 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:24 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:24 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:24 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:24 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:28 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:30 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:31 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:31 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:31 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:32 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:35 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:35 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:36 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 27.0% | 2026-11-06 12:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 12:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:03 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:03 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:06 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:11 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:13 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:16 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:18 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:21 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:27 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 28.0% | 2026-11-06 13:29 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:31 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:31 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:34 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:35 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:36 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:54 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 13:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:03 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:03 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:04 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:05 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:06 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:07 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:08 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 29.0% | 2026-11-06 14:09 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:10 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:11 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:11 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:12 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:12 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:14 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:14 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:14 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:15 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:19 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:20 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:22 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:24 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:25 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:26 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:36 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:37 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:38 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:39 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:40 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:41 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:42 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:43 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:44 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:45 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:46 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:47 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:48 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:49 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:50 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:51 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:52 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:53 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 14:55 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 30.0% | 2026-11-06 14:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 14:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 14:56 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 14:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 14:57 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 14:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 14:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 14:58 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 14:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 14:59 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:00 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:01 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:02 UTC |
| codex | Unknown | local | codex:primary | 7 d | 2026-11-11 10:53 UTC | 31.0% | 2026-11-06 15:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 08:14 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 08:14 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 09:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 10:18 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 10:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 18.0% | 2026-11-05 11:56 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:56 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 11:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:00 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:01 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:01 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:01 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:01 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:04 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:06 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:06 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:06 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 19.0% | 2026-11-05 12:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:46 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:54 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:54 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:54 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:55 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:55 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:55 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:55 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:56 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:56 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 12:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 20.0% | 2026-11-05 13:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 13:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 13:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 13:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 13:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 13:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 13:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 13:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 13:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:04 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:13 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:14 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:15 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:16 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:17 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:18 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:19 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:20 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:21 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:22 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:23 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:25 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:26 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:27 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:28 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:28 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:28 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:28 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:29 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:29 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:30 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:31 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:31 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:31 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:33 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:34 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:34 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:34 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:37 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:37 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:37 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 21.0% | 2026-11-05 14:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:46 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 14:46 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:12 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:12 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:13 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:13 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:14 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:15 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:16 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:17 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:18 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:19 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:20 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:21 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:22 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:23 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:24 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:25 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:27 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:28 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:29 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:30 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:31 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:33 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:34 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:37 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:38 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 22.0% | 2026-11-05 15:39 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:40 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:46 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:47 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:48 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:49 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:50 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:51 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:54 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:55 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:56 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 15:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:00 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:01 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 23.0% | 2026-11-05 16:10 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:10 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:10 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:11 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:11 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:11 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:12 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:12 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:13 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:14 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:14 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:15 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:16 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:16 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:24 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 24.0% | 2026-11-05 16:24 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:24 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:26 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:28 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:28 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:29 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:29 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:29 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:30 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:30 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:30 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:30 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:31 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 25.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:33 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:33 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:46 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 26.0% | 2026-11-05 16:46 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:47 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:47 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:47 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:48 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:48 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:48 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:49 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:50 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:50 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:50 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 27.0% | 2026-11-05 16:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 16:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 16:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 16:54 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 16:54 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 16:55 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 16:55 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 16:56 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 16:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 16:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 16:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 17:00 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 17:00 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 17:00 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:01 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 28.0% | 2026-11-05 17:01 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:01 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:01 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:06 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:08 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:10 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:11 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:12 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:13 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 29.0% | 2026-11-05 17:14 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 30.0% | 2026-11-05 17:15 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 30.0% | 2026-11-05 17:16 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 30.0% | 2026-11-05 17:17 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 30.0% | 2026-11-05 17:18 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 30.0% | 2026-11-05 17:19 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 30.0% | 2026-11-05 17:19 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 30.0% | 2026-11-05 17:20 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 30.0% | 2026-11-05 17:23 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 30.0% | 2026-11-05 17:23 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 30.0% | 2026-11-05 17:28 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:30 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 30.0% | 2026-11-05 17:30 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:31 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:37 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:37 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:37 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:40 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 31.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 32.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:44 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:45 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:46 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:46 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 33.0% | 2026-11-05 17:46 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:47 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:48 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:48 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:48 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:49 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:49 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 34.0% | 2026-11-05 17:49 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:49 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:51 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 36.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 36.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 36.0% | 2026-11-05 17:52 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 36.0% | 2026-11-05 17:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 35.0% | 2026-11-05 17:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 36.0% | 2026-11-05 17:53 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 36.0% | 2026-11-05 17:54 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 36.0% | 2026-11-05 17:54 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 36.0% | 2026-11-05 17:54 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 36.0% | 2026-11-05 17:54 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 17:55 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 36.0% | 2026-11-05 17:56 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 17:56 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 17:57 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 17:58 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 17:59 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 18:00 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 18:01 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 18:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 18:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 18:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 18:02 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 38.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 38.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 38.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 38.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 38.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 37.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 38.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 38.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:03 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:04 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:04 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 38.0% | 2026-11-05 18:04 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:04 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:05 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:06 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:06 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 39.0% | 2026-11-05 18:06 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:06 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:07 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:09 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:10 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:11 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:12 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:13 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:14 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:15 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 40.0% | 2026-11-05 18:16 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:17 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:18 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:19 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:20 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:21 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:22 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:23 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:24 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:25 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:25 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:26 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:26 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:26 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 41.0% | 2026-11-05 18:27 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:27 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:27 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:27 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:29 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:29 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:30 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:31 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:31 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:32 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:33 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:34 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 42.0% | 2026-11-05 18:34 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 43.0% | 2026-11-05 18:35 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 43.0% | 2026-11-05 18:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 43.0% | 2026-11-05 18:36 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 43.0% | 2026-11-05 18:38 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 43.0% | 2026-11-05 18:38 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 43.0% | 2026-11-05 18:38 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 43.0% | 2026-11-05 18:39 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 43.0% | 2026-11-05 18:40 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 43.0% | 2026-11-05 18:40 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 43.0% | 2026-11-05 18:40 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 44.0% | 2026-11-05 18:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 43.0% | 2026-11-05 18:41 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 44.0% | 2026-11-05 18:42 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 44.0% | 2026-11-05 18:43 UTC |
| codex | Unknown | local | codex:secondary | 7 d | 2026-11-11 18:18 UTC | 44.0% | 2026-11-05 18:43 UTC |

### Descriptive quota estimates

| Agent | Bucket | Status | Reason | Samples | Tokens per point | API-equivalent cost per point |
| --- | --- | --- | --- | ---: | ---: | ---: |
| codex | codex:primary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 1 | Unknown | Unknown |
| codex | codex:primary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 1,225 | Unknown | Unknown |
| codex | codex:primary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 109 | Unknown | Unknown |
| codex | codex:primary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 14 | Unknown | Unknown |
| codex | codex:secondary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 577 | Unknown | Unknown |
| codex | codex:primary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 23 | Unknown | Unknown |
| codex | codex:primary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 1 | Unknown | Unknown |
| codex | codex:primary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 311 | Unknown | Unknown |
| codex | codex:primary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 2 | Unknown | Unknown |
| codex | codex:primary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 1 | Unknown | Unknown |
| codex | codex:primary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 224 | Unknown | Unknown |
| codex | codex:primary | unavailable | Declare complete device/cloud coverage to attempt empirical calibration. | 1 | Unknown | Unknown |

Estimates describe compatible observations only. The provider's quota formula is unknown; they are not an allowance or a forecast.

### Local activity windows

Local activity measured as of (2026-11-06 15:03 UTC). These rolling windows are not provider quota periods, and the 7-day window can start before the report period.

| Window | Requests | Total tokens | Requests missing usage |
| --- | ---: | ---: | ---: |
| 5 hours | 774 | 102,189,534 | 0 |
| 7 days | 1,906 | 244,751,288 | 0 |

## Coverage

| Source | Agent | Device | Origin | Contract | Files seen | Files parsed | Rows seen | Malformed rows |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: |
| 6c474ef0e19e | codex | local | local | observed-local | 1 | 1 | 84 | 0 |
| 68efefd5b946 | codex | local | local | observed-local | 1 | 1 | 81 | 0 |
| 9c7b29d8a17d | codex | local | local | observed-local | 1 | 1 | 69 | 0 |
| 8428f0d7822c | codex | local | local | observed-local | 1 | 1 | 41 | 0 |
| e3884b3e3ce2 | codex | local | local | observed-local | 1 | 1 | 29 | 0 |
| e66f585c266e | codex | local | local | observed-local | 1 | 1 | 185 | 0 |
| b3afefc59f95 | codex | local | local | observed-local | 1 | 1 | 17 | 0 |
| 709fe49d66d5 | codex | local | local | observed-local | 1 | 1 | 53 | 0 |
| ddca5926a648 | codex | local | local | observed-local | 1 | 1 | 50 | 0 |
| 493fa3532c2e | codex | local | local | observed-local | 1 | 1 | 29 | 0 |
| fa1f1063dc53 | codex | local | local | observed-local | 1 | 1 | 2 | 0 |
| 8072041de35f | codex | local | local | observed-local | 1 | 1 | 181 | 0 |
| 2888cd2b680d | codex | local | local | observed-local | 1 | 1 | 172 | 0 |
| d0a66b76c26d | codex | local | local | observed-local | 1 | 1 | 234 | 0 |
| 77350d55955a | codex | local | local | observed-local | 1 | 1 | 52 | 0 |
| 41925533da3b | codex | local | local | observed-local | 1 | 1 | 235 | 0 |
| 3ff242582a9c | codex | local | local | observed-local | 1 | 1 | 61 | 0 |
| ed1530956375 | codex | local | local | observed-local | 1 | 1 | 48 | 0 |
| 6a94a8fef016 | codex | local | local | observed-local | 1 | 1 | 1,359 | 0 |
| 5ab7de48458b | codex | local | local | observed-local | 1 | 1 | 245 | 0 |
| 21ec45d450e9 | codex | local | local | observed-local | 1 | 1 | 790 | 0 |
| 2dc0e368ad10 | codex | local | local | observed-local | 1 | 1 | 178 | 0 |
| 6e97f4f0d4b1 | codex | local | local | observed-local | 1 | 1 | 351 | 0 |
| 79481c4ac5a8 | codex | local | local | observed-local | 1 | 1 | 116 | 0 |
| 9d2dda4fef29 | codex | local | local | observed-local | 1 | 1 | 170 | 0 |
| bf3075f1b195 | codex | local | local | observed-local | 1 | 1 | 142 | 0 |
| d32ecda9a274 | codex | local | local | observed-local | 1 | 1 | 9 | 0 |
| 3e23ec97d1d3 | codex | local | local | observed-local | 1 | 1 | 15 | 0 |
| 4fddf9319040 | codex | local | local | observed-local | 1 | 1 | 1,082 | 0 |
| 1f9238626187 | codex | local | local | observed-local | 1 | 1 | 514 | 0 |
| 246d3723e330 | codex | local | local | observed-local | 1 | 1 | 55 | 0 |
| 22bc2e972c2a | codex | local | local | observed-local | 1 | 1 | 80 | 0 |
| 297d51597d35 | codex | local | local | observed-local | 1 | 1 | 2 | 0 |
| b1b3ff3be6f0 | codex | local | local | observed-local | 1 | 1 | 185 | 0 |
| ee7e08df6e22 | codex | local | local | observed-local | 1 | 1 | 3 | 0 |
| 78e13e8c5017 | codex | local | local | observed-local | 1 | 1 | 41 | 0 |
| 5b04857a77e6 | codex | local | local | observed-local | 1 | 1 | 2 | 0 |
| 80151ad295c5 | codex | local | local | observed-local | 1 | 1 | 20 | 0 |
| 9184ae515f82 | codex | local | local | observed-local | 1 | 1 | 194 | 0 |
| 16bf5785da6a | codex | local | local | observed-local | 1 | 1 | 63 | 0 |
| 4bdd82f311aa | codex | local | local | observed-local | 1 | 1 | 3 | 0 |
| 4631a1246604 | codex | local | local | observed-local | 1 | 1 | 88 | 0 |
| 6c10780e6dac | codex | local | local | observed-local | 1 | 1 | 67 | 0 |
| aea90bafc74f | codex | local | local | observed-local | 1 | 1 | 39 | 0 |
| 4fc8c30578bc | codex | local | local | observed-local | 1 | 1 | 1,418 | 0 |
| c701b930995e | codex | local | local | observed-local | 1 | 1 | 60 | 0 |
| 142a1293bf8f | codex | local | local | observed-local | 1 | 1 | 562 | 0 |
| e03a83608584 | codex | local | local | observed-local | 1 | 1 | 826 | 0 |
| 8563d13e263c | codex | local | local | observed-local | 1 | 1 | 531 | 0 |
| 1792611a1483 | codex | local | local | observed-local | 1 | 1 | 35 | 0 |
| 28cc0e14dbb4 | codex | local | local | observed-local | 1 | 1 | 132 | 0 |
| ff6e4786221a | codex | local | local | observed-local | 1 | 1 | 29 | 0 |
| 026c516a7003 | codex | local | local | observed-local | 1 | 1 | 3 | 0 |
| 7a75ded0854b | codex | local | local | observed-local | 1 | 1 | 3 | 0 |
| 72aa93d08a2a | codex | local | local | observed-local | 1 | 1 | 73 | 0 |
| 69da6c8832eb | codex | local | local | observed-local | 1 | 1 | 64 | 0 |
| 7a872428115f | codex | local | local | observed-local | 1 | 1 | 2,991 | 0 |
| 4a5ee26459d8 | codex | local | local | observed-local | 1 | 1 | 1,102 | 0 |
| 3e32b2a1948f | codex | local | local | observed-local | 1 | 1 | 23 | 0 |
| 3b6d775beeb0 | codex | local | local | observed-local | 1 | 1 | 628 | 0 |
| 9baa7ed20344 | codex | local | local | observed-local | 1 | 1 | 344 | 0 |
| a7a482f52559 | codex | local | local | observed-local | 1 | 1 | 93 | 0 |
| a7d6474cc08c | codex | local | local | observed-local | 1 | 1 | 354 | 0 |
| 50f1047e51e2 | codex | local | local | observed-local | 1 | 1 | 134 | 0 |
| 200d5cfc52a2 | codex | local | local | observed-local | 1 | 1 | 85 | 0 |
| b2944ef013e4 | codex | local | local | observed-local | 1 | 1 | 28 | 0 |
| a0dcd170c20c | codex | local | local | observed-local | 1 | 1 | 246 | 0 |
| fd7e03f5896b | codex | local | local | observed-local | 1 | 1 | 49 | 0 |
| bd4dbea5a2d2 | codex | local | local | observed-local | 1 | 1 | 53 | 0 |

Data from other devices, provider-hosted tasks and deleted histories may be absent. Local totals are not the complete account history.

### Warnings

No warnings.

## Pricing

> Costs are API-equivalent estimates from a versioned public rate card. They are not an invoice and not subscription payments.

- Rate card version: 2026-10-17.2
- Verified at: 2026-10-17
- Source: openai: https://developers.openai.com/api/docs/pricing; anthropic: https://platform.claude.com/docs/en/about-claude/pricing; zai: https://docs.z.ai/guides/overview/pricing

Requests are priced individually before aggregation. A range appears when a billing dimension such as cache-write duration or prompt tier is unknown. Unknown models stay unpriced.

## Methodology

- Input tokens include cache reads and cache writes; ordinary input is input minus both.
- Output tokens include reasoning. Reasoning is shown as a subset and never added again.
- Total processed tokens are input plus output, summed over every request in scope. They are historical work, not the current context size.
- Missing values are shown as Unknown, never as zero. Totals are known lower bounds when some requests lack counts.
- Repeated snapshots and overlapping sources are reconciled before aggregation, so the same activity is counted once.
- Context is anchored to the latest measured request. Category sizes are character-based estimates of recorded visible content, not provider tokenization. The unattributed residual is kept separate and categories are never rescaled to fit the measurement.
- Tool and skill figures are visible content sizes and invocation counts, not causal charges.
- Quota figures are provider observations with their own windows and resets.
- Context estimation method: visible characters / 4.0; range characters / 6 to / 2.
