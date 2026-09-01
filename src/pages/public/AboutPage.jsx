import React from 'react';
import { Button } from '../../components/common/Button';
import {
  Sparkles,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  Users,
  Building2,
  GraduationCap,
  Briefcase,
  Layers,
  Award,
  Globe
} from 'lucide-react';

export const AboutPage = ({ onNavigate }) => {
  return (
    <div className="space-y-20 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in select-none">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles size={13} className="text-cyan-400" />
          <span>Our Mission & Vision</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-primary tracking-tight">
          Bridging the Academia-Industry Divide
        </h1>
        <p className="text-base text-secondary leading-relaxed">
          KaushalEra was founded to solve the fundamental disconnect between conventional university curricula and modern software, AI, and engineering industry requirements.
        </p>
      </div>

      {/* 1. The Problem: The Skills Gap (Section 11) */}
      <div className="card p-8 lg:p-10 bg-slate-900/70 border-white/10 shadow-2xl rounded-3xl space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-400">The Problem</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-primary">
            Why Traditional Placement Models Fall Short
          </h2>
          <p className="text-sm text-secondary leading-relaxed">
            Every year, over 1.5 million engineering and computer science students graduate, yet over 80% lack verified hands-on production readiness in tools like Docker, PyTorch, and distributed microservices.
          </p>
        </div>

        {/* Visual Gap Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center pt-2">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
            <GraduationCap size={32} className="text-indigo-400 mx-auto" />
            <h3 className="text-base font-bold text-primary font-heading">Academic Learning</h3>
            <p className="text-xs text-muted">Theoretical concepts, textbook exams, dated syllabus benchmarks.</p>
          </div>

          <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-500/40 space-y-2">
            <TrendingDown size={32} className="text-rose-400 mx-auto animate-pulse" />
            <h3 className="text-base font-bold text-rose-400 font-heading">THE 45% SKILL GAP</h3>
            <p className="text-xs text-secondary">Lack of verified code reviews, system design intuition, and paid industrial mentorship.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
            <Building2 size={32} className="text-teal mx-auto" />
            <h3 className="text-base font-bold text-primary font-heading">Industry Requirements</h3>
            <p className="text-xs text-muted">Production CI/CD, GitOps, cloud containerization, sub-second vector search.</p>
          </div>
        </div>
      </div>

      {/* 2. Our Solution: The KaushalEra Continuous Loop (Section 11) */}
      <div className="card p-8 lg:p-10 bg-slate-900/70 border-white/10 shadow-2xl rounded-3xl space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">Our Solution</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-primary">
            A Continuous 6-Stage Skill Loop
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { step: '01', title: 'Assess', note: 'Standardized baseline test' },
            { step: '02', title: 'Skill Map', note: 'AI comparative gap analysis' },
            { step: '03', title: 'Learn', note: 'Curated technical roadmaps' },
            { step: '04', title: 'Build', note: 'Verified capstone repos' },
            { step: '05', title: 'Intern', note: 'Paid industrial immersion' },
            { step: '06', title: 'Get Hired', note: 'Direct verified placement' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 text-center space-y-1">
              <span className="text-[10px] font-mono font-bold text-brand">{item.step}</span>
              <div className="text-sm font-bold font-heading text-primary">{item.title}</div>
              <div className="text-[11px] text-muted">{item.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Who We Connect (Section 11) */}
      <div className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Ecosystem Beneficiaries</span>
          <h2 className="text-3xl font-extrabold font-heading text-primary">
            Who We Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 border-white/10 bg-slate-900/60 space-y-2">
            <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
              <span className="text-indigo-400">👨‍🎓</span> Students & Job Seekers
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              Gain transparent visibility into your real employability match, close skill deltas with verified roadmaps, and land top-tier internships.
            </p>
          </div>

          <div className="card p-6 border-white/10 bg-slate-900/60 space-y-2">
            <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
              <span className="text-amber-400">👨‍🏫</span> Faculty & Researchers
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              Access funded corporate research labs, NVIDIA/AWS sponsored Faculty Enablement Programs, and collaborative industrial consultancies.
            </p>
          </div>

          <div className="card p-6 border-white/10 bg-slate-900/60 space-y-2">
            <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
              <span className="text-teal">🏢</span> Recruiters & Enterprises
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              Eliminate resume keyword spam by screening pre-assessed candidates with transparent multi-factor skill compatibility scorecards.
            </p>
          </div>

          <div className="card p-6 border-white/10 bg-slate-900/60 space-y-2">
            <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
              <span className="text-rose-400">🏛️</span> Academic Institutions
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              Obtain real-time departmental intelligence, track placement conversion rates, and export structured reports for NAAC and NBA accreditation.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Our Vision (Section 11) */}
      <div className="p-10 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/40 text-center space-y-4 shadow-2xl">
        <span className="text-xs font-bold uppercase tracking-wider text-teal">Our Vision</span>
        <blockquote className="text-xl sm:text-2xl font-bold font-heading text-primary max-w-3xl mx-auto italic">
          "To build a national workforce continuously aligned with evolving industry needs, where every student has a transparent path to career mastery."
        </blockquote>
        <div className="pt-2">
          <Button
            variant="primary"
            size="md"
            iconRight={ArrowRight}
            onClick={() => onNavigate('/signup')}
          >
            Join the Ecosystem
          </Button>
        </div>
      </div>
    </div>
  );
};
