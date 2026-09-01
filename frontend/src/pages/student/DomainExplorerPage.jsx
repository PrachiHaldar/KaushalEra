import React, { useState } from 'react';
import { MOCK_DOMAINS } from '../../data/mockDomains';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Globe, Search, ArrowRight, TrendingUp, BookOpen, BrainCircuit, ShieldCheck, Cloud, Layout } from 'lucide-react';

export const DomainExplorerPage = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Trending 🔥', 'High Demand ⚡', 'Popular 🚀', 'Critical 🛡️'];

  const iconMap = {
    BrainCircuit,
    Cloud,
    Layout,
    ShieldCheck
  };

  const filteredDomains = MOCK_DOMAINS.filter(domain => {
    const matchesFilter = activeFilter === 'All' || domain.badge.includes(activeFilter.split(' ')[0]);
    const matchesSearch = domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          domain.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-950 border border-white/10 shadow-2xl">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider">
            <Globe size={13} className="text-cyan-400" />
            <span>Curated Technology Domains</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold font-heading text-primary">
            Explore Industry Domains & Career Paths
          </h1>
          <p className="text-sm text-secondary">
            Deep dive into structured ecosystems engineered with verified skill roadmaps, live internships, and hiring pipelines.
          </p>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="card p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 w-full md:w-80 bg-slate-900 px-3 py-2 rounded-xl border border-white/10">
          <Search size={16} className="text-muted" />
          <input
            type="text"
            placeholder="Search domains (e.g. AI, Cloud, Web)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-xs text-primary placeholder-muted outline-none w-full"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === f
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'bg-slate-900/60 text-secondary hover:text-primary hover:bg-white/5'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Domain Cards Grid (Section 49) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDomains.map((domain) => {
          const Icon = iconMap[domain.icon] || Globe;

          return (
            <div
              key={domain.id}
              className="card p-6 border-white/10 hover:border-indigo-500/50 transition-all flex flex-col justify-between group cursor-pointer bg-slate-900/60 hover:shadow-2xl hover:shadow-indigo-950/30"
              onClick={() => onNavigate(`/domains/${domain.id}`)}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-brand group-hover:scale-105 transition-transform">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-primary group-hover:text-brand transition-colors">
                        {domain.title}
                      </h3>
                      <span className="text-xs text-muted font-mono">{domain.avgSalary}</span>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-secondary border border-white/10 font-medium">
                    {domain.badge}
                  </span>
                </div>

                <p className="text-xs text-secondary leading-relaxed mb-5">
                  {domain.tagline}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 bg-slate-950/60 p-3 rounded-xl border border-white/5 text-center mb-5">
                  <div>
                    <div className="text-xs text-muted">Career Paths</div>
                    <div className="text-sm font-bold text-primary font-heading mt-0.5">
                      {domain.careerPathsCount}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted">Skills</div>
                    <div className="text-sm font-bold text-brand font-heading mt-0.5">
                      {domain.skillsCount}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted">Resources</div>
                    <div className="text-sm font-bold text-teal font-heading mt-0.5">
                      {domain.resourcesCount}
                    </div>
                  </div>
                </div>

                {/* Demand Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted font-medium">Industry Demand</span>
                    <span className="font-bold text-emerald font-mono">{domain.demandPercent}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-400 to-indigo-500 rounded-full"
                      style={{ width: `${domain.demandPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-brand font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Domain <ArrowRight size={14} />
                </span>
                <span className="text-muted">Avg: {domain.avgSalary}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
