import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MOCK_ASSESSMENTS } from '../../data/mockAssessments';
import { CircularGauge } from '../../components/common/CircularGauge';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Button } from '../../components/common/Button';
import { VerificationBadge, Badge } from '../../components/common/Badge';
import {
  Award,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  BookOpen,
  Share2
} from 'lucide-react';

export const AssessmentResultPage = ({ assessmentId = 'python-advanced', score = 82, onNavigate }) => {
  const assessment = MOCK_ASSESSMENTS.find(a => a.id === assessmentId) || MOCK_ASSESSMENTS[0];

  useEffect(() => {
    // Fire festive celebration confetti (Section 76)
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Graceful fallback
    }
  }, []);

  const breakdown = assessment.radarBreakdown || [
    { subject: 'Python Syntax & Core Internals', score: 91 },
    { subject: 'Data Structures & Collections', score: 78 },
    { subject: 'Algorithms & Complexity', score: 72 },
    { subject: 'OOP & Design Patterns', score: 86 },
    { subject: 'Problem Solving & Edge Cases', score: 81 }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-fade-in">
      {/* Top Banner Celebration (Section 76) */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/40 shadow-2xl text-center space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles size={14} className="text-emerald animate-spin" />
          <span>🎉 Assessment Complete & Verified</span>
        </div>

        <h1 className="text-3xl lg:text-4xl font-black font-heading text-primary">
          Outstanding Performance, Alex!
        </h1>

        <p className="text-sm text-secondary max-w-xl mx-auto">
          Your skill profile has been updated. You earned <strong className="text-teal font-bold">+50 Career XP</strong> and unlocked <strong className="text-cyan-300 font-bold">18 new opportunities</strong>.
        </p>

        {/* Circular Score Display (Section 63) */}
        <div className="py-4">
          <CircularGauge
            score={score}
            maxScore={100}
            size={190}
            strokeWidth={15}
            label="Assessment Score"
            sublabel="★★★★☆ Advanced Tier"
            color="#10B981"
            accentColor="#06B6D4"
          />
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <VerificationBadge
            type="assessment"
            text="✓ Assessment Verified"
            tooltip={`Verified by KaushalSetu on ${assessment.title}`}
          />
          <Badge variant="teal">Advanced Level</Badge>
        </div>
      </div>

      {/* Breakdown Scores (Section 63) */}
      <div className="card p-6 lg:p-7 border-white/10 bg-slate-900/60 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold font-heading text-primary">
            Sub-Topic Competency Breakdown
          </h3>
          <span className="text-xs text-muted font-mono">5 Tested Domains</span>
        </div>

        <div className="space-y-4">
          {breakdown.map((item, idx) => (
            <ProgressBar
              key={idx}
              label={item.subject}
              value={item.score}
              color={item.score >= 85 ? '#10B981' : item.score >= 75 ? '#6366F1' : '#F59E0B'}
              height={8}
            />
          ))}
        </div>
      </div>

      {/* Strong vs Weak Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strong Areas */}
        <div className="card p-6 border-emerald-500/30 bg-emerald-950/10 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald flex items-center gap-1.5">
            <CheckCircle2 size={15} /> Strongest Competencies
          </h4>
          <ul className="space-y-2 text-xs text-secondary">
            {assessment.strongAreas?.map((st, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-emerald">✓</span> {st}
              </li>
            ))}
          </ul>
        </div>

        {/* Weak Areas */}
        <div className="card p-6 border-amber-500/30 bg-amber-950/10 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <AlertTriangle size={15} /> Areas for Growth
          </h4>
          <ul className="space-y-2 text-xs text-secondary">
            {assessment.weakAreas?.map((wk, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-amber-400">⚠</span> {wk}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* "Your Next Steps" (Section 63) */}
      <div className="card p-6 border-white/10 bg-slate-900/60 space-y-4">
        <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
          <TrendingUp size={18} className="text-brand" />
          <span>Your Recommended Next Steps</span>
        </h3>

        <div className="space-y-2.5">
          {assessment.recommendedNextSteps?.map((stepText, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-[10px]">
                  {idx + 1}
                </span>
                <span className="font-semibold text-primary">{stepText}</span>
              </div>
              <ArrowRight size={14} className="text-muted" />
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <Button
            variant="secondary"
            size="sm"
            icon={RotateCcw}
            onClick={() => onNavigate(`/assessment/${assessment.id}/take`)}
          >
            Retake Test
          </Button>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('/skills')}
            >
              View Skill Profile
            </Button>
            <Button
              variant="primary"
              size="sm"
              iconRight={ArrowRight}
              onClick={() => onNavigate('/opportunities')}
            >
              Explore Matching Jobs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
