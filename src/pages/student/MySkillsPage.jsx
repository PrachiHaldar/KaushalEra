import React, { useState } from 'react';
import { ALL_SKILLS_DIRECTORY } from '../../data/mockSkills';
import { VerificationBadge, Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Search, Filter, Plus, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles, Code2 } from 'lucide-react';

export const MySkillsPage = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Programming', 'AI/ML', 'Database', 'Frontend', 'DevOps', 'Core CS', 'Cloud', 'Soft Skills'];

  const filteredSkills = ALL_SKILLS_DIRECTORY.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold font-heading text-primary">
            My Skills & Verifications
          </h1>
          <p className="text-sm text-secondary mt-1">
            Track, verify, and improve technical and soft skills recognized by top hiring partners.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            icon={Sparkles}
            onClick={() => onNavigate('/assessment')}
          >
            Take Assessment
          </Button>
          <Button
            variant="secondary"
            onClick={() => onNavigate('/skill-gap')}
          >
            Skill Gap Analyzer
          </Button>
        </div>
      </div>

      {/* Filter & Search Controls */}
      <div className="card p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 w-full md:w-80 bg-slate-900 px-3 py-2 rounded-xl border border-white/10">
          <Search size={16} className="text-muted" />
          <input
            type="text"
            placeholder="Search skills or technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-xs text-primary placeholder-muted outline-none w-full"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'bg-slate-900/60 text-secondary hover:text-primary hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="card p-5 border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-brand font-bold">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading text-primary">
                      {skill.name}
                    </h4>
                    <span className="text-xs text-muted">{skill.category}</span>
                  </div>
                </div>
                <Badge variant={skill.level === 'Advanced' ? 'teal' : skill.level === 'Intermediate' ? 'purple' : 'neutral'}>
                  {skill.level}
                </Badge>
              </div>

              {/* Progress & Verification */}
              <div className="space-y-3 my-3">
                <ProgressBar
                  label="Proficiency Score"
                  value={skill.score}
                  height={8}
                />

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-muted">Verification Status:</span>
                  {skill.verified ? (
                    <VerificationBadge
                      type={skill.id === 'python' ? 'assessment' : skill.id === 'sql' ? 'institution' : 'industry'}
                      text={skill.verifiedBy}
                    />
                  ) : (
                    <span className="text-amber-400 text-xs font-medium">Unverified</span>
                  )}
                </div>
              </div>
            </div>

            {/* Opportunities Link & Actions */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-muted">
                <strong>{skill.jobsCount}</strong> Jobs • <strong>{skill.internshipsCount}</strong> Interns
              </span>

              <Button
                variant="ghost"
                size="sm"
                iconRight={ArrowUpRight}
                onClick={() => onNavigate('/roadmap', { targetSkill: skill.id })}
              >
                Learn Path
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
