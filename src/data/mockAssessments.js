// ==========================================================================
// KAUSHALERA ASSESSMENT ENGINE DATA STORE
// ==========================================================================

export const MOCK_ASSESSMENTS = [
  {
    id: 'python-advanced',
    title: 'Python Core & Advanced Architecture Assessment',
    category: 'Programming',
    icon: 'Code2',
    questionsCount: 5,
    durationMinutes: 15,
    difficulty: 'Intermediate / Advanced',
    testedSkills: ['Python Internals', 'OOP Design Patterns', 'Memory Management & Generators', 'Data Structures', 'AsyncIO Concurrency'],
    completed: true,
    latestScore: 82,
    rating: 'Advanced',
    verificationBadge: 'Assessment Verified',
    careerImpact: 'Increases Software Engineer & Data Scientist match score by +18%. Unlocks 24 tier-1 verified opportunities.',
    radarBreakdown: [
      { subject: 'Python Syntax & Internals', score: 91 },
      { subject: 'Data Structures & Collections', score: 78 },
      { subject: 'Algorithms & Complexity', score: 72 },
      { subject: 'OOP & Design Patterns', score: 86 },
      { subject: 'Problem Solving & Edge Cases', score: 81 }
    ],
    strongAreas: ['Object-Oriented Programming (86%)', 'Python Memory & Decorators (91%)', 'Data Modeling'],
    weakAreas: ['Graph & Dynamic Programming Algorithms (72%)', 'AsyncIO Event Loop Under Heavy Load (68%)'],
    recommendedNextSteps: [
      'Improve Algorithms via "Advanced Dynamic Programming in Python" guide',
      'Complete "AsyncIO & Event-Driven Microservices" module',
      'Attempt the Full-Stack Backend Mock Interview challenge'
    ],
    questions: [
      {
        id: 1,
        question: 'Which of the following data structures in Python provides O(1) average time complexity for both key lookup and insertion, and preserves insertion order since Python 3.7?',
        options: [
          'dict (Standard Dictionary)',
          'collections.OrderedDict only',
          'set (Set collection)',
          'list (Array List)'
        ],
        correctIndex: 0,
        explanation: 'In Python 3.7+, the standard dict implementation uses a compact hash table that guarantees O(1) average lookup/insertion while preserving insertion order by default.'
      },
      {
        id: 2,
        question: 'What is the primary operational difference between a Python Generator function (using `yield`) and a regular function returning a list?',
        options: [
          'Generators return immutable tuples only',
          'Generators evaluate lazily on-demand, saving significant memory for large sequences',
          'Generators run in separate OS threads automatically',
          'Generators cannot accept arguments'
        ],
        correctIndex: 1,
        explanation: 'Generators yield items one at a time and suspend execution state, enabling lazy evaluation with constant O(1) space complexity regardless of stream size.'
      },
      {
        id: 3,
        question: 'In Python’s Global Interpreter Lock (GIL) architecture, which type of workload benefits MOST from utilizing the standard `threading` module rather than `multiprocessing`?',
        options: [
          'Heavy numerical matrix multiplication',
          'I/O-bound tasks such as concurrent network requests and file reads',
          'CPU-intensive cryptographic hashing',
          'Real-time computer vision video rendering'
        ],
        correctIndex: 1,
        explanation: 'I/O-bound tasks release the GIL while waiting for network or disk operations, allowing threads to achieve true concurrency without process spawning overhead.'
      },
      {
        id: 4,
        question: 'What does the `@classmethod` decorator provide to a Python method definition compared to `@staticmethod`?',
        options: [
          'It automatically serializes the method return value to JSON',
          'It passes the class object (`cls`) as the first argument, allowing factory instantiation and subclass polymorphism',
          'It locks the method against concurrent execution across threads',
          'It forces the method to be private and inaccessible outside the module'
        ],
        correctIndex: 1,
        explanation: '@classmethod receives cls as its first parameter, making it ideal for alternative class constructors that respect inheritance hierarchy.'
      },
      {
        id: 5,
        question: 'When implementing deep copy operations for nested mutable objects in Python, which module and method should be employed?',
        options: [
          '`copy.copy()`',
          '`copy.deepcopy()`',
          '`json.loads(json.dumps())` only',
          '`object.__clone__()`'
        ],
        correctIndex: 1,
        explanation: '`copy.deepcopy()` recursively traverses and duplicates all nested objects, preserving compound object integrity without shared memory references.'
      }
    ]
  },
  {
    id: 'ml-fundamentals',
    title: 'Machine Learning & Neural Foundations Assessment',
    category: 'AI/ML',
    icon: 'BrainCircuit',
    questionsCount: 5,
    durationMinutes: 20,
    difficulty: 'Intermediate',
    testedSkills: ['Loss Functions', 'Gradient Descent & Backprop', 'Overfitting Regularization (L1/L2, Dropout)', 'Evaluation Metrics (Precision/Recall/F1/ROC-AUC)', 'Feature Scaling'],
    completed: false,
    latestScore: null,
    rating: 'Pending Attempt',
    careerImpact: 'Will close the critical 45% ML skill gap and unlock 23 Data Science & ML opportunities.',
    questions: [
      {
        id: 1,
        question: 'In a medical diagnostic classifier where false negatives are significantly more costly than false positives, which evaluation metric should be prioritized?',
        options: [
          'Accuracy',
          'Recall (Sensitivity)',
          'Precision',
          'Specificity'
        ],
        correctIndex: 1,
        explanation: 'Recall measures True Positives / (True Positives + False Negatives). Maximizing recall minimizes dangerous false negative diagnostic misses.'
      },
      {
        id: 2,
        question: 'How does L1 Regularization (Lasso) differ mathematically from L2 Regularization (Ridge) in its impact on model weights?',
        options: [
          'L1 drives non-essential feature weights strictly to zero, effectively performing feature selection',
          'L1 penalizes large weights quadratically while L2 penalizes linearly',
          'L1 can only be applied to unsupervised clustering algorithms',
          'L1 always produces higher training accuracy than L2'
        ],
        correctIndex: 0,
        explanation: 'L1 adds the absolute value of coefficients to the loss function, producing sparse models with exact zero weights for irrelevant features.'
      },
      {
        id: 3,
        question: 'What is the primary purpose of applying Dropout layers during the training phase of Deep Neural Networks?',
        options: [
          'To speed up GPU tensor calculation by 10x',
          'To prevent co-adaptation of neurons and mitigate overfitting by randomly deactivating a fraction of nodes per forward pass',
          'To normalize input activations to zero mean and unit variance',
          'To convert continuous outputs into categorical probabilities'
        ],
        correctIndex: 1,
        explanation: 'Dropout randomly zeroes out activation units with probability p during training, forcing redundant distributed representations that generalize better.'
      },
      {
        id: 4,
        question: 'Why must feature scaling (such as StandardScaler or MinMaxScaler) be fitted ONLY on the training dataset and not on the combined train+test set?',
        options: [
          'To prevent Data Leakage from test distribution into the model prior',
          'Because scaling algorithms cannot process arrays larger than 1,000 rows',
          'Because test sets do not contain continuous numerical values',
          'Scaling test data is mathematically illegal in scikit-learn'
        ],
        correctIndex: 0,
        explanation: 'Fitting scalers on test data leaks mean and variance information about unseen evaluation data, artificially inflating validation performance.'
      },
      {
        id: 5,
        question: 'Which loss function is standard for training multi-class classification neural networks with Softmax output activations?',
        options: [
          'Mean Squared Error (MSE)',
          'Categorical Cross-Entropy Loss',
          'Binary Cross-Entropy Loss',
          'Huber Loss'
        ],
        correctIndex: 1,
        explanation: 'Categorical Cross-Entropy quantifies the divergence between predicted probability distributions (via Softmax) and one-hot target ground truth.'
      }
    ]
  },
  {
    id: 'sql-db-optimization',
    title: 'SQL Performance & Database Design Assessment',
    category: 'Database',
    icon: 'Database',
    questionsCount: 5,
    durationMinutes: 15,
    difficulty: 'Intermediate',
    testedSkills: ['Query Execution Plans', 'B-Tree & Composite Indexes', 'ACID Transactions & Isolation Levels', 'Window Functions', 'Database Normalization'],
    completed: true,
    latestScore: 78,
    rating: 'Proficient',
    verificationBadge: 'Institution Verified',
    careerImpact: 'Verified database competency for 14 Backend & Data Analyst roles.',
    radarBreakdown: [
      { subject: 'Indexing & B-Trees', score: 85 },
      { subject: 'Window Functions & Aggregations', score: 90 },
      { subject: 'ACID & Concurrency Locks', score: 70 },
      { subject: 'Schema Normalization (3NF)', score: 80 },
      { subject: 'Query Optimization Plans', score: 65 }
    ],
    strongAreas: ['Window Functions (ROW_NUMBER, DENSE_RANK)', 'B-Tree Index Design'],
    weakAreas: ['Deadlock Resolution & Transaction Isolation Levels'],
    recommendedNextSteps: [
      'Study PostgreSQL EXPLAIN ANALYZE deep dive',
      'Build an indexed multi-million row benchmark schema'
    ]
  }
];
