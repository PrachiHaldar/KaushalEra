import { INITIAL_SKILLS } from '../data/mockData.js';

let skills = [...INITIAL_SKILLS];

export const getAllSkills = (req, res) => {
  const { category, verified } = req.query;
  let filtered = [...skills];

  if (category) {
    filtered = filtered.filter(s => s.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (verified !== undefined) {
    filtered = filtered.filter(s => s.verified === (verified === 'true'));
  }

  res.json({ success: true, count: filtered.length, data: filtered });
};

export const createSkill = (req, res) => {
  const skillData = req.body;
  if (!skillData.name) {
    return res.status(400).json({ success: false, message: 'Skill name is required' });
  }

  const newSkill = {
    id: skillData.name.toLowerCase().replace(/\s+/g, '-'),
    name: skillData.name,
    category: skillData.category || 'Technical',
    level: skillData.level || 'Intermediate',
    score: 75,
    verified: true,
    demand: 'High',
    icon: 'Code2',
    jobsCount: 15,
    internshipsCount: 10
  };

  skills.push(newSkill);
  res.status(201).json({ success: true, data: newSkill });
};
