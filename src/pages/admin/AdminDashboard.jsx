import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge, VerificationBadge } from '../../components/common/Badge';
import {
  ShieldCheck,
  Users,
  Layers,
  Briefcase,
  FileCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  Server,
  Activity
} from 'lucide-react';

export const AdminDashboard = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [pendingQueue, setPendingQueue] = useState([
    { id: 1, type: 'Certificate Verification', student: 'Alex Sharma', credential: 'Meta Backend Certificate', date: 'Today, 09:30 AM', status: 'Pending Review' },
    { id: 2, type: 'Capstone Repository Verification', student: 'Priya Patel', credential: 'Predictive Churn Engine', date: 'Yesterday', status: 'Pending Review' },
    { id: 3, type: 'Industry MoU Onboarding', student: 'Nexus Cloud Systems', credential: 'Campus Drive Partner Agreement', date: '28 Aug 2026', status: 'Pending Review' }
  ]);

  const handleApprove = (id, label) => {
    setPendingQueue(prev => prev.filter(item => item.id !== id));
    addToast({
      title: 'Verification Approved',
      message: `Successfully verified and signed: ${label}. Cryptographic badge issued.`,
      type: 'success',
      duration: 3500
    });
  };

  const handleReject = (id, label) => {
    setPendingQueue(prev => prev.filter(item => item.id !== id));
    addToast({
      title: 'Verification Declined',
      message: `Request for ${label} declined with audit trail logged.`,
      type: 'error',
      duration: 3500
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-rose-950/30 to-slate-950 border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck size={13} className="text-rose-400" />
            <span>Root Governance & Ecosystem Administration</span>
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-primary">
            KaushalSetu Master Control Center
          </h1>
          <p className="text-sm text-secondary">
            User identity management, accreditation audit trails, and multi-tenant domain administration.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-2 rounded-xl text-emerald text-xs font-bold font-mono">
          <Activity size={14} className="animate-pulse" /> All Systems Operational
        </div>
      </div>

      {/* Overview Statistics Grid (Section 68) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Platform Users */}
        <div className="card p-5 border-white/10 bg-slate-900/60 space-y-3">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-muted">
            <span>Platform Users</span>
            <Users size={16} className="text-brand" />
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between"><span>Students:</span> <strong className="text-primary">28,450</strong></div>
            <div className="flex justify-between"><span>Faculty:</span> <strong className="text-primary">840</strong></div>
            <div className="flex justify-between"><span>Industries:</span> <strong className="text-primary">312</strong></div>
            <div className="flex justify-between"><span>Institutions:</span> <strong className="text-primary">48</strong></div>
          </div>
        </div>

        {/* Content Modules */}
        <div className="card p-5 border-white/10 bg-slate-900/60 space-y-3">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-muted">
            <span>Content Library</span>
            <Layers size={16} className="text-teal" />
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between"><span>Domains:</span> <strong className="text-teal">14 Curated</strong></div>
            <div className="flex justify-between"><span>Skills:</span> <strong className="text-teal">240 Active</strong></div>
            <div className="flex justify-between"><span>Resources:</span> <strong className="text-teal">1,820</strong></div>
            <div className="flex justify-between"><span>Courses:</span> <strong className="text-teal">94</strong></div>
          </div>
        </div>

        {/* Opportunities */}
        <div className="card p-5 border-white/10 bg-slate-900/60 space-y-3">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-muted">
            <span>Active Postings</span>
            <Briefcase size={16} className="text-amber" />
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between"><span>Jobs:</span> <strong className="text-amber-400">142 Live</strong></div>
            <div className="flex justify-between"><span>Internships:</span> <strong className="text-amber-400">86 Live</strong></div>
            <div className="flex justify-between"><span>Research Grants:</span> <strong className="text-amber-400">28</strong></div>
          </div>
        </div>

        {/* System Health */}
        <div className="card p-5 border-white/10 bg-slate-900/60 space-y-3">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-muted">
            <span>System & Security</span>
            <Server size={16} className="text-emerald" />
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between"><span>Uptime:</span> <strong className="text-emerald">99.98%</strong></div>
            <div className="flex justify-between"><span>Audit Integrity:</span> <strong className="text-emerald">Compliant</strong></div>
            <div className="flex justify-between"><span>Pending Verifications:</span> <strong className="text-rose-400 font-bold">{pendingQueue.length}</strong></div>
          </div>
        </div>
      </div>

      {/* Pending Verifications Queue (Section 68) */}
      <div className="card p-6 border-white/10 bg-slate-900/60 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
            <FileCheck size={18} className="text-brand" />
            <span>Pending Credential Verification Queue</span>
          </h3>
          <span className="badge badge-warning">{pendingQueue.length} Awaiting Action</span>
        </div>

        <div className="space-y-3">
          {pendingQueue.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-slate-950/70 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary">{item.type}</span>
                  <span className="badge badge-neutral text-[10px]">{item.date}</span>
                </div>
                <div className="text-xs text-secondary">
                  Subject: <strong className="text-brand">{item.student}</strong> • Credential: {item.credential}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleReject(item.id, item.credential)}
                >
                  Decline
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  icon={CheckCircle2}
                  onClick={() => handleApprove(item.id, item.credential)}
                >
                  Approve & Sign
                </Button>
              </div>
            </div>
          ))}

          {pendingQueue.length === 0 && (
            <div className="p-8 text-center text-xs text-muted">
              ✓ All verifications cleared. No pending requests.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
