// ==========================================================================
// KAUSHALSETU INSTITUTION & FACULTY ANALYTICS DATA STORE
// ==========================================================================

export const MOCK_INSTITUTION_METRICS = {
  institutionName: 'Apex Institute of Technology & Engineering',
  totalStudents: 4250,
  industryPartners: 86,
  activeInternships: 720,
  placementsThisSeason: 1120,
  placementRate: 87,
  avgPackage: '₹11.8 LPA',
  highestPackage: '₹44.0 LPA',
  departments: [
    {
      id: 'cs',
      name: 'Computer Science & Engineering',
      students: 1240,
      placementRate: 94,
      internshipsCount: 380,
      avgSkillScore: 84,
      criticalGaps: ['MLOps (42%)', 'Kubernetes Production (38%)', 'Cloud Architecture (34%)'],
      topRecruiters: ['Google', 'Microsoft', 'TechNova', 'Amazon', 'CognitiveScale']
    },
    {
      id: 'it',
      name: 'Information Technology',
      students: 920,
      placementRate: 89,
      internshipsCount: 210,
      avgSkillScore: 81,
      criticalGaps: ['Distributed Systems (40%)', 'System Security (36%)'],
      topRecruiters: ['CognitiveScale', 'PixelCraft', 'TCS', 'Infosys', 'Nexus Cloud']
    },
    {
      id: 'ai-ds',
      name: 'Artificial Intelligence & Data Science',
      students: 650,
      placementRate: 91,
      internshipsCount: 195,
      avgSkillScore: 86,
      criticalGaps: ['Deep Learning Production (45%)', 'Vector Databases (40%)'],
      topRecruiters: ['TechNova Labs', 'DeepData', 'FinMetrics', 'Deloitte']
    },
    {
      id: 'ece',
      name: 'Electronics & Communication',
      students: 840,
      placementRate: 78,
      internshipsCount: 140,
      avgSkillScore: 74,
      criticalGaps: ['Embedded IoT Firmware (50%)', 'C++ System Architecture (44%)'],
      topRecruiters: ['Qualcomm', 'Texas Instruments', 'Intel', 'Aether']
    }
  ],
  topSkillGapsOverall: [
    { skill: 'Machine Learning & PyTorch', unreadyPercentage: 46, affectedStudents: 850 },
    { skill: 'Docker & Kubernetes', unreadyPercentage: 42, affectedStudents: 780 },
    { skill: 'Cloud Solutions (AWS/GCP)', unreadyPercentage: 38, affectedStudents: 710 },
    { skill: 'System Design & Distributed Data', unreadyPercentage: 32, affectedStudents: 590 }
  ]
};

export const MOCK_FACULTY_DATA = {
  name: 'Dr. Ramesh Sharma',
  department: 'Computer Science & Engineering',
  designation: 'Professor & Head of AI Research Lab',
  collaborationScore: 78,
  activeCollaborationsCount: 6,
  fdpCount: 12,
  researchCount: 8,
  consultancyCount: 5,
  activeCollaborations: [
    {
      id: 'collab-1',
      title: 'Joint AI Diagnostics Research Lab with HealthAI Corp',
      partner: 'HealthAI Corp',
      grantValue: '₹45 Lakhs',
      status: 'In Progress',
      timeline: '2025 - 2027',
      studentsInvolved: 8
    },
    {
      id: 'collab-2',
      title: 'Autonomous Navigation Edge Compute Benchmark',
      partner: 'RoboTech Mobility',
      grantValue: '₹32 Lakhs',
      status: 'Active',
      timeline: '2026 - 2027',
      studentsInvolved: 5
    }
  ],
  recommendedFDP: [
    {
      id: 'fdp-1',
      title: 'Faculty Enablement: Generative AI & Large Language Model Architecture',
      sponsor: 'AICTE & NVIDIA Academy',
      duration: '5 Days (Online)',
      matchReason: 'Direct alignment with your NLP and transformer architecture research papers.'
    },
    {
      id: 'fdp-2',
      title: 'Industrial Cloud Infrastructure & Microservices for Educators',
      sponsor: 'AWS Higher Ed Program',
      duration: '3 Days (Hybrid)',
      matchReason: 'Strengthens hands-on lab curriculum for 650 CSE undergraduates.'
    }
  ],
  consultancyOpportunities: [
    {
      company: 'FinMetrics Solutions',
      role: 'Subject Matter Expert: Predictive Fraud Modeling',
      remuneration: '₹1.5 Lakhs / month',
      matchScore: 94
    },
    {
      company: 'Aether Infrastructure',
      role: 'Distributed Systems Architecture Reviewer',
      remuneration: '₹2.0 Lakhs / month',
      matchScore: 89
    }
  ]
};
