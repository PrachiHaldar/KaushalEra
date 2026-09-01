// ==========================================================================
// KAUSHALSETU JOBS & INTERNSHIPS DATA STORE
// ==========================================================================

export const MOCK_INTERNSHIPS = [
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
    matchingSkills: ['Python', 'SQL', 'Git'],
    gapSkills: ['PyTorch', 'MLOps'],
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
    matchingSkills: ['React', 'Node.js', 'PostgreSQL'],
    gapSkills: ['Docker'],
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
    matchingSkills: ['Python', 'Linux'],
    gapSkills: ['Docker', 'AWS'],
    description: 'Help automate multi-region staging environments and configure alerting thresholds on Prometheus.',
    openings: 2,
    applicants: 89,
    status: 'Open'
  },
  {
    id: 'intern-4',
    title: 'Data Analytics & BI Intern',
    company: 'FinMetrics Solutions',
    logo: 'FM',
    location: 'Mumbai / Remote',
    type: 'Internship',
    stipend: '₹20,000 / month',
    duration: '4 Months',
    deadline: '30 Sep 2026',
    skillMatch: 88,
    skills: ['SQL', 'Python', 'PowerBI', 'Statistics'],
    matchingSkills: ['SQL', 'Python', 'Statistics'],
    gapSkills: ['PowerBI'],
    description: 'Extract customer telemetry data, write optimized SQL aggregations, and present weekly executive KPI decks.',
    openings: 4,
    applicants: 165,
    status: 'Open'
  }
];

export const MOCK_JOBS = [
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
    matchingSkills: [
      { name: 'Python', verified: true, note: 'Level 90% (Industry Req: 85%)' },
      { name: 'SQL', verified: true, note: 'Level 70% (Industry Req: 75%)' },
      { name: 'Git & Version Control', verified: true, note: 'Level 92% (Industry Req: 80%)' },
      { name: 'REST APIs', verified: true, note: 'Level 85% (Industry Req: 80%)' }
    ],
    skillsToImprove: [
      { name: 'System Design', current: 65, required: 85, recommendation: 'Complete Distributed Caching Module' },
      { name: 'Docker & Containers', current: 50, required: 80, recommendation: 'Finish Docker Multi-stage Containers' }
    ],
    description: 'We are seeking a high-caliber junior engineer to architect distributed REST and gRPC microservices serving over 2 million daily requests.',
    responsibilities: [
      'Implement performant API endpoints with automated unit and integration tests',
      'Optimize database queries and indexes on PostgreSQL',
      'Collaborate with product and frontend engineering in rapid 2-week agile sprints'
    ],
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
    matchingSkills: [
      { name: 'Python', verified: true, note: 'Level 90% (Industry Req: 85%)' },
      { name: 'SQL', verified: true, note: 'Level 70% (Industry Req: 70%)' }
    ],
    skillsToImprove: [
      { name: 'Machine Learning', current: 40, required: 85, recommendation: 'Take ML Assessment to verify capabilities' },
      { name: 'MLOps', current: 30, required: 75, recommendation: 'Learn MLflow & model registry deployment' }
    ],
    description: 'Build, train, evaluate, and deploy scalable ML models for tabular and conversational text applications.',
    responsibilities: [
      'Build feature engineering pipelines in Python and Pandas',
      'Train supervised classification and regression models',
      'Integrate model endpoints with FastAPI services'
    ],
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
    matchingSkills: [
      { name: 'React.js', verified: true, note: 'Level 88% (Industry Req: 80%)' },
      { name: 'JavaScript / TypeScript', verified: true, note: 'Level 90% (Industry Req: 80%)' },
      { name: 'CSS & UI Styling', verified: true, note: 'Level 92% (Industry Req: 75%)' }
    ],
    skillsToImprove: [
      { name: 'Redux Toolkit & State', current: 65, required: 80, recommendation: 'Review Redux RTK Query pattern' }
    ],
    description: 'Create lightning-fast, accessible web dashboards with modern component architectures and micro-animations.',
    responsibilities: [
      'Develop pixel-perfect interfaces matching Figma design specifications',
      'Ensure WCAG 2.1 AA accessibility and cross-browser responsiveness',
      'Optimize Web Vitals performance benchmarks'
    ],
    postedDate: '3 days ago',
    applicants: 240,
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
      { date: '25 Aug 2026', event: 'Completed Technical Round 1 (Score: 88%)' },
      { date: '02 Sep 2026', event: 'Final Round Scheduled' }
    ]
  },
  {
    id: 'app-4',
    company: 'ABC Technologies',
    role: 'Junior Software Engineer',
    stage: 'SELECTED',
    appliedDate: '10 Aug 2026',
    statusNote: 'Offer letter released! Acceptance deadline 15 Sep',
    badgeColor: 'badge-success',
    salaryOrStipend: '₹14.0 LPA',
    timeline: [
      { date: '10 Aug 2026', event: 'Application Submitted' },
      { date: '14 Aug 2026', event: 'Completed Coding Assessment' },
      { date: '20 Aug 2026', event: 'Completed System & Behavioral Interviews' },
      { date: '28 Aug 2026', event: 'Formal Offer Issued (₹14.0 LPA)' }
    ]
  }
];
