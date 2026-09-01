import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_APPLICATIONS, MOCK_JOBS, MOCK_INTERNSHIPS } from '../data/mockJobs';
import { MOCK_RESOURCES } from '../data/mockResources';
import { MOCK_DOMAINS } from '../data/mockDomains';
import { ALL_SKILLS_DIRECTORY } from '../data/mockSkills';
import { MOCK_CANDIDATES } from '../data/mockCandidates';
import { 
  jobsApi, 
  applicationsApi, 
  candidatesApi, 
  domainsApi, 
  skillsApi, 
  resourcesApi 
} from '../services/api';

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  // 1. Jobs & Internships
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('kaushal_jobs');
    return saved ? JSON.parse(saved) : MOCK_JOBS;
  });

  const [internships, setInternships] = useState(() => {
    const saved = localStorage.getItem('kaushal_internships');
    return saved ? JSON.parse(saved) : MOCK_INTERNSHIPS;
  });

  // 2. Applications (Kanban)
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('kaushal_apps');
    return saved ? JSON.parse(saved) : MOCK_APPLICATIONS;
  });

  // 3. Candidates (Recruiter Pipeline)
  const [candidates, setCandidates] = useState(() => {
    const saved = localStorage.getItem('kaushal_candidates');
    return saved ? JSON.parse(saved) : MOCK_CANDIDATES;
  });

  // 4. Domains & Skills
  const [domains, setDomains] = useState(() => {
    const saved = localStorage.getItem('kaushal_domains');
    return saved ? JSON.parse(saved) : MOCK_DOMAINS;
  });

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('kaushal_skills');
    return saved ? JSON.parse(saved) : ALL_SKILLS_DIRECTORY;
  });

  // 5. Resources & Bookmarks
  const [resources, setResources] = useState(() => {
    const saved = localStorage.getItem('kaushal_resources');
    return saved ? JSON.parse(saved) : MOCK_RESOURCES;
  });

  const [bookmarkedResourceIds, setBookmarkedResourceIds] = useState(() => {
    const saved = localStorage.getItem('kaushal_bookmarks');
    return saved ? JSON.parse(saved) : ['res-1', 'res-4', 'res-5'];
  });

  // 6. Gamification XP & Streak
  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('kaushal_xp');
    return saved ? parseInt(saved, 10) : 2450;
  });

  const [streak, setStreak] = useState(12);

  // 7. Completed Assessments
  const [completedAssessments, setCompletedAssessments] = useState(() => {
    const saved = localStorage.getItem('kaushal_completed_assessments');
    return saved ? JSON.parse(saved) : { 'python-advanced': 82, 'sql-db-optimization': 78 };
  });

  // 8. Notifications Feed
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      title: '🎯 New Matched Opportunity',
      message: 'TechNova Labs published AI/ML Research Intern with a 92% skill match to your profile.',
      time: '10m ago',
      read: false,
      type: 'opportunity'
    },
    {
      id: 'notif-2',
      title: '🏆 Skill Assessment Result',
      message: 'You scored 82% in Python Advanced Architecture. +50 XP and 18 opportunities unlocked!',
      time: '1h ago',
      read: false,
      type: 'assessment'
    },
    {
      id: 'notif-3',
      title: '💼 Application Shortlisted',
      message: 'DataCorp Analytics moved your Data Analyst application to Technical Interview stage.',
      time: 'Yesterday',
      read: true,
      type: 'application'
    },
    {
      id: 'notif-4',
      title: '⏰ Internship Progress Milestone Due',
      message: 'Week 6 Distributed Evaluation Run Report is due tomorrow for Dr. Sarah Jenkins.',
      time: '2 days ago',
      read: true,
      type: 'internship'
    }
  ]);

  // Persist storage
  useEffect(() => { localStorage.setItem('kaushal_jobs', JSON.stringify(jobs)); }, [jobs]);
  useEffect(() => { localStorage.setItem('kaushal_internships', JSON.stringify(internships)); }, [internships]);
  useEffect(() => { localStorage.setItem('kaushal_apps', JSON.stringify(applications)); }, [applications]);
  useEffect(() => { localStorage.setItem('kaushal_candidates', JSON.stringify(candidates)); }, [candidates]);
  useEffect(() => { localStorage.setItem('kaushal_domains', JSON.stringify(domains)); }, [domains]);
  useEffect(() => { localStorage.setItem('kaushal_skills', JSON.stringify(skills)); }, [skills]);
  useEffect(() => { localStorage.setItem('kaushal_resources', JSON.stringify(resources)); }, [resources]);
  useEffect(() => { localStorage.setItem('kaushal_bookmarks', JSON.stringify(bookmarkedResourceIds)); }, [bookmarkedResourceIds]);
  useEffect(() => { localStorage.setItem('kaushal_xp', xp.toString()); }, [xp]);
  useEffect(() => { localStorage.setItem('kaushal_completed_assessments', JSON.stringify(completedAssessments)); }, [completedAssessments]);

  // === Dynamic Actions ===

  const addXP = (points) => {
    setXp(prev => prev + points);
  };

  const applyToOpportunity = (opportunity, type = 'Job') => {
    const newApp = {
      id: 'app-' + Date.now(),
      company: opportunity.company,
      role: opportunity.title,
      stage: 'APPLIED',
      appliedDate: 'Today',
      statusNote: 'Application submitted successfully via KaushalSetu',
      badgeColor: 'badge-primary',
      salaryOrStipend: opportunity.salary || opportunity.stipend || 'Competitive',
      timeline: [
        { date: 'Today', event: 'Application Submitted via KaushalSetu' }
      ]
    };
    setApplications(prev => [newApp, ...prev]);
    addXP(25);

    // Also add to candidate list in recruiter view
    const newCandidate = {
      id: 'cand-' + Date.now(),
      name: 'Alex Sharma',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      title: 'Computer Science Student • Aspiring AI Engineer',
      university: 'Apex Institute of Technology',
      batch: 'Class of 2027',
      gpa: '8.9 / 10',
      skillMatch: opportunity.skillMatch || 90,
      assessmentScore: 88,
      status: 'Applied',
      verification: 'Assessment & Institution Verified',
      skills: [
        { name: 'Python', matched: true, level: 'Advanced (90%)' },
        { name: 'SQL', matched: true, level: 'Intermediate (70%)' },
        { name: 'Machine Learning', matched: true, level: 'Intermediate (65%)' }
      ],
      educationVerified: true,
      projectsCount: 4,
      topProject: 'LLM Multi-Agent Question Answering Engine (GitHub Verified)',
      experience: 'Previous Web Dev Intern at StartUpSphere',
      recommendedFor: [opportunity.title]
    };
    setCandidates(prev => [newCandidate, ...prev]);

    return newApp;
  };

  const moveApplicationStage = (appId, targetStage) => {
    setApplications(prev => prev.map(app => {
      if (app.id === appId) {
        return {
          ...app,
          stage: targetStage,
          timeline: [...app.timeline, { date: 'Just now', event: `Moved to ${targetStage}` }]
        };
      }
      return app;
    }));
  };

  const postNewJob = (jobData) => {
    const newJob = {
      id: 'job-' + Date.now(),
      title: jobData.title,
      company: jobData.company || 'TechNova Labs',
      logo: jobData.logo || 'TN',
      location: jobData.location || 'Remote / Hybrid',
      salary: jobData.salary || '₹12.0 - ₹18.0 LPA',
      type: 'Full-time',
      experience: jobData.experience || '0-2 Years',
      skillMatch: 92,
      skills: jobData.skills || ['Python', 'SQL', 'Git'],
      description: jobData.description || 'Enterprise development and architecture.',
      postedDate: 'Just now',
      applicants: 0,
      status: 'Active'
    };
    setJobs(prev => [newJob, ...prev]);
    return newJob;
  };

  const postNewInternship = (internshipData) => {
    const newIntern = {
      id: 'intern-' + Date.now(),
      title: internshipData.title,
      company: internshipData.company || 'TechNova Labs',
      logo: internshipData.logo || 'TN',
      location: internshipData.location || 'Remote',
      type: 'Internship',
      stipend: internshipData.stipend || '₹25,000 / month',
      duration: internshipData.duration || '6 Months',
      deadline: internshipData.deadline || '30 Sep 2026',
      skillMatch: 94,
      skills: internshipData.skills || ['Python', 'Machine Learning', 'SQL'],
      description: internshipData.description || 'Hands-on industrial research internship.',
      openings: 3,
      applicants: 0,
      status: 'Open'
    };
    setInternships(prev => [newIntern, ...prev]);
    return newIntern;
  };

  const createNewDomain = (domainData) => {
    const newDomain = {
      id: domainData.title.toLowerCase().replace(/\s+/g, '-'),
      title: domainData.title,
      tagline: domainData.tagline || 'Leading technology specialization.',
      icon: 'BrainCircuit',
      badge: 'New 🚀',
      careerPathsCount: 8,
      skillsCount: 24,
      resourcesCount: 45,
      demandPercent: 88,
      avgSalary: '₹12.0 - ₹26.0 LPA',
      overview: domainData.overview || 'Domain overview and industrial curriculum.',
      requiredSkills: [],
      careerRoles: []
    };
    setDomains(prev => [newDomain, ...prev]);
    return newDomain;
  };

  const createNewSkill = (skillData) => {
    const newSkill = {
      id: skillData.name.toLowerCase().replace(/\s+/g, '-'),
      name: skillData.name,
      category: skillData.category || 'Technical',
      level: skillData.level || 'Intermediate',
      score: 75,
      verified: true,
      verifiedBy: 'Institution Verified',
      demand: 'High',
      icon: 'Code2',
      jobsCount: 18,
      internshipsCount: 12
    };
    setSkills(prev => [newSkill, ...prev]);
    return newSkill;
  };

  const createNewResource = (resourceData) => {
    const newResource = {
      id: 'res-' + Date.now(),
      type: resourceData.type || 'PDF',
      typeBadge: `📕 ${resourceData.type || 'PDF'}`,
      title: resourceData.title,
      skill: resourceData.skill || 'General',
      difficulty: resourceData.difficulty || 'Intermediate',
      duration: resourceData.duration || '30 min',
      rating: 4.9,
      reviewsCount: 1,
      author: resourceData.author || 'KaushalSetu Faculty',
      bookmarked: false,
      completed: false,
      summary: resourceData.summary || 'Educational reference guide.',
      tags: [resourceData.skill || 'Tech']
    };
    setResources(prev => [newResource, ...prev]);
    return newResource;
  };

  const toggleBookmarkResource = (resourceId) => {
    setBookmarkedResourceIds(prev => {
      if (prev.includes(resourceId)) {
        return prev.filter(id => id !== resourceId);
      } else {
        return [...prev, resourceId];
      }
    });
  };

  const recordAssessmentScore = (assessmentId, score) => {
    setCompletedAssessments(prev => ({
      ...prev,
      [assessmentId]: score
    }));
    addXP(50);
  };

  const markNotificationRead = (notifId) => {
    setNotifications(prev => prev.map(n => n.id === notifId ? { ...n, read: true } : n));
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  return (
    <AppDataContext.Provider value={{
      jobs,
      internships,
      applications,
      candidates,
      domains,
      skills,
      resources,
      bookmarkedResourceIds,
      xp,
      streak,
      completedAssessments,
      notifications,
      unreadNotificationsCount,
      addXP,
      applyToOpportunity,
      moveApplicationStage,
      postNewJob,
      postNewInternship,
      createNewDomain,
      createNewSkill,
      createNewResource,
      toggleBookmarkResource,
      recordAssessmentScore,
      markNotificationRead,
      markAllNotificationsRead
    }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
