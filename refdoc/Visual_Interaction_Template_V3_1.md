\# Visual Interaction Template V3.1





\## Purpose



This document defines the visual interaction standard for all calculus knowledge pages.



The goal is to ensure that all visual explanations inherit the Product Rule V3.1 Visual Understanding style.



Visualizations should help students build mathematical intuition.



They should not only display formulas.



All geometric objects must participate in the mathematical relationship they represent.





\---



\# 1. Core Principle



Visual Understanding is a teaching tool.



It must answer:



"Why does this concept work?"





Do not create decorative animations.



Do not create formula-only animations.





The visual should connect:



Concept



↓



Change



↓



Mathematical relationship



↓



Formula





\---



\# 2. Reference Implementation



The reference visual implementation is:



Product Rule V3.1



"Where does the formula come from?"





All future knowledge pages should inherit:



\- Interaction style

\- Step-by-step exploration

\- Visual explanation logic

\- Connection between animation and formula





\---



\# 3. Visual Structure Template





Every visual explanation should contain:





\## Step 1: Original Concept



Show the initial state.



Students should understand:



"What is the object/system before change?"





Example:



Product Rule:



A(x)=f(x)g(x)





\---



\## Step 2: Introduce Change



Show what changes.



Examples:



\- Function changes

\- Variable changes

\- Input changes





The student should see:



"What causes the change?"





\---



\## Step 3: Separate Contributions



Show different sources of change.





Example:



Product Rule:



Change from f



\+



Change from g





\---



\## Step 4: Connect to Formula



The final visual step should explain:



Why the formula appears.





\---



\# 4. Interaction Rules





Preferred:



Step-by-step interaction.





Students should be able to:



\- Click steps;

\- Observe changes;

\- Understand the relationship.





Avoid:



Only showing final answers.





\---



\# 5. Mathematical Visualization Rules





Visualizations must explain the mathematics.



Wrong:



Formula appears → animation plays → final formula.





Correct:



Visual change → mathematical meaning → formula.





\---



\# 6. Product Rule Example





Reference:



Rectangle model.





Start:



A=f(x)g(x)





Change:



Δf



Δg





Separate:



gΔf



fΔg





Final:



(fg)'=f'g+fg'





\---



\# 7. Future Knowledge Point Examples





Derivative:



Show:



Secant line



↓



Tangent line



↓



Instantaneous change





Chain Rule:



Show:



Input



↓



Inner function change



↓



Outer function change



↓



Final change





Quotient Rule:



Show:



Numerator change



\+



Denominator change



↓



Final ratio change





\---



\# 8. Consistency Requirement





Different knowledge points may have different mathematical models.



However, they must share:



\- Same visual philosophy;

\- Same interaction style;

\- Same learning purpose.





Do not redesign each visualization independently.



\# Mathematical Integrity Rules





\## Purpose



Visual explanations must preserve mathematical relationships.



A visualization is not only a picture.



Every visual element must represent a mathematical object or relationship.





\---



\## Geometry-Based Visualizations





When using graphs, curves, points, lines, or geometric objects:





Requirements:



\- Points must lie on the mathematical objects they represent.

\- Lines must connect meaningful points.

\- Curves must participate in the explanation.

\- Motion must follow mathematical constraints.





Avoid:



\- Decorative curves.

\- Floating points unrelated to graphs.

\- Visual elements that do not affect the mathematical explanation.







\---



\## Derivative Example





Correct:



\- A and B are points on y=f(x).

\- The secant line connects A and B.

\- B moves along the curve toward A.

\- The secant approaches the tangent.





Incorrect:



\- A and B float near the curve.

\- The curve is only background decoration.

\- The line changes without relation to the function.







\---



\## General Principle





A student should be able to answer:



"Why is this object here?"



If the answer is only:



"It makes the animation look better."



The visual should be redesigned.



\# Mathematical Visualization Readability Rules





\## Purpose



Mathematical visualizations must be mathematically correct and visually readable.



Correct relationships are not enough.



Important mathematical elements must be clearly visible.





\---



\## Label Visibility



Important mathematical labels must:



\- Have sufficient size.

\- Have enough contrast.

\- Not overlap with curves or lines.

\- Not disappear into the background.





Examples:



\- Function labels

\- Point labels

\- Slope labels

\- Important variables



\## Formula-First Visualization Layout Rules





When a visual step contains mathematical derivation:





The formula area has priority over explanation areas.





Requirements:





\- Formula containers must adapt to expression length.

\- Long mathematical expressions should not be clipped.

\- Important formulas should not wrap into unreadable lines.

\- Layout should provide more space for formulas than descriptions.





Recommended layout:



Formula area:

70%



Explanation area:

30%





Avoid:



\- Fixed-width formula boxes.

\- Cutting mathematical expressions.

\- Breaking equations into unrelated lines.

\- Treating formulas like normal text.

\---



\## Step-Based Formula Progression Rules





For multi-step derivations:





Each step should display only the current mathematical transformation.





Requirements:



\- Previous and future steps should not compete with the active formula.

\- The current formula must remain fully visible.

\- Formula size should adapt between steps.





The system should optimize for mathematical readability, not equal card dimensions.

\## Geometry Visualization





When showing curves and points:





Requirements:



\- Points should be clearly visible.

\- Labels should stay close to their objects.

\- Lines should have distinct visual meanings.





Example:



Derivative visualization:



\- Function curve: one clear color.

\- Secant line: distinguishable.

\- Tangent line: distinguishable.

\- A/B points: clearly marked.



\# Mathematical Visualization Readability Rules





\## Labels and Text





Important labels must remain readable.





Requirements:



\- Labels must not overlap with objects.

\- Formula text must have sufficient size.

\- Important variables must have clear contrast.

\- Graph annotations should not compete with the main visual.





Avoid:



\- Tiny labels;

\- Overlapping annotations;

\- Multiple labels in the same area.





\---



\## Mathematical Objects Must Be Clear





Every visual element must have a clear role.





Students should understand:



"What mathematical meaning does this object represent?"

\---



\## Avoid Information Crowding





Do not place too many elements inside one small visualization area.



Prioritize:



1\. Mathematical relationship.

2\. Main objects.

3\. Key labels.



Remove secondary decoration when necessary.



\## Step Visibility Rules





For step-based visual explanations:





Only the active step should be fully visible.





Requirements:



\- Current step: full visibility.

\- Future steps: hidden or strongly minimized.

\- Previous steps: optional summary state.





Avoid:



\- Showing all step descriptions simultaneously.

\- Low-opacity text that still competes with the current step.

\- Visual clutter during animation.



\## Geometry Label Placement Rules





When using geometric visualizations:





Requirements:



\- Labels must not overlap mathematical objects.

\- Labels must not cover important points.

\- Radius, arrows, vectors, and curves must remain distinguishable.

\- Text placement should adapt to the geometry.





Avoid:



\- Labels placed directly on lines.

\- Text covering points.

\- Multiple meanings competing in the same area.





Priority:



1\. Mathematical relationship

2\. Object visibility

3\. Labels

