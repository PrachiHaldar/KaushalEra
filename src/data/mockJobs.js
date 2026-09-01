// ==========================================================================
// KAUSHALERA JOBS & INTERNSHIPS DATA STORE (FOR ALL DOMAINS)
// ==========================================================================

export const MOCK_INTERNSHIPS = [
  // 1. AI & Machine Learning
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
    matchingSkills: ['Python', 'SQL', 'Git'],
    gapSkills: ['PyTorch', 'MLOps'],
    description: 'Work alongside research scientists building domain-specific LLM evaluation harnesses, automated feature extraction, and RAG pipelines.',
    openings: 4,
    applicants: 142,
    status: 'Open'
  },
  {
    id: 'intern-ai-2',
    domainId: 'artificial-intelligence',
    title: 'Computer Vision & Deep Learning Intern',
    company: 'VisionPulse AI',
    logo: 'VP',
    location: 'Bengaluru / Hybrid',
    type: 'Internship',
    stipend: '₹28,000 / month',
    duration: '4 Months',
    deadline: '20 Sep 2026',
    skillMatch: 85,
    skills: ['Python', 'OpenCV', 'PyTorch', 'YOLOv8'],
    matchingSkills: ['Python'],
    gapSkills: ['OpenCV', 'YOLOv8'],
    description: 'Train edge computer vision models for automated autonomous vehicle obstacle avoidance systems.',
    openings: 3,
    applicants: 98,
    status: 'Open'
  },

  // 2. Cloud & DevOps
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
    matchingSkills: ['Linux', 'Python'],
    gapSkills: ['Docker', 'Kubernetes'],
    description: 'Help automate multi-region staging environments, write Terraform IaC modules, and configure Prometheus & Grafana alerts.',
    openings: 3,
    applicants: 112,
    status: 'Open'
  },

  // 3. Full-Stack Modern Web
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
    matchingSkills: ['React', 'Node.js', 'PostgreSQL'],
    gapSkills: ['Docker'],
    description: 'Design interactive real-time web components and REST/WebSocket microservices for enterprise cloud analytics monitoring dashboards.',
    openings: 5,
    applicants: 218,
    status: 'Open'
  },

  // 4. Cyber Security & Ethical Hacking
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
    matchingSkills: ['Linux', 'Network Protocols'],
    gapSkills: ['Burp Suite', 'OWASP Top 10'],
    description: 'Conduct blackbox web penetration audits, audit API token authorization boundaries, and draft automated vulnerability patch sheets.',
    openings: 2,
    applicants: 84,
    status: 'Open'
  },

  // 5. Data Science & Big Data Analytics
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
    matchingSkills: ['SQL', 'Python', 'Statistics'],
    gapSkills: ['PowerBI'],
    description: 'Extract customer telemetry data, write optimized analytical SQL window aggregations, and present weekly executive KPI reports.',
    openings: 4,
    applicants: 165,
    status: 'Open'
  },

  // 6. Mobile App Development
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
    matchingSkills: ['REST APIs', 'Git'],
    gapSkills: ['Flutter', 'BLoC'],
    description: 'Implement pixel-perfect cross-platform screens, local SQLite caching, and push notification triggers for consumer apps.',
    openings: 3,
    applicants: 92,
    status: 'Open'
  },

  // 7. Blockchain & Web3
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
    matchingSkills: ['JavaScript', 'Git'],
    gapSkills: ['Solidity', 'Foundry'],
    description: 'Write, fuzz test, and gas-optimize Solidity smart contracts for automated decentralized treasury vaults.',
    openings: 2,
    applicants: 64,
    status: 'Open'
  },

  // 8. Embedded Systems & IoT
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
    matchingSkills: ['C Programming', 'Linux'],
    gapSkills: ['FreeRTOS', 'ARM Cortex'],
    description: 'Program real-time ESP32/STM32 microcontrollers, calibrate sensor telemetry over I2C/SPI, and stream telemetry to cloud brokers.',
    openings: 3,
    applicants: 76,
    status: 'Open'
  }
];

export const MOCK_JOBS = [
  // AI & ML
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
    responsibilities: [
      'Build feature engineering pipelines in Python and Pandas',
      'Train supervised classification and transformer models',
      'Deploy low-latency inference endpoints with FastAPI and Docker'
    ],
    postedDate: '1 week ago',
    applicants: 198,
    status: 'Active'
  },

  // Full-Stack Web
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
    responsibilities: [
      'Implement performant API endpoints with automated unit and integration tests',
      'Optimize database queries and indexes on PostgreSQL',
      'Collaborate in rapid 2-week agile sprints'
    ],
    postedDate: '2 days ago',
    applicants: 342,
    status: 'Active'
  },

  // Cloud & DevOps
  {
    id: 'job-devops-1',
    domainId: 'cloud-devops',
    title: 'Cloud Platform & Kubernetes Engineer',
    company: 'SkyGrid Networks',
    logo: 'SN',
    location: 'Hyderabad / Hybrid',
    salary: '₹13.5 - ₹19.0 LPA',
    type: 'Full-time',
    experience: '1-3 Years',
    skillMatch: 86,
    skills: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Linux'],
    description: 'Maintain multi-cluster EKS infrastructure, write Infrastructure as Code, and optimize cloud billing.',
    responsibilities: [
      'Manage production Kubernetes clusters and ingress controllers',
      'Write reusable Terraform modules across AWS regions'
    ],
    postedDate: '3 days ago',
    applicants: 145,
    status: 'Active'
  },

  // Cyber Security
  {
    id: 'job-sec-1',
    domainId: 'cyber-security',
    title: 'Cyber Security Analyst / SOC Tier-2',
    company: 'SecureNet Defence',
    logo: 'SD',
    location: 'Mumbai / Remote',
    salary: '₹11.0 - ₹16.0 LPA',
    type: 'Full-time',
    experience: '0-2 Years',
    skillMatch: 82,
    skills: ['Network Security', 'OWASP Top 10', 'SIEM', 'Penetration Testing'],
    description: 'Analyze security telemetry, triage SIEM anomaly alerts, and perform proactive vulnerability assessments.',
    responsibilities: [
      'Triage and investigate automated intrusion detection events',
      'Conduct regular internal vulnerability scans and compliance reviews'
    ],
    postedDate: '5 days ago',
    applicants: 120,
    status: 'Active'
  },

  // Data Science
  {
    id: 'job-ds-1',
    domainId: 'data-science',
    title: 'Data Science & Decision Analytics Specialist',
    company: 'Quantum Insights',
    logo: 'QI',
    location: 'Bengaluru / Remote',
    salary: '₹13.0 - ₹17.5 LPA',
    type: 'Full-time',
    experience: '0-2 Years',
    skillMatch: 90,
    skills: ['Python', 'SQL', 'Statistical Modeling', 'PowerBI', 'Spark'],
    description: 'Build predictive econometric models, customer segmentation clusters, and automated executive dashboards.',
    responsibilities: [
      'Write clean SQL and Pandas pipelines for terabyte-scale datasets',
      'Present quantitative insights to enterprise stakeholders'
    ],
    postedDate: '4 days ago',
    applicants: 210,
    status: 'Active'
  },

  // Mobile App Engineering
  {
    id: 'job-mob-1',
    domainId: 'mobile-dev',
    title: 'Mobile Engineer (Flutter / React Native)',
    company: 'SwiftTouch Apps',
    logo: 'ST',
    location: 'Pune / Remote',
    salary: '₹11.5 - ₹15.5 LPA',
    type: 'Full-time',
    experience: '0-2 Years',
    skillMatch: 88,
    skills: ['Flutter', 'React Native', 'Dart', 'TypeScript', 'REST APIs'],
    description: 'Develop responsive iOS and Android apps with 60 FPS animations, clean architecture, and offline data sync.',
    responsibilities: [
      'Develop pixel-perfect cross-platform interfaces',
      'Ensure high reliability across diverse mobile devices'
    ],
    postedDate: '6 days ago',
    applicants: 160,
    status: 'Active'
  },

  // Blockchain & Web3
  {
    id: 'job-web3-1',
    domainId: 'blockchain-web3',
    title: 'Smart Contract & Web3 Engineer',
    company: 'EtherSphere Protocols',
    logo: 'EP',
    location: 'Remote',
    salary: '₹16.0 - ₹24.0 LPA',
    type: 'Full-time',
    experience: '1-3 Years',
    skillMatch: 78,
    skills: ['Solidity', 'Foundry', 'Ethereum', 'Web3.js', 'EVM'],
    description: 'Design and deploy robust smart contracts for decentralized finance protocols with complete test coverage.',
    responsibilities: [
      'Write secure, gas-optimized Solidity smart contracts',
      'Perform invariant testing and formal verification'
    ],
    postedDate: '1 week ago',
    applicants: 88,
    status: 'Active'
  },

  // Embedded Systems & IoT
  {
    id: 'job-iot-1',
    domainId: 'embedded-iot',
    title: 'Embedded Firmware & IoT Systems Engineer',
    company: 'SensEdge Hardware',
    logo: 'SH',
    location: 'Chennai / Hybrid',
    salary: '₹12.0 - ₹17.0 LPA',
    type: 'Full-time',
    experience: '0-2 Years',
    skillMatch: 84,
    skills: ['Embedded C', 'ARM Cortex', 'FreeRTOS', 'SPI/I2C', 'MQTT'],
    description: 'Develop low-latency firmware for commercial smart city sensors and industrial automation controllers.',
    responsibilities: [
      'Program ARM Cortex microcontrollers with FreeRTOS',
      'Debug hardware communication bus protocols with logic analyzers'
    ],
    postedDate: '4 days ago',
    applicants: 95,
    status: 'Active'
  }
];

export const MOCK_APPLICATIONS = [
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
  },
  {
    id: 'app-2',
    company: 'TechNova Labs',
    role: 'AI/ML Research Intern',
    stage: 'SHORTLISTED',
    appliedDate: '24 Aug 2026',
    statusNote: 'Coding assessment scheduled for 05 Sep',
    badgeColor: 'badge-teal',
    salaryOrStipend: '₹30,000/mo',
    timeline: [
      { date: '24 Aug 2026', event: 'Application Submitted' },
      { date: '27 Aug 2026', event: 'Resume & Skill Profile Verified' },
      { date: '31 Aug 2026', event: 'Selected for Online Technical Round' }
    ]
  },
  {
    id: 'app-3',
    company: 'FinMetrics Analytics',
    role: 'Data Analytics & BI Intern',
    stage: 'INTERVIEW',
    appliedDate: '15 Aug 2026',
    statusNote: 'Technical Round 2 with Lead Architect',
    badgeColor: 'badge-warning',
    salaryOrStipend: '₹25,000/mo',
    timeline: [
      { date: '15 Aug 2026', event: 'Application Submitted' },
      { date: '19 Aug 2026', event: 'Passed Skill Match Screen (90%)' },
      { date: '25 Aug 2026', event: 'Completed Technical Round 1 (Score: 88%)' }
    ]
  },
  {
    id: 'app-4',
    company: 'Nexus Cloud Systems',
    role: 'Full-Stack Developer Intern',
    stage: 'SELECTED',
    appliedDate: '10 Aug 2026',
    statusNote: 'Offer letter released! Acceptance deadline 15 Sep',
    badgeColor: 'badge-success',
    salaryOrStipend: '₹30,000/mo',
    timeline: [
      { date: '10 Aug 2026', event: 'Application Submitted' },
      { date: '14 Aug 2026', event: 'Completed Coding Assessment' },
      { date: '20 Aug 2026', event: 'Completed System & Behavioral Interviews' },
      { date: '28 Aug 2026', event: 'Formal Offer Issued (₹30,000/mo)' }
    ]
  }
];
