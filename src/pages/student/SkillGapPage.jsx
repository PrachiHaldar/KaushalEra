import React from 'react';
import { SkillGapSection } from '../../components/student/SkillGapSection';
import { Button } from '../../components/common/Button';
import { Sparkles, ArrowRight, ShieldAlert, Target, Award } from 'lucide-react';

export const SkillGapPage = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-950 border border-white/10 shadow-xl">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider">
            <Target size={13} className="text-cyan-400" />
            <span>AI Predictive Gap Analysis</span>
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-primary">
            Skill Gap & Industry Readiness
          </h1>
          <p className="text-sm text-secondary">
            Comparative analysis mapped directly against 500+ active enterprise job descriptions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            icon={Sparkles}
            onClick={() => onNavigate('/assessment')}
          >
            Take Skill Assessment
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-5 border-rose-500/30 bg-rose-950/10">
          <div className="flex items-center justify-between text-xs text-rose-400 font-bold uppercase tracking-wider">
            <span>Critical Gaps</span>
            <ShieldAlert size={16} />
          </div>
          <div className="text-3xl font-extrabold font-heading text-primary mt-2">1 Skill</div>
          <p className="text-xs text-muted mt-1">Machine Learning & PyTorch (-45% from benchmark)</p>
        </div>

        <div className="card p-5 border-amber-500/30 bg-amber-950/10">
          <div className="flex items-center justify-between text-xs text-amber-400 font-bold uppercase tracking-wider">
            <span>Moderate Gaps</span>
            <Target size={16} />
          </div>
          <div className="text-3xl font-extrabold font-heading text-primary mt-2">2 Skills</div>
          <p className="text-xs text-muted mt-1">Docker & System Design (-15% to -30% from benchmark)</p>
        </div>

        <div className="card p-5 border-emerald-500/30 bg-emerald-950/10">
          <div className="flex items-center justify-between text-xs text-emerald-400 font-bold uppercase tracking-wider">
            <span>Optimized Skills</span>
            <Award size={16} />
          </div>
          <div className="text-3xl font-extrabold font-heading text-primary mt-2">3 Skills</div>
          <p className="text-xs text-muted mt-1">Python, Git & DSA meet or exceed industry need</p>
        </div>
      </div>

      {/* Main Comparative Gap List */}
      <SkillGapSection
        onFixGap={(gap) => onNavigate('/roadmap', { targetSkill: gap.id })}
        onTakeAssessment={(assessmentId) => onNavigate(`/assessment/${assessmentId}/take`)}
      />
    </div>
  );
};
