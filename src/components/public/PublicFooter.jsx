import React, { useState } from 'react';
import { Sparkles, Github, Linkedin, Twitter, Mail, ArrowRight, Heart } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const PublicFooter = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    addToast({
      title: '📬 Subscribed!',
      message: 'You have been enrolled in KaushalEra industry insights.',
      type: 'success',
      duration: 3500
    });
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 5-Column Section (Section 42) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div
              onClick={() => onNavigate('/')}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-teal-400 flex items-center justify-center text-white font-black">
                <Sparkles size={16} />
              </div>
              <div className="font-heading font-extrabold text-lg text-primary tracking-tight">
                ✦ Kaushal<span className="text-brand">Era</span>
              </div>
            </div>

            <p className="text-xs text-secondary leading-relaxed max-w-sm">
              KaushalEra — Academia × Industry × Talent. Connecting students, faculty, institutions, and recruiters in one unified ecosystem.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Stay Informed</span>
              <div className="flex items-center gap-2 max-w-sm bg-slate-900/80 p-1.5 rounded-xl border border-white/10">
                <Mail size={14} className="text-muted ml-2 shrink-0" />
                <input
                  type="email"
                  placeholder="Enter university or work email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-transparent text-xs text-primary placeholder-muted outline-none w-full font-sans"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shrink-0 transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          {/* Col 1: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-primary">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('/about')} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('/how-it-works')} className="hover:text-primary transition-colors">How It Works</button></li>
              <li><button onClick={() => onNavigate('/domains')} className="hover:text-primary transition-colors">Domains Explorer</button></li>
              <li><button onClick={() => onNavigate('/careers')} className="hover:text-primary transition-colors">Career Pathways</button></li>
              <li><button onClick={() => onNavigate('/resources')} className="hover:text-primary transition-colors">Resource Library</button></li>
            </ul>
          </div>

          {/* Col 2: Students */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-primary">Students</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('/students')} className="hover:text-primary transition-colors">Student Overview</button></li>
              <li><button onClick={() => onNavigate('/internships')} className="hover:text-primary transition-colors">Internship Search</button></li>
              <li><button onClick={() => onNavigate('/jobs')} className="hover:text-primary transition-colors">Full-time Jobs</button></li>
              <li><button onClick={() => onNavigate('/login')} className="hover:text-primary transition-colors">Skill Assessments</button></li>
              <li><button onClick={() => onNavigate('/login')} className="hover:text-primary transition-colors">Digital Portfolio</button></li>
            </ul>
          </div>

          {/* Col 3: Industry */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-primary">Industry</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('/industry')} className="hover:text-primary transition-colors">Hire Talent</button></li>
              <li><button onClick={() => onNavigate('/login')} className="hover:text-primary transition-colors">Post a Job</button></li>
              <li><button onClick={() => onNavigate('/login')} className="hover:text-primary transition-colors">Post Internship</button></li>
              <li><button onClick={() => onNavigate('/industry')} className="hover:text-primary transition-colors">Academic MoUs</button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-primary transition-colors">Campus Drives</button></li>
            </ul>
          </div>

          {/* Col 4: Institutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-primary">Institutions</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('/institutions')} className="hover:text-primary transition-colors">University Overview</button></li>
              <li><button onClick={() => onNavigate('/login')} className="hover:text-primary transition-colors">Placement Analytics</button></li>
              <li><button onClick={() => onNavigate('/login')} className="hover:text-primary transition-colors">Skill Gap Intelligence</button></li>
              <li><button onClick={() => onNavigate('/academicians')} className="hover:text-primary transition-colors">Faculty Research</button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-primary transition-colors">Contact Support</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Demo link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} KaushalEra Platform. Built with high precision.</span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/demo')} className="text-brand font-semibold hover:underline">
              ⚡ Demo Accounts
            </button>
            <button onClick={() => onNavigate('/contact')} className="hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('/contact')} className="hover:text-primary transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
