import React, { useState } from 'react';
import { MOCK_DOMAINS } from '../../data/mockDomains';
import { MOCK_ASSESSMENTS } from '../../data/mockAssessments';
import { MOCK_RESOURCES } from '../../data/mockResources';
import { useAppData } from '../../context/AppDataContext';
import { useToast } from '../../context/ToastContext';
import { Tabs } from '../../components/common/Tabs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  BrainCircuit,
  Globe,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Briefcase,
  Layers,
  Award,
  ChevronLeft,
  Bookmark,
  Clock,
  MapPin,
  CheckSquare,
  FileText,
  DollarSign
} from 'lucide-react';

export const DomainDetailPage = ({ domainId = 'artificial-intelligence', onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const { jobs, internships, applyToOpportunity, toggleBookmarkResource, bookmarkedResourceIds } = useAppData();
  const { addToast } = useToast();

  const domain = MOCK_DOMAINS.find(d => d.id === domainId) || MOCK_DOMAINS[0];

  // Domain-specific resources, assessment, internships, and jobs
  const domainResources = MOCK_RESOURCES.filter(r => r.domainId === domain.id);
  const domainAssessment = MOCK_ASSESSMENTS.find(a => a.domainId === domain.id || a.id === domain.assessmentId) || MOCK_ASSESSMENTS[0];
  const domainInternships = internships.filter(i => i.domainId === domain.id || (i.skills && domain.requiredSkills?.some(s => i.skills.includes(s.name) || i.skills.some(is => is.toLowerCase().includes(s.name.toLowerCase())))));
  const domainJobs = jobs.filter(j => j.domainId === domain.id || (j.skills && domain.requiredSkills?.some(s => j.skills.includes(s.name) || j.skills.some(js => js.toLowerCase().includes(s.name.toLowerCase())))));

  const tabList = [
    { id: 'overview', label: 'Overview' },
    { id: 'skills', label: 'Skill Mapping' },
    { id: 'assessment', label: 'Skill Assessment' },
    { id: 'materials', label: 'Learning Material' },
    { id: 'internships', label: `Internships (${domainInternships.length || 1})` },
    { id: 'jobs', label: `Jobs (${domainJobs.length || 1})` },
    { id: 'projects', label: 'Projects' }
  ];

  const handleApplyInternship = (internship) => {
    applyToOpportunity(internship, 'Internship');
    addToast({
      title: 'Application Submitted! 🎉',
      message: `Applied to ${internship.title} at ${internship.company}.`,
      type: 'success',
      duration: 3500
    });
  };

  return (
    <div className="space-y-6 animate-fade-in select-none">
      {/* Back button */}
      <button
        onClick={() => onNavigate('/domains')}
        className="text-xs text-muted hover:text-primary flex items-center gap-1 transition-colors"
      >
        <ChevronLeft size={14} /> Back to All Domains
      </button>

      {/* Hero Section */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-950 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider">
            <BrainCircuit size={14} className="text-cyan-400" />
            <span>Domain Intelligence Hub • {domain.badge}</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-black font-heading text-primary tracking-tight">
            {domain.title}
          </h1>

          <p className="text-sm lg:text-base text-secondary leading-relaxed">
            {domain.tagline}
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs">
            <div>
              <span className="text-muted">Industry Demand: </span>
              <strong className="text-emerald font-bold">{domain.demandPercent}% Very High</strong>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div>
              <span className="text-muted">Average Compensation: </span>
              <strong className="text-primary font-bold">{domain.avgSalary}</strong>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div>
              <span className="text-muted">Available Roles: </span>
              <strong className="text-brand font-bold">{domain.careerPathsCount} Specialized Paths</strong>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Button
              variant="primary"
              size="md"
              icon={Sparkles}
              onClick={() => onNavigate(`/assessment/${domainAssessment?.id || 'python-advanced'}/take`)}
            >
              Take Skill Assessment
            </Button>
            <Button
              variant="secondary"
              size="md"
              icon={Briefcase}
              onClick={() => setActiveTab('internships')}
            >
              View Domain Internships
            </Button>
            <Button
              variant="ghost"
              size="md"
              icon={BookOpen}
              onClick={() => onNavigate('/roadmap')}
            >
              Interactive Roadmap
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs Menu */}
      <Tabs
        tabs={tabList}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Tab Content Panels */}
      <div className="card p-6 bg-slate-900/60 border-white/10">
        
        {/* 1. OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold font-heading text-primary mb-2">
                Domain Overview & Market Landscape
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {domain.overview}
              </p>
            </div>

            {/* High-Impact Career Roles */}
            <div>
              <h4 className="text-base font-bold font-heading text-primary mb-3">
                High-Impact Career Roles in {domain.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {domain.careerRoles?.map((r, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-950/70 border border-white/5 flex flex-col justify-between hover:border-indigo-500/30 transition-all">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-primary">{r.role}</span>
                        <span className="text-xs font-mono text-emerald font-semibold">{r.avgSalary}</span>
                      </div>
                      <span className="text-xs text-muted">Market Demand: <strong className="text-brand">{r.demand}</strong></span>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 flex justify-between items-center text-xs">
                      <span className="text-muted">Your Profile Match:</span>
                      <strong className="text-brand font-mono font-bold">{r.match}%</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. SKILL MAPPING TAB */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold font-heading text-primary">
                Domain Skill Taxonomy & Curriculum Mapping
              </h3>
              <p className="text-xs text-muted mt-1">
                Required technical proficiencies and their weighted contribution to hiring readiness in {domain.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {domain.requiredSkills?.map((s, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between hover:border-indigo-500/30 transition-all">
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-primary flex items-center gap-2">
                      <span>{s.name}</span>
                      <span className="badge badge-primary text-[10px]">{s.level}</span>
                    </div>
                    <span className="text-xs text-muted">Domain Weight Contribution: <strong className="text-brand">{s.weight}</strong></span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onNavigate('/skills')}
                  >
                    Verify Skill →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. SKILL ASSESSMENT TAB */}
        {activeTab === 'assessment' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/70 via-slate-950 to-slate-900 border border-indigo-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="badge badge-primary text-xs">Verified Domain Skill Assessment</span>
                <h3 className="text-xl font-bold font-heading text-primary">
                  {domainAssessment ? domainAssessment.title : `${domain.title} Assessment`}
                </h3>
                <p className="text-xs text-secondary max-w-xl leading-relaxed">
                  Proctored baseline evaluation testing algorithmic mastery, system architecture, and domain-specific problem solving. Earning ≥ 80% unlocks verified badges for recruiters.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted pt-1">
                  <span>⏱️ <strong>{domainAssessment?.durationMinutes || 15} Minutes</strong></span>
                  <span>❓ <strong>{domainAssessment?.questionsCount || 5} Questions</strong></span>
                  <span>⚡ <strong>+{domainAssessment?.rewardXP || 100} XP Points</strong></span>
                </div>
              </div>

              <Button
                variant="glow"
                size="lg"
                iconRight={ArrowRight}
                onClick={() => onNavigate(`/assessment/${domainAssessment?.id || 'python-advanced'}/take`)}
              >
                Start Assessment Now
              </Button>
            </div>

            {/* Tested Competencies */}
            <div>
              <h4 className="text-sm font-bold font-heading text-primary mb-3">
                Syllabus & Tested Competencies:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {(domainAssessment?.testedSkills || ['Core Syntax', 'Architecture Design', 'Optimization & Memory', 'Data Modeling', 'Security & Debugging']).map((skill, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-center gap-2 text-xs text-secondary">
                    <CheckCircle2 size={15} className="text-brand shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. LEARNING MATERIAL TAB */}
        {activeTab === 'materials' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold font-heading text-primary">
                Curated Learning Materials & Resources for {domain.title}
              </h3>
              <p className="text-xs text-muted mt-1">
                Hand-picked technical reference guides, interactive labs, and masterclasses to master this domain.
              </p>
            </div>

            {/* Domain resources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(domainResources.length > 0 ? domainResources : MOCK_RESOURCES.slice(0, 2)).map((res) => {
                const isBookmarked = bookmarkedResourceIds.includes(res.id);
                return (
                  <div key={res.id} className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-indigo-500/40 flex flex-col justify-between space-y-4 transition-all">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-brand uppercase tracking-wider">{res.typeBadge}</span>
                        <button
                          onClick={() => toggleBookmarkResource(res.id)}
                          className={`p-1.5 rounded-lg border transition-colors ${isBookmarked ? 'bg-indigo-600/30 border-indigo-500 text-brand' : 'bg-slate-900 border-white/10 text-muted hover:text-primary'}`}
                          title="Bookmark resource"
                        >
                          <Bookmark size={14} fill={isBookmarked ? 'currentColor' : 'none'} />
                        </button>
                      </div>

                      <h4 className="text-base font-bold font-heading text-primary mt-2">{res.title}</h4>
                      <p className="text-xs text-secondary mt-1.5 leading-relaxed">{res.summary}</p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3 text-muted">
                        <span>⏳ {res.duration}</span>
                        <span>⭐ {res.rating}</span>
                      </div>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => onNavigate('/resources')}
                      >
                        Open Material →
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Partner Courses */}
            <div className="pt-4">
              <h4 className="text-sm font-bold font-heading text-primary mb-3">
                Recommended Certification Courses:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {domain.courses?.map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 flex justify-between items-center">
                    <div>
                      <span className="text-[11px] text-brand font-semibold uppercase">{c.provider}</span>
                      <h5 className="text-sm font-bold text-primary mt-0.5">{c.title}</h5>
                      <span className="text-xs text-muted">⭐ {c.rating} • 👥 {c.students} • ⏳ {c.duration}</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => onNavigate('/resources')}>
                      Explore
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. INTERNSHIPS TAB */}
        {activeTab === 'internships' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold font-heading text-primary">
                Live Industrial Internships in {domain.title}
              </h3>
              <p className="text-xs text-muted mt-1">
                Verified paid internships with university credit recognition and direct mentor evaluations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(domainInternships.length > 0 ? domainInternships : internships.slice(0, 2)).map((intern) => (
                <div key={intern.id} className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-indigo-500/40 flex flex-col justify-between space-y-4 transition-all">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-bold text-brand text-sm">
                          {intern.logo || 'TN'}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-primary">{intern.title}</h4>
                          <span className="text-xs text-secondary">{intern.company} • {intern.location}</span>
                        </div>
                      </div>
                      <span className="badge badge-teal text-[10px]">{intern.stipend}</span>
                    </div>

                    <p className="text-xs text-secondary mt-3 leading-relaxed">
                      {intern.description}
                    </p>

                    <div className="flex items-center gap-1.5 flex-wrap mt-3">
                      {intern.skills?.map((sk, sIdx) => (
                        <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted border border-white/5">
                          {typeof sk === 'string' ? sk : sk.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <div className="text-muted">
                      <span>Duration: <strong>{intern.duration}</strong></span>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleApplyInternship(intern)}
                    >
                      Apply Now 🚀
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. JOBS TAB */}
        {activeTab === 'jobs' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold font-heading text-primary">
                Full-Time Job Openings in {domain.title}
              </h3>
              <p className="text-xs text-muted mt-1">
                Direct placement opportunities from hiring partners seeking certified candidates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(domainJobs.length > 0 ? domainJobs : jobs.slice(0, 2)).map((job) => (
                <div key={job.id} className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-indigo-500/40 flex flex-col justify-between space-y-4 transition-all">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center font-bold text-teal text-sm">
                          {job.logo || 'CS'}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-primary">{job.title}</h4>
                          <span className="text-xs text-secondary">{job.company} • {job.location}</span>
                        </div>
                      </div>
                      <span className="badge badge-primary text-[10px]">{job.salary}</span>
                    </div>

                    <p className="text-xs text-secondary mt-3 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex items-center gap-1.5 flex-wrap mt-3">
                      {job.skills?.map((sk, sIdx) => (
                        <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted border border-white/5">
                          {typeof sk === 'string' ? sk : sk.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <div className="text-muted">
                      <span>Experience: <strong>{job.experience}</strong></span>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => onNavigate(`/jobs/${job.id}`, job)}
                    >
                      View Details & Apply
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold font-heading text-primary">
                Industry-Verified Capstone Projects in {domain.title}
              </h3>
              <p className="text-xs text-muted mt-1">
                Build these production capstones to earn verified digital credentials on your KaushalEra profile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {domain.projects?.map((p, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-indigo-500/40 space-y-3 transition-all">
                  <div className="flex justify-between items-center">
                    <h4 className="text-base font-bold font-heading text-primary">{p.title}</h4>
                    <span className="badge badge-purple text-[10px]">{p.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span>Estimated Duration: <strong>{p.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 text-secondary border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
