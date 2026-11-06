import test from 'node:test';
import assert from 'node:assert/strict';
import { assessEscalation } from './client.js';
import type { CaseInput } from '../../domain/rules.js';
import type { PreparedImage } from '../../images/prepare.js';
import type { DecisionAssessment } from '../../domain/contracts.js';

test('already cancelled escalation fails before configuration, image access or any network request', async () => {
  const reason = new Error('Local cancellation');
  await assert.rejects(assessEscalation({} as CaseInput, {} as PreparedImage, {} as DecisionAssessment, [], AbortSignal.abort(reason)), error => error === reason);
});
