import React, { useEffect, useState } from 'react';

export const ProgressBar = ({
  value = 0,
  max = 100,
  label,
  valueLabel,
  color = 'var(--color-primary)',
  height = 8,
  showPercentage = true,
  animate = true,
  className = ''
}) => {
  const [widthPercent, setWidthPercent] = useState(0);
  const targetPercent = Math.min(100, Math.max(0, (value / max) * 100));

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setWidthPercent(targetPercent);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setWidthPercent(targetPercent);
    }
  }, [targetPercent, animate]);

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage || valueLabel) && (
        <div className="flex items-center justify-between text-xs mb-1.5">
          {label && <span className="font-medium text-secondary">{label}</span>}
          <span className="font-semibold text-primary font-mono">
            {valueLabel || `${value}%`}
          </span>
        </div>
      )}
      <div
        className="w-full bg-slate-800/30 rounded-full overflow-hidden"
        style={{
          height: `${height}px`,
          backgroundColor: 'rgba(255, 255, 255, 0.07)'
        }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${widthPercent}%`,
            background: color
          }}
        />
      </div>
    </div>
  );
};
