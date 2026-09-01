import React from 'react';
import { Button } from './Button';

export const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-10 border border-dashed border-white/10 rounded-2xl bg-slate-900/30 ${className}`}>
      {Icon && (
        <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-brand mb-4">
          <Icon size={28} />
        </div>
      )}
      <h4 className="text-lg font-bold font-heading text-primary mb-1">{title}</h4>
      <p className="text-xs text-muted max-w-md mb-6 leading-relaxed">{description}</p>
      {actionLabel && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export const SkeletonCard = ({ height = 'h-48', className = '' }) => {
  return (
    <div className={`card animate-shimmer ${height} ${className} flex flex-col justify-between p-6`}>
      <div className="space-y-2">
        <div className="h-4 bg-white/10 rounded w-1/3" />
        <div className="h-3 bg-white/5 rounded w-2/3" />
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-white/5 rounded w-full" />
        <div className="h-8 bg-white/10 rounded w-1/4" />
      </div>
    </div>
  );
};

export const SkeletonTable = ({ rows = 4 }) => {
  return (
    <div className="card p-4 space-y-3">
      <div className="h-8 bg-white/10 rounded animate-shimmer" />
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-12 bg-white/5 rounded animate-shimmer" />
      ))}
    </div>
  );
};
