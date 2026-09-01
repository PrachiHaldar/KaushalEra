import React from 'react';
import { Button } from '../../components/common/Button';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  GraduationCap,
  Briefcase,
  Layers,
  Award,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export const AudienceLandingPage = ({ type = 'students', onNavigate }) => {
  const configs = {
    students: {
      badge: '👨‍🎓 Student & Graduate Acceleration',
      title: 'Accelerate Your Path to Tier-1 Careers & Paid Internships',
      tagline: 'Standardized skill assessments, AI career roadmaps, and direct verified placements with zero keyword screening.',
      primaryCta: 'Create Free Student Profile',
      primaryTarget: '/signup',
      metrics: [
        { label: 'Avg Salary Hike', value: '+35%' },
        { label: 'Placement Conversion', value: '87%' },
        { label: 'Active Opportunities', value: '1,200+' }
      ],
      features: [
        { title: 'Visual Skill Radar', desc: 'Real-time 7-axis competency benchmark comparing you against top 5% of candidate pool.' },
        { title: 'Interactive Learning Tree', desc: 'Prerequisite node maps with curated PDFs, cheatsheets, and containerization labs.' },
        { title: 'Paid Industrial Internships', desc: 'Verified roles with weekly progress workspace, mentor feedback, and academic credits.' },
        { title: 'Digital Portfolio & Badges', desc: 'Cryptographically verified badges for algorithms, OOP, database design, and capstones.' }
      ]
    },
    academicians: {
      badge: '👨‍🏫 Faculty Enablement & Research Hub',
      title: 'Empower Educators with Industrial Grants & Joint Labs',
      tagline: 'Connect academic research directly to corporate applications, funded FDPs, and paid technology consultancies.',
      primaryCta: 'Join Faculty Research Network',
      primaryTarget: '/signup',
      metrics: [
        { label: 'Active Grant Pool', value: '₹77 Lakhs' },
        { label: 'Sponsored FDPs', value: '12 Active' },
        { label: 'Consultancies', value: 'Up to ₹2L/mo' }
      ],
      features: [
        { title: 'Industry Collaboration Index', desc: 'Track joint publications, sponsored corporate labs, and undergraduate co-authorships.' },
        { title: 'Sponsored FDP Programs', desc: 'AICTE, NVIDIA, and AWS certified training courses keeping lab curricula state-of-the-art.' },
        { title: 'Enterprise Consultancy', desc: 'Offer subject-matter expertise for architecture reviews and predictive ML pipelines.' },
        { title: 'Student Mentorship Logs', desc: 'Structured progress evaluations synced with institutional credit transfer.' }
      ]
    },
    industry: {
      badge: '🏢 Corporate Talent & Academia Partnership',
      title: 'Hire Pre-Assessed Engineering Talent with Verified Skills',
      tagline: 'Eliminate resume keyword spam with multi-factor skill scorecards, GitHub code quality verification, and seamless campus drives.',
      primaryCta: 'Post Jobs & Hire Talent',
      primaryTarget: '/signup',
      metrics: [
        { label: 'Candidate Match Rate', value: '92%' },
        { label: 'Hiring Turnaround', value: '4x Faster' },
        { label: 'Verified Candidates', value: '25,000+' }
      ],
      features: [
        { title: 'AI Match Engine', desc: 'Automatic candidate scoring across verified assessments, GPA, and GitHub projects.' },
        { title: '1-Click Shortlisting', desc: 'Schedule technical rounds directly with pre-screened students.' },
        { title: 'Sponsored Capstones', desc: 'Engage high-potential student cohorts through real-world corporate problem statements.' },
        { title: 'Digital MoU Governance', desc: 'Formalize academic partnerships with top engineering universities across the country.' }
      ]
    },
    institutions: {
      badge: '🏛️ University & College Administration',
      title: 'Drive Accreditation Excellence & Placement Outcomes',
      tagline: 'Executive visibility into departmental skill readiness, NAAC/NBA compliance exports, and corporate placement conversion.',
      primaryCta: 'Onboard Your Institution',
      primaryTarget: '/signup',
      metrics: [
        { label: 'Overall Placement Rate', value: '87%' },
        { label: 'Industry Partners', value: '86 MoUs' },
        { label: 'Enrolled Students', value: '4,250' }
      ],
      features: [
        { title: 'Department Analytics Drill-Down', desc: 'Identify skill deficits across CS, IT, AI-DS, and ECE before recruitment drives.' },
        { title: 'Accreditation Ready Exports', desc: 'One-click data export for NIRF, NAAC Criteria 5, and NBA outcome-based education.' },
        { title: 'Corporate MoU Management', desc: 'Track active industrial research labs and faculty enablement hours in one dashboard.' },
        { title: 'Placement Office Command Center', desc: 'Real-time visibility into student offer status and average CTC metrics.' }
      ]
    }
  };

  const config = configs[type] || configs.students;

  return (
    <div className="space-y-20 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in select-none">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles size={13} className="text-cyan-400" />
          <span>{config.badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-primary tracking-tight">
          {config.title}
        </h1>
        <p className="text-base text-secondary leading-relaxed">
          {config.tagline}
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Button
            variant="glow"
            size="lg"
            iconRight={ArrowRight}
            onClick={() => onNavigate(config.primaryTarget)}
          >
            {config.primaryCta}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onNavigate('/demo')}
          >
            Explore Live Demo
          </Button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {config.metrics.map((m, idx) => (
          <div key={idx} className="card p-6 bg-slate-900/60 border-white/10 text-center space-y-1">
            <div className="text-4xl font-black font-heading text-brand">{m.value}</div>
            <div className="text-xs font-semibold text-secondary">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-primary text-center">
          Engineered for Tangible Outcomes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.features.map((feat, idx) => (
            <div key={idx} className="card p-6 bg-slate-900/70 border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald shrink-0" />
                <h3 className="text-base font-bold font-heading text-primary">{feat.title}</h3>
              </div>
              <p className="text-xs text-secondary leading-relaxed pl-6">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
