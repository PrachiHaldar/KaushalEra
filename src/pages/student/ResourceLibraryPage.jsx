import React, { useState } from 'react';
import { MOCK_RESOURCES } from '../../data/mockResources';
import { useAppData } from '../../context/AppDataContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  FileText,
  Bookmark,
  Search,
  Star,
  Clock,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Filter,
  Sparkles
} from 'lucide-react';

export const ResourceLibraryPage = ({ onNavigate }) => {
  const { bookmarkedResourceIds, toggleBookmarkResource } = useAppData();
  const { addToast } = useToast();
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const types = ['All', 'PDF', 'Cheatsheet', 'Video', 'Lab', 'Interactive Guide', 'Bookmarked'];

  const filteredResources = MOCK_RESOURCES.filter((res) => {
    const isBookmarked = bookmarkedResourceIds.includes(res.id);
    if (selectedType === 'Bookmarked') return isBookmarked;
    const matchesType = selectedType === 'All' || res.type === selectedType;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.skill.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleBookmark = (e, resId) => {
    e.stopPropagation();
    toggleBookmarkResource(resId);
    const isNowBookmarked = !bookmarkedResourceIds.includes(resId);
    addToast({
      title: isNowBookmarked ? 'Resource Saved' : 'Bookmark Removed',
      message: isNowBookmarked ? 'Added to your offline reading queue.' : 'Removed from bookmarks.',
      type: 'info',
      duration: 2500
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold font-heading text-primary">
            Digital Resource & Study Library
          </h1>
          <p className="text-sm text-secondary mt-1">
            Access curated technical interview guides, cheatsheets, interactive code labs, and video series.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="card p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 w-full md:w-80 bg-slate-900 px-3 py-2 rounded-xl border border-white/10">
          <Search size={16} className="text-muted" />
          <input
            type="text"
            placeholder="Search guides, topics, skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-xs text-primary placeholder-muted outline-none w-full"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedType === t
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'bg-slate-900/60 text-secondary hover:text-primary hover:bg-white/5'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid (Section 52) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredResources.map((res) => {
          const isSaved = bookmarkedResourceIds.includes(res.id);

          return (
            <div
              key={res.id}
              className="card p-5 border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-brand px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                    {res.typeBadge}
                  </span>
                  <button
                    onClick={(e) => handleBookmark(e, res.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isSaved ? 'text-amber-400 bg-amber-500/10' : 'text-muted hover:text-primary'
                    }`}
                    title={isSaved ? 'Remove Bookmark' : 'Save Bookmark'}
                  >
                    <Bookmark size={16} fill={isSaved ? 'currentColor' : 'none'} />
                  </button>
                </div>

                <h3 className="text-base font-bold font-heading text-primary group-hover:text-brand transition-colors line-clamp-2 mb-2">
                  {res.title}
                </h3>

                <p className="text-xs text-secondary line-clamp-3 leading-relaxed mb-4">
                  {res.summary}
                </p>

                <div className="flex items-center gap-3 text-xs text-muted font-mono mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {res.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-amber-400">
                    <Star size={13} fill="currentColor" /> {res.rating}
                  </span>
                  <span>•</span>
                  <span>{res.difficulty}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-muted">
                  {res.skill}
                </span>

                <Button
                  variant="primary"
                  size="sm"
                  icon={ExternalLink}
                  onClick={() => {
                    addToast({
                      title: 'Opening Resource',
                      message: `Loaded: ${res.title}`,
                      type: 'success',
                      duration: 3000
                    });
                  }}
                >
                  Read Now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
