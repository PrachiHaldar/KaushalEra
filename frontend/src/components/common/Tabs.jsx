import React from 'react';

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
