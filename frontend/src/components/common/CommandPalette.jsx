import React, { useState, useEffect, useRef } from 'react';
import { Search, Code2, BookOpen, Briefcase, FileText, Globe, User, Sparkles, ArrowRight, CornerDownLeft, X } from 'lucide-react';
import { ALL_SKILLS_DIRECTORY } from '../../data/mockSkills';
import { MOCK_DOMAINS } from '../../data/mockDomains';
import { MOCK_JOBS, MOCK_INTERNSHIPS } from '../../data/mockJobs';
import { MOCK_RESOURCES } from '../../data/mockResources';

export const CommandPalette = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global key listener for Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via custom event if parent handles it
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Aggregate results across categories
  const trimmed = query.trim().toLowerCase();

  const skillsResults = ALL_SKILLS_DIRECTORY.filter(s =>
    !trimmed || s.name.toLowerCase().includes(trimmed) || s.category.toLowerCase().includes(trimmed)
  ).slice(0, 3).map(s => ({
    id: `skill-${s.id}`,
    category: 'SKILLS',
    title: s.name,
    subtitle: `${s.category} • ${s.level}`,
    icon: Code2,
    route: '/skills',
    data: s
  }));

  const domainsResults = MOCK_DOMAINS.filter(d =>
    !trimmed || d.title.toLowerCase().includes(trimmed) || d.overview.toLowerCase().includes(trimmed)
  ).slice(0, 2).map(d => ({
    id: `domain-${d.id}`,
    category: 'DOMAINS',
    title: d.title,
    subtitle: `${d.careerPathsCount} Career Paths • ${d.demandPercent}% Demand`,
    icon: Globe,
    route: `/domains/${d.id}`,
    data: d
  }));

  const jobsResults = MOCK_JOBS.filter(j =>
    !trimmed || j.title.toLowerCase().includes(trimmed) || j.company.toLowerCase().includes(trimmed)
  ).slice(0, 2).map(j => ({
    id: `job-${j.id}`,
    category: 'JOBS',
    title: j.title,
    subtitle: `${j.company} • ${j.salary} • ${j.skillMatch}% Match`,
    icon: Briefcase,
    route: `/jobs/${j.id}`,
    data: j
  }));

  const internshipsResults = MOCK_INTERNSHIPS.filter(i =>
    !trimmed || i.title.toLowerCase().includes(trimmed) || i.company.toLowerCase().includes(trimmed)
  ).slice(0, 2).map(i => ({
    id: `intern-${i.id}`,
    category: 'INTERNSHIPS',
    title: i.title,
    subtitle: `${i.company} • ${i.stipend} • ${i.skillMatch}% Match`,
    icon: Sparkles,
    route: '/opportunities',
    data: i
  }));

  const resourcesResults = MOCK_RESOURCES.filter(r =>
    !trimmed || r.title.toLowerCase().includes(trimmed) || r.skill.toLowerCase().includes(trimmed)
  ).slice(0, 3).map(r => ({
    id: `res-${r.id}`,
    category: 'RESOURCES',
    title: r.title,
    subtitle: `${r.typeBadge} • ${r.duration} • Rating: ${r.rating}`,
    icon: FileText,
    route: '/resources',
    data: r
  }));

  const combinedResults = [
    ...skillsResults,
    ...domainsResults,
    ...jobsResults,
    ...internshipsResults,
    ...resourcesResults
  ];

  const handleSelect = (item) => {
    onClose();
    if (onNavigate) {
      onNavigate(item.route, item.data);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % Math.max(1, combinedResults.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + combinedResults.length) % Math.max(1, combinedResults.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (combinedResults[selectedIndex]) {
        handleSelect(combinedResults[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  // Group items by category
  const categories = Array.from(new Set(combinedResults.map(r => r.category)));

  return (
    <div className="modal-overlay" onClick={onClose} style={{ alignItems: 'flex-start', paddingTop: '10vh' }}>
      <div
        className="modal-content max-w-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/15 shadow-2xl overflow-hidden rounded-2xl animate-slide-down"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-slate-950/50">
          <Search size={20} className="text-brand shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a skill, job, domain, resource, or command... (e.g. Python, AI)"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-sm text-primary placeholder-slate-500 outline-none font-sans"
          />
          <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-muted font-mono">
            ESC to close
          </span>
          <button onClick={onClose} className="text-muted hover:text-primary p-1">
            <X size={16} />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {combinedResults.length === 0 ? (
            <div className="py-12 text-center text-muted text-xs">
              No matching records found for "{query}". Try searching "Python", "Machine Learning", or "Internship".
            </div>
          ) : (
            categories.map(cat => {
              const itemsInCat = combinedResults.filter(r => r.category === cat);
              return (
                <div key={cat} className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted px-2 py-1 flex items-center gap-1.5">
                    <span>{cat}</span>
                    <span className="text-[9px] text-slate-600">({itemsInCat.length})</span>
                  </div>
                  {itemsInCat.map(item => {
                    const globalIdx = combinedResults.findIndex(r => r.id === item.id);
                    const isSelected = globalIdx === selectedIndex;
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(globalIdx)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                          isSelected
                            ? 'bg-indigo-600/25 border border-indigo-500/40 text-primary translate-x-1'
                            : 'hover:bg-white/5 text-secondary border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-muted'}`}>
                            <Icon size={16} />
                          </div>
                          <div className="truncate">
                            <div className="text-sm font-semibold text-primary truncate">
                              {item.title}
                            </div>
                            <div className="text-xs text-muted truncate">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          {isSelected && (
                            <span className="text-[10px] text-indigo-400 font-medium flex items-center gap-1">
                              Jump <CornerDownLeft size={10} />
                            </span>
                          )}
                          <ArrowRight size={14} className={isSelected ? 'text-indigo-400' : 'text-slate-600'} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-white/5 flex items-center justify-between text-[11px] text-muted">
          <div className="flex items-center gap-3">
            <span>Navigate <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-[10px]">↓</kbd></span>
            <span>Select <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-[10px]">↵</kbd></span>
          </div>
          <div className="flex items-center gap-1 text-brand">
            <Sparkles size={11} /> KaushalEra Instant Intelligence
          </div>
        </div>
      </div>
    </div>
  );
};
