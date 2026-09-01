// ==========================================================================
// KAUSHALSETU SKILLS DATA STORE
// ==========================================================================

export const SKILL_CATEGORIES = {
  TECHNICAL: 'Technical',
  AI_ML: 'AI & Machine Learning',
  CLOUD_DEVOPS: 'Cloud & DevOps',
  DATA: 'Data Engineering & Analytics',
  SOFT_SKILLS: 'Soft Skills & Leadership',
  PROBLEM_SOLVING: 'Problem Solving & CS'
};

export const MOCK_RADAR_SKILLS = [
  { 
    name: 'Programming', 
    category: 'Technical', 
    yourLevel: 90, 
    industryLevel: 85, 
    matchPercent: 94,
    levelName: 'Advanced',
    industryLevelName: 'Advanced',
    icon: 'Code2',
    color: '#6366F1',
    description: 'Proficiency in writing scalable, modular code in modern languages like Python and TypeScript.',
    topCourses: ['Advanced Python Architecture', 'Clean Code Principles']
  },
  { 
    name: 'Database', 
    category: 'Data', 
    yourLevel: 70, 
    industryLevel: 85, 
    matchPercent: 82,
    levelName: 'Intermediate',
    industryLevelName: 'Advanced',
    icon: 'Database',
    color: '#06B6D4',
    description: 'Relational data modeling, SQL optimization, and NoSQL document storage systems.',
    topCourses: ['PostgreSQL Indexing & Optimization', 'Database Internals']
  },
  { 
    name: 'Cloud', 
    category: 'Cloud & DevOps', 
    yourLevel: 55, 
    industryLevel: 80, 
    matchPercent: 68,
    levelName: 'Intermediate',
    industryLevelName: 'Advanced',
    icon: 'Cloud',
    color: '#3B82F6',
    description: 'Deploying, managing, and scaling serverless and containerized microservices in cloud environments.',
    topCourses: ['AWS Certified Solutions Architect Path', 'Docker & Kubernetes Mastery']
  },
  { 
    name: 'AI/ML', 
    category: 'AI & Machine Learning', 
    yourLevel: 45, 
    industryLevel: 85, 
    matchPercent: 53,
    levelName: 'Beginner',
    industryLevelName: 'Advanced',
    icon: 'BrainCircuit',
    color: '#A855F7',
    description: 'Supervised/unsupervised models, deep neural networks, transformer pipelines, and model evaluation.',
    topCourses: ['Machine Learning Fundamentals by Stanford', 'PyTorch for Deep Learning']
  },
  { 
    name: 'Communication', 
    category: 'Soft Skills & Leadership', 
    yourLevel: 85, 
    industryLevel: 75, 
    matchPercent: 96,
    levelName: 'Advanced',
    industryLevelName: 'Proficient',
    icon: 'MessageSquare',
    color: '#10B981',
    description: 'Technical writing, cross-functional stakeholder collaboration, and executive presentations.',
    topCourses: ['Executive Engineering Communication', 'Effective Technical Writing']
  },
  { 
    name: 'Problem Solving', 
    category: 'Problem Solving & CS', 
    yourLevel: 88, 
    industryLevel: 80, 
    matchPercent: 92,
    levelName: 'Advanced',
    industryLevelName: 'Advanced',
    icon: 'Lightbulb',
    color: '#F59E0B',
    description: 'Algorithmic efficiency, time-space complexity trade-offs, and dynamic programming.',
    topCourses: ['Advanced Algorithms & Data Structures', 'System Design Primer']
  },
  { 
    name: 'Leadership', 
    category: 'Soft Skills & Leadership', 
    yourLevel: 72, 
    industryLevel: 70, 
    matchPercent: 88,
    levelName: 'Proficient',
    industryLevelName: 'Proficient',
    icon: 'Users',
    color: '#EC4899',
    description: 'Peer mentorship, agile sprint facilitation, conflict resolution, and technical initiative delivery.',
    topCourses: ['Agile Project Leadership', 'Peer Engineering Mentorship']
  }
];

export const MOCK_SKILL_GAPS = [
  {
    id: 'python',
    skill: 'Python',
    category: 'Programming',
    yourLevel: 90,
    industryNeed: 90,
    gap: 0,
    status: 'optimal',
    verified: true,
    verificationType: 'assessment',
    verificationNote: 'Verified by Python Advanced Assessment on 14 Aug 2026',
    recommendation: 'Skill matched with top 5% of candidate pool.'
  },
  {
    id: 'sql',
    skill: 'SQL & Data Modeling',
    category: 'Database',
    yourLevel: 70,
    industryNeed: 85,
    gap: 15,
    status: 'moderate',
    verified: true,
    verificationType: 'institution',
    verificationNote: 'Verified by ABC University CS Dept on 12 June 2026',
    recommendation: 'Complete SQL Performance Tuning to close the 15% gap for 14 Backend roles.'
  },
  {
    id: 'ml',
    skill: 'Machine Learning & PyTorch',
    category: 'AI/ML',
    yourLevel: 40,
    industryNeed: 85,
    gap: 45,
    status: 'critical',
    verified: false,
    recommendation: 'Fix this critical gap to unlock 23 additional AI/Data Science opportunities.'
  },
  {
    id: 'docker',
    skill: 'Docker & Containerization',
    category: 'Cloud & DevOps',
    yourLevel: 50,
    industryNeed: 80,
    gap: 30,
    status: 'high',
    verified: false,
    recommendation: 'Learn Docker multi-stage builds and Docker Compose pipelines.'
  },
  {
    id: 'system-design',
    skill: 'System Design & REST APIs',
    category: 'Architecture',
    yourLevel: 65,
    industryNeed: 85,
    gap: 20,
    status: 'moderate',
    verified: true,
    verificationType: 'certificate',
    verificationNote: 'Verified by Meta Backend Specialization Certificate',
    recommendation: 'Focus on distributed caching and horizontal database partitioning.'
  }
];

export const ALL_SKILLS_DIRECTORY = [
  { id: 'python', name: 'Python', category: 'Programming', level: 'Advanced', score: 90, verified: true, verifiedBy: 'Assessment Verified', demand: 'Very High', icon: 'Code2', jobsCount: 48, internshipsCount: 26 },
  { id: 'ml', name: 'Machine Learning', category: 'AI/ML', level: 'Beginner', score: 40, verified: false, demand: 'Extremely High', icon: 'BrainCircuit', jobsCount: 38, internshipsCount: 22 },
  { id: 'sql', name: 'SQL & Database Design', category: 'Database', level: 'Intermediate', score: 70, verified: true, verifiedBy: 'Institution Verified', demand: 'High', icon: 'Database', jobsCount: 42, internshipsCount: 19 },
  { id: 'react', name: 'React.js & Frontend', category: 'Frontend', level: 'Advanced', score: 88, verified: true, verifiedBy: 'Industry Verified', demand: 'High', icon: 'Layout', jobsCount: 52, internshipsCount: 31 },
  { id: 'docker', name: 'Docker & Containers', category: 'DevOps', level: 'Intermediate', score: 50, verified: false, demand: 'Very High', icon: 'Box', jobsCount: 35, internshipsCount: 15 },
  { id: 'algorithms', name: 'Algorithms & DSA', category: 'Core CS', level: 'Advanced', score: 85, verified: true, verifiedBy: 'Assessment Verified', demand: 'Critical', icon: 'Cpu', jobsCount: 60, internshipsCount: 35 },
  { id: 'cloud-aws', name: 'AWS Cloud Services', category: 'Cloud', level: 'Intermediate', score: 55, verified: false, demand: 'High', icon: 'Cloud', jobsCount: 29, internshipsCount: 12 },
  { id: 'git', name: 'Git & Version Control', category: 'Dev Tools', level: 'Advanced', score: 92, verified: true, verifiedBy: 'Certificate Verified', demand: 'Standard', icon: 'GitBranch', jobsCount: 70, internshipsCount: 40 },
  { id: 'communication', name: 'Technical Communication', category: 'Soft Skills', level: 'Advanced', score: 85, verified: true, verifiedBy: 'Institution Verified', demand: 'High', icon: 'MessageSquare', jobsCount: 65, internshipsCount: 38 }
];
