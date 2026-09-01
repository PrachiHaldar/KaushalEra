import React, { useState, useEffect } from 'react';
import { useAuthRole, USER_ROLES } from '../../context/AuthRoleContext';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../common/Button';
import {
  Sparkles,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Globe,
  Briefcase,
  GraduationCap,
  Building2,
  BookOpen
} from 'lucide-react';

export const PublicNavbar = ({ currentPath, onNavigate, onOpenSearch }) => {
  const { isAuthenticated, currentUser, currentRole } = useAuthRole();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/domains', label: 'Domains' },
    { path: '/careers', label: 'Careers' },
    { path: '/internships', label: 'Internships' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/resources', label: 'Resources' }
  ];

  const getDashboardPath = () => {
    switch (currentRole) {
      case USER_ROLES.FACULTY: return '/faculty/dashboard';
      case USER_ROLES.RECRUITER: return '/industry/dashboard';
      case USER_ROLES.INSTITUTION_ADMIN: return '/institution/dashboard';
      case USER_ROLES.ADMIN: return '/admin/dashboard';
      case USER_ROLES.STUDENT:
      default: return '/student/dashboard';
    }
  };

  const handleNav = (path) => {
    setIsMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
        : 'bg-transparent border-b border-white/5 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleNav('/')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-teal-400 flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <Sparkles size={20} />
          </div>
          <div>
            <div className="font-heading font-extrabold text-lg text-primary tracking-tight leading-none flex items-center gap-1.5">
              <span>Kaushal<span className="text-brand">Setu</span></span>
            </div>
            <div className="text-[10px] text-muted tracking-wider uppercase font-semibold">
              Academia-Industry Bridge
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'text-brand font-bold bg-white/5'
                    : 'text-secondary hover:text-primary hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          {/* Quick Audience dropdown links */}
          <button
            onClick={() => handleNav('/industry')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-teal hover:bg-white/5 transition-all"
          >
            For Industry
          </button>
          <button
            onClick={() => handleNav('/institutions')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-indigo-300 hover:bg-white/5 transition-all"
          >
            For Institutions
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/10 text-secondary hover:text-primary transition-all"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-500" />}
          </button>

          {/* Authenticated vs Guest CTAs */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                iconRight={ArrowRight}
                onClick={() => handleNav(getDashboardPath())}
              >
                Go to Dashboard
              </Button>
              <img
                src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                alt={currentUser?.name}
                className="w-8 h-8 rounded-xl object-cover border border-white/20 shadow-sm"
              />
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2.5">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNav('/login')}
              >
                Login
              </Button>
              <Button
                variant="glow"
                size="sm"
                iconRight={ArrowRight}
                onClick={() => handleNav('/signup')}
              >
                Get Started
              </Button>
            </div>
          )}

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="xl:hidden p-2 rounded-xl text-secondary hover:text-primary hover:bg-white/5"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 backdrop-blur-2xl border-b border-white/10 p-6 space-y-4 animate-slide-down shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold ${
                  currentPath === link.path ? 'bg-indigo-600/20 text-brand border border-indigo-500/30' : 'text-secondary hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => handleNav('/industry')}
              className="p-2.5 rounded-xl text-left text-xs font-semibold text-teal hover:bg-white/5"
            >
              🏢 For Industry & Recruiters
            </button>
            <button
              onClick={() => handleNav('/institutions')}
              className="p-2.5 rounded-xl text-left text-xs font-semibold text-indigo-300 hover:bg-white/5"
            >
              🏛️ For Academic Institutions
            </button>
            <button
              onClick={() => handleNav('/demo')}
              className="p-2.5 rounded-xl text-left text-xs font-semibold text-amber-400 hover:bg-white/5"
            >
              ⚡ 1-Click Demo Sandbox
            </button>
          </div>

          {!isAuthenticated && (
            <div className="pt-3 border-t border-white/10 flex items-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={() => handleNav('/login')}
              >
                Login
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => handleNav('/signup')}
              >
                Sign Up Free
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
