import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Mail, ArrowRight, ChevronLeft, CheckCircle2, KeyRound } from 'lucide-react';

export const ForgotPasswordPage = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSent(true);
    addToast({
      title: 'Reset Link Dispatched',
      message: `A secure 6-digit recovery OTP has been sent to ${email}.`,
      type: 'success',
      duration: 4000
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 select-none animate-fade-in">
      <div className="w-full max-w-md rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl p-8 space-y-6">
        <button
          onClick={() => onNavigate('/login')}
          className="text-xs text-muted hover:text-primary flex items-center gap-1 transition-colors"
        >
          <ChevronLeft size={14} /> Back to Sign In
        </button>

        <div className="space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-brand mb-3">
            <KeyRound size={22} />
          </div>
          <h2 className="text-2xl font-extrabold font-heading text-primary">
            Reset Your Password
          </h2>
          <p className="text-xs text-muted">
            Enter the university or work email associated with your account.
          </p>
        </div>

        {!isSent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="input-group">
              <label className="input-label">Registered Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-10 text-xs"
                />
                <Mail size={16} className="text-muted absolute left-3.5 top-3" />
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              type="submit"
              iconRight={ArrowRight}
              className="w-full"
            >
              Send Password Recovery Link
            </Button>
          </form>
        ) : (
          <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-center space-y-3">
            <CheckCircle2 size={28} className="text-emerald mx-auto" />
            <h4 className="text-sm font-bold text-primary">Check Your Inbox</h4>
            <p className="text-xs text-secondary leading-relaxed">
              We've dispatched recovery instructions to <strong>{email}</strong>.
            </p>
            <Button
              variant="primary"
              size="sm"
              className="w-full mt-2"
              onClick={() => onNavigate('/login')}
            >
              Return to Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
