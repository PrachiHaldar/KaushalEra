import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Circle, TrendingUp, BookOpen } from 'lucide-react';
import { Button } from '../common/Button';

export const NextBestActionCard = ({ onStartLearning }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950/90 via-slate-900 to-slate-950 border border-indigo-500/30 p-6 lg:p-7 shadow-2xl shadow-indigo-950/40">
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-20 w-60 h-60 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} className="text-cyan-400 animate-spin" />
            <span>✨ Recommended Next Step</span>
          </div>

          <h3 className="text-2xl font-extrabold font-heading text-primary tracking-tight">
            Improve Machine Learning & PyTorch
          </h3>

          <p className="text-sm text-secondary leading-relaxed">
            You are <strong className="text-amber-400 font-semibold">45% away</strong> from qualifying for{' '}
            <strong className="text-cyan-300 font-semibold underline decoration-cyan-500/50">23 additional Data Science & AI opportunities</strong>.
          </p>

          {/* Action Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs">
              <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-[11px]">
                1
              </span>
              <span className="text-secondary font-medium">Complete ML Fundamentals</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs">
              <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-[11px]">
                2
              </span>
              <span className="text-secondary font-medium">Take ML Assessment</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs">
              <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-[11px]">
                3
              </span>
              <span className="text-secondary font-medium">Build 1 Capstone Project</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto">
          <Button
            variant="glow"
            size="lg"
            iconRight={ArrowRight}
            onClick={onStartLearning}
            className="w-full sm:w-auto"
          >
            Start Learning →
          </Button>
          <div className="text-center text-[11px] text-muted flex items-center justify-center gap-1">
            <TrendingUp size={12} className="text-emerald" /> Unlocks ₹14-24 LPA Roles
          </div>
        </div>
      </div>
    </div>
  );
};
