/**
 * Seed & In-Memory Data Store for KaushalEra Backend
 */

export const INITIAL_USERS = {
  student: {
    id: 'usr-student-1',
    email: 'student@demo.com',
    name: 'Alex Sharma',
    role: 'student',
    roleTitle: 'B.Tech Student (Class of 2027)',
    institution: 'Apex Institute of Technology',
    department: 'Computer Science & Engineering',
    degree: 'B.Tech Computer Science',
    graduationYear: '2027',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    targetCareer: 'AI / Machine Learning Engineer',
    careerReadiness: 78,
    streak: 12,
    xp: 2450,
    level: 6,
    onboardingComplete: true
  },
  faculty: {
    id: 'usr-faculty-1',
    email: 'faculty@demo.com',
    name: 'Dr. Ramesh Sharma',
    role: 'faculty',
    roleTitle: 'Professor & Head of AI Research Lab',
    institution: 'Apex Institute of Technology',
    department: 'Computer Science & Engineering',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    collaborationScore: 78,
    activeCollaborationsCount: 6,
    onboardingComplete: true
  },
  recruiter: {
    id: 'usr-recruiter-1',
    email: 'recruiter@demo.com',
    name: 'Marcus Vance',
    role: 'recruiter',
    roleTitle: 'Lead Talent Partner & Technical Recruiter',
    company: 'TechNova Labs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    activePostings: 12,
    totalApplicants: 428,
    onboardingComplete: true
  },
  institution_admin: {
    id: 'usr-institution-1',
    email: 'institution@demo.com',
    name: 'Dean K. Verma',
    role: 'institution_admin',
    roleTitle: 'Dean of Academics & Industry Partnerships',
    institution: 'Apex Institute of Technology & Engineering',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    totalStudents: 4250,
    placementRate: 87,
    onboardingComplete: true
  },
  admin: {
    id: 'usr-admin-1',
    email: 'admin@demo.com',
    name: 'Sarah Connor',
    role: 'admin',
    roleTitle: 'System Root Administrator',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    onboardingComplete: true
  }
};

export const INITIAL_INTERNSHIPS = [
  {
    id: 'intern-1',
    title: 'AI/ML Research Intern',
    company: 'TechNova Labs',
    logo: 'TN',
    location: 'Remote',
    type: 'Internship',
    stipend: '₹25,000 / month',
    duration: '6 Months',
    deadline: '12 Sep 2026',
    skillMatch: 92,
    skills: ['Python', 'Machine Learning', 'SQL', 'PyTorch'],
    description: 'Work alongside research scientists building domain-specific LLM evaluation harnesses and automated feature extraction pipelines.',
    openings: 3,
    applicants: 142,
    status: 'Open'
  },
  {
    id: 'intern-2',
    title: 'Full-Stack Developer Intern',
    company: 'Nexus Cloud Systems',
    logo: 'NC',
    location: 'Bengaluru / Hybrid',
    type: 'Internship',
    stipend: '₹30,000 / month',
    duration: '3 Months',
    deadline: '18 Sep 2026',
    skillMatch: 95,
    skills: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    description: 'Design interactive web components for enterprise cloud analytics monitoring dashboards.',
    openings: 5,
    applicants: 218,
    status: 'Open'
  },
  {
    id: 'intern-3',
    title: 'Cloud DevOps Intern',
    company: 'Aether Infrastructure',
    logo: 'AI',
    location: 'Hyderabad / On-site',
    type: 'Internship',
    stipend: '₹22,000 / month',
    duration: '6 Months',
    deadline: '24 Sep 2026',
    skillMatch: 76,
    skills: ['Docker', 'AWS', 'Linux', 'Python'],
    description: 'Help automate multi-region staging environments and configure alerting thresholds on Prometheus.',
    openings: 2,
    applicants: 89,
    status: 'Open'
  }
];

export const INITIAL_JOBS = [
  {
    id: 'job-1',
    title: 'Junior Software Engineer (Backend)',
    company: 'CognitiveScale Technologies',
    logo: 'CS',
    location: 'Bengaluru / Hybrid',
    salary: '₹12.0 - ₹16.5 LPA',
    type: 'Full-time',
    experience: '0-2 Years',
    skillMatch: 94,
    skills: ['Python', 'SQL', 'Git', 'REST APIs', 'System Design', 'Docker'],
    description: 'We are seeking a high-caliber junior engineer to architect distributed REST and gRPC microservices serving over 2 million daily requests.',
    postedDate: '2 days ago',
    applicants: 342,
    status: 'Active'
  },
  {
    id: 'job-2',
    title: 'Associate Machine Learning Engineer',
    company: 'DeepData Systems',
    logo: 'DD',
    location: 'Gurugram / Remote',
    salary: '₹14.0 - ₹18.0 LPA',
    type: 'Full-time',
    experience: '0-1 Years',
    skillMatch: 78,
    skills: ['Python', 'Machine Learning', 'PyTorch', 'MLOps', 'SQL'],
    description: 'Build, train, evaluate, and deploy scalable ML models for tabular and conversational text applications.',
    postedDate: '1 week ago',
    applicants: 198,
    status: 'Active'
  },
  {
    id: 'job-3',
    title: 'Frontend React Engineer',
    company: 'PixelCraft Digital',
    logo: 'PC',
    location: 'Pune / Remote',
    salary: '₹10.0 - ₹15.0 LPA',
    type: 'Full-time',
    experience: 'Fresher / 0-2 Years',
    skillMatch: 96,
    skills: ['React.js', 'JavaScript', 'CSS Modules', 'TypeScript', 'Redux'],
    description: 'Create lightning-fast, accessible web dashboards with modern component architectures and micro-animations.',
    postedDate: '3 days ago',
    applicants: 240,
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
  },
  {
    id: 'app-2',
    company: 'TechNova Labs',
    role: 'AI/ML Intern',
    stage: 'SHORTLISTED',
    appliedDate: '24 Aug 2026',
    statusNote: 'Coding assessment scheduled for 05 Sep',
    badgeColor: 'badge-teal',
    salaryOrStipend: '₹25,000/mo',
    timeline: [
      { date: '24 Aug 2026', event: 'Application Submitted' },
      { date: '27 Aug 2026', event: 'Resume & Skill Profile Verified' },
      { date: '31 Aug 2026', event: 'Selected for Online Technical Round' }
    ]
  },
  {
    id: 'app-3',
    company: 'DataCorp Analytics',
    role: 'Associate Data Analyst',
    stage: 'INTERVIEW',
    appliedDate: '15 Aug 2026',
    statusNote: 'Technical Round 2 with Lead Architect',
    badgeColor: 'badge-warning',
    salaryOrStipend: '₹11.5 LPA',
    timeline: [
      { date: '15 Aug 2026', event: 'Application Submitted' },
      { date: '19 Aug 2026', event: 'Passed Skill Match Screen (92%)' },
      { date: '25 Aug 2026', event: 'Completed Technical Round 1 (Score: 88%)' }
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
  },
  {
    id: 'cand-2',
    name: 'Priya Sundaram',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    title: 'Information Science • Cloud Architect Aspirant',
    university: 'National College of Engineering',
    batch: 'Class of 2026',
    gpa: '9.2 / 10',
    skillMatch: 96,
    assessmentScore: 94,
    status: 'Interviewing',
    verification: 'Gold Tier Verified',
    skills: [
      { name: 'Docker', matched: true, level: 'Advanced (92%)' },
      { name: 'Kubernetes', matched: true, level: 'Intermediate (78%)' },
      { name: 'AWS', matched: true, level: 'Advanced (88%)' }
    ],
    educationVerified: true,
    projectsCount: 6,
    topProject: 'Zero-Downtime Microservices CI/CD Pipeline on EKS',
    experience: 'Cloud DevOps Intern at InfraSys',
    recommendedFor: ['Cloud DevOps Engineer', 'Site Reliability Engineer']
  }
];

export const INITIAL_DOMAINS = [
  {
    id: 'artificial-intelligence-machine-learning',
    title: 'Artificial Intelligence & Machine Learning',
    tagline: 'Deep Learning, LLMs, Neural Networks, Computer Vision & MLOps',
    icon: 'BrainCircuit',
    badge: 'Trending 🔥',
    careerPathsCount: 8,
    skillsCount: 24,
    resourcesCount: 45,
    demandPercent: 96,
    avgSalary: '₹14.0 - ₹28.0 LPA',
    overview: 'Develop intelligent algorithmic systems, computer vision models, and natural language processing pipelines.'
  },
  {
    id: 'cloud-devops-platform-engineering',
    title: 'Cloud & DevOps Engineering',
    tagline: 'AWS, Azure, Docker, Kubernetes, CI/CD & Distributed Systems',
    icon: 'Cloud',
    badge: 'High Demand ⚡',
    careerPathsCount: 6,
    skillsCount: 20,
    resourcesCount: 38,
    demandPercent: 92,
    avgSalary: '₹12.0 - ₹24.0 LPA',
    overview: 'Design high-availability cloud infrastructures and automated multi-cloud delivery pipelines.'
  },
  {
    id: 'fullstack-web-development',
    title: 'Full-Stack Software Engineering',
    tagline: 'React, Node.js, Next.js, Distributed Databases & REST/GraphQL',
    icon: 'Code2',
    badge: 'Popular ⭐',
    careerPathsCount: 7,
    skillsCount: 22,
    resourcesCount: 52,
    demandPercent: 94,
    avgSalary: '₹10.0 - ₹22.0 LPA',
    overview: 'Build high-performance web applications and backend systems at massive scale.'
  }
];

export const INITIAL_SKILLS = [
  { id: 'python', name: 'Python', category: 'Core Programming', level: 'Advanced', score: 90, verified: true, demand: 'High', icon: 'Code2', jobsCount: 48, internshipsCount: 32 },
  { id: 'sql', name: 'SQL & Database Design', category: 'Data & Databases', level: 'Intermediate', score: 70, verified: true, demand: 'High', icon: 'Database', jobsCount: 54, internshipsCount: 26 },
  { id: 'react', name: 'React.js & Next.js', category: 'Frontend', level: 'Advanced', score: 88, verified: true, demand: 'High', icon: 'Layout', jobsCount: 42, internshipsCount: 28 },
  { id: 'docker', name: 'Docker & Containerization', category: 'DevOps & Cloud', level: 'Intermediate', score: 65, verified: true, demand: 'Very High', icon: 'Container', jobsCount: 36, internshipsCount: 18 },
  { id: 'ml', name: 'Machine Learning & PyTorch', category: 'AI & Data Science', level: 'Intermediate', score: 65, verified: false, demand: 'Trending', icon: 'BrainCircuit', jobsCount: 30, internshipsCount: 22 }
];

export const INITIAL_RESOURCES = [
  {
    id: 'res-1',
    type: 'Interactive Module',
    typeBadge: '💻 Interactive',
    title: 'FastAPI & Distributed Microservices Masterclass',
    skill: 'Python & Backend',
    difficulty: 'Intermediate',
    duration: '3.5 Hours',
    rating: 4.9,
    reviewsCount: 312,
    author: 'Dr. Ramesh Sharma',
    bookmarked: true,
    summary: 'Build production-ready asynchronous REST APIs with Pydantic validations, OpenAPI specs, and Redis caching layers.'
  },
  {
    id: 'res-2',
    type: 'Video Lecture',
    typeBadge: '🎥 Video Course',
    title: 'Neural Networks & PyTorch Fundamentals from Scratch',
    skill: 'Machine Learning',
    difficulty: 'Advanced',
    duration: '5.0 Hours',
    rating: 4.8,
    reviewsCount: 485,
    author: 'TechNova Research Lab',
    bookmarked: false,
    summary: 'Comprehensive hands-on implementation of backpropagation, tensor mechanics, and convolutional vision layers.'
  }
];

export const INITIAL_ASSESSMENTS = [
  {
    id: 'python-advanced',
    title: 'Python Advanced Architecture & Concurrency',
    category: 'Core Engineering',
    questionsCount: 10,
    durationMinutes: 15,
    rewardXP: 100,
    questions: [
      {
        id: 'q1',
        question: 'Which concurrency model does Python asyncio use?',
        options: ['Multi-threaded preemption', 'Single-threaded cooperative multitasking with event loop', 'Multi-process fork', 'Actor Model'],
        correctIndex: 1
      },
      {
        id: 'q2',
        question: 'What is the purpose of Python __slots__ declaration?',
        options: ['To define abstract methods', 'To optimize memory footprint by preventing dynamic __dict__ creation', 'To enforce private variables', 'To register decorators'],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'sql-db-optimization',
    title: 'SQL Query Optimization & Indexing',
    category: 'Databases',
    questionsCount: 8,
    durationMinutes: 12,
    rewardXP: 80,
    questions: [
      {
        id: 'q1',
        question: 'When is a B-tree index most effective in a relational database?',
        options: ['Full text semantic searching', 'Exact match and range queries on sorted keys', 'Unordered blob storage', 'Dynamic JSON unstructured keys'],
        correctIndex: 1
      }
    ]
  }
];
