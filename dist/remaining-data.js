let checkId = 300;
const q = (type, question, options, answer, feedback) => ({ id: `rq${++checkId}`, type, question, options, answer, feedback });
const visual = (main, sub) => `<div class="action-object"><strong>${main}</strong><span>${sub}</span></div>`;
const step = (phase, english, chinese, notation, main, sub, note) => ({ phase, english, chinese, notation, visual: visual(main, sub), note });
const slugify = text => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const chapterMeta = {
  3: { ipa: '/dɪˈtɜːrmɪnənt/', core: ['determinant', '行列式', '/dɪˈtɜːrmɪnənt/'] },
  4: { ipa: '/ˈvektər speɪs əv en ˈtuːpəlz/', core: ['linear combination', '线性组合', '/ˈlɪniər ˌkɑːmbɪˈneɪʃən/'] },
  5: { ipa: '/ˈvektər speɪs/', core: ['vector space', '线性空间', '/ˈvektər speɪs/'] },
  6: { ipa: '/ˈaɪɡənvæljuː; ˈlɪniər ˌtrænsfərˈmeɪʃən/', core: ['linear transformation', '线性变换', '/ˈlɪniər ˌtrænsfərˈmeɪʃən/'] },
  7: { ipa: '/juːˈklɪdiən speɪs; kwɑːˈdrætɪk fɔːrm/', core: ['inner product', '内积', '/ˈɪnər ˈprɑːdʌkt/'] }
};

const modeFor = family => family === 'Procedure' ? 'sequence' : family === 'Transformation' ? 'transformation' : family === 'Structure' ? 'structure' : 'compare';

function makeTopic(chapter, section, title, zh, family, formula, definition, chinese, example, options = {}) {
  const meta = chapterMeta[chapter];
  const mode = options.mode || modeFor(family);
  const sequential = mode === 'sequence';
  const phases = sequential ? ['PREPARE · 准备', 'APPLY · 执行', 'INTERPRET · 解释'] : ['IDENTIFY · 识别', 'INSPECT · 检查', 'CONNECT · 连接'];
  const steps = [
    step(phases[0], sequential ? 'Identify the objects and check the required conditions.' : 'Identify the defining objects and conditions.', '识别对象，并检查定义所需的条件。', formula, formula, `${title} · ${zh}`, 'The condition is part of the mathematics, not optional wording.'),
    step(phases[1], sequential ? 'Apply the named operation to the small example.' : 'Inspect the defining relationship in one small example.', sequential ? '在这个小例子中执行所述数学动作。' : '在一个小例子中检查定义关系。', example, example, 'one controlled example · 一个受控小例子', 'The example is deliberately small so the classroom language stays visible.'),
    step(phases[2], 'Connect the evidence to the conclusion.', '把可见证据与结论连接起来。', options.conclusion || formula, options.conclusion || formula, 'definition → evidence → conclusion', 'The conclusion follows from the displayed condition, not from appearance alone.')
  ];
  const vocab = [
    [title, zh, meta.ipa, definition],
    meta.core,
    ['condition', '条件', '/kənˈdɪʃən/', 'A requirement that must be checked before using a definition or theorem.'],
    ['interpret', '解释 / 说明含义', '/ɪnˈtɜːrprət/', 'State what the mathematical result means in context.']
  ];
  return {
    chapter, section, slug: `c${chapter}-${slugify(title)}`, family, extended: Boolean(options.extended),
    title, zh, ipa: meta.ipa, description: definition, chinese, academic: definition, professional: chinese,
    intuition: `先听清关键词，再把课堂句子与 ${formula} 的条件和动作对应起来；不要只凭图形外观判断。`,
    hero: `<div class="matrix-concept-hero"><strong>${formula}</strong><span>${example}</span></div>`,
    question: options.question || `What condition makes this statement valid?`, questionZh: options.questionZh || '这个结论成立需要什么条件？',
    notation: [[formula, options.reading || `the displayed ${title.toLowerCase()} relationship`, `读作并解释：${formula}`], [example, 'the small example', `小例子：${example}`], [options.conclusion || formula, 'the resulting conclusion', '由条件得到的结论']],
    actionQuestion: options.actionQuestion || `How do we recognize ${title.toLowerCase()}?`, activityMode: mode,
    activityKicker: sequential ? 'STEPWISE PROCEDURE · 顺序过程' : mode === 'transformation' ? 'TRANSFORMATION LAB · 变换实验' : mode === 'compare' ? 'COMPARE & CLASSIFY · 比较与分类' : mode === 'decision' ? 'DECISION BOARD · 判定板' : mode === 'sync' ? 'SYNCHRONIZED VIEWS · 同步视图' : 'STRUCTURE MAP · 结构图',
    activityInstruction: sequential ? '按真实数学顺序完成一个小例子。' : '这些视图没有强制先后顺序，可直接选择比较。',
    steps, vocab,
    recognitionTitle: 'Recognize the condition, evidence, and conclusion', recognitionZh: '分别识别条件、证据与结论',
    recognition: [['Condition', formula, '先确认定义或定理的前提。'], ['Evidence', example, '只使用一个最小而准确的例子。'], ['Conclusion', options.conclusion || formula, '结论不能超出已显示的条件。']],
    sentences: [
      [`State the definition of ${title.toLowerCase()}.`, `说明“${zh}”的定义。`, 'state the definition'],
      ['Check that the required condition is satisfied.', '检查所需条件是否满足。', 'is satisfied'],
      [`Use ${formula} in this example.`, `在这个例子中使用 ${formula}。`, 'use the relationship'],
      ['Interpret the result in mathematical language.', '用数学语言解释结果。', 'interpret the result']
    ],
    checks: [
      q('TERM MATCH · 术语对应', `“${title}” 对应哪个中文术语？`, [zh, '矩阵的迹', '初等行变换'], 0, `${title} 的课程标准中文名称是“${zh}”。`),
      q('READ THE NOTATION · 符号读法', `本页核心关系是哪一个？`, [formula, 'AB=BA for all matrices', '0 is an eigenvector'], 0, `${formula} 是本页使用的核心符号关系；其余选项不满足本页条件。`),
      q('CONDITION · 条件判断', '课堂上听到 “check the required condition” 时，应该先做什么？', ['确认定义或定理的前提是否满足', '忽略条件直接套公式', '只看图形是否相似'], 0, '数学结论依赖明确条件；先核对条件，再使用公式或分类。')
    ],
    summary: [`I can recognize “${title}”.`, `I can connect it to “${zh}”.`, `I can read ${formula} with support.`, 'I can follow a classroom instruction that asks me to check its condition.']
  };
}

export const remainingSections = [
  { chapter:3,id:'3.1',title:'Definition of an n × n Determinant',zh:'n 阶行列式的定义' },
  { chapter:3,id:'3.2',title:'Properties of Determinants',zh:'行列式的性质' },
  { chapter:3,id:'3.3',title:'Cofactor Expansion Along a Row or Column',zh:'行列式按一行（列）展开' },
  { chapter:3,id:'3.4',title:"Cramer's Rule",zh:'克拉默法则' },
  { chapter:3,id:'3.5',title:'Extended Reading: Geometric Meaning of Determinants',zh:'拓展阅读：行列式的几何意义及应用',extended:true },
  { chapter:4,id:'4.1',title:'Linear Dependence and Independence of n-Tuple Vectors',zh:'n 元向量组的线性相关性' },
  { chapter:4,id:'4.2',title:'Rank of a Set of Vectors',zh:'向量组的秩' },
  { chapter:4,id:'4.3',title:'Vector Spaces of n-Tuples',zh:'n 元向量空间' },
  { chapter:4,id:'4.4',title:'Structure of the Solution Set of a Linear System',zh:'线性方程组解的结构' },
  { chapter:4,id:'4.5',title:'Extended Reading: Datum Adjustment and Least Squares',zh:'拓展阅读：大地基准校正与最小二乘法',extended:true },
  { chapter:5,id:'5.1',title:'Definition and Properties of Vector Spaces',zh:'线性空间的定义和性质' },
  { chapter:5,id:'5.2',title:'Finite-Dimensional Vector Spaces',zh:'有限维线性空间' },
  { chapter:6,id:'6.1',title:'Eigenvalues and Eigenvectors of a Square Matrix',zh:'方阵的特征值与特征向量' },
  { chapter:6,id:'6.2',title:'Similarity and Diagonalization of Square Matrices',zh:'方阵的相似及相似对角化' },
  { chapter:6,id:'6.3',title:'Linear Transformations',zh:'线性变换' },
  { chapter:6,id:'6.4',title:'Extended Reading: Applications of Eigenvalues and Eigenvectors',zh:'拓展阅读：特征值与特征向量的应用',extended:true },
  { chapter:7,id:'7.1',title:'Fundamental Topics in Euclidean Spaces',zh:'欧氏空间中的基本问题' },
  { chapter:7,id:'7.2',title:'Orthogonal Transformations and Orthogonal Matrices',zh:'正交变换与正交矩阵' },
  { chapter:7,id:'7.3',title:'Symmetric Transformations and Real Symmetric Matrices',zh:'对称变换与实对称矩阵' },
  { chapter:7,id:'7.4',title:'Quadratic Forms and Their Standard Forms',zh:'二次型及其标准形' },
  { chapter:7,id:'7.5',title:'Positive Definite Quadratic Forms and Matrices',zh:'正定二次型与正定矩阵' }
];

const R = [];
const add = (c,s,t,z,f,formula,def,cn,ex,o={}) => R.push(makeTopic(c,s,t,z,f,formula,def,cn,ex,o));

// Chapter 3 · Determinants (14)
add(3,'3.1','Permutations and Inversions','排列与逆序','Concept','τ(π)=number of inversions','An inversion is a pair that appears in the opposite order; its count determines the sign of a permutation.','逆序是排列中前大后小的一对元素；逆序数的奇偶性决定排列的符号。','π=(2,1,3) has one inversion',{mode:'compare'});
add(3,'3.1','Determinants of Order Two and Three','二阶与三阶行列式','Procedure','det([a b;c d])=ad−bc','A second-order determinant is ad−bc; a third-order determinant combines six signed products.','二阶行列式等于 ad−bc；三阶行列式由六个带符号的乘积组成。','det([1 2;3 4])=−2');
add(3,'3.1','Definition of an n × n Determinant','n 阶行列式的定义','Concept','det(A)=Σ sgn(σ)∏aᵢ,σ(i)','The determinant is the signed sum over all permutations, choosing one entry from each row and column.','n 阶行列式是在所有排列上求带符号乘积之和，每项恰从每行每列取一个元素。','one permutation selects a₁σ(1)…aₙσ(n)',{mode:'structure'});
add(3,'3.2','Determinant of the Transpose','转置矩阵的行列式','Structure','det(Aᵀ)=det(A)','Transposition leaves the determinant unchanged.','矩阵转置不改变行列式的值。','det([1 2;3 4]ᵀ)=−2');
add(3,'3.2','Multilinearity and Alternating Properties','行列式的多重线性与反对称性质','Structure','det(...,u+v,...)=det(...,u,...)+det(...,v,...)','The determinant is linear in each row separately and changes sign when two rows are interchanged.','行列式对每一行分别线性；交换两行会使行列式变号。','equal rows imply determinant zero');
add(3,'3.2','Effects of Elementary Row and Column Operations','初等行列变换对行列式的影响','Procedure','swap → −det; scale by c → c·det','Row replacement preserves the determinant, row scaling scales it, and row interchange changes its sign.','倍加变换不改变行列式；某行乘 c 使行列式乘 c；交换两行使其变号。','R₂←R₂−2R₁ leaves det unchanged');
add(3,'3.2','Computing Determinants by Triangularization','三角化方法计算行列式','Procedure','det(U)=u₁₁u₂₂⋯uₙₙ','After tracking row-operation effects, the determinant of a triangular matrix is the product of its diagonal entries.','记录行变换对行列式的影响后，三角矩阵的行列式等于主对角元素之积。','det([2 1;0 3])=6');
add(3,'3.3','Minors, Cofactors, and Algebraic Cofactors','子式、余子式与代数余子式','Concept','Cᵢⱼ=(−1)ⁱ⁺ʲMᵢⱼ','A minor deletes a row and column; the cofactor adds the checkerboard sign.','余子式由删去指定行列得到，代数余子式再乘符号因子 (−1)ⁱ⁺ʲ。','C₁₂=−M₁₂',{mode:'compare'});
add(3,'3.3','Cofactor Expansion Theorem','按行或列展开定理','Structure','det(A)=Σⱼ aᵢⱼCᵢⱼ','A determinant may be expanded along any one row or column using entries and their cofactors.','行列式可沿任意一行或一列，用元素与对应代数余子式的乘积求和展开。','expand along a row containing zeros');
add(3,'3.3','Computing Determinants by Reducing the Order','降阶法计算行列式','Procedure','n×n → cofactors of order n−1','Cofactor expansion reduces an n-th order determinant to smaller determinants.','按行或列展开把 n 阶行列式化为若干 n−1 阶行列式。','choose the sparsest row');
add(3,'3.4',"Statement and Conditions of Cramer's Rule",'克拉默法则的结论与条件','Structure','xᵢ=det(Aᵢ)/det(A)','Cramer’s Rule requires a square coefficient matrix with det(A)≠0.','克拉默法则要求系数矩阵为方阵且 det(A)≠0，此时方程组有唯一解。','Aᵢ replaces column i by b',{mode:'decision'});
add(3,'3.4',"Solving Linear Systems with Cramer's Rule",'克拉默法则求解线性方程组','Procedure','xᵢ=det(Aᵢ)/det(A)','Cramer’s Rule computes each unknown from a determinant ratio when its conditions hold.','在满足条件时，每个未知量等于相应替换列行列式与 det(A) 的比。','2x+y=5, x−y=1');
add(3,'3.5','Determinants as Signed Area and Volume Scaling','行列式的有向面积与体积缩放意义','Transformation','signed scale factor = det(A)','The determinant gives signed area or volume scaling; its magnitude gives scale and its sign records orientation.','行列式的绝对值给出面积或体积缩放倍数，符号记录定向是否反转。','det([2 0;0 3])=6',{extended:true});
add(3,'3.5','Examples of Determinants in Elementary Mathematics','行列式在初等数学中的应用举例','Procedure','area=|det(u,v)|/2','Small determinant formulas can test collinearity and compute triangle area.','小型行列式可用于判断共线并计算三角形面积。','u=(2,0), v=(0,3) gives area 3',{extended:true,mode:'compare'});

// Chapter 4 · Vector Spaces of n-Tuples (22)
add(4,'4.1','Linear Combinations and Linear Representation','线性组合与线性表示','Concept','v=c₁v₁+⋯+cₖvₖ','A vector is linearly represented by a set when it is a linear combination of those vectors.','若向量 v 能写成给定向量组的线性组合，则称 v 可由该向量组线性表示。','(3,2)=3(1,0)+2(0,1)',{mode:'sync'});
add(4,'4.1','Determining Whether a Vector Has a Linear Representation','线性表示关系的判定','Procedure','Ac=b','Solve the coefficient system Ac=b to decide whether b lies in the span of the columns of A.','通过求解系数方程 Ac=b，判断 b 是否属于 A 的列向量张成空间。','[v₁ v₂]c=b');
add(4,'4.1','Linear Dependence and Linear Independence','线性相关与线性无关','Concept','c₁v₁+⋯+cₖvₖ=0','A set is independent when the zero combination has only the trivial solution.','当零向量的线性组合只有全零系数解时，向量组线性无关。','v₂=2v₁ gives dependence',{mode:'compare'});
add(4,'4.1','Criteria for Linear Dependence and Independence','线性相关性的判定','Procedure','rank([v₁⋯vₖ])=k','Column vectors are independent exactly when the matrix with those columns has a pivot in every column.','以向量为列组成矩阵；每列都有主元时向量组线性无关。','two pivots for two vectors');
add(4,'4.1','Fundamental Consequences of Dependence and Independence','线性相关与线性无关的重要结论','Structure','one vector is a combination of the others','A finite set is dependent exactly when one vector is a linear combination of the others.','有限向量组线性相关，当且仅当其中至少一个向量可由其余向量线性表示。','including 0 makes a set dependent');
add(4,'4.2','Equivalent Sets of Vectors','向量组的等价','Structure','span(S)=span(T)','Two vector sets are equivalent when each linearly represents the other, so they have the same span.','两个向量组互相线性表示时等价，并张成同一个子空间。','{e₁,e₂} and {e₁,e₁+e₂}');
add(4,'4.2','Rank of a Set of Vectors','向量组的秩','Structure','rank(S)=size of a maximal independent subset','The rank of a finite vector set is the number of vectors in any maximal linearly independent subset.','有限向量组的秩等于其任一极大线性无关组所含向量个数。','three vectors spanning a plane have rank 2');
add(4,'4.2','Maximal Linearly Independent Subsets','极大无关组','Structure','span(B)=span(S), B independent','A maximal independent subset is independent and can linearly represent every vector in the original set.','极大无关组自身线性无关，并能线性表示原向量组中的每个向量。','remove a dependent vector without changing span');
add(4,'4.2','Computing Rank and a Maximal Independent Subset','向量组秩与极大无关组的计算','Procedure','pivot columns of the original matrix','Row-reduce the column matrix; pivot columns in the original matrix form a maximal independent subset.','把向量作为列行化简；原矩阵中对应主元列的向量构成极大无关组。','pivots in columns 1 and 3');
add(4,'4.2','Row Rank, Column Rank, and Matrix Rank','行秩、列秩与矩阵秩','Structure','row rank = column rank = rank(A)','The maximum independent row count equals the maximum independent column count and equals matrix rank.','矩阵的行秩、列秩与矩阵秩相等。','two pivots mean both ranks are 2');
add(4,'4.3','The Vector Space of n-Tuples','n 元向量空间','Structure','Fⁿ with componentwise operations','The n-tuples over a field form a vector space under componentwise addition and scalar multiplication.','域 F 上的 n 元数组在逐分量加法与数乘下构成向量空间 Fⁿ。','R² contains (1,2)');
add(4,'4.3','Subspaces and the Subspace Test','子空间及其判定','Concept','u,v∈W ⇒ au+bv∈W','A nonempty subset is a subspace when it is closed under linear combinations.','非空子集 W 对任意线性组合封闭时是子空间。','a line through the origin in R²',{mode:'decision'});
add(4,'4.3','Basis and Dimension of a Subspace','子空间的基与维数','Structure','basis = spanning + independent','A basis is a linearly independent spanning set; its number of vectors is the dimension.','子空间的基既张成该空间又线性无关；基向量个数是维数。','{(1,0),(0,1)} basis of R²');
add(4,'4.3','Row Space and Column Space','矩阵的行空间与列空间','Structure','Row(A), Col(A)','The row space is spanned by rows in Fⁿ, while the column space is spanned by columns in Fᵐ.','m×n 矩阵的行空间位于 Fⁿ，列空间位于 Fᵐ；二者维数相同。','pivot columns of original A span Col(A)',{mode:'sync'});
add(4,'4.4','Linear Properties of Solutions to Homogeneous Systems','齐次线性方程组解的线性性质','Structure','Ax=0 ⇒ solution set is a subspace','Solutions of a homogeneous linear system contain zero and are closed under linear combinations.','齐次方程组 Ax=0 的解集含零向量，并对线性组合封闭，因此是子空间。','if Ax=Ay=0 then A(ax+by)=0');
add(4,'4.4','Fundamental Solution Sets and the Dimension of the Solution Space','基础解系与解空间的维数','Structure','nullity(A)=n−rank(A)','A fundamental solution set is a basis of the null space; its size is n−rank(A).','基础解系是齐次方程解空间的一组基，其向量个数为 n−rank(A)。','one free variable gives one basis solution');
add(4,'4.4','General Solution of a Homogeneous Linear System','齐次线性方程组的通解结构','Procedure','x=c₁η₁+⋯+cₖηₖ','Every homogeneous solution is a linear combination of a fundamental solution set.','齐次方程组的每个解都是基础解系向量的线性组合。','x=t(−1,1)');
add(4,'4.4','General Solution of a Nonhomogeneous Linear System','非齐次线性方程组的通解结构','Procedure','x=xₚ+xₕ','When consistent, every nonhomogeneous solution is one particular solution plus a homogeneous solution.','非齐次方程组相容时，通解等于一个特解加对应齐次方程的通解。','x=(1,0)+t(−1,1)');
add(4,'4.4','Image and Kernel of a Matrix-Defined Linear Mapping','矩阵所确定线性映射的像空间与核空间','Transformation','Im(T)=Col(A), Ker(T)=Null(A)','For T(x)=Ax, the image is the column space and the kernel is the solution space of Ax=0.','对 T(x)=Ax，像空间是 A 的列空间，核空间是齐次方程 Ax=0 的解空间。','input x maps to Ax',{mode:'transformation'});
add(4,'4.4','Dimensions of the Image and Kernel','像空间与核空间的维数','Structure','dim Ker(T)+dim Im(T)=n','For a map from an n-dimensional space, nullity plus rank equals n.','定义域为 n 维时，核空间维数与像空间维数之和等于 n。','nullity 1 + rank 2 = domain dimension 3');
add(4,'4.5','North American Datum Adjustment as a Linear Algebra Application','北美大地基准校正的线性代数背景','Structure','measurement equations → overdetermined system','Datum adjustment combines many measurements into a consistent coordinate model, often producing an overdetermined system.','大地基准校正把多组测量关系组织为超定线性系统，再寻找最一致的坐标模型。','more observations than unknown coordinates',{extended:true});
add(4,'4.5','An Introduction to the Method of Least Squares','最小二乘法初步','Procedure','minimize ‖Ax−b‖²','Least squares chooses x so that the residual Ax−b has minimum length, often via normal equations.','最小二乘法选择使残差 Ax−b 长度最小的 x，常通过正规方程求解。','AᵀAx=Aᵀb',{extended:true});

// Chapter 5 · Vector Spaces (12)
add(5,'5.1','Definition and Basic Properties of a Vector Space','线性空间的定义与基本性质','Structure','(V,+,·) satisfies the vector-space axioms','A vector space is a set with addition and scalar multiplication satisfying the vector-space axioms.','线性空间是在向量加法与标量乘法下满足相应公理的集合。','polynomials of degree ≤2 form a vector space');
add(5,'5.1','Linear Subspaces and the Subspace Test','线性子空间及其判定','Concept','au+bv∈W','A nonempty subset W is a subspace when every linear combination of vectors in W remains in W.','非空子集 W 对其中向量的任意线性组合封闭时是线性子空间。','polynomials with p(0)=0',{mode:'decision'});
add(5,'5.1','Sum and Intersection of Subspaces','子空间的和与交','Structure','U+W={u+w}','The intersection is always a subspace, and the sum contains all u+w with u in U and w in W.','子空间的交仍是子空间；子空间的和由所有 u+w 构成。','U∩W may be {0}',{mode:'compare'});
add(5,'5.1','Dimension Formula for the Sum of Subspaces','子空间和的维数公式','Structure','dim(U+W)=dim U+dim W−dim(U∩W)','The intersection dimension is subtracted because its directions were counted twice.','维数公式中减去交空间维数，是因为共同方向在前两项中被重复计算。','two planes sharing a line: 2+2−1=3');
add(5,'5.2','Basis and Dimension in a Finite-Dimensional Vector Space','有限维线性空间的基与维数','Structure','basis = independent spanning set','Every basis of a finite-dimensional vector space has the same number of vectors, called the dimension.','有限维线性空间的每组基所含向量数相同，这个数称为空间的维数。','{1,x,x²} basis of P₂');
add(5,'5.2','Coordinates Relative to a Basis','向量在一组基下的坐标','Structure','v=c₁β₁+⋯+cₙβₙ ↔ [v]ℬ','Coordinates are the unique coefficients of a vector relative to an ordered basis.','向量关于有序基的坐标，是其唯一线性表示中的系数列。','1+2x ↔ [1,2] in {1,x}',{mode:'sync'});
add(5,'5.2','Linear Isomorphism and the Coordinate Method','线性同构与坐标化方法','Transformation','V ≅ Fⁿ via v↦[v]ℬ','Choosing a basis gives a linear isomorphism from an n-dimensional vector space to Fⁿ.','选择一组基可把 n 维线性空间与 Fⁿ 通过坐标映射线性同构起来。','p(x)=1+2x maps to (1,2)',{mode:'transformation'});
add(5,'5.2','Change of Basis and Transition Matrices','基变换与过渡矩阵','Transformation','[v]ℬ=Pℬ←𝒞[v]𝒞','A transition matrix converts coordinates of the same vector between two ordered bases.','过渡矩阵在两组有序基之间转换同一个向量的坐标；向量本身不变。','same v, two coordinate columns',{mode:'transformation'});
add(5,'5.2','Coordinate Transformation Formula','坐标变换公式','Procedure','[v]𝒞=P𝒞←ℬ[v]ℬ','Coordinate transformation multiplies the old coordinate column by the correctly directed transition matrix.','坐标变换用方向正确的过渡矩阵乘旧坐标列，得到同一向量的新坐标。','check the arrow on P before multiplying');
add(5,'5.2','Computing Transition Matrices and Coordinates in Typical Vector Spaces','典型线性空间中过渡矩阵与坐标的计算','Procedure','columns of P are basis-vector coordinates','The columns of a transition matrix are the coordinates of one basis vectors relative to the other basis.','过渡矩阵的各列由一组基向量在另一组基下的坐标组成。','basis {1,x} versus {1,1+x}');
add(5,'5.2','Using Coordinates to Test Dependence and Compute Rank','用坐标判断线性相关性并计算秩','Procedure','rank([ [v₁]ℬ ⋯ [vₖ]ℬ ])','Coordinate isomorphisms preserve linear relations, so dependence and rank can be tested with coordinate columns.','坐标同构保持线性关系，因此可用坐标列组成矩阵判断相关性和秩。','coordinate matrix has two pivots');
add(5,'5.2','Computing a Maximal Independent Subset by Coordinate Methods','用坐标法求极大无关组','Procedure','pivot columns → original vectors','Row-reduce the coordinate matrix and select the original vectors corresponding to pivot columns.','行化简坐标矩阵，并选取与主元列对应的原向量，得到极大无关组。','pivot columns 1 and 3');

// Chapter 6 · Eigenvalues and Linear Transformations (15)
add(6,'6.1','Definition and Geometric Meaning of Eigenvalues and Eigenvectors','特征值与特征向量的定义及几何意义','Transformation','Av=λv, v≠0','An eigenvector is a nonzero vector whose direction is preserved by A, with scale factor λ.','特征向量必须非零；线性变换作用后仍在同一直线上，缩放因子是特征值 λ。','[2 0;0 1](1,0)=2(1,0)',{mode:'transformation'});
add(6,'6.1','Computing Eigenvalues and Eigenvectors','特征值与特征向量的计算','Procedure','det(A−λI)=0','Eigenvalues solve the characteristic equation; eigenvectors are nonzero solutions of (A−λI)v=0.','先解特征方程得到 λ，再求齐次方程 (A−λI)v=0 的非零解。','A=diag(2,3) gives λ=2,3');
add(6,'6.1','Properties of Eigenvalues and Eigenvectors','特征值与特征向量的性质','Structure','sum λᵢ=tr(A), product λᵢ=det(A)','Counting algebraic multiplicity, eigenvalues connect to trace and determinant; eigenvectors for distinct eigenvalues are independent.','按代数重数计，特征值之和等于迹、乘积等于行列式；不同特征值的特征向量线性无关。','λ=2,3 gives trace 5 and determinant 6');
add(6,'6.1','Algebraic Multiplicity and Geometric Multiplicity','特征值的代数重数与几何重数','Structure','1≤m_g(λ)≤m_a(λ)','Algebraic multiplicity is the root multiplicity; geometric multiplicity is the eigenspace dimension and cannot exceed it.','代数重数是特征多项式根的重数，几何重数是特征子空间维数，且不超过代数重数。','double root with one eigenvector direction',{mode:'compare'});
add(6,'6.2','Similar Matrices and Properties of Similarity','相似矩阵及相似关系的性质','Structure','B=P⁻¹AP','Similar matrices represent the same linear transformation in different bases and share characteristic data.','相似矩阵表示同一线性变换在不同基下的矩阵，具有相同特征多项式、特征值、迹与行列式。','same transformation, changed coordinates');
add(6,'6.2','Conditions for Diagonalizability','方阵可相似对角化的条件','Structure','A diagonalizable ⇔ n independent eigenvectors','An n×n matrix is diagonalizable exactly when it has n linearly independent eigenvectors.','n 阶矩阵可对角化，当且仅当它有 n 个线性无关的特征向量。','sum of eigenspace dimensions = n',{mode:'decision'});
add(6,'6.2','Diagonalizing a Matrix','方阵的相似对角化计算','Procedure','A=PDP⁻¹','Place independent eigenvectors in P and matching eigenvalues on the diagonal of D.','把线性无关的特征向量作为 P 的列，并按相同次序把特征值放在 D 的对角线上。','P=[v₁ v₂], D=diag(λ₁,λ₂)');
add(6,'6.2','Computing Powers of a Matrix by Diagonalization','利用对角化计算方阵的幂','Procedure','Aᵏ=PDᵏP⁻¹','If A=PDP⁻¹, powers reduce to taking powers of the diagonal entries of D.','若 A=PDP⁻¹，则 Aᵏ=PDᵏP⁻¹，只需对 D 的对角元素求幂。','Dᵏ=diag(λ₁ᵏ,λ₂ᵏ)');
add(6,'6.2','Real Symmetric Matrices and Orthogonal Diagonalization','实对称矩阵与正交相似对角化','Transformation','A=QDQᵀ, QᵀQ=I','Every real symmetric matrix has an orthonormal eigenbasis and can be orthogonally diagonalized.','每个实对称矩阵都有一组标准正交特征向量基，可写成 A=QDQᵀ。','orthonormal eigenvectors form columns of Q',{mode:'transformation'});
add(6,'6.3','Definition and Properties of Linear Transformations','线性变换的定义与性质','Transformation','T(au+bv)=aT(u)+bT(v)','A linear transformation preserves linear combinations.','线性变换保持线性组合，即同时保持向量加法与标量乘法。','T(x,y)=(2x,y)',{mode:'transformation'});
add(6,'6.3','Matrix of a Linear Transformation Relative to a Basis','线性变换在一组基下的矩阵','Transformation','[T(v)]ℬ=[T]ℬ[v]ℬ','Relative to a basis, the columns of [T] are the coordinates of the images of the basis vectors.','关于一组基，表示矩阵的各列是基向量在 T 下的像的坐标。','column j is [T(βⱼ)]ℬ',{mode:'sync'});
add(6,'6.3','Matrices of the Same Transformation in Different Bases','同一线性变换在不同基下的矩阵','Transformation','[T]𝒞=P⁻¹[T]ℬP','Matrices of the same transformation in different bases are similar.','同一线性变换在不同基下的表示矩阵彼此相似。','same T, basis ℬ versus 𝒞',{mode:'sync'});
add(6,'6.3','Coordinates of Preimages and Images','原像与像的坐标关系','Transformation','[w]𝒞=[T]𝒞←ℬ[v]ℬ','The representation matrix maps input coordinates to output coordinates relative to named bases.','表示矩阵把定义域基下的原像坐标映到值域基下的像坐标。','v → T(v)=w',{mode:'transformation'});
add(6,'6.4','Applications of Eigenvalue Theory','特征值理论应用举例','Transformation','xₖ=Aᵏx₀','Eigenvalues describe long-term growth and invariant modes in repeated linear systems.','在重复线性系统中，特征值描述长期增长率，特征向量描述不变模式。','dominant |λ| controls long-term behavior',{extended:true,mode:'transformation'});
add(6,'6.4','Applications of Linear Transformations','线性变换应用举例','Transformation','input → linear model → output','Linear transformations model rotations, projections, coordinate changes, and other structure-preserving processes.','线性变换可建模旋转、投影、坐标变换等保持线性结构的过程。','projection sends a vector to a subspace',{extended:true,mode:'transformation'});

// Chapter 7 · Euclidean Spaces and Quadratic Forms (25)
add(7,'7.1','Inner Products and Euclidean Spaces','内积与欧氏空间','Structure','⟨u,v⟩','An inner product is positive definite, symmetric, and linear, providing length and angle in a real vector space.','实线性空间上的内积满足正定、对称与线性，从而定义长度、距离与角度。','standard dot product in R²');
add(7,'7.1','Gram Matrix of an Inner Product','内积的度量矩阵','Structure','G=(⟨βᵢ,βⱼ⟩)','The Gram matrix records pairwise inner products of basis vectors and represents the inner product in coordinates.','Gram 矩阵记录基向量两两内积，并在坐标下表示该内积。','⟨x,y⟩=[x]ᵀG[y]',{mode:'sync'});
add(7,'7.1','Cauchy-Schwarz Inequality, Length, and Orthogonality','柯西–施瓦茨不等式、长度与正交性','Structure','|⟨u,v⟩|≤‖u‖‖v‖','Cauchy–Schwarz bounds inner products; length is √⟨v,v⟩ and orthogonality means inner product zero.','柯西–施瓦茨不等式给出内积上界；长度为 √⟨v,v⟩，正交表示内积为零。','(1,0)⊥(0,1)');
add(7,'7.1','Orthogonal Sets and Orthonormal Bases','正交组与标准正交基','Structure','⟨qᵢ,qⱼ⟩=δᵢⱼ','An orthonormal set is orthogonal and every vector has length one.','标准正交组中不同向量两两正交，并且每个向量长度为 1。','{e₁,e₂} in R²',{mode:'compare'});
add(7,'7.1','Gram-Schmidt Orthogonalization','施密特正交化','Procedure','u₂=v₂−projᵤ₁(v₂)','Gram–Schmidt subtracts projections in order to build an orthogonal or orthonormal basis with the same span.','施密特过程按顺序减去已有方向上的投影，得到张成空间相同的正交或标准正交基。','v₁=(1,0), v₂=(1,1)');
add(7,'7.1','QR Decomposition: An Introduction','QR 分解初步','Procedure','A=QR','For a matrix with independent columns, Gram–Schmidt produces Q with orthonormal columns and an upper-triangular R.','对列线性无关的矩阵，施密特过程给出标准正交列矩阵 Q 与上三角矩阵 R，使 A=QR。','columns of A become Q times R');
add(7,'7.1','Computing Inner Products in Euclidean Spaces','欧氏空间中向量内积的计算','Procedure','⟨x,y⟩=[x]ᵀG[y]','With Gram matrix G in a chosen basis, compute the inner product by xᵀGy.','在指定基与 Gram 矩阵 G 下，内积可由坐标公式 [x]ᵀG[y] 计算。','G=I gives the dot product');
add(7,'7.2','Orthogonal Transformations and Their Geometric Meaning','正交变换及其几何意义','Transformation','⟨Tu,Tv⟩=⟨u,v⟩','An orthogonal transformation preserves inner products, hence lengths and angles.','正交变换保持内积，因此保持长度、距离与角度。','rotation preserves vector length',{mode:'transformation'});
add(7,'7.2','Criteria for an Orthogonal Transformation','正交变换的判定','Structure','T preserves inner products','A linear transformation is orthogonal exactly when it preserves inner products, equivalently norms.','线性变换为正交变换，当且仅当它保持内积；在实内积空间中也等价于保持范数。','check ‖T(v)‖=‖v‖',{mode:'decision'});
add(7,'7.2','Equivalent Definitions and Properties of Orthogonal Matrices','正交矩阵的等价定义与性质','Structure','QᵀQ=I ⇔ Q⁻¹=Qᵀ','A real square matrix is orthogonal when its columns form an orthonormal basis, equivalently QᵀQ=I.','实方阵 Q 正交，当且仅当 QᵀQ=I，也等价于其列向量构成标准正交基。','det(Q)=±1');
add(7,'7.3','Symmetric Transformations and Their Criteria','对称变换及其判定','Transformation','⟨T(u),v⟩=⟨u,T(v)⟩','A symmetric transformation is self-adjoint with respect to the stated inner product.','对称变换相对于给定内积满足 ⟨T(u),v⟩=⟨u,T(v)⟩。','verify the identity for basis vectors',{mode:'transformation'});
add(7,'7.3','Symmetric Transformations and Real Symmetric Matrices','对称变换与实对称矩阵的关系','Transformation','[T]ℬᵀ=[T]ℬ in an orthonormal basis','In an orthonormal basis, a symmetric transformation is represented by a real symmetric matrix.','在标准正交基下，对称变换的表示矩阵是实对称矩阵。','basis choice must be orthonormal',{mode:'sync'});
add(7,'7.3','Properties of Real Symmetric Matrices','实对称矩阵的性质','Structure','A=Aᵀ','Real symmetric matrices have real eigenvalues and orthogonal eigenspaces for distinct eigenvalues.','实对称矩阵的特征值均为实数，不同特征值对应的特征向量彼此正交。','distinct eigenspaces are orthogonal');
add(7,'7.3','Orthogonal Diagonalization of Real Symmetric Matrices','实对称矩阵的正交相似对角化','Procedure','QᵀAQ=D','Choose an orthonormal eigenbasis to form Q; then QᵀAQ is diagonal.','选择一组标准正交特征向量构成 Q，则 QᵀAQ 为对角矩阵。','columns of Q are normalized eigenvectors');
add(7,'7.4','Quadratic Forms and Their Matrix Representation','二次型及其矩阵表示','Structure','q(x)=xᵀAx, A=Aᵀ','Every real quadratic form has a unique symmetric matrix representation.','每个实二次型都可唯一表示为 q(x)=xᵀAx，其中 A 为实对称矩阵。','2xy uses a₁₂=a₂₁=1',{mode:'sync'});
add(7,'7.4','Rank of a Quadratic Form','二次型的秩','Structure','rank(q)=rank(A)','The rank of a quadratic form is the rank of its symmetric coefficient matrix and is invariant under invertible changes of variables.','二次型的秩是其对称系数矩阵的秩，并在可逆线性变量替换下保持不变。','q=x₁² has rank 1');
add(7,'7.4','Equivalence of Quadratic Forms and Matrix Congruence','二次型的等价与矩阵的合同','Structure','B=PᵀAP','Two quadratic forms are equivalent under an invertible change of variables exactly when their symmetric matrices are congruent.','二次型经可逆线性替换互相转化，当且仅当其对称矩阵满足合同关系 B=PᵀAP。','congruence is not similarity',{mode:'compare'});
add(7,'7.4','Orthogonal Change of Variables to Standard Form','用正交线性替换化二次型为标准形','Procedure','x=Qy ⇒ q=yᵀ(QᵀAQ)y','Orthogonal diagonalization removes cross terms while preserving Euclidean length.','利用正交矩阵 Q 作变量替换 x=Qy，可把实二次型化为无交叉项的标准形。','QᵀAQ=D');
add(7,'7.4','Completing the Square and Elementary-Transformation Methods','配方法与初等变换法化标准形','Procedure','q → sum of squared terms','Completing squares or synchronized elementary row and column operations remove cross terms and produce a standard form.','配方法或同步的初等行列变换可消去交叉项，把二次型化为标准形。','x²+2xy+y²=(x+y)²');
add(7,'7.4','Canonical Form, Inertia Indices, and Signature','规范形、惯性指数与符号差','Structure','q=y₁²+⋯+yₚ²−yₚ₊₁²−⋯−yₚ₊q²','The canonical form records positive, negative, and zero squares; the signature is p−q.','规范形记录正平方项、负平方项与零项；正负惯性指数分别为 p、q，符号差为 p−q。','p=2,q=1 gives signature 1');
add(7,'7.4',"Sylvester's Law of Inertia and Congruence Criteria",'惯性定理与实对称矩阵合同的条件','Structure','same inertia indices ⇔ congruent','Sylvester’s law states that inertia indices are invariant under real invertible changes of variables and classify real symmetric matrices up to congruence.','惯性定理说明正负惯性指数在实可逆变量替换下不变，并判定实对称矩阵的合同关系。','same p,q,zero count',{mode:'decision'});
add(7,'7.5','Positive Definite Quadratic Forms and Matrices','正定二次型与正定矩阵的概念','Concept','xᵀAx>0 for every x≠0','A real symmetric matrix is positive definite when its quadratic form is positive for every nonzero vector.','实对称矩阵 A 正定，当且仅当对每个非零实向量 x 都有 xᵀAx>0。','x₁²+x₂²>0 for x≠0',{mode:'decision'});
add(7,'7.5','Properties of Positive Definite Matrices','正定矩阵的性质','Structure','A positive definite ⇒ all eigenvalues >0','A real positive definite matrix is invertible, has positive eigenvalues, and has positive leading principal minors.','实正定矩阵可逆，全部特征值为正，且各阶顺序主子式为正。','det(A)>0');
add(7,'7.5','Criteria for Positive Definiteness','正定性的判定','Procedure','λᵢ>0 ⇔ leading principal minors >0','For a real symmetric matrix, positivity of all eigenvalues or all leading principal minors characterizes positive definiteness.','对实对称矩阵，全部特征值为正或全部顺序主子式为正，都可判定正定。','2×2: a₁₁>0 and det(A)>0');
add(7,'7.5','An Introduction to the Method of Least Squares','最小二乘法简介','Procedure','AᵀAx=Aᵀb','Least squares projects b onto the column space of A, making the residual orthogonal to every column of A.','最小二乘解把 b 投影到 A 的列空间，使残差 b−A x̂ 与 A 的每一列正交。','Aᵀ(b−A x̂)=0',{mode:'sequence'});

export const remainingTopics = R;
export const remainingTopicBySlug = Object.fromEntries(R.map(topic => [topic.slug, topic]));
