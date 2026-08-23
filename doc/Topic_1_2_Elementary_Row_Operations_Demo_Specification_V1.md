# Topic 1.2 Elementary Row Operations Demo Specification V1

## 1. Reference

Chapter: Chapter 1 - Prerequisites and an Introduction to Systems of Linear Equations

Section: 1.2 Solving Systems of Linear Equations and Gaussian (Matrix) Elimination

Topic: Elementary Row Operations and Row Echelon Form

Chinese topic: 初等行变换与行阶梯形矩阵

Page family: Procedure

Status: Planned

## 2. Demo Purpose

This is the first representative knowledge-page prototype for Linear Algebra Bridge.

Its purpose is not to teach students to complete Gaussian elimination independently. It should help them enter class already able to:

- recognize the main English terms in writing;
- connect those terms to standard Chinese mathematical language;
- recognize the terms and classroom instructions when spoken;
- understand what visible matrix action an instructor is describing;
- identify the basic appearance of row echelon form.

## 3. Success Criteria

After the preview, a student should be able to:

- connect “elementary row operation” with “初等行变换”;
- recognize `row`, `column`, `entry`, `leading entry`, `pivot`, and `row echelon form`;
- understand the three allowed row-operation phrases;
- follow a sentence such as “Add negative two times row one to row two”;
- read `R_2 ← R_2 - 2R_1` aloud with support;
- watch one small row-operation sequence and describe what changed;
- recognize a simple matrix in row echelon form.

Independent solution of a multistep linear system is not a success requirement.

## 4. Language Priority

Use this page-level priority:

1. term recognition;
2. pronunciation and audio;
3. English-Chinese connection;
4. classroom instructions;
5. notation reading;
6. simple visual demonstration;
7. minimal concept check.

Do not add a long derivation, multiple exercises, proof of solution-set preservation, or a complete Gaussian-elimination lesson to the core page.

## 5. Opening Overview and Hero

### Page title

Elementary Row Operations

初等行变换

Secondary concept label:

Row Echelon Form · 行阶梯形矩阵

### Pronunciation

Provide reviewed IPA and audio for:

- elementary row operations;
- row echelon form.

Display each English term next to its Listen control and IPA. A Listen control and IPA alone are not sufficient because students must connect the written word, pronunciation, and sound in the same visual group.

Do not use Chinese-character homophones.

### Concise English description

Use one short classroom-ready sentence, for example:

> Elementary row operations change the rows of a matrix without changing the solution set of the corresponding linear system.

### Professional Chinese support

Explain concisely that elementary row operations act on entire rows and preserve the solution set of the corresponding system. Avoid expanding into a proof.

### Hero Card

Centre the card on one before-and-after row operation:

`R_2 ← R_2 - 2R_1`

Use a small 2 × 3 augmented matrix. Highlight:

- `R_1` in navy;
- the original `R_2` in brick red;
- the changed entries in the result with a restrained transition highlight;
- the augmentation bar clearly.

The card must show that the operation changes the entire second row, not one isolated entry.

The before matrix, row-operation notation, arrow, and after matrix must never collide at the default 100% browser zoom. The card may reflow the operation onto its own row when a three-column arrangement does not have enough room.

## 6. Core Vocabulary

Primary terms:

| English | Chinese | Required support |
|---|---|---|
| elementary row operation | 初等行变换 | IPA, audio, concise meaning |
| interchange two rows | 交换两行 | audio and action animation |
| multiply a row by a nonzero scalar | 用非零数乘某一行 | audio and action animation |
| add a multiple of one row to another | 将某一行的倍数加到另一行 | audio and action animation |
| row echelon form | 行阶梯形矩阵 | IPA, audio, visual recognition |

Supporting terms:

- row · 行;
- column · 列;
- entry · 元素;
- leading entry · 首非零元;
- pivot / pivot position · 主元 / 主元位置;
- augmented matrix · 增广矩阵.

If space is limited, keep five primary vocabulary cards and place supporting terms in a compact “Also listen for” strip.

## 7. Notation Reading

Include a short audio-supported notation block:

`R_1 ↔ R_2`

- English: “Interchange row one and row two.”
- Chinese: “交换第一行与第二行。”

`R_2 ← 3R_2`

- English: “Multiply row two by three.”
- Chinese: “用 3 乘第二行。”

`R_2 ← R_2 - 2R_1`

- English: “Replace row two by row two minus two times row one.”
- Chinese: “用第二行减去第一行的两倍，替换第二行。”

Present a natural lecture variant where useful:

> Add negative two times row one to row two.

Explain that the two English sentences describe the same row operation.

Keep the three notation-reading examples on the same neutral card surface. Do not highlight the third example merely because it matches the Hero Card or animated demonstration; use emphasis only when it communicates a distinct learning state.

## 8. Step-by-Step Animated Demonstration

### Learning question

What does the instructor mean by “Eliminate the entry below the pivot”?

### Example

Use one 2 × 3 augmented matrix:

```text
[ 1  1 | 3 ]
[ 2  1 | 4 ]
```

Apply:

`R_2 ← R_2 - 2R_1`

Result:

```text
[ 1   1 |  3 ]
[ 0  -1 | -2 ]
```

### Required states

#### State 1 - Identify the rows

- Highlight row one and row two.
- English label: “Use row one as the pivot row.”
- Chinese support: “把第一行作为主元行。”
- Audio for the English sentence.

#### State 2 - State the operation

- Display `R_2 ← R_2 - 2R_1`.
- English label: “Subtract two times row one from row two.”
- Chinese support: “第二行减去第一行的两倍。”
- Highlight the entire rows involved.

#### State 3 - Update the row

- Animate corresponding entries in row two changing together.
- Keep row one visibly unchanged.
- English label: “The entry below the pivot becomes zero.”
- Chinese support: “主元下方的元素变为 0。”

#### State 4 - Recognize the result

- Show the result matrix.
- Mark the leading entries and staircase pattern.
- English label: “The matrix is in row echelon form.”
- Chinese support: “矩阵现在是行阶梯形。”

### Interaction controls

- Previous;
- Next;
- Replay;
- direct step buttons 1-4;
- audio button for each English action sentence.

The animation must work without drag interaction and must have a static reduced-motion alternative.

## 9. Minimal Concept Support

Explain the three elementary row operations using one sentence each. Do not add proofs.

Explain row echelon form through visual recognition:

- zero rows, if any, are below nonzero rows;
- each leading entry is to the right of the leading entry above it;
- entries below a leading entry are zero.

Do not introduce reduced row echelon form unless it appears only as a clearly labelled “not the same term” note.

## 10. Classroom English

Include six or seven sentences. Recommended set:

1. “Interchange the first and second rows.”
2. “Multiply the second row by a nonzero scalar.”
3. “Add a multiple of row one to row two.”
4. “Use the leading entry as a pivot.”
5. “Eliminate the entry below the pivot.”
6. “The first row remains unchanged.”
7. “The matrix is now in row echelon form.”

Each sentence includes:

- natural Chinese meaning;
- one highlighted phrase;
- audio;
- a short listening cue only when useful;
- a link to the matching animation state when applicable.

## 11. Quick Check

Use four short items:

1. Match `elementary row operation` to its Chinese term.
2. Hear or read “Interchange row one and row two” and select the correct matrix action.
3. Match `R_2 ← R_2 - 2R_1` to the correct English sentence.
4. Choose which of two small matrices is in row echelon form.

Three of the four items directly assess bilingual or classroom-language recognition. None requires lengthy arithmetic.

Every answer provides a one- or two-sentence explanation.

## 12. Before Class Summary

Use readiness language:

- I can recognize the names of the three elementary row operations.
- I can understand common row-operation instructions in English.
- I can read a basic row-operation symbol with support.
- I can recognize the basic staircase pattern of row echelon form.

Do not say the student has mastered Gaussian elimination.

## 13. Visual and Responsive Requirements

- Preserve the Calculus Bridge product-family colours, typography, spacing, cards, header, and navigation.
- Replace the calculus brand symbol only when the shared Linear Algebra Bridge mark is approved.
- Keep complete matrix brackets and the augmentation bar visible.
- Keep a visible complete boundary around the animated demonstration, including the right edge of the matrix-state panel.
- At 390 px and 320 px, stack the Hero Card below the bilingual overview.
- Do not shrink matrix entries below comfortable reading size.
- At mobile width, action sentence, notation, and matrix change must remain visually associated.
- Test all four animation states and audio controls at desktop and mobile widths.

## 14. Excluded from This Demo

- a complete Gaussian-elimination algorithm;
- systems larger than needed for the language demonstration;
- multiple worked examples;
- reduced row echelon form as a second full lesson;
- formal proof that row operations preserve solution sets;
- difficult fractions or parameter cases;
- a large exercise bank;
- advanced implementation of saved progress.

## 15. Approval Gate

Before implementation is approved, confirm:

- the page remains language-first;
- all English and Chinese terminology is reviewed;
- IPA and audio content match;
- the four animation states are mathematically correct;
- each English instruction matches the visible operation;
- matrix layout survives desktop and mobile widths;
- at least three of four Quick Check items assess language recognition;
- the page does not claim full procedural mastery;
- `Knowledge_Page_Reviewer_V1.md` passes.

## Source Note

The topic scope comes from Part V, subsection (1), of `线性代数大纲.pdf`, which lists elementary row operations, row echelon matrices, Gaussian elimination, and solution classification among the Chapter 1 knowledge requirements.
