import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const js = await readFile('app.js', 'utf8');
const css = await readFile('styles.css', 'utf8');

test('single topic and required bilingual title are present', () => {
  assert.match(html, /Elementary Row Operations/);
  assert.match(html, /初等行变换/);
  assert.doesNotMatch(html, /Gaussian Elimination<\/h1>/);
});

test('required notation and exact resulting row are present', () => {
  assert.match(html + js, /R₂ ← R₂ − 2R₁/);
  assert.match(js, /\[0, -1, -2\]/);
});

test('four animation steps and four checks are defined', () => {
  assert.equal((js.match(/step:\s*[1-4]/g) || []).length, 4);
  assert.equal((js.match(/id:\s*'q[1-4]'/g) || []).length, 4);
});

test('audio and reduced motion support exist', () => {
  assert.match(js, /speechSynthesis/);
  assert.match(html, /audio-status/);
  assert.match(html, /<strong>Elementary row operations<\/strong>/);
  assert.match(html, /<strong>Row echelon form<\/strong>/);
  assert.match(css, /prefers-reduced-motion/);
});

test('review corrections remain in place', () => {
  assert.doesNotMatch(html, /article class="featured"/);
  assert.match(css, /\.demo-card \{[^}]*border: 1px solid #8ea7b7/s);
  assert.match(css, /\.matrix-pair \{[^}]*grid-template-columns: minmax\(92px, 1fr\) minmax\(92px, 1fr\)/s);
});

test('the router preserves eight modules and supports adaptive Section 04 interactions', async () => {
  const router = await readFile('router.js', 'utf8');
  assert.match(router, /CONCEPT IN ACTION · 概念呈现/);
  assert.match(router, /VISUAL RECOGNITION · 视觉识别/);
  assert.match(router, /data-action-step/);
  assert.match(router, /activity-choice-bar/);
  assert.match(router, /topic\.activityMode === 'sequence'/);
  assert.doesNotMatch(router, /FOUR-STEP LANGUAGE DEMO/);
  assert.match(router, /<span class="section-number">08<\/span>/);
});
