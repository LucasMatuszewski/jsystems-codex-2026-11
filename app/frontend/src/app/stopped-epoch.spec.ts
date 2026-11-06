import { DeferBlockBehavior, TestBed } from '@angular/core/testing';
import { Chat } from '@ai-sdk/angular';
import type { UIMessage } from 'ai';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { vi } from 'vitest';
import { App } from './app';
import type { CaseView } from './features/case-panel/case-view';

const capture = JSON.parse(await readFile(resolve('../tests/fixtures/case/reset-race-live.json'), 'utf8'));

describe('stopped response isolation after reset', () => {
  afterEach(() => { vi.restoreAllMocks(); vi.unstubAllGlobals(); });

  it('does not let a delayed stop callback query or overwrite a new case', async () => {
    const requests: string[] = [];
    vi.stubGlobal('fetch', vi.fn(async (_url: unknown, init?: RequestInit) => {
      const method = init?.method ?? 'GET';
      requests.push(method);
      const response = capture.calls.find((call: { request: { method: string }; response: { status: number } }) => call.request.method === method && (method === 'DELETE' || call.response.status === 410))?.response;
      if (!response) throw new Error('No fresh captured response for this request.');
      return new Response(response.status === 204 ? null : response.body, { status: response.status, headers: response.headers });
    }));
    await TestBed.configureTestingModule({ imports: [App], deferBlockBehavior: DeferBlockBehavior.Playthrough }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const app = fixture.componentInstance;
    const original: CaseView = JSON.parse(capture.calls[0].response.body);
    app.caseView.set(original);
    app.caseToken.set(original.caseToken);
    const oldChat = new Chat<UIMessage>({ messages: [] });
    let finishOldStop!: () => void;
    const delayedStop = new Promise<void>(resolve => { finishOldStop = resolve; });
    vi.spyOn(oldChat, 'stop').mockImplementationOnce(() => delayedStop).mockResolvedValue(undefined);
    app.chatInstance.set(oldChat);
    const stopped = app.onStopped();
    app.openReset();
    await fixture.whenStable();
    const confirm = Array.from(document.body.querySelectorAll('button')).find(button => button.textContent?.trim() === 'Rozpocznij nową sprawę');
    expect(confirm).toBeTruthy();
    confirm!.click();
    await expect.poll(() => app.caseToken()).toBeNull();
    const newToken = 'new-pure-ui-case';
    app.caseToken.set(newToken);
    app.caseView.set({ ...original, caseToken: newToken, turns: [] });
    app.chatInstance.set(new Chat<UIMessage>({ messages: [] }));
    finishOldStop();
    await stopped;
    expect(requests).toEqual(['DELETE']);
    expect(app.caseToken()).toBe(newToken);
    expect(app.sessionError()).toBeNull();
  });
});
