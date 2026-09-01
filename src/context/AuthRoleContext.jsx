import React, { createContext, useContext, useState, useEffect } from 'react';

export const USER_ROLES = {
  STUDENT: 'student',
  FACULTY: 'faculty',
  RECRUITER: 'recruiter',
  INSTITUTION_ADMIN: 'institution_admin',
  ADMIN: 'admin'
};

export const DEMO_USERS = {
  [USER_ROLES.STUDENT]: {
    id: 'usr-student-1',
    email: 'student@demo.com',
    name: 'Alex Sharma',
    role: USER_ROLES.STUDENT,
    roleTitle: 'B.Tech Student (Class of 2027)',
    institution: 'Apex Institute of Technology',
    department: 'Computer Science & Engineering',
    degree: 'B.Tech Computer Science',
    graduationYear: '2027',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    targetCareer: 'AI / Machine Learning Engineer',
    careerReadiness: 78,
    streak: 12,
    xp: 2450,
    level: 6,
    onboardingComplete: true
  },
  [USER_ROLES.FACULTY]: {
    id: 'usr-faculty-1',
    email: 'faculty@demo.com',
    name: 'Dr. Ramesh Sharma',
    role: USER_ROLES.FACULTY,
    roleTitle: 'Professor & Head of AI Research Lab',
    institution: 'Apex Institute of Technology',
    department: 'Computer Science & Engineering',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    collaborationScore: 78,
    activeCollaborationsCount: 6,
    onboardingComplete: true
  },
  [USER_ROLES.RECRUITER]: {
    id: 'usr-recruiter-1',
    email: 'recruiter@demo.com',
    name: 'Marcus Vance',
    role: USER_ROLES.RECRUITER,
    roleTitle: 'Lead Talent Partner & Technical Recruiter',
    company: 'TechNova Labs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    activePostings: 12,
    totalApplicants: 428,
    onboardingComplete: true
  },
  [USER_ROLES.INSTITUTION_ADMIN]: {
    id: 'usr-institution-1',
    email: 'institution@demo.com',
    name: 'Dean K. Verma',
    role: USER_ROLES.INSTITUTION_ADMIN,
    roleTitle: 'Dean of Academics & Industry Partnerships',
    institution: 'Apex Institute of Technology & Engineering',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    totalStudents: 4250,
    placementRate: 87,
    onboardingComplete: true
  },
  [USER_ROLES.ADMIN]: {
    id: 'usr-admin-1',
    email: 'admin@demo.com',
    name: 'Sarah Connor',
    role: USER_ROLES.ADMIN,
    roleTitle: 'System Root Administrator',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    onboardingComplete: true
  }
};

const AuthRoleContext = createContext();

export const AuthRoleProvider = ({ children }) => {
  // Session State
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('kaushal_auth_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [pendingSignupUser, setPendingSignupUser] = useState(() => {
    const saved = localStorage.getItem('kaushal_pending_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('kaushal_auth_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('kaushal_auth_user');
    }
  }, [currentUser]);

  useEffect(() => {
    if (pendingSignupUser) {
      localStorage.setItem('kaushal_pending_user', JSON.stringify(pendingSignupUser));
    } else {
      localStorage.removeItem('kaushal_pending_user');
    }
  }, [pendingSignupUser]);

  // Login handler
  const login = (email, password, role = USER_ROLES.STUDENT) => {
    // If it's a known demo email, use the demo persona
    const foundDemo = Object.values(DEMO_USERS).find(u => u.email.toLowerCase() === email.toLowerCase());
    const userToSet = foundDemo || {
      id: 'usr-' + Date.now(),
      email,
      name: email.split('@')[0],
      role: role || USER_ROLES.STUDENT,
      roleTitle: `${role} User`,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      onboardingComplete: true
    };

    setCurrentUser(userToSet);
    return userToSet;
  };

  // Quick 1-Click Demo Login
  const loginAsDemoRole = (role) => {
    const demoUser = DEMO_USERS[role] || DEMO_USERS[USER_ROLES.STUDENT];
    setCurrentUser(demoUser);
    return demoUser;
  };

  // Signup step 1 (starts onboarding)
  const initiateSignup = ({ name, email, password, role }) => {
    const newUser = {
      id: 'usr-' + Date.now(),
      name,
      email,
      role: role || USER_ROLES.STUDENT,
      roleTitle: `${role} Member`,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      onboardingComplete: false
    };
    setPendingSignupUser(newUser);
    return newUser;
  };

  // Complete Onboarding wizard
  const completeOnboarding = (profileData) => {
    const user = pendingSignupUser || {
      id: 'usr-' + Date.now(),
      name: 'New User',
      email: 'user@example.com',
      role: USER_ROLES.STUDENT
    };

    const finalUser = {
      ...user,
      ...profileData,
      onboardingComplete: true
    };

    setCurrentUser(finalUser);
    setPendingSignupUser(null);
    return finalUser;
  };

  // Logout handler
  const logout = () => {
    setCurrentUser(null);
    setPendingSignupUser(null);
  };

  // Update profile
  const updateUserProfile = (updates) => {
    setCurrentUser(prev => prev ? { ...prev, ...updates } : null);
  };

  const isAuthenticated = Boolean(currentUser);
  const currentRole = currentUser?.role || USER_ROLES.STUDENT;

  return (
    <AuthRoleContext.Provider value={{
      isAuthenticated,
      currentUser,
      currentRole,
      pendingSignupUser,
      USER_ROLES,
      DEMO_USERS,
      login,
      loginAsDemoRole,
      initiateSignup,
      completeOnboarding,
      logout,
      updateUserProfile,
      isStudent: currentRole === USER_ROLES.STUDENT,
      isFaculty: currentRole === USER_ROLES.FACULTY,
      isRecruiter: currentRole === USER_ROLES.RECRUITER,
      isInstitutionAdmin: currentRole === USER_ROLES.INSTITUTION_ADMIN,
      isAdmin: currentRole === USER_ROLES.ADMIN
    }}>
      {children}
    </AuthRoleContext.Provider>
  );
};

export const useAuthRole = () => useContext(AuthRoleContext);
