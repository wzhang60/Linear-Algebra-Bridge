const steps = [
  { step: 1, phase: 'IDENTIFY · 识别', english: 'Use row one as the pivot row.', chinese: '把第一行作为主元行。', notation: 'Pivot row: R₁', rows: [[1, 1, 3], [2, 1, 4]], className: 'row-identified', note: 'R₁ is the pivot row; R₂ is the row we will change.', aria: 'Step 1: row one is the pivot row and row two will change' },
  { step: 2, phase: 'ACT · 操作', english: 'Subtract two times row one from row two.', chinese: '第二行减去第一行的两倍。', notation: 'R₂ ← R₂ − 2R₁', rows: [[1, 1, 3], [2, 1, 4]], className: 'rows-active', note: 'The operation uses every entry of R₁ and updates every corresponding entry of R₂.', aria: 'Step 2: subtract two times the entire first row from the entire second row' },
  { step: 3, phase: 'OBSERVE · 观察', english: 'The entry below the pivot becomes zero.', chinese: '主元下方的元素变为 0。', notation: '[2, 1 | 4] − 2[1, 1 | 3] = [0, −1 | −2]', rows: [[1, 1, 3], [0, -1, -2]], className: 'updating', note: 'R₁ remains unchanged. All three entries of R₂ change together.', aria: 'Step 3: row one stays unchanged while row two becomes zero, negative one, negative two' },
  { step: 4, phase: 'CONNECT · 联系', english: 'The matrix is in row echelon form.', chinese: '矩阵现在是行阶梯形。', notation: 'Leading entries: 1, −1', rows: [[1, 1, 3], [0, -1, -2]], className: 'result-state', note: 'The second leading entry is to the right, and the entry below the first pivot is zero.', aria: 'Step 4: the matrix is in row echelon form with staircase leading entries' }
];

const vocabulary = [
  { term: 'elementary row operation', zh: '初等行变换', ipa: '/ˌelɪˈmentəri roʊ ˌɑːpəˈreɪʃən/', meaning: 'A permitted operation applied to an entire row. 对整行进行的一种规定变换。' },
  { term: 'interchange two rows', zh: '交换两行', ipa: '/ˌɪntərˈtʃeɪndʒ tuː roʊz/', meaning: 'Move two complete rows into each other’s positions. 将两整行互换位置。' },
  { term: 'multiply a row by a nonzero scalar', zh: '用非零数乘某一行', ipa: '/ˈmʌltɪplaɪ ə roʊ baɪ ə nɑːnˈzɪroʊ ˈskeɪlər/', meaning: 'Scale every entry in one row by the same nonzero number. 同一非零数乘该行每个元素。' },
  { term: 'add a multiple of one row to another', zh: '将某一行的倍数加到另一行', ipa: '/æd ə ˈmʌltɪpəl əv wʌn roʊ tuː əˈnʌðər/', meaning: 'Use one whole row to update a different whole row. 用一整行的倍数更新另一整行。' },
  { term: 'row echelon form', zh: '行阶梯形矩阵', ipa: '/roʊ ˈeʃəlɑːn fɔːrm/', meaning: 'A matrix whose leading entries form a staircase, with zeros below them. 首非零元呈阶梯且下方为零。' }
];

const sentences = [
  ['Interchange the first and second rows.', '交换第一行与第二行。', 'Interchange = 交换', null],
  ['Multiply the second row by a nonzero scalar.', '用一个非零数乘第二行。', 'nonzero scalar = 非零标量', null],
  ['Add a multiple of row one to row two.', '将第一行的一个倍数加到第二行。', 'add a multiple = 加上一个倍数', 1],
  ['Use the leading entry as a pivot.', '把首非零元作为主元。', 'as a pivot = 作为主元', 0],
  ['Eliminate the entry below the pivot.', '消去主元下方的元素。', 'eliminate = 消去', 2],
  ['The first row remains unchanged.', '第一行保持不变。', 'remains unchanged = 保持不变', 2],
  ['The matrix is now in row echelon form.', '矩阵现在是行阶梯形。', 'is now in = 现在处于', 3]
];

const questions = [
  { id: 'q1', type: 'TERM MATCH · 术语对应', question: '“elementary row operation” 对应哪个标准中文术语？', options: ['初等行变换', '初等列变换', '矩阵乘法'], answer: 0, feedback: 'Elementary row operation 是“初等行变换”；row 明确表示“行”，不是 column（列）。' },
  { id: 'q2', type: 'CLASSROOM INSTRUCTION · 课堂指令', question: '“Interchange row one and row two.” 要求哪个动作？', options: ['R₁ ↔ R₂', 'R₂ ← 2R₂', 'R₂ ← R₂ + R₁'], answer: 0, feedback: 'Interchange 表示互换，因此两行交换位置，符号写作 R₁ ↔ R₂。' },
  { id: 'q3', type: 'READ THE NOTATION · 符号读法', question: 'R₂ ← R₂ − 2R₁ 最准确的英文指令是哪一句？', options: ['Subtract two times row one from row two.', 'Interchange row one and row two.', 'Multiply row one by negative two.'], answer: 0, feedback: '符号表示用 R₂ − 2R₁ 替换 R₂；R₁ 本身保持不变。' },
  { id: 'q4', type: 'VISUAL RECOGNITION · 视觉识别', question: '哪一个 2 × 3 增广矩阵是行阶梯形？', options: ['[ 1  1 | 3 ]  [ 0  −1 | −2 ]', '[ 0  1 | 3 ]  [ 2   1 | 4 ]'], answer: 0, feedback: '第一个矩阵的第二个首非零元向右移动，且第一个主元下方为 0，形成阶梯。' }
];

let currentStep = 0;
let currentQuestion = 0;
const answers = Array(questions.length).fill(null);

const matrixHTML = rows => rows.map((row, rowIndex) => `<span class="row ${rowIndex ? 'row-two' : 'row-one'}">${row.map((value, i) => `<i class="${i === 2 ? 'aug' : ''}">${String(value).replace('-', '−')}</i>`).join('')}</span>`).join('');

function renderStep(index, replay = false) {
  currentStep = index;
  const item = steps[index];
  document.querySelector('#step-count').textContent = `STEP ${item.step} OF 4`;
  document.querySelector('#step-phase').textContent = item.phase;
  document.querySelector('#step-english').textContent = item.english;
  document.querySelector('#step-chinese').textContent = item.chinese;
  document.querySelector('#step-notation').textContent = item.notation;
  document.querySelector('#change-note').textContent = item.note;
  const matrix = document.querySelector('#animated-matrix');
  matrix.className = `matrix demo-matrix ${item.className}`;
  matrix.innerHTML = matrixHTML(item.rows);
  document.querySelector('#demo-visual').setAttribute('aria-label', item.aria);
  document.querySelectorAll('[data-step]').forEach((button, i) => button.toggleAttribute('aria-current', i === index));
  document.querySelector('#previous-step').disabled = index === 0;
  document.querySelector('#next-step').disabled = index === steps.length - 1;
  if (replay && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    matrix.animate([{ opacity: .35, transform: 'scale(.98)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 420 });
  }
}

function speak(text, sourceButton) {
  const status = document.querySelector('#audio-status');
  if (!('speechSynthesis' in window)) { status.textContent = '此浏览器不支持本地语音播放；英文文本仍完整可见。'; return; }
  speechSynthesis.cancel();
  document.querySelectorAll('.audio-button').forEach(button => button.classList.remove('speaking'));
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = .88;
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices.find(voice => voice.lang === 'en-US') || voices.find(voice => voice.lang.startsWith('en')) || null;
  sourceButton?.classList.add('speaking');
  status.textContent = `正在播放：${text}`;
  utterance.onend = () => { sourceButton?.classList.remove('speaking'); status.textContent = '播放完毕。音频使用设备上的英文语音。'; };
  utterance.onerror = () => { sourceButton?.classList.remove('speaking'); status.textContent = '本地语音暂时无法播放；请阅读可见英文文本。'; };
  speechSynthesis.speak(utterance);
}

document.querySelector('#vocab-grid').innerHTML = vocabulary.map((item, i) => `<article class="vocab-card"><span class="index">0${i + 1}</span><button class="icon-audio audio-button" data-speak="${item.term}" aria-label="播放音频：${item.term}">🔊</button><h3>${item.term}</h3><p class="ipa">${item.ipa}</p><span class="zh">${item.zh}</span><p class="meaning">${item.meaning}</p></article>`).join('');
document.querySelector('#classroom-grid').innerHTML = sentences.map((item, i) => `<article class="sentence-card"><b>0${i + 1}</b><div><blockquote>${item[0]}</blockquote><p>${item[1]}</p><em>${item[2]}</em>${item[3] !== null ? `<button class="state-link" data-jump-step="${item[3]}">View matching step · 查看对应步骤</button>` : ''}</div><button class="icon-audio audio-button" data-speak="${item[0]}" aria-label="播放音频：${item[0]}">🔊</button></article>`).join('');

function renderQuestion() {
  const item = questions[currentQuestion];
  document.querySelector('#quiz-type').textContent = item.type;
  document.querySelector('#quiz-question').textContent = item.question;
  document.querySelector('#quiz-count').textContent = `${currentQuestion + 1} / ${questions.length}`;
  document.querySelector('#completed-count').textContent = `已完成 ${answers.filter(value => value !== null).length} / 4`;
  document.querySelector('#quiz-dots').innerHTML = questions.map((question, i) => `<button class="${i === currentQuestion ? 'current' : ''} ${answers[i] !== null ? 'answered' : ''}" data-question="${i}" aria-label="自测第 ${i + 1} 题">${i + 1}</button>`).join('');
  document.querySelector('#quiz-options').innerHTML = item.options.map((option, i) => `<button data-answer="${i}" class="${answers[currentQuestion] === i ? (i === item.answer ? 'selected correct' : 'selected incorrect') : ''}"><b>${String.fromCharCode(65 + i)}</b> ${option}</button>`).join('');
  const feedback = document.querySelector('#quiz-feedback');
  if (answers[currentQuestion] !== null) {
    const correct = answers[currentQuestion] === item.answer;
    feedback.className = 'quiz-feedback visible';
    feedback.innerHTML = `<strong>${correct ? '✓ Correct · 回答正确' : '再想一想 · Not quite'}</strong><br>${item.feedback}`;
  } else { feedback.className = 'quiz-feedback'; feedback.textContent = ''; }
  document.querySelector('#next-question').textContent = currentQuestion === 3 ? '回到第一题 ↻' : '下一题 →';
}

document.addEventListener('click', event => {
  const audio = event.target.closest('[data-speak]');
  if (audio) speak(audio.dataset.speak, audio);
  const step = event.target.closest('[data-step]');
  if (step) renderStep(Number(step.dataset.step), true);
  const jump = event.target.closest('[data-jump-step]');
  if (jump) { renderStep(Number(jump.dataset.jumpStep), true); document.querySelector('#demo').scrollIntoView(); }
  const answer = event.target.closest('[data-answer]');
  if (answer) { answers[currentQuestion] = Number(answer.dataset.answer); renderQuestion(); }
  const question = event.target.closest('[data-question]');
  if (question) { currentQuestion = Number(question.dataset.question); renderQuestion(); }
});

document.querySelector('#previous-step').addEventListener('click', () => renderStep(Math.max(0, currentStep - 1), true));
document.querySelector('#next-step').addEventListener('click', () => renderStep(Math.min(3, currentStep + 1), true));
document.querySelector('#replay-step').addEventListener('click', () => renderStep(currentStep, true));
document.querySelector('#step-audio').addEventListener('click', event => speak(steps[currentStep].english, event.currentTarget));
document.querySelector('#next-question').addEventListener('click', () => { currentQuestion = (currentQuestion + 1) % 4; renderQuestion(); });

const drawer = document.querySelector('#mobile-drawer');
const backdrop = document.querySelector('#drawer-backdrop');
const openButton = document.querySelector('#open-directory');
const closeButton = document.querySelector('#close-directory');
let lastFocus;
function setDrawer(open) {
  drawer.classList.toggle('open', open);
  drawer.setAttribute('aria-hidden', String(!open));
  openButton.setAttribute('aria-expanded', String(open));
  backdrop.hidden = !open;
  document.body.classList.toggle('drawer-open', open);
  if (open) {
    lastFocus = document.activeElement;
    const active = drawer.querySelector('[aria-current="page"]');
    if (active) drawer.scrollTop = Math.max(0, active.offsetTop - drawer.clientHeight / 2);
    closeButton.focus();
  } else { lastFocus?.focus(); }
}
openButton.addEventListener('click', () => setDrawer(true));
closeButton.addEventListener('click', () => setDrawer(false));
backdrop.addEventListener('click', () => setDrawer(false));
drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setDrawer(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && drawer.classList.contains('open')) setDrawer(false);
  if (event.key === 'Tab' && drawer.classList.contains('open')) {
    const focusable = [...drawer.querySelectorAll('a, button')];
    const first = focusable[0]; const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

renderStep(0);
renderQuestion();
