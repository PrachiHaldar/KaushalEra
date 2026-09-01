import { INITIAL_APPLICATIONS } from '../data/mockData.js';

let applications = [...INITIAL_APPLICATIONS];

export const getAllApplications = (req, res) => {
  res.json({ success: true, count: applications.length, data: applications });
};

export const createApplication = (req, res) => {
  const { opportunity, type } = req.body;
  if (!opportunity || !opportunity.company || !opportunity.title) {
    return res.status(400).json({ success: false, message: 'Invalid opportunity details' });
  }

  const newApp = {
    id: 'app-' + Date.now(),
    company: opportunity.company,
    role: opportunity.title,
    stage: 'APPLIED',
    appliedDate: 'Today',
    statusNote: 'Application submitted successfully via KaushalEra',
    badgeColor: 'badge-primary',
    salaryOrStipend: opportunity.salary || opportunity.stipend || 'Competitive',
    timeline: [
      { date: 'Today', event: 'Application Submitted via KaushalEra' }
    ]
  };

  applications.unshift(newApp);
  res.status(201).json({ success: true, data: newApp });
};

export const updateApplicationStage = (req, res) => {
  const { id } = req.params;
  const { stage } = req.body;

  const app = applications.find(a => a.id === id);
  if (!app) {
    return res.status(404).json({ success: false, message: 'Application not found' });
  }

  app.stage = stage;
  app.timeline.push({ date: 'Just now', event: `Moved to ${stage}` });

  res.json({ success: true, data: app });
};
