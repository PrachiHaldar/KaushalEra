import React, { useState } from 'react';
import { MOCK_CAREERS } from '../../data/mockCareers';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Compass,
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  LineChart,
  Layers,
  Cloud,
  ChevronRight
} from 'lucide-react';

export const CareerExplorerPage = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');

  const domains = ['All', 'Artificial Intelligence', 'Data & Analytics', 'Software Engineering', 'Cloud Infrastructure'];

  const iconMap = {
    BrainCircuit,
    LineChart,
    Layers,
    Cloud
  };

  const filteredCareers = MOCK_CAREERS.filter((c) => {
    const matchesDomain = selectedDomain === 'All' || c.domain === selectedDomain;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.requiredSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Search Header: "What can I become?" (Section 60) */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-950 border border-white/10 shadow-2xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles size={13} className="text-cyan-400" />
          <span>AI Career Path Discovery</span>
        </div>

        <h1 className="text-3xl lg:text-4xl font-extrabold font-heading text-primary">
          "What Can I Become?"
        </h1>

        <p className="text-sm text-secondary max-w-2xl">
          Discover career paths tailored to your verified competencies, projected salary trajectories, and industry demand.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2 max-w-2xl">
          <div className="flex items-center gap-2.5 flex-1 bg-slate-950/80 px-4 py-3 rounded-2xl border border-white/10 shadow-inner">
            <Search size={18} className="text-muted shrink-0" />
            <input
              type="text"
              placeholder="Search careers, e.g. Machine Learning, Cloud, Full-Stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-primary placeholder-muted outline-none w-full font-sans"
            />
          </div>

          <Button
            variant="secondary"
            size="md"
            onClick={() => onNavigate('/careers/compare')}
          >
            Compare Careers →
          </Button>
        </div>
      </div>

      {/* Domain Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {domains.map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDomain(d)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              selectedDomain === d
                ? 'bg-indigo-600 text-white font-bold shadow-sm'
                : 'bg-slate-900/80 text-secondary hover:text-primary hover:bg-white/5 border border-white/5'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Career Cards Grid (Section 60) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCareers.map((c) => {
          const Icon = iconMap[c.icon] || BrainCircuit;

          return (
            <div
              key={c.id}
              className="card p-6 border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between group bg-slate-900/60"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-brand">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-primary group-hover:text-brand transition-colors">
                        {c.title}
                      </h3>
                      <span className="text-xs text-muted">{c.domain}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="badge badge-teal text-xs font-bold font-mono">
                      {c.matchPercent}% Match
                    </div>
                    <span className="text-[10px] text-emerald block font-semibold mt-1">
                      {c.demand} Demand
                    </span>
                  </div>
                </div>

                <p className="text-xs text-secondary leading-relaxed mb-4">
                  {c.description}
                </p>

                {/* Compensation & Trajectory */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 mb-4 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted">Average CTC Package:</span>
                    <span className="text-emerald font-bold font-mono">{c.avgSalary}</span>
                  </div>
                  <div className="text-[11px] text-cyan-300 font-medium">
                    📈 {c.growthTrajectory}
                  </div>
                </div>

                {/* Required Skills */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted">Required Skills:</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {c.requiredSkills.map((sk, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-secondary border border-white/5">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-muted">
                  <strong>{c.relatedJobs}</strong> Openings • <strong>{c.relatedInternships}</strong> Internships
                </span>

                <Button
                  variant="primary"
                  size="sm"
                  iconRight={ArrowRight}
                  onClick={() => onNavigate('/roadmap', { careerId: c.id })}
                >
                  Explore Path
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
