import React, { useState } from 'react';
import { useAppData } from '../../context/AppDataContext';
import { useToast } from '../../context/ToastContext';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../components/common/Button';
import {
  Send,
  Building2,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  MoveRight,
  Sparkles,
  Award
} from 'lucide-react';

export const ApplicationTrackerPage = ({ onNavigate }) => {
  const { applications, moveApplicationStage } = useAppData();
  const { addToast } = useToast();
  const [selectedApp, setSelectedApp] = useState(null);
  const [draggedAppId, setDraggedAppId] = useState(null);

  const stages = [
    { key: 'APPLIED', title: 'Applied', color: 'border-indigo-500/40' },
    { key: 'SHORTLISTED', title: 'Shortlisted', color: 'border-teal-500/40' },
    { key: 'INTERVIEW', title: 'Interview', color: 'border-amber-500/40' },
    { key: 'SELECTED', title: 'Selected & Offer', color: 'border-emerald-500/40' }
  ];

  const handleDragStart = (e, appId) => {
    setDraggedAppId(appId);
    e.dataTransfer.setData('text/plain', appId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetStage) => {
    e.preventDefault();
    const appId = e.dataTransfer.getData('text/plain') || draggedAppId;
    if (appId) {
      moveApplicationStage(appId, targetStage);
      addToast({
        title: 'Status Updated',
        message: `Application moved to ${targetStage}`,
        type: 'info',
        duration: 2500
      });
      setDraggedAppId(null);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold font-heading text-primary flex items-center gap-2.5">
            <span>Application Pipeline</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30">
              Interactive Kanban
            </span>
          </h1>
          <p className="text-sm text-secondary mt-1">
            Drag cards between columns or click to view complete interview histories and recruiter notes.
          </p>
        </div>

        <Button
          variant="primary"
          icon={Sparkles}
          onClick={() => onNavigate('/opportunities')}
        >
          Explore More Opportunities
        </Button>
      </div>

      {/* Kanban Board Columns (Section 56) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start select-none">
        {stages.map((stage) => {
          const appsInStage = applications.filter(a => a.stage === stage.key);

          return (
            <div
              key={stage.key}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, stage.key)}
              className={`p-4 rounded-2xl bg-slate-950/70 border ${stage.color} min-h-[500px] flex flex-col`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="text-xs font-bold font-heading uppercase tracking-wider text-primary">
                  {stage.title}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-secondary font-mono font-bold">
                  {appsInStage.length}
                </span>
              </div>

              {/* Cards List */}
              <div className="space-y-3 flex-1">
                {appsInStage.map((app) => (
                  <div
                    key={app.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, app.id)}
                    onClick={() => setSelectedApp(app)}
                    className="p-4 rounded-xl bg-slate-900/90 border border-white/10 hover:border-indigo-500/50 shadow-md cursor-grab active:cursor-grabbing hover:shadow-xl transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-brand uppercase tracking-wider">
                        {app.company}
                      </span>
                      <span className="text-[10px] text-muted">{app.appliedDate}</span>
                    </div>

                    <h4 className="text-sm font-bold text-primary group-hover:text-brand transition-colors mb-1">
                      {app.role}
                    </h4>

                    <p className="text-xs text-secondary line-clamp-2 mb-3">
                      {app.statusNote}
                    </p>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-muted">
                      <span className="font-mono text-emerald font-semibold">{app.salaryOrStipend}</span>
                      <span className="text-indigo-400 group-hover:underline text-[10px] flex items-center gap-0.5">
                        Timeline <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                ))}

                {appsInStage.length === 0 && (
                  <div className="h-32 border border-dashed border-white/10 rounded-xl flex items-center justify-center text-xs text-muted text-center p-4">
                    Drop applications here
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Application Timeline Modal (Section 56) */}
      {selectedApp && (
        <Modal
          isOpen={Boolean(selectedApp)}
          onClose={() => setSelectedApp(null)}
          title={`${selectedApp.company} — ${selectedApp.role}`}
          subtitle={`Current Stage: ${selectedApp.stage} • Compensation: ${selectedApp.salaryOrStipend}`}
        >
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
              <div className="text-xs text-muted">Status Note</div>
              <div className="text-sm font-semibold text-primary mt-0.5">{selectedApp.statusNote}</div>
            </div>

            {/* Timeline Events */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                Application History & Milestones
              </h4>
              <div className="space-y-3 relative pl-4 border-l-2 border-indigo-500/40 ml-2">
                {selectedApp.timeline?.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-950" />
                    <div className="text-[11px] text-muted font-mono">{item.date}</div>
                    <div className="text-xs font-bold text-primary">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Quick Advance */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs text-muted">Move to stage:</div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {stages.map((st) => (
                  <button
                    key={st.key}
                    onClick={() => {
                      moveApplicationStage(selectedApp.id, st.key);
                      setSelectedApp(prev => ({ ...prev, stage: st.key }));
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      selectedApp.stage === st.key
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'bg-slate-900 text-secondary hover:text-primary'
                    }`}
                  >
                    {st.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
