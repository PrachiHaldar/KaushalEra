/**
 * Seed & In-Memory Data Store for KaushalEra Backend (All 8 Domains)
 */

export const INITIAL_DOMAINS = [
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence & Machine Learning',
    tagline: 'Deep Learning, LLMs, Neural Networks, Computer Vision & MLOps',
    icon: 'BrainCircuit',
    badge: 'Trending 🔥',
    careerPathsCount: 12,
    skillsCount: 48,
    resourcesCount: 126,
    demandPercent: 96,
    avgSalary: '₹14.5 - ₹32.0 LPA',
    assessmentId: 'ai-ml-assessment',
    overview: 'Develop intelligent algorithmic systems, computer vision models, and natural language processing pipelines.'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Platform Engineering',
    tagline: 'AWS, Azure, Docker, Kubernetes, CI/CD & Distributed Systems',
    icon: 'Cloud',
    badge: 'High Demand ⚡',
    careerPathsCount: 8,
    skillsCount: 36,
    resourcesCount: 94,
    demandPercent: 92,
    avgSalary: '₹12.0 - ₹28.0 LPA',
    assessmentId: 'cloud-devops-assessment',
    overview: 'Design high-availability cloud infrastructures and automated multi-cloud delivery pipelines.'
  },
  {
    id: 'full-stack-web',
    title: 'Full-Stack Modern Web Development',
    tagline: 'React, Node.js, Next.js, Distributed Databases & REST/GraphQL',
    icon: 'Layout',
    badge: 'Popular 🚀',
    careerPathsCount: 10,
    skillsCount: 42,
    resourcesCount: 160,
    demandPercent: 95,
    avgSalary: '₹10.0 - ₹24.0 LPA',
    assessmentId: 'fullstack-web-assessment',
    overview: 'Build high-performance web applications and backend systems at massive scale.'
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
    overview: 'Safeguard organizations against modern zero-day attacks, ransomware, and cloud infrastructure threats.'
  },
  {
    id: 'data-science',
    title: 'Data Science & Big Data Analytics',
    tagline: 'Transform massive enterprise data into predictive insights and ML pipelines.',
    icon: 'Database',
    badge: 'High Value 📊',
    careerPathsCount: 8,
    skillsCount: 38,
    resourcesCount: 110,
    demandPercent: 93,
    avgSalary: '₹12.5 - ₹27.0 LPA',
    assessmentId: 'data-science-assessment',
    overview: 'Combine statistical modeling, distributed data engineering, and visualization to extract high-leverage business intelligence.'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Engineering (Flutter & React Native)',
    tagline: 'Craft high-performance, beautiful mobile apps for iOS and Android.',
    icon: 'Smartphone',
    badge: 'Growth 📱',
    careerPathsCount: 6,
    skillsCount: 28,
    resourcesCount: 75,
    demandPercent: 88,
    avgSalary: '₹9.5 - ₹22.0 LPA',
    assessmentId: 'mobile-dev-assessment',
    overview: 'Master cross-platform mobile architectures, reactive state management, and offline-first data sync.'
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
    overview: 'Build decentralized applications, audit Solidity smart contracts, and implement EVM gas optimizations.'
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
    overview: 'Bridge software and physical hardware with Embedded C/C++, ARM architectures, and FreeRTOS.'
  }
];

export const INITIAL_INTERNSHIPS = [
  {
    id: 'intern-ai-1',
    domainId: 'artificial-intelligence',
    title: 'AI/ML Research Intern',
    company: 'TechNova Labs',
    logo: 'TN',
    location: 'Remote',
    type: 'Internship',
    stipend: '₹30,000 / month',
    duration: '6 Months',
    deadline: '12 Sep 2026',
    skillMatch: 92,
    skills: ['Python', 'Machine Learning', 'PyTorch', 'SQL'],
    description: 'Work alongside research scientists building domain-specific LLM evaluation harnesses, automated feature extraction, and RAG pipelines.',
    openings: 4,
    applicants: 142,
    status: 'Open'
  },
  {
    id: 'intern-devops-1',
    domainId: 'cloud-devops',
    title: 'Cloud DevOps & SRE Intern',
    company: 'Aether Infrastructure',
    logo: 'AI',
    location: 'Hyderabad / Hybrid',
    type: 'Internship',
    stipend: '₹25,000 / month',
    duration: '6 Months',
    deadline: '24 Sep 2026',
    skillMatch: 84,
    skills: ['Docker', 'Kubernetes', 'AWS', 'Linux', 'Python'],
    description: 'Help automate multi-region staging environments, write Terraform IaC modules, and configure Prometheus alerts.',
    openings: 3,
    applicants: 112,
    status: 'Open'
  },
  {
    id: 'intern-web-1',
    domainId: 'full-stack-web',
    title: 'Full-Stack React & Node.js Developer Intern',
    company: 'Nexus Cloud Systems',
    logo: 'NC',
    location: 'Bengaluru / Hybrid',
    type: 'Internship',
    stipend: '₹30,000 / month',
    duration: '3 Months',
    deadline: '18 Sep 2026',
    skillMatch: 95,
    skills: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    description: 'Design interactive real-time web components and REST/WebSocket microservices for enterprise cloud analytics monitoring dashboards.',
    openings: 5,
    applicants: 218,
    status: 'Open'
  },
  {
    id: 'intern-sec-1',
    domainId: 'cyber-security',
    title: 'Penetration Testing & Cyber Security Intern',
    company: 'Fortress CyberDef',
    logo: 'FC',
    location: 'Remote',
    type: 'Internship',
    stipend: '₹26,000 / month',
    duration: '6 Months',
    deadline: '28 Sep 2026',
    skillMatch: 80,
    skills: ['Burp Suite', 'OWASP Top 10', 'Linux', 'Network Protocols'],
    description: 'Conduct blackbox web penetration audits and draft automated vulnerability patch sheets.',
    openings: 2,
    applicants: 84,
    status: 'Open'
  },
  {
    id: 'intern-ds-1',
    domainId: 'data-science',
    title: 'Data Analytics & Business Intelligence Intern',
    company: 'FinMetrics Analytics',
    logo: 'FM',
    location: 'Mumbai / Remote',
    type: 'Internship',
    stipend: '₹25,000 / month',
    duration: '4 Months',
    deadline: '30 Sep 2026',
    skillMatch: 90,
    skills: ['SQL', 'Python', 'PowerBI', 'Statistics', 'Pandas'],
    description: 'Extract customer telemetry data, write optimized analytical SQL window aggregations, and present weekly executive KPI reports.',
    openings: 4,
    applicants: 165,
    status: 'Open'
  },
  {
    id: 'intern-mob-1',
    domainId: 'mobile-dev',
    title: 'Flutter Mobile Engineering Intern',
    company: 'AppScale Interactive',
    logo: 'AS',
    location: 'Pune / Remote',
    type: 'Internship',
    stipend: '₹24,000 / month',
    duration: '6 Months',
    deadline: '25 Sep 2026',
    skillMatch: 88,
    skills: ['Flutter', 'Dart', 'BLoC', 'REST APIs'],
    description: 'Implement pixel-perfect cross-platform screens, local SQLite caching, and push notification triggers.',
    openings: 3,
    applicants: 92,
    status: 'Open'
  },
  {
    id: 'intern-web3-1',
    domainId: 'blockchain-web3',
    title: 'Smart Contract Developer Intern (Solidity/Foundry)',
    company: 'ChainVertex Labs',
    logo: 'CV',
    location: 'Remote',
    type: 'Internship',
    stipend: '₹35,000 / month',
    duration: '3 Months',
    deadline: '22 Sep 2026',
    skillMatch: 75,
    skills: ['Solidity', 'Foundry', 'Ethereum', 'Ethers.js'],
    description: 'Write, fuzz test, and gas-optimize Solidity smart contracts for automated decentralized treasury vaults.',
    openings: 2,
    applicants: 64,
    status: 'Open'
  },
  {
    id: 'intern-iot-1',
    domainId: 'embedded-iot',
    title: 'Embedded Firmware & IoT Systems Intern',
    company: 'RoboCore Technologies',
    logo: 'RC',
    location: 'Bengaluru / On-site',
    type: 'Internship',
    stipend: '₹22,000 / month',
    duration: '6 Months',
    deadline: '15 Sep 2026',
    skillMatch: 82,
    skills: ['Embedded C', 'FreeRTOS', 'ARM Cortex', 'MQTT'],
    description: 'Program real-time ESP32/STM32 microcontrollers and calibrate sensor telemetry over I2C/SPI.',
    openings: 3,
    applicants: 76,
    status: 'Open'
  }
];

export const INITIAL_JOBS = [
  {
    id: 'job-ai-1',
    domainId: 'artificial-intelligence',
    title: 'Associate Machine Learning Engineer',
    company: 'DeepData Systems',
    logo: 'DD',
    location: 'Gurugram / Remote',
    salary: '₹14.0 - ₹18.5 LPA',
    type: 'Full-time',
    experience: '0-1 Years',
    skillMatch: 88,
    skills: ['Python', 'Machine Learning', 'PyTorch', 'MLOps', 'SQL'],
    description: 'Build, train, evaluate, and deploy scalable ML models and conversational LLM pipelines.',
    postedDate: '1 week ago',
    applicants: 198,
    status: 'Active'
  },
  {
    id: 'job-web-1',
    domainId: 'full-stack-web',
    title: 'Junior Full-Stack Software Engineer',
    company: 'CognitiveScale Technologies',
    logo: 'CS',
    location: 'Bengaluru / Hybrid',
    salary: '₹12.0 - ₹16.5 LPA',
    type: 'Full-time',
    experience: '0-2 Years',
    skillMatch: 94,
    skills: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'System Design'],
    description: 'Architect distributed REST and WebSocket microservices serving over 2 million daily requests.',
    postedDate: '2 days ago',
    applicants: 342,
    status: 'Active'
  }
];

export const INITIAL_APPLICATIONS = [
  {
    id: 'app-1',
    company: 'Google',
    role: 'Software Engineering Intern',
    stage: 'APPLIED',
    appliedDate: '28 Aug 2026',
    statusNote: 'Resume viewed by recruiter',
    badgeColor: 'badge-primary',
    salaryOrStipend: '₹75,000/mo',
    timeline: [
      { date: '28 Aug 2026', event: 'Application Submitted' },
      { date: '30 Aug 2026', event: 'Profile Shortlisted for Initial Review' }
    ]
  }
];

export const INITIAL_CANDIDATES = [
  {
    id: 'cand-1',
    name: 'Alex Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    title: 'Computer Science Student • Aspiring AI Engineer',
    university: 'Apex Institute of Technology',
    batch: 'Class of 2027',
    gpa: '8.9 / 10',
    skillMatch: 94,
    assessmentScore: 88,
    status: 'Shortlisted',
    verification: 'Assessment & Institution Verified',
    skills: [
      { name: 'Python', matched: true, level: 'Advanced (90%)' },
      { name: 'SQL', matched: true, level: 'Intermediate (70%)' },
      { name: 'Machine Learning', matched: true, level: 'Intermediate (65%)' }
    ],
    educationVerified: true,
    projectsCount: 4,
    topProject: 'LLM Multi-Agent Question Answering Engine (GitHub Verified)',
    experience: 'Previous Web Dev Intern at StartUpSphere',
    recommendedFor: ['AI/ML Research Intern', 'Junior Backend Engineer']
  }
];

export const INITIAL_SKILLS = [
  { id: 'python', domainId: 'artificial-intelligence', name: 'Python Programming & Internals', category: 'AI & Machine Learning', level: 'Advanced', score: 90, verified: true, demand: 'Critical', icon: 'Code2', jobsCount: 58, internshipsCount: 34 },
  { id: 'ml', domainId: 'artificial-intelligence', name: 'Machine Learning & Scikit-Learn', category: 'AI & Machine Learning', level: 'Advanced', score: 85, verified: true, demand: 'Critical', icon: 'BrainCircuit', jobsCount: 46, internshipsCount: 28 },
  { id: 'docker', domainId: 'cloud-devops', name: 'Docker & Multi-Stage Containers', category: 'Cloud & DevOps', level: 'Advanced', score: 82, verified: true, demand: 'Critical', icon: 'Box', jobsCount: 52, internshipsCount: 30 },
  { id: 'react', domainId: 'full-stack-web', name: 'React.js, Next.js & TypeScript', category: 'Full-Stack Web', level: 'Advanced', score: 92, verified: true, demand: 'Critical', icon: 'Layout', jobsCount: 72, internshipsCount: 45 },
  { id: 'net-sec', domainId: 'cyber-security', name: 'Network Protocols & Firewalls', category: 'Cyber Security', level: 'Intermediate', score: 70, verified: true, demand: 'High', icon: 'Shield', jobsCount: 38, internshipsCount: 20 },
  { id: 'bi-tools', domainId: 'data-science', name: 'PowerBI, Tableau & Visual Storytelling', category: 'Data Science', level: 'Advanced', score: 85, verified: true, demand: 'High', icon: 'BarChart3', jobsCount: 44, internshipsCount: 26 },
  { id: 'flutter', domainId: 'mobile-dev', name: 'Flutter, Dart & BLoC Architecture', category: 'Mobile Development', level: 'Advanced', score: 86, verified: true, demand: 'Very High', icon: 'Smartphone', jobsCount: 40, internshipsCount: 24 },
  { id: 'solidity', domainId: 'blockchain-web3', name: 'Solidity & Smart Contract Auditing', category: 'Blockchain & Web3', level: 'Beginner', score: 40, verified: false, demand: 'High', icon: 'Layers', jobsCount: 24, internshipsCount: 12 },
  { id: 'embedded-c', domainId: 'embedded-iot', name: 'Embedded C / C++ Programming', category: 'Embedded Systems & IoT', level: 'Intermediate', score: 70, verified: true, demand: 'High', icon: 'Cpu', jobsCount: 30, internshipsCount: 16 }
];

export const INITIAL_RESOURCES = [
  {
    id: 'res-ai-1',
    domainId: 'artificial-intelligence',
    type: 'Interactive Guide',
    typeBadge: '🧭 Interactive Guide',
    title: 'Generative AI & LLM RAG Pipeline Architecture Blueprint',
    skill: 'AI & Machine Learning',
    difficulty: 'Advanced',
    duration: '2 hr 15 min',
    rating: 4.9,
    reviewsCount: 3240,
    author: 'TechNova Research Lab',
    bookmarked: true,
    summary: 'A production blueprint for vector indexing, hybrid retrieval, and hallucination guardrails.'
  },
  {
    id: 'res-devops-1',
    domainId: 'cloud-devops',
    type: 'Lab',
    typeBadge: '🧪 Interactive Lab',
    title: 'Production Kubernetes Cluster Management & GitOps with ArgoCD',
    skill: 'Kubernetes & DevOps',
    difficulty: 'Advanced',
    duration: '1 hr 45 min',
    rating: 4.9,
    reviewsCount: 2100,
    author: 'CloudOps Foundation',
    bookmarked: true,
    summary: 'Hands-on interactive lab setting up Ingress controllers, HPA, and GitOps sync loops.'
  },
  {
    id: 'res-web-1',
    domainId: 'full-stack-web',
    type: 'Video',
    typeBadge: '🎥 Video Course',
    title: 'React 18 Architecture, Server Components & High-Throughput Node.js',
    skill: 'React & Node.js',
    difficulty: 'Intermediate / Advanced',
    duration: '3 hr 30 min',
    rating: 4.9,
    reviewsCount: 4890,
    author: 'KaushalEra Web Engineering Faculty',
    bookmarked: true,
    summary: 'Deep dive into React Fiber lifecycle, Suspense SSR, and NestJS microservices.'
  }
];

export const INITIAL_ASSESSMENTS = [
  {
    id: 'ai-ml-assessment',
    title: 'Artificial Intelligence & Deep Learning Assessment',
    domainId: 'artificial-intelligence',
    category: 'AI & Machine Learning',
    questionsCount: 5,
    durationMinutes: 15,
    rewardXP: 100,
    questions: [
      {
        id: 'q1',
        question: 'What is the primary benefit of the Multi-Head Attention mechanism in Transformers?',
        options: ['Parallelizable matrix operations across sequence positions', 'Eliminating activation functions', 'Enforcing L1 regularization', 'Quantizing weights to 1-bit'],
        correctIndex: 0
      }
    ]
  },
  {
    id: 'cloud-devops-assessment',
    title: 'Cloud & DevOps Infrastructure Assessment',
    domainId: 'cloud-devops',
    category: 'Cloud & DevOps',
    questionsCount: 5,
    durationMinutes: 15,
    rewardXP: 90,
    questions: [
      {
        id: 'q1',
        question: 'What is the primary role of kube-controller-manager in Kubernetes?',
        options: ['Running container processes directly', 'Running core control loops that regulate cluster state toward desired state', 'In-memory key-value datastore', 'Translating DNS names'],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'fullstack-web-assessment',
    title: 'Full-Stack Modern Web & React Architecture Assessment',
    domainId: 'full-stack-web',
    category: 'Full-Stack Web',
    questionsCount: 5,
    durationMinutes: 15,
    rewardXP: 90,
    questions: [
      {
        id: 'q1',
        question: 'How does Automatic Batching in React 18 improve performance?',
        options: ['Groups multiple state updates into a single re-render pass', 'Converts JSX to WebGL', 'Eliminates React keys', 'Runs components in Web Workers'],
        correctIndex: 0
      }
    ]
  }
];

export const INITIAL_USERS = {
  student: {
    id: 'usr-student-1',
    email: 'student@demo.com',
    name: 'Alex Sharma',
    role: 'student',
    roleTitle: 'B.Tech Student (Class of 2027)',
    institution: 'Apex Institute of Technology',
    department: 'Computer Science & Engineering',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    onboardingComplete: true
  }
};
