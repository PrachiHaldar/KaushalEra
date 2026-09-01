import { INITIAL_JOBS, INITIAL_INTERNSHIPS } from '../data/mockData.js';

let jobs = [...INITIAL_JOBS];
let internships = [...INITIAL_INTERNSHIPS];

export const getAllJobs = (req, res) => {
  const { search, location, type } = req.query;
  let filtered = [...jobs];

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(j => 
      j.title.toLowerCase().includes(q) || 
      j.company.toLowerCase().includes(q) ||
      (j.skills && j.skills.some(s => (typeof s === 'string' ? s : s.name).toLowerCase().includes(q)))
    );
  }

  if (location && location !== 'all') {
    filtered = filtered.filter(j => j.location.toLowerCase().includes(location.toLowerCase()));
  }

  res.json({ success: true, count: filtered.length, data: filtered });
};

export const getJobById = (req, res) => {
  const { id } = req.params;
  const job = jobs.find(j => j.id === id) || internships.find(i => i.id === id);
  if (!job) {
    return res.status(404).json({ success: false, message: 'Job or Internship not found' });
  }
  res.json({ success: true, data: job });
};

export const createJob = (req, res) => {
  const jobData = req.body;
  if (!jobData.title || !jobData.company) {
    return res.status(400).json({ success: false, message: 'Title and company are required' });
  }

  const newJob = {
    id: 'job-' + Date.now(),
    title: jobData.title,
    company: jobData.company,
    logo: jobData.logo || jobData.company.substring(0, 2).toUpperCase(),
    location: jobData.location || 'Remote / Hybrid',
    salary: jobData.salary || '₹12.0 - ₹18.0 LPA',
    type: jobData.type || 'Full-time',
    experience: jobData.experience || '0-2 Years',
    skillMatch: 92,
    skills: jobData.skills || ['Python', 'SQL', 'Git'],
    description: jobData.description || 'Enterprise software role.',
    postedDate: 'Just now',
    applicants: 0,
    status: 'Active'
  };

  jobs.unshift(newJob);
  res.status(201).json({ success: true, data: newJob });
};

export const getAllInternships = (req, res) => {
  const { search } = req.query;
  let filtered = [...internships];

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(i => 
      i.title.toLowerCase().includes(q) || 
      i.company.toLowerCase().includes(q)
    );
  }

  res.json({ success: true, count: filtered.length, data: filtered });
};

export const createInternship = (req, res) => {
  const internData = req.body;
  if (!internData.title || !internData.company) {
    return res.status(400).json({ success: false, message: 'Title and company are required' });
  }

  const newIntern = {
    id: 'intern-' + Date.now(),
    title: internData.title,
    company: internData.company,
    logo: internData.logo || internData.company.substring(0, 2).toUpperCase(),
    location: internData.location || 'Remote',
    type: 'Internship',
    stipend: internData.stipend || '₹25,000 / month',
    duration: internData.duration || '6 Months',
    deadline: internData.deadline || '30 Sep 2026',
    skillMatch: 94,
    skills: internData.skills || ['Python', 'Machine Learning', 'SQL'],
    description: internData.description || 'Hands-on industrial research internship.',
    openings: internData.openings || 3,
    applicants: 0,
    status: 'Open'
  };

  internships.unshift(newIntern);
  res.status(201).json({ success: true, data: newIntern });
};
