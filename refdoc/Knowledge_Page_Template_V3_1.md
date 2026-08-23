# Knowledge Page Template V3.1


## Purpose

This document defines the standard learning page template for AI Calculus Learning Assistant.

All calculus knowledge pages must follow this template.

The goal is not to create individual textbook pages.

The goal is to create a consistent pre-class learning experience for Chinese first-year university students studying English-taught calculus courses.


---

# 1. Core Principle


## One product, one learning experience


All knowledge pages must maintain:

- Same visual identity
- Same learning structure
- Same interaction pattern
- Same bilingual learning philosophy


Do not redesign each knowledge point independently.


Important:

Reuse the design system, not the exact mathematical elements.

A knowledge point should keep the same product experience while using visual elements that match its own mathematical meaning.



---

# 2. Reference Design


The reference implementation is:

Product Rule Demo V3.1


All future pages should inherit the design system principles from Product Rule Demo V3.1:

- Layout structure
- Section hierarchy
- Color philosophy
- Typography
- Interaction style
- Audio design
- AI assistant placement


Do not copy topic-specific visual elements directly.
Adapt visual elements according to the mathematical concept.

# Hero Card Design Philosophy


## Purpose

The Hero Card is not only a formula container.

It is the first visual explanation of a mathematical concept.

The purpose is to help students immediately understand:

- What is changing?
- What are the key mathematical objects?
- Why does this formula look like this?


The Hero Card should communicate mathematical meaning, not only display equations.



---

# Core Principles


## 1. Formula is the visual center


The formula should be the most important element.

The design should guide students' attention:

Concept

↓

Formula

↓

Meaning


Do not create a generic formula box.

## Formula Integrity Rules

The Hero Card formula must be displayed as one complete mathematical object.

Do not split a single formula into multiple lines unless the mathematical structure naturally requires it.

Avoid:

- Artificial line breaks
- Separating left side and right side of an equation
- Breaking fractions or operators into unrelated blocks


If a formula is too long:

Priority order:

1. Reduce font size slightly.
2. Adjust spacing.
3. Use a wider layout.

Do not break the formula unnecessarily.

## Decorative Element Rules

Visual elements must support mathematical understanding.

Do not add:

- Decorative lines
- Unnecessary separators
- Extra shapes without mathematical meaning


The Hero Card should remain clean and minimal.

Every visual element must answer:

"What mathematical meaning does this represent?"

## Mathematical Typography Rules

All parts of one mathematical expression must maintain consistent visual hierarchy.

Do not:

- Shrink individual symbols independently.
- Make operators smaller than variables.
- Make fractions visually weaker than surrounding expressions.


A formula should look like one mathematical object.

---

## 2. Visual elements must explain mathematics


Every visual element must have mathematical meaning.


Good example:

Product Rule V3.1


f and g indicators represent:

- two changing functions;
- two sources of contribution.


Bad example:

Adding circles or icons only for decoration.



---

## 3. Colors must carry mathematical meaning


Colors should explain relationships.


Example:


Product Rule:

Blue:

first function contribution


Red:

second function contribution


The color system should help students follow the formula.



Do not use colors only for decoration.



---

## 4. Copy design logic, not visual elements


New knowledge pages should inherit:


- visual hierarchy;
- spacing;
- typography;
- color philosophy;
- mathematical storytelling;


Do not blindly copy:


- f/g circles;
- specific labels;
- specific symbols.


Each topic should use visual elements that match its own mathematical meaning.



Examples:


Product Rule:

f and g are meaningful.


Derivative:

Use:

- change;
- tangent;
- limit;
- approaching behavior.


Chain Rule:

Use:

- inner function;
- outer function;
- layered change.



---

## 5. Maintain V3.1 visual quality


Every Hero Card should feel like part of the same product.


Requirements:

- clean academic layout;
- balanced spacing;
- clear hierarchy;
- elegant presentation;
- strong readability.


The result should feel like:

"same product, different mathematical concept."

Not:

"different pages created independently."



---

# Implementation Requirement


Before creating a new Hero Card:


Analyze Product Rule V3.1:


1. Why is the formula the visual focus?
2. Why are colors meaningful?
3. Why are visual elements present?
4. How does the layout guide understanding?


Then adapt these principles to the new mathematical concept.


Do not simply copy the components.
---

# 3. Visual Design System


## 3.1 Branding


Use Shenzhen Institute of Future Technology visual identity.


Style:

- Academic
- International
- Engineering-oriented
- Clean
- Modern


Primary color:

Beiyang Blue


Usage:

- Main titles
- Navigation
- Important buttons
- Formula highlights


Secondary color:

Brick Red


Usage:

- Chinese key terms
- Important highlights
- Tags
- Accent information


Background:

- White
- Light blue-gray



---

# 4. Typography Rules


## Important principle


Learning clarity is more important than minimalist design.


Do not use excessive light gray text.



## Text hierarchy


### Level 1

Core concept:

Examples:

- Product Rule
- Chain Rule
- Derivative


Use:

Large font

Dark color



### Level 2

Chinese academic terminology:


Examples:

- 乘积法则
- 链式法则
- 导数


Must be clearly visible.

Chinese is not secondary information.



### Level 3

Explanation text:

Use readable dark gray.

Avoid:

- Very small text
- Low contrast text

## Layout and Spacing Rules


Learning pages must maintain clear visual hierarchy.


Requirements:

- Titles must have sufficient line height.
- Large headings must not overlap between lines.
- English titles and subtitles must remain visually separated.
- Text blocks must have enough spacing for readability.


Avoid:

- Overlapping characters.
- Crowded headings.
- Excessive compression to fit content.

---

# 5. Audio Design


All audio functions use one unified interaction.


Use:

🔊 speaker icon


Do not use different labels:

- Listen vocabulary
- Listen pronunciation
- Listen sentence


Audio can appear in:

- Term cards
- Definitions
- Classroom English
- Example sentences



---

# 6. Standard Page Structure


Every knowledge page must contain the following sections.



---

# Section 1

# Knowledge Overview


Purpose:

Answer:

"What am I learning?"


Include:


## English name


## Chinese academic term


## Pronunciation


Audio button.


## Professional definition


English academic explanation.


## Professional Chinese explanation


Use standard mathematical terminology.

Do not translate English literally.



---

# Hero Formula Card Rules


## Purpose


The Hero Formula Card is part of the Knowledge Overview section.

It displays the key mathematical idea of the topic.


The card must support different mathematical expression complexities.



## Formula Complexity Handling


### Level 1: Simple Formula


Example:

\[
(fg)'=f'g+fg'
\]


Display:

- Large font
- Center aligned
- Single line



### Level 2: Medium Formula


Example:

\[
(f/g)'=\frac{f'g-fg'}{g^2}
\]


Display:

- Maintain mathematical structure
- Reduce size slightly if needed
- Keep fractions readable



### Level 3: Complex Formula


Examples:

- Derivative definition with limits
- Chain rule with multiple functions


Display:

- Use multi-line layout only when the mathematical structure requires it. Do not use multi-line layout only to fit the card.
- Center the complete expression
- Preserve mathematical hierarchy
- Do not split one formula into unrelated visual blocks



---

## Formula Layout Rules


The formula should be treated as one mathematical object.


Do not manually position individual symbols.


Requirements:

- Formula must never overflow the card.
- Formula components should keep consistent visual weight.
- Long formulas should scale as a whole.
- Fractions, limits, and multi-line expressions must remain readable.


Avoid:

- Shrinking only one part of a formula.
- Breaking mathematical relationships.
- Creating uneven visual hierarchy.

# Knowledge-Specific Hero Design Rules

The Hero Card should keep the same visual language, but the internal visual elements must match the mathematical concept.

Do not copy Product Rule visual elements to all topics.

Product Rule:

Use:
- f and g indicators
- two contribution concept


Derivative:

Use:
- change indicator
- limit concept
- tangent/change relationship


Quotient Rule:

Use:
- numerator and denominator relationship


Chain Rule:

Use:
- inner and outer function relationship


The Hero Card should explain the concept, not only display the formula.


---

## Visual Marker Rules


Visual markers must support understanding.

They must not:

- Cover titles.
- Cover formulas.
- Reduce readability.


Marker placement should adapt to the content.


Examples:


Product Rule:

Appropriate:

- f
- g


Derivative:

Appropriate:

- Δx
- limit indicators
- tangent-related concepts


Chain Rule:

Appropriate:

- inner function
- outer function


Do not copy Product Rule markers to unrelated topics.



---

# Section 2

# Why Do We Need It?


Purpose:

Explain:

"Why does this concept exist?"


Students should understand:

- What problem does it solve?
- Why previous methods are insufficient?


Do not start directly with formulas.

## Card Layout Consistency Rules


Cards in the same group should maintain visual consistency.


Requirements:

- Cards in the same row should have equal height.
- Text wrapping should not create uneven card sizes.
- Adjust width, spacing, or font size before increasing card height.


Avoid:

- One card becoming significantly taller because of longer text.
- Breaking visual balance in grouped cards.

---

# Section 3

# Understand in Three Ways


Every concept should be explained from three perspectives.


## Academic Explanation

Textbook-level explanation.


## Professional Chinese Explanation

Use accurate mathematical Chinese.


## Intuitive Explanation

Explain the idea in simple language.

Help students build intuition.



---

# Section 4

# Visual Understanding


All visual explanations must follow:

Visual_Interaction_Template_V3_1.md


Visuals must inherit the Product Rule V3.1 interaction philosophy.


Do not create independent visualization styles for different knowledge points.


The visual must explain the mathematical idea.

Do not create decorative animations.



---

# Section 5

# Formula Understanding


Purpose:

Help students understand formulas.


Do not only display formulas.


Explain:

- Meaning of each component
- Why each term exists
- How the formula is constructed



---

# General Formula Display Rules


Formula display inside learning sections must support different mathematical expression lengths.


Requirements:

- Short formulas can use centered large display.
- Long formulas should automatically adjust size.
- Multi-line formulas should use proper mathematical alignment.
- Complex expressions must remain readable.
- Formula must never overflow the visual area.



---

# Section 6

# Vocabulary

Each important term should include:

English term

↓

Chinese academic term

↓

Pronunciation

↓

Professional explanation

↓

Simple explanation

↓

Classroom usage



---

# Section 7

# Watch the Concept in Action


Purpose:

Show how the rule is used step by step.


Requirements:

Each step represents one mathematical action.


Avoid ambiguous mathematical expressions.



---

# Section 8

# Classroom English


Purpose:

Help students understand English lectures.


Each item contains:

- English sentence
- Chinese meaning
- Key vocabulary
- Audio



---

# Section 9

# Quick Check


Purpose:

Test understanding, not memorization.


Questions should include:

- Concept understanding
- Formula reasoning
- Classroom English understanding


Avoid simple recognition questions.



---

# Section 10

# Ask AI


AI assistant is part of the learning experience.


Suggested questions:

- Explain this concept in simple Chinese.
- Why does this formula work?
- Give another example.
- I still do not understand this step.



---

# Mathematical Expression Rules


AI-generated mathematical explanations must avoid ambiguity.


Do not use:

f(x)=x² × g(x)=sin x


Use:

f(x)=x²

g(x)=sin x


Each step should represent one mathematical action.

## Fraction and Division Formatting


Important mathematical expressions should avoid ambiguous slash notation.


Avoid:

(x^2+y^2)/x


Prefer:

\[
\frac{x^2+y^2}{x}
\]


Requirements:

- Use proper fraction formatting when numerator and denominator matter.
- Preserve mathematical hierarchy.
- Do not use slash notation for important formulas.
- Make numerator and denominator visually clear.


Especially avoid slash notation in:

- Hero Cards
- Formula explanations
- Worked examples
- Step-by-step derivations

## Mathematical Derivation Explanation Rules


When explaining formulas:


Always distinguish:

1. Mathematical derivation source
2. Geometric or intuitive interpretation


Do not present an interpretation as the original derivation.


Example:


Correct:

A = πr²

Differentiate:

dA/dt = 2πr · dr/dt


Then explain:

2πr is equal to the circumference of the circle.


Incorrect:

The area rate is obtained directly from circumference times radius rate.

## Mathematical Typography Quality


Mathematical notation must preserve professional typesetting quality.


Requirements:

- Fractions must have sufficient vertical spacing.
- Numerator and denominator must not overlap.
- Symbols must not touch fraction bars.
- Superscripts and subscripts must remain readable.


Avoid:

- Broken LaTeX rendering.
- Overlapping mathematical elements.
- Compressed formulas.
---

# Content Generation Rules


For every English term:


Do not translate literally.


Process:

1. Identify academic field.
2. Find standard Chinese terminology.
3. Provide professional explanation.
4. Provide beginner explanation.



---

# Expansion Rule


When creating a new knowledge page:


Do not redesign the page.


Reuse:

- Existing template
- Existing style
- Existing interaction


Only replace:

- Concept content
- Vocabulary
- Examples
- Visualization
- Classroom English



---

# Success Criteria


A new knowledge page is successful when:


Students can:

✓ Understand the concept before class

✓ Recognize English terminology

✓ Understand classroom expressions

✓ Follow an English calculus lecture more easily

✓ Explain the concept instead of only recognizing it