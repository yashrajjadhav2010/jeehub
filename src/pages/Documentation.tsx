import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  ShieldCheck,
  ArrowRight,
  LayoutDashboard,
  BrainCircuit,
  Activity,
  Library,
  FlaskConical,
  Beaker,
  Calculator,
  MessageSquare,
  AlertTriangle,
  Lightbulb,
  PlayCircle,
  Search,
  Keyboard,
  CheckCircle2,
  Flame,
  Zap,
  RotateCcw,
  FileText,
  ExternalLink,
  Target,
  Layers,
  Sparkles,
  Compass,
  Cpu,
  HelpCircle,
  Hash
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface DocSection {
  id: string;
  category: string;
  title: string;
  shortTag: string;
  subtitle: string;
  icon: any;
  accent: string;
  accentBg: string;
  accentBorder: string;
  overview: string;
  actionRoute: string;
  actionLabel: string;
  highlights: Array<{
    title: string;
    description: string;
    tag?: string;
  }>;
  proTips: string[];
  sampleWorkflow?: Array<{
    step: string;
    title: string;
    detail: string;
  }>;
}

const DOCUMENTATION_DATA: DocSection[] = [
  {
    id: 'overview',
    category: 'Architecture',
    title: 'Platform Architecture & Protocol',
    shortTag: 'Architecture',
    subtitle: 'The engineering philosophy behind JEE Tapasya',
    icon: LayoutDashboard,
    accent: 'text-emerald-600',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/20',
    overview:
      'JEE Tapasya is an AI-augmented preparation terminal designed for rigorous JEE Main and JEE Advanced aspirants. Our infrastructure eliminates cognitive friction through distraction-free CBT simulations, real-time telemetry, and smart weakness diagnosis.',
    actionRoute: '/',
    actionLabel: 'Open Dashboard',
    highlights: [
      {
        title: 'Zero Distraction Design',
        description: 'Clean high-contrast typography, strict layout containment, and no ads or social interruptions.',
        tag: 'Design Philosophy'
      },
      {
        title: 'Precision Telemetry',
        description: 'Real-time calculation of solve velocity, subject accuracy curves, and cognitive endurance metrics.',
        tag: 'Telemetry'
      },
      {
        title: 'Active Recall Engine',
        description: 'Questions force deep cognitive retrieval rather than passive reading, leading to higher long-term retention.',
        tag: 'Learning Science'
      },
      {
        title: 'Cloud & Offline Sync',
        description: 'Seamless synchronization between local browser storage and cloud profile across devices.',
        tag: 'Infrastructure'
      }
    ],
    proTips: [
      'Maintain an unbroken daily streak to build compound momentum during your prep months.',
      'Always review your solve velocity in Analytics to spot questions where you spent over 3 minutes.',
      'Bookmark critical formula cards in your Formula Vault for rapid 5-minute pre-test drills.'
    ],
    sampleWorkflow: [
      { step: '01', title: 'Target Selection', detail: 'Pick a high-yield chapter or past-year question paper from Study Sectors.' },
      { step: '02', title: 'Timed Practice', detail: 'Solve hand-picked questions under pressurized CBT conditions with NTA-style controls.' },
      { step: '03', title: 'Weakness Audit', detail: 'Incorrect attempts automatically route to your Error Book for targeted concept repair.' }
    ]
  },
  {
    id: 'cbt-practice',
    category: 'Testing Engine',
    title: 'Computer Based Test (CBT) Engine',
    shortTag: 'Exam Simulator',
    subtitle: 'Exact replica of the NTA JEE Main & Advanced test environment',
    icon: Target,
    accent: 'text-rose-600',
    accentBg: 'bg-rose-500/10',
    accentBorder: 'border-rose-500/20',
    overview:
      'The CBT Practice engine accurately simulates the authentic national testing environment. Features include question status palettes, numerical integer keypads, formula formatting with LaTeX KaTeX, and pressurized timers.',
    actionRoute: '/subjects',
    actionLabel: 'Start Practice Session',
    highlights: [
      {
        title: 'Virtual Numeric Keypad',
        description: 'Section B numerical response questions include an on-screen touch and keyboard keypad matching the actual NTA format.',
        tag: 'Numerical Qs'
      },
      {
        title: 'Question Palette Color States',
        description: 'Green (Answered), Red (Not Answered), Purple (Marked for Review), and White (Not Visited) mirror official guidelines.',
        tag: 'Navigation'
      },
      {
        title: 'Rigorous Scoring Engine',
        description: 'Supports standard +4 / -1 negative marking schemes and Section B integer round-off tolerances.',
        tag: 'Scoring'
      },
      {
        title: 'Complete KaTeX Formula Typography',
        description: 'Equations and mathematical symbols render with zero lag and crisp vector clarity across mobile and desktop.',
        tag: 'Math Rendering'
      }
    ],
    proTips: [
      'Use the on-screen question grid to rapidly jump between sections without serial clicking.',
      'Mark tricky questions for review and solve easy singles first to secure safe qualifying marks.',
      'Double-check decimal places on Section B problems before finalizing test submission.'
    ]
  },
  {
    id: 'ai-doubt-solver',
    category: 'AI Guidance',
    title: 'AI Doubt Solver (Axiom Engine)',
    shortTag: 'Axiom AI',
    subtitle: 'Step-by-step conceptual coaching and trap prevention',
    icon: BrainCircuit,
    accent: 'text-amber-600',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/20',
    overview:
      'The Axiom AI engine does not just output dry solutions—it acts as an expert mentor. It detects typical exam traps, highlights key concept triggers, explains shortcuts, and can generate twin questions to test your newly acquired mastery.',
    actionRoute: '/doubt-solver',
    actionLabel: 'Launch Doubt Solver',
    highlights: [
      {
        title: 'Camera & Diagram Scan',
        description: 'Upload photos of complex circuit diagrams, geometry problems, or organic chemistry mechanisms for instant OCR parsing.',
        tag: 'Multimodal'
      },
      {
        title: 'Trap & Pitfall Detection',
        description: 'Identifies common algebraic missteps, sign convention errors in mechanics, or hidden exceptions in inorganic chemistry.',
        tag: 'Exam Strategy'
      },
      {
        title: 'Socratic Hint Mode',
        description: 'Guides your thinking step-by-step with progressive clues before revealing the complete mathematical resolution.',
        tag: 'Pedagogy'
      },
      {
        title: 'Twin Practice Generation',
        description: 'Creates duplicate difficulty problems with altered numeric values to cement your concept retention.',
        tag: 'Active Drill'
      }
    ],
    proTips: [
      'When stuck, ask Axiom: "What is the key principle or formula I should start with?" to build problem-solving intuition.',
      'Use the 30-Second Elimination mode to learn how rankers disqualify incorrect options before calculating.',
      'Upload high-resolution, well-lit photos for the most accurate diagram transcription.'
    ]
  },
  {
    id: 'error-book',
    category: 'Self-Correction',
    title: 'Error Book & Recovery Protocol',
    shortTag: 'Error Book',
    subtitle: 'Automated mistake registry and mastery tracking',
    icon: AlertTriangle,
    accent: 'text-orange-600',
    accentBg: 'bg-orange-500/10',
    accentBorder: 'border-orange-500/20',
    overview:
      'Every question you answer incorrectly during quizzes or mock tests is automatically logged to your personalized Error Book. This turns every mistake into an opportunity for permanent rank enhancement.',
    actionRoute: '/error-book',
    actionLabel: 'Open Error Book',
    highlights: [
      {
        title: 'Automated Logging',
        description: 'No need for manual notebooks. Wrong attempts and question diagrams are preserved automatically.',
        tag: 'Automated'
      },
      {
        title: 'Subject Filtering',
        description: 'Isolate errors across Physics, Chemistry, and Mathematics to prepare focused weekend revision cycles.',
        tag: 'Organization'
      },
      {
        title: 'Mastery Verification',
        description: 'Re-attempt logged problems in clean revision mode and mark them as mastered once conquered.',
        tag: 'Progress'
      },
      {
        title: 'One-Click Axiom Breakdown',
        description: 'Send any logged error directly to Axiom AI with a pre-filled prompt requesting common trap analysis.',
        tag: 'AI Integration'
      }
    ],
    proTips: [
      'Re-solve your Error Book every Sunday. Eliminating recurring errors is the single fastest way to gain 30+ marks.',
      'Do not mark a problem as mastered until you can solve it cleanly without looking at the step-by-step breakdown.',
      'Filter by subject right before chapter tests to review past traps.'
    ]
  },
  {
    id: 'study-hub',
    category: 'Resources',
    title: 'Digital Bookshelf & Visualizers',
    shortTag: 'Study Archive',
    subtitle: 'Formulas, mind maps, revision notes, and 3D molecular structures',
    icon: Library,
    accent: 'text-indigo-600',
    accentBg: 'bg-indigo-500/10',
    accentBorder: 'border-indigo-500/20',
    overview:
      'The Digital Bookshelf aggregates curated high-yield revision summaries, interactive visual mind maps, flashcards, a dynamic interactive Periodic Table, and a Three.js 3D Molecular Canvas for physical/organic chemistry.',
    actionRoute: '/study',
    actionLabel: 'Explore Study Hub',
    highlights: [
      {
        title: 'Formula Vault',
        description: 'Quick-lookup equation sheets indexed by subject, chapter, and exam frequency weighting.',
        tag: 'Formulas'
      },
      {
        title: 'Interactive Mind Maps',
        description: 'Hierarchical concept networks connecting related theorems, formulas, and edge conditions.',
        tag: 'Visual Learning'
      },
      {
        title: '3D Molecular Visualizer',
        description: 'Rotate and examine VSEPR molecular shapes ($SF_6$, $PCl_5$, $CH_4$) in real-time 3D WebGL.',
        tag: 'Chemistry 3D'
      },
      {
        title: 'Interactive Periodic Table',
        description: 'Filter elements by block, oxidation states, electron configurations, and periodic trends.',
        tag: 'Inorganic'
      }
    ],
    proTips: [
      'Study Mind Maps before diving into intense problem solving to establish the macro architecture of the chapter.',
      'Use the 3D Molecular Canvas to visualize hybridization geometries and lone pair bond angles.'
    ]
  },
  {
    id: 'shortcuts',
    category: 'Productivity',
    title: 'Keyboard Shortcuts & Speed Controls',
    shortTag: 'Hotkeys',
    subtitle: 'Master terminal shortcuts to accelerate your solving flow',
    icon: Keyboard,
    accent: 'text-cyan-600',
    accentBg: 'bg-cyan-500/10',
    accentBorder: 'border-cyan-500/20',
    overview:
      'Desktop keyboard power users can navigate tests, toggle focus mode, and record notes with zero mouse travel. Learn these hotkeys to simulate real speed competition.',
    actionRoute: '/subjects',
    actionLabel: 'Test in Practice Mode',
    highlights: [
      {
        title: 'Option Keys [ 1 - 4 ] / [ A - D ]',
        description: 'Instantly select option A, B, C, or D on multiple-choice questions without dragging the mouse cursor.',
        tag: 'CBT Test'
      },
      {
        title: 'Navigation [ N ] / [ P ]',
        description: 'Quickly advance to the Next question or return to the Previous problem in test mode.',
        tag: 'Navigation'
      },
      {
        title: 'Mark for Review [ M ]',
        description: 'Toggle purple flagged review status on the current question in one keystroke.',
        tag: 'Review'
      },
      {
        title: 'Submit & Clear [ Enter ] / [ Esc ]',
        description: 'Save response or clear selected radio input quickly.',
        tag: 'Controls'
      }
    ],
    proTips: [
      'Combining 1-4 option hotkeys with N (Next) allows you to blow through theoretical chemistry questions in 15 seconds.',
      'Use the on-screen virtual keypad on mobile devices when practicing numerical questions.'
    ]
  }
];

export default function Documentation() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return DOCUMENTATION_DATA;
    const q = searchQuery.toLowerCase();
    return DOCUMENTATION_DATA.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.overview.toLowerCase().includes(q) ||
        item.shortTag.toLowerCase().includes(q) ||
        item.highlights.some(
          (h) =>
            h.title.toLowerCase().includes(q) ||
            h.description.toLowerCase().includes(q) ||
            h.tag?.toLowerCase().includes(q)
        )
      );
    });
  }, [searchQuery]);

  const activeSection = useMemo(() => {
    return (
      filteredSections.find((s) => s.id === activeTab) ||
      filteredSections[0] ||
      DOCUMENTATION_DATA[0]
    );
  }, [activeTab, filteredSections]);

  return (
    <div className="min-h-screen bg-[#fbfdfb] text-slate-900 pb-20">
      {/* Top Header Hero */}
      <header className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          {/* Typographic Kicker */}
          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-emerald-800/70">
            <span>Operational Manual</span>
            <span aria-hidden="true">·</span>
            <span>Release 2026.4</span>
            <span aria-hidden="true">·</span>
            <span className="text-primary font-black">JEE Tapasya Terminal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black heading-display tracking-tight text-emerald-950 uppercase leading-none">
            Platform <span className="text-primary italic not-italic">Manual & Tour</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
            Everything you need to master your CBT practice flow, configure Axiom AI guidance, re-solve mistakes in your Error Book, and dominate JEE Main & Advanced.
          </p>

          {/* Quick Search Bar */}
          <div className="w-full max-w-xl pt-2">
            <div className="relative flex items-center">
              <Search
                size={18}
                className="absolute left-4 text-emerald-800/40 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search manual, shortcuts, CBT features, or Axiom AI..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-emerald-200/80 rounded-2xl shadow-xs text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-xs text-slate-400 hover:text-slate-600 font-bold px-2 py-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Video Walkthrough Theater */}
        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto">
          <div className="bg-slate-950 rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-5 border-2 border-emerald-900/40 shadow-2xl shadow-emerald-950/20 relative overflow-hidden group">
            {/* Top Bar inside Theater */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-white tracking-wider uppercase text-[10px] sm:text-xs">
                  Official Platform Tour & Orientation
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-[11px] font-medium">
                <span className="hidden sm:inline">1080p HD</span>
                <a
                  href="https://www.youtube.com/watch?v=5qOgNH5T9jc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Responsive 16:9 Video Player */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner relative">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/5qOgNH5T9jc?si=Tv3zTTpQ859BjtTy"
                title="JEE Tapasya Platform Walkthrough Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Quick Chapter Highlights below Player */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 text-[11px] font-bold text-slate-300">
              <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-emerald-400 font-mono text-[10px]">PART 01</div>
                <div>CBT Exam Flow</div>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-emerald-400 font-mono text-[10px]">PART 02</div>
                <div>Numeric Keypad</div>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-emerald-400 font-mono text-[10px]">PART 03</div>
                <div>Axiom AI Guidance</div>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-emerald-400 font-mono text-[10px]">PART 04</div>
                <div>Error Book Mastery</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Documentation Interactive Layout */}
      <main className="max-w-6xl mx-auto px-4">
        {/* Navigation Tabs (Filter Segmented Control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 hide-scrollbar border-b border-emerald-100/80 mb-8">
          {filteredSections.map((sec) => {
            const Icon = sec.icon;
            const isSelected = sec.id === activeSection.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 border cursor-pointer',
                  isSelected
                    ? 'bg-emerald-950 text-white border-emerald-950 shadow-md shadow-emerald-950/10'
                    : 'bg-white text-slate-600 border-emerald-100 hover:border-emerald-300 hover:text-slate-900 hover:bg-emerald-50/40'
                )}
              >
                <Icon size={16} className={isSelected ? 'text-primary' : sec.accent} />
                <span>{sec.shortTag}</span>
              </button>
            );
          })}
        </div>

        {/* Section Detailed View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Comprehensive Details */}
          <section className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100/90 shadow-sm relative overflow-hidden">
              {/* Category Kicker */}
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-emerald-800/60 mb-2">
                <span>{activeSection.category}</span>
                <span aria-hidden="true">·</span>
                <span>System Guide</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black heading-display text-emerald-950 uppercase tracking-tight">
                    {activeSection.title}
                  </h2>
                  <p className="text-slate-500 font-medium text-xs sm:text-sm mt-0.5">
                    {activeSection.subtitle}
                  </p>
                </div>

                <Link
                  to={activeSection.actionRoute}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white font-black text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-sm shrink-0 self-start sm:self-auto"
                >
                  <span>{activeSection.actionLabel}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-2 border-t border-slate-100">
                {activeSection.overview}
              </p>

              {/* Core Features / Highlights */}
              <div className="mt-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                  <Sparkles size={14} className="text-primary" /> Key Capabilities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeSection.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100 hover:border-emerald-200 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h4 className="font-bold text-sm text-slate-900">{h.title}</h4>
                        {h.tag && (
                          <span className="text-[9px] font-black uppercase tracking-wider text-emerald-800/60">
                            {h.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {h.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Workflow if available */}
              {activeSection.sampleWorkflow && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <Target size={14} className="text-rose-500" /> Operational Protocol
                  </h3>

                  <div className="space-y-3">
                    {activeSection.sampleWorkflow.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70"
                      >
                        <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md shrink-0">
                          {item.step}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{item.title}</div>
                          <div className="text-xs text-slate-600 mt-0.5 leading-snug">
                            {item.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Right Column: Pro-Tips & Shortcuts Card */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Pro-Tips Card */}
            <div className="bg-white rounded-3xl p-6 border border-emerald-100/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Lightbulb size={18} />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-wide text-slate-900">
                    Ranker Pro-Tips
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    High-efficiency habits
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700 leading-relaxed font-normal">
                {activeSection.proTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Navigator */}
            <div className="bg-emerald-950 text-white rounded-3xl p-6 space-y-4 shadow-xl shadow-emerald-950/10 relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
                  Interactive Modules
                </span>
                <h3 className="text-lg font-black heading-display uppercase tracking-tight">
                  Jump to Section
                </h3>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  <Link
                    to="/subjects"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold text-white border border-white/5"
                  >
                    <span>Practice Subjects & PYQs</span>
                    <ArrowRight size={14} className="text-emerald-400" />
                  </Link>
                  <Link
                    to="/study"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold text-white border border-white/5"
                  >
                    <span>Formula Vault & Mind Maps</span>
                    <ArrowRight size={14} className="text-emerald-400" />
                  </Link>
                  <Link
                    to="/doubt-solver"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold text-white border border-white/5"
                  >
                    <span>Ask Axiom AI Doubt Solver</span>
                    <ArrowRight size={14} className="text-emerald-400" />
                  </Link>
                  <Link
                    to="/error-book"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold text-white border border-white/5"
                  >
                    <span>Review Error Book</span>
                    <ArrowRight size={14} className="text-emerald-400" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Contact & Support */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <div className="text-xs font-bold text-slate-800">Need specific assistance?</div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Questions or feature suggestions? Transmit directly to the core development desk:
              </p>
              <a
                href="mailto:jeetapasya@gmail.com"
                className="inline-block text-xs font-black text-primary hover:underline mt-1"
              >
                jeetapasya@gmail.com
              </a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
