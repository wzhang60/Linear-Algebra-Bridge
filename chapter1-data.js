let checkSequence = 0;
const q = (type, question, options, answer, feedback) => {
  const shift = checkSequence++ % options.length;
  const rotated = options.slice(shift).concat(options.slice(0, shift));
  return { type, question, options: rotated, answer: (answer - shift + options.length) % options.length, feedback };
};

export const sections = [
  { id: '1.1', title: 'Sets and Mappings', zh: '集合与映射' },
  { id: '1.2', title: 'Solving Systems of Linear Equations and Gaussian (Matrix) Elimination', zh: '线性方程组的求解和高斯（矩阵）消元法' },
  { id: '1.3', title: 'Extended Reading: Applications of Systems of Linear Equations', zh: '拓展阅读：线性方程组的应用', extended: true }
];

export const topics = [
  {
    slug: 'set-operations-cartesian-products', section: '1.1', family: 'Concept',
    title: 'Set Operations and Cartesian Products', zh: '集合运算与笛卡尔积',
    ipa: '/set ˌɑːpəˈreɪʃənz ænd kɑːrˈtiːziən ˈprɑːdəkts/',
    description: 'Set operations compare or combine sets, while a Cartesian product builds ordered pairs from two sets.',
    chinese: '集合运算用于比较或组合集合；笛卡尔积把两个集合中的元素按顺序组成有序对。',
    question: 'How do we describe elements that belong together?', questionZh: '怎样描述哪些元素共同属于一个集合？',
    academic: 'The union contains elements in either set; the intersection contains elements common to both sets.',
    professional: '并集收集至少属于一个集合的元素；交集只保留同时属于两个集合的元素；笛卡尔积中的元素是有序对。',
    intuition: '先听清 union 是“合起来”，intersection 是“重叠部分”，ordered pair 强调先后顺序。',
    hero: '<div class="set-hero"><span>A ∪ B</span><span>A ∩ B</span><strong>A × B = {(a, b)}</strong></div>',
    notation: [
      ['A ∪ B', 'A union B', 'A 与 B 的并集'], ['A ∩ B', 'A intersection B', 'A 与 B 的交集'],
      ['A × B', 'The Cartesian product of A and B', 'A 与 B 的笛卡尔积']
    ],
    exampleTitle: 'Build one Cartesian product',
    example: '<p>Let A = {1, 2} and B = {x, y}.</p><div class="formula-line">A × B = {(1, x), (1, y), (2, x), (2, y)}</div><p class="example-note">The first coordinate comes from A; the second comes from B. 第一项来自 A，第二项来自 B。</p>',
    vocab: [
      ['set', '集合', '/set/', 'A collection of distinct objects. 一组确定的对象。'],
      ['union', '并集', '/ˈjuːniən/', 'Elements in A or B, including those in both.'],
      ['intersection', '交集', '/ˌɪntərˈsekʃən/', 'Elements common to both sets.'],
      ['ordered pair', '有序对', '/ˈɔːrdərd per/', 'A pair whose first and second positions matter.']
    ],
    sentences: [
      ['Take the union of A and B.', '求 A 与 B 的并集。', 'take the union = 求并集'],
      ['Find the intersection of the two sets.', '求这两个集合的交集。', 'find the intersection = 求交集'],
      ['List all ordered pairs in the Cartesian product.', '列出笛卡尔积中的所有有序对。', 'list all ordered pairs = 列出所有有序对'],
      ['The order of the coordinates matters.', '坐标的顺序很重要。', 'the order matters = 顺序很重要']
    ],
    checks: [
      q('TERM MATCH · 术语对应', '“intersection” 对应哪个中文术语？', ['交集', '并集', '补集'], 0, 'Intersection 表示两个集合共同拥有的元素，即交集。'),
      q('READ THE NOTATION · 符号读法', 'A ∪ B 应读作什么？', ['A union B', 'A intersection B', 'A times B'], 0, '符号 ∪ 表示 union（并集）。'),
      q('CONCEPT · 概念', '若 A={1,2}, B={x}，A×B 是哪一个？', ['{(1,x),(2,x)}', '{1,2,x}', '{(x,1)}'], 0, '笛卡尔积中的第一项来自 A，第二项来自 B。')
    ],
    summary: ['I can distinguish union from intersection.', 'I can read A × B aloud.', 'I can recognize an ordered pair.', 'I can follow a basic set-operation instruction.']
  },
  {
    slug: 'mappings-injections-surjections-bijections', section: '1.1', family: 'Concept',
    title: 'Mappings, Injections, Surjections, and Bijections', zh: '映射、单射、满射与双射',
    ipa: '/ˈmæpɪŋz, ɪnˈdʒekʃənz, sərˈdʒekʃənz, ænd baɪˈdʒekʃənz/',
    description: 'A mapping assigns each input exactly one output; injective, surjective, and bijective describe how inputs and outputs correspond.',
    chinese: '映射把定义域中的每个元素唯一地对应到陪域中的一个元素；单射、满射和双射描述这种对应的不同性质。',
    question: 'How does a mapping connect a domain to a codomain?', questionZh: '映射怎样把定义域连接到陪域？',
    academic: 'A mapping f:A→B is injective if distinct inputs have distinct outputs, and surjective if every element of B is an output.',
    professional: '单射要求不同输入不映到同一输出；满射要求陪域中的每个元素都被映到；同时满足二者的映射是双射。',
    intuition: '听到 one-to-one 想到单射；听到 onto 想到满射；bijection 则两项都满足。',
    hero: '<div class="mapping-hero"><div><b>DOMAIN · 定义域</b><span>a₁</span><span>a₂</span></div><strong>f : A → B</strong><div><b>CODOMAIN · 陪域</b><span>b₁</span><span>b₂</span></div></div>',
    notation: [
      ['f : A → B', 'f maps A to B', 'f 从 A 映射到 B'], ['f(a) = b', 'f of a equals b', 'a 在 f 下的像是 b'],
      ['f⁻¹', 'f inverse', 'f 的逆映射（仅在可逆时）']
    ],
    exampleTitle: 'Classify one small mapping',
    example: '<p>Let A={1,2} and B={a,b}, with f(1)=a and f(2)=b.</p><div class="formula-line">different inputs → different outputs · every element of B is reached</div><p class="example-note">So f is bijective. 因此 f 是双射。</p>',
    vocab: [
      ['domain', '定义域', '/doʊˈmeɪn/', 'The set of allowed inputs.'], ['codomain', '陪域', '/ˈkoʊdoʊmeɪn/', 'The declared target set.'],
      ['injective', '单射的', '/ɪnˈdʒektɪv/', 'Distinct inputs have distinct outputs.'], ['surjective', '满射的', '/sərˈdʒektɪv/', 'Every codomain element is reached.'],
      ['bijective', '双射的', '/baɪˈdʒektɪv/', 'Both injective and surjective.']
    ],
    sentences: [
      ['Specify the domain and codomain.', '说明定义域和陪域。', 'specify = 说明'], ['Show that the mapping is injective.', '证明该映射是单射。', 'show that = 证明'],
      ['Every element of the codomain has a preimage.', '陪域中的每个元素都有原像。', 'has a preimage = 有原像'], ['A bijection has an inverse mapping.', '双射具有逆映射。', 'inverse mapping = 逆映射']
    ],
    checks: [
      q('TERM MATCH · 术语对应', '“one-to-one” 在此处通常对应什么？', ['injective', 'surjective', 'constant'], 0, 'One-to-one 是 injective（单射）的常见课堂说法。'),
      q('CLASSROOM ENGLISH · 课堂英语', '“onto” 强调哪项条件？', ['陪域中每个元素都被映到', '不同输入有不同输出', '定义域为空'], 0, 'Onto 是 surjective（满射）的常见说法。'),
      q('CONCEPT · 概念', '一个映射同时是 injective 和 surjective，则它是：', ['bijective', 'undefined', 'homogeneous'], 0, 'Bijective 即既单射又满射。')
    ],
    summary: ['I can identify domain and codomain.', 'I can distinguish injective from surjective.', 'I can recognize one-to-one and onto.', 'I can explain what bijective means.']
  },
  {
    slug: 'isomorphisms-of-sets', section: '1.1', family: 'Structure',
    title: 'Isomorphisms of Sets', zh: '集合的同构',
    ipa: '/aɪˈsɔːrfɪzəmz əv sets/',
    description: 'Two sets are isomorphic as sets when there is a bijection between them.',
    chinese: '若两个集合之间存在双射，则它们作为集合是同构的；在这里比较的是元素的一一对应，而不是额外的代数结构。',
    question: 'When do two sets have the same set structure?', questionZh: '两个集合何时具有相同的集合结构？',
    academic: 'An isomorphism of sets is a bijective mapping. Its inverse is also a mapping between the two sets.',
    professional: '集合之间的同构就是双射，它说明两个集合的元素可以完全一一对应。若以后讨论带运算的结构，还需要额外保持运算。',
    intuition: '可以给两组元素逐个配对、不重不漏，就说明它们作为集合“大小相同”。',
    hero: '<div class="iso-hero"><span>A = {●, ▲, ■}</span><strong>≅</strong><span>B = {1, 2, 3}</span><small>one-to-one and onto · 一一对应且覆盖全部</small></div>',
    notation: [['A ≅ B', 'A is isomorphic to B', 'A 与 B 同构'], ['f : A → B', 'f is a bijection from A to B', 'f 是从 A 到 B 的双射'], ['f⁻¹ : B → A', 'the inverse maps B back to A', '逆映射从 B 返回 A']],
    exampleTitle: 'Pair every element exactly once',
    example: '<div class="formula-line">f(red)=1, f(gold)=2, f(navy)=3</div><p class="example-note">No element is repeated or omitted, so f is a set isomorphism. 没有重复或遗漏，因此 f 是集合的同构。</p>',
    vocab: [['isomorphism', '同构', '/aɪˈsɔːrfɪzəm/', 'A structure-preserving bijection; for plain sets, a bijection.'], ['correspondence', '对应', '/ˌkɔːrəˈspɑːndəns/', 'A pairing between elements.'], ['inverse mapping', '逆映射', '/ˈɪnvɜːrs ˈmæpɪŋ/', 'A mapping that reverses the correspondence.'], ['cardinality', '基数', '/ˌkɑːrdɪˈnæləti/', 'The number or size of a set.']],
    sentences: [['Construct a bijection between the two sets.', '在两个集合之间构造一个双射。', 'construct a bijection = 构造双射'], ['The sets have the same cardinality.', '这两个集合具有相同基数。', 'same cardinality = 相同基数'], ['Write down the inverse mapping.', '写出逆映射。', 'write down = 写出'], ['This statement concerns sets, not algebraic operations.', '该结论讨论集合，而不是代数运算。', 'concerns sets = 讨论集合']],
    checks: [q('TERM MATCH · 术语对应', '“isomorphic” 对应哪个中文术语？', ['同构的', '正交的', '齐次的'], 0, 'Isomorphic 的标准译法是“同构的”。'), q('CONCEPT · 概念', '集合之间的 isomorphism 必须是：', ['bijection', 'constant mapping', 'partial rule'], 0, '普通集合之间的同构就是双射。'), q('READ THE NOTATION · 符号读法', 'A ≅ B 读作：', ['A is isomorphic to B', 'A is a subset of B', 'A equals zero'], 0, '符号 ≅ 在这里表示 isomorphic to。')],
    summary: ['I can read A ≅ B.', 'I can connect isomorphism with bijection.', 'I can recognize an inverse mapping.', 'I know this page concerns sets only.']
  },
  {
    slug: 'groups-rings-fields', section: '1.1', family: 'Structure',
    title: 'Sets with Operations: Groups, Rings, Fields, and Number Fields', zh: '带运算的集合：群、环、域与数域',
    ipa: '/sets wɪð ˌɑːpəˈreɪʃənz: ɡruːps, rɪŋz, fiːldz, ænd ˈnʌmbər fiːldz/',
    description: 'Groups, rings, and fields are sets equipped with operations that satisfy specific rules.',
    chinese: '群、环和域都是带有运算并满足相应公理的集合。本页只建立英文名称和层级感，不展开抽象代数证明。',
    question: 'What changes when a set is equipped with operations?', questionZh: '集合带上运算后，我们还要关注什么？',
    academic: 'A group has one principal operation; a ring has addition and multiplication; a field also permits division by every nonzero element.',
    professional: '群、环、域的公理逐步增加。在线性代数中，标量通常取自数域，例如 ℝ 或 ℂ。',
    intuition: '听到 field 时不要翻译成“领域”；在线性代数里它是“域”，说明标量可以怎样运算。',
    hero: '<div class="structure-hero"><span>GROUP<br><small>one operation</small></span><b>→</b><span>RING<br><small>+ and ×</small></span><b>→</b><span>FIELD<br><small>divide by nonzero</small></span></div>',
    notation: [['(G, ★)', 'G with the operation star', '集合 G 配备运算 ★'], ['ℝ', 'the real numbers', '实数域'], ['ℂ', 'the complex numbers', '复数域']],
    exampleTitle: 'Recognize a familiar number field',
    example: '<div class="formula-line">ℚ ⊂ ℝ ⊂ ℂ</div><p class="example-note">The rational, real, and complex numbers are familiar number fields. 有理数、实数和复数是常见数域。</p>',
    vocab: [['binary operation', '二元运算', '/ˈbaɪnəri ˌɑːpəˈreɪʃən/', 'Combines two elements to produce another element.'], ['group', '群', '/ɡruːp/', 'A set with one operation satisfying the group axioms.'], ['ring', '环', '/rɪŋ/', 'A set with addition and multiplication satisfying ring axioms.'], ['field', '域', '/fiːld/', 'A ring in which every nonzero element has a multiplicative inverse.'], ['scalar', '标量', '/ˈskeɪlər/', 'A number used to scale vectors.']],
    sentences: [['The scalars come from a field.', '标量取自一个域。', 'come from a field = 取自一个域'], ['The operation is closed on the set.', '该运算在此集合上封闭。', 'closed on the set = 在集合上封闭'], ['Every nonzero element has a multiplicative inverse.', '每个非零元素都有乘法逆元。', 'multiplicative inverse = 乘法逆元'], ['We usually work over the real numbers.', '我们通常在实数域上讨论。', 'over the real numbers = 在实数域上']],
    checks: [q('TERM MATCH · 术语对应', '代数语境中的 “field” 应译为：', ['域', '领域', '范围'], 0, '在抽象代数和线性代数中，field 的标准译法是“域”。'), q('CLASSROOM ENGLISH · 课堂英语', '“nonzero scalar” 指什么？', ['非零标量', '零向量', '非空集合'], 0, 'Scalar 是标量，nonzero 是非零。'), q('CONCEPT · 概念', '线性代数中常见的标量域是：', ['ℝ 或 ℂ', '只有自然数 ℕ', '任意无运算集合'], 0, '实数域 ℝ 和复数域 ℂ 是线性代数中最常见的标量域。')],
    summary: ['I can distinguish group, ring, and field by name.', 'I can translate field as 域.', 'I can recognize common number fields.', 'I can follow a sentence about scalars.']
  },
  {
    slug: 'linear-spaces-mappings-isomorphisms', section: '1.1', family: 'Structure',
    title: 'Linear Spaces, Mappings, and Isomorphisms: A First Look', zh: '线性空间、线性映射与线性同构初步',
    ipa: '/ˈlɪniər speɪsɪz, ˈmæpɪŋz, ænd aɪˈsɔːrfɪzəmz/',
    description: 'A linear space supports vector addition and scalar multiplication, and a linear mapping preserves both operations.',
    chinese: '线性空间允许向量加法和标量乘法；线性映射保持这两种运算；双射的线性映射称为线性同构。这里只做初步认识。',
    question: 'What does a linear mapping preserve?', questionZh: '线性映射保持什么关系？',
    academic: 'A mapping T is linear when T(u+v)=T(u)+T(v) and T(cu)=cT(u).',
    professional: '线性映射保持向量加法与数乘。若线性映射还是双射，则两个线性空间线性同构。',
    intuition: '先组合再映射，与先分别映射再组合，结果相同。',
    hero: '<div class="linear-hero"><span>u + v</span><b>T</b><span>T(u) + T(v)</span><small>operation preserved · 运算被保持</small></div>',
    notation: [['T : V → W', 'T maps V to W', 'T 从 V 映射到 W'], ['T(u+v)=T(u)+T(v)', 'T preserves addition', 'T 保持加法'], ['T(cu)=cT(u)', 'T preserves scalar multiplication', 'T 保持数乘']],
    exampleTitle: 'Check one linear rule',
    example: '<p>Let T(x,y)=(2x,2y).</p><div class="formula-line">T(u+v)=2(u+v)=2u+2v=T(u)+T(v)</div><p class="example-note">This rule preserves addition and scalar multiplication. 该规则保持加法和数乘。</p>',
    vocab: [['linear space', '线性空间', '/ˈlɪniər speɪs/', 'A set of vectors closed under the required operations.'], ['linear mapping', '线性映射', '/ˈlɪniər ˈmæpɪŋ/', 'A mapping that preserves addition and scalar multiplication.'], ['preserve', '保持', '/prɪˈzɜːrv/', 'To leave a relationship unchanged.'], ['linear isomorphism', '线性同构', '/ˈlɪniər aɪˈsɔːrfɪzəm/', 'A bijective linear mapping.']],
    sentences: [['Verify that the mapping is linear.', '验证该映射是线性的。', 'verify that = 验证'], ['The map preserves vector addition.', '该映射保持向量加法。', 'preserves = 保持'], ['Take an arbitrary scalar c.', '任取一个标量 c。', 'arbitrary scalar = 任意标量'], ['The two spaces are linearly isomorphic.', '这两个空间线性同构。', 'linearly isomorphic = 线性同构']],
    checks: [q('TERM MATCH · 术语对应', '“linear mapping” 对应：', ['线性映射', '线性方程', '数域'], 0, 'Linear mapping 的标准译法是“线性映射”。'), q('READ THE NOTATION · 符号读法', 'T(cu)=cT(u) 描述什么？', ['保持数乘', '交换两个集合', '求笛卡尔积'], 0, '等式表示先数乘再映射与先映射再数乘相同。'), q('CONCEPT · 概念', '线性同构必须是：', ['双射的线性映射', '任意满射', '常值映射'], 0, 'Linear isomorphism 同时要求线性和双射。')],
    summary: ['I can recognize linear space and linear mapping.', 'I can read T:V→W.', 'I can identify the two linearity conditions.', 'I know a linear isomorphism is bijective.']
  },
  {
    slug: 'matrices-from-systems-mappings', section: '1.2', family: 'Concept',
    title: 'Matrices from Linear Systems and Linear Mappings', zh: '从线性方程组与线性映射认识矩阵',
    ipa: '/ˈmeɪtrɪsiːz frəm ˈlɪniər ˈsɪstəmz ænd ˈmæpɪŋz/',
    description: 'A matrix organizes coefficients of a linear system and can also represent a linear mapping in coordinates.',
    chinese: '矩阵可以整理线性方程组的系数，也可以在选定坐标下表示线性映射。',
    question: 'What information does a matrix record?', questionZh: '矩阵记录了哪些信息？',
    academic: 'The coefficient matrix contains the coefficients of the variables; the augmented matrix also includes the constants.',
    professional: '系数矩阵只保留未知量系数；增广矩阵在右侧加入常数列。线性映射在选定基下也可由矩阵表示。',
    intuition: '把每个方程的一行数字按相同变量顺序排好，就得到矩阵。',
    hero: '<div class="system-matrix-hero"><span>2x + y = 3<br>x − y = 0</span><b>↔</b><span class="inline-matrix">[ 2  1 | 3 ]<br>[ 1 −1 | 0 ]</span></div>',
    notation: [['A', 'the coefficient matrix A', '系数矩阵 A'], ['[A | b]', 'the augmented matrix A bar b', '增广矩阵 [A | b]'], ['Ax=b', 'A x equals b', '矩阵形式 Ax=b']],
    exampleTitle: 'Translate one system into a matrix',
    example: '<p>For 2x+y=3 and x−y=0:</p><div class="formula-line">A = [ 2  1 ; 1 −1 ] &nbsp; and &nbsp; [A|b] = [ 2  1 | 3 ; 1 −1 | 0 ]</div><p class="example-note">Keep the variable order x, y in every row. 每行都保持变量顺序 x、y。</p>',
    vocab: [['coefficient', '系数', '/ˌkoʊəˈfɪʃənt/', 'A number multiplying a variable.'], ['coefficient matrix', '系数矩阵', '/ˌkoʊəˈfɪʃənt ˈmeɪtrɪks/', 'The matrix of variable coefficients.'], ['augmented matrix', '增广矩阵', '/ɔːɡˈmentɪd ˈmeɪtrɪks/', 'A coefficient matrix with the constant column added.'], ['matrix representation', '矩阵表示', '/ˈmeɪtrɪks ˌreprɪzenˈteɪʃən/', 'A matrix describing a mapping in coordinates.']],
    sentences: [['Write the system in matrix form.', '把方程组写成矩阵形式。', 'matrix form = 矩阵形式'], ['Form the augmented matrix.', '写出增广矩阵。', 'form = 写出、构成'], ['The last column contains the constants.', '最后一列包含常数项。', 'contains the constants = 包含常数项'], ['Keep the variables in the same order.', '保持未知量顺序一致。', 'same order = 相同顺序']],
    checks: [q('TERM MATCH · 术语对应', '“coefficient matrix” 对应：', ['系数矩阵', '增广矩阵', '单位矩阵'], 0, 'Coefficient matrix 只记录变量系数。'), q('CLASSROOM ENGLISH · 课堂英语', '“Form the augmented matrix.” 要求什么？', ['写出增广矩阵', '交换两列', '证明映射满射'], 0, 'Form 在这里表示“构成、写出”。'), q('CONCEPT · 概念', '增广线右侧通常放：', ['常数项', '变量名称', '行编号'], 0, '增广矩阵把常数列放在增广线右侧。')],
    summary: ['I can identify a coefficient matrix.', 'I can recognize an augmented matrix.', 'I can read Ax=b.', 'I can keep variable order consistent.']
  },
  {
    slug: 'matrix-types-equality-operations', section: '1.2', family: 'Concept',
    title: 'Matrix Types, Equality, and Linear Operations', zh: '矩阵类型、矩阵相等与线性运算',
    ipa: '/ˈmeɪtrɪks taɪps, iˈkwɑːləti, ænd ˈlɪniər ˌɑːpəˈreɪʃənz/',
    description: 'Matrix size and type describe its shape; equality and linear operations compare entries in corresponding positions.',
    chinese: '矩阵的大小和类型描述其形状；矩阵相等要求阶数相同且对应元素相等；加法和数乘按对应元素进行。',
    question: 'When can matrices be compared or added?', questionZh: '矩阵何时可以比较或相加？',
    academic: 'Two matrices are equal when they have the same dimensions and equal corresponding entries. Addition also requires equal dimensions.',
    professional: '矩阵相等与矩阵加法都先检查行数和列数。数乘则用同一标量乘矩阵中的每个元素。',
    intuition: '先看“几行几列”，形状不同就不能逐位置比较或相加。',
    hero: '<div class="matrix-type-hero"><span>2 × 2<br>[ 1  0 ; 0  1 ]</span><strong>same size</strong><span>2 × 2<br>[ a  b ; c  d ]</span></div>',
    notation: [['A ∈ ℝᵐˣⁿ', 'A is an m by n real matrix', 'A 是 m×n 实矩阵'], ['A=B', 'A equals B', '矩阵 A 等于矩阵 B'], ['A+B', 'A plus B', '矩阵 A 加 B'], ['cA', 'c times A', '标量 c 乘矩阵 A']],
    exampleTitle: 'Add corresponding entries',
    example: '<div class="formula-line">[1  2; 0  1] + [2  0; 3  −1] = [3  2; 3  0]</div><p class="example-note">Each output entry comes from the same position in the two matrices. 对应位置元素相加。</p>',
    vocab: [['row matrix', '行矩阵', '/roʊ ˈmeɪtrɪks/', 'A matrix with one row.'], ['column matrix', '列矩阵', '/ˈkɑːləm ˈmeɪtrɪks/', 'A matrix with one column.'], ['square matrix', '方阵', '/skwer ˈmeɪtrɪks/', 'A matrix with the same number of rows and columns.'], ['identity matrix', '单位矩阵', '/aɪˈdentəti ˈmeɪtrɪks/', 'A square matrix with ones on the main diagonal and zeros elsewhere.'], ['corresponding entries', '对应元素', '/ˌkɔːrəˈspɑːndɪŋ ˈentriːz/', 'Entries in the same position.']],
    sentences: [['State the dimensions of the matrix.', '说明矩阵的阶数。', 'state the dimensions = 说明阶数'], ['The matrices have the same size.', '这些矩阵大小相同。', 'same size = 大小相同'], ['Add the corresponding entries.', '把对应元素相加。', 'corresponding entries = 对应元素'], ['Multiply every entry by the scalar.', '用该标量乘每个元素。', 'every entry = 每个元素']],
    checks: [q('TERM MATCH · 术语对应', '“square matrix” 对应：', ['方阵', '行矩阵', '增广矩阵'], 0, 'Square matrix 是行数与列数相等的方阵。'), q('CONCEPT · 概念', '两个矩阵相等首先必须：', ['阶数相同', '行列式相同即可', '都含非零元素'], 0, '矩阵相等要求阶数相同并且对应元素相等。'), q('CLASSROOM ENGLISH · 课堂英语', '“corresponding entries” 指：', ['对应位置的元素', '所有主元', '最后一列'], 0, 'Corresponding 表示位置相对应。')],
    summary: ['I can state matrix dimensions.', 'I can recognize common matrix types.', 'I know the condition for matrix equality.', 'I can follow entrywise addition instructions.']
  },
  {
    slug: 'homogeneous-nonhomogeneous-systems', section: '1.2', family: 'Concept',
    title: 'Homogeneous and Nonhomogeneous Linear Systems', zh: '齐次与非齐次线性方程组',
    ipa: '/ˌhoʊməˈdʒiːniəs ænd ˌnɑːnhoʊməˈdʒiːniəs ˈlɪniər ˈsɪstəmz/',
    description: 'A homogeneous system has a zero right-hand side; a nonhomogeneous system has at least one nonzero constant.',
    chinese: '齐次线性方程组的右端为零，即 Ax=0；非齐次线性方程组至少有一个非零常数项。',
    question: 'What does the right-hand side tell us?', questionZh: '方程右端告诉我们什么？',
    academic: 'Every homogeneous system Ax=0 has the trivial solution x=0. A nonhomogeneous system Ax=b may or may not be consistent.',
    professional: '齐次系统总有零解；是否还有非零解需要进一步判断。非齐次系统是否有解取决于一致性条件。',
    intuition: '看到右端全是 0，就先认出 homogeneous；不要因此直接断言只有零解。',
    hero: '<div class="system-kind-hero"><span>Ax = 0<br><b>HOMOGENEOUS</b></span><span>Ax = b, b ≠ 0<br><b>NONHOMOGENEOUS</b></span></div>',
    notation: [['Ax=0', 'A x equals zero', '齐次系统'], ['Ax=b', 'A x equals b', '一般矩阵方程'], ['x=0', 'the trivial solution', '零解（平凡解）']],
    exampleTitle: 'Classify by the right-hand side',
    example: '<div class="formula-line">x + 2y = 0, &nbsp; 3x − y = 0</div><p class="example-note">Both constants are zero, so the system is homogeneous. 右端常数全为 0，因此是齐次系统。</p>',
    vocab: [['homogeneous system', '齐次线性方程组', '/ˌhoʊməˈdʒiːniəs ˈsɪstəm/', 'A linear system with zero right-hand side.'], ['nonhomogeneous system', '非齐次线性方程组', '/ˌnɑːnhoʊməˈdʒiːniəs ˈsɪstəm/', 'A system with at least one nonzero constant.'], ['trivial solution', '零解；平凡解', '/ˈtrɪviəl səˈluːʃən/', 'The zero vector solution.'], ['right-hand side', '右端', '/ˌraɪt hænd ˈsaɪd/', 'The constants to the right of the equality sign.']],
    sentences: [['The system is homogeneous.', '该方程组是齐次的。', 'is homogeneous = 是齐次的'], ['Set the right-hand side equal to zero.', '令右端等于零。', 'right-hand side = 右端'], ['The zero vector is always a solution.', '零向量总是一个解。', 'always a solution = 总是一个解'], ['Determine whether nontrivial solutions exist.', '判断是否存在非零解。', 'nontrivial solutions = 非零解']],
    checks: [q('TERM MATCH · 术语对应', '“homogeneous system” 对应：', ['齐次线性方程组', '非齐次线性方程组', '不相容方程组'], 0, 'Homogeneous system 的标准译法是齐次线性方程组。'), q('READ THE NOTATION · 符号读法', 'Ax=0 表示哪一类系统？', ['齐次系统', '必定无解的系统', '非线性系统'], 0, '右端为零是齐次系统的识别特征。'), q('CONCEPT · 概念', '齐次系统一定具有：', ['零解', '唯一非零解', '无穷多个解'], 0, 'x=0 总满足 Ax=0；是否还有其他解需进一步判断。')],
    summary: ['I can distinguish homogeneous from nonhomogeneous.', 'I can read Ax=0.', 'I recognize the phrase right-hand side.', 'I know a homogeneous system always has the zero solution.']
  },
  {
    slug: 'elementary-row-operations', section: '1.2', family: 'Procedure',
    title: 'Elementary Row Operations', zh: '初等行变换与行阶梯形矩阵', demo: true
  },
  {
    slug: 'gaussian-elimination', section: '1.2', family: 'Procedure',
    title: 'Gaussian Elimination', zh: '高斯消元法',
    ipa: '/ˈɡaʊsiən ɪˌlɪməˈneɪʃən/',
    description: 'Gaussian elimination uses elementary row operations to transform a system into row echelon form and then solve it.',
    chinese: '高斯消元法通过初等行变换把增广矩阵化为行阶梯形，再从后向前求解。本页只预习过程语言。',
    question: 'What sequence does Gaussian elimination follow?', questionZh: '高斯消元法按照怎样的顺序进行？',
    academic: 'Forward elimination creates zeros below pivots; back substitution then determines the variables.',
    professional: '先用前向消元得到行阶梯形，再进行回代。每一步行变换都作用于整行并保持解集不变。',
    intuition: '听到 eliminate 就向下制造 0；听到 back-substitute 就从最后一个方程往回求。',
    hero: '<div class="elimination-hero"><span>augmented matrix</span><b>row operations →</b><span>row echelon form</span><b>→ back-substitute</b></div>',
    notation: [['R₂ ← R₂ − R₁', 'Subtract row one from row two', '第二行减去第一行'], ['REF', 'row echelon form', '行阶梯形'], ['back-substitute', 'back-substitute from the last equation', '从最后一个方程回代']],
    exampleTitle: 'Follow one short elimination',
    example: '<div class="formula-line">[1  1 | 2; 1  −1 | 0] → [1  1 | 2; 0  −2 | −2]</div><ol class="mini-steps"><li>Subtract row one from row two. 第二行减第一行。</li><li>Read −2y=−2, so y=1.</li><li>Back-substitute to get x=1. 回代得到 x=1。</li></ol>',
    vocab: [['Gaussian elimination', '高斯消元法', '/ˈɡaʊsiən ɪˌlɪməˈneɪʃən/', 'A row-reduction method for solving systems.'], ['forward elimination', '前向消元', '/ˈfɔːrwərd ɪˌlɪməˈneɪʃən/', 'Creating zeros below pivots.'], ['back substitution', '回代', '/bæk ˌsʌbstɪˈtuːʃən/', 'Solving upward from the last equation.'], ['row-reduce', '进行行化简', '/roʊ rɪˈduːs/', 'To simplify a matrix with row operations.']],
    sentences: [['Use Gaussian elimination to solve the system.', '用高斯消元法求解方程组。', 'to solve the system = 求解方程组'], ['Eliminate the entries below the pivot.', '消去主元下方的元素。', 'eliminate = 消去'], ['Continue until the matrix is in row echelon form.', '继续运算直到矩阵成为行阶梯形。', 'continue until = 继续直到'], ['Back-substitute from the last equation.', '从最后一个方程开始回代。', 'back-substitute = 回代']],
    checks: [q('TERM MATCH · 术语对应', '“back substitution” 对应：', ['回代', '前向消元', '列交换'], 0, 'Back substitution 的标准译法是“回代”。'), q('SEQUENCE · 顺序', 'Gaussian elimination 通常先做什么？', ['forward elimination', 'back substitution', 'compute a determinant'], 0, '先前向消元得到阶梯形，再回代。'), q('CLASSROOM ENGLISH · 课堂英语', '“Eliminate the entries below the pivot.” 要求：', ['消去主元下方元素', '交换所有列', '令主元为零'], 0, 'Eliminate 在此表示通过行变换把指定元素化为零。')],
    summary: ['I can recognize Gaussian elimination.', 'I can distinguish elimination from back substitution.', 'I can follow a short row-reduction sequence.', 'I know row operations preserve the solution set.']
  },
  {
    slug: 'consistency-number-of-solutions', section: '1.2', family: 'Structure',
    title: 'Consistency and the Number of Solutions', zh: '线性方程组的有解判定与解的个数',
    ipa: '/kənˈsɪstənsi ænd ðə ˈnʌmbər əv səˈluːʃənz/',
    description: 'An echelon form reveals whether a system is consistent and whether it has one solution or infinitely many solutions.',
    chinese: '行阶梯形可以帮助判断方程组是否有解，以及在有解时是唯一解还是无穷多解。',
    question: 'What does an echelon form tell us about solutions?', questionZh: '行阶梯形怎样告诉我们解的情况？',
    academic: 'A row [0 … 0 | c] with c≠0 makes the system inconsistent. Otherwise, free variables determine whether infinitely many solutions occur.',
    professional: '若出现形如 0=c（c≠0）的矛盾行，方程组无解；无矛盾行时，若每个未知量列都有主元则通常有唯一解，否则有自由变量并产生无穷多解。',
    intuition: '先找 contradiction（矛盾行），再看有没有 free variable（自由变量）。',
    hero: '<div class="solution-cases"><span>pivot in every variable<br><b>ONE</b></span><span>free variable<br><b>INFINITELY MANY</b></span><span>0 = nonzero<br><b>NONE</b></span></div>',
    notation: [['[0  0 | 1]', 'zero equals one: a contradiction', '0=1，矛盾行'], ['consistent', 'the system is consistent', '方程组有解'], ['free variable', 'a free variable', '自由变量']],
    exampleTitle: 'Read two echelon rows',
    example: '<div class="case-grid"><div><b>[1 0 | 2; 0 1 | 3]</b><span>pivot in each variable → one solution</span></div><div><b>[1 2 | 3; 0 0 | 1]</b><span>contradiction → no solution</span></div></div>',
    vocab: [['consistent', '有解的；相容的', '/kənˈsɪstənt/', 'Having at least one solution.'], ['inconsistent', '无解的；不相容的', '/ˌɪnkənˈsɪstənt/', 'Having no solution.'], ['unique solution', '唯一解', '/juˈniːk səˈluːʃən/', 'Exactly one solution.'], ['free variable', '自由变量', '/friː ˈveriəbəl/', 'A variable without a pivot in its column.'], ['infinitely many solutions', '无穷多解', '/ˈɪnfənətli ˈmeni səˈluːʃənz/', 'More solutions than can be listed finitely.']],
    sentences: [['Determine whether the system is consistent.', '判断方程组是否有解。', 'determine whether = 判断是否'], ['This row gives a contradiction.', '这一行产生矛盾。', 'gives a contradiction = 产生矛盾'], ['There is a pivot in every variable column.', '每个未知量列都有主元。', 'every variable column = 每个未知量列'], ['Let the free variable be a parameter.', '令自由变量为参数。', 'free variable = 自由变量']],
    checks: [q('TERM MATCH · 术语对应', '“inconsistent system” 表示：', ['无解的方程组', '唯一解方程组', '齐次方程组'], 0, 'Inconsistent 表示方程组不相容，即无解。'), q('READ THE MATRIX · 读矩阵', '行 [0 0 | 1] 表示：', ['矛盾，因此无解', '一个自由变量', '唯一解'], 0, '该行对应 0=1，是不可能成立的矛盾。'), q('CLASSROOM ENGLISH · 课堂英语', '“free variable” 对应：', ['自由变量', '主元变量', '常数项'], 0, '没有主元的未知量通常作为自由变量。')],
    summary: ['I can recognize consistent and inconsistent.', 'I can identify a contradiction row.', 'I can listen for free variable.', 'I can distinguish one, none, and infinitely many solutions.']
  },
  {
    slug: 'applications-linear-systems', section: '1.3', family: 'Procedure', extended: true,
    title: 'Typical Applications of Systems of Linear Equations', zh: '线性方程组的典型应用',
    ipa: '/ˈtɪpɪkəl ˌæplɪˈkeɪʃənz əv ˈlɪniər ˈsɪstəmz/',
    description: 'Applications translate quantities and constraints from a real situation into variables and linear equations.',
    chinese: '应用题把实际情境中的数量与约束翻译为未知量和线性方程。本页重点是听懂建模语言，而不是复杂计算。',
    question: 'How do words become a linear system?', questionZh: '怎样把文字条件转化为线性方程组？',
    academic: 'Choose variables, translate each constraint into a linear equation, solve the system, and interpret the result in context.',
    professional: '先定义未知量，再把每个约束写成方程；求解后必须回到实际语境解释并检查单位与合理性。',
    intuition: '每一句 “total”“cost”“balance” 往往对应一个约束条件。',
    hero: '<div class="application-flow"><span>CONTEXT<br><small>情境</small></span><b>→</b><span>VARIABLES<br><small>未知量</small></span><b>→</b><span>SYSTEM<br><small>方程组</small></span><b>→</b><span>INTERPRET<br><small>解释</small></span></div>',
    notation: [['Let x denote …', 'Let x denote the unknown quantity', '令 x 表示未知量'], ['constraint', 'translate the constraint into an equation', '把约束写成方程'], ['interpret the solution', 'interpret the solution in context', '结合情境解释解']],
    exampleTitle: 'Model one ticket problem',
    example: '<p>Ten tickets are sold. Adult tickets cost 2 units and student tickets cost 1 unit. The total is 16 units.</p><div class="formula-line">a+s=10 &nbsp;&nbsp; 2a+s=16</div><p class="example-note">Subtract the equations: a=6, then s=4. Interpret: 6 adult tickets and 4 student tickets.</p>',
    vocab: [['variable', '变量；未知量', '/ˈveriəbəl/', 'A symbol representing an unknown quantity.'], ['constraint', '约束条件', '/kənˈstreɪnt/', 'A condition the variables must satisfy.'], ['model', '模型；建立模型', '/ˈmɑːdəl/', 'A mathematical representation of a situation.'], ['total', '总量；合计', '/ˈtoʊtəl/', 'The combined amount.'], ['interpret', '解释', '/ɪnˈtɜːrprət/', 'Explain what a mathematical answer means in context.']],
    sentences: [['Let x represent the first quantity.', '令 x 表示第一个未知量。', 'represent = 表示'], ['Translate each constraint into an equation.', '把每个约束条件写成方程。', 'translate into = 转化为'], ['Solve the resulting linear system.', '求解所得线性方程组。', 'resulting system = 所得方程组'], ['Interpret the solution in context.', '结合实际情境解释解。', 'in context = 结合情境'], ['Check that the units are consistent.', '检查单位是否一致。', 'units are consistent = 单位一致']],
    checks: [q('TERM MATCH · 术语对应', '建模语境中的 “constraint” 对应：', ['约束条件', '主元', '逆映射'], 0, 'Constraint 表示变量必须满足的限制条件。'), q('CLASSROOM ENGLISH · 课堂英语', '“Let x represent …” 的作用是：', ['定义未知量', '交换两行', '判断满射'], 0, 'Let x represent … 是应用题中定义变量的常见句式。'), q('SEQUENCE · 顺序', '求出数值后还应做什么？', ['结合情境解释并检查', '删除单位', '改成齐次系统'], 0, '应用题的最后一步是解释答案并检查单位和合理性。')],
    summary: ['I can define variables in English.', 'I can recognize the word constraint.', 'I can translate a simple total into an equation.', 'I can interpret a solution in context.']
  }
];

const step = (phase, english, chinese, notation, visual, note) => ({ phase, english, chinese, notation, visual, note });
const visual = (main, sub) => `<div class="action-object"><strong>${main}</strong><span>${sub}</span></div>`;

const actionContent = {
  'set-operations-cartesian-products': {
    actionQuestion: 'How do we build a Cartesian product?',
    steps: [
      step('IDENTIFY · 识别', 'Identify the two source sets.', '先识别两个来源集合。', 'A={1,2}, B={x,y}', visual('A = {1, 2}   B = {x, y}', 'first coordinate from A · second coordinate from B'), 'The order of the source sets fixes the order in every pair.'),
      step('ACT · 操作', 'Pair the first element of A with every element of B.', '把 A 的第一个元素与 B 的每个元素配对。', '(1,x), (1,y)', visual('1 → (1,x), (1,y)', 'keep 1 in the first position'), 'The first coordinate stays 1 while the second coordinate changes.'),
      step('OBSERVE · 观察', 'Repeat the pairing for the second element of A.', '对 A 的第二个元素重复配对。', '(2,x), (2,y)', visual('2 → (2,x), (2,y)', 'use every element of B again'), 'No ordered pair is omitted.'),
      step('CONNECT · 联系', 'List the complete Cartesian product.', '列出完整的笛卡尔积。', 'A×B={(1,x),(1,y),(2,x),(2,y)}', visual('A × B has four ordered pairs', '|A×B| = 2×2 = 4'), 'The action phrase “list all ordered pairs” now matches the visible result.')
    ],
    recognitionTitle: 'Recognize three different set actions', recognitionZh: '区分三种常见集合动作',
    recognition: [['A ∪ B', 'combine elements from either set', '合并至少属于一个集合的元素'], ['A ∩ B', 'keep only common elements', '只保留共同元素'], ['A × B', 'build ordered pairs', '构造有序对']]
  },
  'mappings-injections-surjections-bijections': {
    actionQuestion: 'How do we classify one small mapping?',
    steps: [
      step('IDENTIFY · 识别', 'Name the domain and codomain.', '说明定义域和陪域。', 'f:A→B', visual('A={1,2}   B={a,b}', 'domain → codomain'), 'Every element of A must receive exactly one output.'),
      step('ACT · 操作', 'Trace the output of each input.', '追踪每个输入的输出。', 'f(1)=a, f(2)=b', visual('1 → a    2 → b', 'two visible arrows'), 'Different inputs land at different outputs.'),
      step('OBSERVE · 观察', 'Check whether every codomain element is reached.', '检查陪域中的每个元素是否都被映到。', 'image(f)={a,b}=B', visual('a ✓    b ✓', 'every target is reached'), 'The mapping is surjective as well as injective.'),
      step('CONNECT · 联系', 'Classify the mapping as bijective.', '把该映射判断为双射。', 'injective + surjective ⇒ bijective', visual('f is bijective', 'one-to-one and onto'), 'The lecture words “one-to-one and onto” describe the two checks just completed.')
    ],
    recognitionTitle: 'Listen for the classification words', recognitionZh: '听到关键词就能判断性质',
    recognition: [['injective', 'different inputs have different outputs', '不同输入对应不同输出'], ['surjective', 'every codomain element is reached', '陪域元素全部被映到'], ['bijective', 'both conditions hold', '同时满足单射与满射']]
  },
  'isomorphisms-of-sets': {
    actionQuestion: 'How do we exhibit a set isomorphism?',
    steps: [
      step('IDENTIFY · 识别', 'Count the elements in each set.', '数出两个集合中的元素。', 'A={red,gold,navy}, B={1,2,3}', visual('|A|=3    |B|=3', 'same finite cardinality'), 'Equal size suggests that a bijection may exist.'),
      step('ACT · 操作', 'Pair each element of A with one element of B.', '把 A 中每个元素与 B 中一个元素配对。', 'red↦1, gold↦2, navy↦3', visual('red → 1   gold → 2   navy → 3', 'one pairing per element'), 'The proposed mapping has no repeated output.'),
      step('OBSERVE · 观察', 'Check that nothing is repeated or omitted.', '检查没有重复或遗漏。', 'f is one-to-one and onto', visual('A ✓  →  B ✓', 'all elements used exactly once'), 'The correspondence is a bijection.'),
      step('CONNECT · 联系', 'Conclude that the sets are isomorphic.', '得出两个集合同构。', 'A≅B', visual('A ≅ B', 'isomorphic as sets'), 'This conclusion concerns plain sets; extra operations would require extra preservation conditions.')
    ],
    recognitionTitle: 'Recognize what set isomorphism does—and does not—claim', recognitionZh: '识别集合同构的范围',
    recognition: [['bijection', 'required for a set isomorphism', '集合同构必须是双射'], ['inverse', 'reverses the pairing', '逆映射把配对反向'], ['plain sets', 'no algebraic operation is being preserved yet', '此处尚未讨论保持代数运算']]
  },
  'groups-rings-fields': {
    actionQuestion: 'How do we recognize a familiar number field?',
    steps: [
      step('IDENTIFY · 识别', 'Start with the real numbers and their usual operations.', '从实数及其通常运算出发。', '(ℝ,+,×)', visual('real numbers', 'addition and multiplication'), 'A field is more than a set: its operations matter.'),
      step('ACT · 操作', 'Choose a nonzero real number.', '任取一个非零实数。', 'a∈ℝ, a≠0', visual('a ≠ 0', 'nonzero condition'), 'The nonzero condition is essential before division.'),
      step('OBSERVE · 观察', 'Find its multiplicative inverse.', '找到它的乘法逆元。', 'a⁻¹=1/a∈ℝ', visual('a · (1/a) = 1', 'inverse remains in ℝ'), 'Every nonzero real number has a real multiplicative inverse.'),
      step('CONNECT · 联系', 'Recognize the real numbers as a field.', '认出实数构成一个域。', 'ℝ is a number field', visual('ℚ ⊂ ℝ ⊂ ℂ', 'familiar number fields'), 'The classroom phrase “work over the real numbers” refers to the scalar field ℝ.')
    ],
    recognitionTitle: 'Recognize the structural hierarchy', recognitionZh: '识别代数结构的层级',
    recognition: [['group', 'one principal operation', '一个主要运算'], ['ring', 'addition and multiplication', '配备加法和乘法'], ['field', 'division by every nonzero element is available', '每个非零元素都可作除法']]
  },
  'linear-spaces-mappings-isomorphisms': {
    actionQuestion: 'How do we check a simple linear mapping?',
    steps: [
      step('IDENTIFY · 识别', 'State the mapping and choose two vectors.', '写出映射并选取两个向量。', 'T(x,y)=(2x,2y)', visual('u, v ∈ ℝ²', 'inputs in the linear space'), 'We will check whether T preserves the two linear operations.'),
      step('ACT · 操作', 'Apply T to the sum.', '把 T 作用到向量和上。', 'T(u+v)=2(u+v)', visual('u+v → T → 2(u+v)', 'map after adding'), 'Distribute the scalar 2 across the sum.'),
      step('OBSERVE · 观察', 'Compare with the sum of the images.', '与两个像的和比较。', '2(u+v)=2u+2v=T(u)+T(v)', visual('T(u+v) = T(u)+T(v)', 'addition preserved'), 'The two routes give the same result.'),
      step('CONNECT · 联系', 'Check scalar multiplication and conclude linearity.', '再检查数乘并得出线性。', 'T(cu)=cT(u)', visual('addition ✓   scalar multiplication ✓', 'T is linear'), 'Both required preservation statements are now visible.')
    ],
    recognitionTitle: 'Recognize the three related terms', recognitionZh: '区分三个相邻术语',
    recognition: [['linear space', 'the source or target carrying vector operations', '带向量运算的来源或目标空间'], ['linear mapping', 'preserves addition and scalar multiplication', '保持加法和数乘'], ['linear isomorphism', 'a bijective linear mapping', '双射的线性映射']]
  },
  'matrices-from-systems-mappings': {
    actionQuestion: 'How does a linear system become an augmented matrix?',
    steps: [
      step('IDENTIFY · 识别', 'Fix the variable order in the system.', '固定方程组中的变量顺序。', 'variables: x, y', visual('2x+y=3   x−y=0', 'same x, y order in both rows'), 'The column meaning depends on a consistent variable order.'),
      step('ACT · 操作', 'Read the coefficients row by row.', '逐行读取未知量的系数。', 'A=[2 1; 1 −1]', visual('[ 2   1 ]', '[ 1  −1 ] coefficient matrix'), 'Only the coefficients enter the coefficient matrix.'),
      step('OBSERVE · 观察', 'Append the constant column.', '添加常数列。', '[A|b]=[2 1|3; 1 −1|0]', visual('[ 2   1 | 3 ]', '[ 1  −1 | 0 ] augmented matrix'), 'The augmentation bar separates coefficients from constants.'),
      step('CONNECT · 联系', 'Write the compact matrix equation.', '写成紧凑的矩阵方程。', 'Ax=b', visual('coefficient matrix × variable vector = constants', 'A · x = b'), 'The spoken phrase “A x equals b” refers to the same system information.')
    ],
    recognitionTitle: 'Recognize three matrix roles', recognitionZh: '识别矩阵在本节中的三种角色',
    recognition: [['coefficient matrix', 'records variable coefficients only', '只记录未知量系数'], ['augmented matrix', 'adds the constant column', '加入常数列'], ['matrix representation', 'records a linear mapping in coordinates', '在坐标下表示线性映射']]
  },
  'matrix-types-equality-operations': {
    actionQuestion: 'How do we add two matrices correctly?',
    steps: [
      step('IDENTIFY · 识别', 'Check the dimensions of both matrices.', '先检查两个矩阵的阶数。', 'A,B∈ℝ²ˣ²', visual('2 × 2    and    2 × 2', 'same dimensions'), 'Equal dimensions make corresponding positions available.'),
      step('ACT · 操作', 'Add the first pair of corresponding entries.', '把第一对对应元素相加。', '1+2=3', visual('top-left: 1 + 2 → 3', 'same position in both matrices'), 'The operation does not mix rows or columns.'),
      step('OBSERVE · 观察', 'Repeat for every position.', '对每个位置重复操作。', '[1 2;0 1]+[2 0;3 −1]', visual('[ 3  2 ]', '[ 3  0 ] result'), 'Each result entry comes from one matching position.'),
      step('CONNECT · 联系', 'State the dimension of the result.', '说明结果矩阵的阶数。', 'A+B∈ℝ²ˣ²', visual('same size in → same size out', 'matrix addition'), 'The instruction “add corresponding entries” now matches the visible construction.')
    ],
    recognitionTitle: 'Recognize the conditions before acting', recognitionZh: '运算前先识别条件',
    recognition: [['A=B', 'same dimensions and equal corresponding entries', '阶数相同且对应元素相等'], ['A+B', 'requires the same dimensions', '要求阶数相同'], ['cA', 'scales every entry and keeps the dimensions', '每个元素数乘且阶数不变']]
  },
  'homogeneous-nonhomogeneous-systems': {
    actionQuestion: 'How do we recognize and test a homogeneous system?',
    steps: [
      step('IDENTIFY · 识别', 'Inspect the right-hand side.', '观察方程右端。', 'Ax=0', visual('x+2y=0   3x−y=0', 'all constants are zero'), 'A zero right-hand side identifies a homogeneous system.'),
      step('ACT · 操作', 'Substitute the zero vector.', '代入零向量。', 'x=0', visual('A · 0', 'test the trivial solution'), 'Every term on the left becomes zero.'),
      step('OBSERVE · 观察', 'Verify that the equations are satisfied.', '验证所有方程都成立。', 'A0=0', visual('0 = 0   ✓', 'both equations satisfied'), 'The zero vector is always a solution.'),
      step('CONNECT · 联系', 'State the correct conclusion.', '给出准确结论。', 'homogeneous ⇒ at least the trivial solution', visual('zero solution: always', 'nonzero solutions: check separately'), 'Homogeneous does not automatically mean the zero solution is unique.')
    ],
    recognitionTitle: 'Recognize the right-hand-side distinction', recognitionZh: '从右端区分齐次与非齐次',
    recognition: [['Ax=0', 'homogeneous system', '齐次线性方程组'], ['Ax=b, b≠0', 'nonhomogeneous system', '非齐次线性方程组'], ['x=0', 'trivial solution, not necessarily the only solution', '零解，但不一定是唯一解']]
  },
  'gaussian-elimination': {
    actionQuestion: 'How does one elimination sequence lead to a solution?',
    steps: [
      step('IDENTIFY · 识别', 'Choose the first row as the pivot row.', '选择第一行作为主元行。', '[1 1|2; 1 −1|0]', visual('pivot at row 1, column 1', 'entry below pivot: 1'), 'The goal is to eliminate the entry below the pivot.'),
      step('ACT · 操作', 'Subtract row one from row two.', '第二行减去第一行。', 'R₂←R₂−R₁', visual('[ 1   1 | 2 ]', '[ 0  −2 | −2 ]'), 'The entire second row changes together.'),
      step('OBSERVE · 观察', 'Read the echelon equation for y.', '读取阶梯形中的 y 方程。', '−2y=−2 ⇒ y=1', visual('last equation → y = 1', 'forward elimination complete'), 'The entry below the first pivot is now zero.'),
      step('CONNECT · 联系', 'Back-substitute to find x.', '回代求出 x。', 'x+y=2 ⇒ x=1', visual('(x,y) = (1,1)', 'solution of the system'), 'The sequence connects eliminate, row echelon form, and back-substitute.')
    ],
    recognitionTitle: 'Recognize the stages of Gaussian elimination', recognitionZh: '识别高斯消元的阶段',
    recognition: [['forward elimination', 'create zeros below pivots', '在主元下方制造零'], ['row echelon form', 'the intermediate staircase form', '中间的阶梯形'], ['back substitution', 'solve upward from the last equation', '从最后一个方程向上回代']]
  },
  'consistency-number-of-solutions': {
    actionQuestion: 'How does an echelon row reveal inconsistency?',
    steps: [
      step('IDENTIFY · 识别', 'Inspect the final row of the augmented matrix.', '观察增广矩阵的最后一行。', '[0 0|1]', visual('0x + 0y = 1', 'read the row as an equation'), 'The coefficient side contains only zeros.'),
      step('ACT · 操作', 'Translate the row into an equation.', '把这一行翻译成方程。', '0=1', visual('left side: 0', 'right side: 1'), 'No choice of variables can change the left side.'),
      step('OBSERVE · 观察', 'Recognize the contradiction.', '识别这一矛盾。', '0≠1', visual('CONTRADICTION', 'the row cannot be satisfied'), 'A contradiction means the system is inconsistent.'),
      step('CONNECT · 联系', 'Conclude that the system has no solution.', '得出方程组无解。', 'inconsistent ⇒ no solution', visual('solution set = ∅', 'no solution'), 'The classroom sentence “this row gives a contradiction” describes the decisive evidence.')
    ],
    recognitionTitle: 'Recognize the three solution cases', recognitionZh: '识别三种解的情况',
    recognition: [['one solution', 'a pivot in every variable column and no contradiction', '每个未知量列有主元且无矛盾'], ['infinitely many', 'no contradiction and at least one free variable', '无矛盾且至少有一个自由变量'], ['no solution', 'a contradiction row appears', '出现矛盾行']]
  },
  'applications-linear-systems': {
    actionQuestion: 'How do words become a solvable linear system?',
    steps: [
      step('IDENTIFY · 识别', 'Define variables for the two ticket types.', '为两种票定义未知量。', 'a=adult tickets, s=student tickets', visual('a: adult   s: student', 'quantities to find'), 'Clear variable definitions make later equations readable.'),
      step('ACT · 操作', 'Translate the two totals into equations.', '把两个总量条件翻译成方程。', 'a+s=10, 2a+s=16', visual('ticket count → a+s=10', 'total cost → 2a+s=16'), 'Each sentence in the context becomes one constraint.'),
      step('OBSERVE · 观察', 'Subtract the equations to find a.', '两式相减求 a。', '(2a+s)−(a+s)=16−10', visual('a = 6', 'six adult tickets'), 'The shared s terms cancel.'),
      step('CONNECT · 联系', 'Find s and interpret both values.', '求出 s 并解释两个数值。', 's=10−6=4', visual('6 adult + 4 student = 10', 'interpreted solution'), 'The units and context confirm what the two numbers mean.')
    ],
    recognitionTitle: 'Recognize the modelling sequence', recognitionZh: '识别建模的四个环节',
    recognition: [['define variables', 'state what each symbol represents', '说明每个符号表示什么'], ['translate constraints', 'write one equation for each condition', '把每个条件写成方程'], ['interpret', 'return the numbers to the original context', '把数值放回原情境解释']]
  }
};

// Section 04 uses one shared visual language, but the interaction follows the
// mathematical idea. Only genuinely ordered procedures use Previous / Next.
const adaptiveActivityContent = {
  'set-operations-cartesian-products': {
    activityMode: 'compare',
    activityKicker: 'COMPARE & BUILD · 比较与构造',
    activityInstruction: 'Choose an operation. The same two sets produce three different mathematical objects.',
    actionQuestion: 'What does each set operation build?',
    steps: [
      step('UNION · 并集', 'Combine elements that are in A or B.', '合并属于 A 或 B 的元素。', 'A∪B={1,2,3}', visual('A={1,2}   B={2,3}', 'A∪B keeps 1, 2, and 3 once'), 'Union means “in either set”, including elements in both.'),
      step('INTERSECTION · 交集', 'Keep only the elements common to both sets.', '只保留两个集合共有的元素。', 'A∩B={2}', visual('A={1,2}   B={2,3}', '2 is the shared element'), 'Intersection asks for the overlap, not every element.'),
      step('CARTESIAN PRODUCT · 笛卡尔积', 'Build ordered pairs from A and B.', '从 A 与 B 构造有序对。', 'A×B={(1,2),(1,3),(2,2),(2,3)}', visual('(first from A, second from B)', 'four ordered pairs; order matters'), 'The phrase “list all ordered pairs” describes the visible construction.')
    ]
  },
  'mappings-injections-surjections-bijections': {
    activityMode: 'compare',
    activityKicker: 'COMPARE & CLASSIFY · 比较与分类',
    activityInstruction: 'Choose a mapping and classify it from the arrows—not from the picture alone.',
    actionQuestion: 'Which condition does each mapping satisfy?',
    steps: [
      step('MAPPING · 映射', 'Check that every input has exactly one output.', '检查每个输入恰好有一个输出。', 'f:A→B', visual('1→a   2→a', 'valid mapping; shared output allowed'), 'A mapping may send different inputs to the same output.'),
      step('INJECTIVE · 单射', 'Check that different inputs have different outputs.', '检查不同输入是否有不同输出。', 'f(1)=a, f(2)=b', visual('1→a   2→b   c is unused', 'one-to-one, but not onto'), 'An unused codomain element does not prevent injectivity.'),
      step('SURJECTIVE · 满射', 'Check that every codomain element is reached.', '检查陪域中的每个元素是否都被映到。', 'image(f)=B', visual('1→a   2→b   3→b', 'onto, but two inputs share b'), 'Surjectivity concerns coverage of the codomain.'),
      step('BIJECTIVE · 双射', 'Require both one-to-one and onto.', '同时要求单射和满射。', 'injective + surjective ⇒ bijective', visual('1↔a   2↔b', 'every output is used exactly once'), 'A bijection has an inverse mapping.')
    ]
  },
  'isomorphisms-of-sets': {
    activityMode: 'sync',
    activityKicker: 'SYNCHRONIZED CORRESPONDENCE · 同步对应',
    activityInstruction: 'Inspect the forward map, the inverse map, and the conclusion as three views of one correspondence.',
    actionQuestion: 'What makes two plain sets isomorphic?',
    steps: [
      step('FORWARD MAP · 正向映射', 'Pair every element of A with exactly one element of B.', '把 A 中每个元素与 B 中一个元素配对。', 'f:red↦1, gold↦2, navy↦3', visual('A → B', 'red→1   gold→2   navy→3'), 'No output is repeated or omitted.'),
      step('INVERSE MAP · 逆映射', 'Read the same pairing in reverse.', '反向读取同一组配对。', 'f⁻¹:1↦red, 2↦gold, 3↦navy', visual('B → A', '1→red   2→gold   3→navy'), 'The reverse direction is also a mapping because f is bijective.'),
      step('CONCLUSION · 结论', 'Recognize the bijection as a set isomorphism.', '把这个双射识别为集合同构。', 'A≅B', visual('|A|=|B|=3', 'isomorphic as plain sets'), 'For sets with extra operations, an isomorphism must preserve those operations too.')
    ]
  },
  'groups-rings-fields': {
    activityMode: 'structure',
    activityKicker: 'STRUCTURE MAP · 结构图',
    activityInstruction: 'Move through the hierarchy and notice which algebraic ability is added.',
    actionQuestion: 'How do group, ring, and field differ?',
    steps: [
      step('SET · 集合', 'Start with a collection of elements.', '先有一个元素集合。', 'S', visual('elements', 'no operation has been specified yet'), 'A bare set does not yet say how elements combine.'),
      step('GROUP · 群', 'Add one operation with the group properties.', '加入一个满足群公理的运算。', '(G,∗)', visual('one principal operation', 'identity and inverses belong to the structure'), 'The operation—not only the elements—defines the structure.'),
      step('RING · 环', 'Use addition and multiplication together.', '同时使用加法和乘法。', '(R,+,×)', visual('addition + multiplication', 'multiplicative inverses are not required for every nonzero element'), 'A ring has two related operations.'),
      step('FIELD · 域', 'Allow division by every nonzero element.', '允许除以任意非零元素。', '(F,+,×)', visual('ℚ ⊂ ℝ ⊂ ℂ', 'familiar number fields'), '“Work over the real numbers” identifies ℝ as the scalar field.')
    ]
  },
  'linear-spaces-mappings-isomorphisms': {
    activityMode: 'structure',
    activityKicker: 'RELATIONSHIP MAP · 关系图',
    activityInstruction: 'Choose one term to see its role in the same source-to-target picture.',
    actionQuestion: 'How are space, linear mapping, and isomorphism related?',
    steps: [
      step('LINEAR SPACE · 线性空间', 'Identify the source and target spaces.', '识别来源空间和目标空间。', 'V, W', visual('V   and   W', 'vectors can be added and scaled inside each space'), 'The spaces provide the operations a linear mapping must preserve.'),
      step('LINEAR MAPPING · 线性映射', 'Preserve addition and scalar multiplication.', '保持加法和数乘。', 'T(u+v)=T(u)+T(v), T(cu)=cT(u)', visual('V ──T──▶ W', 'two preservation conditions'), 'Linearity describes how T interacts with the vector-space operations.'),
      step('LINEAR ISOMORPHISM · 线性同构', 'Add bijectivity to a linear mapping.', '在线性映射基础上再要求双射。', 'linear + bijective ⇒ isomorphism', visual('V ◀──T⁻¹──▶ W', 'structure can be translated in both directions'), 'Isomorphic spaces have the same linear structure, expressed through different elements or coordinates.')
    ]
  },
  'matrices-from-systems-mappings': {
    activityMode: 'sync',
    activityKicker: 'SYNCHRONIZED VIEWS · 同步表示',
    activityInstruction: 'Select a representation. Matching coefficients keep the same colour and position meaning.',
    actionQuestion: 'How is the same linear system recorded?',
    steps: [
      step('EQUATIONS · 方程组', 'Read the coefficients in a fixed variable order.', '按照固定变量顺序读取系数。', '2x+y=3, x−y=0', visual('x-column   y-column   constants', 'the order x, y is shared by both equations'), 'Variable order determines the meaning of the matrix columns.'),
      step('COEFFICIENT MATRIX · 系数矩阵', 'Record only the coefficients.', '只记录未知量的系数。', 'A=[2 1; 1 −1]', visual('[ 2   1 ]', '[ 1  −1 ]   coefficients only'), 'The constants are not part of the coefficient matrix.'),
      step('AUGMENTED VIEW · 增广表示', 'Attach the constants or write the matrix equation.', '添加常数列，或写成矩阵方程。', '[A|b]=[2 1|3; 1 −1|0]   ⇔   Ax=b', visual('[ coefficients | constants ]', 'same system information, more compact notation'), 'The augmentation bar separates two roles; it is not another matrix entry.')
    ]
  },
  'matrix-types-equality-operations': {
    activityMode: 'compare',
    activityKicker: 'CONDITION CHECK · 条件比较',
    activityInstruction: 'Choose a relationship and check its condition before performing any arithmetic.',
    actionQuestion: 'What must be true before we compare or operate?',
    steps: [
      step('MATRIX TYPE · 矩阵类型', 'Name a matrix from its shape or entry pattern.', '根据形状或元素模式判断矩阵类型。', 'A∈ℝ²ˣ³', visual('2 rows × 3 columns', 'rectangular matrix'), 'Dimensions describe shape; special entry patterns describe types such as diagonal or symmetric.'),
      step('EQUALITY · 相等', 'Compare dimensions and corresponding entries.', '比较阶数和所有对应元素。', 'A=B', visual('same size + every matching entry equal', 'both conditions are required'), 'Equal-looking shapes alone do not make two matrices equal.'),
      step('LINEAR OPERATIONS · 线性运算', 'Use matching positions for addition and every entry for scalar multiplication.', '加法使用对应位置，数乘作用于每个元素。', 'A+B, cA', visual('A+B: same dimensions', 'cA: dimensions stay unchanged'), 'Matrix addition is not row-by-column multiplication.')
    ]
  },
  'homogeneous-nonhomogeneous-systems': {
    activityMode: 'compare',
    activityKicker: 'SIDE-BY-SIDE COMPARISON · 并排比较',
    activityInstruction: 'Switch cases and read the right-hand side before making a claim about solutions.',
    actionQuestion: 'What does the right-hand side tell us?',
    steps: [
      step('HOMOGENEOUS · 齐次', 'Recognize a zero right-hand side.', '识别右端为零向量。', 'Ax=0', visual('A·0=0', 'the trivial solution always exists'), 'A homogeneous system may also have nonzero solutions.'),
      step('NONHOMOGENEOUS · 非齐次', 'Recognize a nonzero right-hand side.', '识别右端为非零向量。', 'Ax=b, b≠0', visual('A·0=0≠b', 'the zero vector is not a solution'), 'A nonhomogeneous system may have one, infinitely many, or no solutions.'),
      step('STRUCTURE LINK · 结构联系', 'Compare one solution with the homogeneous solution space.', '比较一个特解与齐次解空间。', 'x=xₚ+xₕ', visual('particular solution + homogeneous solution', 'affine solution set when the system is consistent'), 'This is a preview of the solution-set structure developed later.')
    ]
  },
  'gaussian-elimination': {
    activityMode: 'sequence',
    activityKicker: 'STEPWISE PROCEDURE · 分步过程',
    activityInstruction: 'Follow the ordered procedure. Each state changes one mathematical idea.'
  },
  'consistency-number-of-solutions': {
    activityMode: 'decision',
    activityKicker: 'DECISION BOARD · 判定板',
    activityInstruction: 'Choose the echelon pattern and connect the visible evidence to the solution count.',
    actionQuestion: 'What does echelon form tell us about the number of solutions?',
    steps: [
      step('ONE SOLUTION · 唯一解', 'Find a pivot in every variable column and no contradiction.', '每个未知量列都有主元，且没有矛盾行。', 'rank(A)=rank([A|b])=n', visual('[ 1  0 | a ]', '[ 0  1 | b ]   no free variables'), 'Every variable is determined.'),
      step('INFINITELY MANY · 无穷多解', 'Find no contradiction and at least one free variable.', '没有矛盾行，但至少有一个自由变量。', 'rank(A)=rank([A|b])<n', visual('[ 1  * | * ]', '[ 0  0 | 0 ]   free variable'), 'A free variable produces a family of solutions.'),
      step('NO SOLUTION · 无解', 'Find a contradiction row.', '找到矛盾行。', '[0 0|1] ⇔ 0=1', visual('[ 0  0 | 1 ]', 'contradiction'), 'The system is inconsistent because no variable values can satisfy this row.')
    ]
  },
  'applications-linear-systems': {
    activityMode: 'sequence',
    activityKicker: 'MODELLING PROCEDURE · 建模过程',
    activityInstruction: 'Follow the natural modelling order from words to an interpreted answer.'
  }
};

for (const topic of topics) {
  if (!topic.demo) Object.assign(topic, actionContent[topic.slug], adaptiveActivityContent[topic.slug]);
}

export const topicBySlug = Object.fromEntries(topics.map(topic => [topic.slug, topic]));
