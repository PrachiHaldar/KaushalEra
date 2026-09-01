import React, { useState } from 'react';
import { useAuthRole, USER_ROLES } from '../../context/AuthRoleContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import {
  Sparkles,
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Building2,
  GraduationCap
} from 'lucide-react';

export const LoginPage = ({ onNavigate }) => {
  const { login, loginAsDemoRole } = useAuthRole();
  const { addToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState(USER_ROLES.STUDENT);
  const [isLoading, setIsLoading] = useState(false);

  const getDashboardRedirect = (role) => {
    switch (role) {
      case USER_ROLES.FACULTY: return '/faculty/dashboard';
      case USER_ROLES.RECRUITER: return '/industry/dashboard';
      case USER_ROLES.INSTITUTION_ADMIN: return '/institution/dashboard';
      case USER_ROLES.ADMIN: return '/admin/dashboard';
      case USER_ROLES.STUDENT:
      default: return '/student/dashboard';
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      const user = login(email, password, selectedRole);
      setIsLoading(false);
      addToast({
        title: `Welcome back, ${user.name}! 👋`,
        message: `Authenticated successfully. Opening ${user.roleTitle} portal...`,
        type: 'success',
        duration: 3000
      });
      onNavigate(getDashboardRedirect(user.role));
    }, 400);
  };

  const handleQuickDemo = (role) => {
    const user = loginAsDemoRole(role);
    addToast({
      title: `⚡ Authenticated as ${user.name}`,
      message: `Role: ${user.roleTitle}`,
      type: 'success',
      duration: 3000
    });
    onNavigate(getDashboardRedirect(user.role));
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 sm:p-6 animate-fade-in select-none">
      <div className="w-full max-w-5xl rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Branding Column (Section 17) */}
        <div className="lg:col-span-5 p-8 lg:p-10 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border-r border-white/10 flex flex-col justify-between space-y-8 relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <div
              onClick={() => onNavigate('/')}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-teal-400 flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/25">
                <Sparkles size={18} />
              </div>
              <div className="font-heading font-extrabold text-xl text-primary tracking-tight">
                ✦ Kaushal<span className="text-brand">Era</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black font-heading text-primary leading-snug">
              Connect Academia with Industry.
            </h2>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Assess Skills. Learn. Build. Intern. Collaborate. Get Hired. Standardized skill assessments, AI career readiness scoring, and direct verified placements.
            </p>
          </div>

          {/* Quick Demo Shortcuts in Left Panel */}
          <div className="space-y-2.5 pt-4 border-t border-white/10 relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">
              1-Click Instant Evaluation Logins:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemo(USER_ROLES.STUDENT)}
                className="p-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/35 border border-indigo-500/30 text-indigo-300 text-xs font-semibold text-left transition-all"
              >
                👨‍🎓 Student Demo
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemo(USER_ROLES.RECRUITER)}
                className="p-2 rounded-xl bg-teal-600/20 hover:bg-teal-600/35 border border-teal-500/30 text-teal-300 text-xs font-semibold text-left transition-all"
              >
                🏢 Recruiter Demo
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemo(USER_ROLES.FACULTY)}
                className="p-2 rounded-xl bg-amber-600/20 hover:bg-amber-600/35 border border-amber-500/30 text-amber-300 text-xs font-semibold text-left transition-all"
              >
                👨‍🏫 Faculty Demo
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemo(USER_ROLES.INSTITUTION_ADMIN)}
                className="p-2 rounded-xl bg-rose-600/20 hover:bg-rose-600/35 border border-rose-500/30 text-rose-300 text-xs font-semibold text-left transition-all"
              >
                🏛️ Dean Demo
              </button>
            </div>
          </div>
        </div>

        {/* Right Form Column (Section 17) */}
        <div className="lg:col-span-7 p-8 lg:p-12 space-y-6 flex flex-col justify-center">
          <div className="space-y-1">
            <h3 className="text-2xl font-extrabold font-heading text-primary">
              Welcome to KaushalEra
            </h3>
            <p className="text-xs text-muted">
              Your gateway to skills, learning, internships and careers.
            </p>
          </div>

          {/* Role selector pill */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-muted">Select Account Context:</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { key: USER_ROLES.STUDENT, label: 'Student' },
                { key: USER_ROLES.FACULTY, label: 'Faculty' },
                { key: USER_ROLES.RECRUITER, label: 'Recruiter' },
                { key: USER_ROLES.INSTITUTION_ADMIN, label: 'Institution' }
              ].map(r => (
                <button
                  type="button"
                  key={r.key}
                  onClick={() => {
                    setSelectedRole(r.key);
                    if (r.key === USER_ROLES.STUDENT) setEmail('student@demo.com');
                    if (r.key === USER_ROLES.FACULTY) setEmail('faculty@demo.com');
                    if (r.key === USER_ROLES.RECRUITER) setEmail('recruiter@demo.com');
                    if (r.key === USER_ROLES.INSTITUTION_ADMIN) setEmail('institution@demo.com');
                  }}
                  className={`py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedRole === r.key
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-950/80 text-secondary border border-white/5 hover:text-primary'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@domain.edu / work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-10 text-xs"
                />
                <Mail size={16} className="text-muted absolute left-3.5 top-3" />
              </div>
            </div>

            <div className="input-group">
              <div className="flex justify-between items-center mb-1">
                <label className="input-label mb-0">Password</label>
                <button
                  type="button"
                  onClick={() => onNavigate('/forgot-password')}
                  className="text-[11px] text-brand hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password || 'password123'}
                  onChange={(e) => setPassword(e.target.value)}
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
              loading={isLoading}
              className="w-full shadow-lg shadow-indigo-600/25"
            >
              Sign In to Portal
            </Button>
          </form>

          {/* Google Simulation */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-[11px] text-muted uppercase font-bold">
              <div className="flex-1 h-[1px] bg-white/10" />
              <span>Or</span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </div>

            <Button
              variant="secondary"
              size="md"
              className="w-full text-xs"
              onClick={() => handleQuickDemo(selectedRole)}
            >
              Continue with Google Workspace (Single Sign-On)
            </Button>
          </div>

          <div className="text-center text-xs text-muted pt-2 border-t border-white/5">
            Don't have an account?{' '}
            <button
              onClick={() => onNavigate('/signup')}
              className="text-brand font-bold hover:underline"
            >
              Create Free Account →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
