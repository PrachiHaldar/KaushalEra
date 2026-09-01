import { INITIAL_USERS } from '../data/mockData.js';

let users = { ...INITIAL_USERS };
let currentUserSession = users['student'];

export const login = (req, res) => {
  const { email, password, role } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  const found = Object.values(users).find(u => u.email.toLowerCase() === email.toLowerCase());
  if (found) {
    currentUserSession = found;
    return res.json({ success: true, user: found, token: 'demo-jwt-token-' + Date.now() });
  }

  const newUser = {
    id: 'usr-' + Date.now(),
    email,
    name: email.split('@')[0],
    role: role || 'student',
    roleTitle: `${role || 'student'} User`,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    onboardingComplete: true
  };

  users[newUser.id] = newUser;
  currentUserSession = newUser;
  return res.json({ success: true, user: newUser, token: 'demo-jwt-token-' + Date.now() });
};

export const demoLogin = (req, res) => {
  const { role } = req.body;
  const user = users[role] || users['student'];
  currentUserSession = user;
  return res.json({ success: true, user, token: 'demo-jwt-token-' + Date.now() });
};

export const signup = (req, res) => {
  const { name, email, role } = req.body;
  if (!email || !name) {
    return res.status(400).json({ success: false, message: 'Name and email are required' });
  }

  const newUser = {
    id: 'usr-' + Date.now(),
    name,
    email,
    role: role || 'student',
    roleTitle: `${role || 'Student'} Member`,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    onboardingComplete: false
  };

  users[newUser.id] = newUser;
  currentUserSession = newUser;
  return res.status(201).json({ success: true, user: newUser, token: 'demo-jwt-token-' + Date.now() });
};

export const onboarding = (req, res) => {
  const profileData = req.body;
  if (!currentUserSession) {
    return res.status(401).json({ success: false, message: 'Not authenticated' });
  }

  currentUserSession = {
    ...currentUserSession,
    ...profileData,
    onboardingComplete: true
  };

  users[currentUserSession.id] = currentUserSession;
  return res.json({ success: true, user: currentUserSession });
};

export const getCurrentUser = (req, res) => {
  if (!currentUserSession) {
    return res.status(401).json({ success: false, message: 'No active session' });
  }
  return res.json({ success: true, user: currentUserSession });
};
