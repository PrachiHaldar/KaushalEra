import React, { useState } from 'react';
import { MOCK_DOMAINS } from '../../data/mockDomains';
import { Tabs } from '../../components/common/Tabs';
import { Button } from '../../components/common/Button';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Badge } from '../../components/common/Badge';
import {
  BrainCircuit,
  Globe,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Briefcase,
  Layers,
  Award,
  ChevronLeft
} from 'lucide-react';

export const DomainDetailPage = ({ domainId = 'artificial-intelligence', onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const domain = MOCK_DOMAINS.find(d => d.id === domainId) || MOCK_DOMAINS[0];

  const tabList = [
    { id: 'overview', label: 'Overview' },
    { id: 'skills', label: 'Required Skills' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'learn', label: 'Courses & Learn' },
    { id: 'projects', label: 'Projects' },
    { id: 'internships', label: 'Internships' },
    { id: 'jobs', label: 'Jobs' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Back button */}
      <button
        onClick={() => onNavigate('/domains')}
        className="text-xs text-muted hover:text-primary flex items-center gap-1 transition-colors"
      >
        <ChevronLeft size={14} /> Back to All Domains
      </button>

      {/* Hero Section (Section 50) */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-950 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider">
            <BrainCircuit size={14} className="text-cyan-400" />
            <span>Domain Hub • {domain.badge}</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-black font-heading text-primary tracking-tight">
            {domain.title}
          </h1>

          <p className="text-sm lg:text-base text-secondary leading-relaxed">
            {domain.tagline}
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs">
            <div>
              <span className="text-muted">Industry Demand: </span>
              <strong className="text-emerald font-bold">{domain.demandPercent}% Very High</strong>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div>
              <span className="text-muted">Average Compensation: </span>
              <strong className="text-primary font-bold">{domain.avgSalary}</strong>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div>
              <span className="text-muted">Available Roles: </span>
              <strong className="text-brand font-bold">{domain.careerPathsCount} Specialized Paths</strong>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 pt-3">
            <Button
              variant="primary"
              size="md"
              icon={BookOpen}
              onClick={() => onNavigate('/roadmap')}
            >
              Start Learning Path
            </Button>
            <Button
              variant="secondary"
              size="md"
              icon={Sparkles}
              onClick={() => onNavigate('/assessment')}
            >
              Take Skill Assessment
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs (Overview | Skills | Roadmap | Learn | Projects | Internships | Jobs) */}
      <Tabs
        tabs={tabList}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Tab Content */}
      <div className="card p-6 bg-slate-900/60 border-white/10">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold font-heading text-primary mb-2">
                Domain Overview & Market Landscape
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {domain.overview}
              </p>
            </div>

            {/* Career Roles in this domain */}
            <div>
              <h4 className="text-base font-bold font-heading text-primary mb-3">
                High-Impact Career Roles
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {domain.careerRoles?.map((r, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-primary">{r.role}</span>
                        <span className="text-[11px] font-mono text-emerald">{r.avgSalary}</span>
                      </div>
                      <span className="text-xs text-muted">Demand: {r.demand}</span>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 flex justify-between items-center text-xs">
                      <span className="text-muted">Your Match:</span>
                      <strong className="text-brand font-mono">{r.match}%</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-heading text-primary">
              Core Competency & Skill Weights
            </h3>
            <div className="space-y-3">
              {domain.requiredSkills?.map((s, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-primary">{s.name}</div>
                    <span className="text-xs text-muted">Target Level: {s.level}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-brand font-bold">Curriculum Weight: {s.weight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="space-y-4 text-center py-6">
            <h3 className="text-lg font-bold font-heading text-primary">
              Interactive Skill Graph Available
            </h3>
            <p className="text-xs text-muted max-w-md mx-auto">
              Explore prerequisite nodes, hands-on labs, and assessment checkpoints on the dedicated interactive roadmap canvas.
            </p>
            <Button
              variant="primary"
              iconRight={ArrowRight}
              onClick={() => onNavigate('/roadmap')}
              className="mx-auto mt-2"
            >
              Open Interactive Roadmap Canvas
            </Button>
          </div>
        )}

        {activeTab === 'learn' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-heading text-primary">
              Curated Courses & Learning Pathways
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {domain.courses?.map((c, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-brand font-semibold uppercase">{c.provider}</div>
                    <h4 className="text-base font-bold text-primary mt-1">{c.title}</h4>
                    <div className="flex items-center gap-3 text-xs text-muted mt-2">
                      <span>⭐ {c.rating}</span>
                      <span>👥 {c.students} learners</span>
                      <span>⏳ {c.duration}</span>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="mt-4"
                    onClick={() => onNavigate('/resources')}
                  >
                    View Modules
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-heading text-primary">
              Industry-Verified Capstone Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {domain.projects?.map((p, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-primary">{p.title}</h4>
                    <span className="badge badge-purple text-[10px]">{p.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    <span>Est: {p.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'internships' || activeTab === 'jobs') && (
          <div className="space-y-4 text-center py-6">
            <h3 className="text-lg font-bold font-heading text-primary">
              Explore Live Opportunities in {domain.title}
            </h3>
            <p className="text-xs text-muted max-w-md mx-auto">
              Browse matched jobs and internships with transparent skill match breakdowns.
            </p>
            <Button
              variant="primary"
              iconRight={ArrowRight}
              onClick={() => onNavigate('/opportunities')}
              className="mx-auto mt-2"
            >
              Browse {domain.title} Opportunities
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
