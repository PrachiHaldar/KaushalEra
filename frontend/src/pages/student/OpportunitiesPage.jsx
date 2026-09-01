import React, { useState } from 'react';
import { MOCK_JOBS, MOCK_INTERNSHIPS } from '../../data/mockJobs';
import { useAppData } from '../../context/AppDataContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Briefcase,
  Sparkles,
  Search,
  LayoutGrid,
  List,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Building2
} from 'lucide-react';

export const OpportunitiesPage = ({ onNavigate, onSelectJob }) => {
  const { applyToOpportunity, applications } = useAppData();
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'internships', 'jobs'
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list'
  const [searchQuery, setSearchQuery] = useState('');

  const combinedOpportunities = [
    ...MOCK_INTERNSHIPS.map(i => ({ ...i, itemType: 'Internship' })),
    ...MOCK_JOBS.map(j => ({ ...j, itemType: 'Full-time' }))
  ];

  const filteredOpportunities = combinedOpportunities.filter((item) => {
    const matchesTab = activeTab === 'all' ||
      (activeTab === 'internships' && item.itemType === 'Internship') ||
      (activeTab === 'jobs' && item.itemType === 'Full-time');
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleApply = (e, item) => {
    e.stopPropagation();
    const alreadyApplied = applications.some(a => a.role === item.title && a.company === item.company);
    if (alreadyApplied) {
      addToast({
        title: 'Already Applied',
        message: `You already have an active application with ${item.company}.`,
        type: 'warning',
        duration: 3000
      });
      return;
    }

    applyToOpportunity(item, item.itemType);
    addToast({
      title: '🎉 Application Submitted!',
      message: `Successfully applied to ${item.title} at ${item.company}. +25 XP awarded!`,
      type: 'success',
      duration: 4000,
      actionLabel: 'View in Kanban',
      onAction: () => onNavigate('/applications')
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold font-heading text-primary">
            Opportunity Marketplace
          </h1>
          <p className="text-sm text-secondary mt-1">
            Browse verified job and internship openings curated with transparent AI skill match scoring.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={activeTab === 'all' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setActiveTab('all')}
          >
            All Roles
          </Button>
          <Button
            variant={activeTab === 'internships' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setActiveTab('internships')}
          >
            Internships
          </Button>
          <Button
            variant={activeTab === 'jobs' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setActiveTab('jobs')}
          >
            Full-time Jobs
          </Button>
        </div>
      </div>

      {/* Filter & View Mode Controls */}
      <div className="card p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 w-full md:w-80 bg-slate-900 px-3 py-2 rounded-xl border border-white/10">
          <Search size={16} className="text-muted" />
          <input
            type="text"
            placeholder="Search roles, companies, technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-xs text-primary placeholder-muted outline-none w-full"
          />
        </div>

        {/* View Toggle (Grid / List) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-xl border transition-colors ${
              viewMode === 'grid' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-900 border-white/10 text-muted hover:text-primary'
            }`}
            title="Card Grid View"
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-xl border transition-colors ${
              viewMode === 'list' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-900 border-white/10 text-muted hover:text-primary'
            }`}
            title="Compact List View"
          >
            <List size={16} />
          </button>
        </div>
      </div>

      {/* Opportunities Display (Section 54, 55) */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredOpportunities.map((item) => {
            const hasApplied = applications.some(a => a.role === item.title && a.company === item.company);

            return (
              <div
                key={item.id}
                onClick={() => onNavigate(`/jobs/${item.id}`, item)}
                className="card p-6 border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between group cursor-pointer bg-slate-900/60 hover:shadow-xl"
              >
                <div>
                  {/* Top Header: Company & Match Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center font-bold text-sm text-primary font-heading">
                        {item.logo || item.company.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-brand">{item.company}</div>
                        <div className="text-xs text-muted flex items-center gap-1">
                          <MapPin size={11} /> {item.location}
                        </div>
                      </div>
                    </div>

                    {/* Prominent Match Badge */}
                    <div className="flex flex-col items-end">
                      <span className="badge badge-teal font-extrabold text-xs px-2.5 py-1 flex items-center gap-1 shadow-sm">
                        <Sparkles size={11} /> {item.skillMatch}% Match
                      </span>
                      <span className="text-[10px] text-muted font-mono mt-0.5">{item.itemType}</span>
                    </div>
                  </div>

                  {/* Title & Compensation */}
                  <h3 className="text-base font-bold font-heading text-primary group-hover:text-brand transition-colors line-clamp-1 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono font-bold text-emerald mb-3">
                    {item.salary || item.stipend}
                  </div>

                  <p className="text-xs text-secondary line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex items-center gap-1.5 flex-wrap mb-4">
                    {item.skills.slice(0, 4).map((skillName, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-secondary border border-white/5"
                      >
                        {skillName}
                      </span>
                    ))}
                    {item.skills.length > 4 && (
                      <span className="text-[10px] text-muted">+{item.skills.length - 4} more</span>
                    )}
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-muted flex items-center gap-1">
                    <Clock size={12} /> {item.deadline || item.postedDate}
                  </span>

                  <div className="flex items-center gap-2">
                    <Button
                      variant={hasApplied ? 'ghost' : 'primary'}
                      size="sm"
                      disabled={hasApplied}
                      onClick={(e) => handleApply(e, item)}
                    >
                      {hasApplied ? 'Applied ✓' : 'Quick Apply'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Compact List View */
        <div className="card p-2 border-white/10 divide-y divide-white/5">
          {filteredOpportunities.map((item) => {
            const hasApplied = applications.some(a => a.role === item.title && a.company === item.company);

            return (
              <div
                key={item.id}
                onClick={() => onNavigate(`/jobs/${item.id}`, item)}
                className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-bold text-sm text-brand shrink-0">
                    {item.logo || item.company.substring(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary font-heading flex items-center gap-2">
                      <span>{item.title}</span>
                      <span className="badge badge-neutral text-[10px]">{item.itemType}</span>
                    </div>
                    <div className="text-xs text-muted flex items-center gap-2 mt-0.5">
                      <span className="text-brand font-medium">{item.company}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                      <span>•</span>
                      <span className="text-emerald font-mono font-bold">{item.salary || item.stipend}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="badge badge-teal font-extrabold text-xs">
                    {item.skillMatch}% Match
                  </span>
                  <Button
                    variant={hasApplied ? 'ghost' : 'primary'}
                    size="sm"
                    disabled={hasApplied}
                    onClick={(e) => handleApply(e, item)}
                  >
                    {hasApplied ? 'Applied ✓' : 'Apply'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
