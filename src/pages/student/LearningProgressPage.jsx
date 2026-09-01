import React from 'react';
import { MOCK_LEARNING_ANALYTICS } from '../../data/mockResources';
import { useAppData } from '../../context/AppDataContext';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Button } from '../../components/common/Button';
import {
  LineChart,
  Clock,
  CheckCircle2,
  BookOpen,
  TrendingUp,
  Flame,
  Award,
  Calendar,
  Sparkles
} from 'lucide-react';

export const LearningProgressPage = ({ onNavigate }) => {
  const { streak, xp } = useAppData();
  const { totalHours, resourcesCompleted, coursesFinished, coursesTotal, skillsImproved, weeklyActivity } = MOCK_LEARNING_ANALYTICS;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="p-7 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-950 border border-white/10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider mb-2">
            <LineChart size={13} className="text-cyan-400" />
            <span>Learning Intelligence & Analytics</span>
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-primary">
            Learning Progress & Activity Log
          </h1>
          <p className="text-sm text-secondary">
            Continuous skill acquisition tracking, study hours, and weekly commitment streaks.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-950/80 border border-white/10 px-4 py-2.5 rounded-2xl">
          <Flame size={22} className="text-amber-500 animate-pulse" />
          <div>
            <div className="text-xs text-muted">Active Streak</div>
            <div className="text-base font-black font-heading text-primary">{streak} Consecutive Days</div>
          </div>
        </div>
      </div>

      {/* Top 4 KPI Metrics (Section 53) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-5 border-white/10 bg-slate-900/60 flex flex-col justify-between">
          <div className="flex justify-between items-start text-muted text-xs uppercase font-bold tracking-wider">
            <span>Learning Hours</span>
            <Clock size={16} className="text-indigo-400" />
          </div>
          <div className="my-3">
            <div className="text-3xl font-black font-heading text-primary">{totalHours}h</div>
            <ProgressBar value={totalHours} max={50} height={6} showPercentage={false} className="mt-2" />
          </div>
          <span className="text-[11px] text-emerald font-semibold">+4.5h from last week</span>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900/60 flex flex-col justify-between">
          <div className="flex justify-between items-start text-muted text-xs uppercase font-bold tracking-wider">
            <span>Resources Done</span>
            <CheckCircle2 size={16} className="text-teal" />
          </div>
          <div className="my-3">
            <div className="text-3xl font-black font-heading text-primary">{resourcesCompleted}%</div>
            <ProgressBar value={resourcesCompleted} max={100} height={6} showPercentage={false} className="mt-2" color="var(--color-accent-teal)" />
          </div>
          <span className="text-[11px] text-muted">24 of 32 syllabus guides</span>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900/60 flex flex-col justify-between">
          <div className="flex justify-between items-start text-muted text-xs uppercase font-bold tracking-wider">
            <span>Courses Finished</span>
            <BookOpen size={16} className="text-amber" />
          </div>
          <div className="my-3">
            <div className="text-3xl font-black font-heading text-primary">{coursesFinished} <span className="text-lg text-muted font-normal">/ {coursesTotal}</span></div>
            <ProgressBar value={(coursesFinished / coursesTotal) * 100} max={100} height={6} showPercentage={false} className="mt-2" color="var(--color-accent-amber)" />
          </div>
          <span className="text-[11px] text-amber-400 font-semibold">3 active courses remaining</span>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900/60 flex flex-col justify-between">
          <div className="flex justify-between items-start text-muted text-xs uppercase font-bold tracking-wider">
            <span>Skills Improved</span>
            <TrendingUp size={16} className="text-purple-400" />
          </div>
          <div className="my-3">
            <div className="text-3xl font-black font-heading text-primary">+{skillsImproved}</div>
            <ProgressBar value={85} max={100} height={6} showPercentage={false} className="mt-2" color="var(--color-accent-purple)" />
          </div>
          <span className="text-[11px] text-purple-300 font-semibold">Level 6 ({xp} Total XP)</span>
        </div>
      </div>

      {/* Weekly Activity Heatmap & Distribution (Section 53) */}
      <div className="card p-6 border-white/10 bg-slate-900/60">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold font-heading text-primary">
              Weekly Learning Activity & Engagement
            </h3>
            <p className="text-xs text-muted">
              Daily recorded study and coding practice sessions (Monday to Sunday).
            </p>
          </div>
          <div className="text-xs text-muted font-mono">Total this week: 26.0h</div>
        </div>

        {/* Visual Daily Column Chart */}
        <div className="grid grid-cols-7 gap-3 sm:gap-6 pt-4 pb-2">
          {weeklyActivity.map((day, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <span className="text-xs font-mono font-bold text-muted">{day.hours}h</span>
              <div className="w-full h-32 bg-slate-950/80 rounded-xl p-1 flex items-end justify-center border border-white/5">
                <div
                  className={`w-full rounded-lg transition-all duration-700 ${
                    day.active
                      ? 'bg-gradient-to-t from-indigo-600 to-cyan-400 shadow-md shadow-indigo-500/30'
                      : 'bg-slate-800/40'
                  }`}
                  style={{ height: `${(day.hours / 6.0) * 100}%` }}
                />
              </div>
              <span className={`text-xs font-bold ${day.active ? 'text-primary' : 'text-muted'}`}>
                {day.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
