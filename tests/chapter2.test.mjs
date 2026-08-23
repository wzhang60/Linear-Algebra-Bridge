import test from 'node:test';
import assert from 'node:assert/strict';
import { chapter2Sections, chapter2Topics, chapter2TopicBySlug } from '../chapter2-data.js';

test('Chapter 2 contains exactly the 27 approved topics in seven sections', () => {
  assert.equal(chapter2Sections.length, 7);
  assert.equal(chapter2Topics.length, 27);
  assert.equal(new Set(chapter2Topics.map(topic => topic.slug)).size, 27);
  assert.equal(Object.keys(chapter2TopicBySlug).length, 27);
  assert.deepEqual([...new Set(chapter2Topics.map(topic => topic.section))], chapter2Sections.map(section => section.id));
});

test('every Chapter 2 topic has the complete language-first page contract', () => {
  const modes = new Set(['sequence', 'compare', 'sync', 'structure', 'decision', 'transformation']);
  for (const topic of chapter2Topics) {
    assert.equal(topic.chapter, 2, topic.slug);
    assert.ok(topic.title && topic.zh && topic.ipa, `${topic.slug}: bilingual title and pronunciation`);
    assert.ok(topic.description && topic.chinese && topic.academic && topic.professional && topic.intuition, `${topic.slug}: layered meaning`);
    assert.equal(topic.notation.length, 3, `${topic.slug}: notation`);
    assert.ok(topic.vocab.length >= 4, `${topic.slug}: vocabulary`);
    assert.ok(topic.sentences.length >= 4 && topic.sentences.length <= 7, `${topic.slug}: classroom English`);
    assert.equal(topic.checks.length, 3, `${topic.slug}: Quick Check`);
    assert.equal(topic.summary.length, 4, `${topic.slug}: summary`);
    assert.ok(modes.has(topic.activityMode), `${topic.slug}: adaptive Section 04 mode`);
    assert.ok(topic.steps.length >= 2 && topic.steps.length <= 4, `${topic.slug}: interaction views`);
    assert.equal(topic.recognition.length, 3, `${topic.slug}: separate visual recognition`);
    for (const step of topic.steps) assert.ok(step.english && step.chinese && step.notation && step.visual && step.note, `${topic.slug}: complete interaction state`);
    for (const check of topic.checks) {
      assert.ok(check.answer >= 0 && check.answer < check.options.length, `${topic.slug}: check answer`);
      assert.ok(check.feedback.length > 12, `${topic.slug}: check feedback`);
    }
  }
});

test('only genuinely ordered Chapter 2 topics use Stepwise Procedure', () => {
  const sequential = chapter2Topics.filter(topic => topic.activityMode === 'sequence').map(topic => topic.slug).sort();
  assert.deepEqual(sequential, [
    'computing-inverse-matrix',
    'encoding-and-decoding-with-inverse-matrices',
    'inverting-matrix-by-blocks',
    'matrix-equations-invertible-coefficient',
    'matrix-powers-polynomials'
  ].sort());
  assert.ok(chapter2Topics.filter(topic => topic.activityMode !== 'sequence').every(topic => topic.steps.length >= 2));
});

test('extended reading is represented once and only in section 2.7', () => {
  const extended = chapter2Topics.filter(topic => topic.extended);
  assert.equal(extended.length, 1);
  assert.equal(extended[0].section, '2.7');
});

test('navigation retains Chapter 2 data after full-course expansion', async () => {
  const router = await import('node:fs/promises').then(fs => fs.readFile('router.js', 'utf8'));
  assert.match(router, /chapter2-data\.js/);
  assert.doesNotMatch(router, /Chapter 8|chapter8-data/);
});
