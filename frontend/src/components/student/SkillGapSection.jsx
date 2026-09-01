import React from 'react';
import { MOCK_SKILL_GAPS } from '../../data/mockSkills';
import { Button } from '../common/Button';
import { VerificationBadge } from '../common/Badge';
import { AlertCircle, CheckCircle2, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

export const SkillGapSection = ({ onFixGap, onTakeAssessment }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold font-heading text-primary flex items-center gap-2">
            <span>Skill Gap & Industry Readiness</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-bold border border-rose-500/30">
              3 Gaps Identified
            </span>
          </h3>
          <p className="text-xs text-muted mt-0.5">
            Real-time delta between your verified profile and top recruiter benchmarks.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3.5">
        {MOCK_SKILL_GAPS.map((gapItem) => {
          const isCritical = gapItem.status === 'critical';
          const isModerate = gapItem.status === 'moderate' || gapItem.status === 'high';
          const isOptimal = gapItem.status === 'optimal';

          return (
            <div
              key={gapItem.id}
              className={`p-4 rounded-2xl border transition-all ${
                isCritical
                  ? 'bg-rose-950/20 border-rose-500/40 shadow-lg shadow-rose-950/20'
                  : isModerate
                  ? 'bg-slate-900/60 border-amber-500/30'
                  : 'bg-slate-900/40 border-white/10'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-base font-bold text-primary font-heading">
                    {gapItem.skill}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-muted">
                    {gapItem.category}
                  </span>
                  {gapItem.verified && (
                    <VerificationBadge
                      type={gapItem.verificationType}
                      tooltip={gapItem.verificationNote}
                    />
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {gapItem.gap > 0 ? (
                    <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                      <AlertCircle size={13} /> {gapItem.gap}% Skill Delta
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-emerald flex items-center gap-1">
                      <CheckCircle2 size={13} /> Benchmark Met
                    </span>
                  )}
                </div>
              </div>

              {/* Side-by-Side Comparative Progress Bars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/50 p-3 rounded-xl border border-white/5">
                {/* YOUR SKILL */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted uppercase font-bold tracking-wider text-[10px]">
                      YOUR LEVEL
                    </span>
                    <span className="font-mono font-bold text-primary">
                      {gapItem.yourLevel}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isCritical
                          ? 'bg-gradient-to-r from-rose-500 to-amber-500'
                          : isModerate
                          ? 'bg-gradient-to-r from-amber-500 to-indigo-500'
                          : 'bg-gradient-to-r from-teal-400 to-emerald-500'
                      }`}
                      style={{ width: `${gapItem.yourLevel}%` }}
                    />
                  </div>
                </div>

                {/* INDUSTRY NEED */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted uppercase font-bold tracking-wider text-[10px]">
                      INDUSTRY BENCHMARK
                    </span>
                    <span className="font-mono font-bold text-brand">
                      {gapItem.industryNeed}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-indigo-500/70"
                      style={{ width: `${gapItem.industryNeed}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Recommendation & Action Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-3 pt-2">
                <p className="text-xs text-secondary italic">
                  💡 {gapItem.recommendation}
                </p>

                <div className="shrink-0 flex items-center gap-2">
                  {gapItem.gap > 0 ? (
                    <Button
                      variant={isCritical ? 'primary' : 'outline'}
                      size="sm"
                      iconRight={ArrowRight}
                      onClick={() => onFixGap(gapItem)}
                    >
                      Fix This Gap →
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={CheckCircle2}
                      disabled
                    >
                      Skill Verified
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
