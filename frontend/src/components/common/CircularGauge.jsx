import React, { useEffect, useState } from 'react';

export const CircularGauge = ({
  score = 78,
  maxScore = 100,
  size = 180,
  strokeWidth = 14,
  label = 'Career Ready',
  sublabel = 'Top 15% in cohort',
  color = '#6366F1',
  accentColor = '#06B6D4'
}) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 150);
    return () => clearTimeout(timer);
  }, [score]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressPercent = Math.min(100, Math.max(0, (animatedScore / maxScore) * 100));
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center relative select-none">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
        style={{ filter: `drop-shadow(0 0 16px ${color}33)` }}
      >
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={accentColor} />
          </linearGradient>
        </defs>

        {/* Background Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-slate-800"
          style={{ opacity: 0.15 }}
        />

        {/* Animated Progress Ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </svg>

      {/* Inner Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-4xl font-extrabold font-heading text-primary leading-none tracking-tight">
          {animatedScore}
          <span className="text-xl font-normal text-muted">%</span>
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mt-1">
          {label}
        </div>
        {sublabel && (
          <div className="text-xs text-muted mt-0.5 max-w-[130px] leading-tight">
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
};
