import React, { useState } from 'react';
import { MOCK_CANDIDATES } from '../../data/mockCandidates';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge, VerificationBadge } from '../../components/common/Badge';
import { ProgressBar } from '../../components/common/ProgressBar';
import {
  UserCheck,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Sparkles,
  ExternalLink,
  Award,
  GraduationCap
} from 'lucide-react';

export const CandidateMatchingPage = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('match'); // 'match', 'assessment', 'gpa'
  const [candidatesList, setCandidatesList] = useState(MOCK_CANDIDATES);

  const handleShortlist = (cand) => {
    addToast({
      title: 'Candidate Shortlisted!',
      message: `${cand.name} added to TechNova Labs talent queue. Notification dispatched.`,
      type: 'success',
      duration: 3500
    });
  };

  const handleScheduleInterview = (cand) => {
    addToast({
      title: 'Interview Invite Sent',
      message: `Technical round calendar invitation dispatched to ${cand.name}.`,
      type: 'info',
      duration: 3500
    });
  };

  const sortedCandidates = [...candidatesList].sort((a, b) => {
    if (sortBy === 'match') return b.skillMatch - a.skillMatch;
    if (sortBy === 'assessment') return b.assessmentScore - a.assessmentScore;
    if (sortBy === 'gpa') return parseFloat(b.gpa) - parseFloat(a.gpa);
    return 0;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold font-heading text-primary flex items-center gap-2.5">
            <span>AI Candidate Match Engine</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-bold border border-teal-500/40">
              Verified Pipeline
            </span>
          </h1>
          <p className="text-sm text-secondary mt-1">
            Multi-factor candidate ranking combining verified assessment scores, GitHub code reviews, and academic GPA.
          </p>
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input-field text-xs font-semibold text-primary w-48"
          >
            <option value="match" className="bg-slate-900">Highest Skill Match %</option>
            <option value="assessment" className="bg-slate-900">Assessment Score</option>
            <option value="gpa" className="bg-slate-900">Academic GPA</option>
          </select>
        </div>
      </div>

      {/* Candidate Matching Cards (Section 65) */}
      <div className="grid grid-cols-1 gap-6">
        {sortedCandidates.map((cand) => (
          <div
            key={cand.id}
            className="card p-6 lg:p-7 border-white/10 bg-slate-900/60 hover:border-teal-500/40 transition-all space-y-6"
          >
            {/* Top Bar: Profile & Match Score */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-start gap-4">
                <img
                  src={cand.avatar}
                  alt={cand.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-white/15 shadow-md shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-bold font-heading text-primary">{cand.name}</h3>
                    <VerificationBadge type="assessment" tooltip={cand.verification} />
                  </div>
                  <p className="text-xs font-semibold text-brand mt-0.5">{cand.title}</p>
                  <div className="text-xs text-muted flex items-center gap-2 mt-1">
                    <span>{cand.university}</span>
                    <span>•</span>
                    <span className="text-primary font-bold">GPA: {cand.gpa}</span>
                    <span>•</span>
                    <span className="text-muted">{cand.batch}</span>
                  </div>
                </div>
              </div>

              {/* Match Gauge */}
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted uppercase font-bold">Skill Match:</span>
                  <span className="text-2xl font-black font-heading text-teal font-mono">{cand.skillMatch}%</span>
                </div>
                <div className="w-36 h-2 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full" style={{ width: `${cand.skillMatch}%` }} />
                </div>
              </div>
            </div>

            {/* Middle: Skills Checkmarks & Verified Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skills Checkmarks */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                  Technical Skill Evaluation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cand.skills.map((sk, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                        sk.matched
                          ? 'bg-emerald-950/20 border-emerald-500/30 text-primary'
                          : 'bg-amber-950/20 border-amber-500/30 text-secondary'
                      }`}
                    >
                      <span className="font-semibold">{sk.name}</span>
                      {sk.matched ? (
                        <span className="text-emerald font-bold text-[11px] flex items-center gap-1">
                          <CheckCircle2 size={13} /> Matched
                        </span>
                      ) : (
                        <span className="text-amber-400 font-bold text-[11px] flex items-center gap-1">
                          <AlertTriangle size={13} /> Gap
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Project & Experience */}
              <div className="space-y-2.5 bg-slate-950/60 p-4 rounded-xl border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                  Top Capstone Repository & Experience
                </h4>
                <div className="text-xs text-primary font-semibold">
                  💻 {cand.topProject}
                </div>
                <div className="text-xs text-secondary">
                  💼 {cand.experience}
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-muted pt-2 border-t border-white/5">
                  <span>Proctored Assessment: <strong className="text-emerald">{cand.assessmentScore}%</strong></span>
                  <span>Projects: <strong className="text-teal">{cand.projectsCount} Verified</strong></span>
                </div>
              </div>
            </div>

            {/* Bottom Actions (Section 65) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
              <div className="text-xs text-muted">
                Recommended for: <strong className="text-primary">{cand.recommendedFor.join(', ')}</strong>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  icon={ExternalLink}
                  onClick={() => onNavigate('/portfolio')}
                >
                  View Portfolio
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  icon={UserCheck}
                  onClick={() => handleShortlist(cand)}
                >
                  Shortlist
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  icon={Calendar}
                  onClick={() => handleScheduleInterview(cand)}
                >
                  Schedule Interview
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
