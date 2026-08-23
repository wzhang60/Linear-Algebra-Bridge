# Knowledge Page Template V1

## Purpose

This document defines the standard knowledge-page architecture for Linear Algebra Bridge.

It preserves the strongest learning patterns from Calculus Bridge while adapting them to definitions, matrices, vector spaces, algorithms, and transformations.

## 1. Core Principle

Every page is a focused pre-class bridge between English mathematical language and a linear algebra concept.

The page is successful when students can recognize the written and spoken English and understand what an instructor is referring to. Full procedural mastery is not a required outcome.

The template defines required learning outcomes, not a mandatory sequence of eleven equally large sections. A page should be complete without becoming unnecessarily long.

## 2. Required Page Outcomes

Every page must enable a student to:

- recognize the English and Chinese names;
- hear the main term pronounced;
- recognize the most important English action phrases in speech and writing;
- read one or two central pieces of notation aloud;
- identify the central mathematical object or relationship;
- understand one professional explanation and one accessible clarification;
- follow representative classroom English;
- follow one small example, visual task, or procedure without needing to master the full method;
- check understanding before class.

## 3. Page Families

Choose the page family before writing.

### A. Concept Page

For definitions and relationships such as linear combination, span, linear independence, basis, or subspace.

Primary emphasis:

- defining conditions;
- examples and non-examples;
- distinctions from nearby concepts;
- structural or geometric meaning.

### B. Procedure Page

For methods such as Gaussian elimination, inverse calculation, determinant expansion, or Gram-Schmidt orthogonalization.

Primary emphasis:

- goal and preconditions;
- named operations;
- one action per step;
- invariants and permitted moves;
- interpretation of the result.

### C. Structure Page

For rank, dimension, solution spaces, kernels, images, coordinate systems, and direct structural relationships.

Primary emphasis:

- objects and containment relationships;
- dimension and rank connections;
- multiple representations of the same structure;
- dependency map.

### D. Transformation Page

For matrix transformations, change of basis, projections, eigenvectors, diagonalization, and orthogonal transformations.

Primary emphasis:

- input and output;
- coordinate system and basis;
- what changes and what is preserved;
- symbolic, geometric, and matrix representations.

## 4. Standard Page Structure

### Chapter 1 Reference Implementation Rule

For the current Chapter 1 implementation, `Elementary Row Operations and Row Echelon Form` is the approved reference for visual quality, bilingual hierarchy, controls, and module completeness. It is not a universal interaction grammar. Every Chapter 1 Topic page must preserve the same eight core learning modules after the opening Hero:

1. Understand in Layers;
2. Read the Notation;
3. Concept in Action - an adaptive mathematical interaction chosen for the page family;
4. Key Vocabulary;
5. Visual Recognition or Key Distinction;
6. Classroom English;
7. Quick Check;
8. Before Class Summary.

Section 04 must remain interactive or visually explanatory, but it must follow the mathematical idea rather than force every topic into four screens. Use a two-to-four-state stepwise player only when order carries mathematical meaning. Concept and structure pages should normally use synchronized views, compare-and-classify panels, structure maps, transformation labs, or decision boards. Visual Recognition remains a separate module and must not be silently merged into Section 04. Any proposed omission requires explicit human approval and a documented reason.

### Section 1 - Knowledge Overview and Hero

Required.

Include:

- chapter and section context;
- English page title;
- Chinese academic title;
- concise Academic English definition or description;
- professional Chinese explanation;
- pronunciation and audio;
- a Hero Card centred on the key mathematical object or relationship.

The Hero Card may centre on a formula, matrix, vector configuration, mapping, space relationship, or algorithmic move. Formula-centred design is not mandatory.

### Section 2 - Why It Matters / What Problem It Answers

Required, but may be compact.

Use the heading that fits the topic:

- Why do we need it?
- What question does it answer?
- What does this structure tell us?
- What operation are we trying to perform?

Connect the concept to a genuine mathematical need, not a motivational slogan.

### Section 3 - Understand in Layers

Required.

Default layers:

1. Academic English;
2. professional Chinese;
3. intuitive Chinese or a concrete mental model.

For formal topics, the third layer may instead be “conditions and consequences” or “example and non-example.” Never force a geometric analogy where none is reliable.

### Section 4 - Structure, Notation, or Visual Understanding

At least one is required; use more only when each adds value.

Possible forms:

- notation breakdown;
- dimension check;
- object relationship diagram;
- synchronized equation/matrix view;
- step-by-step interaction;
- geometric transformation;
- example/non-example comparison;
- dependency map.

Every colour, arrow, highlighted entry, region, and motion must have a mathematical meaning.

For procedural topics, a short animated sequence is preferred when it can directly connect an English instruction to a visible mathematical action. Use a minimal example and reveal only one operation per state.

### Section 5 - Concept in Action

Required.

For Chapter 1 pages, preserve the four cognitive functions from the representative Demo: identify the objects, inspect or act on the relationship, observe the evidence, and connect it to notation or a conclusion. These functions do not need four separate screens. Each selectable state or view must still pair English classroom language, Chinese meaning, notation or symbolic expression, and a visible relationship, change, or conclusion.

Choose the interaction family before writing Section 04:

- Stepwise Procedure for ordered algorithms and derivations;
- Synchronized Views for multiple representations of the same object;
- Compare and Classify for definition boundaries and example/non-example distinctions;
- Structure Map for containment, dependency, and hierarchy;
- Transformation Lab for input-output behaviour and preserved properties;
- Decision Board for criteria that lead to different conclusions.

Choose one:

- worked example;
- classification task;
- short proof-reading task;
- row-operation sequence;
- transformation demonstration;
- error diagnosis;
- compare two representations.

Show one mathematical action per step. Each step should include the English action phrase students may hear.

Default scope:

- one example only;
- elementary numbers and notation;
- two to four steps;
- no avoidable arithmetic complexity;
- stop once the target vocabulary and action are clear.

Do not extend the example into full algorithm training unless the page topic itself cannot be recognized without it.

### Section 6 - Key Vocabulary

Required.

Include three to five core terms. Follow `Bilingual_Mathematics_Content_Guidelines_V1.md`.

Do not repeat the page title as a vocabulary card unless the card adds pronunciation, grammar, or usage information not already shown.

### Section 7 - Classroom English

Required.

Include four to seven realistic sentences with Chinese meaning, a highlighted phrase, and audio. Select sentences that mirror the actions or relationships already shown on the page.

### Section 8 - Quick Check

Required.

Use two to four short items across more than one type:

- concept distinction;
- dimension compatibility;
- identify a valid operation;
- interpret notation;
- understand a classroom sentence;
- diagnose a common error;
- predict the effect of a transformation.

Provide explanatory feedback. Do not reward recognition alone.

Language recognition must be represented directly. At least half of the Quick Check should normally test one or more of:

- English-Chinese term matching;
- understanding a spoken or written classroom instruction;
- choosing the English phrase that describes a visible action;
- reading or interpreting notation.

The remaining items may check minimal conceptual recognition. Avoid lengthy calculations.

### Section 9 - Before Class Summary

Required and concise.

State three or four outcomes in student language:

- I can recognize...
- I can explain...
- I can interpret...
- I can follow the instruction...

Avoid claiming mastery from one preview page.

## 5. Optional Modules

Use only when relevant:

- common confusion pair;
- prerequisite reminder;
- theorem condition checklist;
- notation reading practice;
- visual resources;
- Ask AI prompts;
- proof-language bridge;
- extended reading;
- connection to a later topic.

External resources must link to a specific, relevant resource when possible. A generic tool homepage should be labelled as a tool, not as a topic-specific lesson.

## 6. Hero Rules

- Put the core mathematical object or relation at the visual centre.
- Use English and Chinese labels sparingly around the object.
- Preserve mathematical typography and complete brackets.
- Show dimensions when matrix compatibility matters.
- If using colour, repeat the same colour meaning in the explanation.
- On mobile, the Hero Card may move below the title but must remain part of the opening section.

See `Hero_Card_Design_Guidelines_V1.md`.

## 7. Mathematical Expression Rules

- Render matrices, vectors, equations, subscripts, superscripts, and set notation with proper mathematical typography.
- Use column vectors by default unless the course context requires row vectors.
- State matrix dimensions when an operation depends on them.
- Distinguish an object from its coordinate representation.
- Distinguish equality, equivalence, similarity, and congruence.
- Never use screen geometry as proof of a mathematical property.
- Use exact values unless approximation is part of the lesson.
- Keep notation consistent across the Hero Card, visual, example, and quick check.

## 8. Interaction Rules

- Interaction must reveal a relationship, consequence, or sequence.
- The initial state must already communicate the question.
- A next-step interaction should change one mathematical idea at a time.
- Controls must be keyboard accessible and have explicit labels.
- Do not require dragging for essential content; provide buttons or equivalent controls.
- Preserve state labels such as “before,” “operation,” and “after.”
- Provide a static readable fallback for reduced motion or unavailable interaction.

## 9. Content-Length Rules

- The opening definition should be scannable in under one minute.
- A typical page should use six to nine visible modules, not automatically every optional module.
- Avoid repeating the same formula or explanation without a new purpose.
- Keep the most important language and mathematical recognition above the first major scroll transition.
- Long derivations and extensive problem sets belong outside the standard preview page.
- Terminology, pronunciation, notation reading, and classroom English together must remain more prominent than extended exposition or calculation.
- A standard page should contain no more than one worked example unless human review approves an exception.

## 10. Production Metadata

Each page specification or chapter index should track:

- page family;
- prerequisites;
- status;
- content review;
- mathematical review;
- visual review;
- responsive review;
- human approval.

## 11. Completion Standard

A page is complete only when:

- it follows the course map and chapter index;
- terminology and pronunciation are reviewed;
- the central mathematics is correct;
- all visuals correspond to the mathematics;
- the page works at desktop and mobile widths;
- the Quick Check has explanatory feedback;
- the reviewer checklist passes;
- the page still functions as a pre-class bridge rather than a full textbook chapter.
