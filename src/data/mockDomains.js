// ==========================================================================
// KAUSHALERA DOMAIN DISCOVERY DATA STORE
// ==========================================================================

export const MOCK_DOMAINS = [
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    tagline: 'Build the skills required for the next generation of AI & intelligent system careers.',
    icon: 'BrainCircuit',
    badge: 'Trending 🔥',
    careerPathsCount: 12,
    skillsCount: 48,
    resourcesCount: 126,
    demandPercent: 91,
    avgSalary: '₹14.5 - ₹32.0 LPA',
    overview: 'Artificial Intelligence and Deep Learning encompass everything from natural language processing to computer vision and autonomous agents. Companies across health, finance, and software engineering are actively hiring AI specialists with strong fundamentals in math and engineering.',
    requiredSkills: [
      { name: 'Python Programming', level: 'Advanced', weight: '25%' },
      { name: 'Linear Algebra & Calculus', level: 'Intermediate', weight: '15%' },
      { name: 'Machine Learning Fundamentals', level: 'Advanced', weight: '25%' },
      { name: 'Deep Learning & Neural Networks', level: 'Advanced', weight: '20%' },
      { name: 'MLOps & Model Deployment', level: 'Intermediate', weight: '15%' }
    ],
    careerRoles: [
      { role: 'Machine Learning Engineer', match: 72, demand: 'Very High', avgSalary: '₹18 LPA' },
      { role: 'AI Research Scientist', match: 65, demand: 'High', avgSalary: '₹24 LPA' },
      { role: 'Data Scientist', match: 81, demand: 'High', avgSalary: '₹16 LPA' },
      { role: 'NLP Engineer', match: 70, demand: 'High', avgSalary: '₹17.5 LPA' },
      { role: 'Computer Vision Specialist', match: 60, demand: 'Medium-High', avgSalary: '₹19 LPA' }
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
    title: 'Cloud & DevOps Engineering',
    tagline: 'Architect scalable cloud infrastructure, CI/CD pipelines, and Kubernetes clusters.',
    icon: 'Cloud',
    badge: 'High Demand ⚡',
    careerPathsCount: 8,
    skillsCount: 36,
    resourcesCount: 94,
    demandPercent: 88,
    avgSalary: '₹12.0 - ₹28.0 LPA',
    overview: 'DevOps & Site Reliability Engineering form the backbone of modern software reliability, continuous delivery, and resilient distributed architecture on AWS, Azure, and GCP.',
    requiredSkills: [
      { name: 'Linux System Administration', level: 'Advanced', weight: '20%' },
      { name: 'Docker & Containerization', level: 'Advanced', weight: '25%' },
      { name: 'Kubernetes Orchestration', level: 'Intermediate', weight: '20%' },
      { name: 'CI/CD Pipelines (GitHub Actions/GitLab)', level: 'Advanced', weight: '20%' },
      { name: 'Infrastructure as Code (Terraform)', level: 'Intermediate', weight: '15%' }
    ],
    careerRoles: [
      { role: 'DevOps Engineer', match: 78, demand: 'Very High', avgSalary: '₹16 LPA' },
      { role: 'Cloud Solutions Architect', match: 64, demand: 'High', avgSalary: '₹22 LPA' },
      { role: 'Site Reliability Engineer (SRE)', match: 70, demand: 'High', avgSalary: '₹19 LPA' }
    ],
    courses: [
      { title: 'AWS Certified Solutions Architect', provider: 'Cloud Academy', rating: 4.8, students: '290k', duration: '8 weeks' },
      { title: 'Kubernetes for Production Microservices', provider: 'Linux Foundation', rating: 4.9, students: '110k', duration: '5 weeks' }
    ],
    projects: [
      { title: 'Automated Multi-Region Kubernetes GitOps Cluster', difficulty: 'Advanced', duration: '4 weeks', tags: ['Terraform', 'ArgoCD', 'K8s'] }
    ]
  },
  {
    id: 'full-stack-web',
    title: 'Full-Stack Modern Web',
    tagline: 'Build ultra-responsive web applications using React, Node.js, and Cloud native backends.',
    icon: 'Layout',
    badge: 'Popular 🚀',
    careerPathsCount: 10,
    skillsCount: 42,
    resourcesCount: 160,
    demandPercent: 94,
    avgSalary: '₹9.0 - ₹24.0 LPA',
    overview: 'Full-stack engineering empowers you to deliver user-facing experiences with seamless backend integrations, microservices, and reactive data layers.',
    requiredSkills: [
      { name: 'React.js & Modern TypeScript', level: 'Advanced', weight: '30%' },
      { name: 'Node.js & Express / NestJS', level: 'Advanced', weight: '25%' },
      { name: 'PostgreSQL & ORMs (Prisma)', level: 'Intermediate', weight: '20%' },
      { name: 'REST APIs & GraphQL', level: 'Advanced', weight: '15%' },
      { name: 'Testing (Jest / Cypress)', level: 'Intermediate', weight: '10%' }
    ],
    careerRoles: [
      { role: 'Full-Stack Software Engineer', match: 91, demand: 'Very High', avgSalary: '₹15 LPA' },
      { role: 'Frontend Architect', match: 89, demand: 'High', avgSalary: '₹16 LPA' },
      { role: 'Backend API Developer', match: 85, demand: 'High', avgSalary: '₹14 LPA' }
    ],
    courses: [
      { title: 'Full Stack React & Node Masterclass', provider: 'KaushalEra Pro', rating: 4.9, students: '320k', duration: '10 weeks' }
    ],
    projects: [
      { title: 'Real-Time Collaboration Workspace with WebSockets', difficulty: 'Intermediate', duration: '3 weeks', tags: ['React', 'Node.js', 'Socket.io', 'Redis'] }
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
    demandPercent: 86,
    avgSalary: '₹11.0 - ₹26.0 LPA',
    overview: 'Safeguard organizations against modern zero-day attacks, ransomware, and cloud infrastructure threats through penetration testing and cryptography.',
    requiredSkills: [
      { name: 'Network Security & Protocols', level: 'Advanced', weight: '25%' },
      { name: 'Penetration Testing & Burp Suite', level: 'Advanced', weight: '30%' },
      { name: 'Cryptography & Identity Management', level: 'Intermediate', weight: '25%' },
      { name: 'Incident Response & Forensics', level: 'Intermediate', weight: '20%' }
    ],
    careerRoles: [
      { role: 'Security Analyst', match: 62, demand: 'High', avgSalary: '₹14 LPA' },
      { role: 'Ethical Hacker / Pentester', match: 58, demand: 'High', avgSalary: '₹18 LPA' }
    ],
    courses: [
      { title: 'CompTIA Security+ Certification Path', provider: 'CyberSec Institute', rating: 4.7, students: '85k', duration: '6 weeks' }
    ],
    projects: [
      { title: 'Automated Vulnerability Scanner & Report Generator', difficulty: 'Advanced', duration: '3 weeks', tags: ['Python', 'Nmap', 'Security'] }
    ]
  }
];
