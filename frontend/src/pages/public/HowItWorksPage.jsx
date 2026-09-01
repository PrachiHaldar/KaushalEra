import React, { useState } from 'react';
import { Button } from '../../components/common/Button';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Building2,
  Briefcase,
  Layers,
  Award,
  TrendingUp,
  BrainCircuit,
  FileCheck
} from 'lucide-react';

export const HowItWorksPage = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('student');

  const content = {
    student: {
      title: 'The Student Journey: From Learner to Industry Professional',
      subtitle: 'Complete end-to-end pathway to achieve verified career readiness.',
      steps: [
        {
          num: '1',
          title: 'Take Proctored Baseline Assessment',
          desc: 'Attempt interactive multiple-choice and code challenges to establish your verified level in core computer science, math, and soft skills.',
          cta: 'Take Assessment',
          target: '/login'
        },
        {
          num: '2',
          title: 'Receive Visual Skill Radar & Gap Report',
          desc: 'Your profile instantly maps against live enterprise job benchmarks, pinpointing exact gaps (e.g. 45% ML delta) and career unlocks.',
          cta: 'Explore Gaps',
          target: '/careers'
        },
        {
          num: '3',
          title: 'Follow Interactive Skill Roadmaps',
          desc: 'Work through prerequisite node trees, curated study PDFs, cheatsheets, and hands-on containerization labs.',
          cta: 'Browse Roadmaps',
          target: '/domains'
        },
        {
          num: '4',
          title: 'Build & Verify Capstone Projects',
          desc: 'Submit GitHub repositories with automated unit test suites and receive official mentor sign-offs on your digital portfolio.',
          cta: 'View Portfolios',
          target: '/about'
        },
        {
          num: '5',
          title: 'Apply for Matched Internships & Jobs',
          desc: 'Browse openings with prominent 90%+ match badges and track your recruitment journey via the real-time application Kanban board.',
          cta: 'Explore Jobs',
          target: '/jobs'
        }
      ]
    },
    faculty: {
      title: 'The Faculty Journey: Industrial Research & Enablement',
      subtitle: 'Empowering educators with corporate joint labs and funded grants.',
      steps: [
        {
          num: '1',
          title: 'Create Faculty Expertise Profile',
          desc: 'List your research specializations, publication tracks, Ph.D. labs, and desired areas of corporate collaboration.',
          cta: 'Join Faculty Hub',
          target: '/signup'
        },
        {
          num: '2',
          title: 'Match with Sponsored Research Grants',
          desc: 'Discover active industrial RFP grants (up to ₹75 Lakhs) sponsored by technology partners in AI, IoT, and Cloud.',
          cta: 'Explore Grants',
          target: '/academicians'
        },
        {
          num: '3',
          title: 'Enroll in Sponsored FDP Programs',
          desc: 'Participate in AICTE, NVIDIA, and AWS certified Faculty Enablement Programs to keep lab curricula state-of-the-art.',
          cta: 'View FDPs',
          target: '/academicians'
        },
        {
          num: '4',
          title: 'Provide Paid Enterprise Consultancy',
          desc: 'Connect with tech startups and corporations seeking academic advisors, system reviewers, and fraud-detection experts.',
          cta: 'Consultancy Matching',
          target: '/academicians'
        }
      ]
    },
    industry: {
      title: 'The Industry Journey: Precision Talent Acquisition',
      subtitle: 'Zero resume noise with verified skill scorecards.',
      steps: [
        {
          num: '1',
          title: 'Create Company Profile & Hiring Criteria',
          desc: 'Define role requirements, required competency thresholds, and tech stack expectations in under 2 minutes.',
          cta: 'Post an Opening',
          target: '/industry'
        },
        {
          num: '2',
          title: 'AI Multi-Factor Candidate Matchmaker',
          desc: 'Our engine ranks students based on real assessment scorecards, GitHub code quality, and verified university GPA.',
          cta: 'See Match Engine',
          target: '/industry'
        },
        {
          num: '3',
          title: 'Direct 1-Click Shortlist & Interview Invite',
          desc: 'Shortlist top 5% candidates without keyword spam and schedule technical rounds directly on the platform.',
          cta: 'Partner With Us',
          target: '/contact'
        },
        {
          num: '4',
          title: 'Execute Campus Drives & Joint Capstones',
          desc: 'Sponsor capstone challenges, mentor high-potential cohorts, and convert top interns into permanent engineering hires.',
          cta: 'Campus Drives',
          target: '/industry'
        }
      ]
    },
    institution: {
      title: 'The Institution Journey: Accreditation & Placement Excellence',
      subtitle: 'Executive intelligence and curriculum-to-career alignment.',
      steps: [
        {
          num: '1',
          title: 'Onboard University Departments & Cohorts',
          desc: 'Sync student rosters and department programs to establish a continuous baseline across all engineering semesters.',
          cta: 'Institution Setup',
          target: '/institutions'
        },
        {
          num: '2',
          title: 'Track Real-Time Department Skill Readiness',
          desc: 'Identify curriculum deficits (e.g. 42% MLOps gap in CS) before placement season begins.',
          cta: 'View Analytics Demo',
          target: '/institutions'
        },
        {
          num: '3',
          title: 'Connect with 500+ Verified Corporate Partners',
          desc: 'Sign digital MoUs, facilitate paid industrial internships, and monitor student progress in real-time.',
          cta: 'Partner Network',
          target: '/institutions'
        },
        {
          num: '4',
          title: 'Export NAAC & NBA Accreditation Reports',
          desc: 'Generate cryptographically verified compliance decks for institutional rankings and NIRF placement audits.',
          cta: 'Accreditation Reports',
          target: '/institutions'
        }
      ]
    }
  };

  const current = content[activeTab];

  return (
    <div className="space-y-16 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in select-none">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles size={13} className="text-teal" />
          <span>Interactive Ecosystem Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-primary tracking-tight">
          How KaushalEra Works
        </h1>
        <p className="text-sm sm:text-base text-secondary leading-relaxed">
          Select an ecosystem stakeholder to discover the step-by-step methodology powering their success.
        </p>
      </div>

      {/* Tabs Selector (Section 12) */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {[
          { key: 'student', label: '👨‍🎓 For Students' },
          { key: 'faculty', label: '👨‍🏫 For Faculty' },
          { key: 'industry', label: '🏢 For Industry' },
          { key: 'institution', label: '🏛️ For Institutions' }
        ].map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeTab === t.key
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                : 'bg-slate-900/80 text-secondary hover:text-primary hover:bg-white/5 border border-white/5'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content Display */}
      <div className="card p-8 lg:p-10 bg-slate-900/80 border-white/10 shadow-2xl rounded-3xl space-y-8">
        <div className="space-y-2 border-b border-white/10 pb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-primary">
            {current.title}
          </h2>
          <p className="text-sm text-secondary">
            {current.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {current.steps.map((st, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/70 border border-white/5 flex flex-col justify-between space-y-4 hover:border-indigo-500/40 transition-all group"
            >
              <div className="space-y-2">
                <span className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center font-mono text-xs">
                  0{st.num}
                </span>
                <h3 className="text-base font-bold font-heading text-primary group-hover:text-brand transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  iconRight={ArrowRight}
                  onClick={() => onNavigate(st.target)}
                >
                  {st.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
