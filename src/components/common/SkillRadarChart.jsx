import React, { useState } from 'react';
import { MOCK_RADAR_SKILLS } from '../../data/mockSkills';
import { Button } from './Button';
import { Sparkles, ArrowUpRight, BookOpen, CheckCircle2 } from 'lucide-react';

export const SkillRadarChart = ({
  skills = MOCK_RADAR_SKILLS,
  size = 360,
  onSelectSkill
}) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const numAxes = skills.length;
  const center = size / 2;
  const radius = center - 50;
  const angleStep = (Math.PI * 2) / numAxes;

  // Helper to compute coordinates
  const getCoordinates = (value, index, maxVal = 100) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / maxVal) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  // Generate background concentric polygons (20%, 40%, 60%, 80%, 100%)
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];
  const gridPolygons = levels.map(level => {
    return skills.map((_, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = level * radius;
      return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
    }).join(' ');
  });

  // User polygon coordinates
  const userPolygonPoints = skills.map((s, i) => {
    const { x, y } = getCoordinates(s.yourLevel, i);
    return `${x},${y}`;
  }).join(' ');

  // Industry benchmark polygon coordinates
  const industryPolygonPoints = skills.map((s, i) => {
    const { x, y } = getCoordinates(s.industryLevel, i);
    return `${x},${y}`;
  }).join(' ');

  const currentHovered = hoveredSkill !== null ? skills[hoveredSkill] : skills[0];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
      {/* Radar SVG Area */}
      <div className="relative flex items-center justify-center select-none" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="overflow-visible">
          <defs>
            <linearGradient id="userRadarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
            </linearGradient>
            <radialGradient id="radarCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={center} cy={center} r={radius} fill="url(#radarCenterGlow)" />

          {/* Background Grid Rings */}
          {gridPolygons.map((points, idx) => (
            <polygon
              key={idx}
              points={points}
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth={idx === levels.length - 1 ? 1.5 : 1}
              strokeDasharray={idx < levels.length - 1 ? '3 3' : 'none'}
            />
          ))}

          {/* Axis Lines */}
          {skills.map((_, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const x2 = center + radius * Math.cos(angle);
            const y2 = center + radius * Math.sin(angle);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x2}
                y2={y2}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth={1}
              />
            );
          })}

          {/* Industry Benchmark Polygon */}
          <polygon
            points={industryPolygonPoints}
            fill="rgba(148, 163, 184, 0.08)"
            stroke="#94A3B8"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            className="transition-all duration-300"
          />

          {/* User Score Filled Polygon */}
          <polygon
            points={userPolygonPoints}
            fill="url(#userRadarGrad)"
            stroke="#6366F1"
            strokeWidth={2.5}
            style={{
              filter: 'drop-shadow(0 0 12px rgba(99, 102, 241, 0.4))',
              transition: 'all 0.4s ease'
            }}
          />

          {/* Skill Vertex Points & Labels */}
          {skills.map((s, i) => {
            const userCoord = getCoordinates(s.yourLevel, i);
            const angle = i * angleStep - Math.PI / 2;
            const labelR = radius + 26;
            const labelX = center + labelR * Math.cos(angle);
            const labelY = center + labelR * Math.sin(angle);
            const isHovered = hoveredSkill === i;

            return (
              <g
                key={i}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredSkill(i)}
                onClick={() => onSelectSkill && onSelectSkill(s)}
              >
                {/* Vertex Circle */}
                <circle
                  cx={userCoord.x}
                  cy={userCoord.y}
                  r={isHovered ? 7 : 4.5}
                  fill={isHovered ? '#06B6D4' : '#6366F1'}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  style={{
                    filter: isHovered ? 'drop-shadow(0 0 8px #06B6D4)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                />

                {/* Text Label */}
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isHovered ? '#6366F1' : 'var(--color-text-secondary)'}
                  fontSize={isHovered ? '13px' : '11.5px'}
                  fontWeight={isHovered ? '700' : '500'}
                  className="font-sans select-none transition-all duration-150"
                >
                  {s.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Legend Overlay */}
        <div className="absolute bottom-1 left-2 flex items-center gap-3 text-xs bg-slate-900/70 backdrop-blur px-2.5 py-1 rounded-full border border-white/5">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
            <span className="text-secondary">Your Level</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-1 border-t-2 border-dashed border-slate-400 inline-block" />
            <span className="text-muted">Industry Benchmark</span>
          </div>
        </div>
      </div>

      {/* Interactive Detail Card (Section 45) */}
      <div className="flex-1 bg-slate-900/60 backdrop-blur border border-white/10 rounded-2xl p-5 w-full">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div>
            <div className="text-xs uppercase font-semibold text-brand tracking-wider flex items-center gap-1">
              <Sparkles size={13} /> Selected Skill Analysis
            </div>
            <h4 className="text-xl font-bold font-heading text-primary mt-0.5">
              {currentHovered.name}
            </h4>
          </div>
          <div className="text-right">
            <div className="text-2xl font-extrabold font-heading text-teal">
              {currentHovered.matchPercent}%
            </div>
            <div className="text-xs text-muted">Role Match</div>
          </div>
        </div>

        <p className="text-xs text-secondary my-3 leading-relaxed">
          {currentHovered.description}
        </p>

        <div className="grid grid-cols-2 gap-3 my-4 bg-slate-950/40 p-3 rounded-xl border border-white/5">
          <div>
            <div className="text-xs text-muted">Your Level</div>
            <div className="text-sm font-bold text-primary flex items-center gap-1.5 mt-0.5">
              <CheckCircle2 size={14} className="text-emerald" />
              <span>{currentHovered.levelName} ({currentHovered.yourLevel}%)</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-muted">Industry Level</div>
            <div className="text-sm font-bold text-brand mt-0.5">
              {currentHovered.industryLevelName} ({currentHovered.industryLevel}%)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <Button
            variant="primary"
            size="sm"
            icon={ArrowUpRight}
            onClick={() => onSelectSkill && onSelectSkill(currentHovered)}
          >
            Improve Skill
          </Button>
          <Button
            variant="secondary"
            size="sm"
            icon={BookOpen}
            onClick={() => onSelectSkill && onSelectSkill(currentHovered)}
          >
            View Resources
          </Button>
        </div>
      </div>
    </div>
  );
};
