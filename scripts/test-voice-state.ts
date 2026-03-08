import assert from "node:assert/strict";
import { initialVoiceStudioState, voiceStudioReducer } from "../src/voice/voiceState.ts";

const requestA = "req-A";
const requestB = "req-B";

const started = voiceStudioReducer(initialVoiceStudioState, {
  type: "start-generation",
  requestId: requestA,
});
assert.equal(started.generationStatus, "generating");
assert.equal(started.activeRequestId, requestA);

const staleIgnored = voiceStudioReducer(started, {
  type: "generation-success",
  requestId: requestB,
  sourceUrl: "https://cdn.example.com/stale.mp3",
});
assert.equal(staleIgnored.sourceUrl, null);
assert.equal(staleIgnored.generationStatus, "generating");

const freshApplied = voiceStudioReducer(started, {
  type: "generation-success",
  requestId: requestA,
  sourceUrl: "https://cdn.example.com/fresh.mp3",
  apiResponse: "ok",
});
assert.equal(freshApplied.sourceUrl, "https://cdn.example.com/fresh.mp3");
assert.equal(freshApplied.generationStatus, "ready");
assert.equal(freshApplied.activeRequestId, null);

const errored = voiceStudioReducer(started, {
  type: "generation-error",
  requestId: requestA,
  error: "network-failed",
});
assert.equal(errored.generationStatus, "error");
assert.equal(errored.playbackStatus, "error");
assert.equal(errored.lastError, "network-failed");

console.log("voice state tests passed");
