import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Award, Building2, HelpCircle } from 'lucide-react';

export const Badge = ({
  children,
  variant = 'primary', // 'primary', 'success', 'warning', 'error', 'teal', 'purple', 'neutral'
  icon: Icon,
  className = '',
  ...props
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`} {...props}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
};

export const VerificationBadge = ({
  type = 'industry', // 'industry', 'institution', 'assessment', 'certificate'
  text,
  tooltip,
  className = ''
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const config = {
    industry: {
      defaultText: '✓ Industry Verified',
      defaultTooltip: 'Verified by TechNova Labs Senior Engineering Mentor on 10 Aug 2026',
      icon: Building2,
      styleClass: 'industry'
    },
    institution: {
      defaultText: '✓ Institution Verified',
      defaultTooltip: 'Verified by Apex Institute of Technology Academic Evaluation Cell on 12 June 2026',
      icon: ShieldCheck,
      styleClass: 'institution'
    },
    assessment: {
      defaultText: '✓ Assessment Verified',
      defaultTooltip: 'Score > 80% achieved in KaushalEra Proctored Coding Assessment on 14 Aug 2026',
      icon: CheckCircle2,
      styleClass: 'assessment'
    },
    certificate: {
      defaultText: '✓ Certificate Verified',
      defaultTooltip: 'Cryptographically verified credential from Meta / Coursera Certification Authority',
      icon: Award,
      styleClass: 'certificate'
    }
  };

  const current = config[type] || config.industry;
  const displayText = text || current.defaultText;
  const tooltipText = tooltip || current.defaultTooltip;
  const Icon = current.icon;

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      tabIndex={0}
      role="note"
      aria-label={tooltipText}
    >
      <span className={`verification-badge ${current.styleClass} ${className}`}>
        <Icon size={13} className="shrink-0" />
        <span>{displayText}</span>
      </span>

      {showTooltip && (
        <div className="tooltip-box" style={{ width: 'max-content', maxWidth: '280px', whiteSpace: 'normal', textAlign: 'center', lineHeight: '1.4' }}>
          <div className="font-semibold text-brand mb-1 flex items-center justify-center gap-1">
            <Icon size={12} /> {displayText}
          </div>
          <div className="text-secondary">{tooltipText}</div>
        </div>
      )}
    </div>
  );
};
