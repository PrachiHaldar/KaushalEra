import React from 'react';
import { MOCK_STUDENT_PORTFOLIO } from '../../data/mockPortfolio';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { VerificationBadge, Badge } from '../../components/common/Badge';
import {
  Download,
  Share2,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  Briefcase,
  Layers,
  Code2
} from 'lucide-react';

export const PortfolioPage = ({ onNavigate }) => {
  const { addToast } = useToast();
  const { name, headline, institution, batch, location, bio, verifiedSkills, projects, experience, certifications, stats } = MOCK_STUDENT_PORTFOLIO;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast({
      title: '🔗 Portfolio Link Copied!',
      message: 'Shareable public URL copied to your clipboard.',
      type: 'success',
      duration: 3000
    });
  };

  const handleDownloadResume = () => {
    addToast({
      title: '📄 Generating Verified PDF Resume',
      message: 'Embedding cryptographically verified badges and GPA seal...',
      type: 'info',
      duration: 3500
    });
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fade-in">
      {/* Hero Profile Banner (Section 58) */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-950 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
              alt={name}
              className="w-24 h-24 rounded-2xl object-cover border-2 border-indigo-500/50 shadow-xl shadow-indigo-950/50"
            />
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
                <CheckCircle2 size={12} />
                <span>Verified Candidate</span>
              </div>
              <h1 className="text-3xl font-extrabold font-heading text-primary">
                {name}
              </h1>
              <p className="text-sm font-semibold text-brand">
                {headline}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted pt-1">
                <span className="flex items-center gap-1"><GraduationCap size={13} /> {institution}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><MapPin size={13} /> {location}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs (Section 58) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Button
              variant="secondary"
              size="sm"
              icon={Download}
              onClick={handleDownloadResume}
              className="w-full sm:w-auto"
            >
              Download Resume
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={Share2}
              onClick={handleShare}
              className="w-full sm:w-auto"
            >
              Share Portfolio
            </Button>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs sm:text-sm text-secondary leading-relaxed mt-6 pt-5 border-t border-white/10 max-w-4xl">
          {bio}
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-2">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-center">
            <div className="text-xs text-muted">Career Readiness</div>
            <div className="text-xl font-bold text-teal font-heading mt-0.5">{stats.careerReadiness}%</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-center">
            <div className="text-xs text-muted">Verified Skills</div>
            <div className="text-xl font-bold text-brand font-heading mt-0.5">{stats.verifiedSkillsCount}</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-center">
            <div className="text-xs text-muted">Assessments Passed</div>
            <div className="text-xl font-bold text-emerald font-heading mt-0.5">{stats.assessmentsPassed}</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-center">
            <div className="text-xs text-muted">Verified Projects</div>
            <div className="text-xl font-bold text-amber font-heading mt-0.5">{stats.projectsCompleted}</div>
          </div>
        </div>
      </div>

      {/* Verified Skills Section (Section 58, 59) */}
      <div className="card p-6 lg:p-7 border-white/10 bg-slate-900/60 space-y-4">
        <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
          <Award size={18} className="text-brand" />
          <span>Verified Skill Badges</span>
        </h3>
        <p className="text-xs text-muted">
          Hover over each credential badge to inspect verification issuer and certification authority.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {verifiedSkills.map((sk, i) => (
            <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-white/5">
              <span className="text-xs font-bold text-primary">{sk.name}</span>
              <span className="text-[11px] text-muted">({sk.level.split(' ')[1] || sk.level})</span>
              <VerificationBadge
                type={sk.badge === 'Assessment Verified' ? 'assessment' : sk.badge === 'Institution Verified' ? 'institution' : 'industry'}
                tooltip={sk.note}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Verified Projects Section (Section 58) */}
      <div className="card p-6 lg:p-7 border-white/10 bg-slate-900/60 space-y-6">
        <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
          <Layers size={18} className="text-teal" />
          <span>Verified Capstone Projects & Repositories</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-36 rounded-xl object-cover border border-white/5 mb-3"
                />
                <div className="mb-2">
                  <VerificationBadge
                    type="industry"
                    tooltip={proj.verificationNote}
                  />
                </div>
                <h4 className="text-base font-bold font-heading text-primary mb-1">
                  {proj.title}
                </h4>
                <p className="text-xs text-secondary leading-relaxed line-clamp-3 mb-3">
                  {proj.description}
                </p>

                <div className="flex items-center gap-1.5 flex-wrap mb-4">
                  {proj.technologies.map((tech, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                <Button
                  variant="outline"
                  size="sm"
                  icon={Github}
                  className="flex-1"
                  onClick={() => window.open(proj.github, '_blank')}
                >
                  GitHub
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  icon={ExternalLink}
                  className="flex-1"
                  onClick={() => window.open(proj.demo, '_blank')}
                >
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Experience */}
        <div className="card p-6 border-white/10 bg-slate-900/60 space-y-4">
          <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
            <Briefcase size={18} className="text-amber" />
            <span>Industrial Experience</span>
          </h3>

          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-bold text-primary">{exp.role}</h4>
                    <div className="text-xs text-brand font-medium">{exp.company}</div>
                  </div>
                  <VerificationBadge type="industry" tooltip={exp.verificationOrg} />
                </div>
                <div className="text-[11px] text-muted font-mono">{exp.duration} • {exp.location}</div>
                <ul className="space-y-1 text-xs text-secondary list-disc list-inside pt-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="card p-6 border-white/10 bg-slate-900/60 space-y-4">
          <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
            <Award size={18} className="text-emerald" />
            <span>Verified Certifications</span>
          </h3>

          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold text-primary">{cert.title}</h4>
                  <VerificationBadge type="certificate" tooltip={`Credential ID: ${cert.credentialId}`} />
                </div>
                <div className="text-xs text-muted">{cert.issuer} • Issued {cert.issueDate}</div>
                <div className="text-[11px] text-brand font-mono">ID: {cert.credentialId}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
