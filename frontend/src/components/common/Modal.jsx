import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-2xl',
  showClose = true
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${maxWidth}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {(title || showClose) && (
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div>
              {title && <h3 className="text-xl font-bold font-heading text-primary">{title}</h3>}
              {subtitle && <p className="text-xs text-muted mt-0.5">{subtitle}</p>}
            </div>
            {showClose && (
              <button
                onClick={onClose}
                className="text-muted hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-white/5"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export const Tabs = ({
  tabs,
  activeTab,
  onChange,
  variant = 'line', // 'line', 'pills'
  className = ''
}) => {
  if (variant === 'pills') {
    return (
      <div className={`tabs-pills ${className}`}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`tab-pill-btn ${isActive ? 'active' : ''}`}
            >
              <div className="flex items-center gap-1.5">
                {Icon && <Icon size={14} />}
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span className="text-[10px] px-1.5 py-0.2 bg-indigo-500/20 text-indigo-400 rounded-full font-bold ml-1">
                    {tab.badge}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`tabs-container ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`tab-btn ${isActive ? 'active' : ''}`}
          >
            {Icon && <Icon size={16} />}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span className="text-[10px] px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded-full font-bold">
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
