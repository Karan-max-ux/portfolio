import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Palette, 
  Braces, 
  Atom, 
  FileType, 
  Server, 
  Cpu, 
  Network, 
  ShieldCheck, 
  Database, 
  Layers, 
  Terminal, 
  TerminalSquare, 
  Coffee, 
  FileCode, 
  Binary, 
  GitBranch, 
  Github, 
  BarChart3,
  CheckCircle,
  Filter
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Palette: Palette,
  Braces: Braces,
  Atom: Atom,
  FileType: FileType,
  Server: Server,
  Cpu: Cpu,
  Network: Network,
  ShieldCheck: ShieldCheck,
  Database: Database,
  Layers: Layers,
  Terminal: Terminal,
  TerminalSquare: TerminalSquare,
  Coffee: Coffee,
  FileCode: FileCode,
  Binary: Binary,
  GitBranch: GitBranch,
  Github: Github,
  BarChart3: BarChart3
};

const categoryBadges = {
  frontend: { label: "Frontend", color: "text-sky-400 bg-sky-500/10 border-sky-500/30" },
  backend: { label: "Backend", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
  database: { label: "Database", color: "text-amber-400 bg-amber-500/10 border-amber-500/30" },
  languages: { label: "Language", color: "text-purple-400 bg-purple-500/10 border-purple-500/30" },
  tools: { label: "Tool", color: "text-pink-400 bg-pink-500/10 border-pink-500/30" }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? skillsData.items
    : skillsData.items.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02. TECHNICAL_STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-emerald">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3">
            Categorized technical competencies across modern web architecture, databases, core languages, and development tools.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-dark-950 font-semibold shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-dark-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {filteredItems.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const badge = categoryBadges[skill.category] || { label: skill.category, color: "text-slate-300 bg-slate-800 border-slate-700" };

            return (
              <div
                key={`${skill.name}-${index}`}
                className="glass-panel glass-panel-hover p-4 rounded-xl border border-slate-800/90 flex flex-col justify-between group transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-dark-950 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:text-white group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${badge.color}`}>
                    {badge.label}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {skill.level}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Breakdown Summary */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-dark-900/60 border border-slate-800/80">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              MERN Stack Architecture
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full cycle JavaScript/TypeScript stack: React for UI, Node.js + Express for REST APIs, and MongoDB/Mongoose for persistence.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-dark-900/60 border border-slate-800/80">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Security & Best Practices
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Experience with JWT authentication, secure CRUD operations, modular architecture, and cross-browser compatibility.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-dark-900/60 border border-slate-800/80">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Core Engineering Languages
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strong grounding in algorithmic problem solving with C, C++, Java, JavaScript (ES6+), and Python.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
