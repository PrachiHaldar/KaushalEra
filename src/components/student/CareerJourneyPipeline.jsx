import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, Award, ArrowRight, BookOpen, Layers, Briefcase, GraduationCap } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

export const CareerJourneyPipeline = ({ onNavigate }) => {
  const [selectedStage, setSelectedStage] = useState(null);

  const stages = [
    {
      id: 'assessment',
      title: 'Assessment',
      subtitle: 'Diagnostic evaluation',
      status: 'completed',
      completion: 100,
      icon: CheckCircle2,
      summary: 'Completed 2 proctored baseline skill evaluations in Python and SQL.',
      actions: ['Review Assessment Breakdown', 'Take Advanced ML Assessment'],
      route: '/assessment'
    },
    {
      id: 'profile',
      title: 'Skill Profile',
      subtitle: 'Verified competence',
      status: 'completed',
      completion: 100,
      icon: CheckCircle2,
      summary: '6 verified skills linked to academic credentials and practical assessments.',
      actions: ['View My Skills', 'Add New Skill Badges'],
      route: '/skills'
    },
    {
      id: 'learning',
      title: 'Learning',
      subtitle: 'Closing skill gaps',
      status: 'in-progress',
      completion: 68,
      icon: Clock,
      summary: 'Currently pursuing Machine Learning Foundations and Docker Containerization modules.',
      actions: ['Continue Active Course', 'Explore Interactive Roadmap'],
      route: '/roadmap'
    },
    {
      id: 'project',
      title: 'Project',
      subtitle: 'Capstone delivery',
      status: 'in-progress',
      completion: 40,
      icon: Layers,
      summary: 'Building AutoDoc-RAG application with GitHub commits and automated code review.',
      actions: ['View Verified Projects', 'Submit Capstone for Verification'],
      route: '/portfolio'
    },
    {
      id: 'internship',
      title: 'Internship',
      subtitle: 'Industrial immersion',
      status: 'upcoming',
      completion: 0,
      icon: Briefcase,
      summary: 'Eligible for 18 verified internship roles across AI and Software Engineering.',
      actions: ['Explore Matching Internships', 'Open Internship Workspace'],
      route: '/opportunities'
    },
    {
      id: 'placement',
      title: 'Placement',
      subtitle: 'Career milestone',
      status: 'upcoming',
      completion: 0,
      icon: GraduationCap,
      summary: 'Target: Associate Machine Learning Engineer (Average package ₹16-24 LPA).',
      actions: ['Explore Full-Time Jobs', 'Compare Career Trajectories'],
      route: '/opportunities'
    }
  ];

  return (
    <div className="card p-6 border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold font-heading text-primary flex items-center gap-2">
            <span>Career Milestones Pipeline</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30">
              Stage 3 of 6 Active
            </span>
          </h3>
          <p className="text-xs text-muted mt-0.5">
            Click any stage to view requirements, progress, and actionable next steps.
          </p>
        </div>
      </div>

      {/* Horizontal Pipeline Steps */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 select-none">
        {stages.map((stage, idx) => {
          const isCompleted = stage.status === 'completed';
          const isInProgress = stage.status === 'in-progress';
          const isUpcoming = stage.status === 'upcoming';

          return (
            <div
              key={stage.id}
              onClick={() => setSelectedStage(stage)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 relative group ${
                isInProgress
                  ? 'bg-indigo-950/40 border-indigo-500/50 shadow-lg shadow-indigo-950/50 ring-1 ring-indigo-500/30'
                  : isCompleted
                  ? 'bg-slate-900/60 border-emerald-500/30 hover:border-emerald-500/60'
                  : 'bg-slate-900/30 border-white/5 opacity-70 hover:opacity-100 hover:border-white/15'
              }`}
            >
              {/* Status Header Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-muted">
                  0{idx + 1}
                </span>
                {isCompleted ? (
                  <CheckCircle2 size={16} className="text-emerald" />
                ) : isInProgress ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping inline-block" />
                ) : (
                  <Circle size={14} className="text-slate-600" />
                )}
              </div>

              <div className="text-sm font-bold font-heading text-primary group-hover:text-brand transition-colors">
                {stage.title}
              </div>
              <div className="text-[11px] text-muted truncate mt-0.5">
                {stage.subtitle}
              </div>

              {/* Progress bar in card */}
              <div className="mt-3">
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      isCompleted ? 'bg-emerald-500' : isInProgress ? 'bg-indigo-500' : 'bg-transparent'
                    }`}
                    style={{ width: `${stage.completion}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-muted mt-1 font-mono">
                  <span>{stage.status.toUpperCase()}</span>
                  <span>{stage.completion}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stage Inspection Modal */}
      {selectedStage && (
        <Modal
          isOpen={Boolean(selectedStage)}
          onClose={() => setSelectedStage(null)}
          title={`Stage: ${selectedStage.title}`}
          subtitle={selectedStage.subtitle}
        >
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs text-muted">Current Status</div>
                <div className="text-base font-bold text-primary capitalize flex items-center gap-2 mt-0.5">
                  {selectedStage.status === 'completed' && <CheckCircle2 size={16} className="text-emerald" />}
                  {selectedStage.status === 'in-progress' && <Clock size={16} className="text-indigo-400" />}
                  {selectedStage.status === 'upcoming' && <Circle size={16} className="text-muted" />}
                  <span>{selectedStage.status} ({selectedStage.completion}% Complete)</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black font-heading text-brand">
                  {selectedStage.completion}%
                </div>
              </div>
            </div>

            <p className="text-sm text-secondary leading-relaxed">
              {selectedStage.summary}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-muted">
                Recommended Actions
              </div>
              <div className="space-y-2">
                {selectedStage.actions.map((act, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-white/5 text-xs">
                    <span className="text-primary font-medium">{act}</span>
                    <ArrowRight size={14} className="text-muted" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedStage(null)}
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                iconRight={ArrowRight}
                onClick={() => {
                  const r = selectedStage.route;
                  setSelectedStage(null);
                  if (onNavigate) onNavigate(r);
                }}
              >
                Go to {selectedStage.title}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
