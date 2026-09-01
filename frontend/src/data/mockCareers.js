// ==========================================================================
// KAUSHALERA CAREER EXPLORER & COMPARISON DATA STORE
// ==========================================================================

export const MOCK_CAREERS = [
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    domain: 'Artificial Intelligence',
    icon: 'BrainCircuit',
    demand: 'Very High',
    demandPercent: 92,
    matchPercent: 72,
    avgSalary: '₹14.0 - ₹28.0 LPA',
    description: 'Design, develop, and deploy production ML models, training pipelines, and real-time inference services.',
    requiredSkills: ['Python', 'Machine Learning', 'Deep Learning', 'PyTorch', 'MLOps', 'SQL'],
    skillsComparison: {
      'Python': { required: true, score: 90, benchmark: 90, status: 'match' },
      'Statistics & Math': { required: true, score: 85, benchmark: 80, status: 'match' },
      'Deep Learning': { required: true, score: 45, benchmark: 80, status: 'gap' },
      'MLOps': { required: true, score: 35, benchmark: 75, status: 'gap' },
      'SQL': { required: true, score: 70, benchmark: 75, status: 'match' }
    },
    growthTrajectory: '+34% YoY hiring increase across enterprise AI adoption',
    relatedJobs: 38,
    relatedInternships: 16
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    domain: 'Data & Analytics',
    icon: 'LineChart',
    demand: 'High',
    demandPercent: 86,
    matchPercent: 81,
    avgSalary: '₹12.0 - ₹24.0 LPA',
    description: 'Analyze complex datasets, formulate statistical experiments, and build predictive algorithms for strategic business insights.',
    requiredSkills: ['Python', 'Statistics', 'SQL', 'Data Visualization', 'Machine Learning'],
    skillsComparison: {
      'Python': { required: true, score: 90, benchmark: 85, status: 'match' },
      'Statistics & Math': { required: true, score: 85, benchmark: 85, status: 'match' },
      'Deep Learning': { required: false, score: 45, benchmark: 60, status: 'optional' },
      'MLOps': { required: false, score: 35, benchmark: 50, status: 'optional' },
      'SQL': { required: true, score: 70, benchmark: 85, status: 'minor_gap' }
    },
    growthTrajectory: '+28% steady expansion in financial, healthcare, and retail intelligence',
    relatedJobs: 45,
    relatedInternships: 22
  },
  {
    id: 'full-stack-engineer',
    title: 'Full-Stack Software Engineer',
    domain: 'Software Engineering',
    icon: 'Layers',
    demand: 'Very High',
    demandPercent: 95,
    matchPercent: 91,
    avgSalary: '₹10.0 - ₹22.0 LPA',
    description: 'Engineer responsive web frontends, backend REST/GraphQL microservices, and persistent cloud databases.',
    requiredSkills: ['React.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'System Design', 'Git'],
    skillsComparison: {
      'Python': { required: false, score: 90, benchmark: 70, status: 'match' },
      'Statistics & Math': { required: false, score: 85, benchmark: 60, status: 'match' },
      'Deep Learning': { required: false, score: 45, benchmark: 0, status: 'not_needed' },
      'MLOps': { required: false, score: 35, benchmark: 0, status: 'not_needed' },
      'SQL': { required: true, score: 70, benchmark: 80, status: 'match' }
    },
    growthTrajectory: 'Consistently the #1 largest volume hiring category globally',
    relatedJobs: 82,
    relatedInternships: 45
  },
  {
    id: 'cloud-devops-architect',
    title: 'Cloud & DevOps Architect',
    domain: 'Cloud Infrastructure',
    icon: 'Cloud',
    demand: 'High',
    demandPercent: 89,
    matchPercent: 68,
    avgSalary: '₹15.0 - ₹30.0 LPA',
    description: 'Architect resilient multi-region cloud infrastructure, container orchestration clusters, and secure CI/CD automations.',
    requiredSkills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux'],
    skillsComparison: {
      'Python': { required: true, score: 90, benchmark: 75, status: 'match' },
      'Statistics & Math': { required: false, score: 85, benchmark: 60, status: 'match' },
      'Deep Learning': { required: false, score: 45, benchmark: 0, status: 'not_needed' },
      'MLOps': { required: true, score: 35, benchmark: 70, status: 'gap' },
      'SQL': { required: false, score: 70, benchmark: 65, status: 'match' }
    },
    growthTrajectory: '+31% surge due to multi-cloud migration and microservice adoption',
    relatedJobs: 29,
    relatedInternships: 12
  }
];
