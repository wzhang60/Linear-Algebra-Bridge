\# Product Rule Demo V3 Specification



\## Reference



This version is based on:



\- Project\_Context.md

\- Product Rule Demo V2



Do not redesign the product from scratch.



The goal of V3 is to improve the teaching quality, mathematical clarity, and user experience based on V2 feedback.



\---



\# 1. Main Goal of V3



V3 should make Product Rule become a true pre-class learning assistant for Chinese first-year students taking English-taught calculus courses.



重点：



不是做一个漂亮的数学页面。



而是帮助学生：



\- 看懂英文数学概念；

\- 理解专业中文含义；

\- 听懂课堂表达；

\- 理解公式为什么成立。



\---



\# 2. Keep From V2



Keep these successful elements:



\## Page structure



Keep:



\- Knowledge introduction

\- Why do we need it

\- Formula explanation

\- Step-by-step example

\- Classroom English

\- Quick Check

\- AI assistant



\## Interaction



Keep:



\- Step-by-step navigation

\- Audio interaction

\- Interactive learning elements



\---



\# 3. Improvements Required



\---



\# 3.1 Typography and Readability



Current problem:



中文字体过小，颜色过浅。



Requirements:



\- Increase Chinese text size.

\- Increase contrast.

\- Avoid using light gray for important explanations.

\- Make Chinese explanation visually important.



Design principle:



中文不是辅助说明。



中文是帮助学生理解英文专业课程的重要入口。



\---



\# 3.2 Remove unnecessary information



Remove:



\- Lesson number

\- Learning duration (15–20 min)



Reason:



The platform uses a knowledge-point structure.



Students select topics according to course needs.



The system should not assume teaching schedule.



\---



\# 3.3 Audio Design



Unify all audio interactions.



Use:



🔊



Do not create different labels:



\- Listen vocabulary

\- Listen pronunciation

\- Listen sentence



The user should immediately understand:



"This button plays pronunciation/audio."



\---



\# 4. Content Generation Rules



\## 4.1 Chinese explanation principle



IMPORTANT:



Do not translate English sentences directly into Chinese.



Wrong approach:



English term

↓

Literal translation





Correct approach:



Academic concept identification

↓

Standard Chinese terminology

↓

Professional explanation

↓

Beginner-friendly explanation





Example:



Product Rule



Correct Chinese:



乘积法则





Professional explanation:



乘积法则用于计算两个可导函数乘积的导数。





Beginner explanation:



当两个函数同时变化时，需要考虑两个函数变化带来的影响。



\---



\# 5. Mathematical Expression Rules



Avoid ambiguous mathematical expressions.



Example:



Wrong:



f(x)=x² × g(x)=sin x





Correct:



f(x)=x²



g(x)=sin x





\---



One step should represent one mathematical action.



Wrong:



f'(x)=2x · g'(x)=cos x





Correct:



f'(x)=2x



g'(x)=cos x





\---



\# 6. Product Rule Header Section



The first screen should include:



\## English Name



Product Rule





\## Chinese Name



乘积法则





\## Professional Definition



乘积法则用于计算两个可导函数乘积的导数。





\## Audio



Use unified speaker button.





\## Formula visualization



Display:



(fg)' = f'g + fg'





Color rule:



Blue:



f and f'





Orange:



g and g'



\---



\# 7. Visual Understanding Improvement



Current V2 problem:



The animation explains multiplication, but not Product Rule.



V3 requirement:



The visual should explain:



Why:



(fg)' = f'g + fg'





Preferred approach:



Show two changing functions.



Explain that total change comes from:



1\. Change caused by f

2\. Change caused by g





If possible:



Use interactive visualization.



Example:



Changing rectangle model:



width = f(x)



height = g(x)





Show:



\- original state

\- small changes

\- two contribution areas

\- connection to formula





\---



\# 8. Step-by-Step Example Improvement



Keep four-step structure.



Example:



y = x² sin x





\## Step 1



Identify two functions.



Show separately:



f(x)=x²



g(x)=sin x





\---



\## Step 2



Apply Product Rule.



Show:



(fg)'=f'g+fg'





Explain why there are two terms.





\---



\## Step 3



Calculate derivatives.



Show separately:



f'(x)=2x



g'(x)=cos x





\---



\## Step 4



Simplify answer.



Show:



y'=2x sin x+x² cos x





\---



\# 9. Classroom English Improvement



Expand this section.



Purpose:



Help students understand real classroom language.



Each item should include:



\- English sentence

\- Chinese meaning

\- Key vocabulary

\- Audio





Include examples:



"Let's apply the product rule."



"We have two functions multiplied together."



"Differentiate the first function."



"Keep the second function unchanged."



"Add the two terms together."



\---



\# 10. Vocabulary Card Improvement



Each term should include:



\- English term

\- Standard Chinese academic term

\- Pronunciation

\- Professional explanation

\- Simple explanation





Example:



Derivative



中文：



导数





Professional:



描述函数在某一点处瞬时变化率的数学概念。





Simple:



表示变化快慢。



\---



\# 11. Quick Check Improvement



Current V2 questions are too easy.



V3 should test understanding.



Examples:



\- When should we use Product Rule?

\- Is this formula correct?

\- Understand classroom expressions.



Questions should require reasoning, not recognition.



\---



\# 12. AI Assistant Improvement



Keep AI assistant.



Add suggested questions:



\- Explain Product Rule in simple Chinese.

\- Why do we need Product Rule?

\- Give another example.

\- Explain this formula step by step.



\---



\# Final Requirement



V3 should not only look better than V2.



It should improve:



1\. Mathematical accuracy.

2\. Chinese explanation quality.

3\. Student understanding.

4\. Connection with English classroom learning.



