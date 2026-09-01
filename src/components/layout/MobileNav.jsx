import React from 'react';
import { LayoutDashboard, Compass, Briefcase, FileText, UserCheck } from 'lucide-react';

export const MobileNav = ({ currentPath, onNavigate }) => {
  const navItems = [
    { id: '/dashboard', label: 'Home', icon: LayoutDashboard },
    { id: '/roadmap', label: 'Learn', icon: Compass },
    { id: '/opportunities', label: 'Jobs', icon: Briefcase },
    { id: '/applications', label: 'Apps', icon: FileText },
    { id: '/portfolio', label: 'Profile', icon: UserCheck }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 flex items-center justify-around">
      {navItems.map((item) => {
        const isActive = currentPath === item.id;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
              isActive ? 'text-indigo-400 font-bold' : 'text-muted hover:text-secondary'
            }`}
          >
            <Icon size={18} className={isActive ? 'text-indigo-400' : 'text-muted'} />
            <span className="text-[10px] mt-0.5">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
