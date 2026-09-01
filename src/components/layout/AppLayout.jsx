import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { ToastContainer } from '../common/Toast';
import { CommandPalette } from '../common/CommandPalette';
import { Sparkles } from 'lucide-react';

export const AppLayout = ({ children, currentPath, onNavigate }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(prev => !prev)}
        onNavigate={onNavigate}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex w-full">
        {/* Left Sidebar */}
        <Sidebar
          currentPath={currentPath}
          onNavigate={onNavigate}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Dynamic Main Content View */}
        <main className="flex-1 min-w-0 p-4 lg:p-8 pb-24 lg:pb-12 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav currentPath={currentPath} onNavigate={onNavigate} />

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(route, data) => onNavigate(route, data)}
      />

      {/* Global Toast System */}
      <ToastContainer />

      {/* Floating Demo Launcher Pill */}
      <button
        onClick={() => onNavigate('/demo')}
        className="fixed bottom-5 left-5 z-40 px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-2xl backdrop-blur flex items-center gap-2 hover:scale-105 transition-all select-none group"
      >
        <Sparkles size={14} className="text-amber-400 animate-spin" />
        <span>⚡ Demo Sandbox</span>
      </button>
    </div>
  );
};
