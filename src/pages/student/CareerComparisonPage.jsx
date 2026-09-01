import React, { useState } from 'react';
import { MOCK_CAREERS } from '../../data/mockCareers';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  BrainCircuit,
  CheckCircle2,
  XCircle,
  Minus,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ChevronLeft
} from 'lucide-react';

export const CareerComparisonPage = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [career1Id, setCareer1Id] = useState('ml-engineer');
  const [career2Id, setCareer2Id] = useState('data-scientist');

  const career1 = MOCK_CAREERS.find(c => c.id === career1Id) || MOCK_CAREERS[0];
  const career2 = MOCK_CAREERS.find(c => c.id === career2Id) || MOCK_CAREERS[1];

  const allSkillsList = ['Python', 'Statistics & Math', 'Deep Learning', 'MLOps', 'SQL'];

  const handleChoosePath = (career) => {
    addToast({
      title: '🎯 Career Focus Set!',
      message: `Personalized curriculum aligned toward: ${career.title}.`,
      type: 'success',
      duration: 3500
    });
    onNavigate('/roadmap', { careerId: career.id });
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => onNavigate('/careers')}
        className="text-xs text-muted hover:text-primary flex items-center gap-1 transition-colors"
      >
        <ChevronLeft size={14} /> Back to Career Explorer
      </button>

      {/* Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-950 border border-white/10 shadow-2xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider">
          <BrainCircuit size={13} className="text-cyan-400" />
          <span>Side-by-Side Career Path Comparator</span>
        </div>
        <h1 className="text-3xl font-extrabold font-heading text-primary">
          Compare Career Pathways & Requirements
        </h1>
        <p className="text-sm text-secondary">
          Analyze skill overlap, competency prerequisites, market demand, and compensation benchmarks.
        </p>
      </div>

      {/* Selector Pickers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-4 border-indigo-500/30 bg-slate-900/60">
          <label className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">
            Primary Career Option:
          </label>
          <select
            value={career1Id}
            onChange={(e) => setCareer1Id(e.target.value)}
            className="input-field text-xs font-semibold text-primary"
          >
            {MOCK_CAREERS.map(c => (
              <option key={c.id} value={c.id} className="bg-slate-900">{c.title}</option>
            ))}
          </select>
        </div>

        <div className="card p-4 border-teal-500/30 bg-slate-900/60">
          <label className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">
            Comparison Career Option:
          </label>
          <select
            value={career2Id}
            onChange={(e) => setCareer2Id(e.target.value)}
            className="input-field text-xs font-semibold text-primary"
          >
            {MOCK_CAREERS.map(c => (
              <option key={c.id} value={c.id} className="bg-slate-900">{c.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Matrix Table (Section 61) */}
      <div className="card p-6 border-white/10 bg-slate-900/60 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-xs text-muted uppercase font-bold tracking-wider">
              <th className="py-4 px-4">Evaluation Criteria</th>
              <th className="py-4 px-4 text-indigo-400 font-heading text-sm">{career1.title}</th>
              <th className="py-4 px-4 text-teal font-heading text-sm">{career2.title}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs">
            {/* Match Percentage */}
            <tr className="bg-slate-950/40">
              <td className="py-4 px-4 font-bold text-primary">Your Current Match</td>
              <td className="py-4 px-4">
                <span className="badge badge-primary font-black text-sm">{career1.matchPercent}% Match</span>
              </td>
              <td className="py-4 px-4">
                <span className="badge badge-teal font-black text-sm">{career2.matchPercent}% Match</span>
              </td>
            </tr>

            {/* Average Package */}
            <tr>
              <td className="py-4 px-4 font-semibold text-secondary">Average CTC Package</td>
              <td className="py-4 px-4 font-mono font-bold text-emerald">{career1.avgSalary}</td>
              <td className="py-4 px-4 font-mono font-bold text-emerald">{career2.avgSalary}</td>
            </tr>

            {/* Industry Demand */}
            <tr>
              <td className="py-4 px-4 font-semibold text-secondary">Industry Demand Index</td>
              <td className="py-4 px-4 text-primary font-medium">{career1.demand} ({career1.demandPercent}%)</td>
              <td className="py-4 px-4 text-primary font-medium">{career2.demand} ({career2.demandPercent}%)</td>
            </tr>

            {/* Skill Rows */}
            {allSkillsList.map((skillName, idx) => {
              const c1Skill = career1.skillsComparison?.[skillName];
              const c2Skill = career2.skillsComparison?.[skillName];

              return (
                <tr key={idx}>
                  <td className="py-3 px-4 text-primary font-medium">{skillName}</td>
                  <td className="py-3 px-4">
                    {c1Skill?.required ? (
                      <span className="text-emerald font-bold flex items-center gap-1">
                        <CheckCircle2 size={15} /> Required
                      </span>
                    ) : (
                      <span className="text-muted flex items-center gap-1">
                        <Minus size={15} /> Optional
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {c2Skill?.required ? (
                      <span className="text-emerald font-bold flex items-center gap-1">
                        <CheckCircle2 size={15} /> Required
                      </span>
                    ) : (
                      <span className="text-muted flex items-center gap-1">
                        <Minus size={15} /> Optional
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}

            {/* Action Row */}
            <tr className="bg-slate-950/60">
              <td className="py-5 px-4 font-bold text-muted uppercase text-[10px]">Select Target Path</td>
              <td className="py-5 px-4">
                <Button
                  variant="primary"
                  size="sm"
                  iconRight={ArrowRight}
                  onClick={() => handleChoosePath(career1)}
                >
                  Choose {career1.title}
                </Button>
              </td>
              <td className="py-5 px-4">
                <Button
                  variant="accent"
                  size="sm"
                  iconRight={ArrowRight}
                  onClick={() => handleChoosePath(career2)}
                >
                  Choose {career2.title}
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
