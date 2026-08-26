const trigger = document.querySelector('#open-ai-tutor');
const panel = document.querySelector('#ai-tutor-panel');
const backdrop = document.querySelector('#ai-backdrop');
const closeButton = document.querySelector('#close-ai-tutor');
const loadButton = document.querySelector('#load-ai-model');
const progress = document.querySelector('#ai-progress');
const status = document.querySelector('#ai-status');
const messagesElement = document.querySelector('#ai-messages');
const form = document.querySelector('#ai-form');
const questionInput = document.querySelector('#ai-question');
const sendButton = document.querySelector('#ai-send');
const stopButton = document.querySelector('#ai-stop');
const clearButton = document.querySelector('#ai-clear');

let worker;
let ready = false;
let generating = false;
let lastFocus;
let assistantBubble;
let assistantText = '';
let conversation = [];

const setStatus = (message, state = '') => {
  status.textContent = message;
  status.dataset.state = state;
};

const scrollMessages = () => {
  messagesElement.scrollTop = messagesElement.scrollHeight;
};

const addMessage = (role, text = '') => {
  const message = document.createElement('p');
  message.className = `ai-message ${role}`;
  message.textContent = text;
  messagesElement.append(message);
  scrollMessages();
  return message;
};

const setGenerating = value => {
  generating = value;
  questionInput.disabled = !ready || value;
  sendButton.disabled = !ready || value;
  stopButton.disabled = !value;
};

const pageContext = () => {
  const title = document.querySelector('#page-title')?.textContent || document.title;
  const text = document.querySelector('main')?.innerText.replace(/\s+/g, ' ').slice(0, 4500) || '';
  return `你是 Linear Algebra Bridge 的双语线性代数助教。请优先根据当前课程页面回答，解释适合初学者，必要时同时给出中英文术语。直接给出最终答案，不展示思考过程，不输出 <think> 标签；先用一句话回答核心问题，再用不超过 200 字补充解释。不要假装确定；不确定时明确说明。\n当前主题：${title}\n当前页面摘要：${text}`;
};

const open = value => {
  if (value) {
    if (!document.querySelector('#feedback-modal')?.hidden) document.querySelector('#close-feedback')?.click();
    lastFocus = document.activeElement;
    panel.hidden = false;
    backdrop.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('ai-open');
    (ready ? questionInput : loadButton).focus();
  } else {
    panel.hidden = true;
    backdrop.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('ai-open');
    lastFocus?.focus();
  }
};

const handleWorkerMessage = ({ data }) => {
  if (data.status === 'progress') {
    progress.hidden = false;
    progress.value = Math.round(data.progress || 0);
    setStatus(`正在下载模型：${progress.value}%`);
  } else if (data.status === 'loading') {
    setStatus(data.data);
  } else if (data.status === 'ready') {
    ready = true;
    loadButton.hidden = true;
    progress.hidden = true;
    setGenerating(false);
    setStatus('本地模型已准备好。问题和回答不会发送到本站数据库。');
    questionInput.focus();
  } else if (data.status === 'start') {
    assistantText = '';
    assistantBubble = addMessage('assistant', '正在思考……');
  } else if (data.status === 'update') {
    assistantText += data.output;
    assistantBubble.textContent = assistantText || '正在思考……';
    scrollMessages();
  } else if (data.status === 'complete') {
    const savedText = data.output || assistantText;
    if (savedText) {
      assistantText = savedText;
      assistantBubble.textContent = data.usedFallback
        ? `${savedText}\n\n（模型未完成正式答案，以上为已生成内容。）`
        : savedText;
    } else {
      assistantBubble.textContent = '模型没有生成内容，请换一种问法。';
    }
    conversation.push({ role: 'assistant', content: savedText || assistantBubble.textContent });
    setGenerating(false);
    setStatus('回答完成。');
    questionInput.focus();
  } else if (data.status === 'error') {
    loadButton.disabled = false;
    setGenerating(false);
    setStatus(data.data || '本地模型启动失败，请尝试最新版 Chrome 或 Edge。', 'error');
  }
};

trigger.addEventListener('click', () => open(true));
closeButton.addEventListener('click', () => open(false));
backdrop.addEventListener('click', () => open(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !panel.hidden) open(false);
});

loadButton.addEventListener('click', () => {
  loadButton.disabled = true;
  setStatus('正在检查 WebGPU 并准备模型……');
  worker ||= new Worker('./ai-tutor-worker.js', { type: 'module' });
  worker.onmessage = handleWorkerMessage;
  worker.onerror = () => handleWorkerMessage({ data: { status: 'error', data: '模型组件加载失败，请检查网络后重试。' } });
  worker.postMessage({ type: 'load' });
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (!question || !ready || generating) return;
  questionInput.value = '';
  addMessage('user', question);
  conversation.push({ role: 'user', content: question });
  conversation = conversation.slice(-6);
  setGenerating(true);
  setStatus('模型正在本地生成回答……');
  worker.postMessage({
    type: 'generate',
    data: [{ role: 'system', content: pageContext() }, ...conversation]
  });
});

stopButton.addEventListener('click', () => {
  worker?.postMessage({ type: 'interrupt' });
  setStatus('正在停止生成……');
});

clearButton.addEventListener('click', () => {
  conversation = [];
  messagesElement.replaceChildren();
  addMessage('assistant', '对话已清空。你可以继续针对当前页面提问。');
  worker?.postMessage({ type: 'reset' });
});
