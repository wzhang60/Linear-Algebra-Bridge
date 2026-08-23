Project Context

AI Calculus Learning Assistant

一、项目目标



开发一个面向大学一年级新生的 AI 学习辅助网站。



目标用户：



首次进入全英文专业课程环境的学生。



核心问题：



学生不是完全不会数学，而是：



不熟悉专业英文术语；

不知道英文单词发音；

上课时听到英文概念无法快速对应；

缺少有效课前预习工具。



产品定位：



帮助学生提前熟悉专业知识和专业英语，从而在全英文课堂中更容易听懂老师讲解，跟上课程节奏。



二、第一门 Demo 课程



课程：



Calculus（微积分）



教材：



James Stewart

Calculus Seventh Edition



三、第一 Demo 知识点



Chapter 2: Derivatives



知识点：



Product Rule



中文：



乘积法则



四、已经完成第一版网页 Demo



第一版存在的问题：



1\. 页面设计



优点：



整体风格简洁；

信息结构清楚；

音频功能有效。



问题：



字体太小；

灰色字体太浅；

中文辅助不够突出；

更像英文教材网站，不够适合中国大一新生。



修改方向：



增大字体；

增强颜色对比；

英文 + 中文双层展示；

重要解释突出。

五、Product Rule 页面最终结构 V2

Section 1



Knowledge Overview



包含：



English name

Chinese name

Pronunciation

简短定义

Section 2



Why Do We Learn Product Rule?



解释：



为什么普通求导方法不能处理两个函数相乘。



强调：



学生理解“为什么需要这个规则”。



Section 3



Concept Explanation



必须包含：



Academic Explanation



专业定义。



Professional Chinese Explanation



专业中文解释。



Simple Explanation



容易理解的中文解释。



注意：



不能只做英文翻译。



Section 4



Visual Understanding



第一版动画错误：



矩形面积变化。



原因：



只能解释乘法，不能解释 Product Rule。



新版要求：



A+B结合：



A:

数学直觉



解释：



两个函数变化如何影响整体变化。



B:

课堂推导辅助



类似老师黑板推导：



为什么出现：



f'g + fg'



动画目标：



让学生理解公式来源。



Section 5



Formula Understanding



展示：



(fg)

′

=f

′

g+fg

′



解释：



两个变化贡献：



First function change



Second function change



Section 6



Vocabulary



每个词包含：



English

中文专业解释

发音

Example sentence



例如：



Derivative



不要只写：



导数



应该：



描述函数输出随输入变量变化速率的数学概念。



Section 7



Worked Example



例题：



y=x

2

sinx



步骤：



Identify functions

Apply Product Rule

Calculate derivatives

Final answer

Section 8



Classroom English



需要扩展。



不是一句。



目标：



帮助学生听懂课堂。



至少包含：



5-8个表达。



例如：



"Let's apply the product rule."



"We have two functions multiplied together."



"Differentiate the first function."



"Keep the second function unchanged."



"Add the two terms together."



每句话：



英文

中文

关键词解释

发音

Section 9



Visual Resources



增加资源入口。



考虑：



自制动画；

GeoGebra；

Desmos；

3Blue1Brown 等优质资源链接。



原则：



不重复造轮子。



Section 10



Quick Check



第一版太简单。



新版要求：



测试理解，而不是识别答案。



类型：



判断公式是否正确；

判断什么时候使用 Product Rule；

英文课堂表达理解；

概念判断。

Section 11



Before Class Summary



新增。



学生完成后知道：



我现在掌握：



✓ What Product Rule is



✓ When to use Product Rule



✓ Key vocabulary



✓ Classroom expressions



六、开发原则



第一 Demo：



不要追求复杂。



目标：



验证：



“这个页面是否真的帮助中国学生预习英文数学课程。”



七、下一步任务



生成 Product Rule V2 Demo。



重点修改：



提高可读性；

优化中文辅助；

重做 Visual Understanding；

扩展 Classroom English；

优化 Quick Check；

加入外部资源设计。

