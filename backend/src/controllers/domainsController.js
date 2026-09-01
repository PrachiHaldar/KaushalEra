import { INITIAL_DOMAINS } from '../data/mockData.js';

let domains = [...INITIAL_DOMAINS];

export const getAllDomains = (req, res) => {
  res.json({ success: true, count: domains.length, data: domains });
};

export const getDomainById = (req, res) => {
  const { id } = req.params;
  const domain = domains.find(d => d.id === id);
  if (!domain) {
    return res.status(404).json({ success: false, message: 'Domain not found' });
  }
  res.json({ success: true, data: domain });
};

export const createDomain = (req, res) => {
  const domainData = req.body;
  if (!domainData.title) {
    return res.status(400).json({ success: false, message: 'Domain title is required' });
  }

  const newDomain = {
    id: domainData.id || domainData.title.toLowerCase().replace(/\s+/g, '-'),
    title: domainData.title,
    tagline: domainData.tagline || 'Specialized Technology Domain.',
    icon: domainData.icon || 'BrainCircuit',
    badge: 'New 🚀',
    careerPathsCount: domainData.careerPathsCount || 6,
    skillsCount: domainData.skillsCount || 18,
    resourcesCount: domainData.resourcesCount || 30,
    demandPercent: domainData.demandPercent || 85,
    avgSalary: domainData.avgSalary || '₹10.0 - ₹20.0 LPA',
    overview: domainData.overview || 'Domain overview and curriculum.'
  };

  domains.push(newDomain);
  res.status(201).json({ success: true, data: newDomain });
};
