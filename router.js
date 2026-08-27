import { sections, topics, topicBySlug } from './chapter1-data.js';
import { chapter2Sections, chapter2Topics, chapter2TopicBySlug } from './chapter2-data.js';
import { remainingSections, remainingTopics, remainingTopicBySlug } from './remaining-data.js';

const defaultSlug = 'elementary-row-operations';
const requestedSlug = new URLSearchParams(location.search).get('topic');
const isHome = !requestedSlug;
const allTopicsBySlug = { ...topicBySlug, ...chapter2TopicBySlug, ...remainingTopicBySlug };
const currentTopic = isHome ? null : (allTopicsBySlug[requestedSlug] || topicBySlug[defaultSlug]);
const currentChapter = currentTopic ? (currentTopic.chapter || 1) : null;

const laterChapter = (number, title, zh, description) => ({
  number, title, zh, description,
  sections: remainingSections.filter(section => section.chapter === number),
  topics: remainingTopics.filter(topic => topic.chapter === number),
  start: remainingTopics.find(topic => topic.chapter === number).slug
});

const chapters = [
  { number: 1, title: 'Prerequisites and Linear Systems', zh: '预备知识和线性方程组初步', description: 'Build the language of sets, mappings, systems, and elimination.', sections, topics, start: 'set-operations-cartesian-products' },
  { number: 2, title: 'Matrices', zh: '矩阵', description: 'Connect matrix operations, inverses, rank, blocks, and mappings.', sections: chapter2Sections, topics: chapter2Topics, start: 'matrix-addition-scalar-multiplication' },
  laterChapter(3, 'Determinants', '行列式', 'Read determinant definitions, properties, expansion, and applications.'),
  laterChapter(4, 'Vector Spaces of n-Tuples', 'n 元向量空间', 'Recognize dependence, rank, subspaces, and solution structures.'),
  laterChapter(5, 'Vector Spaces', '线性空间', 'Generalize bases, dimensions, coordinates, and change of basis.'),
  laterChapter(6, 'Eigenvalues, Eigenvectors, and Linear Transformations', '特征值与特征向量 · 线性变换', 'Preview eigenvalue language, diagonalization, and transformations.'),
  laterChapter(7, 'Euclidean Spaces and Quadratic Forms', '欧氏空间和二次型', 'Connect inner products, orthogonality, quadratic forms, and definiteness.')
];

function topicHref(slug) {
  return `./?topic=${encodeURIComponent(slug)}`;
}

function renderTopicLink(topic, active) {
  return `<a class="topic-link ${active ? 'active-topic' : ''}" href="${topicHref(topic.slug)}" ${active ? 'aria-current="page"' : ''}><span>${active ? '•' : '○'}</span><div><strong>${topic.title}</strong><small>${topic.zh}</small></div></a>`;
}

function renderNavigation() {
  document.querySelector('.sidebar > .chapter')?.remove();
  const nav = chapters.map(chapter => {
    const active = chapter.number === currentChapter;
    const sectionNav = chapter.sections.map(section => {
      const activeSection = Boolean(currentTopic && section.id === currentTopic.section);
      const sectionTopics = chapter.topics.filter(topic => topic.section === section.id);
      return `<div class="section-link ${activeSection ? 'current' : 'muted'} ${section.extended ? 'extended' : ''}"><b>${section.id}</b> ${section.title}<small>${section.zh}</small></div><div class="topic-nav-group">${sectionTopics.map(topic => renderTopicLink(topic, topic.slug === currentTopic?.slug)).join('')}</div>`;
    }).join('');
    const expanded = Boolean(active && currentTopic);
    return `<div class="chapter-group"><div class="chapter-row"><a class="chapter ${active ? 'active' : ''}" href="${topicHref(chapter.start)}" ${active ? 'aria-current="true"' : ''}><span>${String(chapter.number).padStart(2, '0')}</span><div><strong>${chapter.title}</strong><small>${chapter.zh}</small></div></a><button class="chapter-toggle" type="button" data-chapter-toggle aria-expanded="${expanded}" aria-label="${expanded ? '折叠' : '展开'}第 ${chapter.number} 章目录"><span aria-hidden="true">${expanded ? '−' : '+'}</span></button></div><div class="chapter-sections"${expanded ? '' : ' hidden'}>${sectionNav}</div></div>`;
  }).join('');
  document.querySelector('.sidebar nav').innerHTML = nav;
  document.querySelector('#mobile-drawer').innerHTML = `<div class="drawer-head"><strong>Course Map · 课程地图</strong><button id="close-directory" aria-label="关闭课程目录">✕</button></div><nav aria-label="${currentChapter ? `Chapter ${currentChapter}` : 'Course'} mobile topics">${nav}</nav>`;
  document.querySelectorAll('[data-chapter-toggle]').forEach(toggle => toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.setAttribute('aria-label', `${expanded ? '折叠' : '展开'}第 ${toggle.closest('.chapter-group').querySelector('.chapter > span').textContent} 章目录`);
    toggle.querySelector('span').textContent = expanded ? '−' : '+';
    toggle.closest('.chapter-group').querySelector('.chapter-sections').hidden = !expanded;
  }));
  document.querySelector('.brand').href = './';
  const familyZh = { Concept: '概念', Procedure: '方法', Structure: '结构', Transformation: '变换' };
  document.querySelector('.page-kind').textContent = currentTopic ? `${currentTopic.family.toUpperCase()} · ${familyZh[currentTopic.family] || '主题'}` : 'COURSE MAP · 课程地图';
  requestAnimationFrame(() => {
    const sidebar = document.querySelector('.sidebar');
    const active = sidebar.querySelector('[aria-current="page"]');
    if (active) sidebar.scrollTop = Math.max(0, active.offsetTop - sidebar.clientHeight / 2);
  });
}

function audioButton(text, label = 'Listen') {
  const visibleLabel = label === '🔊' ? '🔊' : `▶ ${label}`;
  return `<button class="audio-button" data-speak="${text.replaceAll('"', '&quot;')}" aria-label="播放音频：${text.replaceAll('"', '&quot;')}">${visibleLabel}</button>`;
}

function quizPromptEnglish(item, topic) {
  if (item.questionEnglish) return item.questionEnglish;
  const type = item.type.toLowerCase();
  const quoted = item.question.match(/[“"]([^”"]+)[”"]/)?.[1];
  if (type.includes('term match')) return `Which Chinese term matches “${quoted || topic?.title || 'the English term'}”?`;
  if (type.includes('read')) return 'How should we read or interpret this notation?';
  if (type.includes('classroom')) return 'What action does this classroom instruction ask for?';
  if (type.includes('sequence')) return 'What should happen first in this sequence?';
  if (type.includes('condition')) return 'Which condition or action should be checked first?';
  if (type.includes('visual')) return 'Which visual pattern matches the definition?';
  return 'Which statement best matches the concept?';
}

function renderActivity(topic) {
  const sequential = topic.activityMode === 'sequence';
  const countLabel = sequential ? 'STEP' : 'VIEW';
  const controls = sequential
    ? `<div class="step-controls">
        <button id="action-previous">← Previous</button>
        <div class="step-dots" role="group" aria-label="直接选择过程步骤">
          ${topic.steps.map((_, i) => `<button data-action-step="${i}" aria-label="过程步骤 ${i + 1}">${i + 1}</button>`).join('')}
        </div>
        <button id="action-next">Next →</button><button id="action-replay">↻ Replay</button>
      </div>`
    : `<div class="activity-choice-bar" role="tablist" aria-label="选择第 04 部分的数学视图">
        ${topic.steps.map((item, i) => `<button role="tab" data-action-step="${i}" aria-label="查看：${item.phase}"><b>${String(i + 1).padStart(2, '0')}</b><span>${item.phase}</span></button>`).join('')}
      </div>`;
  const note = sequential
    ? '减少动态效果时，全部步骤仍以完整静态状态呈现。'
    : '这些视图没有强制先后顺序；可按需要直接比较。';
  return `<div class="demo-card generic-action-card activity-${topic.activityMode}">
    <div class="demo-topline"><span>${topic.activityKicker}</span><strong id="action-step-count">${countLabel} 1 OF ${topic.steps.length}</strong></div>
    <div class="step-copy" aria-live="polite">
      <p id="action-phase"></p><h3 id="action-english"></h3><p id="action-chinese"></p>
      <div class="step-notation" id="action-notation"></div>
      <button id="action-audio" class="audio-button">▶ Listen to this instruction</button>
    </div>
    <div class="demo-visual generic-action-visual" id="action-visual" role="img">
      <span class="visual-label">VISIBLE RELATIONSHIP · 可见关系</span>
      <div id="action-visual-content"></div><p id="action-note"></p>
    </div>
    ${controls}
    <p class="motion-note">${note}</p>
  </div>`;
}

function renderGenericPage(topic) {
  document.title = `${topic.title} · Linear Algebra Bridge`;
  const chapter = chapters.find(item => item.number === (topic.chapter || 1));
  const section = chapter.sections.find(item => item.id === topic.section);
  const main = document.querySelector('main');
  main.className = 'generic-topic-page';
  main.innerHTML = `
    <section class="hero generic-hero section-wrap" id="top" aria-labelledby="page-title">
      <div class="hero-copy">
        <p class="breadcrumb">CHAPTER ${chapter.number} · SECTION ${topic.section} <span>${section.zh}</span></p>
        ${topic.extended ? '<p class="extended-badge">EXTENDED READING · 拓展阅读</p>' : ''}
        <h1 id="page-title">${topic.title}</h1>
        <h2 class="chinese-title">${topic.zh}</h2>
        <p class="lead">${topic.description}</p>
        <p class="support">${topic.chinese}</p>
        <div class="pronunciation-row">${audioButton(topic.title)}<div><strong>${topic.title}</strong><span>${topic.ipa}</span></div></div>
        <p id="audio-status" class="audio-status" role="status" aria-live="polite">音频使用设备上的英文语音。</p>
      </div>
      <article class="hero-card generic-hero-card" aria-label="${topic.title} core relationship">
        <p class="card-eyebrow">CORE RELATIONSHIP · 核心关系</p>
        ${topic.hero}
        <p class="hero-question"><b>${topic.question}</b><span>${topic.questionZh}</span></p>
      </article>
    </section>

    <section class="numbered section-wrap">
      <span class="section-number">02</span><div class="section-heading"><p>UNDERSTAND IN LAYERS · 分层理解</p><h2>One idea, three ways</h2><span>从课堂定义到直觉识别</span></div>
      <div class="layer-grid">
        <article><b>EN · ACADEMIC</b><h3>Academic English</h3><p>${topic.academic}</p></article>
        <article><b>中 · 专业解释</b><h3>Professional Chinese</h3><p>${topic.professional}</p></article>
        <article><b>懂 · 直觉提示</b><h3>Listening shortcut</h3><p>${topic.intuition}</p></article>
      </div>
    </section>

    <section class="numbered section-wrap notation-section" id="notation">
      <span class="section-number">03</span><div class="section-heading"><p>READ THE NOTATION · 符号读法</p><h2>See the symbol. Hear the language.</h2><span>把数学符号与英语表达连接起来</span></div>
      <div class="notation-list">${topic.notation.map(item => `<article><code>${item[0]}</code><div><h3>${item[1]}</h3><p>${item[2]}</p></div>${audioButton(item[1], '🔊')}</article>`).join('')}</div>
    </section>

    <section class="numbered section-wrap" id="example">
      <span class="section-number">04</span><div class="section-heading"><p>CONCEPT IN ACTION · 概念呈现</p><h2>${topic.actionQuestion}</h2><span>${topic.activityInstruction}</span></div>
      ${renderActivity(topic)}
    </section>

    <section class="numbered section-wrap" id="vocabulary">
      <span class="section-number">05</span><div class="section-heading"><p>KEY VOCABULARY · 核心词汇</p><h2>Words you need to hear</h2><span>先认词，再听懂课堂句子</span></div>
      <div class="vocab-grid">${topic.vocab.map((item, i) => `<article class="vocab-card"><span class="index">${String(i + 1).padStart(2, '0')}</span>${audioButton(item[0], '🔊')}<h3>${item[0]}</h3><p class="ipa">${item[2]}</p><span class="zh">${item[1]}</span><p class="meaning">${item[3]}</p></article>`).join('')}</div>
    </section>

    <section class="numbered section-wrap" id="recognition">
      <span class="section-number">06</span><div class="section-heading"><p>VISUAL RECOGNITION · 视觉识别</p><h2>${topic.recognitionTitle}</h2><span>${topic.recognitionZh}</span></div>
      <div class="recognition-card">${topic.recognition.map((item, i) => `<article><b>${String(i + 1).padStart(2, '0')}</b><h3>${item[0]}</h3><p>${item[1]}</p><span>${item[2]}</span></article>`).join('')}</div>
    </section>

    <section class="numbered section-wrap" id="classroom">
      <span class="section-number">07</span><div class="section-heading"><p>CLASSROOM ENGLISH · 课堂英语</p><h2>Hear the lesson before class</h2><span>${topic.sentences.length} 句高频表达</span></div>
      <div class="classroom-grid">${topic.sentences.map((item, i) => `<article class="sentence-card"><b>${String(i + 1).padStart(2, '0')}</b><div><blockquote>${item[0]}</blockquote><p>${item[1]}</p><em>${item[2]}</em></div>${audioButton(item[0], '🔊')}</article>`).join('')}</div>
    </section>

    <section class="numbered section-wrap" id="quick-check">
      <span class="section-number">08</span><div class="section-heading"><p>QUICK CHECK · 理解自测</p><h2>Can you connect language to meaning?</h2><span>短题检查术语、课堂英语和最小概念</span></div>
      <div class="quiz-card"><div class="quiz-progress"><div id="quiz-dots"></div><span id="quiz-count"></span></div><p class="quiz-type" id="quiz-type"></p><h3 id="quiz-question"></h3><p id="quiz-question-zh" class="quiz-question-zh"></p><div id="quiz-options" class="quiz-options"></div><div id="quiz-feedback" class="quiz-feedback" role="status" aria-live="polite"></div><div id="quiz-bingo" class="quiz-bingo" role="status" aria-live="polite" hidden><span aria-hidden="true">🎉</span><strong>Bingo! 全部答对了！</strong><small>Great job · 继续保持</small></div><div class="quiz-footer"><span id="completed-count"></span><button id="next-question">下一题 →</button></div></div>
    </section>

    <section class="summary section-wrap">
      <p>BEFORE CLASS SUMMARY · 课前总结</p><h2>You’re ready to follow the language.</h2><span>目标是课前熟悉，不是宣称已经掌握。</span>
      <ul>${topic.summary.map(item => `<li>✓ ${item}</li>`).join('')}</ul>
    </section>`;
}

function renderHome() {
  document.title = 'Course Map · Linear Algebra Bridge';
  document.querySelector('.top-actions > a').href = topicHref(chapters[0].start);
  document.querySelector('.top-actions > a').textContent = '开始预习 →';
  const totalSections = chapters.reduce((sum, chapter) => sum + chapter.sections.length, 0);
  const totalTopics = chapters.reduce((sum, chapter) => sum + chapter.topics.length, 0);
  const main = document.querySelector('main');
  main.className = 'home-page';
  main.innerHTML = `
    <section class="course-home-hero section-wrap" id="top">
      <p class="breadcrumb">LINEAR ALGEBRA BRIDGE <span>线性代数双语预习</span></p>
      <h1>Enter the lecture<br>already knowing the language.</h1>
      <h2 class="chinese-title">先熟悉英语术语，再走进线性代数课堂。</h2>
      <p class="lead">A bilingual, language-first course map for recognizing terminology, notation, pronunciation, classroom instructions, and the minimum mathematics behind them.</p>
      <p class="support">这不是一本替代教材，而是一座课前桥梁：把你熟悉的中文数学概念，与英文课堂中会听到、看到和需要执行的表达连接起来。</p>
      <div class="home-stats" aria-label="课程范围">
        <article><strong>${chapters.length}</strong><span>CHAPTERS · 章</span></article>
        <article><strong>${totalSections}</strong><span>SECTIONS · 节</span></article>
        <article><strong>${totalTopics}</strong><span>TOPICS · 知识点</span></article>
      </div>
    </section>
    <section class="course-directory section-wrap" aria-labelledby="directory-title">
      <div class="section-heading"><p>COURSE DIRECTORY · 课程目录</p><h2 id="directory-title">Seven chapters, one connected language journey</h2><span>七章内容全部可用；拓展阅读在各章中单独标识。</span></div>
      <div class="chapter-card-grid">
        ${chapters.map(chapter => `<article class="course-chapter-card">
          <span class="course-chapter-number">${String(chapter.number).padStart(2, '0')}</span>
          <div><p>CHAPTER ${chapter.number}</p><h3>${chapter.title}</h3><h4>${chapter.zh}</h4><p>${chapter.description}</p></div>
          <dl><div><dt>${chapter.sections.length}</dt><dd>Sections</dd></div><div><dt>${chapter.topics.length}</dt><dd>Topics</dd></div></dl>
          <a href="${topicHref(chapter.start)}">Start Chapter ${chapter.number} · 开始本章 →</a>
        </article>`).join('')}
      </div>
    </section>`;
  document.querySelector('footer small').textContent = '线性代数双语预习 · Complete Course Map';
}

function setupAction(topic) {
  let current = 0;
  const sequential = topic.activityMode === 'sequence';
  const render = (index, replay = false) => {
    current = index;
    const item = topic.steps[index];
    document.querySelector('#action-step-count').textContent = `${sequential ? 'STEP' : 'VIEW'} ${index + 1} OF ${topic.steps.length}`;
    document.querySelector('#action-phase').textContent = item.phase;
    document.querySelector('#action-english').textContent = item.english;
    document.querySelector('#action-chinese').textContent = item.chinese;
    document.querySelector('#action-notation').textContent = item.notation;
    document.querySelector('#action-visual-content').innerHTML = item.visual;
    document.querySelector('#action-note').textContent = item.note;
    document.querySelector('#action-audio').dataset.speak = item.english;
    document.querySelector('#action-visual').setAttribute('aria-label', `${sequential ? 'Step' : 'View'} ${index + 1}: ${item.english} ${item.note}`);
    document.querySelectorAll('[data-action-step]').forEach((button, i) => {
      button.toggleAttribute('aria-current', i === index);
      button.setAttribute('aria-selected', String(i === index));
      if (!sequential) button.tabIndex = i === index ? 0 : -1;
    });
    if (sequential) {
      document.querySelector('#action-previous').disabled = index === 0;
      document.querySelector('#action-next').disabled = index === topic.steps.length - 1;
    }
    if (replay && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelector('#action-visual-content').animate([{ opacity: .35, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 380 });
    }
  };
  document.querySelectorAll('[data-action-step]').forEach(button => button.addEventListener('click', () => render(Number(button.dataset.actionStep), true)));
  if (sequential) {
    document.querySelector('#action-previous').addEventListener('click', () => render(Math.max(0, current - 1), true));
    document.querySelector('#action-next').addEventListener('click', () => render(Math.min(topic.steps.length - 1, current + 1), true));
    document.querySelector('#action-replay').addEventListener('click', () => render(current, true));
  } else {
    const choices = [...document.querySelectorAll('[data-action-step]')];
    choices.forEach(button => button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const currentIndex = Number(button.dataset.actionStep);
      const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? choices.length - 1 : event.key === 'ArrowRight' ? (currentIndex + 1) % choices.length : (currentIndex - 1 + choices.length) % choices.length;
      render(nextIndex, true);
      choices[nextIndex].focus();
    }));
  }
  render(0);
}

function setupSpeech() {
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-speak]');
    if (!button) return;
    const status = document.querySelector('#audio-status');
    if (!('speechSynthesis' in window)) { status.textContent = '此浏览器不支持本地语音播放；英文文本仍完整可见。'; return; }
    speechSynthesis.cancel();
    document.querySelectorAll('.audio-button').forEach(item => item.classList.remove('speaking'));
    const utterance = new SpeechSynthesisUtterance(button.dataset.speak);
    utterance.lang = 'en-US'; utterance.rate = .88;
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices.find(voice => voice.lang === 'en-US') || voices.find(voice => voice.lang.startsWith('en')) || null;
    button.classList.add('speaking'); status.textContent = `正在播放：${button.dataset.speak}`;
    utterance.onend = () => { button.classList.remove('speaking'); status.textContent = '播放完毕。音频使用设备上的英文语音。'; };
    utterance.onerror = () => { button.classList.remove('speaking'); status.textContent = '本地语音暂时无法播放；请阅读可见英文文本。'; };
    speechSynthesis.speak(utterance);
  });
}

function setupQuiz(topic) {
  let current = 0;
  let bingoShown = false;
  const answers = Array(topic.checks.length).fill(null);
  const render = () => {
    const item = topic.checks[current];
    document.querySelector('#quiz-type').textContent = item.type;
    document.querySelector('#quiz-question').textContent = quizPromptEnglish(item, topic);
    document.querySelector('#quiz-question-zh').textContent = item.question;
    document.querySelector('#quiz-count').textContent = `${current + 1} / ${topic.checks.length}`;
    document.querySelector('#completed-count').textContent = `已完成 ${answers.filter(value => value !== null).length} / ${topic.checks.length}`;
    document.querySelector('#quiz-dots').innerHTML = topic.checks.map((_, i) => `<button class="${i === current ? 'current' : ''} ${answers[i] !== null ? 'answered' : ''}" data-question="${i}" aria-label="自测第 ${i + 1} 题">${i + 1}</button>`).join('');
    document.querySelector('#quiz-options').innerHTML = item.options.map((option, i) => `<button data-answer="${i}" class="${answers[current] === i ? (i === item.answer ? 'selected correct' : 'selected incorrect') : ''}"><b>${String.fromCharCode(65 + i)}</b> ${option}</button>`).join('');
    const feedback = document.querySelector('#quiz-feedback');
    if (answers[current] !== null) {
      const correct = answers[current] === item.answer;
      feedback.className = 'quiz-feedback visible';
      feedback.innerHTML = `<strong>${correct ? '✓ Correct · 回答正确' : '再想一想 · Not quite'}</strong><br>${item.feedback}`;
    } else { feedback.className = 'quiz-feedback'; feedback.textContent = ''; }
    if (!bingoShown && answers.every((answer, index) => answer !== null && answer === topic.checks[index].answer)) {
      bingoShown = true;
      const bingo = document.querySelector('#quiz-bingo');
      bingo.hidden = false;
      bingo.classList.add('celebrate');
    }
    document.querySelector('#next-question').textContent = current === topic.checks.length - 1 ? '回到第一题 ↻' : '下一题 →';
  };
  document.querySelector('#quick-check').addEventListener('click', event => {
    const answer = event.target.closest('[data-answer]');
    if (answer) { answers[current] = Number(answer.dataset.answer); render(); }
    const question = event.target.closest('[data-question]');
    if (question) { current = Number(question.dataset.question); render(); }
  });
  document.querySelector('#next-question').addEventListener('click', () => { current = (current + 1) % topic.checks.length; render(); });
  render();
}

function setupDrawer() {
  const drawer = document.querySelector('#mobile-drawer');
  const backdrop = document.querySelector('#drawer-backdrop');
  const openButton = document.querySelector('#open-directory');
  const closeButton = document.querySelector('#close-directory');
  let lastFocus;
  const setDrawer = open => {
    drawer.classList.toggle('open', open); drawer.setAttribute('aria-hidden', String(!open));
    openButton.setAttribute('aria-expanded', String(open)); backdrop.hidden = !open;
    document.body.classList.toggle('drawer-open', open);
    if (open) {
      lastFocus = document.activeElement;
      const active = drawer.querySelector('[aria-current="page"]');
      if (active) drawer.scrollTop = Math.max(0, active.offsetTop - drawer.clientHeight / 2);
      closeButton.focus();
    } else { lastFocus?.focus(); }
  };
  openButton.addEventListener('click', () => setDrawer(true));
  closeButton.addEventListener('click', () => setDrawer(false));
  backdrop.addEventListener('click', () => setDrawer(false));
  drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setDrawer(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && drawer.classList.contains('open')) setDrawer(false);
    if (event.key === 'Tab' && drawer.classList.contains('open')) {
      const focusable = [...drawer.querySelectorAll('a, button')]; const first = focusable[0]; const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
}

renderNavigation();

if (isHome) {
  renderHome();
  setupDrawer();
} else if (currentTopic.demo) {
  await import('./app.js');
} else {
  renderGenericPage(currentTopic);
  setupAction(currentTopic); setupSpeech(); setupQuiz(currentTopic); setupDrawer();
}
