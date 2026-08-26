import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { selectAiOutput } from '../ai-tutor-output.js';

const html = await readFile('index.html', 'utf8');
const tutor = await readFile('ai-tutor.js', 'utf8');
const worker = await readFile('ai-tutor-worker.js', 'utf8');
const build = await readFile('scripts/build.mjs', 'utf8');

test('local AI tutor is available without a paid API key', () => {
  assert.match(html, /id="open-ai-tutor"/);
  assert.match(html, /src="ai-tutor\.js"/);
  assert.match(html, /1\.3GB/);
  assert.match(tutor, /new Worker\('\.\/ai-tutor-worker\.js'/);
  assert.match(worker, /DeepSeek-R1-Distill-Qwen-1\.5B-ONNX/);
  assert.match(worker, /device: 'webgpu'/);
  assert.match(tutor, /不展示思考过程/);
  assert.doesNotMatch(`${tutor}\n${worker}`, /api[_-]?key|bearer/i);
});

test('AI files are included in the static GitHub Pages build', () => {
  assert.match(build, /'ai-tutor\.js'/);
  assert.match(build, /'ai-tutor-worker\.js'/);
  assert.match(build, /'ai-tutor-output\.js'/);
});

test('unfinished reasoning is shown instead of discarded', () => {
  assert.deepEqual(selectAiOutput('正在比较向量和矩阵', ''), {
    output: '正在比较向量和矩阵', usedFallback: true
  });
  assert.deepEqual(selectAiOutput('hidden reasoning', '向量是一维排列；矩阵是二维数组。'), {
    output: '向量是一维排列；矩阵是二维数组。', usedFallback: false
  });
});
