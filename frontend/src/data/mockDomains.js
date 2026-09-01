// ==========================================================================
// KAUSHALERA DOMAIN DISCOVERY DATA STORE
// ==========================================================================

export const MOCK_DOMAINS = [
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence & Machine Learning',
    tagline: 'Build the skills required for the next generation of AI & intelligent system careers.',
    icon: 'BrainCircuit',
    badge: 'Trending 🔥',
    careerPathsCount: 12,
    skillsCount: 48,
    resourcesCount: 126,
    demandPercent: 96,
    avgSalary: '₹14.5 - ₹32.0 LPA',
    assessmentId: 'ai-ml-assessment',
    overview: 'Artificial Intelligence and Deep Learning encompass everything from natural language processing and computer vision to generative LLMs and autonomous agents. Companies across health, finance, and enterprise software are actively hiring AI specialists with strong fundamentals in math and system engineering.',
    requiredSkills: [
      { name: 'Python Programming & Internals', level: 'Advanced', weight: '25%', skillId: 'python' },
      { name: 'Linear Algebra & Calculus', level: 'Intermediate', weight: '15%', skillId: 'math-foundations' },
      { name: 'Machine Learning & Scikit-Learn', level: 'Advanced', weight: '25%', skillId: 'ml' },
      { name: 'Deep Learning with PyTorch', level: 'Advanced', weight: '20%', skillId: 'pytorch' },
      { name: 'MLOps & LLM Deployment (vLLM/FastAPI)', level: 'Intermediate', weight: '15%', skillId: 'mlops' }
    ],
    careerRoles: [
      { role: 'Machine Learning Engineer', match: 72, demand: 'Very High', avgSalary: '₹18 LPA' },
      { role: 'AI Research Scientist', match: 65, demand: 'High', avgSalary: '₹24 LPA' },
      { role: 'Data Scientist', match: 81, demand: 'High', avgSalary: '₹16 LPA' },
      { role: 'NLP / LLM Engineer', match: 70, demand: 'High', avgSalary: '₹19.5 LPA' },
      { role: 'Computer Vision Specialist', match: 60, demand: 'Medium-High', avgSalary: '₹17 LPA' }
    ],
    courses: [
      { title: 'Machine Learning Specialization', provider: 'DeepLearning.AI / Stanford', rating: 4.9, students: '420k', duration: '3 months' },
      { title: 'Deep Learning with PyTorch', provider: 'Meta AI Academy', rating: 4.8, students: '180k', duration: '6 weeks' },
      { title: 'Applied Generative AI & LLMs', provider: 'KaushalEra Masterclass', rating: 4.9, students: '45k', duration: '4 weeks' }
    ],
    projects: [
      { title: 'End-to-End LLM RAG Pipeline with Vector DB', difficulty: 'Advanced', duration: '3 weeks', tags: ['Python', 'LangChain', 'ChromaDB'] },
      { title: 'Multi-Object Real-Time Detection Model', difficulty: 'Intermediate', duration: '2 weeks', tags: ['PyTorch', 'YOLOv8', 'OpenCV'] }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Platform Engineering',
    tagline: 'Architect scalable cloud infrastructure, CI/CD pipelines, and Kubernetes clusters.',
    icon: 'Cloud',
    badge: 'High Demand ⚡',
    careerPathsCount: 8,
    skillsCount: 36,
    resourcesCount: 94,
    demandPercent: 92,
    avgSalary: '₹12.0 - ₹28.0 LPA',
    assessmentId: 'cloud-devops-assessment',
    overview: 'DevOps & Site Reliability Engineering form the backbone of modern software reliability, continuous delivery, and resilient distributed architecture on AWS, Azure, and GCP.',
    requiredSkills: [
      { name: 'Linux System Administration & Shell', level: 'Advanced', weight: '20%', skillId: 'linux' },
      { name: 'Docker & Multi-Stage Containers', level: 'Advanced', weight: '25%', skillId: 'docker' },
      { name: 'Kubernetes Cluster Orchestration', level: 'Intermediate', weight: '20%', skillId: 'kubernetes' },
      { name: 'CI/CD Pipelines (GitHub Actions/GitLab)', level: 'Advanced', weight: '20%', skillId: 'cicd' },
      { name: 'Infrastructure as Code (Terraform)', level: 'Intermediate', weight: '15%', skillId: 'terraform' }
    ],
    careerRoles: [
      { role: 'DevOps Engineer', match: 78, demand: 'Very High', avgSalary: '₹16 LPA' },
      { role: 'Cloud Solutions Architect', match: 64, demand: 'High', avgSalary: '₹22 LPA' },
      { role: 'Site Reliability Engineer (SRE)', match: 70, demand: 'High', avgSalary: '₹19 LPA' },
      { role: 'Platform Engineer', match: 75, demand: 'Very High', avgSalary: '₹18 LPA' }
    ],
    courses: [
      { title: 'AWS Certified Solutions Architect Path', provider: 'Cloud Academy', rating: 4.8, students: '290k', duration: '8 weeks' },
      { title: 'Kubernetes for Production Microservices', provider: 'Linux Foundation', rating: 4.9, students: '110k', duration: '5 weeks' }
    ],
    projects: [
      { title: 'Automated Multi-Region Kubernetes GitOps Cluster', difficulty: 'Advanced', duration: '4 weeks', tags: ['Terraform', 'ArgoCD', 'K8s'] },
      { title: 'Zero-Downtime Microservice CI/CD on AWS', difficulty: 'Intermediate', duration: '2 weeks', tags: ['GitHub Actions', 'Docker', 'AWS'] }
    ]
  },
  {
    id: 'full-stack-web',
    title: 'Full-Stack Modern Web Development',
    tagline: 'Build ultra-responsive web applications using React, Node.js, Next.js, and Cloud native backends.',
    icon: 'Layout',
    badge: 'Popular 🚀',
    careerPathsCount: 10,
    skillsCount: 42,
    resourcesCount: 160,
    demandPercent: 95,
    avgSalary: '₹10.0 - ₹24.0 LPA',
    assessmentId: 'fullstack-web-assessment',
    overview: 'Full-stack engineering empowers you to deliver user-facing experiences with seamless backend integrations, reactive state management, microservices, and distributed data layers.',
    requiredSkills: [
      { name: 'React.js & Modern TypeScript', level: 'Advanced', weight: '30%', skillId: 'react' },
      { name: 'Node.js & Express / NestJS', level: 'Advanced', weight: '25%', skillId: 'nodejs' },
      { name: 'PostgreSQL & ORMs (Prisma)', level: 'Intermediate', weight: '20%', skillId: 'sql' },
      { name: 'REST APIs & WebSockets', level: 'Advanced', weight: '15%', skillId: 'apis' },
      { name: 'Testing & Performance (Jest / Lighthouse)', level: 'Intermediate', weight: '10%', skillId: 'web-perf' }
    ],
    careerRoles: [
      { role: 'Full-Stack Software Engineer', match: 91, demand: 'Very High', avgSalary: '₹15 LPA' },
      { role: 'Frontend Architect', match: 89, demand: 'High', avgSalary: '₹16 LPA' },
      { role: 'Backend API Developer', match: 85, demand: 'High', avgSalary: '₹14 LPA' },
      { role: 'Next.js Web Developer', match: 94, demand: 'Very High', avgSalary: '₹13.5 LPA' }
    ],
    courses: [
      { title: 'Full Stack React & Node Masterclass', provider: 'KaushalEra Pro', rating: 4.9, students: '320k', duration: '10 weeks' },
      { title: 'Production Next.js & Server Components', provider: 'Vercel Academy', rating: 4.8, students: '95k', duration: '4 weeks' }
    ],
    projects: [
      { title: 'Real-Time Collaboration Workspace with WebSockets', difficulty: 'Intermediate', duration: '3 weeks', tags: ['React', 'Node.js', 'Socket.io', 'Redis'] },
      { title: 'High-Throughput E-Commerce API with Caching', difficulty: 'Advanced', duration: '3 weeks', tags: ['NestJS', 'PostgreSQL', 'Redis'] }
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Ethical Hacking',
    tagline: 'Defend networks, analyze vulnerabilities, and protect enterprise digital assets.',
    icon: 'ShieldCheck',
    badge: 'Critical 🛡️',
    careerPathsCount: 6,
    skillsCount: 30,
    resourcesCount: 82,
    demandPercent: 89,
    avgSalary: '₹11.0 - ₹26.0 LPA',
    assessmentId: 'cyber-security-assessment',
    overview: 'Safeguard organizations against modern zero-day attacks, ransomware, and cloud infrastructure threats through penetration testing, security auditing, and cryptography.',
    requiredSkills: [
      { name: 'Network Security & OSI Protocols', level: 'Advanced', weight: '25%', skillId: 'net-sec' },
      { name: 'Penetration Testing & Burp Suite', level: 'Advanced', weight: '30%', skillId: 'pentest' },
      { name: 'Cryptography & Identity Management', level: 'Intermediate', weight: '25%', skillId: 'crypto' },
      { name: 'Incident Response & Threat Hunting', level: 'Intermediate', weight: '20%', skillId: 'threat-hunt' }
    ],
    careerRoles: [
      { role: 'Security Analyst', match: 62, demand: 'High', avgSalary: '₹14 LPA' },
      { role: 'Ethical Hacker / Pentester', match: 58, demand: 'High', avgSalary: '₹18 LPA' },
      { role: 'Security Operations Center (SOC) Lead', match: 65, demand: 'High', avgSalary: '₹16 LPA' }
    ],
    courses: [
      { title: 'CompTIA Security+ & Ethical Hacking Path', provider: 'CyberSec Institute', rating: 4.7, students: '85k', duration: '6 weeks' },
      { title: 'Web Application Pentesting (OWASP Top 10)', provider: 'Offensive Security Alum', rating: 4.9, students: '62k', duration: '4 weeks' }
    ],
    projects: [
      { title: 'Automated Vulnerability Scanner & Report Generator', difficulty: 'Advanced', duration: '3 weeks', tags: ['Python', 'Nmap', 'Security'] },
      { title: 'SOC SIEM Threat Detection Engine', difficulty: 'Intermediate', duration: '2 weeks', tags: ['Wazuh', 'Linux', 'Elasticsearch'] }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science & Big Data Analytics',
    tagline: 'Transform massive enterprise data into predictive insights, business intelligence, and ML pipelines.',
    icon: 'Database',
    badge: 'High Value 📊',
    careerPathsCount: 8,
    skillsCount: 38,
    resourcesCount: 110,
    demandPercent: 93,
    avgSalary: '₹12.5 - ₹27.0 LPA',
    assessmentId: 'data-science-assessment',
    overview: 'Data Science combines statistical modeling, distributed data engineering, and visualization to extract high-leverage business intelligence from petabyte-scale data lakes.',
    requiredSkills: [
      { name: 'Advanced SQL & Query Optimization', level: 'Advanced', weight: '30%', skillId: 'sql' },
      { name: 'Python Data Stack (Pandas, NumPy, Polars)', level: 'Advanced', weight: '25%', skillId: 'python' },
      { name: 'Data Visualization & BI (PowerBI / Tableau)', level: 'Advanced', weight: '20%', skillId: 'bi-tools' },
      { name: 'Statistical Modeling & Hypothesis Testing', level: 'Intermediate', weight: '15%', skillId: 'statistics' },
      { name: 'Big Data Processing (Apache Spark)', level: 'Intermediate', weight: '10%', skillId: 'spark' }
    ],
    careerRoles: [
      { role: 'Data Scientist', match: 84, demand: 'Very High', avgSalary: '₹16 LPA' },
      { role: 'Data Analytics Engineer', match: 88, demand: 'High', avgSalary: '₹14 LPA' },
      { role: 'Business Intelligence Lead', match: 80, demand: 'High', avgSalary: '₹15 LPA' },
      { role: 'Data Architect', match: 68, demand: 'Very High', avgSalary: '₹22 LPA' }
    ],
    courses: [
      { title: 'Data Science & Statistical Learning', provider: 'Johns Hopkins / KaushalEra', rating: 4.8, students: '160k', duration: '8 weeks' },
      { title: 'Production Spark & Distributed Analytics', provider: 'Databricks Academy', rating: 4.9, students: '78k', duration: '5 weeks' }
    ],
    projects: [
      { title: 'Customer Churn Predictive Pipeline with Feature Store', difficulty: 'Advanced', duration: '3 weeks', tags: ['Python', 'XGBoost', 'PowerBI'] },
      { title: 'Real-Time Financial Telemetry Aggregator', difficulty: 'Intermediate', duration: '2 weeks', tags: ['PySpark', 'PostgreSQL', 'DuckDB'] }
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Engineering (Flutter & React Native)',
    tagline: 'Craft high-performance, beautiful mobile apps for iOS and Android with single-codebase architectures.',
    icon: 'Smartphone',
    badge: 'Growth 📱',
    careerPathsCount: 6,
    skillsCount: 28,
    resourcesCount: 75,
    demandPercent: 88,
    avgSalary: '₹9.5 - ₹22.0 LPA',
    assessmentId: 'mobile-dev-assessment',
    overview: 'Mobile engineering encompasses cross-platform framework mastery (Flutter / Dart and React Native), native platform APIs, smooth animations, and offline-first data sync.',
    requiredSkills: [
      { name: 'Flutter & Dart Framework', level: 'Advanced', weight: '30%', skillId: 'flutter' },
      { name: 'React Native & Expo', level: 'Advanced', weight: '25%', skillId: 'react-native' },
      { name: 'State Management (Bloc / Riverpod / Redux)', level: 'Advanced', weight: '20%', skillId: 'state-mgmt' },
      { name: 'Offline Storage & SQLite / WatermelonDB', level: 'Intermediate', weight: '15%', skillId: 'sqlite' },
      { name: 'App Store / Play Store CI/CD Deployment', level: 'Intermediate', weight: '10%', skillId: 'mobile-cicd' }
    ],
    careerRoles: [
      { role: 'Flutter Mobile Engineer', match: 86, demand: 'Very High', avgSalary: '₹14 LPA' },
      { role: 'React Native Developer', match: 89, demand: 'High', avgSalary: '₹14.5 LPA' },
      { role: 'iOS / Android Lead Architect', match: 72, demand: 'High', avgSalary: '₹18 LPA' }
    ],
    courses: [
      { title: 'Complete Flutter & Dart Masterclass', provider: 'Google Dev Academy', rating: 4.9, students: '210k', duration: '8 weeks' },
      { title: 'Enterprise React Native with Expo', provider: 'KaushalEra Pro', rating: 4.8, students: '92k', duration: '6 weeks' }
    ],
    projects: [
      { title: 'Offline-First Health & Fitness Tracker App', difficulty: 'Intermediate', duration: '3 weeks', tags: ['Flutter', 'Hive', 'Charts'] },
      { title: 'E-Commerce Mobile App with Razorpay Payments', difficulty: 'Advanced', duration: '3 weeks', tags: ['React Native', 'Redux', 'Stripe'] }
    ]
  },
  {
    id: 'blockchain-web3',
    title: 'Blockchain & Web3 Distributed Systems',
    tagline: 'Engineer decentralized applications, smart contracts, and cryptographic protocols.',
    icon: 'Layers',
    badge: 'Emerging ⛓️',
    careerPathsCount: 5,
    skillsCount: 24,
    resourcesCount: 65,
    demandPercent: 82,
    avgSalary: '₹13.0 - ₹30.0 LPA',
    assessmentId: 'blockchain-web3-assessment',
    overview: 'Web3 and distributed ledger technologies leverage Ethereum, Solidity smart contracts, zero-knowledge proofs, and decentralized storage to create censorship-resistant protocols.',
    requiredSkills: [
      { name: 'Solidity & Smart Contract Security', level: 'Advanced', weight: '35%', skillId: 'solidity' },
      { name: 'Ethers.js & Web3.js Client Integration', level: 'Advanced', weight: '25%', skillId: 'web3js' },
      { name: 'Hardhat & Foundry Testing Environments', level: 'Intermediate', weight: '20%', skillId: 'foundry' },
      { name: 'Consensus Mechanisms & Cryptography', level: 'Intermediate', weight: '20%', skillId: 'crypto' }
    ],
    careerRoles: [
      { role: 'Smart Contract Developer', match: 65, demand: 'High', avgSalary: '₹18 LPA' },
      { role: 'Blockchain Protocol Engineer', match: 58, demand: 'High', avgSalary: '₹24 LPA' },
      { role: 'Web3 Full-Stack Developer', match: 74, demand: 'High', avgSalary: '₹16 LPA' }
    ],
    courses: [
      { title: 'Solidity Smart Contract Security & Auditing', provider: 'ConsenSys Academy', rating: 4.9, students: '48k', duration: '6 weeks' }
    ],
    projects: [
      { title: 'Automated DeFi Liquidity Vault with Foundry Tests', difficulty: 'Advanced', duration: '3 weeks', tags: ['Solidity', 'Foundry', 'Ethereum'] }
    ]
  },
  {
    id: 'embedded-iot',
    title: 'Embedded Systems, Robotics & IoT',
    tagline: 'Program real-time microcontrollers, sensors, edge hardware, and autonomous robotics.',
    icon: 'Cpu',
    badge: 'Hardware 🤖',
    careerPathsCount: 6,
    skillsCount: 26,
    resourcesCount: 70,
    demandPercent: 85,
    avgSalary: '₹10.5 - ₹24.0 LPA',
    assessmentId: 'embedded-iot-assessment',
    overview: 'Embedded systems bridge software and physical hardware. Specialize in C/C++ embedded programming, RTOS, ARM architecture, MQTT telemetry, and edge computing.',
    requiredSkills: [
      { name: 'Embedded C / C++ Programming', level: 'Advanced', weight: '30%', skillId: 'embedded-c' },
      { name: 'ARM Cortex & Microcontroller Registers', level: 'Advanced', weight: '25%', skillId: 'arm' },
      { name: 'FreeRTOS & Real-Time Kernel Scheduling', level: 'Intermediate', weight: '25%', skillId: 'freertos' },
      { name: 'IoT Protocols (MQTT, CoAP, BLE)', level: 'Intermediate', weight: '20%', skillId: 'iot-protocols' }
    ],
    careerRoles: [
      { role: 'Embedded Software Engineer', match: 70, demand: 'High', avgSalary: '₹15 LPA' },
      { role: 'IoT Firmware Developer', match: 75, demand: 'High', avgSalary: '₹14 LPA' },
      { role: 'Robotics Control Systems Engineer', match: 62, demand: 'Very High', avgSalary: '₹17.5 LPA' }
    ],
    courses: [
      { title: 'ARM Cortex-M Embedded C Programming', provider: 'FastBit Embedded Academy', rating: 4.9, students: '72k', duration: '7 weeks' }
    ],
    projects: [
      { title: 'FreeRTOS Multi-Sensor Gateway with AWS IoT Core', difficulty: 'Advanced', duration: '3 weeks', tags: ['ESP32', 'FreeRTOS', 'MQTT', 'C++'] }
    ]
  }
];
