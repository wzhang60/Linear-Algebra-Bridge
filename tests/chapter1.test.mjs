import test from 'node:test';
import assert from 'node:assert/strict';
import { topics, topicBySlug } from '../chapter1-data.js';

test('Chapter 1 contains the 12 approved topics', () => {
  assert.equal(topics.length, 12);
  assert.equal(new Set(topics.map(topic => topic.slug)).size, 12);
  assert.equal(Object.keys(topicBySlug).length, 12);
});

test('the representative demo remains unique', () => {
  assert.deepEqual(topics.filter(topic => topic.demo).map(topic => topic.slug), ['elementary-row-operations']);
});

test('every new topic has complete language-first content', () => {
  const modes = new Set(['sequence', 'compare', 'sync', 'structure', 'decision']);
  for (const topic of topics.filter(item => !item.demo)) {
    assert.ok(topic.title && topic.zh && topic.ipa, topic.slug);
    assert.ok(topic.description && topic.chinese && topic.academic && topic.professional, topic.slug);
    assert.ok(topic.notation.length >= 3, `${topic.slug}: notation`);
    assert.ok(topic.vocab.length >= 4, `${topic.slug}: vocabulary`);
    assert.ok(topic.sentences.length >= 4 && topic.sentences.length <= 7, `${topic.slug}: classroom English`);
    assert.ok(topic.checks.length >= 3 && topic.checks.length <= 4, `${topic.slug}: checks`);
    assert.equal(topic.summary.length, 4, `${topic.slug}: summary`);
    assert.ok(modes.has(topic.activityMode), `${topic.slug}: valid adaptive activity mode`);
    assert.ok(topic.activityKicker && topic.activityInstruction, `${topic.slug}: activity framing`);
    assert.ok(topic.steps.length >= 2 && topic.steps.length <= 4, `${topic.slug}: two to four useful views`);
    assert.equal(topic.recognition.length, 3, `${topic.slug}: separate visual recognition`);
    for (const step of topic.steps) {
      assert.ok(step.english && step.chinese && step.notation && step.visual && step.note, `${topic.slug}: complete action step`);
    }
  }
});

test('only genuinely ordered Chapter 1 topics use the generic stepwise player', () => {
  const sequential = topics.filter(topic => topic.activityMode === 'sequence').map(topic => topic.slug).sort();
  assert.deepEqual(sequential, ['applications-linear-systems', 'gaussian-elimination']);
  assert.ok(topics.filter(topic => !topic.demo && topic.activityMode !== 'sequence').every(topic => topic.steps.length >= 2));
});

test('every check has an unambiguous valid answer', () => {
  for (const topic of topics.filter(item => !item.demo)) {
    for (const check of topic.checks) {
      assert.ok(check.answer >= 0 && check.answer < check.options.length, `${topic.slug}: answer index`);
      assert.ok(check.feedback.length > 10, `${topic.slug}: feedback`);
    }
  }
});
