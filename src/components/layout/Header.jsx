import React, { useState } from 'react';
import { useAuthRole, USER_ROLES } from '../../context/AuthRoleContext';
import { useTheme } from '../../context/ThemeContext';
import { useAppData } from '../../context/AppDataContext';
import { useToast } from '../../context/ToastContext';
import {
  Search,
  Bell,
  Sun,
  Moon,
  Flame,
  Zap,
  Menu,
  ChevronDown,
  Sparkles,
  LogOut,
  User,
  Settings,
  HelpCircle,
  CheckCircle2,
  X
} from 'lucide-react';

export const Header = ({ onOpenSearch, onToggleMobileSidebar, onNavigate }) => {
  const { currentUser, currentRole, logout } = useAuthRole();
  const { theme, toggleTheme } = useTheme();
  const { notifications, unreadNotificationsCount, markNotificationRead, markAllNotificationsRead, xp, streak } = useAppData();
  const { addToast } = useToast();

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
    addToast({
      title: 'Logged Out',
      message: 'You have been safely signed out.',
      type: 'info',
      duration: 3000
    });
    if (onNavigate) onNavigate('/login');
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case USER_ROLES.FACULTY: return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case USER_ROLES.RECRUITER: return 'bg-teal-500/20 text-teal-300 border-teal-500/40';
      case USER_ROLES.INSTITUTION_ADMIN: return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      case USER_ROLES.ADMIN: return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case USER_ROLES.STUDENT:
      default: return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-3 select-none">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side: Brand Logo & Mobile Sidebar Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-2 rounded-xl text-secondary hover:text-primary hover:bg-white/5"
            aria-label="Toggle navigation"
          >
            <Menu size={20} />
          </button>

          <div
            onClick={() => onNavigate ? onNavigate('/') : null}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-teal-400 flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <Sparkles size={18} />
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-extrabold text-base text-primary tracking-tight leading-none flex items-center gap-1.5">
                <span>Kaushal<span className="text-brand">Setu</span></span>
              </div>
              <div className="text-[9px] text-muted tracking-wider uppercase font-semibold">
                Portal Workspace
              </div>
            </div>
          </div>
        </div>

        {/* Center: Command Palette (Ctrl+K) Trigger */}
        <div className="flex-1 max-w-md mx-2 hidden md:block">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-secondary hover:text-primary hover:border-white/20 transition-all text-xs group"
          >
            <span className="flex items-center gap-2">
              <Search size={14} className="text-muted group-hover:text-brand transition-colors" />
              <span>Search skills, jobs, domains, resources...</span>
            </span>
            <kbd className="hidden lg:inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-muted">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile search trigger */}
          <button
            onClick={onOpenSearch}
            className="md:hidden p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-secondary hover:text-primary"
            aria-label="Search"
          >
            <Search size={17} />
          </button>

          {/* Gamification Streak & XP (Only shown for Student) */}
          {currentRole === USER_ROLES.STUDENT && (
            <div className="hidden sm:flex items-center gap-2">
              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber text-xs font-bold"
                title="12-day learning streak!"
              >
                <Flame size={14} className="text-amber animate-pulse" />
                <span>{streak}d</span>
              </div>

              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-brand text-xs font-bold font-mono"
                title="Career XP Points"
              >
                <Zap size={14} className="text-brand" />
                <span>{xp} XP</span>
              </div>
            </div>
          )}

          {/* Dark / Light Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/10 text-secondary hover:text-primary transition-all"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-500" />}
          </button>

          {/* Notification Center (Section 39) */}
          <div className="relative">
            <button
              onClick={() => {
                setIsNotificationsOpen(prev => !prev);
                setIsProfileMenuOpen(false);
              }}
              className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/10 text-secondary hover:text-primary relative transition-all"
              aria-label="Notifications"
            >
              <Bell size={17} />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center animate-pulse">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>

            {/* Notification Drawer Popover */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/15 shadow-2xl p-4 space-y-3 z-50 animate-slide-down">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-heading text-primary">Notifications</span>
                    {unreadNotificationsCount > 0 && (
                      <span className="badge badge-warning text-[10px]">{unreadNotificationsCount} New</span>
                    )}
                  </div>
                  <button
                    onClick={markAllNotificationsRead}
                    className="text-[11px] text-brand hover:underline"
                  >
                    Mark All Read
                  </button>
                </div>

                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      onClick={() => markNotificationRead(n.id)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        n.read ? 'bg-slate-950/40 border-white/5 opacity-75' : 'bg-slate-950/80 border-indigo-500/30'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-primary">{n.title}</span>
                        <span className="text-[10px] text-muted">{n.time}</span>
                      </div>
                      <p className="text-secondary text-[11px] leading-relaxed">{n.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Profile Menu (Section 40) */}
          <div className="relative">
            <button
              onClick={() => {
                setIsProfileMenuOpen(prev => !prev);
                setIsNotificationsOpen(false);
              }}
              className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-900 border border-transparent hover:border-white/10 transition-all group"
            >
              <img
                src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                alt={currentUser?.name || 'User'}
                className="w-8 h-8 rounded-xl object-cover border border-white/20 shadow-sm"
              />
              <div className="hidden xl:block text-left">
                <div className="text-xs font-bold text-primary font-heading leading-tight truncate max-w-[120px]">
                  {currentUser?.name || 'Alex Sharma'}
                </div>
                <div className="text-[10px] text-muted truncate max-w-[120px]">
                  {currentUser?.roleTitle || 'Student'}
                </div>
              </div>
              <ChevronDown size={14} className="text-muted group-hover:text-primary transition-colors" />
            </button>

            {/* Profile Menu Dropdown */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/15 shadow-2xl p-3 space-y-2 z-50 animate-slide-down">
                <div className="p-2 border-b border-white/10">
                  <div className="font-bold text-sm text-primary font-heading">{currentUser?.name}</div>
                  <div className="text-xs text-secondary truncate">{currentUser?.email}</div>
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mt-1.5 ${getRoleBadgeColor(currentRole)}`}>
                    {currentRole.replace('_', ' ')}
                  </span>
                </div>

                <div className="space-y-0.5 text-xs">
                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      if (onNavigate) onNavigate(currentRole === USER_ROLES.STUDENT ? '/student/portfolio' : `/${currentRole}/dashboard`);
                    }}
                    className="w-full flex items-center gap-2 p-2 rounded-lg text-secondary hover:text-primary hover:bg-white/5 transition-all text-left"
                  >
                    <User size={14} /> My Profile & Credentials
                  </button>

                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      if (onNavigate) onNavigate('/contact');
                    }}
                    className="w-full flex items-center gap-2 p-2 rounded-lg text-secondary hover:text-primary hover:bg-white/5 transition-all text-left"
                  >
                    <HelpCircle size={14} /> Help & Support
                  </button>

                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      if (onNavigate) onNavigate('/demo');
                    }}
                    className="w-full flex items-center gap-2 p-2 rounded-lg text-amber-400 hover:bg-amber-500/10 transition-all text-left font-semibold"
                  >
                    <Sparkles size={14} /> ⚡ Demo Sandbox
                  </button>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 p-2 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-all text-xs font-semibold text-left"
                  >
                    <LogOut size={14} /> Sign Out of Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
