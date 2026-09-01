import React, { useState } from 'react';
import { MOCK_INTERNSHIP_WORKSPACE } from '../../data/mockPortfolio';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Badge } from '../../components/common/Badge';
import {
  FolderGit2,
  Calendar,
  CheckCircle2,
  Clock,
  User,
  Star,
  FileText,
  Upload,
  MessageSquare,
  Award,
  Sparkles
} from 'lucide-react';

export const InternshipWorkspacePage = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [tasks, setTasks] = useState(MOCK_INTERNSHIP_WORKSPACE.tasksList);
  const [weeklyReportText, setWeeklyReportText] = useState('');
  const { company, role, mentor, currentWeek, totalWeeks, progressPercentage, weeklyMilestones, mentorFeedback } = MOCK_INTERNSHIP_WORKSPACE;

  const toggleTask = (taskId) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
    addToast({
      title: 'Task Status Updated',
      message: 'Milestone checklist synchronized.',
      type: 'info',
      duration: 2000
    });
  };

  const handleSubmitReport = (e) => {
    e.preventDefault();
    if (!weeklyReportText.trim()) return;
    addToast({
      title: '✅ Weekly Report Submitted!',
      message: `Week ${currentWeek} progress log delivered to ${mentor.name}.`,
      type: 'success',
      duration: 4000
    });
    setWeeklyReportText('');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Workspace Header (Section 57) */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-950 border border-white/10 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 size={13} className="text-emerald" />
            <span>Active Industrial Workspace</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold font-heading text-primary">
            {role} @ {company}
          </h1>
          <p className="text-sm text-secondary">
            Dedicated workspace for weekly report submissions, mentor evaluations, and academic credits.
          </p>
        </div>

        {/* Progress summary box */}
        <div className="card p-5 bg-slate-950/80 border-white/10 shrink-0 w-full lg:w-72">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted font-bold">INTERNSHIP PROGRESS</span>
            <span className="font-mono font-bold text-teal">{progressPercentage}%</span>
          </div>
          <ProgressBar value={progressPercentage} max={100} height={8} showPercentage={false} color="var(--color-accent-teal)" />
          <div className="mt-2 text-xs font-semibold text-primary flex justify-between">
            <span>Week {currentWeek} of {totalWeeks}</span>
            <span className="text-emerald">On Schedule ✓</span>
          </div>
        </div>
      </div>

      {/* Grid: Mentor Profile & Tasks & Submission */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Tasks & Weekly Submission */}
        <div className="lg:col-span-8 space-y-6">
          {/* Action Tasks Checklist */}
          <div className="card p-6 border-white/10 bg-slate-900/60">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand" />
                <span>Week {currentWeek} Action Tasks</span>
              </h3>
              <span className="text-xs text-muted font-mono">
                {tasks.filter(t => t.completed).length} / {tasks.length} Completed
              </span>
            </div>

            <div className="space-y-2.5">
              {tasks.map((t) => (
                <div
                  key={t.id}
                  onClick={() => toggleTask(t.id)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    t.completed
                      ? 'bg-emerald-950/20 border-emerald-500/30 text-muted line-through'
                      : 'bg-slate-950/70 border-white/10 hover:border-indigo-500/40 text-primary'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                      t.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-600'
                    }`}>
                      {t.completed && <CheckCircle2 size={14} />}
                    </div>
                    <span className="text-xs font-semibold">{t.title}</span>
                  </div>
                  <span className="text-[11px] text-muted font-mono">{t.dueDate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Report Submission Form */}
          <div className="card p-6 border-white/10 bg-slate-900/60">
            <h3 className="text-lg font-bold font-heading text-primary mb-2 flex items-center gap-2">
              <FileText size={18} className="text-teal" />
              <span>Submit Week {currentWeek} Activity Report</span>
            </h3>
            <p className="text-xs text-secondary mb-4">
              Summarize code modules completed, PR links, and blockers for mentor approval.
            </p>

            <form onSubmit={handleSubmitReport} className="space-y-4">
              <textarea
                rows={4}
                value={weeklyReportText}
                onChange={(e) => setWeeklyReportText(e.target.value)}
                placeholder="E.g., Completed distributed PyTorch evaluation runner, addressed PR #42 comments, Docker image optimized from 2.4GB to 620MB..."
                className="input-field text-xs resize-none"
              />

              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm" icon={Upload}>
                  Attach Log / Diff File
                </Button>

                <Button variant="primary" size="sm" type="submit">
                  Submit Weekly Report
                </Button>
              </div>
            </form>
          </div>

          {/* Weekly Milestones Timeline */}
          <div className="card p-6 border-white/10 bg-slate-900/60">
            <h3 className="text-lg font-bold font-heading text-primary mb-4">
              8-Week Milestone Progression
            </h3>

            <div className="space-y-3">
              {weeklyMilestones.map((m) => (
                <div key={m.week} className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-[10px]">
                      W{m.week}
                    </span>
                    <span className="font-semibold text-primary">{m.title}</span>
                  </div>
                  <Badge variant={m.status === 'Completed' ? 'success' : m.status === 'In Progress' ? 'teal' : 'neutral'}>
                    {m.grade}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Mentor & Feedback */}
        <div className="lg:col-span-4 space-y-6">
          {/* Mentor Card */}
          <div className="card p-6 border-white/10 bg-slate-900/60 text-center">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="w-20 h-20 rounded-2xl object-cover mx-auto border-2 border-indigo-500/40 shadow-lg shadow-indigo-950/50 mb-3"
            />
            <h4 className="text-base font-bold font-heading text-primary">{mentor.name}</h4>
            <div className="text-xs text-brand font-medium">{mentor.title}</div>
            <div className="text-xs text-muted mt-1">{mentor.email}</div>

            <Button variant="secondary" size="sm" icon={MessageSquare} className="w-full mt-4">
              Message Mentor
            </Button>
          </div>

          {/* Mentor Feedback History */}
          <div className="card p-6 border-white/10 bg-slate-900/60 space-y-4">
            <h4 className="text-sm font-bold font-heading text-primary uppercase tracking-wider text-muted">
              Official Mentor Feedback
            </h4>

            {mentorFeedback.map((fb, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted font-mono">{fb.date}</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <Star size={12} fill="currentColor" /> {fb.rating} / 5.0
                  </span>
                </div>
                <p className="text-xs text-secondary leading-relaxed italic">
                  "{fb.comment}"
                </p>
                <div className="text-[10px] text-brand font-semibold text-right">
                  — {fb.mentorName}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
