import React from 'react';
import { useAuthRole, USER_ROLES } from '../../context/AuthRoleContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Building2,
  Briefcase,
  ShieldCheck,
  Award,
  Layers,
  CheckCircle2
} from 'lucide-react';

export const DemoPage = ({ onNavigate }) => {
  const { loginAsDemoRole } = useAuthRole();
  const { addToast } = useToast();

  const handleLaunchDemo = (role, redirectPath) => {
    const user = loginAsDemoRole(role);
    addToast({
      title: `⚡ Authenticated as ${user.name}`,
      message: `Role: ${user.roleTitle}. Redirecting to portal...`,
      type: 'success',
      duration: 3000
    });
    onNavigate(redirectPath);
  };

  const demoCards = [
    {
      role: USER_ROLES.STUDENT,
      name: 'Alex Sharma',
      title: 'B.Tech Student (Class of 2027)',
      email: 'student@demo.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      badge: 'Student Persona',
      color: 'border-indigo-500/40 bg-indigo-950/20',
      redirect: '/student/dashboard',
      highlights: [
        'Career Readiness Score (78%)',
        'Interactive SVG 7-Axis Skill Radar',
        'Comparative Skill Gap Visualizer ("Fix Gap →")',
        'Interactive Prerequisite Skill Tree',
        'Proctored Assessment Quiz with Timer & Confetti',
        'Application Kanban Board & Active Internship Workspace'
      ]
    },
    {
      role: USER_ROLES.RECRUITER,
      name: 'Marcus Vance',
      title: 'Lead Technical Recruiter • TechNova Labs',
      email: 'recruiter@demo.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      badge: 'Recruiter Persona',
      color: 'border-teal-500/40 bg-teal-950/20',
      redirect: '/industry/dashboard',
      highlights: [
        'AI Candidate Match Engine (92% Match Scorecard)',
        'Multi-factor Candidate Scoring (Skills, GPA, GitHub)',
        '1-Click Candidate Shortlist & Interview Scheduling',
        'Recruitment Pipeline Funnel Analytics',
        'Job & Internship Posting Tools'
      ]
    },
    {
      role: USER_ROLES.FACULTY,
      name: 'Dr. Ramesh Sharma',
      title: 'Professor & Head of AI Research Lab',
      email: 'faculty@demo.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      badge: 'Faculty Persona',
      color: 'border-amber-500/40 bg-amber-950/20',
      redirect: '/faculty/dashboard',
      highlights: [
        'Industry Collaboration Score (78%)',
        'Active Corporate Research Labs (₹77 Lakhs Grant Pool)',
        'Recommended NVIDIA & AWS Faculty Enablement Programs',
        'Paid Enterprise Architecture Consultancy Matching'
      ]
    },
    {
      role: USER_ROLES.INSTITUTION_ADMIN,
      name: 'Dean K. Verma',
      title: 'Dean of Academics & Industry Partnerships',
      email: 'institution@demo.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      badge: 'University Dean Persona',
      color: 'border-rose-500/40 bg-rose-950/20',
      redirect: '/institution/dashboard',
      highlights: [
        'Institution Analytics Command Center (4,250 Students)',
        'Interactive Department Intelligence Drill-Down (CS/IT/ECE)',
        'Institutional Skill Gap Deficit Analysis',
        'NAAC/NBA Accreditation Ready Exports'
      ]
    },
    {
      role: USER_ROLES.ADMIN,
      name: 'Sarah Connor',
      title: 'Root Governance & System Administrator',
      email: 'admin@demo.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      badge: 'System Admin Persona',
      color: 'border-purple-500/40 bg-purple-950/20',
      redirect: '/admin/dashboard',
      highlights: [
        'Platform-wide Multi-Tenant Governance',
        'Pending Credential Verification Queue',
        'Domain & Skill Catalog Creation Modules',
        'Security Uptime & Audit Trails'
      ]
    }
  ];

  return (
    <div className="space-y-12 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in select-none">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles size={13} className="text-amber-400" />
          <span>Evaluation & Demo Sandbox</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-primary tracking-tight">
          1-Click Role Exploration Sandbox
        </h1>
        <p className="text-sm sm:text-base text-secondary leading-relaxed">
          Select any role below to immediately experience KaushalEra with pre-seeded data, active assessment scorecards, and live dashboards.
        </p>
      </div>

      {/* Grid of 5 Demo Personas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoCards.map((demo) => (
          <div
            key={demo.role}
            className={`p-6 rounded-3xl border ${demo.color} shadow-xl flex flex-col justify-between space-y-6 hover:scale-[1.02] transition-all`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="badge badge-neutral text-xs font-bold">{demo.badge}</span>
                <span className="text-[11px] text-muted font-mono">{demo.email}</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={demo.avatar}
                  alt={demo.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-white/20 shadow-md"
                />
                <div>
                  <h3 className="text-lg font-bold font-heading text-primary">{demo.name}</h3>
                  <div className="text-xs text-brand font-medium leading-tight mt-0.5">{demo.title}</div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted">Key Workflows Demonstrated:</div>
                <ul className="space-y-1.5 text-xs text-secondary">
                  {demo.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-snug">
                      <CheckCircle2 size={13} className="text-emerald shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              iconRight={ArrowRight}
              className="w-full shadow-lg"
              onClick={() => handleLaunchDemo(demo.role, demo.redirect)}
            >
              Launch as {demo.name.split(' ')[0]}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
