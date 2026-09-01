import { INITIAL_CANDIDATES } from '../data/mockData.js';

let candidates = [...INITIAL_CANDIDATES];

export const getAllCandidates = (req, res) => {
  const { status, skill } = req.query;
  let filtered = [...candidates];

  if (status && status !== 'all') {
    filtered = filtered.filter(c => c.status.toLowerCase() === status.toLowerCase());
  }

  if (skill) {
    const q = skill.toLowerCase();
    filtered = filtered.filter(c => c.skills.some(s => s.name.toLowerCase().includes(q)));
  }

  res.json({ success: true, count: filtered.length, data: filtered });
};

export const updateCandidateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const candidate = candidates.find(c => c.id === id);
  if (!candidate) {
    return res.status(404).json({ success: false, message: 'Candidate not found' });
  }

  candidate.status = status;
  res.json({ success: true, data: candidate });
};
