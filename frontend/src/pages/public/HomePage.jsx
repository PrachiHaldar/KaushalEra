import React, { useState, useEffect } from 'react';
import { useAppData } from '../../context/AppDataContext';
import { useAuthRole } from '../../context/AuthRoleContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { LoginRequiredModal } from '../../components/public/LoginRequiredModal';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  GraduationCap,
  Briefcase,
  Layers,
  Globe,
  BrainCircuit,
  BookOpen,
  Award,
  TrendingUp,
  MapPin,
  Clock,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const HomePage = ({ onNavigate }) => {
  const { domains, jobs, internships } = useAppData();
  const { isAuthenticated } = useAuthRole();
  const [activeEcosystem, setActiveEcosystem] = useState('student');
  const [activeStep, setActiveStep] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // 8-step How It Works journey (Section 5)
  const journeySteps = [
    {
      num: '01',
      title: 'Assess',
      headline: 'Diagnostic Baseline Testing',
      description: 'Discover your verified baseline in programming, algorithms, database architecture, and soft skills through standardized assessments.',
      cta: 'Take Skill Assessment',
      icon: CheckCircle2,
      target: '/login'
    },
    {
      num: '02',
      title: 'Discover',
      headline: 'Understand Exact Skill Requisites',
      description: 'Analyze precise competency gaps mapped against 500+ active enterprise job descriptions and recruiter benchmarks.',
      cta: 'Explore Career Gaps',
      icon: TrendingUp,
      target: '/careers'
    },
    {
      num: '03',
      title: 'Learn',
      headline: 'Personalized Learning Roadmaps',
      description: 'Access curated technical guides, cheatsheets, and interactive roadmaps tailored to close your specific gap.',
      cta: 'Browse Learning Paths',
      icon: BookOpen,
      target: '/domains'
    },
    {
      num: '04',
      title: 'Practice',
      headline: 'Hands-on Labs & Quizzes',
      description: 'Sharpen your engineering intuition with timed code challenges and real-world system architecture exercises.',
      cta: 'Explore Resources',
      icon: Layers,
      target: '/resources'
    },
    {
      num: '05',
      title: 'Build',
      headline: 'Industry-Verified Capstones',
      description: 'Develop production-grade capstones with automated code profiling and mentor sign-offs for your public portfolio.',
      cta: 'View Verified Projects',
      icon: Award,
      target: '/about'
    },
    {
      num: '06',
      title: 'Intern',
      headline: 'Industrial Immersion & Credits',
      description: 'Match with paid enterprise internships, track weekly deliverables, and earn academic credits with mentor evaluations.',
      cta: 'Explore Internships',
      icon: Briefcase,
      target: '/internships'
    },
    {
      num: '07',
      title: 'Collaborate',
      headline: 'Faculty & Industry Joint Labs',
      description: 'Enable educators with sponsored FDPs, research grants, and real-time curriculum alignment with tech giants.',
      cta: 'View Faculty Hub',
      icon: GraduationCap,
      target: '/academicians'
    },
    {
      num: '08',
      title: 'Get Hired',
      headline: 'Direct Verification Placement',
      description: 'Fast-track full-time job offers without redundant screening via cryptographically verified skill profiles.',
      cta: 'Browse Full-Time Jobs',
      icon: Sparkles,
      target: '/jobs'
    }
  ];

  // 4 Ecosystems content (Section 6)
  const ecosystems = {
    student: {
      title: 'For Students & Graduates',
      tagline: 'Discover skills, learn, find internships and get hired.',
      description: 'Bridge the academic gap with AI career readiness scores, verified skill profiles, curated study guides, and direct placement opportunities.',
      cta: 'Explore Student Portal',
      target: '/students',
      features: ['Personalized Skill Radar', 'Automated Skill Gap Analysis', 'Paid Industrial Internships', 'Verified Digital Portfolio']
    },
    faculty: {
      title: 'For Faculty & Educators',
      tagline: 'Connect with industries through FDPs, research and training.',
      description: 'Access funded corporate research labs, AICTE/NVIDIA sponsored Faculty Enablement Programs, and subject-matter consultancy opportunities.',
      cta: 'Explore Faculty Portal',
      target: '/academicians',
      features: ['Industry Collaboration Index', 'Sponsored Research Grants', 'Faculty Enablement Programs', 'Student Mentorship Logs']
    },
    industry: {
      title: 'For Industry & Recruiters',
      tagline: 'Find skilled talent and collaborate with academia.',
      description: 'Hire pre-assessed candidates with transparent skill match breakdowns, post capstone challenges, and execute campus drives with zero friction.',
      cta: 'Partner With Academia',
      target: '/industry',
      features: ['AI Candidate Match Engine', 'Verified Coding Scorecards', 'Campus Recruitment Pipeline', 'Academic Joint Labs']
    },
    institution: {
      title: 'For Universities & Institutions',
      tagline: 'Measure skills, internships and placement outcomes.',
      description: 'Gain executive visibility into departmental skill readiness, NAAC/NBA accreditation reports, and enterprise placement conversion metrics.',
      cta: 'Explore Institution Portal',
      target: '/institutions',
      features: ['Department Analytics Drill-Down', 'Placement Outcome Tracking', 'Accreditation Export Reports', 'Corporate MoU Governance']
    }
  };

  const activeEco = ecosystems[activeEcosystem];

  return (
    <div className="space-y-24 py-6 animate-fade-in select-none">
      {/* 1. HERO SECTION (Sections 3 & 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-cyan-400 animate-spin" />
              <span>National Skill & Education Ecosystem</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-primary tracking-tight leading-[1.1]">
              Connect Academia with <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-teal-400">Industry</span>.
            </h1>

            <p className="text-lg sm:text-xl font-medium text-brand font-heading">
              Assess Skills. Learn. Build. Intern. Collaborate. Get Hired.
            </p>

            <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-2xl">
              A unified platform connecting students, academicians, institutions, and industries through continuous skill development, curated resources, paid internships, placements, and collaborative research.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                variant="glow"
                size="lg"
                iconRight={ArrowRight}
                onClick={() => onNavigate(isAuthenticated ? '/student/dashboard' : '/signup')}
              >
                Start Your Journey
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate('/jobs')}
              >
                Explore Opportunities
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => onNavigate('/industry')}
              >
                Partner With Us →
              </Button>
            </div>
          </div>

          {/* Right Hero: Ecosystem Visual Animation (Section 4) */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-7 rounded-3xl bg-gradient-to-br from-slate-900/90 via-indigo-950/60 to-slate-950 border border-white/15 shadow-2xl overflow-hidden">
              {/* Background glows */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-500/20 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-3 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-muted font-heading">
                  Unified Closed-Loop Engine
                </div>

                {/* Vertical Interactive Connected Nodes */}
                <div className="space-y-2.5 pt-2">
                  <div className="p-3 rounded-2xl bg-indigo-600/25 border border-indigo-500/40 flex items-center justify-between text-xs font-bold text-primary shadow-md">
                    <span className="flex items-center gap-2">👨‍🎓 Student & Learner</span>
                    <span className="badge badge-primary text-[10px]">Assess</span>
                  </div>
                  <div className="text-indigo-400 text-xs font-bold flex justify-center">↕</div>

                  <div className="p-3 rounded-2xl bg-teal-600/20 border border-teal-500/40 flex items-center justify-between text-xs font-bold text-primary shadow-md">
                    <span className="flex items-center gap-2">⚡ Verified Skills Radar</span>
                    <span className="badge badge-teal text-[10px]">Profile</span>
                  </div>
                  <div className="text-teal-400 text-xs font-bold flex justify-center">↕</div>

                  <div className="p-3 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-between text-xs font-bold text-primary shadow-md">
                    <span className="flex items-center gap-2">📚 Learning & Capstones</span>
                    <span className="badge badge-purple text-[10px]">Build</span>
                  </div>
                  <div className="text-purple-400 text-xs font-bold flex justify-center">↕</div>

                  <div className="p-3 rounded-2xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-between text-xs font-bold text-primary shadow-md">
                    <span className="flex items-center gap-2">🏢 Industry & Mentors</span>
                    <span className="badge badge-warning text-[10px]">Collaborate</span>
                  </div>
                  <div className="text-amber-400 text-xs font-bold flex justify-center">↕</div>

                  <div className="p-3 rounded-2xl bg-emerald-600/25 border border-emerald-500/40 flex items-center justify-between text-xs font-bold text-primary shadow-md">
                    <span className="flex items-center gap-2">💼 Paid Internship & Placement</span>
                    <span className="badge badge-success text-[10px]">Get Hired</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLATFORM STATISTICS (Section 7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="card p-6 bg-slate-900/60 border-white/10 text-center">
            <div className="text-3xl sm:text-4xl font-black font-heading text-brand">25,000+</div>
            <div className="text-xs font-semibold text-secondary mt-1">Verified Students</div>
          </div>
          <div className="card p-6 bg-slate-900/60 border-white/10 text-center">
            <div className="text-3xl sm:text-4xl font-black font-heading text-teal">500+</div>
            <div className="text-xs font-semibold text-secondary mt-1">Industry Partners</div>
          </div>
          <div className="card p-6 bg-slate-900/60 border-white/10 text-center">
            <div className="text-3xl sm:text-4xl font-black font-heading text-amber">1,200+</div>
            <div className="text-xs font-semibold text-secondary mt-1">Active Internships</div>
          </div>
          <div className="card p-6 bg-slate-900/60 border-white/10 text-center">
            <div className="text-3xl sm:text-4xl font-black font-heading text-purple-400">850+</div>
            <div className="text-xs font-semibold text-secondary mt-1">Learning Resources</div>
          </div>
          <div className="card p-6 bg-slate-900/60 border-white/10 text-center col-span-2 sm:col-span-1">
            <div className="text-3xl sm:text-4xl font-black font-heading text-emerald">300+</div>
            <div className="text-xs font-semibold text-secondary mt-1">Career Pathways</div>
          </div>
        </div>
      </section>

      {/* 3. FOUR USER ECOSYSTEMS: "WHO ARE YOU?" (Section 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Targeted Ecosystem Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-primary">
            Who Are You in the Ecosystem?
          </h2>
          <p className="text-sm text-secondary max-w-xl mx-auto">
            Choose your role to explore how KaushalEra personalizes your experience.
          </p>
        </div>

        {/* 4 Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {[
            { key: 'student', label: '👨‍🎓 Student', color: 'indigo' },
            { key: 'faculty', label: '👨‍🏫 Faculty / Academician', color: 'amber' },
            { key: 'industry', label: '🏢 Industry / Recruiter', color: 'teal' },
            { key: 'institution', label: '🏛️ Institution / University', color: 'rose' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveEcosystem(tab.key)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                activeEcosystem === tab.key
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                  : 'bg-slate-900/80 text-secondary hover:text-primary hover:bg-white/5 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Card Display */}
        <div className="card p-8 lg:p-10 bg-slate-900/80 border-white/15 shadow-2xl rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="badge badge-primary text-xs font-bold">{activeEco.title}</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-primary">
                {activeEco.tagline}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {activeEco.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {activeEco.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-primary">
                    <CheckCircle2 size={15} className="text-emerald shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  iconRight={ArrowRight}
                  onClick={() => onNavigate(activeEco.target)}
                >
                  {activeEco.cta}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-white/10 text-center space-y-4">
              <div className="text-xs uppercase font-bold text-muted">Ready to get started?</div>
              <div className="text-xl font-bold font-heading text-primary">Join thousands on KaushalEra</div>
              <Button
                variant="accent"
                size="sm"
                className="w-full"
                onClick={() => onNavigate(isAuthenticated ? activeEco.target : '/signup')}
              >
                Create Free Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE 8-STEP "HOW IT WORKS" (Section 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">End-to-End Methodology</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-primary">
            How KaushalEra Works
          </h2>
          <p className="text-sm text-secondary max-w-xl mx-auto">
            An 8-stage interactive journey transforming academic learners into industry-ready leaders.
          </p>
        </div>

        {/* 8 Horizontal Step Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
          {journeySteps.map((st, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={st.num}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-2xl text-left transition-all border ${
                  isActive
                    ? 'bg-indigo-600 text-white font-bold border-indigo-400 shadow-lg shadow-indigo-600/30 scale-105'
                    : 'bg-slate-900/60 border-white/5 text-muted hover:text-primary hover:border-white/15'
                }`}
              >
                <div className="text-[10px] font-mono">{st.num}</div>
                <div className="text-xs font-bold truncate mt-0.5">{st.title}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Showcase */}
        {(() => {
          const currentStep = journeySteps[activeStep];
          const Icon = currentStep.icon;

          return (
            <div className="card p-8 bg-slate-900/80 border-white/15 shadow-2xl rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-brand font-mono font-bold text-xs uppercase">
                  <span>Stage {currentStep.num}</span> • <span>{currentStep.title}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-primary">
                  {currentStep.headline}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {currentStep.description}
                </p>
                <div className="pt-3">
                  <Button
                    variant="primary"
                    size="md"
                    iconRight={ArrowRight}
                    onClick={() => {
                      if (!isAuthenticated && currentStep.target === '/login') {
                        setShowLoginModal(true);
                      } else {
                        onNavigate(currentStep.target);
                      }
                    }}
                  >
                    {currentStep.cta}
                  </Button>
                </div>
              </div>

              <div className="md:col-span-4 flex items-center justify-center p-8 bg-slate-950/60 rounded-2xl border border-white/10">
                <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-brand">
                  <Icon size={40} />
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 5. FEATURED DOMAINS (Section 8) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Technology Specializations</span>
            <h2 className="text-3xl font-extrabold font-heading text-primary mt-1">
              Explore Industry Domains
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconRight={ArrowRight}
            onClick={() => onNavigate('/domains')}
          >
            View All Domains
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {domains.slice(0, 4).map((d) => (
            <div
              key={d.id}
              onClick={() => onNavigate(`/domains/${d.id}`)}
              className="card p-5 border-white/10 hover:border-indigo-500/50 bg-slate-900/60 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-brand font-bold group-hover:scale-105 transition-transform">
                    <BrainCircuit size={20} />
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted border border-white/5">
                    {d.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold font-heading text-primary group-hover:text-brand transition-colors mb-1">
                  {d.title}
                </h3>
                <p className="text-xs text-secondary line-clamp-2 leading-relaxed mb-4">
                  {d.tagline}
                </p>

                <div className="text-[11px] text-muted space-y-1 mb-4">
                  <div>🎯 {d.careerPathsCount} Career Paths</div>
                  <div>⚡ {d.skillsCount} Core Skills</div>
                  <div>📚 {d.resourcesCount} Study Guides</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-brand font-semibold group-hover:translate-x-1 transition-transform">
                <span>Explore Domain</span>
                <ArrowRight size={13} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FEATURED OPPORTUNITIES (Section 10) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">Live Recruitment Marketplace</span>
            <h2 className="text-3xl font-extrabold font-heading text-primary mt-1">
              Featured Internships & Jobs
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconRight={ArrowRight}
            onClick={() => onNavigate('/jobs')}
          >
            Explore Marketplace
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {internships.slice(0, 3).map((intern) => (
            <div
              key={intern.id}
              onClick={() => onNavigate('/internships')}
              className="card p-6 border-white/10 hover:border-teal-500/40 bg-slate-900/60 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="text-xs font-bold text-teal">{intern.company}</div>
                    <h3 className="text-base font-bold font-heading text-primary group-hover:text-brand transition-colors">
                      {intern.title}
                    </h3>
                  </div>
                  <span className="badge badge-teal text-xs font-extrabold">
                    {intern.skillMatch}% Match
                  </span>
                </div>

                <div className="text-xs font-mono font-bold text-emerald mb-3">
                  {intern.stipend} • {intern.location}
                </div>

                <p className="text-xs text-secondary line-clamp-2 leading-relaxed mb-4">
                  {intern.description}
                </p>

                <div className="flex items-center gap-1.5 flex-wrap mb-4">
                  {intern.skills.slice(0, 3).map((sk, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-secondary">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-muted flex items-center gap-1">
                  <Clock size={12} /> Deadline: {intern.deadline}
                </span>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isAuthenticated) {
                      setShowLoginModal(true);
                    } else {
                      onNavigate('/opportunities');
                    }
                  }}
                >
                  Quick Apply
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 lg:p-14 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/40 shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-primary">
              Ready to Accelerate Your Career or Hire Verified Talent?
            </h2>
            <p className="text-sm text-secondary">
              Join KaushalEra today and gain access to standardized assessments, verified digital portfolios, and direct industry placement pipelines.
            </p>
            <div className="pt-3 flex flex-wrap justify-center gap-3">
              <Button
                variant="glow"
                size="lg"
                iconRight={ArrowRight}
                onClick={() => onNavigate(isAuthenticated ? '/student/dashboard' : '/signup')}
              >
                Create Your Account Free
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate('/about')}
              >
                Learn About Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Login Required Modal Gate */}
      <LoginRequiredModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onNavigate={onNavigate}
      />
    </div>
  );
};
