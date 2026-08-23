let checkSequence = 200;

const q = (type, question, options, answer, feedback) => ({
  id: `c2q${++checkSequence}`, type, question, options, answer, feedback
});

const actionVisual = (main, sub) => `<div class="action-object"><strong>${main}</strong><span>${sub}</span></div>`;
const view = (phase, english, chinese, notation, main, sub, note) => ({
  phase, english, chinese, notation, visual: actionVisual(main, sub), note
});

export const chapter2Sections = [
  { id: '2.1', title: 'Matrix Operations', zh: '矩阵的运算' },
  { id: '2.2', title: 'Elementary Matrices', zh: '初等矩阵' },
  { id: '2.3', title: 'Invertible Matrices', zh: '可逆矩阵' },
  { id: '2.4', title: 'Block Matrices', zh: '分块矩阵' },
  { id: '2.5', title: 'Matrix Rank and Matrix Equivalence', zh: '矩阵的秩与矩阵的相抵' },
  { id: '2.6', title: 'Linear Mappings and Matrices', zh: '线性映射与矩阵' },
  { id: '2.7', title: 'Extended Reading: Cryptography Using Inverse Matrices', zh: '拓展阅读：用逆矩阵加密的密码', extended: true }
];

function makeTopic(spec) {
  const firstNotation = spec.notation[0];
  const firstView = spec.views[0];
  const secondView = spec.views[1] || firstView;
  return {
    ...spec,
    chapter: 2,
    description: spec.definition,
    academic: spec.definition,
    professional: spec.chinese,
    hero: `<div class="matrix-concept-hero"><strong>${spec.heroMain}</strong><span>${spec.heroSub}</span></div>`,
    question: spec.heroQuestion,
    questionZh: spec.heroQuestionZh,
    actionQuestion: spec.actionQuestion || spec.heroQuestion,
    activityMode: spec.mode,
    activityKicker: spec.kicker,
    activityInstruction: spec.instruction,
    steps: spec.views,
    sentences: [
      [firstView.english, firstView.chinese, firstView.phase.toLowerCase()],
      [secondView.english, secondView.chinese, secondView.phase.toLowerCase()],
      ...spec.sentences
    ],
    checks: [
      q('TERM MATCH · 术语对应', `“${spec.checkTerm || spec.title}” 对应哪个中文术语？`, [spec.checkZh || spec.zh, ...spec.distractors], 0, `${spec.checkTerm || spec.title} 的标准中文术语是“${spec.checkZh || spec.zh}”。`),
      q('READ THE NOTATION · 符号读法', `${firstNotation[0]} 应怎样理解？`, [firstNotation[1], spec.notation[1][1], spec.notation[2][1]], 0, `${firstNotation[0]} 读作 “${firstNotation[1]}”，表示${firstNotation[2]}。`),
      q('MINIMUM CONCEPT · 最小概念', spec.conceptCheck[0], spec.conceptCheck[1], spec.conceptCheck[2], spec.conceptCheck[3])
    ],
    summary: [
      `I can recognize “${spec.title}” and its Chinese term.`,
      `I can read ${firstNotation[0]} aloud with support.`,
      `I can follow a classroom instruction about ${spec.summaryObject}.`,
      `I can identify ${spec.summaryEvidence}.`
    ]
  };
}

const commonDimensionVocab = [
  ['dimension', '维数 / 尺寸', '/dɪˈmenʃən/', 'The number of rows and columns of a matrix.'],
  ['entry', '元素', '/ˈentri/', 'A number in a specified row and column.']
];

export const chapter2Topics = [
  makeTopic({
    slug: 'matrix-addition-scalar-multiplication', section: '2.1', family: 'Procedure', mode: 'compare',
    title: 'Matrix Addition, Scalar Multiplication, and Their Laws', zh: '矩阵的加法、数乘及运算律', ipa: '/ˈmeɪtrɪks əˈdɪʃən; ˈskeɪlər ˌmʌltɪplɪˈkeɪʃən/',
    definition: 'Matrices of the same dimensions can be added entry by entry; scalar multiplication multiplies every entry by the same scalar.',
    chinese: '只有同型矩阵才能相加，并按对应元素相加；数乘是用同一个标量乘矩阵的每个元素。',
    intuition: '先听 dimension：加法要“同样大小”；再听 scalar：同一个数作用于所有元素。',
    heroMain: '[1  2; 0  1] + [2  0; 3  1] = [3  2; 3  2]', heroSub: 'same position ↔ corresponding entries',
    heroQuestion: 'Which operations are defined?', heroQuestionZh: '哪些运算有定义？', kicker: 'COMPARE & CLASSIFY · 比较与分类', instruction: '直接选择一种运算，检查它的条件与结果。',
    notation: [['A+B', 'A plus B', '矩阵 A 与 B 相加'], ['cA', 'c times A', '标量 c 乘矩阵 A'], ['A+B=B+A', 'A plus B equals B plus A', '矩阵加法满足交换律']],
    vocab: [['matrix addition', '矩阵加法', '/ˈmeɪtrɪks əˈdɪʃən/', 'Add corresponding entries of matrices with the same dimensions.'], ['scalar multiplication', '矩阵的数乘', '/ˈskeɪlər ˌmʌltɪplɪˈkeɪʃən/', 'Multiply every entry by one scalar.'], ...commonDimensionVocab],
    views: [
      view('ADD · 相加', 'Add the corresponding entries.', '把对应位置的元素相加。', 'A+B', '[1 2; 0 1] + [2 0; 3 1] = [3 2; 3 2]', 'Both matrices are 2 × 2.', 'The dimensions match, so every entry has a partner.'),
      view('SCALE · 数乘', 'Multiply every entry by negative two.', '用 −2 乘矩阵中的每个元素。', '−2A', '−2[1 2; 0 1] = [−2 −4; 0 −2]', 'The whole matrix is scaled.', 'No entry is skipped.'),
      view('NOT DEFINED · 无定义', 'Compare the dimensions before adding.', '相加前先比较矩阵的尺寸。', '(2×2)+(2×3)', '2 × 2  +  2 × 3  → not defined', 'The shapes do not match.', 'Matrix addition requires identical dimensions.')
    ],
    recognitionTitle: 'Check position, shape, and scope', recognitionZh: '识别对应位置、同型条件与整体数乘',
    recognition: [['Same position', 'aᵢⱼ combines with bᵢⱼ.', '对应元素的位置必须相同。'], ['Same dimensions', 'Addition needs equal row and column counts.', '不是只要求行数相同。'], ['Every entry', 'A scalar multiplies the complete matrix.', '数乘不能漏掉任何元素。']],
    sentences: [['The matrices have the same dimensions.', '这两个矩阵是同型矩阵。', 'have the same dimensions'], ['Distribute the scalar over the sum.', '把标量对矩阵和进行分配。', 'distribute over the sum']],
    distractors: ['矩阵乘法', '矩阵转置'], conceptCheck: ['哪一个矩阵和有定义？', ['(2×3)+(2×3)', '(2×3)+(3×2)', '(2×2)+(2×3)'], 0, '矩阵相加要求行数和列数都分别相同。'], summaryObject: 'entrywise addition and scalar multiplication', summaryEvidence: 'when two matrices can be added'
  }),

  makeTopic({
    slug: 'matrix-multiplication-dimensions', section: '2.1', family: 'Procedure', mode: 'sync',
    title: 'Matrix Multiplication and Dimension Compatibility', zh: '矩阵乘法与维数匹配', ipa: '/ˈmeɪtrɪks ˌmʌltɪplɪˈkeɪʃən ænd dɪˈmenʃən kəmˌpætəˈbɪləti/',
    definition: 'The product AB is defined when the number of columns of A equals the number of rows of B; each entry is a row-column dot product.',
    chinese: '当 A 的列数等于 B 的行数时，乘积 AB 才有定义；结果的每个元素由 A 的一行与 B 的一列作点积得到。',
    intuition: '先检查“内侧维数”，再用 row by column；不要把矩阵乘法误听成对应元素相乘。',
    heroMain: '(2×3)(3×2) → 2×2', heroSub: 'inner dimensions match; outer dimensions remain', heroQuestion: 'Why does a row meet a column?', heroQuestionZh: '为什么是一行乘一列？', kicker: 'SYNCHRONIZED VIEWS · 同步视图', instruction: '在维数、行列配对与结果元素之间切换。',
    notation: [['AB', 'A times B', '矩阵 A 乘矩阵 B'], ['(AB)ᵢⱼ', 'the i j entry of A B', '乘积 AB 的第 i 行第 j 列元素'], ['aᵢ·bⱼ', 'row i dot column j', '第 i 行与第 j 列作点积']],
    vocab: [['matrix product', '矩阵乘积', '/ˈmeɪtrɪks ˈprɑːdʌkt/', 'The result of a compatible row-by-column multiplication.'], ['compatible dimensions', '维数匹配', '/kəmˈpætəbəl dɪˈmenʃənz/', 'The inner dimensions are equal.'], ['row-column product', '行列乘积', '/roʊ ˈkɑːləm ˈprɑːdʌkt/', 'One row is paired with one column.'], ...commonDimensionVocab.slice(1)],
    views: [
      view('DIMENSIONS · 维数', 'Check the inner dimensions first.', '先检查两个内侧维数。', '(2×3)(3×2)', '2 × 3  ·  3 × 2  →  2 × 2', '3 matches 3.', 'The outer dimensions give the shape of the product.'),
      view('PAIRING · 配对', 'Multiply row one by column one.', '用第一行乘第一列。', 'c₁₁=[1,2]·[3,4]', '1·3 + 2·4 = 11', 'row 1 ↔ column 1', 'A dot product, not entrywise multiplication, creates c₁₁.'),
      view('ORDER · 次序', 'Keep the order of multiplication.', '保持矩阵乘法的次序。', 'AB ≠ BA in general', 'AB defined  ⇏  BA defined', 'Order matters.', 'Matrix multiplication is generally not commutative.')
    ],
    recognitionTitle: 'Read a matrix product before calculating', recognitionZh: '先看维数，再认行列配对与乘法次序',
    recognition: [['Inner dimensions', '(m×n)(n×p) is compatible.', '相邻的 n 必须一致。'], ['Outer dimensions', 'The product has size m×p.', '结果保留外侧维数。'], ['Order matters', 'AB and BA are different questions.', '不能随意交换因子。']],
    sentences: [['The inner dimensions must agree.', '内侧维数必须一致。', 'must agree'], ['The product is a two-by-two matrix.', '乘积是一个二阶矩阵。', 'two-by-two matrix']],
    distractors: ['矩阵数乘', '矩阵加法'], conceptCheck: ['(2×3)(3×4) 的结果是什么尺寸？', ['2×4', '3×3', '4×2'], 0, '内侧维数 3 匹配，外侧维数 2 和 4 决定结果为 2×4。'], summaryObject: 'row-column multiplication', summaryEvidence: 'dimension compatibility and the product size'
  }),

  makeTopic({
    slug: 'matrix-powers-polynomials', section: '2.1', family: 'Procedure', mode: 'sequence',
    title: 'Powers and Polynomials of Square Matrices', zh: '方阵的幂与矩阵多项式', ipa: '/ˈpaʊərz ænd ˌpɑːliˈnoʊmiəlz əv skwer ˈmeɪtrɪsiːz/',
    definition: 'Powers Aᵏ are repeated products of a square matrix A, and a polynomial p(A) combines compatible powers with scalar coefficients.',
    chinese: '方阵的幂 Aᵏ 表示 A 的重复相乘；矩阵多项式 p(A) 用标量系数组合同阶的 A 的各次幂与单位矩阵。',
    intuition: '听到 A squared 就是 A·A；常数项要写成常数乘单位矩阵，不能直接把数加到矩阵上。',
    heroMain: 'p(A)=A²−2A+I', heroSub: 'all terms are square matrices of the same size', heroQuestion: 'How do we substitute a matrix into a polynomial?', heroQuestionZh: '怎样把矩阵代入多项式？', kicker: 'STEPWISE PROCEDURE · 顺序过程', instruction: '按真实计算顺序构造一个矩阵多项式。',
    notation: [['A²', 'A squared', 'A 的平方，即 A 乘 A'], ['A⁰=I', 'A to the zero equals I', 'A 的零次幂定义为同阶单位矩阵'], ['p(A)', 'p of A', '矩阵 A 代入多项式 p']],
    vocab: [['square matrix', '方阵', '/skwer ˈmeɪtrɪks/', 'A matrix with the same number of rows and columns.'], ['matrix power', '矩阵的幂', '/ˈmeɪtrɪks ˈpaʊər/', 'A repeated product of the same square matrix.'], ['matrix polynomial', '矩阵多项式', '/ˈmeɪtrɪks ˌpɑːliˈnoʊmiəl/', 'A polynomial evaluated at a square matrix.'], ['identity matrix', '单位矩阵', '/aɪˈdentəti ˈmeɪtrɪks/', 'The multiplicative identity I.']],
    views: [
      view('IDENTIFY · 识别', 'Start with a square matrix.', '从一个方阵开始。', 'A=[1 1;0 1]', 'A = [1 1; 0 1]', '2 × 2 square matrix', 'Powers are defined because A can multiply itself.'),
      view('POWER · 求幂', 'Multiply A by itself.', '用 A 自乘。', 'A²=A·A', 'A² = [1 2; 0 1]', 'row-by-column multiplication', 'This is a repeated matrix product.'),
      view('COMBINE · 组合', 'Combine the powers with scalar coefficients.', '用标量系数组合各次幂。', 'p(A)=A²−2A+I', 'p(A) = [0 0; 0 0]', 'I is the constant matrix term.', 'All terms are 2 × 2 and can be added.')
    ],
    recognitionTitle: 'Separate powers, coefficients, and the identity', recognitionZh: '区分矩阵的幂、标量系数与单位矩阵常数项',
    recognition: [['A²', 'It means A·A.', '不是把每个元素分别平方。'], ['2A', 'It is scalar multiplication.', '2 是标量系数。'], ['Constant term', 'The number c becomes cI.', '这样各项尺寸才一致。']],
    sentences: [['Evaluate the polynomial at A.', '把 A 代入这个多项式。', 'evaluate at A'], ['Replace the constant term by the identity matrix.', '用单位矩阵表示常数项。', 'identity matrix']],
    distractors: ['矩阵的迹', '矩阵的转置'], conceptCheck: ['在 p(A)=A²+3 中，常数项应写成什么？', ['3I', '每个元素加 3', '3A'], 0, '矩阵多项式的常数项是 3I，保证它与 A² 同阶并可相加。'], summaryObject: 'matrix powers and polynomial evaluation', summaryEvidence: 'why the constant term uses the identity matrix'
  }),

  makeTopic({
    slug: 'trace-square-matrix', section: '2.1', family: 'Concept', mode: 'sync',
    title: 'Trace of a Square Matrix', zh: '方阵的迹', ipa: '/treɪs əv ə skwer ˈmeɪtrɪks/',
    definition: 'The trace of a square matrix is the sum of its main-diagonal entries.', chinese: '方阵的迹等于主对角线上所有元素的和，只对方阵定义。', intuition: '听到 trace，眼睛先沿左上到右下的主对角线走一遍，再求和。',
    heroMain: 'tr([2 1; 0 3]) = 2+3 = 5', heroSub: 'main diagonal only', heroQuestion: 'Which entries contribute to the trace?', heroQuestionZh: '哪些元素计入矩阵的迹？', kicker: 'SYNCHRONIZED VIEWS · 同步视图', instruction: '把矩阵位置、对角线和求和式同步对应。',
    notation: [['tr(A)', 'the trace of A', '矩阵 A 的迹'], ['a₁₁+a₂₂', 'a one one plus a two two', '二阶矩阵主对角元素之和'], ['tr(A+B)', 'the trace of A plus B', '矩阵和的迹']],
    vocab: [['trace', '迹', '/treɪs/', 'The sum of the main-diagonal entries.'], ['main diagonal', '主对角线', '/meɪn daɪˈæɡənəl/', 'Positions a₁₁, a₂₂, and so on.'], ['diagonal entry', '对角元素', '/daɪˈæɡənəl ˈentri/', 'An entry aᵢᵢ on the main diagonal.'], ['square matrix', '方阵', '/skwer ˈmeɪtrɪks/', 'A matrix for which trace is defined.']],
    views: [view('MATRIX · 矩阵', 'Locate the main diagonal.', '找出主对角线。', 'A=[2 1;0 3]', '[2  1; 0  3]', 'select 2 and 3', 'Only entries whose row and column indices agree are selected.'), view('SUM · 求和', 'Add the diagonal entries.', '把主对角元素相加。', 'tr(A)=2+3', '2 + 3 = 5', 'trace is a scalar', 'The off-diagonal entries do not contribute.'), view('PROPERTY · 性质', 'The trace is linear.', '迹具有线性。', 'tr(A+B)=tr(A)+tr(B)', 'trace of a sum = sum of traces', 'same-size square matrices', 'Linearity follows from adding corresponding diagonal entries.')],
    recognitionTitle: 'Follow the main diagonal', recognitionZh: '识别主对角线、标量结果与定义范围', recognition: [['Main diagonal', 'Use a₁₁,a₂₂,…,aₙₙ.', '从左上到右下。'], ['Scalar result', 'The trace is one number.', '结果不是一个矩阵。'], ['Square only', 'A rectangular matrix has no trace here.', '本课程只对方阵定义迹。']],
    sentences: [['Take the sum of the diagonal entries.', '求所有对角元素之和。', 'take the sum'], ['The trace is invariant under transposition.', '转置不改变矩阵的迹。', 'invariant under transposition']],
    distractors: ['行列式', '秩'], conceptCheck: ['矩阵 [2 7; 1 3] 的迹是多少？', ['5', '10', '6'], 0, '只加主对角元素：2+3=5。'], summaryObject: 'the trace', summaryEvidence: 'the main-diagonal entries that contribute'
  }),

  makeTopic({
    slug: 'transpose-symmetric-skew', section: '2.1', family: 'Structure', mode: 'compare',
    title: 'Transpose, Symmetric Matrices, and Skew-Symmetric Matrices', zh: '转置、对称矩阵与反对称矩阵', ipa: '/trænˈspoʊz; sɪˈmetrɪk; ˌskjuː sɪˈmetrɪk/',
    definition: 'Transposition interchanges rows and columns; a square matrix is symmetric when Aᵀ=A and skew-symmetric when Aᵀ=−A.', chinese: '转置把矩阵的行与列互换；方阵满足 Aᵀ=A 时为对称矩阵，满足 Aᵀ=−A 时为反对称矩阵。', intuition: '把主对角线当作“镜面”：对称矩阵两侧相同，反对称矩阵两侧互为相反数。',
    heroMain: 'Aᵀ=A   versus   Aᵀ=−A', heroSub: 'same transpose, different defining conditions', heroQuestion: 'Which condition classifies the matrix?', heroQuestionZh: '用哪个条件判断矩阵类型？', kicker: 'COMPARE & CLASSIFY · 比较与分类', instruction: '直接比较转置、对称与反对称三个定义边界。',
    notation: [['Aᵀ', 'A transpose', '矩阵 A 的转置'], ['Aᵀ=A', 'A transpose equals A', 'A 是对称矩阵'], ['Aᵀ=−A', 'A transpose equals negative A', 'A 是反对称矩阵']],
    vocab: [['transpose', '转置', '/trænˈspoʊz/', 'The matrix formed by interchanging rows and columns.'], ['symmetric matrix', '对称矩阵', '/sɪˈmetrɪk ˈmeɪtrɪks/', 'A square matrix satisfying Aᵀ=A.'], ['skew-symmetric matrix', '反对称矩阵', '/ˌskjuː sɪˈmetrɪk ˈmeɪtrɪks/', 'A square matrix satisfying Aᵀ=−A.'], ['main diagonal', '主对角线', '/meɪn daɪˈæɡənəl/', 'The fixed positions under transposition.']],
    views: [view('TRANSPOSE · 转置', 'Interchange the rows and columns.', '把行与列互换。', '[1 2;3 4]ᵀ', '[1 2; 3 4] → [1 3; 2 4]', 'aᵢⱼ becomes aⱼᵢ', 'Dimensions m×n become n×m.'), view('SYMMETRIC · 对称', 'Compare A transpose with A.', '比较 Aᵀ 与 A。', 'Aᵀ=A', '[1 2; 2 3]', 'entries mirror equally', 'Matching entries across the main diagonal are equal.'), view('SKEW · 反对称', 'Compare A transpose with negative A.', '比较 Aᵀ 与 −A。', 'Aᵀ=−A', '[0 2; −2 0]', 'diagonal entries are zero', 'Over the real numbers, each diagonal entry must equal its own negative.')],
    recognitionTitle: 'Classify by equations, not appearance', recognitionZh: '用定义等式而不是外观分类', recognition: [['Transpose', 'Rows become columns.', '非方阵也能转置。'], ['Symmetric', 'Aᵀ=A.', '必须是方阵。'], ['Skew-symmetric', 'Aᵀ=−A.', '实反对称矩阵主对角线为零。']],
    sentences: [['Take the transpose of the matrix.', '求这个矩阵的转置。', 'take the transpose'], ['This matrix is symmetric about the main diagonal.', '这个矩阵关于主对角线对称。', 'symmetric about']],
    distractors: ['正交矩阵', '可逆矩阵'], conceptCheck: ['哪个矩阵是反对称矩阵？', ['[0 2;−2 0]', '[1 2;2 1]', '[0 2;2 0]'], 0, '反对称矩阵满足 Aᵀ=−A，因此非对角成对元素互为相反数且主对角为零。'], summaryObject: 'transposition and symmetry conditions', summaryEvidence: 'the equations Aᵀ=A and Aᵀ=−A'
  }),

  makeTopic({
    slug: 'matrix-operations-determinants-intro', section: '2.1', family: 'Structure', mode: 'structure',
    title: 'Matrix Operations and Determinants: Introductory Relationships', zh: '矩阵运算与行列式的关系初步', ipa: '/ˈmeɪtrɪks ˌɑːpəˈreɪʃənz ænd dɪˈtɜːrmɪnənts/',
    definition: 'For square matrices, determinant relationships preview how products, transposes, and inverses affect one scalar without developing determinant theory.', chinese: '对方阵而言，行列式把某些矩阵运算对应为标量关系：det(AB)=det(A)det(B)、det(Aᵀ)=det(A)，可逆时 det(A⁻¹)=1/det(A)。本页只作关系预习。', intuition: '这里先认句型和公式；行列式的定义与完整性质留到第三章。',
    heroMain: 'det(AB)=det(A)det(B)', heroSub: 'a product relationship, not entrywise multiplication', heroQuestion: 'How do operations change the determinant?', heroQuestionZh: '矩阵运算怎样影响行列式？', kicker: 'STRUCTURE MAP · 结构图', instruction: '选择一个矩阵运算，查看它对应的行列式关系。',
    notation: [['det(AB)', 'the determinant of A B', '乘积 AB 的行列式'], ['det(Aᵀ)', 'the determinant of A transpose', 'A 的转置的行列式'], ['det(A⁻¹)', 'the determinant of A inverse', 'A 的逆矩阵的行列式']],
    vocab: [['determinant', '行列式', '/dɪˈtɜːrmɪnənt/', 'A scalar associated with a square matrix.'], ['product rule', '乘积公式', '/ˈprɑːdʌkt ruːl/', 'det(AB)=det(A)det(B).'], ['transpose', '转置', '/trænˈspoʊz/', 'An operation that leaves the determinant unchanged.'], ['inverse', '逆矩阵', '/ˈɪnvɜːrs/', 'When it exists, its determinant is reciprocal.']],
    views: [view('PRODUCT · 乘积', 'The determinant of a product is the product of the determinants.', '乘积的行列式等于行列式的乘积。', 'det(AB)=det(A)det(B)', 'AB → det(A)·det(B)', 'A and B are square of the same size.', 'This is not det(A+B).'), view('TRANSPOSE · 转置', 'Transposition preserves the determinant.', '转置保持行列式不变。', 'det(Aᵀ)=det(A)', 'A ↔ Aᵀ  | same determinant', 'preserved scalar', 'Rows and columns exchange, but the determinant is unchanged.'), view('INVERSE · 逆', 'The inverse has the reciprocal determinant.', '逆矩阵的行列式是原行列式的倒数。', 'det(A⁻¹)=1/det(A)', 'A⁻¹ → 1/det(A)', 'requires det(A)≠0', 'The formula applies only when A is invertible.')],
    recognitionTitle: 'Keep the operations distinct', recognitionZh: '区分乘积、转置与逆所对应的关系', recognition: [['Product', 'Multiplication becomes scalar multiplication.', 'det(AB) 不是 det(A)+det(B)。'], ['Transpose', 'The value is unchanged.', '只预习这一不变量。'], ['Inverse', 'The value becomes reciprocal.', '前提是 A 可逆。']],
    sentences: [['The determinant of a product factors.', '乘积的行列式可以分解。', 'determinant of a product'], ['We will prove this property in Chapter Three.', '我们将在第三章证明这个性质。', 'prove this property']],
    distractors: ['矩阵的迹', '矩阵等价'], conceptCheck: ['若 det(A)=2 且 A 可逆，则 det(A⁻¹) 是多少？', ['1/2', '−2', '2'], 0, '可逆矩阵满足 det(A⁻¹)=1/det(A)=1/2。'], summaryObject: 'introductory determinant relationships', summaryEvidence: 'what product, transpose, and inverse do to det(A)'
  }),

  makeTopic({
    slug: 'elementary-matrices-row-operations', section: '2.2', family: 'Procedure', mode: 'sync',
    title: 'Elementary Matrices and Elementary Row Operations', zh: '初等矩阵与初等行变换', ipa: '/ˌelɪˈmentəri ˈmeɪtrɪsiːz ænd roʊ ˌɑːpəˈreɪʃənz/',
    definition: 'An elementary matrix is obtained by applying one elementary row operation to an identity matrix, and left multiplication by it performs the same row operation.', chinese: '对单位矩阵施行一次初等行变换得到初等矩阵 E；左乘 EA 会对 A 施行同一个行变换。', intuition: '把 E 看成“记录了一次行操作”的矩阵；左乘时，这条操作作用到 A 的整行。',
    heroMain: 'E=[1 0; −2 1]  ⇒  EA', heroSub: 'R₂ ← R₂−2R₁', heroQuestion: 'How can a matrix encode a row operation?', heroQuestionZh: '矩阵怎样记录一次行变换？', kicker: 'SYNCHRONIZED VIEWS · 同步视图', instruction: '同步观察单位矩阵的变化、初等矩阵与左乘效果。',
    notation: [['EA', 'E times A', '初等矩阵 E 左乘 A'], ['R₂←R₂−2R₁', 'replace row two by row two minus two row one', '第二行减去第一行的两倍'], ['E⁻¹', 'E inverse', '初等矩阵 E 的逆矩阵']],
    vocab: [['elementary matrix', '初等矩阵', '/ˌelɪˈmentəri ˈmeɪtrɪks/', 'A matrix obtained from I by one elementary row operation.'], ['left multiplication', '左乘', '/left ˌmʌltɪplɪˈkeɪʃən/', 'Multiplication with E on the left.'], ['identity matrix', '单位矩阵', '/aɪˈdentəti ˈmeɪtrɪks/', 'The starting matrix used to create E.'], ['elementary row operation', '初等行变换', '/ˌelɪˈmentəri roʊ ˌɑːpəˈreɪʃən/', 'The row action encoded by E.']],
    views: [view('IDENTITY · 单位矩阵', 'Apply one row operation to the identity matrix.', '对单位矩阵施行一次行变换。', 'I → E', '[1 0; 0 1] → [1 0; −2 1]', 'R₂←R₂−2R₁', 'The result E records exactly one operation.'), view('LEFT PRODUCT · 左乘', 'Left-multiply A by E.', '用 E 左乘 A。', 'EA', 'E[1 1; 2 3] = [1 1; 0 1]', 'the same row operation appears', 'The whole second row changes while the first remains fixed.'), view('UNDO · 撤销', 'Use the inverse elementary matrix to undo the operation.', '用逆初等矩阵撤销这次操作。', 'E⁻¹(EA)=A', 'E⁻¹=[1 0; 2 1]', 'inverse row operation', 'Every elementary matrix is invertible.')],
    recognitionTitle: 'Match E to its row action', recognitionZh: '把初等矩阵、左乘与行变换对应起来', recognition: [['One operation', 'E comes from exactly one elementary row operation.', '不是完整消元过程。'], ['Left side', 'EA changes rows of A.', '右乘通常改变列，不是本页规则。'], ['Invertible', 'E⁻¹ records the reverse operation.', '每个初等矩阵都可逆。']],
    sentences: [['Premultiply A by the elementary matrix.', '用初等矩阵左乘 A。', 'premultiply A'], ['This multiplication performs the same row operation.', '这个乘法执行同一个行变换。', 'performs the same']],
    distractors: ['单位矩阵', '对角矩阵'], conceptCheck: ['若 E 由 I 的 R₁↔R₂ 得到，那么 EA 做什么？', ['交换 A 的第一、第二行', '交换 A 的第一、第二列', '把 A 转置'], 0, '初等矩阵左乘会在 A 上执行与生成 E 时相同的行变换。'], summaryObject: 'elementary matrices and row operations', summaryEvidence: 'the row action encoded by left multiplication'
  }),

  makeTopic({
    slug: 'elementary-matrix-properties-applications', section: '2.2', family: 'Structure', mode: 'structure',
    title: 'Properties and Applications of Elementary Matrices', zh: '初等矩阵的性质与应用', ipa: '/ˈprɑːpərtiz ænd ˌæplɪˈkeɪʃənz əv ˌelɪˈmentəri ˈmeɪtrɪsiːz/',
    definition: 'Elementary matrices are invertible, their inverses are elementary, and products of elementary matrices encode sequences of row operations.', chinese: '初等矩阵都可逆，其逆矩阵仍是初等矩阵；多个初等矩阵的乘积可记录一串初等行变换。', intuition: '一块 E 记录一个动作；Eₖ⋯E₁ 按从右到左的顺序记录多步动作。',
    heroMain: 'E₂E₁A = U', heroSub: 'a product of elementary matrices records a row-reduction sequence', heroQuestion: 'What structure does a product of elementary matrices preserve?', heroQuestionZh: '初等矩阵的乘积记录了什么结构？', kicker: 'STRUCTURE MAP · 结构图', instruction: '查看可逆性、复合与因子分解之间的联系。',
    notation: [['E⁻¹', 'E inverse', '初等矩阵的逆'], ['E₂E₁A', 'E two E one A', '先由 E₁ 再由 E₂ 左乘 A'], ['A=E₁⁻¹E₂⁻¹U', 'A equals E one inverse E two inverse U', '逆向恢复 A']],
    vocab: [['inverse elementary matrix', '逆初等矩阵', '/ˈɪnvɜːrs ˌelɪˈmentəri ˈmeɪtrɪks/', 'An elementary matrix that undoes the original row operation.'], ['product', '乘积', '/ˈprɑːdʌkt/', 'A composition of several elementary row actions.'], ['factorization', '分解', '/ˌfæktərəˈzeɪʃən/', 'Writing a matrix as a product of simpler matrices.'], ['row-equivalent', '行等价的', '/roʊ ɪˈkwɪvələnt/', 'Connected by a sequence of row operations.']],
    views: [view('INVERSE · 可逆', 'Every elementary matrix is invertible.', '每个初等矩阵都可逆。', 'EE⁻¹=I', 'row operation ↔ reverse row operation', 'both are elementary', 'The inverse performs the legal reverse action.'), view('COMPOSITION · 复合', 'Read the rightmost operation first.', '先执行最右边的操作。', 'E₂E₁A', 'A → E₁A → E₂E₁A', 'operation order matters', 'Matrix products encode the order of row operations.'), view('APPLICATION · 应用', 'Express an invertible matrix as a product of elementary matrices.', '把可逆矩阵表示为初等矩阵的乘积。', 'A=E₁⁻¹⋯Eₖ⁻¹', 'A → U=I → reverse', 'row reduction gives factors', 'This connects row reduction with matrix factorization.')],
    recognitionTitle: 'Read an elementary-matrix chain', recognitionZh: '识别逆操作、乘积顺序与可逆矩阵分解', recognition: [['Reverse action', 'E⁻¹ undoes E.', '交换行的逆仍是自身。'], ['Right to left', 'E₁ acts before E₂ in E₂E₁A.', '函数式复合顺序。'], ['Invertible product', 'A product of invertible E matrices is invertible.', '这支持可逆性判断。']],
    sentences: [['A sequence of row operations can be written as a product.', '一串行变换可以写成矩阵乘积。', 'written as a product'], ['Undo the operations in reverse order.', '按相反顺序撤销这些操作。', 'in reverse order']],
    distractors: ['分块矩阵的应用', '矩阵的迹'], conceptCheck: ['在 E₂E₁A 中，哪个初等矩阵先作用？', ['E₁', 'E₂', '同时作用'], 0, '矩阵乘积从右向左作用，因此 E₁ 先作用于 A。'], summaryObject: 'products of elementary matrices', summaryEvidence: 'inverse actions and composition order'
  }),

  makeTopic({
    slug: 'invertible-matrices-definition-properties', section: '2.3', family: 'Concept', mode: 'compare',
    title: 'Definition and Properties of Invertible Matrices', zh: '可逆矩阵的定义与性质', ipa: '/ɪnˈvɜːrtəbəl ˈmeɪtrɪsiːz/',
    definition: 'A square matrix A is invertible if there is a matrix A⁻¹ such that AA⁻¹=A⁻¹A=I.', chinese: '若方阵 A 存在同阶矩阵 A⁻¹，使 AA⁻¹=A⁻¹A=I，则 A 可逆；这样的逆矩阵唯一。', intuition: '逆矩阵是能从左右两侧撤销 A 的矩阵，不是把每个非零元素分别取倒数。',
    heroMain: 'AA⁻¹=A⁻¹A=I', heroSub: 'two-sided matrix inverse', heroQuestion: 'What must an inverse matrix undo?', heroQuestionZh: '逆矩阵必须从哪两侧撤销 A？', kicker: 'COMPARE & CLASSIFY · 比较与分类', instruction: '用定义条件比较可逆、不可逆与错误的“逐项倒数”。',
    notation: [['A⁻¹', 'A inverse', '矩阵 A 的逆'], ['AA⁻¹=I', 'A times A inverse equals I', '右侧相乘得到单位矩阵'], ['(AB)⁻¹=B⁻¹A⁻¹', 'the inverse of A B equals B inverse A inverse', '乘积求逆时次序反转']],
    vocab: [['invertible', '可逆的', '/ɪnˈvɜːrtəbəl/', 'Having a two-sided matrix inverse.'], ['inverse matrix', '逆矩阵', '/ˈɪnvɜːrs ˈmeɪtrɪks/', 'The unique matrix that produces I on both sides.'], ['identity matrix', '单位矩阵', '/aɪˈdentəti ˈmeɪtrɪks/', 'The target product AA⁻¹.'], ['singular', '奇异的 / 不可逆的', '/ˈsɪŋɡjələr/', 'A square matrix that is not invertible.']],
    views: [view('INVERTIBLE · 可逆', 'Verify the product in both orders.', '验证左右两个乘积。', 'AA⁻¹=A⁻¹A=I', '[2 0;0 3] ↔ [1/2 0;0 1/3]', 'both products equal I', 'A two-sided inverse exists.'), view('SINGULAR · 不可逆', 'No inverse exists for this matrix.', '这个矩阵不存在逆矩阵。', 'A=[1 2;2 4]', 'row 2 = 2 row 1', 'dependent rows', 'The matrix collapses information and cannot be undone.'), view('NOT RECIPROCAL · 非逐项倒数', 'Do not take reciprocals entry by entry.', '不要逐个元素取倒数。', 'A⁻¹ ≠ [1/aᵢⱼ]', '[1 1;0 1]⁻¹ = [1 −1;0 1]', 'matrix inverse uses multiplication', 'Inverse is defined by the identity product.')],
    recognitionTitle: 'Use the identity test', recognitionZh: '用单位矩阵乘积识别逆矩阵', recognition: [['Square matrix', 'Only square matrices are invertible in this course.', '非方阵没有通常意义的逆。'], ['Two-sided identity', 'Both products equal I.', '定义强调左右两侧。'], ['Unique inverse', 'There is at most one A⁻¹.', '不能有两个不同的逆。']],
    sentences: [['Show that the matrix is invertible.', '证明这个矩阵可逆。', 'show that'], ['The inverse of a product reverses the order.', '乘积求逆要反转次序。', 'reverses the order']],
    distractors: ['对称矩阵', '相抵矩阵'], conceptCheck: ['哪个等式定义了 A⁻¹？', ['AA⁻¹=A⁻¹A=I', 'A+A⁻¹=I', 'A⁻¹=[1/aᵢⱼ]'], 0, '矩阵逆由左右乘积都等于单位矩阵定义。'], summaryObject: 'matrix inverses', summaryEvidence: 'the two-sided identity condition'
  }),

  makeTopic({
    slug: 'adjugate-matrices', section: '2.3', family: 'Structure', mode: 'sync',
    title: 'Adjugate Matrices', zh: '伴随矩阵', ipa: '/ˈædʒəɡət ˈmeɪtrɪsiːz/',
    definition: 'The adjugate adj(A) is the transpose of the cofactor matrix and satisfies A·adj(A)=adj(A)·A=det(A)I.', chinese: '伴随矩阵 adj(A) 是代数余子式矩阵的转置，并满足 A·adj(A)=adj(A)·A=det(A)I。', intuition: '先按位置算代数余子式，再转置；不要把 adjugate 与普通 transpose 混为一谈。',
    heroMain: 'A·adj(A)=det(A)I', heroSub: 'the bridge from cofactors to an inverse', heroQuestion: 'Why is the cofactor matrix transposed?', heroQuestionZh: '为什么代数余子式矩阵还要转置？', kicker: 'SYNCHRONIZED VIEWS · 同步视图', instruction: '同步查看余子式位置、转置与核心恒等式。',
    notation: [['adj(A)', 'the adjugate of A', '矩阵 A 的伴随矩阵'], ['Cᵀ', 'C transpose', '代数余子式矩阵 C 的转置'], ['A adj(A)', 'A times the adjugate of A', 'A 与其伴随矩阵相乘']],
    vocab: [['adjugate matrix', '伴随矩阵', '/ˈædʒəɡət ˈmeɪtrɪks/', 'The transpose of the cofactor matrix.'], ['cofactor', '代数余子式', '/ˈkoʊfæktər/', 'A signed minor used to form the cofactor matrix.'], ['minor', '余子式', '/ˈmaɪnər/', 'A determinant obtained after deleting a row and a column.'], ['transpose', '转置', '/trænˈspoʊz/', 'The final position swap in adj(A)=Cᵀ.']],
    views: [view('COFACTORS · 余子式', 'Form the cofactor matrix.', '组成代数余子式矩阵。', 'C=[Cᵢⱼ]', 'A=[a b;c d] → C=[d −c;−b a]', 'signed minors stay in their positions', 'This intermediate matrix is not yet adj(A).'), view('TRANSPOSE · 转置', 'Transpose the cofactor matrix.', '把代数余子式矩阵转置。', 'adj(A)=Cᵀ', 'adj(A)=[d −b;−c a]', 'rows and columns interchange', 'The transpose places cofactors in the positions required by multiplication.'), view('IDENTITY · 恒等式', 'Multiply A by its adjugate.', '用 A 乘它的伴随矩阵。', 'A adj(A)=det(A)I', '[a b;c d][d −b;−c a]=(ad−bc)I', 'off-diagonal entries cancel', 'This identity leads to the inverse formula when det(A)≠0.')],
    recognitionTitle: 'Do not stop before the transpose', recognitionZh: '区分余子式、代数余子式矩阵与伴随矩阵', recognition: [['Minor', 'Delete a row and column, then take a determinant.', '还没有符号因子。'], ['Cofactor matrix', 'Place signed minors at Cᵢⱼ.', '这是中间对象。'], ['Adjugate', 'Transpose the cofactor matrix.', 'adj(A)=Cᵀ。']],
    sentences: [['Form the matrix of cofactors.', '组成代数余子式矩阵。', 'matrix of cofactors'], ['Take its transpose to obtain the adjugate.', '取其转置得到伴随矩阵。', 'obtain the adjugate']],
    distractors: ['转置矩阵', '初等矩阵'], conceptCheck: ['若 C 是 A 的代数余子式矩阵，则 adj(A) 等于什么？', ['Cᵀ', 'C', 'Aᵀ'], 0, '伴随矩阵定义为代数余子式矩阵的转置：adj(A)=Cᵀ。'], summaryObject: 'the adjugate construction', summaryEvidence: 'the cofactor, transpose, and identity relationship'
  }),

  makeTopic({
    slug: 'criteria-for-invertibility', section: '2.3', family: 'Structure', mode: 'decision',
    title: 'Criteria for Invertibility', zh: '矩阵可逆的判定', ipa: '/kraɪˈtɪriə fər ɪnˌvɜːrtəˈbɪləti/',
    definition: 'For a square matrix, several equivalent conditions identify invertibility, including a pivot in every row, rank n, and reduction to I.', chinese: '对 n 阶方阵，存在逆矩阵、秩为 n、每行都有主元、可经初等行变换化为 I 等条件彼此等价。', intuition: '不同课堂句子可能在说同一件事：矩阵没有丢失任何方向或自由度。',
    heroMain: 'A invertible ⇔ rank(A)=n ⇔ A ~ I', heroSub: 'equivalent criteria for an n × n matrix', heroQuestion: 'Which observation is enough to conclude invertibility?', heroQuestionZh: '看到哪个条件就能判定可逆？', kicker: 'DECISION BOARD · 判定板', instruction: '从可观察条件直接走向“可逆 / 不可逆”结论。',
    notation: [['rank(A)=n', 'the rank of A equals n', 'A 是 n 阶满秩方阵'], ['A~I', 'A is row-equivalent to I', 'A 与单位矩阵行等价'], ['Ax=0', 'A x equals zero', '齐次系统']],
    vocab: [['invertibility criterion', '可逆判据', '/ɪnˌvɜːrtəˈbɪləti kraɪˈtɪriən/', 'A condition equivalent to the existence of A⁻¹.'], ['full rank', '满秩', '/fʊl ræŋk/', 'Rank equals n for an n×n matrix.'], ['pivot in every row', '每行都有主元', '/ˈpɪvət ɪn ˈevri roʊ/', 'A row-reduction sign of full rank.'], ['row-equivalent', '行等价', '/roʊ ɪˈkwɪvələnt/', 'Connected by elementary row operations.']],
    views: [view('FULL RANK · 满秩', 'If the rank is n, the matrix is invertible.', '若秩为 n，则矩阵可逆。', 'rank(A)=n', 'n pivots → invertible', 'square n × n matrix', 'No pivot is missing.'), view('REDUCES TO I · 化为 I', 'If A row-reduces to I, it is invertible.', '若 A 可行化简为 I，则 A 可逆。', 'A~I', 'A → row operations → I', 'all rows contain pivots', 'The row operations can be reversed to construct A⁻¹.'), view('MISSING PIVOT · 缺少主元', 'A missing pivot makes the square matrix singular.', '方阵缺少主元时不可逆。', 'rank(A)<n', 'fewer than n pivots → singular', 'information is lost', 'Any one failed equivalent criterion is enough to reject invertibility.')],
    recognitionTitle: 'Equivalent language, one conclusion', recognitionZh: '把多种等价表述连接到同一个可逆性结论', recognition: [['Rank n', 'Full rank for an n×n matrix.', '对应 n 个主元。'], ['A~I', 'Row reduction reaches identity.', '可反向构造逆。'], ['Only zero solution', 'Ax=0 has x=0 only.', '也是等价条件。']],
    sentences: [['Use the invertible matrix theorem.', '使用可逆矩阵定理。', 'invertible matrix theorem'], ['The matrix has a pivot in every row.', '这个矩阵每行都有一个主元。', 'pivot in every row']],
    distractors: ['矩阵相抵的定义', '矩阵转置的性质'], conceptCheck: ['一个 3×3 矩阵行化简后只有 2 个主元，它是否可逆？', ['不可逆', '可逆', '仅凭此无法判断'], 0, '3 阶方阵可逆要求 3 个主元；只有 2 个主元说明 rank(A)<3。'], summaryObject: 'invertibility criteria', summaryEvidence: 'full-rank, pivot, and row-equivalence evidence'
  }),

  makeTopic({
    slug: 'computing-inverse-matrix', section: '2.3', family: 'Procedure', mode: 'sequence',
    title: 'Computing an Inverse Matrix', zh: '逆矩阵的计算', ipa: '/kəmˈpjuːtɪŋ ən ˈɪnvɜːrs ˈmeɪtrɪks/',
    definition: 'To compute A⁻¹ by row reduction, augment A with I and reduce the left block to I; the right block then becomes A⁻¹.', chinese: '用行化简求逆时，把 A 与 I 组成增广矩阵 [A|I]，将左块化为 I；若成功，右块就是 A⁻¹。', intuition: '左右两块接受完全相同的行变换；左边被“撤销”为 I，右边记录这些撤销动作。',
    heroMain: '[A | I] → [I | A⁻¹]', heroSub: 'the same row operations act on both blocks', heroQuestion: 'What tells us that the inverse has been found?', heroQuestionZh: '什么状态说明已经求得逆矩阵？', kicker: 'STEPWISE PROCEDURE · 顺序过程', instruction: '按真实先后顺序完成一个 2×2 增广矩阵示例。',
    notation: [['[A|I]', 'A augmented with I', 'A 与单位矩阵 I 组成的分块增广矩阵'], ['[I|A⁻¹]', 'I augmented with A inverse', '左块为 I、右块为 A 的逆'], ['R₂←R₂−R₁', 'replace row two by row two minus row one', '第二行减去第一行']],
    vocab: [['augment', '增广', '/ɔːɡˈment/', 'Place A and I side by side.'], ['row-reduce', '行化简', '/roʊ rɪˈduːs/', 'Apply elementary row operations.'], ['inverse matrix', '逆矩阵', '/ˈɪnvɜːrs ˈmeɪtrɪks/', 'The right block after the left becomes I.'], ['identity block', '单位矩阵块', '/aɪˈdentəti blɑːk/', 'The target left block.']],
    views: [view('AUGMENT · 增广', 'Augment A with the identity matrix.', '把 A 与单位矩阵并排增广。', '[A|I]', '[1 1 | 1 0; 0 1 | 0 1]', 'start with A=[1 1;0 1]', 'Both blocks have the same number of rows.'), view('REDUCE · 化简', 'Eliminate the entry above the second pivot.', '消去第二个主元上方的元素。', 'R₁←R₁−R₂', '[1 0 | 1 −1; 0 1 | 0 1]', 'same row operation on both blocks', 'The left block becomes I.'), view('READ · 读取', 'Read the inverse from the right block.', '从右侧矩阵块读出逆矩阵。', 'A⁻¹=[1 −1;0 1]', '[I | A⁻¹]', 'verify AA⁻¹=I', 'The procedure stops once the left block is exactly I.')],
    recognitionTitle: 'Track both blocks together', recognitionZh: '识别增广、同步行变换与失败条件', recognition: [['Start', '[A|I].', 'I 与 A 同阶。'], ['Success', 'The left block becomes I.', '右块就是 A⁻¹。'], ['Failure', 'A zero row on the left blocks the process.', '说明 A 不可逆。']],
    sentences: [['Augment the matrix with the identity.', '用单位矩阵增广这个矩阵。', 'augment with'], ['Apply the same row operation to both blocks.', '对左右两块施行同一个行变换。', 'both blocks']],
    distractors: ['伴随矩阵的定义', '矩阵乘法的定义'], conceptCheck: ['在 [A|I] 行化简法中，何时可从右块读出 A⁻¹？', ['左块成为 I 时', '右块成为零矩阵时', '左块成为对角矩阵时'], 0, '只有左块被化为同阶单位矩阵 I 时，右块才是 A⁻¹。'], summaryObject: 'inverse computation by row reduction', summaryEvidence: 'the successful state [I|A⁻¹]'
  }),

  makeTopic({
    slug: 'matrix-equations-invertible-coefficient', section: '2.3', family: 'Procedure', mode: 'sequence',
    title: 'Matrix Equations with an Invertible Coefficient Matrix', zh: '系数矩阵可逆的矩阵方程', ipa: '/ˈmeɪtrɪks ɪˈkweɪʒənz wɪð ən ɪnˈvɜːrtəbəl ˌkoʊəˈfɪʃənt ˈmeɪtrɪks/',
    definition: 'If A is invertible, AX=B has the unique solution X=A⁻¹B, while XA=B has the unique solution X=BA⁻¹.', chinese: '若 A 可逆，则 AX=B 的唯一解为 X=A⁻¹B；而 XA=B 的唯一解为 X=BA⁻¹。乘法次序必须保持。', intuition: '逆矩阵要乘在 A 所在的那一侧：A 在左，就从左乘；A 在右，就从右乘。',
    heroMain: 'AX=B  ⇒  X=A⁻¹B', heroSub: 'left-multiply both sides by A⁻¹', heroQuestion: 'Which side should the inverse multiply?', heroQuestionZh: '逆矩阵应该乘在哪一侧？', kicker: 'STEPWISE PROCEDURE · 顺序过程', instruction: '按等式两侧同时同方向相乘的顺序解矩阵方程。',
    notation: [['AX=B', 'A X equals B', 'A 左乘未知矩阵 X'], ['A⁻¹AX=A⁻¹B', 'A inverse A X equals A inverse B', '等式两边从左乘 A⁻¹'], ['X=A⁻¹B', 'X equals A inverse B', '矩阵方程的唯一解']],
    vocab: [['matrix equation', '矩阵方程', '/ˈmeɪtrɪks ɪˈkweɪʒən/', 'An equation whose unknown is a matrix.'], ['coefficient matrix', '系数矩阵', '/ˌkoʊəˈfɪʃənt ˈmeɪtrɪks/', 'The known matrix multiplying X.'], ['left-multiply', '从左乘', '/left ˈmʌltɪplaɪ/', 'Multiply both sides on the left.'], ['unique solution', '唯一解', '/juˈniːk səˈluːʃən/', 'The single matrix satisfying the equation.']],
    views: [view('IDENTIFY SIDE · 识别一侧', 'The coefficient matrix is on the left of X.', '系数矩阵位于 X 的左侧。', 'AX=B', 'A · X = B', 'A is invertible', 'Multiplication order determines the legal cancellation.'), view('MULTIPLY · 同侧相乘', 'Left-multiply both sides by A inverse.', '等式两边同时从左乘 A⁻¹。', 'A⁻¹AX=A⁻¹B', 'A⁻¹(AX) = A⁻¹B', 'same operation on both sides', 'Associativity lets A⁻¹A become I.'), view('SIMPLIFY · 化简', 'Simplify the identity times X.', '化简 I 乘 X。', 'X=A⁻¹B', 'IX = A⁻¹B', 'unique solution', 'The order A⁻¹B cannot be reversed.')],
    recognitionTitle: 'Cancel on the correct side', recognitionZh: '识别左乘、右乘与不可交换的次序', recognition: [['AX=B', 'Use A⁻¹ on the left.', '得到 X=A⁻¹B。'], ['XA=B', 'Use A⁻¹ on the right.', '得到 X=BA⁻¹。'], ['Order', 'Do not commute matrix factors.', '一般 A⁻¹B≠BA⁻¹。']],
    sentences: [['Premultiply both sides by A inverse.', '在等式两边同时从左乘 A 的逆。', 'premultiply both sides'], ['The order of the factors must be preserved.', '必须保持各因子的次序。', 'order must be preserved']],
    distractors: ['系数矩阵不可逆的矩阵方程', '逆映射'], conceptCheck: ['若 XA=B 且 A 可逆，X 等于什么？', ['BA⁻¹', 'A⁻¹B', 'AB⁻¹'], 0, 'A 在 X 的右侧，因此两边从右乘 A⁻¹，得到 X=BA⁻¹。'], summaryObject: 'matrix equations with an invertible coefficient', summaryEvidence: 'which side the inverse must multiply'
  }),

  makeTopic({
    slug: 'block-matrices-operations', section: '2.4', family: 'Procedure', mode: 'compare',
    title: 'Block Matrices and Block Operations', zh: '分块矩阵与分块运算', ipa: '/blɑːk ˈmeɪtrɪsiːz ænd blɑːk ˌɑːpəˈreɪʃənz/',
    definition: 'A block matrix partitions a matrix into submatrices; addition and scalar multiplication work blockwise when the partitions are conformable.', chinese: '分块矩阵把一个矩阵划分为若干子矩阵；在分块方式相容时，加法与数乘可按对应矩阵块进行。', intuition: '矩阵块不是单个数字；先看分割线和每块尺寸，再把每个块当作一个整体操作。',
    heroMain: '[A B; C D]', heroSub: 'each letter represents a submatrix with stated dimensions', heroQuestion: 'When may blocks be treated like entries?', heroQuestionZh: '什么时候可以把矩阵块当作“元素”运算？', kicker: 'COMPARE & CLASSIFY · 比较与分类', instruction: '比较相容分块、不相容分块与逐块数乘。',
    notation: [['[A B; C D]', 'the block matrix A B C D', '由四个子矩阵组成的分块矩阵'], ['A₁₁+B₁₁', 'A one one plus B one one', '对应矩阵块相加'], ['c[A B]', 'c times the block matrix A B', '标量乘每一个矩阵块']],
    vocab: [['block matrix', '分块矩阵', '/blɑːk ˈmeɪtrɪks/', 'A matrix partitioned into submatrices.'], ['submatrix', '子矩阵', '/ˈsʌbmeɪtrɪks/', 'A matrix used as one block.'], ['partition', '分块 / 划分', '/pɑːrˈtɪʃən/', 'A chosen row-and-column division.'], ['conformable blocks', '相容矩阵块', '/kənˈfɔːrməbəl blɑːks/', 'Blocks whose positions and dimensions permit the operation.']],
    views: [view('PARTITION · 分块', 'Partition the matrix after the second column.', '在第二列之后进行分块。', 'M=[A|B]', '[1 0 | 2; 0 1 | 3]', 'A is 2×2; B is 2×1', 'The partition records block dimensions.'), view('ADD · 相加', 'Add corresponding conformable blocks.', '把对应的相容矩阵块相加。', '[A B]+[C D]=[A+C B+D]', 'same block grid on both matrices', 'A and C have the same size', 'Both the overall size and each corresponding block size must match.'), view('NOT CONFORMABLE · 不相容', 'Do not combine incompatible partitions blockwise.', '分块不相容时不能逐块运算。', '[A|B] versus [C;D]', 'vertical split ≠ horizontal split', 'block positions do not correspond', 'The same full matrix size does not guarantee compatible partitions.')],
    recognitionTitle: 'Read the partition before the formula', recognitionZh: '先识别矩阵块位置、尺寸与分块相容性', recognition: [['Block dimensions', 'Label every submatrix size.', '字母并不代表标量。'], ['Correspondence', 'Addition pairs the same block positions.', '分割线必须相容。'], ['Whole matrix', 'Removing the lines recovers the original matrix.', '分块不改变矩阵本身。']],
    sentences: [['Partition the matrix into four blocks.', '把矩阵分成四个矩阵块。', 'partition into'], ['The two block structures are conformable.', '这两个分块结构是相容的。', 'are conformable']],
    distractors: ['初等矩阵', '伴随矩阵'], conceptCheck: ['两个同型矩阵一定能按任意已有分块逐块相加吗？', ['不一定，还要对应分块尺寸一致', '一定可以', '只有方阵可以'], 0, '逐块相加要求分块位置与每个对应矩阵块的尺寸都相容。'], summaryObject: 'block addition and scalar multiplication', summaryEvidence: 'a conformable block partition'
  }),

  makeTopic({
    slug: 'block-multiplication-diagonal', section: '2.4', family: 'Procedure', mode: 'sync',
    title: 'Block Multiplication and Block Diagonal Matrices', zh: '分块乘法与准对角矩阵', ipa: '/blɑːk ˌmʌltɪplɪˈkeɪʃən ænd blɑːk daɪˈæɡənəl ˈmeɪtrɪsiːz/',
    definition: 'Conformably partitioned matrices multiply by the usual row-column rule with matrix blocks; a block diagonal matrix has zero off-diagonal blocks.', chinese: '相容分块矩阵按普通行列法则进行分块乘法，只是“元素”变成矩阵块；准对角矩阵的非对角块为零矩阵。', intuition: '把 block row 与 block column 配对；相乘次序仍然重要。对角块像互不耦合的子系统。',
    heroMain: '[A B; C D][E F; G H]', heroSub: 'top-left block = AE+BG', heroQuestion: 'How does row-by-column become block-row by block-column?', heroQuestionZh: '行乘列怎样变成块行乘块列？', kicker: 'SYNCHRONIZED VIEWS · 同步视图', instruction: '同步查看块行、块列、输出块与准对角特例。',
    notation: [['AE+BG', 'A E plus B G', '乘积左上角矩阵块'], ['diag(A,D)', 'block diagonal A D', '以 A、D 为对角块的准对角矩阵'], ['0', 'the zero block', '尺寸由位置决定的零矩阵块']],
    vocab: [['block multiplication', '分块乘法', '/blɑːk ˌmʌltɪplɪˈkeɪʃən/', 'Matrix multiplication performed with conformable submatrices.'], ['block row', '块行', '/blɑːk roʊ/', 'A horizontal list of matrix blocks.'], ['block column', '块列', '/blɑːk ˈkɑːləm/', 'A vertical list of matrix blocks.'], ['block diagonal matrix', '准对角矩阵', '/blɑːk daɪˈæɡənəl ˈmeɪtrɪks/', 'A block matrix with zero off-diagonal blocks.']],
    views: [view('PAIR · 配对', 'Pair the first block row with the first block column.', '第一块行与第一块列配对。', '[A B]·[E;G]', 'AE + BG', 'top-left output block', 'Each product must have compatible inner dimensions.'), view('FULL PRODUCT · 完整乘积', 'Assemble the four output blocks.', '组成四个结果矩阵块。', '[AE+BG AF+BH; CE+DG CF+DH]', 'block row × block column', 'four block dot products', 'The order inside every block product is fixed.'), view('BLOCK DIAGONAL · 准对角', 'Zero off-diagonal blocks decouple the product.', '非对角零块使各对角块独立作用。', 'diag(A,D)diag(E,H)=diag(AE,DH)', '[A 0;0 D][E 0;0 H]=[AE 0;0 DH]', 'two independent diagonal products', 'The zero symbols represent correctly sized zero matrices.')],
    recognitionTitle: 'Keep block order and dimensions visible', recognitionZh: '识别块行块列配对、乘法次序与零矩阵块', recognition: [['Top-left block', 'AE+BG.', '不是逐块得到 AE。'], ['Product order', 'AE generally differs from EA.', '矩阵块仍不可交换。'], ['Zero block', 'Its size depends on its position.', '不是无尺寸的数字 0。']],
    sentences: [['Multiply the first block row by the second block column.', '用第一块行乘第二块列。', 'block row by block column'], ['The off-diagonal blocks are zero.', '非对角矩阵块都是零矩阵。', 'off-diagonal blocks']],
    distractors: ['矩阵加法与数乘', '矩阵的秩'], conceptCheck: ['分块乘积的左上块是哪一个？', ['AE+BG', 'AE', 'EA+GB'], 0, '第一块行 [A B] 与第一块列 [E;G] 相乘，得到 AE+BG。'], summaryObject: 'block multiplication', summaryEvidence: 'block-row by block-column pairing'
  }),

  makeTopic({
    slug: 'matrix-equations-noninvertible', section: '2.4', family: 'Procedure', mode: 'decision',
    title: 'Matrix Equations with a Noninvertible Coefficient Matrix', zh: '系数矩阵不可逆的矩阵方程', ipa: '/ˈmeɪtrɪks ɪˈkweɪʒənz wɪð ə ˌnɑːnɪnˈvɜːrtəbəl ˌkoʊəˈfɪʃənt ˈmeɪtrɪks/',
    definition: 'When A is noninvertible, AX=B cannot be solved by multiplying by A⁻¹; consistency must be checked column by column or by row reduction.', chinese: '当 A 不可逆时，不能使用 A⁻¹ 解 AX=B；应把 B 的每一列视为右端项，利用行化简逐列判断相容性并描述所有解。', intuition: '不可逆不等于“一定无解”：不同 B 可能导致无解或多解，但不会由逆矩阵给出唯一公式。',
    heroMain: 'AX=B  with A singular', heroSub: 'each column Axⱼ=bⱼ needs a consistency check', heroQuestion: 'What replaces inverse cancellation?', heroQuestionZh: '不能用逆矩阵消去时改用什么？', kicker: 'DECISION BOARD · 判定板', instruction: '根据增广矩阵的相容性直接分类结论。',
    notation: [['AX=B', 'A X equals B', '不可逆系数矩阵的矩阵方程'], ['[A|B]', 'A augmented with B', '用 B 增广 A'], ['0=c', 'zero equals a nonzero constant', '出现矛盾行']],
    vocab: [['noninvertible', '不可逆的', '/ˌnɑːnɪnˈvɜːrtəbəl/', 'Having no matrix inverse.'], ['consistency', '相容性 / 有解性', '/kənˈsɪstənsi/', 'Whether every required column equation has a solution.'], ['free variable', '自由变量', '/friː ˈveriəbəl/', 'A variable not determined by a pivot.'], ['augmented matrix', '增广矩阵', '/ɔːɡˈmentɪd ˈmeɪtrɪks/', 'The matrix used to test AX=B by row reduction.']],
    views: [view('CONSISTENT · 相容', 'Check every column of B for consistency.', '检查 B 的每一列是否相容。', 'Axⱼ=bⱼ', 'bⱼ lies in the column space of A', 'for every column j', 'If any column is inconsistent, no matrix X solves the full equation.'), view('MULTIPLE · 多解', 'A free variable produces multiple solutions.', '自由变量会产生多个解。', 'rank(A)<number of columns', 'consistent + free variable → many X', 'no unique inverse formula', 'Noninvertibility can still allow solutions.'), view('INCONSISTENT · 无解', 'A contradiction means no solution.', '矛盾行意味着无解。', '[0 … 0 | c], c≠0', '0 = c', 'inconsistent column', 'One inconsistent right-hand column makes AX=B unsolvable.')],
    recognitionTitle: 'Noninvertible does not mean automatically inconsistent', recognitionZh: '区分无逆、无解与多解', recognition: [['No inverse', 'A⁻¹ cannot be used.', '这是方法限制。'], ['Consistent', 'Solutions may still exist.', '常出现自由变量。'], ['Inconsistent', 'A contradiction row appears.', '这才表示无解。']],
    sentences: [['We cannot cancel A because it is singular.', '因为 A 奇异，所以不能用逆矩阵消去 A。', 'cannot cancel'], ['Check the consistency of each right-hand side.', '检查每个右端列向量的相容性。', 'check the consistency']],
    distractors: ['可逆系数矩阵的矩阵方程', '分块求逆法'], conceptCheck: ['A 不可逆时，AX=B 是否一定无解？', ['不一定，可能无解也可能有多个解', '一定无解', '一定有唯一解'], 0, '不可逆只说明不能用 A⁻¹ 给出唯一解；具体需检查 B 的相容性。'], summaryObject: 'matrix equations with a singular coefficient', summaryEvidence: 'consistent, multiple-solution, and inconsistent cases'
  }),

  makeTopic({
    slug: 'inverting-matrix-by-blocks', section: '2.4', family: 'Procedure', mode: 'sequence',
    title: 'Inverting a Matrix by Blocks', zh: '分块求逆法', ipa: '/ɪnˈvɜːrtɪŋ ə ˈmeɪtrɪks baɪ blɑːks/',
    definition: 'Block inversion rewrites the inverse of a partitioned matrix using invertible diagonal blocks and a suitable Schur complement.', chinese: '分块求逆利用可逆对角块及相应的 Schur 补写出分块逆矩阵；必须先检查所用矩阵块与 Schur 补的可逆性。', intuition: '分块公式不是“把每个块分别求逆”；非对角块会通过 Schur 补影响全部结果。',
    heroMain: 'M=[A B; C D],  S=D−CA⁻¹B', heroSub: 'block inverse requires A and S to be invertible', heroQuestion: 'Which conditions make the block formula legal?', heroQuestionZh: '分块求逆公式需要哪些可逆条件？', kicker: 'STEPWISE PROCEDURE · 顺序过程', instruction: '按定义 Schur 补、检查条件、读取分块逆的顺序预习。',
    notation: [['S=D−CA⁻¹B', 'S equals D minus C A inverse B', '关于 A 的 Schur 补'], ['M⁻¹', 'M inverse', '分块矩阵 M 的逆'], ['A⁻¹B', 'A inverse B', '保持次序的矩阵块乘积']],
    vocab: [['block inverse', '分块逆', '/blɑːk ˈɪnvɜːrs/', 'An inverse expressed through matrix blocks.'], ['Schur complement', 'Schur 补', '/ʃʊr ˈkɑːmpləmənt/', 'A derived block such as D−CA⁻¹B.'], ['diagonal block', '对角块', '/daɪˈæɡənəl blɑːk/', 'A block on the block diagonal.'], ['invertibility condition', '可逆条件', '/ɪnˌvɜːrtəˈbɪləti kənˈdɪʃən/', 'A condition required before using the formula.']],
    views: [view('CHOOSE BLOCK · 选块', 'Choose an invertible diagonal block.', '选择一个可逆的对角块。', 'A is invertible', 'M=[A B; C D]', 'start from A', 'The displayed version of the formula requires A⁻¹.'), view('FORM COMPLEMENT · 作补', 'Form the Schur complement of A.', '构造关于 A 的 Schur 补。', 'S=D−CA⁻¹B', 'D − C A⁻¹ B', 'keep product order', 'S summarizes the remaining block interaction after eliminating A.'), view('CHECK & READ · 检查并读取', 'Use the block inverse only if S is invertible.', '只有 S 可逆时才使用分块逆公式。', 'A⁻¹ and S⁻¹ exist', 'conditions ✓ → assemble M⁻¹', 'all four result blocks depend on B or C', 'The method is not entrywise or blockwise reciprocal.')],
    recognitionTitle: 'Read conditions before the formula', recognitionZh: '识别可逆对角块、Schur 补与乘法次序', recognition: [['A invertible', 'Needed to form A⁻¹.', '不是任意选择都合法。'], ['S invertible', 'Needed for S⁻¹.', '第二个关键条件。'], ['Coupled blocks', 'B and C affect the inverse.', '不能只求 A⁻¹、D⁻¹。']],
    sentences: [['Form the Schur complement of A.', '构造关于 A 的 Schur 补。', 'Schur complement'], ['Verify that both required blocks are invertible.', '验证两个所需矩阵块都可逆。', 'verify that']],
    distractors: ['分块乘法', '伴随矩阵'], conceptCheck: ['在 S=D−CA⁻¹B 中，至少先要求什么？', ['A 可逆', 'B 可逆', 'C 可逆'], 0, '公式中出现 A⁻¹，因此必须先确认 A 可逆。完整公式通常还要求 S 可逆。'], summaryObject: 'block inversion', summaryEvidence: 'the required invertibility conditions and Schur complement'
  }),

  makeTopic({
    slug: 'matrix-rank-definition-computation', section: '2.5', family: 'Structure', mode: 'sync',
    title: 'Definition and Computation of Matrix Rank', zh: '矩阵秩的定义与计算', ipa: '/ˈdefɪnɪʃən ænd ˌkɑːmpjuˈteɪʃən əv ˈmeɪtrɪks ræŋk/',
    definition: 'The rank of a matrix is the dimension of its row space, equivalently its column space, and equals the number of pivots in a row-echelon form.', chinese: '矩阵的秩是其行空间的维数，也等于列空间的维数；计算时可把矩阵化为行阶梯形，数主元个数。', intuition: 'rank 不是矩阵的行数或列数本身，而是其中真正独立的方向数量。',
    heroMain: 'rank(A)=number of pivots', heroSub: 'row rank = column rank', heroQuestion: 'What does a pivot count measure?', heroQuestionZh: '主元个数衡量了什么？', kicker: 'SYNCHRONIZED VIEWS · 同步视图', instruction: '同步连接行化简、主元个数与空间维数。',
    notation: [['rank(A)', 'the rank of A', '矩阵 A 的秩'], ['r(A)', 'r of A', '矩阵秩的另一种常见记号'], ['rank(A)=2', 'the rank of A equals two', 'A 有两个独立主元方向']],
    vocab: [['rank', '秩', '/ræŋk/', 'The number of independent pivot directions.'], ['pivot', '主元', '/ˈpɪvət/', 'A leading entry counted in echelon form.'], ['row space', '行空间', '/roʊ speɪs/', 'The space spanned by the rows.'], ['column space', '列空间', '/ˈkɑːləm speɪs/', 'The space spanned by the columns.']],
    views: [view('REDUCE · 化简', 'Reduce the matrix to echelon form.', '把矩阵化为行阶梯形。', 'A~U', '[1 2 3; 2 4 6] → [1 2 3; 0 0 0]', 'row operations preserve rank', 'The second row is dependent on the first.'), view('COUNT · 计数', 'Count the pivot positions.', '数出主元位置。', 'one pivot', '[pivot  *  *; 0 0 0]', 'rank(A)=1', 'The count is independent of the chosen legal row-reduction path.'), view('CONNECT · 连接', 'Connect the pivot count to dimension.', '把主元个数与空间维数连接起来。', 'dim Row(A)=dim Col(A)=1', 'row rank = column rank', 'same scalar rank', 'Rank summarizes independent row and column directions.')],
    recognitionTitle: 'Count pivots, not nonzero entries', recognitionZh: '识别主元、非零行与独立方向', recognition: [['Pivot count', 'One pivot gives rank one.', '不是数非零元素。'], ['Echelon form', 'Nonzero rows reveal the count.', '合法行变换保持秩。'], ['Bound', 'rank(A)≤min(m,n).', '秩不能超过较小维数。']],
    sentences: [['Row-reduce the matrix and count the pivots.', '将矩阵行化简并数出主元。', 'count the pivots'], ['The row rank equals the column rank.', '行秩等于列秩。', 'equals']],
    distractors: ['矩阵的迹', '矩阵的阶数'], conceptCheck: ['矩阵 [1 2;2 4] 的秩是多少？', ['1', '2', '4'], 0, '第二行是第一行的两倍，行化简后只有一个主元，因此秩为 1。'], summaryObject: 'matrix rank', summaryEvidence: 'the pivot count and its dimension meaning'
  }),

  makeTopic({
    slug: 'properties-matrix-rank', section: '2.5', family: 'Structure', mode: 'structure',
    title: 'Properties of Matrix Rank', zh: '矩阵秩的运算性质', ipa: '/ˈprɑːpərtiz əv ˈmeɪtrɪks ræŋk/',
    definition: 'Rank is unchanged by transpose or multiplication by invertible matrices, and satisfies bounds such as rank(AB)≤min(rank(A),rank(B)).', chinese: '矩阵转置不改变秩；左乘或右乘可逆矩阵不改变秩；矩阵乘积的秩不超过任一因子的秩。', intuition: '可逆操作只是重新表达信息，不会丢失独立方向；一般乘法则可能压缩方向。',
    heroMain: 'rank(PAQ)=rank(A)', heroSub: 'P and Q invertible', heroQuestion: 'Which operations preserve rank?', heroQuestionZh: '哪些运算保持矩阵的秩？', kicker: 'STRUCTURE MAP · 结构图', instruction: '按“不变、上界、可能下降”组织秩的性质。',
    notation: [['rank(Aᵀ)', 'the rank of A transpose', 'A 的转置的秩'], ['rank(PAQ)', 'the rank of P A Q', '可逆矩阵左右乘后的秩'], ['rank(AB)≤rank(A)', 'the rank of A B is at most the rank of A', '乘积秩的上界']],
    vocab: [['rank-preserving', '保持秩的', '/ræŋk prɪˈzɜːrvɪŋ/', 'Leaving the rank unchanged.'], ['upper bound', '上界', '/ˈʌpər baʊnd/', 'A maximum possible value.'], ['transpose invariance', '转置不变性', '/trænˈspoʊz ɪnˈveriəns/', 'rank(Aᵀ)=rank(A).'], ['invertible factor', '可逆因子', '/ɪnˈvɜːrtəbəl ˈfæktər/', 'A factor that does not change rank.']],
    views: [view('TRANSPOSE · 转置', 'Transposition preserves rank.', '转置保持矩阵的秩。', 'rank(Aᵀ)=rank(A)', 'rows ↔ columns | same rank', 'row rank equals column rank', 'The shape may change but the number of independent directions does not.'), view('INVERTIBLE FACTORS · 可逆因子', 'Multiplying by an invertible matrix preserves rank.', '乘以可逆矩阵保持秩。', 'rank(PAQ)=rank(A)', 'P,Q invertible → same rank', 'reversible changes of coordinates', 'No information is lost by reversible multiplication.'), view('PRODUCT BOUND · 乘积上界', 'A product cannot have rank greater than either factor.', '乘积的秩不超过任一因子的秩。', 'rank(AB)≤min(rank A,rank B)', 'A → B can only keep or reduce directions', 'rank may drop', 'Noninvertible multiplication can collapse independent directions.')],
    recognitionTitle: 'Separate equality from inequality', recognitionZh: '区分保持秩的等式与乘积秩的上界', recognition: [['Transpose', 'Always equal rank.', '等式。'], ['Invertible factors', 'Always preserve rank.', '需要可逆条件。'], ['General product', 'Only an upper bound is guaranteed.', '可能严格变小。']],
    sentences: [['Premultiplication by an invertible matrix preserves rank.', '左乘可逆矩阵保持秩。', 'preserves rank'], ['The rank of the product is at most two.', '这个乘积的秩至多为 2。', 'at most']],
    distractors: ['矩阵秩的定义', '满秩矩阵'], conceptCheck: ['若 P、Q 可逆，则 rank(PAQ) 等于什么？', ['rank(A)', 'rank(P)+rank(Q)', '0'], 0, '可逆因子只作可逆的行或列变换，因此不改变 A 的秩。'], summaryObject: 'rank properties', summaryEvidence: 'which operations preserve rank and which only give a bound'
  }),

  makeTopic({
    slug: 'full-rank-matrices', section: '2.5', family: 'Concept', mode: 'compare',
    title: 'Full-Rank Matrices', zh: '满秩矩阵', ipa: '/fʊl ræŋk ˈmeɪtrɪsiːz/',
    definition: 'An m×n matrix has full rank when rank(A)=min(m,n); full row rank and full column rank depend on the matrix shape.', chinese: 'm×n 矩阵的秩等于 min(m,n) 时称为满秩；宽矩阵通常讨论满行秩，高矩阵通常讨论满列秩。', intuition: '“满”是达到这个尺寸允许的最大秩，不一定意味着方阵，也不总等于行数或列数中的某一个固定值。',
    heroMain: 'rank(A)=min(m,n)', heroSub: 'maximum rank allowed by the dimensions', heroQuestion: 'What does “full” mean for a rectangular matrix?', heroQuestionZh: '非方阵中的“满”是什么意思？', kicker: 'COMPARE & CLASSIFY · 比较与分类', instruction: '比较方阵、宽矩阵和高矩阵的满秩条件。',
    notation: [['rank(A)=min(m,n)', 'the rank of A equals the minimum of m and n', 'A 达到其可能的最大秩'], ['full row rank', 'full row rank', '满行秩'], ['full column rank', 'full column rank', '满列秩']],
    vocab: [['full rank', '满秩', '/fʊl ræŋk/', 'Rank equal to min(m,n).'], ['full row rank', '满行秩', '/fʊl roʊ ræŋk/', 'Rank equal to the number of rows.'], ['full column rank', '满列秩', '/fʊl ˈkɑːləm ræŋk/', 'Rank equal to the number of columns.'], ['maximum rank', '最大秩', '/ˈmæksɪməm ræŋk/', 'The bound min(m,n).']],
    views: [view('SQUARE · 方阵', 'A square matrix is full rank when rank equals n.', 'n 阶方阵秩为 n 时满秩。', 'n×n, rank=n', '3×3 → full rank means rank 3', 'full row and column rank', 'For square matrices this is equivalent to invertibility.'), view('WIDE · 宽矩阵', 'A wide matrix can have full row rank.', '宽矩阵可以满行秩。', 'm<n, rank=m', '2×3 → maximum rank 2', 'more columns than rows', 'Full rank does not mean rank equals the number of columns here.'), view('TALL · 高矩阵', 'A tall matrix can have full column rank.', '高矩阵可以满列秩。', 'm>n, rank=n', '3×2 → maximum rank 2', 'more rows than columns', 'Full rank does not mean rank equals the number of rows here.')],
    recognitionTitle: 'Compare rank with min(m,n)', recognitionZh: '用较小维数判断满秩', recognition: [['Square', 'Full rank equals n.', '同时满行秩和满列秩。'], ['Wide', 'Maximum rank equals rows.', '可能满行秩。'], ['Tall', 'Maximum rank equals columns.', '可能满列秩。']],
    sentences: [['Determine whether the matrix has full column rank.', '判断该矩阵是否满列秩。', 'full column rank'], ['Its rank reaches the maximum possible value.', '它的秩达到可能的最大值。', 'maximum possible']],
    distractors: ['单位矩阵', '等价矩阵'], conceptCheck: ['一个 2×4 矩阵的秩为 2，它是否满秩？', ['是，因为 min(2,4)=2', '否，因为秩不是 4', '只有方阵才谈满秩'], 0, '满秩的标准是 rank(A)=min(m,n)，这里最大可能秩为 2。'], summaryObject: 'full-rank matrices', summaryEvidence: 'full row, full column, and square cases'
  }),

  makeTopic({
    slug: 'matrix-equivalence-criteria', section: '2.5', family: 'Structure', mode: 'structure',
    title: 'Matrix Equivalence and Its Criteria', zh: '矩阵相抵及其判定', ipa: '/ˈmeɪtrɪks ɪˈkwɪvələns ænd ɪts kraɪˈtɪriə/',
    definition: 'Two m×n matrices A and B are equivalent if B=PAQ for invertible P and Q; over a field, equal-sized matrices are equivalent exactly when they have the same rank.', chinese: '同型矩阵 A、B 若存在可逆矩阵 P、Q 使 B=PAQ，则称 A 与 B 相抵；在同一域上，同型矩阵相抵当且仅当它们秩相同。', intuition: '相抵允许可逆的行变换和列变换；它不是矩阵相等，也不是只做行变换的行等价。',
    heroMain: 'B=PAQ  ⇔  rank(A)=rank(B)', heroSub: 'same dimensions; P and Q invertible', heroQuestion: 'What information survives matrix equivalence?', heroQuestionZh: '矩阵相抵保留什么信息？', kicker: 'STRUCTURE MAP · 结构图', instruction: '连接定义、标准形与秩判据。',
    notation: [['A~B', 'A is equivalent to B', '矩阵 A 与 B 相抵'], ['B=PAQ', 'B equals P A Q', '用可逆矩阵左右乘得到 B'], ['diag(Iᵣ,0)', 'block diagonal I r and zero', '秩为 r 的相抵标准形']],
    vocab: [['matrix equivalence', '矩阵相抵', '/ˈmeɪtrɪks ɪˈkwɪvələns/', 'Equivalence under invertible left and right multiplication.'], ['equivalent matrices', '相抵矩阵', '/ɪˈkwɪvələnt ˈmeɪtrɪsiːz/', 'Matrices related by B=PAQ.'], ['canonical form', '标准形', '/kəˈnɑːnɪkəl fɔːrm/', 'A simple representative diag(Iᵣ,0).'], ['same rank', '同秩', '/seɪm ræŋk/', 'The classification criterion for equal-sized matrices.']],
    views: [view('DEFINITION · 定义', 'Multiply by invertible matrices on both sides.', '用可逆矩阵从左右两侧相乘。', 'B=PAQ', 'A → PAQ → B', 'P changes rows; Q changes columns', 'The dimensions of A and B remain the same.'), view('CANONICAL FORM · 标准形', 'Reduce both matrices to the same rank form.', '把两个矩阵化为同一个秩标准形。', 'A~diag(Iᵣ,0)', 'rank r → [Iᵣ 0;0 0]', 'row and column operations', 'Every m×n rank-r matrix is equivalent to this form.'), view('CRITERION · 判据', 'Equal rank classifies equivalent matrices of the same size.', '同型同秩矩阵相抵。', 'A~B ⇔ rank(A)=rank(B)', 'same size + same rank → equivalent', 'rank is the invariant', 'Equal rank alone is not enough if the matrix sizes differ.')],
    recognitionTitle: 'Distinguish equal, row-equivalent, and equivalent', recognitionZh: '区分相等、行等价与相抵', recognition: [['Equal', 'Every corresponding entry matches.', '最强的逐项条件。'], ['Row-equivalent', 'Only row operations are used.', 'B=PA。'], ['Equivalent', 'Row and column operations are allowed.', 'B=PAQ。']],
    sentences: [['The two matrices are equivalent because they have the same rank.', '这两个同型矩阵同秩，所以相抵。', 'equivalent because'], ['Reduce the matrix to its rank canonical form.', '把矩阵化为秩标准形。', 'canonical form']],
    distractors: ['矩阵相等', '矩阵相似'], conceptCheck: ['两个同为 3×4 且秩都为 2 的矩阵是否相抵？', ['是', '否', '只有方阵才能相抵'], 0, '在同一域上，同型矩阵相抵当且仅当它们的秩相同。'], summaryObject: 'matrix equivalence', summaryEvidence: 'the same-size and same-rank criterion'
  }),

  makeTopic({
    slug: 'applications-matrix-rank', section: '2.5', family: 'Procedure', mode: 'decision',
    title: 'Applications of Matrix Rank', zh: '矩阵秩的典型应用', ipa: '/ˌæplɪˈkeɪʃənz əv ˈmeɪtrɪks ræŋk/',
    definition: 'Rank helps decide consistency, uniqueness, invertibility, and the number of independent constraints without requiring a full solution first.', chinese: '矩阵的秩可用于判断方程组相容性、解的唯一性、方阵可逆性以及独立约束的数量。', intuition: '先比较秩，再决定走哪条结论分支；rank 是“判定信号”，不一定要先求出所有未知量。',
    heroMain: 'rank(A) versus rank([A|b])', heroSub: 'same rank → consistent; different rank → inconsistent', heroQuestion: 'Which conclusion follows from the rank comparison?', heroQuestionZh: '比较秩以后能得到什么结论？', kicker: 'DECISION BOARD · 判定板', instruction: '从秩比较直接进入相容性与解数分类。',
    notation: [['rank(A)', 'the rank of A', '系数矩阵的秩'], ['rank([A|b])', 'the rank of A augmented with b', '增广矩阵的秩'], ['rank(A)=n', 'the rank of A equals n', '未知量列数为 n 时满列秩']],
    vocab: [['rank test', '秩判据', '/ræŋk test/', 'A decision rule based on matrix ranks.'], ['consistent system', '相容方程组', '/kənˈsɪstənt ˈsɪstəm/', 'A system with at least one solution.'], ['unique solution', '唯一解', '/juˈniːk səˈluːʃən/', 'A consistent solution with no free variable.'], ['independent constraint', '独立约束', '/ˌɪndɪˈpendənt kənˈstreɪnt/', 'A condition that contributes a pivot direction.']],
    views: [view('INCONSISTENT · 无解', 'Different ranks imply no solution.', '两个秩不相等意味着无解。', 'rank(A)<rank([A|b])', 'coefficient rank < augmented rank', 'a contradiction appears', 'The right-hand side adds a new pivot.'), view('UNIQUE · 唯一', 'Equal rank n gives a unique solution.', '两个秩都等于未知量个数 n 时有唯一解。', 'rank(A)=rank([A|b])=n', 'consistent + no free variables', 'one solution', 'Every variable column has a pivot.'), view('INFINITELY MANY · 无穷多', 'Equal rank below n gives free variables.', '两个秩相等但小于 n 时有无穷多解。', 'rank(A)=rank([A|b])<n', 'consistent + free variables', 'infinitely many solutions', 'The rank test classifies before parametrizing the solutions.')],
    recognitionTitle: 'Compare two ranks in the right order', recognitionZh: '识别不相容、唯一解与无穷多解三种分支', recognition: [['Different ranks', 'No solution.', '增广列制造矛盾。'], ['Equal to n', 'Unique solution.', '没有自由变量。'], ['Equal below n', 'Infinitely many solutions.', '至少一个自由变量。']],
    sentences: [['Compare the rank of the coefficient matrix with the augmented matrix.', '比较系数矩阵与增广矩阵的秩。', 'compare the rank'], ['The system has one free variable.', '这个方程组有一个自由变量。', 'free variable']],
    distractors: ['矩阵秩的运算性质', '满秩矩阵'], conceptCheck: ['若 rank(A)=rank([A|b])=2 而未知量有 3 个，解的情况是？', ['无穷多解', '唯一解', '无解'], 0, '两个秩相等说明相容，但秩 2 小于未知量数 3，因此存在自由变量并有无穷多解。'], summaryObject: 'rank-based decisions', summaryEvidence: 'the three solution cases from rank comparison'
  }),

  makeTopic({
    slug: 'operations-linear-mappings', section: '2.6', family: 'Transformation', mode: 'transformation',
    title: 'Operations on Linear Mappings', zh: '线性映射的加法、数乘与乘法', ipa: '/ˌɑːpəˈreɪʃənz ɑːn ˈlɪniər ˈmæpɪŋz/',
    definition: 'Linear mappings with compatible domains and codomains can be added and scaled pointwise, while their product means composition.', chinese: '定义域和值域相容的线性映射可逐点相加或数乘；线性映射的“乘法”表示复合，需检查前一个映射的值域与后一个映射的定义域。', intuition: '加法与数乘是在同一个输入 x 上比较输出；复合则把前一步输出送进下一步。',
    heroMain: '(S+T)(x)=S(x)+T(x)', heroSub: '(ST)(x)=S(T(x)) for compatible mappings', heroQuestion: 'Does “product” mean pointwise multiplication or composition?', heroQuestionZh: '线性映射的“乘法”是逐点相乘还是复合？', kicker: 'TRANSFORMATION LAB · 变换实验', instruction: '选择运算，观察同一输入怎样产生输出。',
    notation: [['(S+T)(x)', 'S plus T applied to x', '映射和作用于 x'], ['(cT)(x)', 'c T applied to x', '映射数乘作用于 x'], ['(ST)(x)=S(T(x))', 'S T of x equals S of T of x', '先 T 后 S 的复合']],
    vocab: [['sum of mappings', '映射的和', '/sʌm əv ˈmæpɪŋz/', 'Pointwise addition of outputs.'], ['scalar multiple', '映射的数乘', '/ˈskeɪlər ˈmʌltəpəl/', 'Scaling every output of a mapping.'], ['composition', '复合', '/ˌkɑːmpəˈzɪʃən/', 'Feeding one mapping output into another.'], ['compatible domains', '相容的定义域和值域', '/kəmˈpætəbəl doʊˈmeɪnz/', 'The condition needed to compose mappings.']],
    views: [view('ADD · 相加', 'Apply both mappings to the same input, then add.', '两个映射作用于同一个输入后相加。', '(S+T)(x)=Sx+Tx', 'x → Sx and Tx → Sx+Tx', 'same domain and codomain', 'The outputs must live in the same vector space.'), view('SCALE · 数乘', 'Scale the output of T.', '把 T 的输出乘以标量。', '(2T)(x)=2T(x)', 'x → T(x) → 2T(x)', 'input unchanged', 'Scalar multiplication acts on the output vector.'), view('COMPOSE · 复合', 'Apply T first and then S.', '先施行 T，再施行 S。', '(ST)(x)=S(T(x))', 'x → T(x) → S(T(x))', 'intermediate space must match', 'Composition order is read from right to left.')],
    recognitionTitle: 'Track input, intermediate output, and final output', recognitionZh: '识别逐点运算、复合次序与空间相容性', recognition: [['Same input', 'S+T evaluates both at x.', '输出再相加。'], ['Composition', 'T acts before S in ST.', '不是逐点相乘。'], ['Compatibility', 'The intermediate vector must belong to S’s domain.', '映射空间必须衔接。']],
    sentences: [['Compose T with S in the indicated order.', '按指定次序复合 T 与 S。', 'compose with'], ['Both mappings have the same domain and codomain.', '两个映射具有相同的定义域和值域。', 'same domain and codomain']],
    distractors: ['矩阵运算', '逆映射'], conceptCheck: ['在 (ST)(x)=S(T(x)) 中，哪个映射先作用？', ['T', 'S', '同时'], 0, '复合从右向左读：先计算 T(x)，再把结果送入 S。'], summaryObject: 'operations on linear mappings', summaryEvidence: 'pointwise operations and composition order'
  }),

  makeTopic({
    slug: 'correspondence-linear-mappings-matrices', section: '2.6', family: 'Transformation', mode: 'sync',
    title: 'The Correspondence Between Linear Mappings and Matrices', zh: '线性映射与矩阵的对应关系', ipa: '/ˌkɔːrəˈspɑːndəns bɪˈtwiːn ˈlɪniər ˈmæpɪŋz ænd ˈmeɪtrɪsiːz/',
    definition: 'After bases are chosen, each linear mapping T:V→W has a unique matrix [T] such that [T(v)]₍W₎=[T]₍W←V₎[v]₍V₎.', chinese: '选定 V、W 的基后，每个线性映射 T:V→W 唯一对应一个矩阵，使输出坐标等于表示矩阵乘输入坐标。矩阵依赖于所选基，而映射本身不依赖坐标。', intuition: '同一个“动作” T 可以用不同基写成不同矩阵；不要把线性映射本身与某个坐标矩阵完全混同。',
    heroMain: '[T(v)]𝒞 = [T]𝒞←ℬ [v]ℬ', heroSub: 'same mapping, coordinates relative to named bases', heroQuestion: 'What changes when the basis changes?', heroQuestionZh: '改变基时，什么改变、什么不变？', kicker: 'SYNCHRONIZED VIEWS · 同步视图', instruction: '同步连接抽象向量、坐标列与表示矩阵。',
    notation: [['[v]ℬ', 'the coordinate vector of v relative to B', 'v 在基 ℬ 下的坐标列'], ['[T]𝒞←ℬ', 'the matrix of T from B to C', 'T 关于定义域基 ℬ、值域基 𝒞 的矩阵'], ['[T(v)]𝒞', 'the C-coordinate vector of T of v', '输出 T(v) 在基 𝒞 下的坐标']],
    vocab: [['representation matrix', '表示矩阵', '/ˌreprɪzenˈteɪʃən ˈmeɪtrɪks/', 'The coordinate matrix of a linear mapping relative to chosen bases.'], ['ordered basis', '有序基', '/ˈɔːrdərd ˈbeɪsɪs/', 'A basis whose order determines coordinate columns.'], ['coordinate vector', '坐标向量', '/koʊˈɔːrdɪnət ˈvektər/', 'A column of coefficients relative to a basis.'], ['linear mapping', '线性映射', '/ˈlɪniər ˈmæpɪŋ/', 'The basis-independent transformation itself.']],
    views: [view('INPUT · 输入', 'Write the input vector in the domain basis.', '把输入向量写成定义域基下的坐标。', '[v]ℬ', 'v ↔ coordinate column [v]ℬ', 'same vector, chosen basis', 'The column is a representation, not the abstract vector itself.'), view('MATRIX · 表示矩阵', 'Multiply by the representation matrix.', '用表示矩阵乘输入坐标。', '[T]𝒞←ℬ[v]ℬ', 'input coordinates → matrix product', 'basis labels fix the meaning', 'The columns of [T] are the output coordinates of basis vectors.'), view('OUTPUT · 输出', 'Read the result in the codomain basis.', '在值域基下读取输出坐标。', '[T(v)]𝒞', 'matrix product = output coordinate column', 'T(v) is the actual output vector', 'Changing bases changes coordinates and the matrix, not T itself.')],
    recognitionTitle: 'Distinguish an object from its coordinates', recognitionZh: '区分线性映射、表示矩阵、向量与坐标列', recognition: [['T', 'The abstract mapping.', '不依赖所选基。'], ['[T]𝒞←ℬ', 'A basis-dependent matrix.', '必须写清基。'], ['[v]ℬ', 'A coordinate column.', '不是抽象向量 v 本身。']],
    sentences: [['Choose ordered bases for the domain and codomain.', '为定义域和值域选择有序基。', 'ordered bases'], ['The columns are the images of the basis vectors in coordinates.', '各列是基向量像的坐标。', 'images of the basis vectors']],
    distractors: ['映射运算与矩阵运算的对应', '逆映射与逆矩阵'], conceptCheck: ['改变基以后，线性映射 T 本身是否改变？', ['不改变，但表示矩阵通常改变', '改变为另一个映射', '表示矩阵也一定不变'], 0, '基只改变坐标描述；抽象映射 T 不变，但它的表示矩阵通常随基改变。'], summaryObject: 'the mapping-matrix correspondence', summaryEvidence: 'the basis-dependent coordinate relationship'
  }),

  makeTopic({
    slug: 'mapping-operations-matrix-operations', section: '2.6', family: 'Transformation', mode: 'sync',
    title: 'Correspondence Between Mapping Operations and Matrix Operations', zh: '线性映射运算与矩阵运算的对应', ipa: '/ˌkɔːrəˈspɑːndəns bɪˈtwiːn ˈmæpɪŋ ænd ˈmeɪtrɪks ˌɑːpəˈreɪʃənz/',
    definition: 'With fixed compatible bases, sums, scalar multiples, and compositions of linear mappings correspond to matrix addition, scalar multiplication, and matrix multiplication.', chinese: '在固定且相容的基下，线性映射的加法、数乘与复合分别对应表示矩阵的加法、数乘与乘法。', intuition: '上层是映射对向量做什么，下层是坐标矩阵怎样计算；两个视图要同步，复合次序也必须一致。',
    heroMain: '[S∘T]=[S][T]', heroSub: 'compatible intermediate basis; T acts first', heroQuestion: 'Why does composition become matrix multiplication?', heroQuestionZh: '为什么映射复合对应矩阵乘法？', kicker: 'SYNCHRONIZED VIEWS · 同步视图', instruction: '在映射层与矩阵层之间同步切换三种运算。',
    notation: [['[S+T]=[S]+[T]', 'the matrix of S plus T equals the matrix of S plus the matrix of T', '映射和对应矩阵和'], ['[cT]=c[T]', 'the matrix of c T equals c times the matrix of T', '映射数乘对应矩阵数乘'], ['[S∘T]=[S][T]', 'the matrix of S composed with T equals S matrix times T matrix', '映射复合对应矩阵乘法']],
    vocab: [['operation correspondence', '运算对应', '/ˌɑːpəˈreɪʃən ˌkɔːrəˈspɑːndəns/', 'Matching an operation on mappings with one on matrices.'], ['composition', '复合', '/ˌkɑːmpəˈzɪʃən/', 'Successive application of mappings.'], ['representation matrix', '表示矩阵', '/ˌreprɪzenˈteɪʃən ˈmeɪtrɪks/', 'The matrix used in a fixed pair of bases.'], ['compatible basis', '相容的基', '/kəmˈpætəbəl ˈbeɪsɪs/', 'The same intermediate basis used by adjacent mappings.']],
    views: [view('SUM · 加法', 'Add the representation matrices.', '把两个表示矩阵相加。', '[S+T]=[S]+[T]', 'mapping sum ↔ matrix sum', 'same domain, codomain, and bases', 'Both layers use pointwise addition.'), view('SCALAR · 数乘', 'Scale the representation matrix.', '对表示矩阵作数乘。', '[cT]=c[T]', 'mapping scale ↔ matrix scale', 'same scalar c', 'Scaling outputs becomes scaling every matrix entry.'), view('COMPOSITION · 复合', 'Multiply matrices in composition order.', '按复合次序做矩阵乘法。', '[S∘T]=[S][T]', 'x → T → S  ↔  [S][T][x]', 'T acts first', 'The intermediate coordinate basis must agree.')],
    recognitionTitle: 'Keep the two levels synchronized', recognitionZh: '同步识别映射运算、矩阵运算与次序', recognition: [['Mapping sum', 'Corresponds to matrix addition.', '需要相同定义域和值域。'], ['Scalar multiple', 'Corresponds to matrix scaling.', '使用同一标量。'], ['Composition', 'Corresponds to ordered matrix multiplication.', '右侧映射先作用。']],
    sentences: [['Composition corresponds to matrix multiplication.', '映射复合对应矩阵乘法。', 'corresponds to'], ['Use the same basis for the intermediate space.', '中间空间使用同一个基。', 'intermediate space']],
    distractors: ['线性映射与矩阵的对应关系', '线性映射的运算'], conceptCheck: ['若先 T 后 S，则对应的矩阵乘积是什么？', ['[S][T]', '[T][S]', '[S]+[T]'], 0, '复合 S∘T 先作用 T，对应矩阵乘积 [S][T]，顺序不能交换。'], summaryObject: 'mapping and matrix operations', summaryEvidence: 'the synchronized sum, scaling, and composition rules'
  }),

  makeTopic({
    slug: 'inverse-mappings-inverse-matrices', section: '2.6', family: 'Transformation', mode: 'transformation',
    title: 'Inverse Mappings and Inverse Matrices', zh: '逆映射与逆矩阵', ipa: '/ˈɪnvɜːrs ˈmæpɪŋz ænd ˈɪnvɜːrs ˈmeɪtrɪsiːz/',
    definition: 'A linear mapping is invertible exactly when its representation matrix between finite-dimensional spaces of equal dimension is invertible, and the inverse mapping is represented by the inverse matrix with bases reversed.', chinese: '在等维有限维空间及已选基下，线性映射 T 可逆当且仅当其表示矩阵可逆；逆映射 T⁻¹ 的表示矩阵是原表示矩阵的逆，且定义域、值域的基互换。', intuition: 'T 把输入送到输出，T⁻¹ 沿相反方向恢复；矩阵箭头和基标签也必须一起反转。',
    heroMain: 'T⁻¹∘T=I  ↔  [T⁻¹]=[T]⁻¹', heroSub: 'domain and codomain bases reverse', heroQuestion: 'What must be reversed besides the arrow?', heroQuestionZh: '除了箭头方向，还要反转什么？', kicker: 'TRANSFORMATION LAB · 变换实验', instruction: '观察映射、坐标矩阵与基标签如何一起反向。',
    notation: [['T⁻¹', 'T inverse', '线性映射 T 的逆映射'], ['[T]𝒞←ℬ⁻¹', 'the inverse of the matrix of T', '表示矩阵的逆'], ['T⁻¹∘T=Iᵥ', 'T inverse composed with T equals the identity on V', '复合后得到 V 上的恒等映射']],
    vocab: [['inverse mapping', '逆映射', '/ˈɪnvɜːrs ˈmæpɪŋ/', 'The mapping that reverses T.'], ['inverse matrix', '逆矩阵', '/ˈɪnvɜːrs ˈmeɪtrɪks/', 'The coordinate matrix that reverses [T].'], ['identity mapping', '恒等映射', '/aɪˈdentəti ˈmæpɪŋ/', 'The map that returns every vector unchanged.'], ['bijective', '双射的', '/baɪˈdʒektɪv/', 'Both one-to-one and onto; equivalent to invertibility.']],
    views: [view('FORWARD · 正向', 'Apply T from V to W.', '施行从 V 到 W 的映射 T。', 'T:V→W', 'v → T(v)', 'coordinates: [T]𝒞←ℬ[v]ℬ', 'The chosen bases are ℬ for V and 𝒞 for W.'), view('BACKWARD · 反向', 'Apply T inverse from W back to V.', '施行从 W 回到 V 的逆映射。', 'T⁻¹:W→V', 'T(v) → v', 'coordinates: [T]⁻¹ℬ←𝒞', 'The basis-direction labels reverse with the mapping.'), view('PRESERVED · 恢复', 'The composition returns the original vector.', '复合后恢复原向量。', 'T⁻¹(T(v))=v', 'v → T(v) → v', 'identity mapping on V', 'Invertibility means no information is lost.')],
    recognitionTitle: 'Reverse mapping, matrix, and basis direction together', recognitionZh: '同时识别逆映射、逆矩阵与基方向', recognition: [['T invertible', 'T is bijective.', '一一且映上。'], ['Matrix inverse', '[T⁻¹]=[T]⁻¹ with reversed bases.', '不是逐项倒数。'], ['Identity', 'Both compositions give the appropriate identity.', 'V 与 W 上的恒等映射要区分。']],
    sentences: [['The inverse mapping sends the output back to the input.', '逆映射把输出送回原输入。', 'sends back'], ['Reverse the domain and codomain bases.', '交换定义域与值域的基。', 'reverse the bases']],
    distractors: ['映射与矩阵的对应关系', '可逆矩阵的定义'], conceptCheck: ['若 T 可逆，T⁻¹ 的定义域是什么？', ['T 的值域 W', 'T 的定义域 V', '标量域'], 0, 'T:V→W 的逆映射方向相反，因此 T⁻¹:W→V。'], summaryObject: 'inverse mappings and inverse matrices', summaryEvidence: 'the reversed direction and identity composition'
  }),

  makeTopic({
    slug: 'encoding-and-decoding-with-inverse-matrices', section: '2.7', family: 'Procedure', mode: 'sequence', extended: true,
    title: 'Encoding and Decoding with Inverse Matrices', zh: '使用逆矩阵进行编码与解码', ipa: '/ɪnˈkoʊdɪŋ ænd diːˈkoʊdɪŋ wɪð ˈɪnvɜːrs ˈmeɪtrɪsiːz/',
    definition: 'A simple Hill-style classroom cipher encodes number blocks by an invertible matrix modulo an alphabet size and decodes with its modular inverse.', chinese: '简单的 Hill 型课堂密码把字母转换为数字块，在给定模数下用可逆矩阵编码，并用该矩阵的模逆解码。这里只预习数学语言，不讨论现代密码安全性。', intuition: '关键不是普通实数逆，而是在模运算中存在逆；同一个密钥矩阵必须能被合法撤销。',
    heroMain: 'c ≡ Kp (mod 26)', heroSub: 'decode with K⁻¹ modulo 26', heroQuestion: 'Why must the key matrix be invertible modulo 26?', heroQuestionZh: '为什么密钥矩阵必须在模 26 下可逆？', kicker: 'STEPWISE PROCEDURE · 顺序过程', instruction: '按字母转数字、矩阵编码、模逆解码的真实顺序预习。',
    notation: [['c≡Kp (mod 26)', 'c is congruent to K p modulo twenty-six', '密文块由 Kp 模 26 得到'], ['p≡K⁻¹c (mod 26)', 'p is congruent to K inverse c modulo twenty-six', '用模逆恢复明文块'], ['gcd(det K,26)=1', 'the greatest common divisor of determinant K and twenty-six is one', '密钥矩阵在模 26 下可逆的条件']],
    vocab: [['encode', '编码', '/ɪnˈkoʊd/', 'Convert a plaintext number block into ciphertext.'], ['decode', '解码', '/diːˈkoʊd/', 'Recover plaintext using the inverse key.'], ['key matrix', '密钥矩阵', '/kiː ˈmeɪtrɪks/', 'The invertible matrix used to encode.'], ['modular inverse', '模逆', '/ˈmɑːdjələr ˈɪnvɜːrs/', 'An inverse under modular arithmetic.']],
    views: [view('REPRESENT · 表示', 'Represent the letters as a number vector.', '把字母表示为数字向量。', 'p=[0;1]', 'A,B → 0,1 → p', 'one agreed alphabet convention', 'Encoding starts only after the symbol-to-number convention is fixed.'), view('ENCODE · 编码', 'Multiply by the key matrix and reduce modulo twenty-six.', '乘密钥矩阵并对 26 取模。', 'c≡Kp (mod 26)', 'K=[1 1;0 1], p=[0;1] → c=[1;1]', 'ciphertext block', 'The arithmetic is modular, not ordinary unrestricted integer arithmetic.'), view('DECODE · 解码', 'Multiply by the modular inverse to recover the plaintext.', '乘模逆矩阵恢复明文。', 'p≡K⁻¹c (mod 26)', 'K⁻¹=[1 −1;0 1] → p=[0;1]', 'original block restored', 'This toy example illustrates inverse language, not modern cryptographic security.')],
    recognitionTitle: 'Separate ordinary inverse language from modular arithmetic', recognitionZh: '识别编码、模运算、模逆与安全边界', recognition: [['Convention', 'Letters and numbers need a fixed mapping.', '不同约定会改变数字。'], ['Modulo', 'Reduce results modulo 26.', '不是普通实数运算。'], ['Invertible key', 'The modular inverse must exist.', '否则不能唯一解码。']],
    sentences: [['Encode the plaintext block with the key matrix.', '用密钥矩阵对明文块编码。', 'encode the plaintext'], ['Reduce each entry modulo twenty-six.', '把每个元素对 26 取模。', 'modulo twenty-six']],
    distractors: ['分块求逆法', '矩阵方程'], conceptCheck: ['这个课堂示例中的 K 需要哪一种逆？', ['模 26 意义下的逆', '逐项倒数', '只需实数域上的转置'], 0, '编码在模 26 运算中进行，因此解码需要 K 在模 26 下的逆矩阵。'], summaryObject: 'inverse-matrix encoding and decoding', summaryEvidence: 'the modular invertibility requirement and security limitation'
  })
];

export const chapter2TopicBySlug = Object.fromEntries(chapter2Topics.map(topic => [topic.slug, topic]));
