// ==========================================================================
// KAUSHALSETU DIGITAL RESOURCE LIBRARY DATA STORE
// ==========================================================================

export const MOCK_RESOURCES = [
  {
    id: 'res-1',
    type: 'PDF',
    typeBadge: '📕 PDF',
    title: 'Python Technical Interview Master Guide',
    skill: 'Python',
    difficulty: 'Intermediate',
    duration: '45 min',
    rating: 4.8,
    reviewsCount: 1420,
    author: 'KaushalSetu Editorial & FAANG Engineers',
    bookmarked: true,
    completed: false,
    url: '#',
    summary: 'A curated breakdown of top 100 Python data structure questions, time complexity gotchas, and memory profiling tips.',
    tags: ['Python', 'Interview', 'OOP', 'Data Structures']
  },
  {
    id: 'res-2',
    type: 'Cheatsheet',
    typeBadge: '📑 Cheatsheet',
    title: 'Machine Learning Algorithms & Math Quick Reference',
    skill: 'Machine Learning',
    difficulty: 'Beginner to Intermediate',
    duration: '20 min',
    rating: 4.9,
    reviewsCount: 2310,
    author: 'Stanford AI Lab Alum',
    bookmarked: false,
    completed: true,
    url: '#',
    summary: 'Single-page visual summary of Loss functions, Optimization algorithms (Adam, SGD), and Regularization techniques.',
    tags: ['AI/ML', 'Math', 'Calculus', 'PyTorch']
  },
  {
    id: 'res-3',
    type: 'Video',
    typeBadge: '🎥 Video Course',
    title: 'PostgreSQL Indexing, EXPLAIN ANALYZE & Query Tuning',
    skill: 'SQL & Database',
    difficulty: 'Advanced',
    duration: '1 hr 15 min',
    rating: 4.7,
    reviewsCount: 890,
    author: 'Database Internals Group',
    bookmarked: false,
    completed: false,
    url: '#',
    summary: 'Learn B-Tree internals, GIN indexes for JSONB, partial indexes, and how to eliminate sequential table scans.',
    tags: ['Database', 'SQL', 'PostgreSQL', 'Performance']
  },
  {
    id: 'res-4',
    type: 'Lab',
    typeBadge: '🧪 Interactive Lab',
    title: 'Docker & Multi-Stage Production Containerization',
    skill: 'DevOps & Docker',
    difficulty: 'Intermediate',
    duration: '50 min',
    rating: 4.9,
    reviewsCount: 1650,
    author: 'CloudOps Foundation',
    bookmarked: true,
    completed: false,
    url: '#',
    summary: 'Hands-on browser terminal lab creating Alpine-based Node.js and Python microservice images with zero security vulnerabilities.',
    tags: ['Docker', 'DevOps', 'Containers', 'Security']
  },
  {
    id: 'res-5',
    type: 'Interactive Guide',
    typeBadge: '🧭 Interactive Guide',
    title: 'System Design for Junior & Mid-level Engineers',
    skill: 'System Design',
    difficulty: 'Intermediate',
    duration: '2 hr 30 min',
    rating: 4.9,
    reviewsCount: 3100,
    author: 'Principal Systems Architect',
    bookmarked: true,
    completed: false,
    url: '#',
    summary: 'Step-by-step blueprint for designing URL shorteners, Rate limiters, Notification services, and Distributed Caching with Redis.',
    tags: ['System Design', 'Architecture', 'Redis', 'Scalability']
  },
  {
    id: 'res-6',
    type: 'PDF',
    typeBadge: '📕 PDF',
    title: 'Behavioral & Leadership STAR Method Playbook',
    skill: 'Leadership & Soft Skills',
    difficulty: 'All Levels',
    duration: '30 min',
    rating: 4.6,
    reviewsCount: 950,
    author: 'Tech Talent Advisory',
    bookmarked: false,
    completed: true,
    url: '#',
    summary: 'Proven response frameworks for "Tell me about a time when...", handling conflict, and displaying product ownership.',
    tags: ['Soft Skills', 'Behavioral', 'STAR', 'Interview']
  }
];

export const MOCK_LEARNING_ANALYTICS = {
  totalHours: 32,
  resourcesCompleted: 72,
  coursesFinished: 7,
  coursesTotal: 10,
  skillsImproved: 6,
  learningStreak: 12,
  xpEarned: 2450,
  level: 6,
  weeklyActivity: [
    { day: 'Mon', hours: 3.5, active: true },
    { day: 'Tue', hours: 4.0, active: true },
    { day: 'Wed', hours: 2.5, active: true },
    { day: 'Thu', hours: 5.0, active: true },
    { day: 'Fri', hours: 0.5, active: false },
    { day: 'Sat', hours: 6.0, active: true },
    { day: 'Sun', hours: 4.5, active: true }
  ]
};
