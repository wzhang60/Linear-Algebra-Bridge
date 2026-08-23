# Bilingual Mathematics Content Guidelines V1

## Purpose

This document defines how English, Chinese, pronunciation, notation, and classroom language must work together across Linear Algebra Bridge.

## 1. Language Roles

English is the language students need to recognize in lectures and textbooks. Chinese is the support language that connects new English expressions to established mathematical understanding.

Terminology, pronunciation, and classroom expressions are the primary content. Mathematical explanation is supporting context and should not dominate page length.

Use this default hierarchy:

1. English academic term or sentence;
2. standard Chinese academic equivalent;
3. concise explanation of mathematical meaning;
4. intuitive Chinese clarification when useful.

Do not present a literal translation as though it were a mathematical explanation.

## 2. Term Entry Standard

Every core vocabulary entry should include:

- English headword;
- standard Chinese academic term;
- part of speech when it helps comprehension;
- IPA or an approved pronunciation guide;
- audio playback;
- professional meaning in this topic;
- a short plain-language clarification;
- one representative classroom or textbook sentence.

Optional fields:

- plural or inflected form;
- common abbreviation;
- related term;
- easily confused term;
- notation associated with the word.

## 3. Translation Rules

- Use established mainland Chinese university terminology.
- Prefer the terminology used in the official syllabus and course materials.
- Preserve distinctions that matter mathematically.
- If multiple accepted Chinese terms exist, present the course-preferred term first and list the alternative briefly.
- Do not translate symbols, variable names, or conventional set names as ordinary prose.
- Do not invent Chinese terms for convenience.

Examples of required mathematical translation:

| English | Use | Avoid |
|---|---|---|
| solve a system | 求解方程组 | 解决一个系统 |
| field | 域（代数结构） | 领域 |
| span | 张成；所张成的空间 | 跨度 |
| rank | 秩 | 等级、排名 |
| basis | 基 | 基础、底座 |
| row-reduce | 进行行化简 | 减少行 |
| linear combination | 线性组合 | 线性结合 |
| linearly independent | 线性无关 | 线性独立（除非课程明确采用） |
| image/range | 像/像空间 | 图片、范围（未解释语境） |
| kernel/null space | 核/零空间 | 内核（计算机语境） |

## 4. Definition, Explanation, and Intuition

Keep three layers separate:

### Academic English

A concise statement close to the language students may hear or read. It must be mathematically correct and use the target terminology naturally.

### Professional Chinese

A standard mathematical explanation using accepted Chinese terminology. It should clarify notation, conditions, and relationships rather than translate word for word.

### Intuitive Chinese

A lower-barrier explanation that helps the student form a first mental model. It must be labelled as intuition and must not contradict the formal definition.

If an honest intuitive explanation would be misleading, omit it or explicitly state its limits.

## 5. Pronunciation and Audio

- Provide audio for the page title, core vocabulary, and representative classroom sentences.
- Display IPA for important headwords and page titles where practical.
- Use one consistent English pronunciation model across a page.
- Never use Chinese-character homophones as the primary pronunciation system.
- Emphasize stressed syllables in listening tips only when it genuinely helps recognition.
- Audio controls require accessible labels that name the spoken content.
- The same term should use the same pronunciation and audio source throughout the project.

## 6. Word Forms and Grammar

Linear algebra lectures frequently change a term's grammatical form. Call out important families, for example:

- invertible / inverse / invert;
- dependent / independent / dependence / independence;
- orthogonal / orthogonality / orthonormal;
- diagonal / diagonalize / diagonalizable / diagonalization;
- transform / transformation;
- span / spans / spanned by;
- solve / solution / solution set;
- equivalent / equivalence;
- symmetric / symmetry.

Explain the form used in the sentence rather than listing vocabulary without context.

## 7. Classroom English

Each page should include four to seven high-value sentences selected from realistic lecture actions:

- defining an object;
- stating a condition;
- describing a matrix or vector operation;
- asking students to compute or prove something;
- interpreting a result;
- comparing two related concepts.

Each sentence includes:

- the English sentence;
- natural Chinese meaning;
- one highlighted phrase or action verb;
- audio;
- an optional listening cue.

Prefer sentences such as:

- “Apply an elementary row operation to eliminate this entry.”
- “The columns of the matrix span the column space.”
- “These vectors are linearly independent.”
- “Express the vector as a linear combination of the basis vectors.”

Avoid unnatural sentences created only to contain a keyword.

At least half of the selected sentences should describe an action or relationship demonstrated elsewhere on the page. If a step animation is used, its visible action label and spoken classroom sentence should use the same wording.

## 8. Mathematical Action Verbs

Give special attention to verbs students must act on:

- compute, determine, find, solve;
- show, prove, verify;
- express, represent, write;
- span, generate;
- reduce, eliminate, interchange, scale;
- transform, map, project, rotate, reflect;
- diagonalize, factor, normalize, orthogonalize;
- satisfy, imply, preserve.

The Chinese support should explain the requested mathematical action, not only the dictionary meaning.

## 9. Notation and Reading Aloud

When notation is central, show how it may be spoken:

- `A^T`: “A transpose”;
- `A^{-1}`: “A inverse”;
- `R^n`: “R n” or “R to the n” according to course convention;
- `Ax=b`: “A x equals b”;
- `v \in V`: “v belongs to V” or “v is in V”;
- `span{v_1,v_2}`: “the span of v one and v two”;
- `det(A)`: “the determinant of A”;
- `ker(T)`: “the kernel of T.”

Do not overload a page with spoken notation. Select expressions students are likely to hear.

## 10. Common Confusion Pairs

When relevant, contrast terms explicitly:

- row vs. column;
- scalar vs. vector;
- matrix vs. determinant;
- inverse vs. reciprocal;
- solution vs. solution set;
- equal vs. equivalent;
- linear combination vs. span;
- subset vs. subspace;
- dependent vs. independent;
- basis vs. coordinate vector;
- eigenvalue vs. eigenvector;
- orthogonal vs. orthonormal;
- similar vs. congruent/equivalent.

The comparison should state the mathematical distinction and show one minimal example.

## 11. Content Density

- Prefer four core vocabulary cards over a long dictionary.
- Place secondary terms in a compact “Also listen for” group.
- Keep definitions concise enough to scan before class.
- Avoid repeating the same Chinese explanation in the overview, vocabulary, formula section, and summary.
- A bilingual page should feel supported, not doubled in length by sentence-for-sentence duplication.
- The combined term, pronunciation, notation-reading, and classroom-English content should receive more emphasis than extended mathematical exposition.
- One simple example is normally sufficient.
- Additional exercises, proofs, and advanced cases belong outside the core pre-class page.

## 12. Content QA

Before approval, confirm:

- every English term has the correct Chinese academic equivalent;
- definitions state all necessary conditions;
- intuitive explanations do not replace definitions;
- word forms and plural forms are correct;
- classroom sentences sound natural;
- pronunciation and audio labels match the displayed text;
- notation is spoken and displayed consistently;
- no literal translation changes the mathematical meaning;
- the page remains focused on pre-class language readiness.
