# Linear Algebra Bridge Project Context

## 1. Project Overview

Linear Algebra Bridge is a bilingual pre-class learning website for first-year Chinese university students entering an English-medium linear algebra course.

The target students are not assumed to be unfamiliar with mathematics. Their main difficulty is connecting mathematics they encounter in English with the concepts, notation, and classroom habits they know in Chinese.

The project helps students:

- recognize core English mathematical terminology;
- connect English terms with standard Chinese academic terms;
- hear and practise pronunciation before class;
- understand common lecture instructions and textbook language;
- preview the conceptual structure of a topic;
- enter class with enough language familiarity to follow the instructor.

## 2. Product Positioning

The website is a language-and-concept bridge, not a replacement for a textbook, instructor, problem set, or full linear algebra course.

### Highest-Priority Product Rule

Language familiarity comes first. Mathematical content provides only the minimum accurate context needed to understand the English.

When time, space, or cognitive load creates a trade-off, use this priority order:

1. recognize the English term in writing;
2. connect it to the standard Chinese academic term;
3. recognize its pronunciation in speech;
4. understand representative classroom sentences and action phrases;
5. recognize the notation and the mathematical action being described;
6. explore a small visual example;
7. study deeper theory or extended calculation only outside the core preview flow.

A page must not be expanded merely because more mathematics could be taught.

Every page should answer four questions:

1. What is this concept called in English and Chinese?
2. What mathematical object or relationship does the term describe?
3. What might an instructor say about it in an English-medium class?
4. What minimum understanding will help the student follow the next lecture?

Depth is selective. A page should give enough mathematical meaning to make the language intelligible, but it should not attempt to reproduce a complete lecture.

## 3. Audience

Primary audience:

- first-year Chinese university students;
- students in science and engineering programmes;
- students taking linear algebra in English for the first time;
- students who benefit from bilingual explanations and pronunciation support.

Assumptions:

- students have secondary-school mathematics experience;
- students may know a Chinese term but not its English equivalent;
- students may recognize written English but fail to identify the same word in speech;
- students may understand a calculation while missing the conceptual language used to describe it.

## 4. Course Basis and Scope

The official course structure is defined in `Linear_Algebra_Course_Map_Index.md`.

The course map is based on the syllabus *Linear Algebra and Its Applications (Blended)* (《线性代数及其应用（混合式）》课程教学大纲). The syllabus lists David C. Lay, *Linear Algebra and Its Applications*, 5th Edition, as the primary English-language textbook.

The current scope contains seven chapters, from introductory systems of linear equations through Euclidean spaces and quadratic forms.

No knowledge page may silently expand or reorganize the official course scope.

## 5. Core Learning Experience

A successful page combines four layers:

### Language recognition

- English name;
- standard Chinese term;
- pronunciation and audio;
- common variants, word forms, and easily confused terms.

### Mathematical recognition

- the defining object or relationship;
- notation and dimensions;
- a concise professional explanation;
- an intuitive explanation where one is mathematically honest.

This layer supplies orientation, not mastery. It should remain smaller than the combined terminology, pronunciation, and classroom-language experience.

### Classroom readiness

- representative lecture sentences;
- important action verbs and phrases;
- one short worked example, classification task, or visual demonstration;
- a quick check that tests understanding rather than memorization.

### Visual connection

- a meaningful Hero Card;
- a simple visual or structural explanation when it helps students connect an English phrase to a mathematical action;
- consistent colours and labels across notation, diagrams, and prose.

For procedural topics, prefer one small step-by-step animation using a basic example. The default is a 2 × 2 or 2 × 3 matrix, one operation at a time, and no more than four explanatory states unless the topic genuinely requires more.

## 6. Brand and Design Direction

Linear Algebra Bridge should remain recognizably part of the same product family as Calculus Bridge.

Preserve by default:

- the restrained academic editorial style;
- deep navy as the primary colour;
- brick red as the main bilingual or emphasis accent;
- warm gold as a limited secondary accent;
- pale blue-grey page backgrounds and white content cards;
- serif English display headings paired with clear Chinese sans-serif text;
- generous whitespace, thin borders, subtle shadows, and small-caps section labels;
- bilingual hierarchy with English first and Chinese immediately available;
- a compact top bar, course map, chapter navigation, progress affordance, and responsive mobile directory.

Changes to the existing visual language require a mathematical, accessibility, or usability reason. Novelty alone is not a reason to redesign the brand.

The integral symbol used by Calculus Bridge must be replaced with a linear-algebra-appropriate mark. The replacement should be simple, academic, and visually compatible with the existing square brand tile. Candidate ideas include a bracketed matrix, a bold vector, or a transformation arrow; the final mark requires visual review.

## 7. Content Principles

- English and Chinese must support each other; neither language is decorative.
- Standard academic terminology takes priority over literal translation.
- Professional Chinese explanation and intuitive Chinese explanation are different layers.
- Do not make a false geometric claim merely because it is easy to animate.
- Dimensions, bases, coordinate systems, and conventions must be explicit when they affect meaning.
- Examples should be small enough for pre-class reading and rich enough to demonstrate the term in use.
- The purpose of an example is to make vocabulary, notation, and classroom instructions concrete; it is not to provide comprehensive problem-solving practice.
- Prefer one elementary example over several increasingly difficult examples.
- Do not use advanced arithmetic or lengthy elimination when a smaller example demonstrates the same English expression.
- Repetition is allowed when it supports language recognition, but repetitive page sections should not create unnecessary length.
- Every module must earn its place by serving language recognition, mathematical recognition, or classroom readiness.

## 8. Page Families

Linear algebra topics do not all have the same instructional shape. Pages may use one of four families:

1. **Concept page** - definitions and relationships, such as span, basis, or linear independence.
2. **Procedure page** - a method or algorithm, such as Gaussian elimination or Gram-Schmidt orthogonalization.
3. **Structure page** - spaces, subspaces, rank, dimension, kernels, and images.
4. **Transformation page** - matrices as mappings, changes of basis, eigenvectors, projections, and diagonalization.

The shared template defines required outcomes and optional modules for these families.

## 9. Documentation Authority

The documentation hierarchy is:

1. `Linear_Algebra_Course_Map_Index.md` - official scope and chapter structure.
2. This project context - audience, product purpose, and non-negotiable positioning.
3. Content, page, navigation, visual, Hero Card, and responsive guidelines.
4. `Knowledge_Page_Reviewer_V1.md` - completion gate.
5. Chapter indexes - approved topics, dependencies, and production status.
6. Individual page specifications and implementation notes.

When two documents conflict, the higher-level document governs unless a later approved revision explicitly states otherwise.

## 10. Definition of Success

After completing a page, a student should be able to:

- recognize the English term when reading or hearing it;
- state the standard Chinese term;
- identify the mathematical object or relationship involved;
- follow several representative classroom sentences;
- complete a short understanding check;
- know what the instructor is likely to discuss next.

Success is readiness for class, not completion of the entire topic.

The strongest evidence of success is that the student can see or hear a key expression and identify what the instructor is asking or describing. Independent mastery of a full calculation is not required.
