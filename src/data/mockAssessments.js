// ==========================================================================
// KAUSHALERA ASSESSMENT ENGINE DATA STORE (FOR ALL DOMAINS)
// ==========================================================================

export const MOCK_ASSESSMENTS = [
  {
    id: 'ai-ml-assessment',
    title: 'Artificial Intelligence & Deep Learning Assessment',
    domainId: 'artificial-intelligence',
    category: 'AI & Machine Learning',
    icon: 'BrainCircuit',
    questionsCount: 5,
    durationMinutes: 15,
    difficulty: 'Intermediate / Advanced',
    rewardXP: 100,
    testedSkills: ['Neural Networks', 'Loss Functions & Optimization', 'PyTorch Tensors', 'Transformers & Attention', 'Model Evaluation & Overfitting'],
    completed: true,
    latestScore: 88,
    rating: 'Advanced',
    verificationBadge: 'Assessment Verified',
    careerImpact: 'Increases AI/ML Engineer and Data Scientist match by +25%. Unlocks 32 tier-1 opportunities.',
    radarBreakdown: [
      { subject: 'Neural Architectures', score: 92 },
      { subject: 'Loss Functions & Math', score: 85 },
      { subject: 'PyTorch & GPU Mechanics', score: 88 },
      { subject: 'Transformers & NLP', score: 84 },
      { subject: 'Model Regularization', score: 90 }
    ],
    strongAreas: ['Transformer Self-Attention Mechanics (92%)', 'Regularization (Dropout & Weight Decay)'],
    weakAreas: ['Custom CUDA Kernel Optimization (70%)'],
    recommendedNextSteps: [
      'Complete "Deep Learning with PyTorch Masterclass"',
      'Build an end-to-end LLM RAG Capstone pipeline'
    ],
    questions: [
      {
        id: 1,
        question: 'What is the primary computational benefit of the Multi-Head Scaled Dot-Product Attention mechanism in Transformer architectures?',
        options: [
          'It replaces recurrent sequential dependencies with parallelizable matrix operations across sequence positions',
          'It completely eliminates the need for activation functions like GELU',
          'It forces model weights to strictly adhere to L1 sparse regularization',
          'It automatically reduces float32 weights to 1-bit integers without quantization loss'
        ],
        correctIndex: 0,
        explanation: 'Transformers allow entire input sequences to be processed in parallel across attention heads, overcoming the sequential step-by-step bottleneck of traditional RNNs and LSTMs.'
      },
      {
        id: 2,
        question: 'In Deep Neural Networks, why is Batch Normalization typically placed between a linear layer and its non-linear activation function?',
        options: [
          'To compress the model weights for edge deployment',
          'To mitigate internal covariate shift by stabilizing activation distributions across mini-batches',
          'To convert floating point gradients into discrete integers',
          'To enforce zero dropout probability during training'
        ],
        correctIndex: 1,
        explanation: 'Batch Normalization standardizes intermediate layer inputs to zero mean and unit variance, smoothing the optimization landscape and enabling higher learning rates.'
      },
      {
        id: 3,
        question: 'When training a classification model with high class imbalance (e.g. 99% Negative, 1% Positive), which loss function is specifically engineered to dynamically down-weight easy examples?',
        options: [
          'Standard Mean Squared Error (MSE)',
          'Focal Loss',
          'Hinge Loss',
          'L1 Absolute Error Loss'
        ],
        correctIndex: 1,
        explanation: 'Focal Loss adds a modulating factor (1 - p_t)^gamma to cross entropy, focusing training on hard misclassified examples rather than overwhelming easy negatives.'
      },
      {
        id: 4,
        question: 'In PyTorch, what is the critical difference between `tensor.detach()` and `tensor.clone()`?',
        options: [
          '`detach()` returns a new tensor sharing storage but detached from the autograd graph, whereas `clone()` copies memory and maintains gradient history',
          '`detach()` moves data to GPU RAM while `clone()` moves data to CPU',
          '`detach()` performs matrix transposition while `clone()` flattens the tensor',
          'There is no functional difference in PyTorch 2.x'
        ],
        correctIndex: 0,
        explanation: '`detach()` creates a view sharing the same data pointer without tracking gradients in autograd, whereas `clone()` allocates distinct memory while tracking history.'
      },
      {
        id: 5,
        question: 'What technique prevents Data Leakage during feature preprocessing in a machine learning pipeline?',
        options: [
          'Fitting scalers and imputers solely on the training fold, then transforming validation/test sets with those fitted parameters',
          'Normalizing the whole combined dataset before splitting into train and test sets',
          'Applying random noise to all target labels during cross-validation',
          'Using K-Means clustering to predict missing test labels prior to training'
        ],
        correctIndex: 0,
        explanation: 'Fitting parameters (like mean and variance) on evaluation data leaks future distribution information into model priors, creating falsely optimistic validation metrics.'
      }
    ]
  },
  {
    id: 'cloud-devops-assessment',
    title: 'Cloud & DevOps Infrastructure Assessment',
    domainId: 'cloud-devops',
    category: 'Cloud & DevOps',
    icon: 'Cloud',
    questionsCount: 5,
    durationMinutes: 15,
    difficulty: 'Intermediate',
    rewardXP: 90,
    testedSkills: ['Docker Containers', 'Kubernetes Architecture', 'Linux & Networking', 'CI/CD Pipelines', 'Infrastructure as Code (Terraform)'],
    completed: false,
    latestScore: null,
    rating: 'Pending Attempt',
    careerImpact: 'Unlocks 28 DevOps, SRE, and Cloud Architect opportunities.',
    questions: [
      {
        id: 1,
        question: 'In Kubernetes, what is the primary role of the `kube-controller-manager` component?',
        options: [
          'Directly executing container processes on worker nodes',
          'Running core control loops that regulate cluster state toward the desired specification (e.g. NodeLifecycle, ReplicaSet, Endpoints)',
          'Serving as the in-memory distributed key-value datastore',
          'Translating DNS names to ClusterIP addresses inside pods'
        ],
        correctIndex: 1,
        explanation: 'The kube-controller-manager embeds core controller loops that continuously watch apiserver state and perform reconciliations to match desired state.'
      },
      {
        id: 2,
        question: 'Why are Docker Multi-Stage builds recommended for production microservice container images?',
        options: [
          'They allow using multiple Docker daemons concurrently',
          'They separate the build toolchain from the final minimal runtime image, dramatically reducing image size and attack surface',
          'They bypass Linux namespace isolation for faster execution',
          'They automatically convert Node.js code to WebAssembly'
        ],
        correctIndex: 1,
        explanation: 'Multi-stage builds leave heavy compilers, SDKs, and temporary build dependencies in intermediate stages, keeping production images lean and secure.'
      },
      {
        id: 3,
        question: 'In Terraform, what does the `terraform plan` command do without modifying real infrastructure?',
        options: [
          'It generates an execution plan by comparing declarative config against state file and real-world provider APIs',
          'It destroys unreferenced cloud resources automatically',
          'It compiles HCL code into native C binaries',
          'It formats code according to HashiCorp style conventions only'
        ],
        correctIndex: 0,
        explanation: '`terraform plan` refreshes state against live infrastructure, evaluates changes in configuration, and renders proposed additions, destructions, and updates.'
      },
      {
        id: 4,
        question: 'Which deployment strategy routes a small percentage of user traffic (e.g. 5%) to a new release version to verify telemetry before full rollout?',
        options: [
          'Recreate deployment',
          'Canary deployment',
          'Big Bang deployment',
          'Cold standby cutover'
        ],
        correctIndex: 1,
        explanation: 'Canary deployments minimize blast radius by exposing new features to a small subset of production traffic while monitoring error rates and latency.'
      },
      {
        id: 5,
        question: 'In Linux systems, which signal does Kubernetes send to a pod during a graceful shutdown before issuing `SIGKILL` after the termination grace period?',
        options: [
          '`SIGTERM` (Signal 15)',
          '`SIGSTOP` (Signal 19)',
          '`SIGHUP` (Signal 1)',
          '`SIGINT` (Signal 2)'
        ],
        correctIndex: 0,
        explanation: 'Kubernetes sends `SIGTERM` first, allowing application processes to finish active HTTP requests and close database connections cleanly.'
      }
    ]
  },
  {
    id: 'fullstack-web-assessment',
    title: 'Full-Stack Modern Web & React Architecture Assessment',
    domainId: 'full-stack-web',
    category: 'Full-Stack Web',
    icon: 'Layout',
    questionsCount: 5,
    durationMinutes: 15,
    difficulty: 'Intermediate / Advanced',
    rewardXP: 90,
    testedSkills: ['React Fiber & Hooks', 'Node.js Event Loop', 'Database Transactions (ACID)', 'State Management', 'Web Security (CORS/CSRF/XSS)'],
    completed: true,
    latestScore: 92,
    rating: 'Advanced',
    verificationBadge: 'Assessment Verified',
    careerImpact: 'Top 5% Full-Stack engineer credential. Unlocks 45 active developer roles.',
    questions: [
      {
        id: 1,
        question: 'In React 18, how does Automatic Batching improve web application performance?',
        options: [
          'It groups multiple state updates within promises, timeouts, and native event handlers into a single re-render pass',
          'It automatically converts all JSX elements into WebGL canvas objects',
          'It eliminates the need for React keys in dynamic lists',
          'It moves all React components to run inside Web Workers'
        ],
        correctIndex: 0,
        explanation: 'React 18 batches state updates regardless of where they originate (async callbacks, setTimeout, fetch), preventing redundant intermediary renders.'
      },
      {
        id: 2,
        question: 'In the Node.js Event Loop, in which phase are `setImmediate()` callbacks executed?',
        options: [
          'Timers phase',
          'Poll phase',
          'Check phase',
          'Close callbacks phase'
        ],
        correctIndex: 2,
        explanation: '`setImmediate()` callbacks are queued specifically for execution in the Check phase immediately following I/O event polling.'
      },
      {
        id: 3,
        question: 'How can modern web applications best defend against Cross-Site Scripting (XSS) attacks in user-generated rich text inputs?',
        options: [
          'Using HTTP Basic Authentication headers on all pages',
          'Sanitizing HTML inputs with robust parsers (e.g. DOMPurify) and configuring strict Content-Security-Policy (CSP) headers',
          'Storing user tokens exclusively in localStorage with 1-year expiration',
          'Disabling CORS across all endpoints'
        ],
        correctIndex: 1,
        explanation: 'HTML sanitization strips executable scripts, while Content-Security-Policy restricts script origins and prohibits unauthorized inline execution.'
      },
      {
        id: 4,
        question: 'What is the purpose of React `useCallback` hook when passing functions to memoized child components?',
        options: [
          'To run the function asynchronously in a background thread',
          'To preserve the same function reference across renders unless specified dependencies change',
          'To force child components to ignore parent state updates',
          'To serialize the function payload across network requests'
        ],
        correctIndex: 1,
        explanation: '`useCallback` caches a function definition between renders so child components wrapped in `React.memo` do not re-render due to reference recreation.'
      },
      {
        id: 5,
        question: 'In relational databases like PostgreSQL, which ACID property ensures that all sub-operations in a multi-table transaction either completely succeed or completely roll back?',
        options: [
          'Atomicity',
          'Consistency',
          'Isolation',
          'Durability'
        ],
        correctIndex: 0,
        explanation: 'Atomicity treats a transaction as an indivisible unit: all operations commit, or the entire transaction is rolled back on any failure.'
      }
    ]
  },
  {
    id: 'cyber-security-assessment',
    title: 'Cyber Security & Ethical Hacking Assessment',
    domainId: 'cyber-security',
    category: 'Cyber Security',
    icon: 'ShieldCheck',
    questionsCount: 5,
    durationMinutes: 15,
    difficulty: 'Intermediate / Advanced',
    rewardXP: 95,
    testedSkills: ['Network Protocols', 'OWASP Top 10 Vulnerabilities', 'Penetration Testing', 'Cryptography (RSA/AES/TLS)', 'Security Operations & SIEM'],
    completed: false,
    latestScore: null,
    rating: 'Pending Attempt',
    careerImpact: 'Qualifies candidates for Cyber Security Analyst, Penetration Tester, and SOC tier-1 roles.',
    questions: [
      {
        id: 1,
        question: 'In Web Security, what is Server-Side Request Forgery (SSRF)?',
        options: [
          'An attack where an attacker induces the server-side application to make HTTP requests to an arbitrary unauthorized internal or external domain',
          'Overloading a database with excessive connection requests',
          'Stealing user cookies through client-side JavaScript injection',
          'Tampering with mobile app binary APK certificates'
        ],
        correctIndex: 0,
        explanation: 'SSRF allows attackers to abuse backend server privileges to access internal metadata services (e.g. AWS 169.254.169.254) or local intranet endpoints.'
      },
      {
        id: 2,
        question: 'Which cryptographic algorithm is asymmetric and based on the mathematical difficulty of factoring the product of two large prime numbers?',
        options: [
          'AES-256',
          'RSA',
          'SHA-256',
          'ChaCha20'
        ],
        correctIndex: 1,
        explanation: 'RSA is a public-key asymmetric cryptosystem relying on the computational intractability of factoring large semi-prime integers.'
      },
      {
        id: 3,
        question: 'What is the primary difference between a Forward Proxy and a Reverse Proxy from a security architecture perspective?',
        options: [
          'A forward proxy protects client anonymity and filters outbound traffic, whereas a reverse proxy sits in front of backend servers to provide SSL termination, load balancing, and WAF protection',
          'Forward proxies only support UDP traffic while reverse proxies only support TCP',
          'Forward proxies cannot perform caching while reverse proxies can',
          'Reverse proxies are strictly prohibited in cloud architectures'
        ],
        correctIndex: 0,
        explanation: 'Forward proxies act on behalf of clients reaching out to the internet, while reverse proxies act on behalf of servers accepting incoming public requests.'
      },
      {
        id: 4,
        question: 'Which OWASP Top 10 vulnerability occurs when application state and permissions rely solely on unverified client-supplied identifiers (e.g. `GET /api/documents/1029`)?',
        options: [
          'Insecure Direct Object References (IDOR / Broken Object Level Authorization)',
          'Cross-Site Request Forgery (CSRF)',
          'Denial of Service (DoS)',
          'Cryptographic Failure'
        ],
        correctIndex: 0,
        explanation: 'IDOR occurs when access control checks are missing on server endpoints, allowing malicious users to access arbitrary record IDs.'
      },
      {
        id: 5,
        question: 'In a SOC (Security Operations Center), what is the main purpose of a SIEM system like Splunk or Wazuh?',
        options: [
          'Writing frontend user interfaces for portals',
          'Aggregating, correlating, and analyzing log telemetry across servers, firewalls, and endpoints in real-time to detect anomalous threats',
          'Automating compiler optimizations in C++',
          'Replacing relational database tables'
        ],
        correctIndex: 1,
        explanation: 'SIEM (Security Information and Event Management) correlates enterprise event streams to trigger alerts on unauthorized intrusions and compliance breaches.'
      }
    ]
  },
  {
    id: 'data-science-assessment',
    title: 'Data Science, Statistics & Analytics Assessment',
    domainId: 'data-science',
    category: 'Data Science',
    icon: 'Database',
    questionsCount: 5,
    durationMinutes: 15,
    difficulty: 'Intermediate',
    rewardXP: 85,
    testedSkills: ['Pandas & Data Wrangling', 'Statistical Hypothesis Testing', 'SQL Aggregations & Window Functions', 'Predictive Modeling', 'Feature Selection'],
    completed: false,
    latestScore: null,
    rating: 'Pending Attempt',
    careerImpact: 'Verifies quantitative and analytical readiness for Data Scientist and BI Analyst opportunities.',
    questions: [
      {
        id: 1,
        question: 'In hypothesis testing, what does the p-value represent under the assumption that the Null Hypothesis (H0) is true?',
        options: [
          'The probability of observing a test statistic as extreme as or more extreme than the observed sample data',
          'The exact probability that the null hypothesis is false',
          'The proportion of missing records in the training dataset',
          'The accuracy score of the predictive model'
        ],
        correctIndex: 0,
        explanation: 'A p-value measures evidence against H0; small p-values (< 0.05) indicate that such extreme data would be rare by random chance alone if H0 held.'
      },
      {
        id: 2,
        question: 'In SQL, what is the key difference between the `RANK()` and `DENSE_RANK()` window functions when duplicate values occur?',
        options: [
          '`RANK()` skips subsequent ranks after ties (e.g. 1, 2, 2, 4), while `DENSE_RANK()` does not leave gaps (e.g. 1, 2, 2, 3)',
          '`RANK()` can only be used on string columns while `DENSE_RANK()` works on integers',
          '`DENSE_RANK()` requires an active GPU connection',
          '`RANK()` sorts in ascending order while `DENSE_RANK()` always sorts descending'
        ],
        correctIndex: 0,
        explanation: '`RANK()` creates rank gaps proportional to the number of tie occurrences, whereas `DENSE_RANK()` assigns consecutive integers without skips.'
      },
      {
        id: 3,
        question: 'In Pandas, what operation is recommended for merging two DataFrames along columns based on a shared foreign key column?',
        options: [
          '`pd.merge(df1, df2, on="key_col", how="inner")`',
          '`df1.append(df2)`',
          '`df1.concat(df2)`',
          '`df1.pivot(df2)`'
        ],
        correctIndex: 0,
        explanation: '`pd.merge()` executes database-style joins (inner, left, right, outer) on specified key columns efficiently in memory.'
      },
      {
        id: 4,
        question: 'When building a linear regression model, which diagnostic metric evaluates whether high multicollinearity exists among independent predictor features?',
        options: [
          'Variance Inflation Factor (VIF)',
          'Gini Impurity Index',
          'Silhouette Coefficient',
          'Confusion Matrix Accuracy'
        ],
        correctIndex: 0,
        explanation: 'VIF measures how much the variance of an estimated regression coefficient increases when predictors are correlated; VIF > 5-10 signifies severe multicollinearity.'
      },
      {
        id: 5,
        question: 'In unsupervised machine learning, how does the K-Means algorithm determine optimal cluster centroids iteratively?',
        options: [
          'By assigning points to the nearest centroid and recalculating centroids as the arithmetic mean of all assigned points until convergence',
          'By constructing a decision tree based on information gain',
          'By backpropagating error through hidden neural layers',
          'By generating pseudo-random Fourier transforms'
        ],
        correctIndex: 0,
        explanation: 'K-Means alternates between assignment (minimum Euclidean distance to current centroids) and update (centroid equals mean of cluster points) steps.'
      }
    ]
  },
  {
    id: 'mobile-dev-assessment',
    title: 'Mobile App Engineering (Flutter & React Native) Assessment',
    domainId: 'mobile-dev',
    category: 'Mobile Development',
    icon: 'Smartphone',
    questionsCount: 5,
    durationMinutes: 15,
    difficulty: 'Intermediate',
    rewardXP: 85,
    testedSkills: ['Flutter Widget Tree & Skia/Impeller', 'Dart Asynchrony (Futures/Streams)', 'React Native Bridge & JSI', 'State Management', 'Offline Storage'],
    completed: false,
    latestScore: null,
    rating: 'Pending Attempt',
    careerImpact: 'Verifies cross-platform mobile app development readiness.',
    questions: [
      {
        id: 1,
        question: 'In Flutter architecture, what is the role of the `RenderObject` tree relative to the `Widget` and `Element` trees?',
        options: [
          'It handles actual layout calculation, hit testing, and painting pixels onto the canvas via the rendering engine',
          'It stores user authentication tokens in persistent secure storage',
          'It translates Dart code directly to Objective-C at runtime',
          'It communicates with remote REST APIs'
        ],
        correctIndex: 0,
        explanation: 'Widgets are lightweight immutable configs, Elements manage tree lifecycle, and RenderObjects handle layout geometry, constraint solving, and painting.'
      },
      {
        id: 2,
        question: 'In React Native New Architecture, what replaces the asynchronous JSON Bridge for direct, synchronous C++ to JavaScript communication?',
        options: [
          'JavaScript Interface (JSI)',
          'Redux Store',
          'Webpack DevServer',
          'Native Thread Pools'
        ],
        correctIndex: 0,
        explanation: 'JSI allows JavaScript to hold direct references to host C++ objects and invoke native methods synchronously without JSON message queue serialization.'
      },
      {
        id: 3,
        question: 'In Dart, what is the distinction between a `Future` and a `Stream`?',
        options: [
          'A Future delivers a single asynchronous value or error once, while a Stream delivers a continuous sequence of asynchronous events over time',
          'Futures run on GPUs while Streams run on CPUs',
          'Futures are synchronous while Streams are asynchronous',
          'Streams cannot be cancelled once initiated'
        ],
        correctIndex: 0,
        explanation: 'A Future represents a single future computation (like an HTTP response), whereas a Stream handles ongoing events (like user taps or web socket ticks).'
      },
      {
        id: 4,
        question: 'How should mobile apps handle secure credential storage (such as OAuth refresh tokens) across iOS and Android platforms?',
        options: [
          'Using native platform secure storage APIs (iOS Keychain and Android EncryptedSharedPreferences / KeyStore)',
          'Storing plain JSON in unencrypted public device storage',
          'Embedding secrets in hardcoded client source constants',
          'Saving passwords in base64 within local SQLite tables'
        ],
        correctIndex: 0,
        explanation: 'Native Keychain and Android KeyStore encrypt credentials with hardware-backed security modules, preventing access by other apps or root exploits.'
      },
      {
        id: 5,
        question: 'Which Flutter state management pattern enforces unidirectional data flow by mapping incoming Events to outgoing States via Streams?',
        options: [
          'BLoC (Business Logic Component)',
          'Global Mutable Singletons',
          'StatefulWidget setState only',
          'Local Storage Polling'
        ],
        correctIndex: 0,
        explanation: 'The BLoC pattern receives user Events, processes business logic, and emits immutable States, guaranteeing clean separation of UI from logic.'
      }
    ]
  },
  {
    id: 'blockchain-web3-assessment',
    title: 'Blockchain & Smart Contract Engineering Assessment',
    domainId: 'blockchain-web3',
    category: 'Blockchain & Web3',
    icon: 'Layers',
    questionsCount: 5,
    durationMinutes: 15,
    difficulty: 'Intermediate / Advanced',
    rewardXP: 95,
    testedSkills: ['EVM Architecture & Gas Optimization', 'Solidity Reentrancy & Security', 'DeFi Token Standards (ERC-20/721)', 'Hardhat/Foundry', 'Consensus (PoS/PoW)'],
    completed: false,
    latestScore: null,
    rating: 'Pending Attempt',
    careerImpact: 'Certifies Smart Contract and Web3 Developer qualifications for high-growth decentralized projects.',
    questions: [
      {
        id: 1,
        question: 'In Solidity smart contracts, how can the classical Reentrancy vulnerability (e.g. The DAO hack) be comprehensively prevented?',
        options: [
          'Following the Checks-Effects-Interactions pattern (updating internal state before making external ether calls) and using ReentrancyGuard mutexes',
          'Increasing gas fees on all transfer operations',
          'Changing visibility of all state variables to public',
          'Using floating-point numbers instead of uint256'
        ],
        correctIndex: 0,
        explanation: 'Updating internal balances before transferring ETH prevents malicious fallback functions from recursively re-entering the withdrawal function.'
      },
      {
        id: 2,
        question: 'In the Ethereum Virtual Machine (EVM), which storage location is temporary, non-persistent, and costs the least amount of gas for function parameter reads?',
        options: [
          '`calldata`',
          '`storage`',
          '`memory`',
          '`logs`'
        ],
        correctIndex: 0,
        explanation: '`calldata` is a read-only, non-modifiable area where transaction payload parameters reside, requiring less gas than copying parameters into `memory`.'
      },
      {
        id: 3,
        question: 'What is the key functional difference between the ERC-20 and ERC-721 token standards on Ethereum?',
        options: [
          'ERC-20 defines interchangeable fungible tokens where each unit is identical, while ERC-721 defines Non-Fungible Tokens (NFTs) where each token has a unique tokenID',
          'ERC-20 tokens cannot be transferred across wallets',
          'ERC-721 requires proof-of-work mining per transaction',
          'ERC-20 is restricted to testnets only'
        ],
        correctIndex: 0,
        explanation: 'ERC-20 represents fungible assets (currencies), while ERC-721 represents unique digital collectibles and verifiable real-world assets.'
      },
      {
        id: 4,
        question: 'In decentralized networks, what is the role of a Merkle Tree in verifying transaction inclusion inside a block header?',
        options: [
          'It provides cryptographic logarithmic O(log N) proofs of transaction membership without requiring the entire block data',
          'It encrypts wallet private keys with RSA',
          'It formats smart contracts into WebAssembly bytecodes',
          'It speeds up transaction fee conversions'
        ],
        correctIndex: 0,
        explanation: 'Merkle Trees allow light clients to verify that a specific transaction was included in a block using only a short cryptographic hash path.'
      },
      {
        id: 5,
        question: 'In Solidity 0.8.x+, what built-in mechanism replaced the external `SafeMath` library for integer arithmetic?',
        options: [
          'Default compiler-level integer overflow and underflow checking that automatically reverts on boundary violations',
          'Automatic conversion to 512-bit floating point numbers',
          'Dynamic memory garbage collection',
          'Zero-knowledge polynomial evaluation'
        ],
        correctIndex: 0,
        explanation: 'Starting with Solidity 0.8.0, all basic arithmetic operations inherently check for underflows/overflows and revert transactions automatically unless wrapped in `unchecked { }`.'
      }
    ]
  },
  {
    id: 'embedded-iot-assessment',
    title: 'Embedded Systems, IoT & Real-Time Firmware Assessment',
    domainId: 'embedded-iot',
    category: 'Embedded Systems & IoT',
    icon: 'Cpu',
    questionsCount: 5,
    durationMinutes: 15,
    difficulty: 'Intermediate',
    rewardXP: 90,
    testedSkills: ['Embedded C Memory & Volatile', 'FreeRTOS Task Scheduling & Semaphores', 'Hardware Bus Protocols (I2C/SPI/UART)', 'Interrupt Service Routines (ISRs)', 'MQTT Protocol'],
    completed: false,
    latestScore: null,
    rating: 'Pending Attempt',
    careerImpact: 'Certifies embedded firmware and IoT device development competency.',
    questions: [
      {
        id: 1,
        question: 'In Embedded C, what is the crucial purpose of declaring a memory-mapped hardware peripheral register with the `volatile` keyword?',
        options: [
          'To instruct the compiler NOT to optimize away reads/writes, as the register value can change unpredictably outside the main program flow (e.g. by hardware or ISR)',
          'To allocate the variable in high-speed GPU cache',
          'To make the variable thread-safe without mutex locks',
          'To prevent the compiler from generating 32-bit instructions'
        ],
        correctIndex: 0,
        explanation: 'Without `volatile`, optimizing compilers might cache register values in CPU registers, failing to detect hardware status updates.'
      },
      {
        id: 2,
        question: 'In FreeRTOS, how does Priority Inversion occur and what mechanism resolves it?',
        options: [
          'A lower-priority task holding a shared mutex blocks a higher-priority task while being preempted by an intermediate task; resolved via Priority Inheritance',
          'Tasks run in alphabetical order; resolved by renaming functions',
          'Hardware interrupts fail to trigger; resolved by power cycling the board',
          'Memory leaks crash the kernel; resolved by static memory allocation'
        ],
        correctIndex: 0,
        explanation: 'Priority Inheritance temporarily elevates the priority of the mutex-holding lower task to match the blocked high-priority task until the lock is released.'
      },
      {
        id: 3,
        question: 'Which serial communication bus uses two physical lines (SDA for data and SCL for clock) with pull-up resistors and master-slave device addressing?',
        options: [
          'I2C (Inter-Integrated Circuit)',
          'SPI (Serial Peripheral Interface)',
          'UART (Universal Asynchronous Receiver-Transmitter)',
          'CAN bus'
        ],
        correctIndex: 0,
        explanation: 'I2C uses a synchronous, multi-master, 2-wire open-drain bus with pull-up resistors to communicate with multiple addressed peripheral sensors.'
      },
      {
        id: 4,
        question: 'What is a critical rule when writing Interrupt Service Routines (ISRs) on microcontrollers?',
        options: [
          'Keep ISR execution as short as possible; never perform blocking I/O, heavy floating-point math, or dynamic memory allocation inside an ISR',
          'Always insert `sleep(5000)` inside the ISR to debounce inputs',
          'ISRs must always return a JSON string',
          'ISRs should run all heavy neural network inference tasks directly'
        ],
        correctIndex: 0,
        explanation: 'Long-running ISRs block other critical hardware interrupts and cause jitter; work should be deferred to FreeRTOS tasks via queues or semaphores.'
      },
      {
        id: 5,
        question: 'In IoT systems, why is MQTT preferred over standard HTTP for battery-powered sensor telemetry over constrained cellular networks?',
        options: [
          'MQTT is a lightweight publish-subscribe binary protocol with minimal header overhead (as low as 2 bytes), keep-alive heartbeats, and QoS delivery levels',
          'MQTT requires 10 Gbps fiber internet',
          'MQTT only works with HTML web pages',
          'MQTT encrypts data without consuming any CPU cycles'
        ],
        correctIndex: 0,
        explanation: 'MQTT was designed for constrained edge nodes, providing bidirectional pub/sub messaging with minimal power and network bandwidth consumption.'
      }
    ]
  }
];
