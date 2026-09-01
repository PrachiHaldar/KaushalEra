import React from 'react';
import { MOCK_FACULTY_DATA } from '../../data/mockInstitution';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { CircularGauge } from '../../components/common/CircularGauge';
import {
  GraduationCap,
  Building2,
  BrainCircuit,
  Briefcase,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  CheckCircle2
} from 'lucide-react';

export const FacultyDashboard = ({ onNavigate }) => {
  const { addToast } = useToast();
  const { name, department, designation, collaborationScore, activeCollaborationsCount, fdpCount, researchCount, consultancyCount, activeCollaborations, recommendedFDP, consultancyOpportunities } = MOCK_FACULTY_DATA;

  const handleApplyCollab = (title) => {
    addToast({
      title: 'Proposal Submitted',
      message: `Expression of interest registered for: ${title}`,
      type: 'success',
      duration: 3500
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Faculty Welcome Hero (Section 66) */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-950 border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap size={14} className="text-amber-400" />
            <span>Faculty Research & Industrial Enablement</span>
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-primary">
            Good Morning, {name} 👨‍🏫
          </h1>
          <p className="text-sm text-secondary mt-1">
            {designation} • {department}
          </p>
        </div>

        <Button
          variant="primary"
          icon={Sparkles}
          onClick={() => onNavigate('/faculty/collaborations')}
        >
          Explore Joint Research Grants
        </Button>
      </div>

      {/* Top Collaboration Metrics (Section 66) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Collaboration Score Gauge */}
        <div className="lg:col-span-4 card p-6 bg-slate-900/60 border-white/10 flex flex-col items-center justify-center text-center">
          <div className="text-xs uppercase font-bold text-muted tracking-wider mb-3">
            Industry Collaboration Score
          </div>
          <CircularGauge
            score={collaborationScore}
            maxScore={100}
            size={180}
            strokeWidth={14}
            label="Collaboration Index"
            sublabel="Top 5% Faculty Tier"
            color="#F59E0B"
            accentColor="#10B981"
          />
          <div className="text-xs text-secondary mt-4 max-w-xs">
            Reflects active research grants, industry consultancy hours, and sponsored student mentorships.
          </div>
        </div>

        {/* 4 KPI Numbers */}
        <div className="lg:col-span-8 grid grid-cols-2 gap-4">
          <div className="card p-5 border-white/10 bg-slate-900/60 flex flex-col justify-between">
            <div className="flex justify-between items-start text-xs uppercase font-bold text-muted">
              <span>Active Collaborations</span>
              <Building2 size={16} className="text-brand" />
            </div>
            <div className="my-2">
              <div className="text-3xl font-black font-heading text-primary">{activeCollaborationsCount}</div>
              <span className="text-xs text-emerald font-semibold">₹77 Lakhs Grant Pool</span>
            </div>
            <span className="text-[11px] text-muted">13 Research Scholars Engaged</span>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900/60 flex flex-col justify-between">
            <div className="flex justify-between items-start text-xs uppercase font-bold text-muted">
              <span>FDP Opportunities</span>
              <GraduationCap size={16} className="text-teal" />
            </div>
            <div className="my-2">
              <div className="text-3xl font-black font-heading text-primary">{fdpCount}</div>
              <span className="text-xs text-teal font-semibold">NVIDIA & AWS Certified</span>
            </div>
            <span className="text-[11px] text-muted">Matched with NLP research</span>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900/60 flex flex-col justify-between">
            <div className="flex justify-between items-start text-xs uppercase font-bold text-muted">
              <span>Research Opportunities</span>
              <BrainCircuit size={16} className="text-purple-400" />
            </div>
            <div className="my-2">
              <div className="text-3xl font-black font-heading text-primary">{researchCount}</div>
              <span className="text-xs text-purple-300 font-semibold">High Citation Potential</span>
            </div>
            <span className="text-[11px] text-muted">Sponsored by AICTE & DST</span>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900/60 flex flex-col justify-between">
            <div className="flex justify-between items-start text-xs uppercase font-bold text-muted">
              <span>Consultancy Matching</span>
              <Briefcase size={16} className="text-amber" />
            </div>
            <div className="my-2">
              <div className="text-3xl font-black font-heading text-primary">{consultancyCount}</div>
              <span className="text-xs text-amber-400 font-semibold">Up to ₹2.0L / month</span>
            </div>
            <span className="text-[11px] text-muted">Enterprise Architecture</span>
          </div>
        </div>
      </div>

      {/* Active Grants & Recommended FDPs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Grants */}
        <div className="card p-6 border-white/10 bg-slate-900/60 space-y-4">
          <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
            <Building2 size={18} className="text-brand" />
            <span>Active Industrial Research Labs</span>
          </h3>

          <div className="space-y-3">
            {activeCollaborations.map((collab) => (
              <div key={collab.id} className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold text-primary">{collab.title}</h4>
                  <Badge variant="teal">{collab.grantValue}</Badge>
                </div>
                <div className="text-xs text-secondary flex items-center gap-3">
                  <span>Partner: <strong>{collab.partner}</strong></span>
                  <span>•</span>
                  <span>{collab.timeline}</span>
                </div>
                <div className="text-[11px] text-emerald font-semibold pt-1">
                  👥 {collab.studentsInvolved} Undergraduates Funded & Co-Authoring
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended FDP Enablement */}
        <div className="card p-6 border-white/10 bg-slate-900/60 space-y-4">
          <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
            <Sparkles size={18} className="text-teal" />
            <span>Recommended Faculty Enablement Programs</span>
          </h3>

          <div className="space-y-3">
            {recommendedFDP.map((fdp) => (
              <div key={fdp.id} className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold text-primary">{fdp.title}</h4>
                  <span className="badge badge-purple text-[10px]">{fdp.duration}</span>
                </div>
                <div className="text-xs text-brand font-medium">Sponsor: {fdp.sponsor}</div>
                <p className="text-xs text-secondary italic">
                  💡 {fdp.matchReason}
                </p>
                <div className="pt-2 flex justify-end">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleApplyCollab(fdp.title)}
                  >
                    Register Nomination
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
