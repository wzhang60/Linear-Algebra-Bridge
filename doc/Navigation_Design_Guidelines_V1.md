# Navigation Design Guidelines V1

## Purpose

This document defines the course map, chapter navigation, topic navigation, active states, and responsive behaviour for Linear Algebra Bridge.

## 1. Navigation Hierarchy

Use three levels.

### Level 1 - Chapter

Represents one of the seven official chapters.

Display:

- two-digit chapter number;
- official English chapter title;
- official Chinese chapter title;
- section count or progress only when accurate.

### Level 2 - Syllabus Section

Represents an official section listed in `Linear_Algebra_Course_Map_Index.md`.

Display:

- Chapter.Section number;
- English section title;
- optional concise Chinese title in expanded navigation.

### Level 3 - Knowledge Topic

Represents a focused learning page inside a syllabus section.

Display:

- English topic title;
- Chinese academic title;
- active or completion state when implemented.

Do not confuse a syllabus section with a knowledge topic. A section may contain several topic pages.

## 2. Course Home

Preserve the established course-map experience:

- compact product header;
- large bilingual course introduction;
- summary cards for chapter count, section count, and bilingual learning;
- chapter directory cards;
- restrained navy, brick-red, gold, white, and pale blue-grey palette;
- English display title followed by Chinese guidance.

Each chapter card should include:

- chapter number;
- English title;
- Chinese title;
- one concise description of its mathematical focus;
- official number of sections;
- a clear entry action.

Chapter cards should not imply completion status unless the data is real.

## 3. Knowledge-Page Navigation

Desktop:

- fixed or sticky top header;
- left course-map sidebar;
- independently scrollable sidebar when necessary;
- main content retains a readable maximum width;
- active chapter expanded;
- active section and topic clearly differentiated.

Mobile:

- compact header with product name and directory button;
- sidebar becomes a drawer or sheet;
- opening the directory must not lose page position;
- active chapter, section, and topic remain visible in the drawer;
- the drawer can be closed by a clear button, Escape, and focus-safe interaction.

## 4. Active States

Use more than colour alone.

- Active chapter: strong navy surface or border, chapter number, and expanded indicator.
- Active section: accent border or background plus visible section number.
- Active topic: secondary accent, bullet/marker, and stronger text weight.
- Completed topic: optional check mark only when completion is stored reliably.
- Locked or unavailable pages should not masquerade as active links.

## 5. Bilingual Labelling

- English is primary in navigation because lecture recognition is the product goal.
- Chinese follows immediately and must remain readable.
- Do not reduce Chinese to very low-contrast microtext.
- Long English section titles may wrap; do not truncate the mathematical distinction.
- Avoid repeating a full Chinese title at every level when the sidebar becomes visually crowded; preserve it at topic and expanded chapter level.

## 6. Extended Reading

Sections labelled “Extended Reading” in the official syllabus remain part of the course map but should be visually distinguished from core instructional sections.

Use a label such as:

`EXTENDED READING · 拓展阅读`

Do not count extended reading as a prerequisite unless the chapter index explicitly says so.

## 7. Progress

- Progress must reflect completed page-level actions, not scrolling alone.
- State what the percentage represents.
- A Quick Check anchor may be offered in the header, but it must not obscure the primary navigation.
- Do not show fabricated progress in static prototypes.
- Preserve progress only if the product has a reliable storage mechanism.

## 8. Navigation Copy

Prefer:

- Course Map · 课程地图
- Course Home · 课程首页
- Chapter · 章
- Section · 节
- Knowledge Topic · 知识点
- Extended Reading · 拓展阅读
- Start Preview · 开始预习
- Quick Check · 理解自测

Avoid language that promises full course mastery.

## 9. Accessibility

- Use semantic navigation regions and descriptive accessible names.
- Expanded chapters expose their expanded/collapsed state.
- Keyboard focus remains visible.
- All navigation targets meet practical touch-size requirements.
- Reading order follows the visible hierarchy.
- The mobile drawer traps focus only while open and restores focus when closed.

## 10. Generation Rules

- Build navigation from the approved Course Map and Chapter Index files.
- Do not hand-invent sections in the interface.
- Update section and topic counts when indexes change.
- Preserve official numbering and bilingual titles.
- Keep URLs stable and human-readable where possible.
- A topic belongs to exactly one primary section, even if related links point elsewhere.
- Test long titles, expanded chapters, desktop sidebar scrolling, and the mobile drawer before approval.
