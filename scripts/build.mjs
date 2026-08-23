import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist');
for (const file of ['index.html', 'styles.css', 'app.js', 'router.js', 'chapter1-data.js', 'chapter2-data.js', 'remaining-data.js']) await cp(file, `dist/${file}`);
console.log('Built dist/ with 7 static assets.');
