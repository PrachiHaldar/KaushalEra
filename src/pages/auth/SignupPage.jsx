import React, { useState } from 'react';
import { useAuthRole, USER_ROLES } from '../../context/AuthRoleContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  Mail,
  Lock,
  User,
  GraduationCap,
  Building2,
  Briefcase,
  Layers,
  CheckCircle2
} from 'lucide-react';

export const SignupPage = ({ onNavigate }) => {
  const { initiateSignup } = useAuthRole();
  const { addToast } = useToast();

  const [step, setStep] = useState(1); // 1: Credentials -> 2: Role Selection
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: USER_ROLES.STUDENT
  });

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) return;
    setStep(2);
  };

  const handleRoleSelect = (roleKey) => {
    setFormData(prev => ({ ...prev, role: roleKey }));
    initiateSignup({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: roleKey
    });

    addToast({
      title: 'Account Created! 🎉',
      message: 'Let’s personalize your ecosystem onboarding.',
      type: 'success',
      duration: 3000
    });

    onNavigate('/onboarding');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 sm:p-6 animate-fade-in select-none">
      <div className="w-full max-w-xl rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl p-8 sm:p-10 space-y-6">
        {/* Progress indicator */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand font-mono">
              Step {step} of 2
            </span>
            <h2 className="text-xl font-extrabold font-heading text-primary">
              {step === 1 ? 'Join KaushalEra' : 'Select Your Role Context'}
            </h2>
          </div>
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="text-xs text-muted hover:text-primary flex items-center gap-1"
            >
              <ChevronLeft size={14} /> Back
            </button>
          )}
        </div>

        {step === 1 ? (
          /* Step 1: Basic Credentials */
          <form onSubmit={handleStep1Submit} className="space-y-4">
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Sharma / Dr. Ramesh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field pl-10 text-xs"
                />
                <User size={16} className="text-muted absolute left-3.5 top-3" />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@university.edu / work email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field pl-10 text-xs"
                />
                <Mail size={16} className="text-muted absolute left-3.5 top-3" />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Create Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  minLength={6}
                  placeholder="Minimum 6 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="input-field pl-10 text-xs"
                />
                <Lock size={16} className="text-muted absolute left-3.5 top-3" />
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              type="submit"
              iconRight={ArrowRight}
              className="w-full shadow-lg shadow-indigo-600/25 mt-2"
            >
              Continue to Role Selection →
            </Button>
          </form>
        ) : (
          /* Step 2: Role Selection (Section 18) */
          <div className="space-y-4">
            <p className="text-xs text-secondary">
              Select how you will participate in the KaushalEra national ecosystem:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  key: USER_ROLES.STUDENT,
                  title: 'Student / Graduate',
                  subtitle: 'Take assessments, follow roadmaps, find paid internships.',
                  icon: GraduationCap,
                  color: 'hover:border-indigo-500'
                },
                {
                  key: USER_ROLES.FACULTY,
                  title: 'Faculty / Educator',
                  subtitle: 'Access funded research labs, FDPs & corporate consultancies.',
                  icon: User,
                  color: 'hover:border-amber-500'
                },
                {
                  key: USER_ROLES.RECRUITER,
                  title: 'Industry / Recruiter',
                  subtitle: 'Hire pre-assessed candidates with transparent skill scorecards.',
                  icon: Briefcase,
                  color: 'hover:border-teal-500'
                },
                {
                  key: USER_ROLES.INSTITUTION_ADMIN,
                  title: 'Institution / Dean',
                  subtitle: 'Track department skill readiness and NAAC accreditation exports.',
                  icon: Building2,
                  color: 'hover:border-rose-500'
                }
              ].map((r) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.key}
                    onClick={() => handleRoleSelect(r.key)}
                    className={`p-5 rounded-2xl bg-slate-950/70 border border-white/10 ${r.color} cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between space-y-3 group`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-brand group-hover:scale-105 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-sm font-bold font-heading text-primary group-hover:text-brand transition-colors">
                        {r.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-muted leading-relaxed">
                      {r.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="text-center text-xs text-muted pt-4 border-t border-white/5">
          Already have an account?{' '}
          <button
            onClick={() => onNavigate('/login')}
            className="text-brand font-bold hover:underline"
          >
            Sign In Here →
          </button>
        </div>
      </div>
    </div>
  );
};
