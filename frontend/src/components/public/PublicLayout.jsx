import React, { useState } from 'react';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { ToastContainer } from '../common/Toast';
import { CommandPalette } from '../common/CommandPalette';
import { Sparkles } from 'lucide-react';

export const PublicLayout = ({ children, currentPath, onNavigate }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Public Sticky Header */}
      <PublicNavbar
        currentPath={currentPath}
        onNavigate={onNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Public Page Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Public Footer */}
      <PublicFooter onNavigate={onNavigate} />

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(route, data) => onNavigate(route, data)}
      />

      {/* Toast Notifications */}
      <ToastContainer />

      {/* Floating Demo Launcher Pill */}
      <button
        onClick={() => onNavigate('/demo')}
        className="fixed bottom-5 left-5 z-40 px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-2xl backdrop-blur flex items-center gap-2 hover:scale-105 transition-all select-none group"
      >
        <Sparkles size={14} className="text-amber-400 animate-spin" />
        <span>⚡ 1-Click Demo Sandbox</span>
      </button>
    </div>
  );
};
