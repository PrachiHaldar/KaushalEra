import React from 'react';
import { useToast } from '../../context/ToastContext';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none px-4">
      {toasts.map((toast) => {
        const icons = {
          success: <CheckCircle2 size={18} className="text-emerald shrink-0" />,
          warning: <AlertTriangle size={18} className="text-amber shrink-0" />,
          error: <XCircle size={18} className="text-rose shrink-0" />,
          info: <Info size={18} className="text-brand shrink-0" />
        };

        const borderColors = {
          success: 'border-emerald-500/40',
          warning: 'border-amber-500/40',
          error: 'border-rose-500/40',
          info: 'border-indigo-500/40'
        };

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto bg-slate-900/95 backdrop-blur-xl border ${borderColors[toast.type] || 'border-white/10'} rounded-xl p-4 shadow-2xl animate-slide-right flex items-start gap-3`}
          >
            {icons[toast.type] || icons.info}
            <div className="flex-1">
              {toast.title && <h5 className="text-sm font-bold text-primary">{toast.title}</h5>}
              <p className="text-xs text-secondary mt-0.5">{toast.message}</p>
              {toast.actionLabel && (
                <button
                  onClick={() => {
                    toast.onAction && toast.onAction();
                    removeToast(toast.id);
                  }}
                  className="mt-2 text-xs font-semibold text-brand hover:underline"
                >
                  {toast.actionLabel} →
                </button>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-muted hover:text-primary transition-colors p-1"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
