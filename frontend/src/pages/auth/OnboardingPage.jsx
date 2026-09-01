import React, { useState } from 'react';
import { useAuthRole, USER_ROLES } from '../../context/AuthRoleContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import {
  GraduationCap,
  Building2,
  Briefcase,
  User,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Award,
  Layers,
  MapPin
} from 'lucide-react';

export const OnboardingPage = ({ onNavigate }) => {
  const { pendingSignupUser, completeOnboarding, currentRole } = useAuthRole();
  const { addToast } = useToast();

  const activeRole = pendingSignupUser?.role || currentRole || USER_ROLES.STUDENT;

  // Student State (Section 19)
  const [studentForm, setStudentForm] = useState({
    institution: 'Apex Institute of Technology',
    department: 'Computer Science & Engineering',
    degree: 'B.Tech Computer Science',
    graduationYear: '2027',
    targetCareer: 'AI / Machine Learning Engineer',
    preferredDomain: 'Artificial Intelligence',
    currentSkills: 'Python, SQL, Algorithms',
    location: 'Bengaluru / Remote'
  });

  // Faculty State (Section 20)
  const [facultyForm, setFacultyForm] = useState({
    institution: 'Apex Institute of Technology',
    department: 'Computer Science & Engineering',
    designation: 'Professor & Head of AI Research',
    expertise: 'Natural Language Processing & Transformer Architecture',
    researchAreas: 'Distributed AI, LLM Evaluation',
    collaborationTypes: 'Sponsored Research Labs, Corporate Consultancy'
  });

  // Industry State (Section 21)
  const [industryForm, setIndustryForm] = useState({
    companyName: 'TechNova Labs',
    industry: 'Enterprise AI & Cloud Infrastructure',
    companySize: '250 - 500 Employees',
    location: 'Bengaluru / Remote',
    website: 'https://technovalabs.ai',
    areasOfHiring: 'Machine Learning, Full-Stack React/Node, Cloud DevOps'
  });

  // Institution State (Section 22)
  const [institutionForm, setInstitutionForm] = useState({
    institutionName: 'Apex Institute of Technology & Engineering',
    type: 'Autonomous Engineering University',
    location: 'Bengaluru, Karnataka',
    departmentsCount: '8 Departments (CS, IT, AI-DS, ECE, Mech, Civil, Biotech, MBA)',
    contactPerson: 'Dean of Academic Partnerships'
  });

  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmitOnboarding = (e) => {
    e.preventDefault();
    let profileData = {};

    if (activeRole === USER_ROLES.STUDENT) {
      profileData = {
        roleTitle: `${studentForm.degree} (${studentForm.graduationYear})`,
        institution: studentForm.institution,
        department: studentForm.department,
        targetCareer: studentForm.targetCareer,
        careerReadiness: 78,
        streak: 1,
        xp: 250,
        level: 1
      };
    } else if (activeRole === USER_ROLES.FACULTY) {
      profileData = {
        roleTitle: facultyForm.designation,
        institution: facultyForm.institution,
        department: facultyForm.department,
        collaborationScore: 75,
        activeCollaborationsCount: 1
      };
    } else if (activeRole === USER_ROLES.RECRUITER) {
      profileData = {
        roleTitle: 'Technical Talent Partner',
        company: industryForm.companyName,
        activePostings: 1,
        totalApplicants: 0
      };
    } else {
      profileData = {
        roleTitle: institutionForm.contactPerson,
        institution: institutionForm.institutionName,
        totalStudents: 3200,
        placementRate: 85
      };
    }

    completeOnboarding(profileData);
    setIsCompleted(true);
    addToast({
      title: '🎉 Profile Successfully Initialized!',
      message: 'Your personalized ecosystem experience is ready.',
      type: 'success',
      duration: 3500
    });
  };

  const getDashboardRedirect = () => {
    switch (activeRole) {
      case USER_ROLES.FACULTY: return '/faculty/dashboard';
      case USER_ROLES.RECRUITER: return '/industry/dashboard';
      case USER_ROLES.INSTITUTION_ADMIN: return '/institution/dashboard';
      case USER_ROLES.ADMIN: return '/admin/dashboard';
      case USER_ROLES.STUDENT:
      default: return '/student/dashboard';
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 sm:p-6 animate-fade-in select-none">
      <div className="w-full max-w-2xl rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl p-8 sm:p-10 space-y-6">
        {!isCompleted ? (
          <>
            {/* Header */}
            <div className="space-y-1 pb-4 border-b border-white/10">
              <span className="badge badge-primary text-xs font-bold uppercase">
                {activeRole.toUpperCase()} Onboarding
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-primary">
                {activeRole === USER_ROLES.STUDENT && 'Welcome to your career journey 🎓'}
                {activeRole === USER_ROLES.FACULTY && 'Welcome, Professor 👨‍🏫'}
                {activeRole === USER_ROLES.RECRUITER && 'Welcome, Talent Partner 🏢'}
                {activeRole === USER_ROLES.INSTITUTION_ADMIN && 'Welcome, Academic Dean 🏛️'}
              </h2>
              <p className="text-xs sm:text-sm text-secondary">
                Let's personalize your dashboard parameters and target outcomes.
              </p>
            </div>

            {/* Role-Specific Form */}
            <form onSubmit={handleSubmitOnboarding} className="space-y-4">
              {/* STUDENT FORM (Section 19) */}
              {activeRole === USER_ROLES.STUDENT && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label className="input-label">University / College</label>
                      <input
                        type="text"
                        required
                        value={studentForm.institution}
                        onChange={(e) => setStudentForm({ ...studentForm, institution: e.target.value })}
                        className="input-field text-xs"
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Department / Branch</label>
                      <input
                        type="text"
                        required
                        value={studentForm.department}
                        onChange={(e) => setStudentForm({ ...studentForm, department: e.target.value })}
                        className="input-field text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label className="input-label">Degree & Major</label>
                      <input
                        type="text"
                        required
                        value={studentForm.degree}
                        onChange={(e) => setStudentForm({ ...studentForm, degree: e.target.value })}
                        className="input-field text-xs"
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Graduation Year</label>
                      <select
                        value={studentForm.graduationYear}
                        onChange={(e) => setStudentForm({ ...studentForm, graduationYear: e.target.value })}
                        className="input-field text-xs"
                      >
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label className="input-label">Target Dream Career</label>
                      <input
                        type="text"
                        required
                        value={studentForm.targetCareer}
                        onChange={(e) => setStudentForm({ ...studentForm, targetCareer: e.target.value })}
                        className="input-field text-xs"
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Preferred Domain</label>
                      <select
                        value={studentForm.preferredDomain}
                        onChange={(e) => setStudentForm({ ...studentForm, preferredDomain: e.target.value })}
                        className="input-field text-xs"
                      >
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="Cloud & DevOps">Cloud & DevOps</option>
                        <option value="Full-Stack Web">Full-Stack Web</option>
                        <option value="Cyber Security">Cyber Security</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* FACULTY FORM (Section 20) */}
              {activeRole === USER_ROLES.FACULTY && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label className="input-label">Institution</label>
                      <input
                        type="text"
                        required
                        value={facultyForm.institution}
                        onChange={(e) => setFacultyForm({ ...facultyForm, institution: e.target.value })}
                        className="input-field text-xs"
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Designation / Title</label>
                      <input
                        type="text"
                        required
                        value={facultyForm.designation}
                        onChange={(e) => setFacultyForm({ ...facultyForm, designation: e.target.value })}
                        className="input-field text-xs"
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label className="input-label">Core Research & Lab Specialization</label>
                    <input
                      type="text"
                      required
                      value={facultyForm.expertise}
                      onChange={(e) => setFacultyForm({ ...facultyForm, expertise: e.target.value })}
                      className="input-field text-xs"
                    />
                  </div>
                </>
              )}

              {/* INDUSTRY FORM (Section 21) */}
              {activeRole === USER_ROLES.RECRUITER && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label className="input-label">Company / Enterprise Name</label>
                      <input
                        type="text"
                        required
                        value={industryForm.companyName}
                        onChange={(e) => setIndustryForm({ ...industryForm, companyName: e.target.value })}
                        className="input-field text-xs"
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Industry Sector</label>
                      <input
                        type="text"
                        required
                        value={industryForm.industry}
                        onChange={(e) => setIndustryForm({ ...industryForm, industry: e.target.value })}
                        className="input-field text-xs"
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label className="input-label">Key Hiring Tech Stacks</label>
                    <input
                      type="text"
                      required
                      value={industryForm.areasOfHiring}
                      onChange={(e) => setIndustryForm({ ...industryForm, areasOfHiring: e.target.value })}
                      className="input-field text-xs"
                    />
                  </div>
                </>
              )}

              {/* INSTITUTION FORM (Section 22) */}
              {activeRole === USER_ROLES.INSTITUTION_ADMIN && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label className="input-label">University Name</label>
                      <input
                        type="text"
                        required
                        value={institutionForm.institutionName}
                        onChange={(e) => setInstitutionForm({ ...institutionForm, institutionName: e.target.value })}
                        className="input-field text-xs"
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Affiliation / Status</label>
                      <input
                        type="text"
                        required
                        value={institutionForm.type}
                        onChange={(e) => setInstitutionForm({ ...institutionForm, type: e.target.value })}
                        className="input-field text-xs"
                      />
                    </div>
                  </div>
                </>
              )}

              <Button
                variant="primary"
                size="md"
                type="submit"
                iconRight={ArrowRight}
                className="w-full shadow-lg shadow-indigo-600/25 mt-4"
              >
                Complete Onboarding & Enter Portal →
              </Button>
            </form>
          </>
        ) : (
          /* Profile Initialized Success State (Sections 19-22) */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald mx-auto shadow-lg shadow-emerald-950/50">
              <CheckCircle2 size={32} />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-black font-heading text-primary">
                Profile Created Successfully! 🎉
              </h3>
              <p className="text-sm text-secondary max-w-md mx-auto">
                {activeRole === USER_ROLES.STUDENT && 'Next recommended action: Take your baseline skill assessment to unlock match scorecards.'}
                {activeRole === USER_ROLES.FACULTY && 'Next recommended action: Explore sponsored research grants and FDP nominations.'}
                {activeRole === USER_ROLES.RECRUITER && 'Next recommended action: Review AI pre-matched candidate pool or post a job.'}
                {activeRole === USER_ROLES.INSTITUTION_ADMIN && 'Next recommended action: Review departmental skill gap intelligence reports.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              {activeRole === USER_ROLES.STUDENT ? (
                <>
                  <Button
                    variant="primary"
                    size="md"
                    iconRight={ArrowRight}
                    onClick={() => onNavigate('/student/assessment')}
                  >
                    Start Skill Assessment
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => onNavigate(getDashboardRedirect())}
                  >
                    Go to Dashboard
                  </Button>
                </>
              ) : (
                <Button
                  variant="primary"
                  size="md"
                  iconRight={ArrowRight}
                  onClick={() => onNavigate(getDashboardRedirect())}
                >
                  Enter Your Command Center
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
