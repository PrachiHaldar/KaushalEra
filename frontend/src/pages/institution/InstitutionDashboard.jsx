import React, { useState } from 'react';
import { MOCK_INSTITUTION_METRICS } from '../../data/mockInstitution';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { ProgressBar } from '../../components/common/ProgressBar';
import {
  Building2,
  Users,
  Briefcase,
  Award,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  GraduationCap,
  Sparkles
} from 'lucide-react';

export const InstitutionDashboard = ({ onNavigate }) => {
  const { institutionName, totalStudents, industryPartners, activeInternships, placementsThisSeason, placementRate, avgPackage, highestPackage, departments, topSkillGapsOverall } = MOCK_INSTITUTION_METRICS;

  const [selectedDeptId, setSelectedDeptId] = useState('cs');
  const activeDept = departments.find(d => d.id === selectedDeptId) || departments[0];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-950 border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider mb-2">
            <Building2 size={13} className="text-cyan-400" />
            <span>Institution Analytics Command Center</span>
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-primary">
            {institutionName}
          </h1>
          <p className="text-sm text-secondary">
            Executive intelligence on student readiness, placement conversion, and department curriculum gaps.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" onClick={() => window.print()}>
            Export Accreditation Report
          </Button>
        </div>
      </div>

      {/* Top 5 KPIs (Section 67) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="card p-5 border-white/10 bg-slate-900/60 text-center">
          <div className="text-xs text-muted uppercase font-bold tracking-wider">Total Enrolled</div>
          <div className="text-3xl font-black font-heading text-primary mt-1">{totalStudents.toLocaleString()}</div>
          <span className="text-[10px] text-brand mt-1 block">Across 4 Engineering Depts</span>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900/60 text-center">
          <div className="text-xs text-muted uppercase font-bold tracking-wider">Industry Partners</div>
          <div className="text-3xl font-black font-heading text-teal mt-1">{industryPartners}</div>
          <span className="text-[10px] text-emerald mt-1 block">Tier-1 & MNC MoUs</span>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900/60 text-center">
          <div className="text-xs text-muted uppercase font-bold tracking-wider">Active Interns</div>
          <div className="text-3xl font-black font-heading text-amber mt-1">{activeInternships}</div>
          <span className="text-[10px] text-muted mt-1 block">Paid Industrial Credits</span>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900/60 text-center">
          <div className="text-xs text-muted uppercase font-bold tracking-wider">Total Placements</div>
          <div className="text-3xl font-black font-heading text-indigo-400 mt-1">{placementsThisSeason.toLocaleString()}</div>
          <span className="text-[10px] text-indigo-300 mt-1 block">Avg CTC: {avgPackage}</span>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900/60 text-center">
          <div className="text-xs text-muted uppercase font-bold tracking-wider">Placement Rate</div>
          <div className="text-3xl font-black font-heading text-emerald mt-1">{placementRate}%</div>
          <span className="text-[10px] text-emerald mt-1 block">Highest: {highestPackage}</span>
        </div>
      </div>

      {/* Interactive Department Drill-down (Section 67) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Department List Selector */}
        <div className="lg:col-span-4 card p-6 border-white/10 bg-slate-900/60 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted font-heading">
            Select Department for Drill-down
          </h3>

          <div className="space-y-2">
            {departments.map((dept) => {
              const isSelected = selectedDeptId === dept.id;

              return (
                <div
                  key={dept.id}
                  onClick={() => setSelectedDeptId(dept.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-indigo-600/25 border-indigo-500 shadow-md shadow-indigo-950/40 text-primary'
                      : 'bg-slate-950/60 border-white/5 hover:border-white/15 text-secondary'
                  }`}
                >
                  <div>
                    <h4 className="text-sm font-bold font-heading">{dept.name}</h4>
                    <span className="text-xs text-muted">{dept.students} Students • {dept.placementRate}% Placement</span>
                  </div>
                  <ChevronRight size={16} className={isSelected ? 'text-indigo-400' : 'text-slate-600'} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Department Intelligence View */}
        <div className="lg:col-span-8 card p-6 lg:p-7 border-white/10 bg-slate-900/60 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs text-brand font-bold uppercase tracking-wider">Department Analytics</span>
              <h3 className="text-2xl font-extrabold font-heading text-primary mt-0.5">
                {activeDept.name}
              </h3>
            </div>
            <Badge variant="teal" className="text-sm font-bold px-3 py-1">
              {activeDept.placementRate}% Placement Rate
            </Badge>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center bg-slate-950/60 p-4 rounded-xl border border-white/5">
            <div>
              <div className="text-xs text-muted">Students Enrolled</div>
              <div className="text-xl font-bold text-primary font-heading mt-0.5">{activeDept.students}</div>
            </div>
            <div>
              <div className="text-xs text-muted">Internships Placed</div>
              <div className="text-xl font-bold text-teal font-heading mt-0.5">{activeDept.internshipsCount}</div>
            </div>
            <div>
              <div className="text-xs text-muted">Avg Skill Index</div>
              <div className="text-xl font-bold text-emerald font-heading mt-0.5">{activeDept.avgSkillScore}%</div>
            </div>
          </div>

          {/* Critical Gaps Identified in Department */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <AlertTriangle size={14} /> Department-Level Skill Deficits
            </h4>
            <div className="flex items-center gap-2 flex-wrap">
              {activeDept.criticalGaps.map((gap, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-xl bg-rose-500/10 text-rose-300 border border-rose-500/30 font-medium">
                  ⚠ {gap}
                </span>
              ))}
            </div>
          </div>

          {/* Top Recruiters for this Department */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
              Top Active Recruiters
            </h4>
            <div className="flex items-center gap-2 flex-wrap">
              {activeDept.topRecruiters.map((rec, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-xl bg-slate-950 text-primary border border-white/10 font-semibold">
                  🏢 {rec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Top Skill Gaps (Section 67) */}
      <div className="card p-6 border-white/10 bg-slate-900/60 space-y-4">
        <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
          <AlertTriangle size={18} className="text-amber" />
          <span>Top Institutional Skill Gaps Requiring Curriculum Intervention</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topSkillGapsOverall.map((g, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-primary">{g.skill}</span>
                <span className="text-rose-400 font-bold">{g.unreadyPercentage}% Unready</span>
              </div>
              <ProgressBar value={g.unreadyPercentage} max={100} height={6} showPercentage={false} color="var(--color-error)" />
              <div className="text-[11px] text-muted">
                Affects approximately <strong>{g.affectedStudents}</strong> students across semesters 5-8.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
