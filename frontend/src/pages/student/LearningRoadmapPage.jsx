import React, { useState } from 'react';
import { MOCK_SKILL_TREE } from '../../data/mockRoadmap';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { ProgressBar } from '../../components/common/ProgressBar';
import {
  Code2,
  FileCode,
  Calculator,
  Database,
  BrainCircuit,
  Cpu,
  Rocket,
  CheckCircle2,
  Lock,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckSquare
} from 'lucide-react';

export const LearningRoadmapPage = ({ onNavigate }) => {
  const [selectedNode, setSelectedNode] = useState(null);

  const iconMap = {
    Code2,
    FileCode,
    Calculator,
    Database,
    BrainCircuit,
    Cpu,
    Rocket
  };

  const { nodes, title, description } = MOCK_SKILL_TREE;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="p-7 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/50 to-slate-950 border border-white/10 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold uppercase tracking-wider">
            <BrainCircuit size={14} className="text-cyan-400" />
            <span>Interactive Skill Graph & Node Tree</span>
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-primary">
            {title}
          </h1>
          <p className="text-sm text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Interactive Node Graph Visualization (Section 51) */}
      <div className="card p-8 bg-slate-950/80 border-white/10 relative overflow-hidden">
        {/* Background Network Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-8 py-4">
          {/* Stage 1: Programming */}
          <div className="flex flex-col items-center">
            {renderNodeCard(nodes[0])}
          </div>

          <div className="w-[2px] h-8 bg-gradient-to-b from-indigo-500 to-indigo-500/40" />

          {/* Stage 2: Python */}
          <div className="flex flex-col items-center">
            {renderNodeCard(nodes[1])}
          </div>

          {/* Branching Lines */}
          <div className="w-full max-w-lg flex items-center justify-center relative my-1">
            <div className="w-2/3 h-[2px] bg-indigo-500/40 absolute top-0" />
            <div className="w-[2px] h-6 bg-indigo-500/40 absolute top-0 left-[18%]" />
            <div className="w-[2px] h-6 bg-indigo-500/40 absolute top-0 right-[18%]" />
          </div>

          {/* Stage 3: Split Parallel Tracks (Statistics & Data Processing) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl pt-2">
            <div className="flex flex-col items-center">
              {renderNodeCard(nodes[2])}
            </div>
            <div className="flex flex-col items-center">
              {renderNodeCard(nodes[3])}
            </div>
          </div>

          {/* Convergence Lines */}
          <div className="w-full max-w-lg flex items-center justify-center relative my-1">
            <div className="w-2/3 h-[2px] bg-indigo-500/40 absolute bottom-0" />
            <div className="w-[2px] h-6 bg-indigo-500/40 absolute bottom-0 left-[18%]" />
            <div className="w-[2px] h-6 bg-indigo-500/40 absolute bottom-0 right-[18%]" />
          </div>

          <div className="w-[2px] h-8 bg-gradient-to-b from-indigo-500/40 to-indigo-500" />

          {/* Stage 4: Machine Learning (Current Active Focus) */}
          <div className="flex flex-col items-center">
            {renderNodeCard(nodes[4], true)}
          </div>

          <div className="w-[2px] h-8 bg-slate-800" />

          {/* Stage 5: Deep Learning (Locked) */}
          <div className="flex flex-col items-center">
            {renderNodeCard(nodes[5])}
          </div>

          <div className="w-[2px] h-8 bg-slate-800" />

          {/* Stage 6: MLOps (Locked) */}
          <div className="flex flex-col items-center">
            {renderNodeCard(nodes[6])}
          </div>
        </div>
      </div>

      {/* Node Detail Modal (Section 51) */}
      {selectedNode && (
        <Modal
          isOpen={Boolean(selectedNode)}
          onClose={() => setSelectedNode(null)}
          title={selectedNode.label}
          subtitle={selectedNode.subtitle}
        >
          <div className="space-y-5">
            {/* Status overview */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs text-muted">Current Proficiency</div>
                <div className="text-base font-bold text-primary mt-0.5">
                  {selectedNode.level} (Required: {selectedNode.requiredLevel})
                </div>
              </div>
              <Badge variant={selectedNode.status === 'completed' ? 'success' : selectedNode.status === 'in-progress' ? 'warning' : 'neutral'}>
                {selectedNode.status.toUpperCase()}
              </Badge>
            </div>

            <p className="text-sm text-secondary leading-relaxed">
              {selectedNode.description}
            </p>

            {/* Courses & Modules */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                Recommended Curriculum & Courses
              </div>
              <div className="space-y-2">
                {selectedNode.courses.map((courseName, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-primary font-semibold">{courseName}</span>
                    <span className="text-brand font-medium">Included</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Unlocked */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                Skills Acquired
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {selectedNode.skillsAcquired.map((s, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-medium">
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedNode(null)}
              >
                Close
              </Button>
              {selectedNode.assessmentAvailable && (
                <Button
                  variant="accent"
                  size="sm"
                  icon={CheckSquare}
                  onClick={() => {
                    setSelectedNode(null);
                    onNavigate(`/assessment/${selectedNode.assessmentId}/take`);
                  }}
                >
                  Take Assessment
                </Button>
              )}
              <Button
                variant="primary"
                size="sm"
                iconRight={ArrowRight}
                onClick={() => {
                  setSelectedNode(null);
                  onNavigate('/resources');
                }}
              >
                Start Learning
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );

  function renderNodeCard(node, isHighlighted = false) {
    const Icon = iconMap[node.icon] || Code2;
    const isCompleted = node.status === 'completed';
    const isInProgress = node.status === 'in-progress';
    const isLocked = node.status === 'locked';

    return (
      <div
        onClick={() => setSelectedNode(node)}
        className={`w-72 p-4 rounded-2xl border cursor-pointer transition-all duration-200 select-none group relative ${
          isHighlighted || isInProgress
            ? 'bg-indigo-950/80 border-indigo-500 shadow-xl shadow-indigo-500/20 ring-2 ring-indigo-500/40 scale-105'
            : isCompleted
            ? 'bg-slate-900/80 border-emerald-500/40 hover:border-emerald-500'
            : 'bg-slate-950/60 border-white/5 opacity-60 hover:opacity-90'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
              isCompleted ? 'bg-emerald-500/20 text-emerald' : isInProgress ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-500'
            }`}>
              <Icon size={16} />
            </div>
            <span className="text-xs font-bold text-primary font-heading truncate max-w-[140px]">
              {node.label}
            </span>
          </div>

          {isCompleted && <CheckCircle2 size={16} className="text-emerald shrink-0" />}
          {isInProgress && <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse shrink-0" />}
          {isLocked && <Lock size={14} className="text-muted shrink-0" />}
        </div>

        <div className="text-[11px] text-muted truncate mb-3">
          {node.subtitle}
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-muted pt-2 border-t border-white/5">
          <span>{node.level}</span>
          <span className="text-brand font-semibold group-hover:underline">Inspect Node →</span>
        </div>
      </div>
    );
  }
};
