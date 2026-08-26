import { readFile } from 'node:fs/promises';
const files = ['index.html', 'styles.css', 'app.js', 'router.js', 'feedback.js', 'ai-tutor.js', 'ai-tutor-worker.js', 'chapter1-data.js', 'chapter2-data.js', 'remaining-data.js'];
for (const file of files) {
  const text = await readFile(file, 'utf8');
  if (/\t/.test(text)) throw new Error(`${file}: tabs are not allowed`);
  if (/[ \t]+$/m.test(text)) throw new Error(`${file}: trailing whitespace found`);
}
console.log('Lint passed.');
