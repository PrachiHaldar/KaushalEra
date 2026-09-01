import { INITIAL_RESOURCES } from '../data/mockData.js';

let resources = [...INITIAL_RESOURCES];

export const getAllResources = (req, res) => {
  const { type, skill } = req.query;
  let filtered = [...resources];

  if (type && type !== 'all') {
    filtered = filtered.filter(r => r.type.toLowerCase().includes(type.toLowerCase()));
  }

  if (skill) {
    filtered = filtered.filter(r => r.skill.toLowerCase().includes(skill.toLowerCase()));
  }

  res.json({ success: true, count: filtered.length, data: filtered });
};

export const createResource = (req, res) => {
  const resourceData = req.body;
  if (!resourceData.title) {
    return res.status(400).json({ success: false, message: 'Title is required' });
  }

  const newResource = {
    id: 'res-' + Date.now(),
    type: resourceData.type || 'Interactive Module',
    typeBadge: `💻 ${resourceData.type || 'Interactive'}`,
    title: resourceData.title,
    skill: resourceData.skill || 'General',
    difficulty: resourceData.difficulty || 'Intermediate',
    duration: resourceData.duration || '1.0 Hour',
    rating: 4.8,
    reviewsCount: 10,
    author: resourceData.author || 'KaushalEra Faculty',
    bookmarked: false,
    summary: resourceData.summary || 'Course reference resource.'
  };

  resources.unshift(newResource);
  res.status(201).json({ success: true, data: newResource });
};
