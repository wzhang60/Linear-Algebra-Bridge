# Calculus Bridge — Visual Derivation QA Addendum V1

## Purpose

This document supplements `Visual_Interaction_Template_V3_1.md`. It does not replace the existing template or redesign the product.

Use it when creating or reviewing Section 04 — Visual Derivation for every knowledge page.

The required teaching sequence remains:

**visual change → mathematical relationship → formula**

---

## 1. Mathematical-object gate

Before styling or animating, list every visible object and the mathematical object it represents.

- A plotted point must satisfy the equation of its curve.
- A secant line must pass through both sampled points.
- A tangent line must pass through the point of tangency and use the actual derivative slope.
- A recorded derivative point must use the same input: `(x₀, f′(x₀))` comes from the tangent slope at `(x₀, f(x₀))`.
- An open circle represents an approached or excluded value; a filled point represents an actual function value.
- An asymptote, tolerance band, interval, radius, area, or error segment must be positioned from its defining formula.
- Motion must remain constrained to the mathematical object. Never animate a point independently of the curve it represents.

If an object has no mathematical role, remove it.

---

## 2. Coordinate-system gate

Use coordinate axes whenever the explanation depends on graph position, input/output pairing, slope, symmetry, one-sided approach, a target value, or an asymptote.

Required checks:

- Label the horizontal variable and the vertical quantity (`x`, `f(x)`, `t`, `Q(t)`, or the topic-specific equivalent).
- Mark special coordinates such as `a`, `x₀`, `L`, `a±δ`, and `L±ε` when they drive the argument.
- Use guides or projections only when they encode a real shared coordinate or difference.
- Use equal horizontal and vertical unit scales for reflection, perpendicularity, circles, angles, or any other Euclidean claim. In particular, reflection across `y=x` must be rendered with equal units and a 45° reflection line.
- Do not add axes to a purely structural diagram when coordinates do not contribute to the explanation.

Canvas warning: equal coordinates in the internal drawing space are not enough. The displayed canvas aspect ratio must preserve those units.

---

## 3. Formula and animation gate

Each of the four steps must create a distinct, mathematically justified state.

For every step, verify:

1. What changed visually?
2. Which mathematical quantity changed?
3. Which relationship does the new state reveal?
4. Does the displayed formula describe exactly that state?

Never display screen pixels as mathematical distances or rates. Pixel coordinates are implementation details; show symbolic or properly scaled mathematical quantities such as `h`, `Δx`, `m`, `ε`, and `δ`.

Important formulas must use proper fractions, superscripts, subscripts, limits, and one-sided notation. Avoid ambiguous slash notation when a fraction is the mathematical object being taught.

---

## 4. Label readability gate

Readability is judged after final rendering, not from the font size used inside an SVG viewBox or canvas coordinate system.

- Supporting labels should render at approximately 9 CSS pixels or larger on the narrowest approved viewport; important mathematical labels should be larger.
- Use high-contrast text against the final background. Do not rely on low opacity for required information.
- Add a dark backing plate or text halo when a label crosses a curve, grid, band, or line.
- Keep labels away from points and lines unless a leader, projection, or attachment makes the relationship explicit.
- Separate labels for coincident or nearby objects. For example, place open-circle and filled-point explanations on different sides of the target.
- Never allow text-to-text, text-to-line, label-to-point, or formula-to-container overlap.
- Labels must remain readable at every step, not only the final step.

---

## 5. Responsive-layout gate

The complete visual, active derivation line, and final relationship must remain visible without horizontal scrolling or clipping.

Check at minimum:

- desktop: 1440 px wide;
- compact desktop/tablet: 768 px wide;
- mobile: 390 px wide.

On narrow screens:

- convert multi-column visual stages to one column when necessary;
- use `minmax(0, 1fr)` and `min-width: 0` for grid children containing formulas;
- restructure diagrams instead of uniformly shrinking them until labels become unreadable;
- allow formulas to stack into meaningful rows, but never break symbols into an unreadable vertical sequence;
- keep overlays outside the plotted data region when they would cover points, tangents, or curve segments.

---

## 6. Four-step review matrix

Review all four steps for every topic.

| Check | Step 1 | Step 2 | Step 3 | Step 4 |
|---|---:|---:|---:|---:|
| Mathematical objects are valid | ✓ | ✓ | ✓ | ✓ |
| Motion respects constraints | ✓ | ✓ | ✓ | ✓ |
| Coordinates and labels are sufficient | ✓ | ✓ | ✓ | ✓ |
| No overlap or clipping | ✓ | ✓ | ✓ | ✓ |
| Formula matches the visible state | ✓ | ✓ | ✓ | ✓ |
| The step adds a new relationship | ✓ | ✓ | ✓ | ✓ |

Also verify the transition between consecutive steps. A correct set of static frames can still produce a misleading animation.

---

## 7. Completion checklist

A Visual Derivation is ready only when all answers are yes:

- Can a student identify every point, line, curve, band, and region?
- Are points and lines mathematically constrained to the objects they represent?
- Are axes, variables, target values, and shared coordinates explicit where needed?
- Are geometric claims preserved by the rendered scale and aspect ratio?
- Is every label readable, high-contrast, and free from overlap?
- Does each step follow visual change → relationship → formula?
- Are important formulas complete and properly formatted?
- Do desktop, tablet, and mobile views show the full active state without horizontal scrolling?
- Does the browser console remain free of page errors during all four steps?

If any answer is no, classify the issue as mathematical, visual, layout, formula, or interaction, then fix it before content approval.
