import React, { useState, useEffect } from 'react';
import { useAuthRole, USER_ROLES } from './context/AuthRoleContext';

// Layouts
import { PublicLayout } from './components/public/PublicLayout';
import { AppLayout } from './components/layout/AppLayout';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { HowItWorksPage } from './pages/public/HowItWorksPage';
import { AudienceLandingPage } from './pages/public/AudienceLandingPage';
import { ContactPage } from './pages/public/ContactPage';
import { DemoPage } from './pages/public/DemoPage';

// Auth Pages
import { LoginPage } from './pages/auth/LoginPage';
import { SignupPage } from './pages/auth/SignupPage';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage';
import { OnboardingPage } from './pages/auth/OnboardingPage';

// Student Pages
import { StudentDashboard } from './pages/student/StudentDashboard';
import { MySkillsPage } from './pages/student/MySkillsPage';
import { SkillGapPage } from './pages/student/SkillGapPage';
import { CareerExplorerPage } from './pages/student/CareerExplorerPage';
import { CareerComparisonPage } from './pages/student/CareerComparisonPage';
import { DomainExplorerPage } from './pages/student/DomainExplorerPage';
import { DomainDetailPage } from './pages/student/DomainDetailPage';
import { LearningRoadmapPage } from './pages/student/LearningRoadmapPage';
import { ResourceLibraryPage } from './pages/student/ResourceLibraryPage';
import { LearningProgressPage } from './pages/student/LearningProgressPage';
import { OpportunitiesPage } from './pages/student/OpportunitiesPage';
import { JobDetailPage } from './pages/student/JobDetailPage';
import { ApplicationTrackerPage } from './pages/student/ApplicationTrackerPage';
import { InternshipWorkspacePage } from './pages/student/InternshipWorkspacePage';
import { AssessmentListPage } from './pages/student/AssessmentListPage';
import { AssessmentTakePage } from './pages/student/AssessmentTakePage';
import { AssessmentResultPage } from './pages/student/AssessmentResultPage';
import { PortfolioPage } from './pages/student/PortfolioPage';

// Faculty, Industry, Institution, Admin Pages
import { FacultyDashboard } from './pages/faculty/FacultyDashboard';
import { IndustryDashboard } from './pages/industry/IndustryDashboard';
import { CandidateMatchingPage } from './pages/industry/CandidateMatchingPage';
import { InstitutionDashboard } from './pages/institution/InstitutionDashboard';
import { AdminDashboard } from './pages/admin/AdminDashboard';

export function App() {
  const { isAuthenticated, currentRole } = useAuthRole();
  const [currentPath, setCurrentPath] = useState('/');
  const [routeState, setRouteState] = useState(null);

  // Dynamic Browser Document Title
  useEffect(() => {
    if (!isAuthenticated) {
      document.title = 'KaushalEra — Academia–Industry Collaboration Platform';
    } else {
      switch (currentRole) {
        case USER_ROLES.FACULTY:
          document.title = 'KaushalEra — Faculty';
          break;
        case USER_ROLES.RECRUITER:
          document.title = 'KaushalEra — Industry';
          break;
        case USER_ROLES.INSTITUTION_ADMIN:
          document.title = 'KaushalEra — Institution';
          break;
        case USER_ROLES.ADMIN:
          document.title = 'KaushalEra — Admin';
          break;
        case USER_ROLES.STUDENT:
        default:
          document.title = 'KaushalEra — Student';
          break;
      }
    }
  }, [isAuthenticated, currentRole, currentPath]);

  const handleNavigate = (path, state = null) => {
    setCurrentPath(path);
    setRouteState(state);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to determine if current path is a Public page or Auth page
  const isPublicRoute = (path) => {
    const publicPrefixes = [
      '/',
      '/about',
      '/how-it-works',
      '/students',
      '/academicians',
      '/industry',
      '/institutions',
      '/contact',
      '/demo',
      '/login',
      '/signup',
      '/forgot-password',
      '/onboarding'
    ];

    if (publicPrefixes.includes(path)) return true;

    // Public exploration pages
    if (
      path === '/domains' ||
      path.startsWith('/domains/') ||
      path === '/careers' ||
      path === '/careers/compare' ||
      path === '/internships' ||
      path === '/jobs' ||
      path.startsWith('/jobs/') ||
      path === '/resources'
    ) {
      return !isAuthenticated; // When not logged in, wrap in PublicLayout
    }

    return false;
  };

  // Authenticated Role Portal Router
  const renderPortalView = () => {
    // Dynamic matching for parameter routes
    if (currentPath.startsWith('/domains/')) {
      const domainId = currentPath.replace('/domains/', '');
      return <DomainDetailPage domainId={domainId} onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('/jobs/')) {
      const jobId = currentPath.replace('/jobs/', '');
      return <JobDetailPage jobId={jobId} jobData={routeState} onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('/assessment/') && currentPath.endsWith('/take')) {
      const assessmentId = currentPath.split('/')[2];
      return <AssessmentTakePage assessmentId={assessmentId} onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('/assessment/') && currentPath.endsWith('/results')) {
      const assessmentId = currentPath.split('/')[2];
      const score = routeState?.score || 82;
      return <AssessmentResultPage assessmentId={assessmentId} score={score} onNavigate={handleNavigate} />;
    }

    // Role-specific matching
    switch (currentPath) {
      // Common & Student paths
      case '/dashboard':
      case '/student/dashboard':
        if (currentRole === USER_ROLES.FACULTY) return <FacultyDashboard onNavigate={handleNavigate} />;
        if (currentRole === USER_ROLES.RECRUITER) return <IndustryDashboard onNavigate={handleNavigate} />;
        if (currentRole === USER_ROLES.INSTITUTION_ADMIN) return <InstitutionDashboard onNavigate={handleNavigate} />;
        if (currentRole === USER_ROLES.ADMIN) return <AdminDashboard onNavigate={handleNavigate} />;
        return <StudentDashboard onNavigate={handleNavigate} />;

      case '/skills':
      case '/student/skills':
        return <MySkillsPage onNavigate={handleNavigate} />;

      case '/skill-gap':
      case '/student/skill-gap':
        return <SkillGapPage onNavigate={handleNavigate} />;

      case '/careers':
      case '/student/careers':
        return <CareerExplorerPage onNavigate={handleNavigate} />;

      case '/careers/compare':
        return <CareerComparisonPage onNavigate={handleNavigate} />;

      case '/domains':
        return <DomainExplorerPage onNavigate={handleNavigate} />;

      case '/roadmap':
      case '/student/roadmap':
        return <LearningRoadmapPage onNavigate={handleNavigate} />;

      case '/resources':
        return <ResourceLibraryPage onNavigate={handleNavigate} />;

      case '/learning-progress':
      case '/student/learning-progress':
        return <LearningProgressPage onNavigate={handleNavigate} />;

      case '/opportunities':
      case '/internships':
      case '/jobs':
      case '/student/opportunities':
        return <OpportunitiesPage onNavigate={handleNavigate} />;

      case '/applications':
      case '/student/applications':
        return <ApplicationTrackerPage onNavigate={handleNavigate} />;

      case '/internship-workspace':
      case '/student/internship-workspace':
        return <InternshipWorkspacePage onNavigate={handleNavigate} />;

      case '/assessment':
      case '/student/assessment':
        return <AssessmentListPage onNavigate={handleNavigate} />;

      case '/portfolio':
      case '/student/portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;

      // Faculty Routes
      case '/faculty/dashboard':
      case '/faculty/collaborations':
      case '/faculty/fdp':
      case '/faculty/consultancy':
        return <FacultyDashboard onNavigate={handleNavigate} />;

      // Industry / Recruiter Routes
      case '/industry/dashboard':
      case '/industry/jobs':
        return <IndustryDashboard onNavigate={handleNavigate} />;
      case '/industry/matching':
        return <CandidateMatchingPage onNavigate={handleNavigate} />;

      // Institution & Admin Routes
      case '/institution/dashboard':
      case '/institution/departments':
        return <InstitutionDashboard onNavigate={handleNavigate} />;
      case '/admin':
      case '/admin/dashboard':
        return <AdminDashboard onNavigate={handleNavigate} />;

      default:
        // Default to student or role dashboard
        if (currentRole === USER_ROLES.FACULTY) return <FacultyDashboard onNavigate={handleNavigate} />;
        if (currentRole === USER_ROLES.RECRUITER) return <IndustryDashboard onNavigate={handleNavigate} />;
        if (currentRole === USER_ROLES.INSTITUTION_ADMIN) return <InstitutionDashboard onNavigate={handleNavigate} />;
        if (currentRole === USER_ROLES.ADMIN) return <AdminDashboard onNavigate={handleNavigate} />;
        return <StudentDashboard onNavigate={handleNavigate} />;
    }
  };

  // Public View Router
  const renderPublicView = () => {
    // Dynamic public paths
    if (currentPath.startsWith('/domains/')) {
      const domainId = currentPath.replace('/domains/', '');
      return <DomainDetailPage domainId={domainId} onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('/jobs/')) {
      const jobId = currentPath.replace('/jobs/', '');
      return <JobDetailPage jobId={jobId} jobData={routeState} onNavigate={handleNavigate} />;
    }

    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case '/students':
        return <AudienceLandingPage type="students" onNavigate={handleNavigate} />;
      case '/academicians':
        return <AudienceLandingPage type="academicians" onNavigate={handleNavigate} />;
      case '/industry':
        return <AudienceLandingPage type="industry" onNavigate={handleNavigate} />;
      case '/institutions':
        return <AudienceLandingPage type="institutions" onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case '/demo':
        return <DemoPage onNavigate={handleNavigate} />;

      // Public Explorations
      case '/domains':
        return <DomainExplorerPage onNavigate={handleNavigate} />;
      case '/careers':
        return <CareerExplorerPage onNavigate={handleNavigate} />;
      case '/careers/compare':
        return <CareerComparisonPage onNavigate={handleNavigate} />;
      case '/internships':
      case '/jobs':
        return <OpportunitiesPage onNavigate={handleNavigate} />;
      case '/resources':
        return <ResourceLibraryPage onNavigate={handleNavigate} />;

      // Authentication Pages
      case '/login':
        return <LoginPage onNavigate={handleNavigate} />;
      case '/signup':
        return <SignupPage onNavigate={handleNavigate} />;
      case '/forgot-password':
        return <ForgotPasswordPage onNavigate={handleNavigate} />;
      case '/onboarding':
        return <OnboardingPage onNavigate={handleNavigate} />;

      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Route Decision: Public Layout vs Authenticated Portal Layout
  if (isPublicRoute(currentPath)) {
    return (
      <PublicLayout currentPath={currentPath} onNavigate={handleNavigate}>
        {renderPublicView()}
      </PublicLayout>
    );
  }

  // If user is trying to access a protected portal route while unauthenticated, redirect to login
  if (!isAuthenticated) {
    return (
      <PublicLayout currentPath="/login" onNavigate={handleNavigate}>
        <LoginPage onNavigate={handleNavigate} />
      </PublicLayout>
    );
  }

  // Authenticated Portal Layout
  return (
    <AppLayout currentPath={currentPath} onNavigate={handleNavigate}>
      {renderPortalView()}
    </AppLayout>
  );
}

export default App;
