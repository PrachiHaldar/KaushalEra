import React from 'react';

export const Card = ({
  children,
  className = '',
  accent, // 'primary', 'teal', 'emerald', 'amber'
  interactive = false,
  onClick,
  ...props
}) => {
  const accentClass = accent ? `card-accent-${accent}` : '';
  const interactiveClass = interactive ? 'card-interactive' : '';

  return (
    <div
      className={`card ${accentClass} ${interactiveClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ title, subtitle, icon: Icon, action, className = '' }) => {
  return (
    <div className={`card-header ${className}`}>
      <div>
        <h3 className="card-title">
          {Icon && <Icon size={20} className="text-brand shrink-0" />}
          <span>{title}</span>
        </h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};
