import test from 'node:test';
import assert from 'node:assert/strict';
import { remainingSections, remainingTopics, remainingTopicBySlug } from '../remaining-data.js';

const expected = { 3: 14, 4: 22, 5: 12, 6: 15, 7: 25 };

test('Chapters 3 through 7 contain exactly the approved section and topic counts', () => {
  assert.equal(remainingSections.length, 21);
  assert.equal(remainingTopics.length, 88);
  assert.equal(Object.keys(remainingTopicBySlug).length, 88);
  assert.equal(new Set(remainingTopics.map(topic => topic.slug)).size, 88);
  for (const [chapter, count] of Object.entries(expected)) {
    assert.equal(remainingTopics.filter(topic => topic.chapter === Number(chapter)).length, count, `Chapter ${chapter}`);
  }
});

test('every remaining topic satisfies the complete page contract', () => {
  const modes = new Set(['sequence', 'compare', 'sync', 'structure', 'decision', 'transformation']);
  for (const topic of remainingTopics) {
    assert.ok(topic.title && topic.zh && topic.ipa && topic.description && topic.chinese, `${topic.slug}: overview`);
    assert.equal(topic.notation.length, 3, `${topic.slug}: notation`);
    assert.ok(topic.vocab.length >= 4, `${topic.slug}: vocabulary`);
    assert.equal(topic.steps.length, 3, `${topic.slug}: activity`);
    assert.ok(modes.has(topic.activityMode), `${topic.slug}: mode`);
    assert.equal(topic.recognition.length, 3, `${topic.slug}: recognition`);
    assert.equal(topic.sentences.length, 4, `${topic.slug}: classroom English`);
    assert.equal(topic.checks.length, 3, `${topic.slug}: Quick Check`);
    assert.equal(topic.summary.length, 4, `${topic.slug}: summary`);
    for (const state of topic.steps) assert.ok(state.english && state.chinese && state.notation && state.visual && state.note, `${topic.slug}: state completeness`);
  }
});

test('extended reading appears only in approved sections', () => {
  const extendedSections = new Set(['3.5', '4.5', '6.4']);
  assert.ok(remainingTopics.filter(topic => topic.extended).every(topic => extendedSections.has(topic.section)));
  assert.ok([...extendedSections].every(section => remainingTopics.some(topic => topic.section === section && topic.extended)));
});

test('course total is 127 topics and the home page is the default route', async () => {
  const router = await import('node:fs/promises').then(fs => fs.readFile('router.js', 'utf8'));
  assert.match(router, /const isHome = !requestedSlug/);
  assert.match(router, /renderHome\(\)/);
  assert.equal(12 + 27 + remainingTopics.length, 127);
});
