import React from 'react';
import { MOCK_ASSESSMENTS } from '../../data/mockAssessments';
import { useAppData } from '../../context/AppDataContext';
import { Button } from '../../components/common/Button';
import { Badge, VerificationBadge } from '../../components/common/Badge';
import {
  CheckSquare,
  Clock,
  HelpCircle,
  Sparkles,
  Award,
  ArrowRight,
  Code2,
  BrainCircuit,
  Database,
  Cloud,
  ShieldCheck,
  Smartphone,
  Layers,
  Cpu
} from 'lucide-react';

export const AssessmentListPage = ({ onNavigate }) => {
  const { completedAssessments } = useAppData();

  const iconMap = {
    Code2,
    BrainCircuit,
    Database,
    Cloud,
    ShieldCheck,
    Smartphone,
    Layers,
    Cpu
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-950 border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider">
            <CheckSquare size={13} className="text-cyan-400" />
            <span>Proctored Skill Assessments</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold font-heading text-primary">
            Skill Verifications & Baseline Testing
          </h1>
          <p className="text-sm text-secondary">
            Standardized technical evaluations designed by senior engineering practitioners to certify your credentials.
          </p>
        </div>
      </div>

      {/* Assessment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_ASSESSMENTS.map((test) => {
          const Icon = iconMap[test.icon] || Code2;
          const userScore = completedAssessments[test.id];
          const isDone = userScore !== undefined;

          return (
            <div
              key={test.id}
              className="card p-6 border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between group bg-slate-900/60"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-brand">
                    <Icon size={24} />
                  </div>
                  {isDone ? (
                    <span className="badge badge-success text-xs font-bold font-mono">
                      Score: {userScore}%
                    </span>
                  ) : (
                    <span className="badge badge-warning text-xs">Pending Attempt</span>
                  )}
                </div>

                <h3 className="text-base font-bold font-heading text-primary group-hover:text-brand transition-colors mb-2">
                  {test.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-muted font-mono mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {test.durationMinutes} Mins
                  </span>
                  <span>•</span>
                  <span>{test.questionsCount} Questions</span>
                  <span>•</span>
                  <span>{test.difficulty}</span>
                </div>

                {/* Tested Skills */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted">Skills Evaluated:</span>
                  <div className="flex items-center gap-1 flex-wrap">
                    {test.testedSkills.slice(0, 3).map((s, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-secondary border border-white/5">
                        {s}
                      </span>
                    ))}
                    {test.testedSkills.length > 3 && (
                      <span className="text-[10px] text-muted">+{test.testedSkills.length - 3}</span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-secondary italic mb-4">
                  🎯 {test.careerImpact}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {isDone ? (
                  <>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => onNavigate(`/assessment/${test.id}/results`)}
                    >
                      View Report
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onNavigate(`/assessment/${test.id}/take`)}
                    >
                      Retake Test
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full"
                    iconRight={ArrowRight}
                    onClick={() => onNavigate(`/assessment/${test.id}/take`)}
                  >
                    Begin Assessment
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
