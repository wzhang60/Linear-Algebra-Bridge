# Mathematical Visualization Guidelines V1

## Purpose

This document defines static, animated, and interactive mathematical visuals for Linear Algebra Bridge.

## 1. Core Principle

A visualization must make a mathematical relationship materially easier to understand than prose or notation alone.

For Linear Algebra Bridge, its primary job is often to connect an English phrase to a visible mathematical action. The animation should help a student understand what the instructor means by phrases such as “interchange two rows” or “eliminate the entry below the pivot.”

Use the smallest useful visual. If a short table or aligned calculation communicates the idea better, do not build an animation.

When animation is useful, prefer it over a dense static derivation, but keep it short and controllable.

## 2. Visualization Families

### A. Synchronized Representations

Use when the same object appears in different forms.

Examples:

- equations and augmented matrix;
- linear transformation and matrix multiplication;
- geometric vector and coordinate column;
- quadratic form and symmetric matrix.

Rule: highlighting an element in one representation must highlight the corresponding element in the other.

### B. Stepwise Procedures

Use for algorithms and derivations.

Examples:

- Gaussian elimination;
- inverse by row reduction;
- cofactor expansion;
- Gram-Schmidt;
- diagonalization.

Rule: one step performs one named mathematical action and states what remains invariant.

### C. Spatial Structure

Use for span, subspaces, bases, projections, kernels, and images.

Rule: label the ambient space and acknowledge the limits of a 2D or 3D representation.

### D. Transformations

Use for matrix mappings, eigenvectors, rotations, reflections, projections, and changes of basis.

Rule: identify input, output, basis, and preserved properties. Do not animate screen pixels independently of the stated matrix.

### E. Comparisons

Use for example/non-example, dependent/independent, orthogonal/orthonormal, invertible/singular, or similar/non-similar.

Rule: compare using the defining condition, not surface appearance.

## 3. Four-Step Interaction Pattern

When a stepwise visual is appropriate, use:

1. **Identify** - name the original objects and the question.
2. **Act** - apply one operation, choice, or transformation.
3. **Observe** - show what changed and what stayed invariant.
4. **Connect** - link the visual result to notation, definition, or conclusion.

This replaces the calculus-specific “separate contributions” pattern. Not every visual needs four screens, but every interaction needs the four ideas. For non-procedural topics, the four ideas may be expressed within one synchronized view or across peer views with no implied order.

Do not add Previous, Next, or Replay controls when the available views are classifications, equivalent representations, hierarchy levels, or alternative outcomes. Use directly selectable labelled views instead so the interface does not imply a false mathematical sequence.

### Default Demonstration Limits

- Use one basic example.
- Prefer a 2 × 2 or 2 × 3 matrix for introductory procedures.
- Use two to four visible states.
- Perform one operation per state.
- Display the English action phrase, Chinese meaning, symbolic operation, and changed entries together.
- Provide replay, previous, and next controls when the sequence carries meaning.
- Stop when the target phrase is understood; do not continue merely to finish a longer exercise.

## 4. Object and Coordinate Integrity

- A plotted vector must begin and end at the coordinates stated.
- A transformed vector must equal the displayed matrix-vector product.
- A transformed grid must be derived from the same linear map.
- A subspace must pass through the origin.
- A displayed basis must actually be independent and span the stated space.
- An eigenvector must satisfy `Av=λv` and must be nonzero.
- A projection must land in the stated target subspace.
- Orthogonality must match the stated inner product.
- Determinant area/volume scaling must match `|det(A)|`; orientation must match its sign.
- Row operations must be legal and correctly applied to the entire row.

## 5. Dimensions and Domains

- Display matrix dimensions when teaching compatibility.
- Label domain and codomain for a mapping.
- Distinguish vectors from coordinate representations.
- Do not draw a map from `R^n` as though every case were literally two-dimensional.
- When using a 2D example to support a general definition, label it as an example.
- State the basis whenever coordinates depend on a nonstandard basis.

## 6. Matrix and Equation Visuals

- Align entries by row and column.
- Preserve brackets and augmentation bars.
- Highlight a complete row/column relationship, not scattered unrelated entries.
- In matrix multiplication, show which row and column form each output entry.
- In elimination, retain the operation label such as `R_2 ← R_2 - 3R_1`.
- Do not animate matrix entries jumping without explaining the operation.
- Avoid using monospace code blocks as the primary mathematical renderer.

## 7. Colour, Motion, and State

- Colour identifies stable mathematical roles.
- Motion shows an operation or a change of representation.
- State labels describe “original,” “operation,” “result,” or topic-specific equivalents.
- Never use animation merely to attract attention.
- Provide pause/replay where motion carries information.
- Respect reduced-motion preferences.
- Essential meaning must remain available in a static state.

## 8. Label Readability

- Keep labels outside dense mathematical regions where possible.
- Use a light backing plate or halo when text crosses a grid or vector.
- Avoid overlapping arrowheads, brackets, matrix entries, and labels.
- Use consistent variable names in the figure and prose.
- Legends must remain visible while their colour meaning is needed.
- Mobile layouts may replace a legend with direct labels when space is limited.

## 9. Topic Visual Language

| Topic | Preferred visual language | Main risk |
|---|---|---|
| Linear systems | equations ↔ augmented matrix | losing coefficient correspondence |
| Row reduction | row states and named operations | implying operations change the solution set |
| Matrix multiplication | row-column pairing or transformation | treating multiplication as entrywise |
| Inverse | reversible mapping and identity | implying reciprocal entries |
| Determinant | signed scaling | confusing determinant with area only |
| Linear combination | scaled vectors and addition | hiding coefficients |
| Span | generated line/plane/space | treating one sketch as a full proof |
| Independence | nontrivial relation or unique coordinates | judging by appearance alone |
| Basis | spanning + independence + coordinates | conflating vector and coordinate column |
| Rank | pivot directions and image dimension | equating rank with matrix size |
| Kernel/image | domain-to-codomain map | confusing codomain with image |
| Change of basis | same vector, different coordinate columns | moving the vector instead of coordinates |
| Eigenvectors | direction-preserving transformation | including zero vector or arbitrary arrows |
| Orthogonal projection | decomposition into parallel/perpendicular parts | wrong inner-product geometry |
| Quadratic form | level sets and principal axes | drawing unrelated ellipses/hyperbolas |

## 10. Interaction Accessibility

- Controls require descriptive labels.
- All step controls work by keyboard.
- Do not depend on hover for essential meaning.
- Drag interactions require an equivalent button or numeric control.
- The active step is announced and visibly indicated.
- Diagrams need concise alternative text describing the mathematical relationship.
- Colour contrast and non-colour cues must pass review.

## 11. Resource Selection

External resources may supplement a page when they provide a specific advantage.

- Link to the exact visual, lesson, or activity where possible.
- Verify that the resource matches the page's terminology and mathematical convention.
- Label generic tools as tools.
- Do not imply that a generic calculator homepage contains a prepared topic demonstration.
- Prefer stable, reputable educational sources.

## 12. Visualization Completion Checklist

- The visual answers a named mathematical question.
- Every object is defined.
- Every coordinate and calculation is correct.
- Every operation shown is legal.
- Colour and motion carry stable meaning.
- Notation matches the surrounding page.
- The visual remains understandable without animation.
- Desktop and mobile versions preserve the same mathematics.
- Accessibility controls and alternative descriptions are present.
- The animation uses the smallest example that makes the English phrase clear.
- Each state visibly pairs English wording, Chinese support, notation, and mathematical action.
