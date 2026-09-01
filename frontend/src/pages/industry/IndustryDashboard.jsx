import React from 'react';
import { MOCK_RECRUITER_METRICS, MOCK_CANDIDATES } from '../../data/mockCandidates';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { ProgressBar } from '../../components/common/ProgressBar';
import {
  Users,
  Briefcase,
  Send,
  Calendar,
  Award,
  Sparkles,
  ArrowRight,
  UserCheck,
  TrendingUp,
  Filter
} from 'lucide-react';

export const IndustryDashboard = ({ onNavigate }) => {
  const { activeJobs, applications, shortlisted, interviews, offers, funnelData } = MOCK_RECRUITER_METRICS;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Recruiter Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-950 border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-bold uppercase tracking-wider mb-2">
            <UserCheck size={13} className="text-teal" />
            <span>Recruiter Intelligence & Talent Pipeline</span>
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-primary">
            TechNova Labs Recruitment Portal
          </h1>
          <p className="text-sm text-secondary">
            AI candidate matching, verified coding assessment benchmarks, and campus drive pipelines.
          </p>
        </div>

        <Button
          variant="accent"
          icon={Sparkles}
          onClick={() => onNavigate('/industry/matching')}
        >
          Open Candidate Matcher
        </Button>
      </div>

      {/* Top Metrics (Section 64) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="card p-5 border-white/10 bg-slate-900/60 text-center">
          <div className="text-xs text-muted uppercase font-bold tracking-wider">Active Jobs</div>
          <div className="text-3xl font-black font-heading text-primary mt-1">{activeJobs}</div>
          <span className="text-[10px] text-teal mt-1 block">Across 3 Domains</span>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900/60 text-center">
          <div className="text-xs text-muted uppercase font-bold tracking-wider">Applications</div>
          <div className="text-3xl font-black font-heading text-brand mt-1">{applications}</div>
          <span className="text-[10px] text-emerald mt-1 block">+42 this week</span>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900/60 text-center">
          <div className="text-xs text-muted uppercase font-bold tracking-wider">Shortlisted</div>
          <div className="text-3xl font-black font-heading text-cyan-400 mt-1">{shortlisted}</div>
          <span className="text-[10px] text-muted mt-1 block">Match &gt; 80%</span>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900/60 text-center">
          <div className="text-xs text-muted uppercase font-bold tracking-wider">Interviews</div>
          <div className="text-3xl font-black font-heading text-amber mt-1">{interviews}</div>
          <span className="text-[10px] text-amber-400 mt-1 block">8 Scheduled Today</span>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900/60 text-center">
          <div className="text-xs text-muted uppercase font-bold tracking-wider">Offers Made</div>
          <div className="text-3xl font-black font-heading text-emerald mt-1">{offers}</div>
          <span className="text-[10px] text-emerald mt-1 block">92% Acceptance Rate</span>
        </div>
      </div>

      {/* Recruitment Funnel & Match Distribution (Section 64) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Funnel */}
        <div className="lg:col-span-6 card p-6 border-white/10 bg-slate-900/60 space-y-4">
          <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
            <TrendingUp size={18} className="text-teal" />
            <span>Recruitment Pipeline Funnel</span>
          </h3>

          <div className="space-y-3 pt-2">
            {funnelData.map((f, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-secondary">{f.stage}</span>
                  <span className="font-mono font-bold text-primary">{f.count} candidates</span>
                </div>
                <div className="h-3 bg-slate-950 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(f.count / funnelData[0].count) * 100}%`,
                      background: f.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Matched Candidates Preview */}
        <div className="lg:col-span-6 card p-6 border-white/10 bg-slate-900/60 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-heading text-primary">
              Top AI Matched Candidates
            </h3>
            <Button
              variant="ghost"
              size="sm"
              iconRight={ArrowRight}
              onClick={() => onNavigate('/industry/matching')}
            >
              View All Candidates
            </Button>
          </div>

          <div className="space-y-3">
            {MOCK_CANDIDATES.map((cand) => (
              <div key={cand.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={cand.avatar}
                    alt={cand.name}
                    className="w-10 h-10 rounded-xl object-cover border border-white/10"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-primary">{cand.name}</h4>
                    <div className="text-xs text-muted">{cand.university} • GPA: {cand.gpa}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="badge badge-teal font-extrabold text-xs">
                    {cand.skillMatch}% Match
                  </span>
                  <div className="text-[10px] text-emerald font-semibold mt-1">
                    Assessment: {cand.assessmentScore}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
