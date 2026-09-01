// ==========================================================================
// KAUSHALERA SKILLS DIRECTORY & DOMAIN MAPPINGS (FOR ALL DOMAINS)
// ==========================================================================

export const SKILL_CATEGORIES = {
  AI_ML: 'AI & Machine Learning',
  CLOUD_DEVOPS: 'Cloud & DevOps',
  FULL_STACK: 'Full-Stack Web',
  CYBER_SECURITY: 'Cyber Security',
  DATA_SCIENCE: 'Data Science & Analytics',
  MOBILE: 'Mobile Development',
  BLOCKCHAIN: 'Blockchain & Web3',
  EMBEDDED_IOT: 'Embedded Systems & IoT',
  SOFT_SKILLS: 'Soft Skills & Leadership'
};

export const MOCK_RADAR_SKILLS = [
  { 
    name: 'Programming', 
    category: 'Full-Stack Web', 
    yourLevel: 90, 
    industryLevel: 85, 
    matchPercent: 94,
    levelName: 'Advanced',
    industryLevelName: 'Advanced',
    icon: 'Code2',
    color: '#6366F1',
    description: 'Proficiency in writing scalable, modular code in modern languages like Python, TypeScript, and C++.',
    topCourses: ['Advanced Python Architecture', 'Clean Code Principles']
  },
  { 
    name: 'AI & ML', 
    category: 'AI & Machine Learning', 
    yourLevel: 75, 
    industryLevel: 85, 
    matchPercent: 88,
    levelName: 'Intermediate',
    industryLevelName: 'Advanced',
    icon: 'BrainCircuit',
    color: '#A855F7',
    description: 'Supervised/unsupervised models, neural networks, PyTorch, and LLM fine-tuning pipelines.',
    topCourses: ['Machine Learning Fundamentals by Stanford', 'PyTorch for Deep Learning']
  },
  { 
    name: 'Cloud & DevOps', 
    category: 'Cloud & DevOps', 
    yourLevel: 70, 
    industryLevel: 80, 
    matchPercent: 82,
    levelName: 'Intermediate',
    industryLevelName: 'Advanced',
    icon: 'Cloud',
    color: '#3B82F6',
    description: 'Docker multi-stage builds, Kubernetes orchestration, CI/CD automation, and Terraform IaC.',
    topCourses: ['AWS Certified Solutions Architect Path', 'Docker & Kubernetes Mastery']
  },
  { 
    name: 'Databases & SQL', 
    category: 'Data Science & Analytics', 
    yourLevel: 80, 
    industryLevel: 85, 
    matchPercent: 90,
    levelName: 'Advanced',
    industryLevelName: 'Advanced',
    icon: 'Database',
    color: '#06B6D4',
    description: 'Relational data modeling, PostgreSQL query planning (EXPLAIN), B-Tree indexes, and Spark aggregations.',
    topCourses: ['PostgreSQL Indexing & Optimization', 'Database Internals']
  },
  { 
    name: 'Security & Auth', 
    category: 'Cyber Security', 
    yourLevel: 65, 
    industryLevel: 80, 
    matchPercent: 78,
    levelName: 'Intermediate',
    industryLevelName: 'Advanced',
    icon: 'ShieldCheck',
    color: '#EF4444',
    description: 'OWASP Top 10 mitigation, JWT/OAuth2 flows, public key cryptography, and network penetration testing.',
    topCourses: ['CompTIA Security+ Blueprint', 'OWASP Web Pentesting Sandbox']
  },
  { 
    name: 'Mobile & IoT', 
    category: 'Mobile & IoT', 
    yourLevel: 68, 
    industryLevel: 75, 
    matchPercent: 85,
    levelName: 'Intermediate',
    industryLevelName: 'Proficient',
    icon: 'Smartphone',
    color: '#10B981',
    description: 'Cross-platform Flutter/React Native UI architectures and FreeRTOS microcontroller programming.',
    topCourses: ['Flutter Clean Architecture Masterclass', 'ARM Cortex Embedded C']
  },
  { 
    name: 'Leadership & Comm', 
    category: 'Soft Skills & Leadership', 
    yourLevel: 85, 
    industryLevel: 75, 
    matchPercent: 96,
    levelName: 'Advanced',
    industryLevelName: 'Proficient',
    icon: 'Users',
    color: '#EC4899',
    description: 'Technical writing, agile sprint facilitation, cross-functional engineering, and stakeholder communication.',
    topCourses: ['Executive Engineering Communication', 'Agile Project Leadership']
  }
];

export const MOCK_SKILL_GAPS = [
  {
    id: 'pytorch',
    skill: 'Deep Learning & PyTorch',
    domainId: 'artificial-intelligence',
    category: 'AI & Machine Learning',
    yourLevel: 65,
    industryNeed: 85,
    gap: 20,
    status: 'moderate',
    verified: true,
    verificationType: 'assessment',
    verificationNote: 'Verified by AI/ML Assessment (Score: 88%) on 20 Aug 2026',
    recommendation: 'Complete "PyTorch Deep Learning & Tensor Ops" to close remaining 20% gap.'
  },
  {
    id: 'kubernetes',
    skill: 'Kubernetes Cluster Orchestration',
    domainId: 'cloud-devops',
    category: 'Cloud & DevOps',
    yourLevel: 50,
    industryNeed: 80,
    gap: 30,
    status: 'high',
    verified: false,
    recommendation: 'Complete interactive Kubernetes GitOps lab to unlock 18 Cloud Engineer roles.'
  },
  {
    id: 'pentest',
    skill: 'OWASP Web Application Penetration Testing',
    domainId: 'cyber-security',
    category: 'Cyber Security',
    yourLevel: 45,
    industryNeed: 85,
    gap: 40,
    status: 'critical',
    verified: false,
    recommendation: 'Fix this critical gap to qualify for Security Analyst & Ethical Hacker positions.'
  },
  {
    id: 'solidity',
    skill: 'Solidity Smart Contract Security',
    domainId: 'blockchain-web3',
    category: 'Blockchain & Web3',
    yourLevel: 40,
    industryNeed: 80,
    gap: 40,
    status: 'high',
    verified: false,
    recommendation: 'Study Foundry property-based fuzzing to verify decentralized protocols.'
  }
];

export const ALL_SKILLS_DIRECTORY = [
  // AI & ML
  { id: 'python', domainId: 'artificial-intelligence', name: 'Python Programming & Internals', category: 'AI & Machine Learning', level: 'Advanced', score: 90, verified: true, verifiedBy: 'Assessment Verified', demand: 'Critical', icon: 'Code2', jobsCount: 58, internshipsCount: 34 },
  { id: 'ml', domainId: 'artificial-intelligence', name: 'Machine Learning & Scikit-Learn', category: 'AI & Machine Learning', level: 'Advanced', score: 85, verified: true, verifiedBy: 'Assessment Verified', demand: 'Critical', icon: 'BrainCircuit', jobsCount: 46, internshipsCount: 28 },
  { id: 'pytorch', domainId: 'artificial-intelligence', name: 'PyTorch & Deep Neural Networks', category: 'AI & Machine Learning', level: 'Intermediate', score: 65, verified: true, verifiedBy: 'Assessment Verified', demand: 'Very High', icon: 'BrainCircuit', jobsCount: 42, internshipsCount: 24 },
  { id: 'mlops', domainId: 'artificial-intelligence', name: 'MLOps & LLM Deployment', category: 'AI & Machine Learning', level: 'Intermediate', score: 60, verified: false, demand: 'High', icon: 'Cpu', jobsCount: 32, internshipsCount: 16 },

  // Cloud & DevOps
  { id: 'linux', domainId: 'cloud-devops', name: 'Linux System Administration & Shell', category: 'Cloud & DevOps', level: 'Advanced', score: 88, verified: true, verifiedBy: 'Institution Verified', demand: 'Very High', icon: 'Terminal', jobsCount: 65, internshipsCount: 38 },
  { id: 'docker', domainId: 'cloud-devops', name: 'Docker & Multi-Stage Containers', category: 'Cloud & DevOps', level: 'Advanced', score: 82, verified: true, verifiedBy: 'Assessment Verified', demand: 'Critical', icon: 'Box', jobsCount: 52, internshipsCount: 30 },
  { id: 'kubernetes', domainId: 'cloud-devops', name: 'Kubernetes Cluster Orchestration', category: 'Cloud & DevOps', level: 'Intermediate', score: 50, verified: false, demand: 'Critical', icon: 'Cloud', jobsCount: 48, internshipsCount: 25 },
  { id: 'terraform', domainId: 'cloud-devops', name: 'Terraform Infrastructure as Code', category: 'Cloud & DevOps', level: 'Intermediate', score: 55, verified: false, demand: 'High', icon: 'Layers', jobsCount: 36, internshipsCount: 18 },

  // Full-Stack Web
  { id: 'react', domainId: 'full-stack-web', name: 'React.js, Next.js & TypeScript', category: 'Full-Stack Web', level: 'Advanced', score: 92, verified: true, verifiedBy: 'Assessment Verified', demand: 'Critical', icon: 'Layout', jobsCount: 72, internshipsCount: 45 },
  { id: 'nodejs', domainId: 'full-stack-web', name: 'Node.js & NestJS Microservices', category: 'Full-Stack Web', level: 'Advanced', score: 86, verified: true, verifiedBy: 'Assessment Verified', demand: 'Very High', icon: 'Server', jobsCount: 60, internshipsCount: 36 },
  { id: 'sql', domainId: 'full-stack-web', name: 'PostgreSQL, ORMs & Window Queries', category: 'Full-Stack Web', level: 'Advanced', score: 80, verified: true, verifiedBy: 'Assessment Verified', demand: 'Critical', icon: 'Database', jobsCount: 68, internshipsCount: 40 },

  // Cyber Security
  { id: 'net-sec', domainId: 'cyber-security', name: 'Network Protocols & Firewalls', category: 'Cyber Security', level: 'Intermediate', score: 70, verified: true, verifiedBy: 'Institution Verified', demand: 'High', icon: 'Shield', jobsCount: 38, internshipsCount: 20 },
  { id: 'pentest', domainId: 'cyber-security', name: 'OWASP Web Penetration Testing', category: 'Cyber Security', level: 'Beginner', score: 45, verified: false, demand: 'Very High', icon: 'ShieldAlert', jobsCount: 34, internshipsCount: 18 },
  { id: 'crypto', domainId: 'cyber-security', name: 'Applied Cryptography & TLS', category: 'Cyber Security', level: 'Intermediate', score: 62, verified: true, verifiedBy: 'Certificate Verified', demand: 'High', icon: 'Key', jobsCount: 28, internshipsCount: 14 },

  // Data Science
  { id: 'bi-tools', domainId: 'data-science', name: 'PowerBI, Tableau & Visual Storytelling', category: 'Data Science & Analytics', level: 'Advanced', score: 85, verified: true, verifiedBy: 'Institution Verified', demand: 'High', icon: 'BarChart3', jobsCount: 44, internshipsCount: 26 },
  { id: 'statistics', domainId: 'data-science', name: 'Statistical Hypothesis & Probability', category: 'Data Science & Analytics', level: 'Intermediate', score: 72, verified: true, verifiedBy: 'Assessment Verified', demand: 'High', icon: 'LineChart', jobsCount: 40, internshipsCount: 22 },
  { id: 'spark', domainId: 'data-science', name: 'Apache Spark & Distributed ETL', category: 'Data Science & Analytics', level: 'Intermediate', score: 58, verified: false, demand: 'Very High', icon: 'Cpu', jobsCount: 35, internshipsCount: 18 },

  // Mobile Development
  { id: 'flutter', domainId: 'mobile-dev', name: 'Flutter, Dart & BLoC Architecture', category: 'Mobile Development', level: 'Advanced', score: 86, verified: true, verifiedBy: 'Assessment Verified', demand: 'Very High', icon: 'Smartphone', jobsCount: 40, internshipsCount: 24 },
  { id: 'react-native', domainId: 'mobile-dev', name: 'React Native, Expo & JSI Modules', category: 'Mobile Development', level: 'Advanced', score: 84, verified: true, verifiedBy: 'Assessment Verified', demand: 'Very High', icon: 'Smartphone', jobsCount: 38, internshipsCount: 22 },

  // Blockchain & Web3
  { id: 'solidity', domainId: 'blockchain-web3', name: 'Solidity & Smart Contract Auditing', category: 'Blockchain & Web3', level: 'Beginner', score: 40, verified: false, demand: 'High', icon: 'Layers', jobsCount: 24, internshipsCount: 12 },
  { id: 'web3js', domainId: 'blockchain-web3', name: 'Ethers.js & Web3 Client DApps', category: 'Blockchain & Web3', level: 'Intermediate', score: 60, verified: false, demand: 'High', icon: 'Globe', jobsCount: 22, internshipsCount: 10 },

  // Embedded Systems & IoT
  { id: 'embedded-c', domainId: 'embedded-iot', name: 'Embedded C / C++ Programming', category: 'Embedded Systems & IoT', level: 'Intermediate', score: 70, verified: true, verifiedBy: 'Institution Verified', demand: 'High', icon: 'Cpu', jobsCount: 30, internshipsCount: 16 },
  { id: 'freertos', domainId: 'embedded-iot', name: 'FreeRTOS & Kernel Scheduling', category: 'Embedded Systems & IoT', level: 'Intermediate', score: 62, verified: false, demand: 'High', icon: 'Activity', jobsCount: 26, internshipsCount: 14 }
];
