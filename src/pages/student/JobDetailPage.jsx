import React from 'react';
import { MOCK_JOBS } from '../../data/mockJobs';
import { useAppData } from '../../context/AppDataContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge, VerificationBadge } from '../../components/common/Badge';
import { ProgressBar } from '../../components/common/ProgressBar';
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Building2,
  ChevronLeft,
  Share2
} from 'lucide-react';

export const JobDetailPage = ({ jobId = 'job-1', jobData, onNavigate }) => {
  const { applyToOpportunity, applications } = useAppData();
  const { addToast } = useToast();

  const job = jobData || MOCK_JOBS.find(j => j.id === jobId) || MOCK_JOBS[0];
  const hasApplied = applications.some(a => a.role === job.title && a.company === job.company);

  const handleApply = () => {
    if (hasApplied) return;
    applyToOpportunity(job, job.type || 'Job');
    addToast({
      title: '🎉 Application Submitted!',
      message: `Successfully applied to ${job.title} at ${job.company}. +25 XP awarded!`,
      type: 'success',
      duration: 4000,
      actionLabel: 'View in Kanban',
      onAction: () => onNavigate('/applications')
    });
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => onNavigate('/opportunities')}
        className="text-xs text-muted hover:text-primary flex items-center gap-1 transition-colors"
      >
        <ChevronLeft size={14} /> Back to Marketplace
      </button>

      {/* Hero Header */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-950 border border-white/10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center font-black text-2xl text-white font-heading shadow-lg shadow-indigo-500/25 shrink-0">
              {job.logo || job.company.substring(0, 2)}
            </div>
            <div>
              <div className="text-sm font-semibold text-brand">{job.company}</div>
              <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-primary mt-0.5">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted mt-2">
                <span className="flex items-center gap-1"><MapPin size={13} /> {job.location}</span>
                <span>•</span>
                <span className="text-emerald font-bold font-mono">{job.salary || job.stipend}</span>
                <span>•</span>
                <span>{job.type}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3 shrink-0">
            <div className="badge badge-teal text-sm font-black px-3.5 py-1.5 shadow-md">
              <Sparkles size={14} /> {job.skillMatch}% Match
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={hasApplied ? 'ghost' : 'primary'}
                size="md"
                disabled={hasApplied}
                onClick={handleApply}
              >
                {hasApplied ? 'Already Applied ✓' : 'Submit Application Now'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Match Intelligence & Bridge Section (Section 55) */}
      <div className="card p-6 bg-slate-900/60 border-white/10 space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
              <Sparkles size={16} className="text-teal" />
              <span>Transparent AI Skill Match Analysis</span>
            </h3>
            <span className="text-xs text-muted font-mono">Job Benchmark: 92% Target</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/60 p-4 rounded-xl border border-white/5">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted font-bold">YOUR VERIFIED SKILLS</span>
                <span className="font-mono font-bold text-primary">86%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-400 to-indigo-500 rounded-full" style={{ width: '86%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted font-bold">REQUIRED BENCHMARK</span>
                <span className="font-mono font-bold text-brand">92%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500/80 rounded-full" style={{ width: '92%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Why you're a match vs Skills to improve */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Why you're a match */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald flex items-center gap-1.5">
              <CheckCircle2 size={14} /> Why You're A Strong Match
            </h4>
            <div className="space-y-2">
              {job.matchingSkills ? job.matchingSkills.map((s, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <span className="font-semibold text-primary">✓ {typeof s === 'string' ? s : s.name}</span>
                  <span className="text-emerald text-[11px] font-medium">{typeof s === 'string' ? 'Verified' : s.note}</span>
                </div>
              )) : (
                <div className="text-xs text-muted">Python, SQL, Git match recruiter requirements.</div>
              )}
            </div>
          </div>

          {/* Skills to improve */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <AlertTriangle size={14} /> Skills To Improve Before Applying
            </h4>
            <div className="space-y-2">
              {job.skillsToImprove ? job.skillsToImprove.map((g, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 flex flex-col justify-between text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">⚠ {g.name}</span>
                    <span className="text-amber-400 font-mono text-[11px]">{g.current}% / {g.required}%</span>
                  </div>
                  <span className="text-[11px] text-secondary mt-1">{g.recommendation}</span>
                </div>
              )) : (
                <div className="text-xs text-muted">Complete Docker and System Design modules to reach 98% match.</div>
              )}
            </div>
          </div>
        </div>

        {/* Direct Bridge Button (Section 55) */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/80 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-primary">Want to guarantee interview shortlisting?</div>
            <div className="text-xs text-secondary">Close remaining skill gaps via our curated 2-hour interactive module.</div>
          </div>
          <Button
            variant="accent"
            size="sm"
            iconRight={ArrowRight}
            onClick={() => onNavigate('/roadmap')}
          >
            Improve Skills Before Applying
          </Button>
        </div>
      </div>

      {/* Role Description & Responsibilities */}
      <div className="card p-6 bg-slate-900/60 border-white/10 space-y-4">
        <h3 className="text-lg font-bold font-heading text-primary">Job Description & Responsibilities</h3>
        <p className="text-sm text-secondary leading-relaxed">{job.description}</p>

        {job.responsibilities && (
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Key Responsibilities</h4>
            <ul className="space-y-1.5 list-disc list-inside text-xs text-secondary">
              {job.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
