import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useAppData } from '../../context/AppDataContext';
import { CircularGauge } from '../../components/common/CircularGauge';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Button } from '../../components/common/Button';
import { NextBestActionCard } from '../../components/student/NextBestActionCard';
import { SkillRadarChart } from '../../components/common/SkillRadarChart';
import { SkillGapSection } from '../../components/student/SkillGapSection';
import { CareerJourneyPipeline } from '../../components/student/CareerJourneyPipeline';
import {
  Compass,
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  Flame,
  CheckCircle2,
  Calendar,
  Briefcase,
  Layers,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const StudentDashboard = ({ onNavigate }) => {
  const { currentUser } = useAuthRole();
  const { streak, xp, applications } = useAppData();

  const readinessBreakdown = [
    { label: 'Technical Skills', value: 82, color: 'var(--color-primary)' },
    { label: 'Soft Skills', value: 74, color: 'var(--color-accent-emerald)' },
    { label: 'Aptitude & Problem Solving', value: 68, color: 'var(--color-accent-amber)' },
    { label: 'Projects & Code Quality', value: 90, color: 'var(--color-accent-teal)' },
    { label: 'Internship Readiness', value: 71, color: 'var(--color-accent-purple)' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Welcome Section (Section 44) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-950/80 border border-white/10 shadow-xl">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand mb-1">
            <Sparkles size={14} /> Career Command Center
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-primary">
            Good Morning, {currentUser?.name?.split(' ')[0] || 'Alex'} 👋
          </h1>
          <p className="text-sm text-secondary mt-1">
            Your career journey is <strong className="text-brand font-semibold">68% complete</strong>. You have 3 recommended actions today.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <Button
            variant="primary"
            icon={BookOpen}
            onClick={() => onNavigate('/roadmap')}
          >
            Continue Learning
          </Button>
          <Button
            variant="secondary"
            onClick={() => onNavigate('/skill-gap')}
          >
            View Skill Gaps
          </Button>
        </div>
      </div>

      {/* Hero Analytics: Career Readiness Gauge + Breakdown Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Readiness Score Card */}
        <div className="lg:col-span-4 card flex flex-col items-center justify-center text-center p-8 bg-slate-900/60 border-white/10">
          <div className="text-xs uppercase font-bold text-muted tracking-wider mb-4">
            AI Career Readiness Index
          </div>

          <CircularGauge
            score={78}
            maxScore={100}
            size={200}
            strokeWidth={16}
            label="Career Ready"
            sublabel="Top 15% in cohort"
            color="#6366F1"
            accentColor="#06B6D4"
          />

          <div className="mt-5 text-xs text-secondary max-w-xs leading-relaxed">
            Calculated across verified assessment scores, capstone projects, and industry benchmark deltas.
          </div>
        </div>

        {/* Readiness Dimensions Breakdown */}
        <div className="lg:col-span-8 card p-6 lg:p-7 flex flex-col justify-between bg-slate-900/60 border-white/10">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold font-heading text-primary">
                  Readiness Dimension Scores
                </h3>
                <p className="text-xs text-muted">
                  Continuous performance tracking across 5 core competency pillars.
                </p>
              </div>
              <span className="text-xs text-emerald font-semibold flex items-center gap-1">
                <TrendingUp size={14} /> +8% this month
              </span>
            </div>

            <div className="space-y-4">
              {readinessBreakdown.map((item, idx) => (
                <ProgressBar
                  key={idx}
                  label={item.label}
                  value={item.value}
                  color={item.color}
                  height={9}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted">
            <div className="flex items-center gap-4">
              <span>🔥 <strong>{streak} Days</strong> Learning Streak</span>
              <span>⚡ <strong>{xp}</strong> XP Earned</span>
            </div>
            <button
              onClick={() => onNavigate('/learning-progress')}
              className="text-brand hover:underline font-semibold flex items-center gap-1"
            >
              View Analytics <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* "Your Next Best Action" Hero Card (Section 47) */}
      <NextBestActionCard onStartLearning={() => onNavigate('/roadmap')} />

      {/* Interactive Skill Radar (Section 45) */}
      <div className="card p-6 lg:p-7 border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold font-heading text-primary flex items-center gap-2">
              <span>Interactive Skill Radar</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 font-bold border border-cyan-500/30">
                7 Dimensions
              </span>
            </h3>
            <p className="text-xs text-muted mt-0.5">
              Hover over any vertex to inspect your benchmark match, verified credentials, and learning resources.
            </p>
          </div>
        </div>

        <SkillRadarChart
          onSelectSkill={(skill) => onNavigate('/skills', { selectedSkill: skill })}
        />
      </div>

      {/* Skill Gap Section (Section 46) */}
      <SkillGapSection
        onFixGap={(gap) => onNavigate('/roadmap', { targetSkill: gap.id })}
        onTakeAssessment={(assessmentId) => onNavigate(`/assessment/${assessmentId}/take`)}
      />

      {/* Interactive Career Milestones Pipeline (Section 48) */}
      <CareerJourneyPipeline onNavigate={onNavigate} />

      {/* Active Applications Quick Peek */}
      <div className="card p-6 border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold font-heading text-primary">
              Active Opportunities & Applications
            </h3>
            <p className="text-xs text-muted">
              Live recruitment pipeline and upcoming interview timelines.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconRight={ArrowRight}
            onClick={() => onNavigate('/applications')}
          >
            Open Kanban Board
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {applications.slice(0, 4).map((app) => (
            <div key={app.id} className="p-4 rounded-xl bg-slate-950/60 border border-white/10 hover:border-indigo-500/40 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-brand uppercase tracking-wider">{app.company}</span>
                <span className={`badge ${app.badgeColor} text-[10px]`}>{app.stage}</span>
              </div>
              <div className="text-sm font-semibold text-primary truncate">{app.role}</div>
              <div className="text-xs text-muted mt-1 truncate">{app.statusNote}</div>
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-muted">
                <span>{app.salaryOrStipend}</span>
                <span className="text-indigo-400 font-medium">{app.appliedDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
