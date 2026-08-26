import {
  AutoModelForCausalLM,
  AutoTokenizer,
  InterruptableStoppingCriteria,
  TextStreamer
} from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.7.1/+esm';
import { selectAiOutput } from './ai-tutor-output.js';

const MODEL_ID = 'onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX';
const stoppingCriteria = new InterruptableStoppingCriteria();
let tokenizerPromise;
let modelPromise;

const reportError = error => self.postMessage({
  status: 'error',
  data: error instanceof Error ? error.message : String(error)
});

const getModel = progress_callback => {
  tokenizerPromise ||= AutoTokenizer.from_pretrained(MODEL_ID, { progress_callback });
  modelPromise ||= AutoModelForCausalLM.from_pretrained(MODEL_ID, {
    device: 'webgpu',
    dtype: 'q4f16',
    progress_callback
  });
  return Promise.all([tokenizerPromise, modelPromise]);
};

const load = async () => {
  if (!navigator.gpu) throw new Error('此浏览器不支持 WebGPU，请使用最新版 Chrome 或 Edge。');
  self.postMessage({ status: 'loading', data: '正在下载本地模型，首次加载可能需要几分钟……' });
  const [tokenizer, model] = await getModel(message => self.postMessage(message));
  self.postMessage({ status: 'loading', data: '正在编译模型，请继续保持页面打开……' });
  await model.generate({ ...tokenizer('a'), max_new_tokens: 1 });
  self.postMessage({ status: 'ready' });
};

const generate = async messages => {
  const [tokenizer, model] = await getModel();
  const inputs = tokenizer.apply_chat_template(messages, {
    add_generation_prompt: true,
    return_dict: true
  });
  const endThinkingToken = tokenizer.encode('</think>', { add_special_tokens: false })[0];
  let answering = false;
  let generatedText = '';
  let answerText = '';
  const streamer = new TextStreamer(tokenizer, {
    skip_prompt: true,
    skip_special_tokens: true,
    token_callback_function: tokens => {
      if (tokens[0] === endThinkingToken) answering = true;
    },
    callback_function: output => {
      generatedText += output;
      if (answering) {
        answerText += output;
        self.postMessage({ status: 'update', output });
      }
    }
  });
  self.postMessage({ status: 'start' });
  stoppingCriteria.reset();
  await model.generate({
    ...inputs,
    do_sample: false,
    max_new_tokens: 1024,
    streamer,
    stopping_criteria: stoppingCriteria
  });
  self.postMessage({ status: 'complete', ...selectAiOutput(generatedText, answerText) });
};

self.addEventListener('message', async ({ data }) => {
  try {
    if (data.type === 'load') await load();
    if (data.type === 'generate') await generate(data.data);
    if (data.type === 'interrupt') stoppingCriteria.interrupt();
    if (data.type === 'reset') stoppingCriteria.reset();
  } catch (error) {
    reportError(error);
  }
});
