// ==========================================================================
// KAUSHALERA INDUSTRY RECRUITER & CANDIDATE MATCHING DATA STORE
// ==========================================================================

export const MOCK_CANDIDATES = [
  {
    id: 'cand-1',
    name: 'Alex Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    title: 'Computer Science Student • Aspiring AI Engineer',
    university: 'ABC Institute of Technology',
    batch: 'Class of 2027',
    gpa: '8.9 / 10',
    skillMatch: 92,
    assessmentScore: 88,
    status: 'Available',
    verification: 'Assessment & Institution Verified',
    skills: [
      { name: 'Python', matched: true, level: 'Advanced (90%)' },
      { name: 'SQL', matched: true, level: 'Intermediate (70%)' },
      { name: 'ML Fundamentals', matched: true, level: 'Intermediate (65%)' },
      { name: 'MLOps', matched: false, level: 'Learning (35%)' },
      { name: 'Cloud / AWS', matched: false, level: 'Learning (50%)' }
    ],
    educationVerified: true,
    projectsCount: 4,
    topProject: 'LLM Multi-Agent Question Answering Engine (GitHub Verified)',
    experience: 'Previous Web Dev Intern at StartUpSphere (3 mos)',
    recommendedFor: ['AI/ML Intern', 'Junior Python Backend Engineer']
  },
  {
    id: 'cand-2',
    name: 'Priya Patel',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    title: 'Data Science Undergraduate • Cloud Practitioner',
    university: 'National Technical University',
    batch: 'Class of 2026',
    gpa: '9.2 / 10',
    skillMatch: 95,
    assessmentScore: 94,
    status: 'Shortlisted',
    verification: 'Industry & Assessment Verified',
    skills: [
      { name: 'Python', matched: true, level: 'Advanced (94%)' },
      { name: 'SQL', matched: true, level: 'Advanced (88%)' },
      { name: 'Machine Learning', matched: true, level: 'Advanced (85%)' },
      { name: 'PyTorch', matched: true, level: 'Intermediate (75%)' },
      { name: 'AWS Cloud', matched: true, level: 'Intermediate (70%)' }
    ],
    educationVerified: true,
    projectsCount: 6,
    topProject: 'Automated Predictive Churn Modeling with XGBoost & Streamlit',
    experience: 'Research Assistant at DataLab NTU (6 mos)',
    recommendedFor: ['Associate Machine Learning Engineer', 'Data Scientist']
  },
  {
    id: 'cand-3',
    name: 'Rohan Deshmukh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    title: 'Software Systems Major • Backend & Distributed Systems',
    university: 'State Institute of Engineering',
    batch: 'Class of 2027',
    gpa: '8.4 / 10',
    skillMatch: 86,
    assessmentScore: 82,
    status: 'Available',
    verification: 'Assessment Verified',
    skills: [
      { name: 'Python', matched: true, level: 'Advanced (88%)' },
      { name: 'SQL', matched: true, level: 'Advanced (82%)' },
      { name: 'Docker', matched: true, level: 'Intermediate (72%)' },
      { name: 'FastAPI', matched: true, level: 'Advanced (85%)' },
      { name: 'System Design', matched: false, level: 'Learning (60%)' }
    ],
    educationVerified: true,
    projectsCount: 3,
    topProject: 'High-Throughput Distributed Rate Limiter in Go and Redis',
    experience: 'Open-Source Contributor to CNCF toolchain',
    recommendedFor: ['Backend Developer Intern', 'Junior Software Engineer']
  }
];

export const MOCK_RECRUITER_METRICS = {
  activeJobs: 12,
  applications: 428,
  shortlisted: 76,
  interviews: 32,
  offers: 14,
  funnelData: [
    { stage: 'Total Applied', count: 428, color: '#6366F1' },
    { stage: 'Skill Match > 80%', count: 184, color: '#06B6D4' },
    { stage: 'Assessment Passed', count: 76, color: '#3B82F6' },
    { stage: 'Technical Interviews', count: 32, color: '#F59E0B' },
    { stage: 'Offers Accepted', count: 14, color: '#10B981' }
  ]
};
