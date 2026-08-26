import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from './feedback-config.js';
import { sections, topicBySlug } from './chapter1-data.js';
import { chapter2Sections, chapter2TopicBySlug } from './chapter2-data.js';
import { remainingSections, remainingTopicBySlug } from './remaining-data.js';

const allTopicsBySlug = { ...topicBySlug, ...chapter2TopicBySlug, ...remainingTopicBySlug };
const allSections = [...sections, ...chapter2Sections, ...remainingSections];
const params = new URLSearchParams(location.search);
const requestedSlug = params.get('topic');
const currentTopic = requestedSlug ? (allTopicsBySlug[requestedSlug] || allTopicsBySlug['elementary-row-operations']) : null;

const getContext = () => {
  if (!currentTopic) {
    return {
      label: '课程首页 · Course Map', chapter: null, section: null,
      topicSlug: null, topicTitle: '课程首页 · Course Map'
    };
  }
  const chapter = currentTopic.chapter || 1;
  const section = allSections.find(item => item.id === currentTopic.section);
  return {
    label: `Chapter ${chapter} · Section ${currentTopic.section} · ${currentTopic.title}`,
    chapter, section: currentTopic.section, topicSlug: currentTopic.slug,
    topicTitle: currentTopic.title, sectionTitle: section?.title || ''
  };
};

const trigger = document.querySelector('#open-feedback');
const modal = document.querySelector('#feedback-modal');
const backdrop = document.querySelector('#feedback-backdrop');
const closeButton = document.querySelector('#close-feedback');
const form = document.querySelector('#feedback-form');
const nameInput = document.querySelector('#feedback-name');
const messageInput = document.querySelector('#feedback-message');
const contextText = document.querySelector('#feedback-context');
const status = document.querySelector('#feedback-status');
const submitButton = document.querySelector('#feedback-submit');
let lastFocus = null;

const setStatus = (message, type = '') => {
  status.textContent = message;
  status.dataset.state = type;
};

const showContext = () => {
  const context = getContext();
  contextText.textContent = `当前页面：${context.label}${context.sectionTitle ? ` · ${context.sectionTitle}` : ''}`;
};

const setOpen = open => {
  if (open) {
    lastFocus = document.activeElement;
    showContext();
    modal.hidden = false;
    backdrop.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('feedback-open');
    setStatus('');
    nameInput.focus();
  } else {
    modal.hidden = true;
    backdrop.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('feedback-open');
    lastFocus?.focus();
  }
};

trigger.addEventListener('click', () => setOpen(true));
closeButton.addEventListener('click', () => setOpen(false));
backdrop.addEventListener('click', () => setOpen(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) setOpen(false);
});

form.addEventListener('submit', async event => {
  event.preventDefault();
  const displayName = nameInput.value.trim();
  const message = messageInput.value.trim();
  if (!displayName || !message) {
    setStatus('请先填写昵称和反馈内容。', 'error');
    return;
  }

  let lastSubmittedAt = 0;
  try { lastSubmittedAt = Number(sessionStorage.getItem('linear-algebra-bridge-feedback-last-submit') || 0); } catch {}
  if (Date.now() - lastSubmittedAt < 15000) {
    setStatus('请稍等几秒再提交下一条反馈。', 'error');
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = '正在提交……';
  setStatus('');
  const context = getContext();
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify({
        display_name: displayName,
        message,
        chapter: context.chapter,
        section: context.section,
        topic_slug: context.topicSlug,
        topic_title: context.topicTitle,
        page_url: location.href.slice(0, 500)
      })
    });
    if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
    try { sessionStorage.setItem('linear-algebra-bridge-feedback-last-submit', String(Date.now())); } catch {}
    form.reset();
    setStatus('谢谢你的反馈！我已经收到。', 'success');
  } catch (error) {
    console.error(error);
    setStatus('提交暂时没有成功，请稍后再试。', 'error');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = '提交反馈 →';
  }
});
