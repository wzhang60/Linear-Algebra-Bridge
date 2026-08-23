\# Hero Card Responsive QA Addendum V1



\## Purpose



This document records the cross-chapter Hero Card problems discovered while refining Chapters 1–3.



It supplements, but does not replace:



\- Knowledge Page Template V3.1

\- Hero Card Design Review V1

\- Knowledge Page Reviewer V1



The goal is to prevent formula clipping, label overlap, unreadable supporting text, and inconsistent spacing when generating future chapters.



\---



\# 1. Preserve the Existing Design Philosophy



Every Hero Card must continue to follow:



\- Formula as the visual center

\- Concept-specific mathematical storytelling

\- Meaningful mathematical objects

\- Meaningful color relationships

\- Balanced spacing and sufficient whitespace

\- Same product, different mathematical content



Do not solve responsive problems by removing the concept explanation or turning the card into a generic formula box.



\---



\# 2. Formula Integrity



The complete formula must remain visible at every supported width.



Required checks:



\- No missing first or final symbol

\- No cropped fractions

\- No clipped limits, superscripts, or subscripts

\- No formula extending beneath `overflow: hidden`

\- No artificial line breaks that damage mathematical structure



For a formula that does not fit, use this priority:



1\. Increase usable horizontal space.

2\. Reduce unnecessary internal padding.

3\. Slightly reduce the entire formula as one mathematical object.

4\. Use a mathematically natural multi-line structure only when necessary.



Never shrink individual symbols independently.



\---



\# 3. Responsive Validation Widths



Every Hero Card must be checked at approximately:



\- 1280px desktop

\- 628px narrow/tablet layout

\- 390px mobile layout



Passing at desktop width is not sufficient.



Long formulas often fail only when the Hero section becomes a single-column mobile layout.



\---



\# 4. Concept-Visual Height



The concept visualization must receive enough layout height for all of its children.



Required:



\- Every label remains inside the concept-visual container.

\- Internal objects must not extend into the formula legend.

\- The layout must reserve the visual’s intrinsic height.

\- Increasing label size must not create new overflow.



Do not place a visually tall diagram inside a fixed-height container that is too short.



\---



\# 5. Supporting-Label Readability



Supporting labels must be readable, not merely technically present.



Requirements:



\- Avoid rendered text smaller than approximately 8px.

\- Important concept labels should preferably render at 9px or larger.

\- Account for CSS transforms: a 9px label scaled to 0.82 is visually much smaller.

\- Maintain sufficient contrast.

\- Avoid labels touching borders, arrows, lines, or mathematical objects.



If a concept visual must be scaled down, adjust its layout or source font size so the rendered label remains readable.



\---



\# 6. Whitespace and Hierarchy



The card should clearly read in this order:



Concept label  

↓  

Concept-defining formula  

↓  

Mathematical relationship visual  

↓  

Formula legend



Required:



\- Formula remains the strongest visual element.

\- Concept visual does not compete with the formula.

\- Formula and concept visual must not touch.

\- Concept visual and formula legend must have a clearly visible gap.

\- Top and bottom whitespace should feel balanced.

\- Do not compress the entire card merely to preserve a fixed height.



Use the refined Chapter 1.1 and Chapter 1.4 Hero Cards as spacing and proportion references.



\---



\# 7. Formula Legend



The bottom legend must support the formula without becoming crowded.



Check:



\- Both legend items remain readable.

\- Wrapped legend text does not collide with the concept visual.

\- Dots and labels remain aligned.

\- The legend remains inside the card.

\- The legend is not used to compensate for an unclear concept visualization.



\---



\# 8. Mathematical Meaning



Every concept-visual object must represent a mathematical object or relationship.



Check:



\- Arrows describe a real mapping, transformation, or limiting process.

\- Colors correspond to formula components.

\- Points, curves, lines, and containers have defined mathematical meanings.

\- No decorative graph or unexplained symbol is added only to fill space.



Responsive simplification must not remove the mathematical relationship.



\---



\# 9. Selective Adjustment Rule



Do not modify every Hero Card simply for uniformity.



For each card:



1\. Inspect it.

2\. Classify any problem:

&#x20;  - Formula issue

&#x20;  - Visual issue

&#x20;  - Layout issue

&#x20;  - Readability issue

&#x20;  - Mathematical issue

3\. Adjust only if a real problem exists.

4\. Keep approved cards unchanged when they already pass.



Consistency means shared quality and hierarchy, not identical internal geometry.



\---



\# 10. Required QA Before Completion



For every new chapter:



\- Open every Hero Card in local preview.

\- Check desktop, narrow, and mobile widths.

\- Confirm the entire formula is visible.

\- Confirm concept-visual descendants remain inside their container.

\- Confirm labels do not overlap.

\- Confirm supporting text is readable.

\- Confirm the formula remains the visual center.

\- Confirm no browser console errors.

\- Perform at least one improvement iteration after initial generation.



Do not deploy or publish during this QA stage.

