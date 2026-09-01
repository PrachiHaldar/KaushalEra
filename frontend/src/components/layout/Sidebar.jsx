import React, { useState } from 'react';
import { useAuthRole, USER_ROLES } from '../../context/AuthRoleContext';
import {
  LayoutDashboard,
  Compass,
  Code2,
  CheckSquare,
  GitPullRequest,
  Map,
  Globe,
  Route,
  BookOpen,
  FileText,
  Award,
  Terminal,
  Briefcase,
  Layers,
  Calendar,
  FileCheck,
  UserCheck,
  Video,
  BrainCircuit,
  Users,
  Send,
  LineChart,
  FolderGit2,
  GraduationCap,
  Building2,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Settings,
  Sparkles
} from 'lucide-react';

export const Sidebar = ({ currentPath, onNavigate, isMobileOpen, onCloseMobile }) => {
  const { currentRole } = useAuthRole();
  const [collapsed, setCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    myCareer: true,
    learn: true,
    opportunities: true,
    careerTools: false,
    tracking: true
  });

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  // Student Navigation Config (Strictly adhering to Section 42)
  const studentNavGroups = [
    {
      groupTitle: null,
      items: [
        { id: '/dashboard', label: 'Dashboard', icon: LayoutDashboard }
      ]
    },
    {
      key: 'myCareer',
      groupTitle: 'MY CAREER',
      items: [
        { id: '/careers', label: 'Career Explorer', icon: Compass },
        { id: '/skills', label: 'My Skills', icon: Code2 },
        { id: '/assessment', label: 'Skill Assessment', icon: CheckSquare, badge: 'Take' },
        { id: '/skill-gap', label: 'Skill Gap', icon: GitPullRequest, badge: '3 Gaps' },
        { id: '/roadmap', label: 'Career Roadmap', icon: Map }
      ]
    },
    {
      key: 'learn',
      groupTitle: 'LEARN',
      items: [
        { id: '/domains', label: 'Domains', icon: Globe },
        { id: '/roadmap', label: 'Learning Paths', icon: Route },
        { id: '/resources', label: 'Resources & Library', icon: FileText },
        { id: '/portfolio', label: 'Certifications', icon: Award }
      ]
    },
    {
      key: 'opportunities',
      groupTitle: 'OPPORTUNITIES',
      items: [
        { id: '/opportunities', label: 'Internships & Jobs', icon: Briefcase, badge: '92% Match' },
        { id: '/portfolio', label: 'Verified Projects', icon: Layers }
      ]
    },
    {
      key: 'careerTools',
      groupTitle: 'CAREER TOOLS',
      items: [
        { id: '/portfolio', label: 'Digital Portfolio', icon: UserCheck },
        { id: '/careers/compare', label: 'Career Comparison', icon: BrainCircuit }
      ]
    },
    {
      key: 'tracking',
      groupTitle: 'TRACKING',
      items: [
        { id: '/applications', label: 'Applications (Kanban)', icon: Send, badge: '4 Active' },
        { id: '/learning-progress', label: 'Learning Progress', icon: LineChart },
        { id: '/internship-workspace', label: 'Internship Workspace', icon: FolderGit2, badge: 'Wk 6' }
      ]
    }
  ];

  // Faculty Navigation Config
  const facultyNavGroups = [
    {
      groupTitle: null,
      items: [
        { id: '/dashboard', label: 'Faculty Command Center', icon: LayoutDashboard },
        { id: '/faculty/collaborations', label: 'Industry Collaborations', icon: Building2, badge: '6 Active' },
        { id: '/faculty/fdp', label: 'FDP & Enablement', icon: GraduationCap, badge: '12 New' },
        { id: '/faculty/consultancy', label: 'Consultancy Matching', icon: Briefcase },
        { id: '/learning-progress', label: 'Research & Labs', icon: BrainCircuit }
      ]
    }
  ];

  // Recruiter Navigation Config
  const recruiterNavGroups = [
    {
      groupTitle: null,
      items: [
        { id: '/dashboard', label: 'Recruiter Command Center', icon: LayoutDashboard },
        { id: '/industry/matching', label: 'Candidate Match Engine', icon: UserCheck, badge: '92% Match' },
        { id: '/opportunities', label: 'Active Job Postings', icon: Briefcase, badge: '12 Active' },
        { id: '/applications', label: 'Applicant Pipeline', icon: Send, badge: '428 Total' },
        { id: '/learning-progress', label: 'Hiring Analytics', icon: LineChart }
      ]
    }
  ];

  // Institution Admin Navigation Config
  const adminNavGroups = [
    {
      groupTitle: null,
      items: [
        { id: '/dashboard', label: 'University Command Center', icon: LayoutDashboard },
        { id: '/institution/departments', label: 'Department Intelligence', icon: Building2, badge: '4 Depts' },
        { id: '/skill-gap', label: 'Institutional Skill Gaps', icon: GitPullRequest, badge: 'Critical' },
        { id: '/opportunities', label: 'Placement Outcomes', icon: Award, badge: '87% Rate' },
        { id: '/admin', label: 'Governance & Audits', icon: ShieldCheck }
      ]
    }
  ];

  const currentGroups =
    currentRole === USER_ROLES.FACULTY ? facultyNavGroups :
    currentRole === USER_ROLES.RECRUITER ? recruiterNavGroups :
    currentRole === USER_ROLES.INSTITUTION_ADMIN ? adminNavGroups :
    studentNavGroups;

  const handleNavClick = (path) => {
    onNavigate(path);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-[61px] left-0 z-50 lg:z-30 h-screen lg:h-[calc(100vh-61px)] bg-slate-950/90 backdrop-blur-2xl border-r border-white/10 flex flex-col transition-all duration-300 ${
          collapsed ? 'w-20' : 'w-64'
        } ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Collapse toggle (desktop only) */}
        <div className="hidden lg:flex items-center justify-end px-3 py-2 border-b border-white/5">
          <button
            onClick={() => setCollapsed(prev => !prev)}
            className="p-1.5 rounded-lg text-muted hover:text-primary hover:bg-white/5 transition-colors"
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-4">
          {currentGroups.map((group, gIdx) => {
            const isCollapsible = group.key !== undefined;
            const isExpanded = !isCollapsible || expandedSections[group.key];

            return (
              <div key={gIdx} className="space-y-1">
                {group.groupTitle && !collapsed && (
                  <button
                    onClick={() => isCollapsible && toggleSection(group.key)}
                    className="w-full flex items-center justify-between text-[11px] font-bold tracking-wider text-muted px-3 py-1.5 hover:text-secondary uppercase"
                  >
                    <span>{group.groupTitle}</span>
                    {isCollapsible && (
                      isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />
                    )}
                  </button>
                )}

                {isExpanded && (
                  <div className="space-y-0.5">
                    {group.items.map((item) => {
                      const isActive = currentPath === item.id;
                      const Icon = item.icon;

                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all group relative ${
                            isActive
                              ? 'bg-gradient-to-r from-indigo-600/30 to-indigo-600/10 text-primary font-semibold border-l-2 border-indigo-500 shadow-sm'
                              : 'text-secondary hover:text-primary hover:bg-white/5'
                          }`}
                          title={collapsed ? item.label : undefined}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <Icon
                              size={18}
                              className={`shrink-0 transition-colors ${
                                isActive ? 'text-indigo-400' : 'text-muted group-hover:text-primary'
                              }`}
                            />
                            {!collapsed && <span className="truncate">{item.label}</span>}
                          </div>

                          {!collapsed && item.badge && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30 shrink-0">
                              {item.badge}
                            </span>
                          )}

                          {/* Tooltip for collapsed mode */}
                          {collapsed && (
                            <div className="absolute left-full ml-2 px-2.5 py-1 bg-slate-900 text-white text-xs rounded-md shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                              {item.label}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Help & Status */}
        {!collapsed && (
          <div className="p-3 border-t border-white/10 bg-slate-950/60">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/20">
              <div className="flex items-center gap-2 text-xs font-bold text-brand mb-1">
                <Sparkles size={14} /> Career Assist AI
              </div>
              <p className="text-[11px] text-secondary leading-snug">
                Need guidance? Try asking Career Explorer "What can I become?".
              </p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
