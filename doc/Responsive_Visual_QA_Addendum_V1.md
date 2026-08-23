# Responsive Visual QA Addendum V1

## Purpose

This document defines responsive quality checks for Linear Algebra Bridge pages, with special attention to matrices, vectors, diagrams, navigation, and bilingual readability.

## 1. Preserve the Existing Responsive Philosophy

Retain the successful Calculus Bridge pattern:

- desktop course-map sidebar;
- compact mobile header;
- mobile directory button and drawer;
- stacked opening section on narrow screens;
- large English headings with immediately visible Chinese support;
- content cards that become single-column without losing hierarchy.

Responsive adaptation may simplify layout, but it must not change mathematical meaning.

## 2. Required Validation Widths

Review at representative widths:

- 1440 px desktop;
- 1024 px small desktop/tablet landscape;
- 768 px tablet portrait;
- 390 px modern mobile;
- 320 px narrow mobile stress test.

Also test increased text size and browser zoom where practical.

## 3. Header and Navigation

- Product name remains legible.
- The desktop sidebar never compresses the main content below a readable width.
- Sidebar scrolling does not scroll the content unexpectedly.
- On mobile, the directory button is visible without competing with the title.
- The drawer shows the active chapter, section, and topic.
- Focus enters, stays within, and returns from the drawer correctly.
- Long bilingual titles wrap without clipping or horizontal page overflow.

## 4. Opening Section

- Desktop may use a text/Hero two-column arrangement.
- Mobile stacks title, Chinese title, definition, audio, and Hero Card in a deliberate order.
- The Chinese academic title remains prominent enough to support recognition.
- Body text does not use display-heading proportions that create excessive scrolling.
- The Hero Card appears early enough to remain part of the overview.
- Above-the-fold content should establish the term and mathematical object without requiring several screens.
- At 100% browser zoom, internal Hero Card objects must reflow before notation, arrows, or matrices overlap.
- Each pronunciation group keeps the written English term, IPA, and its audio control visibly associated.

## 5. Matrix Integrity

- Opening and closing brackets remain visible.
- Entries stay aligned in rows and columns.
- Augmentation bars remain aligned.
- Superscripts, subscripts, and transpose/inverse markers are not clipped.
- A matrix is not broken into unrelated wrapped text lines.
- When a matrix is wider than the viewport, use controlled horizontal scrolling or a purpose-designed compact representation.
- Scroll affordance must be visible; hidden overflow is not acceptable.
- Do not reduce text until entries become unreadable.

## 6. Vector and Coordinate Diagrams

- Coordinate axes preserve aspect ratio.
- Arrowheads remain attached to their vectors.
- Labels do not cover endpoints or each other.
- Grid lines remain secondary to the mathematical objects.
- Transformation before/after states use comparable scales unless scale change is the concept.
- A mobile crop must not remove the origin, basis labels, or target object.

## 7. Formula and Notation

- Fractions, sums, products, determinants, norms, inner products, and set notation retain mathematical layout.
- Line breaks occur at meaningful relation or operation boundaries.
- Equality chains do not wrap into an ambiguous order.
- Definitions remain connected to their conditions.
- Use a compact alternative or scroll container before shrinking essential notation excessively.

## 8. Bilingual Readability

- English and Chinese hierarchy stays consistent at every width.
- Chinese is not reduced to low-contrast microcopy.
- Paragraph line length remains comfortable in both languages.
- English terms are not separated from their Chinese equivalents by unrelated content after reflow.
- IPA and audio controls remain associated with the correct term.
- Classroom sentences and translations wrap as one card, not as detached fragments.

## 9. Interaction Controls

- Step controls remain reachable without horizontal page scrolling.
- Previous/next buttons do not overlap visual content.
- Active step indicators remain clear at 320 px.
- Touch targets are large enough to use reliably.
- Essential information is not available only on hover.
- Reduced-motion mode preserves state changes through labels and static frames.
- Interactive demonstration panels keep a complete visible outer boundary; a white result panel must not visually disappear into the page background at its right edge.

## 10. Content Density

- Multi-card grids collapse to one column at an appropriate breakpoint.
- Cards do not become excessively tall because short labels are forced into narrow columns.
- Repeated section eyebrows and numbers remain useful navigation cues rather than visual clutter.
- Optional modules may be omitted on a topic page when they add length without new learning value.
- Avoid several consecutive full-screen text sections before the first active example or visual.

## 11. Visual QA Matrix

For each target width, check:

| Area | Correctness | Readability | Interaction |
|---|---|---|---|
| Header/navigation | active hierarchy preserved | titles readable | drawer/sidebar usable |
| Hero | object relationship unchanged | notation and labels legible | controls available if interactive |
| Mathematical visual | coordinates and calculations correct | no overlap or cropping | steps and state clear |
| Example | operations remain aligned | bilingual steps scan well | reveal controls usable |
| Vocabulary/classroom English | audio matches term | cards and IPA readable | audio controls labelled |
| Quick Check | answer state accurate | options do not truncate | keyboard and touch work |

## 12. Required QA Before Completion

- Capture or inspect the opening viewport at desktop and mobile widths.
- Inspect at least one wide matrix or long expression.
- Open and close mobile navigation.
- Complete one interactive visual sequence.
- Complete one Quick Check item.
- Confirm no horizontal page overflow at 320 px.
- Confirm labels and mathematical objects do not overlap.
- Confirm no console error blocks core learning functions.

A page cannot pass because the desktop view is attractive. Mathematical fidelity and bilingual readability must survive every supported layout.
