# Linear Algebra Bridge Web Implementation Handoff V1

## 1. Purpose

This file hands the Linear Algebra Bridge project from documentation planning into web implementation.

The first implementation task is one representative Topic page only:

**Elementary Row Operations and Row Echelon Form（初等行变换与行阶梯形矩阵）**

Do not generate the entire chapter or course during this task.

## 2. Product Goal

Linear Algebra Bridge is a bilingual pre-class familiarity tool for first-year Chinese university students entering an English-medium linear algebra course.

The website is not intended to teach students the complete mathematics. Its primary goals are:

1. recognize important English terms in writing;
2. connect them to standard Chinese mathematical terms;
3. recognize English pronunciation and spoken classroom instructions;
4. understand common lecture sentences and action phrases;
5. use one small, accurate mathematical demonstration to make the language concrete.

Mathematical depth supports language familiarity. It must not dominate the page.

## 3. Source-of-Truth Reading Order

Before editing the website, read these files in order:

1. `DOC/Linear_Algebra_Bridge_Project_Context.md`
2. `DOC/Topic_1_2_Elementary_Row_Operations_Demo_Specification_V1.md`
3. `DOC/Bilingual_Mathematics_Content_Guidelines_V1.md`
4. `DOC/Knowledge_Page_Template_V1.md`
5. `DOC/Hero_Card_Design_Guidelines_V1.md`
6. `DOC/Mathematical_Visualization_Guidelines_V1.md`
7. `DOC/Navigation_Design_Guidelines_V1.md`
8. `DOC/Responsive_Visual_QA_Addendum_V1.md`
9. `DOC/Knowledge_Page_Reviewer_V1.md`

Use when course placement or terminology scope needs confirmation:

- `DOC/Linear_Algebra_Course_Map_Index.md`
- `DOC/Chapter1_Prerequisites_and_Linear_Systems_Index.md`
- `线性代数大纲.pdf`

`REFDOC` contains the previous Calculus Bridge documentation. It is reference material, not the source of truth for the new project.

## 4. Existing Calculus Bridge Reference

If the Calculus Bridge site is locally available, inspect `http://localhost:3000/` before implementing.

Preserve its established product-family qualities unless a Linear Algebra Bridge document explicitly changes them:

- deep navy, brick red, warm gold, white, and pale blue-grey palette;
- academic editorial visual style;
- serif English display headings and clear Chinese sans-serif support;
- bilingual English-first hierarchy;
- generous whitespace, thin borders, restrained shadows, and structured cards;
- course-map home, desktop sidebar, and mobile directory pattern;
- pronunciation/audio controls;
- section eyebrows, classroom-English cards, Quick Check, and before-class summary.

Do not copy calculus-specific symbols, formulas, graphs, or derivative visual logic.

## 5. First Demo Scope

Implement only the page specified in:

`DOC/Topic_1_2_Elementary_Row_Operations_Demo_Specification_V1.md`

Required experience:

- bilingual title and concise overview;
- reviewed English-Chinese terminology;
- pronunciation presentation and usable audio controls;
- notation-reading support;
- one simple 2 × 3 augmented-matrix example;
- four-step controlled animation;
- six or seven classroom-English sentences;
- four short Quick Check items, primarily language-focused;
- concise before-class summary;
- desktop and mobile layouts.

The animation uses:

```text
[ 1  1 | 3 ]
[ 2  1 | 4 ]
```

with:

`R_2 ← R_2 - 2R_1`

to produce:

```text
[ 1   1 |  3 ]
[ 0  -1 | -2 ]
```

Each step must visibly connect:

- the English classroom instruction;
- its Chinese meaning;
- the symbolic row operation;
- the corresponding change in the matrix.

## 6. Explicit Non-Goals

Do not implement during the first Demo:

- the remaining Chapter 1 Topic pages;
- all seven chapters;
- a full Gaussian-elimination lesson;
- several worked examples;
- lengthy proofs or difficult calculations;
- reduced row echelon form as a second lesson;
- a large exercise bank;
- fabricated saved progress;
- a broad redesign of the Calculus Bridge product family;
- deployment or publishing unless separately requested.

Publishing and deployment are explicitly prohibited for the first Demo. Do not create a public URL, production deployment, preview deployment, or hosting release.

## 7. Implementation Approach

Before editing:

1. inspect the workspace structure and existing application;
2. identify the framework, reusable components, styles, audio approach, and test commands;
3. inspect the local Calculus Bridge reference when available;
4. state any necessary implementation assumptions;
5. preserve unrelated user changes.

During implementation:

- reuse existing product-family patterns where they are suitable;
- create linear-algebra-specific components only where mathematics requires them;
- keep content data separate from animation logic when practical;
- use semantic and accessible controls;
- provide a reduced-motion/static alternative;
- do not request clarification for minor reversible implementation choices.

## 8. Audio Boundary

Audio is a core requirement, not decorative polish.

Use the existing project's audio approach if available. If final recorded or generated audio assets are unavailable:

- build the correct accessible controls and content mapping;
- use the safest locally supported speech fallback if appropriate;
- clearly identify any placeholder audio behaviour in the handoff;
- do not falsely claim that pronunciation audio has been human-reviewed.

## 9. Verification Requirements

Before reporting completion:

- run the project's relevant build, type, lint, and test checks;
- inspect the page in the browser at desktop width;
- inspect at 390 px and 320 px widths;
- load and interact with the actual running page at every required width; do not infer mobile correctness from CSS or source review alone;
- open and close navigation where applicable;
- run all four animation states forward and backward;
- verify row-one and row-two changes are mathematically correct;
- activate representative audio controls;
- complete every Quick Check path and inspect feedback;
- confirm no unintended horizontal overflow;
- confirm matrix brackets and the augmentation bar are intact;
- confirm mathematical symbols, arrows, subscripts, row-operation notation, audio controls, and step indicators render at both desktop and mobile widths;
- confirm desktop and mobile contain the same required learning content, allowing only layout adaptation;
- check visible console errors;
- review the result against `DOC/Knowledge_Page_Reviewer_V1.md`.

Any defect that appears only on mobile is still a completion blocker.

## 10. Local Preview Requirement

After implementation and verification, leave a local development Preview available for human review.

- Do not use port 3000; it is reserved for the Calculus Bridge reference site.
- Prefer `http://localhost:3001/`.
- If port 3001 is unavailable, use `http://localhost:3002/` or the next clearly reported available local port.
- Use the project's supported local development command and keep the Preview process running when the environment permits.
- Verify the exact reported URL opens successfully before handing it to the user.
- The Preview must remain local only. Do not publish, deploy, or expose it through a public tunnel.
- Report both the exact local URL and the command needed to restart it.

## 11. Completion Report

The implementation task's final report should state:

- what was built;
- which existing Calculus Bridge patterns were preserved;
- which Linear Algebra-specific components were added;
- what was tested and the results;
- any remaining limitations, especially audio review or placeholder behaviour;
- the verified local Preview URL and exact command for restarting it;
- explicit confirmation that nothing was published or deployed.

Do not claim that the full chapter or course is complete.

## 12. Stop Condition

Stop after the single Topic Demo is implemented and verified.

Ask for human review before expanding to the rest of Section 1.2, Chapter 1, or the complete course.
