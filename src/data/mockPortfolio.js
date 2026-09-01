// ==========================================================================
// KAUSHALSETU DIGITAL PORTFOLIO & INTERNSHIP WORKSPACE DATA
// ==========================================================================

export const MOCK_STUDENT_PORTFOLIO = {
  name: 'Alex Sharma',
  headline: 'Computer Science Student • Aspiring AI & Backend Engineer',
  institution: 'Apex Institute of Technology & Engineering',
  batch: 'B.Tech CSE (2023 - 2027) • GPA: 8.9/10',
  location: 'Bengaluru, India',
  bio: 'Passionate computer science undergraduate with a strong foundation in Python, data structures, and database engineering. Keenly focused on developing real-world AI applications, RAG pipelines, and high-performance backend systems. Active open-source contributor and competitive programmer.',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    portfolio: 'https://alexsharma.dev',
    email: 'alex.sharma@apexuniv.edu'
  },
  stats: {
    careerReadiness: 78,
    verifiedSkillsCount: 6,
    assessmentsPassed: 4,
    projectsCompleted: 5,
    streakDays: 12
  },
  verifiedSkills: [
    { name: 'Python', level: 'Advanced (90%)', badge: 'Assessment Verified', note: 'Verified by Python Core & Advanced Assessment on 14 Aug 2026' },
    { name: 'SQL & Data Modeling', level: 'Intermediate (70%)', badge: 'Institution Verified', note: 'Verified by Apex Univ CS Department on 12 June 2026' },
    { name: 'React.js & UI', level: 'Advanced (88%)', badge: 'Industry Verified', note: 'Verified during StartUpSphere Summer Internship' },
    { name: 'Git & Version Control', level: 'Advanced (92%)', badge: 'Certificate Verified', note: 'Verified via Meta Version Control Specialization' },
    { name: 'Algorithms & DSA', level: 'Advanced (85%)', badge: 'Assessment Verified', note: 'Verified by Algorithmic Problem Solving Assessment' }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'AutoDoc-RAG: Domain LLM Document Assistant',
      description: 'An end-to-end Retrieval-Augmented Generation system allowing enterprise users to query dense technical PDFs with sub-second vector search and citation grounding.',
      technologies: ['Python', 'LangChain', 'FastAPI', 'ChromaDB', 'React'],
      github: 'https://github.com/example/autodoc-rag',
      demo: 'https://autodoc-rag.demo.app',
      verified: true,
      verificationNote: 'Industry Verified by TechNova Labs Mentor on 10 Aug 2026',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'proj-2',
      title: 'Distributed Transactional Rate Limiter',
      description: 'High-throughput sliding-window rate limiter built with Go, Redis, and Docker, capable of processing 45,000 requests/sec with minimal latency overhead.',
      technologies: ['Go', 'Redis', 'Docker', 'Prometheus', 'Grafana'],
      github: 'https://github.com/example/distributed-rate-limiter',
      demo: 'https://rate-limiter.demo.app',
      verified: true,
      verificationNote: 'Assessment Verified via Capstone Project Review',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'proj-3',
      title: 'CampusPlacements Analytics Dashboard',
      description: 'Interactive analytics portal for university placement officers with real-time student readiness tracking, cohort filtering, and PDF export.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Chart.js'],
      github: 'https://github.com/example/placement-analytics',
      demo: 'https://placements.demo.app',
      verified: true,
      verificationNote: 'Institution Verified by Apex Univ TPO Cell',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80'
    }
  ],
  experience: [
    {
      role: 'Full-Stack Web Engineering Intern',
      company: 'StartUpSphere Inc.',
      duration: 'May 2026 - July 2026 (3 Months)',
      location: 'Bengaluru / Remote',
      highlights: [
        'Engineered responsive React component library reducing frontend bundle size by 22%',
        'Integrated RESTful microservices with Node.js and PostgreSQL backend',
        'Authored comprehensive unit tests with Jest and Cypress achieving 88% code coverage'
      ],
      verified: true,
      verificationOrg: 'StartUpSphere Verification Seal'
    }
  ],
  certifications: [
    {
      title: 'Meta Backend Professional Certificate',
      issuer: 'Meta / Coursera',
      issueDate: 'July 2026',
      credentialId: 'META-BE-892410',
      badge: 'Certificate Verified'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      issueDate: 'May 2026',
      credentialId: 'AWS-CCP-44219',
      badge: 'Certificate Verified'
    }
  ]
};

export const MOCK_INTERNSHIP_WORKSPACE = {
  internshipId: 'ws-tech-nova',
  company: 'TechNova Labs',
  role: 'AI/ML Research Intern',
  mentor: {
    name: 'Dr. Sarah Jenkins',
    title: 'Lead AI Scientist & Mentor',
    email: 'sarah.jenkins@technovalabs.ai',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  duration: '8 Weeks',
  currentWeek: 6,
  totalWeeks: 8,
  progressPercentage: 78,
  startDate: '15 July 2026',
  endDate: '08 September 2026',
  weeklyMilestones: [
    { week: 1, title: 'Onboarding, Environment Setup & Repo Architecture', status: 'Completed', grade: 'Exemplary' },
    { week: 2, title: 'Data Cleaning & Preprocessing Feature Pipelines', status: 'Completed', grade: 'Exemplary' },
    { week: 3, title: 'Baseline Model Training & Loss Function Benchmarking', status: 'Completed', grade: 'Satisfactory' },
    { week: 4, title: 'Hyperparameter Tuning & Cross-Validation Runs', status: 'Completed', grade: 'Exemplary' },
    { week: 5, title: 'FastAPI Inference Containerization & Docker Setup', status: 'Completed', grade: 'Exemplary' },
    { week: 6, title: 'Multi-GPU Distributed Evaluation & Accuracy Profiling', status: 'In Progress', grade: 'Under Review' },
    { week: 7, title: 'End-to-End Documentation & Unit Test Suites', status: 'Upcoming', grade: 'Pending' },
    { week: 8, title: 'Final Executive Demo & University Report Submission', status: 'Upcoming', grade: 'Pending' }
  ],
  tasksList: [
    { id: 'task-1', title: 'Submit Week 6 Distributed Evaluation Run Logs', completed: false, dueDate: 'Tomorrow, 5:00 PM' },
    { id: 'task-2', title: 'Address PR #42 review comments on PyTorch dataloader', completed: true, dueDate: 'Completed' },
    { id: 'task-3', title: 'Schedule 1-on-1 Milestone sync with Dr. Sarah Jenkins', completed: true, dueDate: 'Completed' },
    { id: 'task-4', title: 'Draft University Mid-Term Internship Progress Summary', completed: false, dueDate: '05 Sep 2026' }
  ],
  mentorFeedback: [
    {
      date: '28 Aug 2026 (Week 5 Review)',
      comment: 'Alex demonstrated exceptional initiative in optimizing our Docker container footprint from 2.4GB down to 620MB using multi-stage builds. High technical acumen and very clear documentation.',
      rating: 5,
      mentorName: 'Dr. Sarah Jenkins'
    },
    {
      date: '14 Aug 2026 (Week 3 Review)',
      comment: 'Solid grasp of data preparation. Recommended exploring learning rate schedulers to avoid local minima in the fine-tuning run.',
      rating: 4.5,
      mentorName: 'Dr. Sarah Jenkins'
    }
  ]
};
