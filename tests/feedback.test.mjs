import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const feedback = await readFile('feedback.js', 'utf8');
const config = await readFile('feedback-config.js', 'utf8');
const sql = await readFile('SUPABASE_FEEDBACK_SETUP.sql', 'utf8');

test('feedback UI is available from the shared layout', () => {
  assert.match(html, /id="open-feedback"/);
  assert.match(html, /id="feedback-form"/);
  assert.match(html, /src="feedback\.js"/);
});

test('feedback records page context and uses the public Data API only for inserts', () => {
  assert.match(feedback, /topic_slug/);
  assert.match(feedback, /topic_title/);
  assert.match(feedback, /section: context\.section/);
  assert.match(feedback, /method: 'POST'/);
  assert.match(feedback, /Prefer: 'return=minimal'/);
  assert.doesNotMatch(feedback, /service_role|secret/i);
  assert.match(config, /sb_publishable_/);
});

test('feedback SQL grants anonymous insert and does not grant anonymous reads', () => {
  assert.match(sql, /enable row level security/i);
  assert.match(sql, /grant insert on table public\.feedback to anon/i);
  assert.match(sql, /for insert\s+to anon/i);
  assert.match(sql, /revoke all on table public\.feedback from anon, authenticated/i);
});
