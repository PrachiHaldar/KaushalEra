import React from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { Lock, ArrowRight, Sparkles, UserPlus } from 'lucide-react';

export const LoginRequiredModal = ({ isOpen, onClose, onNavigate, title = "Login Required", message = "Create your free student account to apply for opportunities, take verified skill assessments, and unlock personal match scores." }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Authentication Required"
      subtitle="Join 25,000+ students and professionals"
    >
      <div className="space-y-6 text-center py-2">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-brand mx-auto shadow-lg shadow-indigo-950/50">
          <Lock size={28} />
        </div>

        <div className="space-y-1.5">
          <h3 className="text-xl font-bold font-heading text-primary">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-secondary max-w-md mx-auto leading-relaxed">
            {message}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              onClose();
              onNavigate('/login');
            }}
          >
            Login to Existing Account
          </Button>
          <Button
            variant="primary"
            size="md"
            iconRight={ArrowRight}
            onClick={() => {
              onClose();
              onNavigate('/signup');
            }}
          >
            Create Free Account
          </Button>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={() => {
              onClose();
              onNavigate('/demo');
            }}
            className="text-xs text-amber-400 font-semibold hover:underline"
          >
            ⚡ Or try 1-Click Demo Account Login
          </button>
        </div>
      </div>
    </Modal>
  );
};
