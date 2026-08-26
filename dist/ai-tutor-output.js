export function selectAiOutput(generatedText, answerText) {
  const answer = answerText.trim();
  if (answer) return { output: answer, usedFallback: false };
  const fallback = generatedText.replaceAll('<think>', '').replaceAll('</think>', '').trim();
  return { output: fallback, usedFallback: Boolean(fallback) };
}
