// chat/completion.ts
// Pure terminal bookkeeping for one chat attempt: no I/O, no SDK types, no state.
// A completion is successful only with non-empty saved text and no error signal:
// empty output and error, length, content-filter endings must never look successful.

export interface TerminalInput {
  finished: boolean;
  aborted: boolean;
  errorForwarded: boolean;
  savedText: string;
  finishReason?: string;
}

export interface TerminalPlan {
  status: 'complete' | 'failed' | 'cancelled';
  forwardError: boolean;
}

const unsuccessfulEndings = new Set(['error', 'length', 'content-filter']);

export function terminalPlan(input: TerminalInput): TerminalPlan {
  if (input.finished && !input.aborted) {
    const ok = !input.errorForwarded
      && (input.finishReason === undefined || !unsuccessfulEndings.has(input.finishReason))
      && input.savedText.trim().length > 0;
    return { status: ok ? 'complete' : 'failed', forwardError: !ok && !input.errorForwarded };
  }
  if (input.aborted) return { status: 'cancelled', forwardError: false };
  return { status: 'failed', forwardError: !input.errorForwarded };
}
