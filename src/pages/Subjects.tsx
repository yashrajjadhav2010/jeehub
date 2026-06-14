import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Zap, FlaskConical, Binary, Atom, Search, Target, Clock, Play, ChevronRight, Layers, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SubjectId, UserStats } from '../types';
import { cn, formatTime } from '../lib/utils';
import { getAllData } from '../lib/dataService';

interface SearchResult {
  type: 'subject' | 'chapter' | 'set';
  id: string;
  title: string;
  subjectId: SubjectId;
  chapterId?: string;
  setId?: string;
  desc?: string;
}

export default function Subjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allChapters, setAllChapters] = useState<Record<SubjectId, any[]>>({
    physics: [],
    chemistry: [],
    maths: [],
    'mock-tests': [],
    'pyq': []
  });
  const [userStats, setUserStats] = useState<UserStats>({
    totalSolved: 0,
    correctAnswers: 0,
    totalTime: 0,
    streak: 0,
    lastPracticeDate: null,
    subjectProgress: { physics: 0, chemistry: 0, maths: 0, 'mock-tests': 0, 'pyq': 0 },
    chapterAccuracy: {},
    weakTopics: [],
    strongTopics: []
  });

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllData();
        setAllChapters(data);
      } catch (e) {
        console.error('Data load failed:', e);
      }
    }
    load();

    try {
      const saved = localStorage.getItem('userStats');
      if (saved) {
        const parsed = JSON.parse(saved);
        setUserStats(prev => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.error('Stats recovery failed:', e);
    }
  }, []);

  const totalUnits = useMemo(() => {
    return Object.values(allChapters).reduce((acc, chapters) => {
      return acc + chapters.reduce((cAcc, c) => cAcc + c.sets.length, 0);
    }, 0);
  }, [allChapters]);

  const aggregateProgress = useMemo(() => {
    const vals = Object.values(userStats.subjectProgress);
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }, [userStats]);

  const unifiedCards = [
    {
      id: 'physics' as SubjectId,
      link: `/subjects/physics`,
      title: 'Physics',
      shortTitle: 'PHY-01',
      desc: 'Master the laws of nature from Mechanics to Modern Physics. Detailed simulations and conceptual deep-dives.',
      img: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      icon: Atom,
      color: 'bg-emerald-950',
      accentColor: 'text-emerald-400',
      btnColor: 'bg-emerald-500',
      stats: `${allChapters.physics.reduce((acc, c) => acc + c.sets.length, 0)} Units`,
      score: `${userStats.subjectProgress.physics}%`,
      status: userStats.subjectProgress.physics > 0 ? 'In Progress' : 'Initiate',
      span: 'md:col-span-12 lg:col-span-8',
      height: 'h-[380px] lg:h-[460px]',
      titleClass: 'text-5xl lg:text-7xl',
      delay: 0.1
    },
    {
      id: 'chemistry' as SubjectId,
      link: `/subjects/chemistry`,
      title: 'Chemistry',
      shortTitle: 'CHM-02',
      desc: 'Understand atoms, molecules and complex reactions. Focus on Organic synthesis and Inorganic trends.',
      img: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=800',
      icon: FlaskConical,
      color: 'bg-orange-950',
      accentColor: 'text-orange-400',
      btnColor: 'bg-orange-500',
      stats: `${allChapters.chemistry.reduce((acc, c) => acc + c.sets.length, 0)} Units`,
      score: `${userStats.subjectProgress.chemistry}%`,
      status: userStats.subjectProgress.chemistry > 0 ? 'Active' : 'Standby',
      span: 'md:col-span-6 lg:col-span-4',
      height: 'h-[350px] lg:h-[460px]',
      titleClass: 'text-4xl sm:text-5xl',
      delay: 0.2
    },
    {
      id: 'maths' as SubjectId,
      link: `/subjects/maths`,
      title: 'Mathematics',
      shortTitle: 'MAT-03',
      desc: 'Build logical reasoning and problem-solving speed. Advanced Calculus and Algebra mastery.',
      img: 'https://images.unsplash.com/photo-1509228468518-180dd482195e?auto=format&fit=crop&q=80&w=800',
      icon: Binary,
      color: 'bg-red-950',
      accentColor: 'text-red-400',
      btnColor: 'bg-red-500',
      stats: `${allChapters.maths.reduce((acc, c) => acc + c.sets.length, 0)} Units`,
      score: `${userStats.subjectProgress.maths}%`,
      status: userStats.subjectProgress.maths > 80 ? 'Advanced' : userStats.subjectProgress.maths > 0 ? 'Active' : 'Baseline',
      span: 'md:col-span-6 lg:col-span-4',
      height: 'h-[320px] lg:h-[380px]',
      titleClass: 'text-4xl',
      delay: 0.3
    },
    {
      id: 'pyq' as any,
      link: `/subjects/pyq`,
      title: 'Previous Year',
      shortTitle: 'PYQ-04',
      desc: 'Master real patterns. Attempt authentic historical questions from past main and advanced papers.',
      img: 'https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=1200',
      icon: Clock,
      color: 'bg-blue-950',
      accentColor: 'text-blue-400',
      btnColor: 'bg-blue-600',
      stats: `${allChapters.pyq.reduce((acc, c) => acc + c.sets.length, 0)} Exams`,
      score: `${userStats.subjectProgress.pyq || 0}%`,
      status: 'Historical',
      span: 'md:col-span-6 lg:col-span-4',
      height: 'h-[320px] lg:h-[380px]',
      titleClass: 'text-4xl',
      delay: 0.4
    },
    {
      id: 'mock-tests' as any,
      link: `/mock-tests`,
      title: 'Mock Tests',
      shortTitle: 'SIM-05',
      desc: 'Test your readiness against complete 3-hour standard rigorous exams out of your comfort zone.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      icon: Target,
      color: 'bg-purple-950',
      accentColor: 'text-purple-400',
      btnColor: 'bg-purple-600',
      stats: `${allChapters['mock-tests'].reduce((acc, c) => acc + c.sets.length, 0)} Tests`,
      score: `${userStats.subjectProgress['mock-tests'] || 0}%`,
      status: 'Simulation',
      span: 'md:col-span-6 lg:col-span-4',
      height: 'h-[320px] lg:h-[380px]',
      titleClass: 'text-4xl',
      delay: 0.5
    }
  ];

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Search Subjects
    unifiedCards.forEach(sub => {
      if (sub.title.toLowerCase().includes(query) || sub.desc.toLowerCase().includes(query)) {
        results.push({
          type: 'subject',
          id: sub.id,
          title: sub.title,
          subjectId: sub.id,
          desc: sub.desc
        });
      }
    });

    // Search Chapters and Sets
    Object.entries(allChapters).forEach(([subId, chapters]) => {
      chapters.forEach(chapter => {
        if (chapter.title.toLowerCase().includes(query)) {
          results.push({
            type: 'chapter',
            id: chapter.id,
            title: chapter.title,
            subjectId: subId as SubjectId,
            desc: `Chapter in ${subId}`
          });
        }

        chapter.sets.forEach((set: any) => {
          if (set.title.toLowerCase().includes(query)) {
            results.push({
              type: 'set',
              id: set.id,
              title: set.title,
              subjectId: subId as SubjectId,
              chapterId: chapter.id,
              setId: set.id,
              desc: `Practice set in ${chapter.title}`
            });
          }
        });
      });
    });

    return results;
  }, [searchQuery, allChapters]);

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section - Editorial Impact */}
      <div className="mb-8 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8">
        <div className="relative flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-[1px] bg-emerald-500/50" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-emerald-600/60">Phase 01 / Operation Subjects</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black heading-display leading-[0.85] text-emerald-950 uppercase tracking-tighter mb-6">
            The <span className="text-emerald-500/10 absolute -top-8 left-0 select-none -z-10 blur-[2px]">THE MISSION</span> <br /> 
            Mission <span className="text-emerald-500 italic lowercase font-serif font-light tracking-normal">subjects</span>
          </h1>
          
          <p className="text-emerald-800/60 max-w-lg text-sm sm:text-base font-medium leading-relaxed">
            Architect your JEE success through specialized training modules. 
            Select a primary discipline to initiate advanced curriculum deployment.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-end">
          <Link 
            to="/" 
            className="group flex items-center gap-4 px-8 py-4 bg-emerald-950 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-emerald-900 transition-all active:scale-95"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Abort to Base
          </Link>
        </div>
      </div>

      {/* Global Search Interface */}
      <div className="mb-12 relative max-w-3xl">
        <div className="relative group">
          <div className="absolute inset-0 bg-emerald-500/5 blur-xl group-focus-within:bg-emerald-500/10 transition-colors rounded-full" />
          <div className="relative flex items-center bg-white border border-emerald-900/10 p-2 pl-6 rounded-full shadow-sm focus-within:shadow-xl focus-within:border-emerald-500/30 transition-all">
            <Search className="text-emerald-800/20 group-focus-within:text-emerald-500 transition-colors mr-4" size={24} />
            <input 
              type="text" 
              placeholder="DIRECTIVE: Search subjects, chapters or specific sets..." 
              className="flex-1 bg-transparent py-4 text-emerald-950 font-medium placeholder:text-emerald-800/30 outline-none uppercase tracking-widest text-xs md:text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-emerald-800/40 hover:text-emerald-600 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Search Results Dropdown/Portal */}
        <AnimatePresence>
          {searchQuery && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="absolute top-full left-0 right-0 mt-4 bg-white border border-emerald-900/10 rounded-[2.5rem] shadow-2xl overflow-hidden z-50 p-4"
            >
              <div className="max-h-[60vh] overflow-y-auto px-2 space-y-2 custom-scrollbar">
                <div className="p-4 border-b border-emerald-900/5 mb-4">
                  <span className="font-mono text-[9px] font-bold text-emerald-800/40 uppercase tracking-[0.3em]">
                    Intel Recovery: Found {searchResults.length} relevant sectors
                  </span>
                </div>
                
                {searchResults.map((result, idx) => (
                  <Link 
                    key={`${result.type}-${result.id}-${idx}`}
                    to={
                      result.type === 'subject' ? `/subjects/${result.id}` :
                      result.type === 'chapter' ? `/subjects/${result.subjectId}` :
                      `/quiz/${result.subjectId}/${result.chapterId}/${result.setId}`
                    }
                    className="flex items-center justify-between p-4 bg-emerald-50/20 hover:bg-emerald-50 border border-transparent hover:border-emerald-500/20 rounded-2xl transition-all group/res"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm",
                        result.type === 'subject' ? "bg-emerald-500" :
                        result.type === 'chapter' ? "bg-orange-500" : "bg-red-500"
                      )}>
                        {result.type === 'subject' ? <Atom size={18} /> : 
                         result.type === 'chapter' ? <Layers size={18} /> : <Play size={18} />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[8px] font-black text-emerald-800/40 uppercase tracking-widest">{result.type}</span>
                          <span className="w-1 h-1 rounded-full bg-emerald-300" />
                          <span className="font-mono text-[8px] font-black text-emerald-800/40 uppercase tracking-widest">{result.subjectId}</span>
                        </div>
                        <h4 className="text-sm font-black text-emerald-950 uppercase tracking-tight">{result.title}</h4>
                        <p className="text-[10px] text-emerald-800/60 font-medium">{result.desc}</p>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-emerald-800/20 group-hover/res:text-emerald-500 group-hover/res:translate-x-1 transition-all" />
                  </Link>
                ))}

                {searchResults.length === 0 && (
                  <div className="py-20 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search size={32} className="text-emerald-300" />
                    </div>
                    <h3 className="text-lg font-black text-emerald-950 uppercase tracking-tight">Zero Intel Found</h3>
                    <p className="text-xs text-emerald-800/60 font-medium">No chapters or modules match this directive.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {!searchQuery && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Main Grid - Mosaic Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mt-6 md:mt-8">
        {unifiedCards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: card.delay }}
            className={cn(card.span)}
          >
            <Link to={card.link} className="block w-full h-full">
              <div className={cn(
                "group relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1",
                card.height,
                card.color
              )}>
                <img 
                  src={card.img} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 mix-blend-overlay" 
                  alt={card.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-500" />
                
                <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-10">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-colors duration-500",
                    card.accentColor,
                    `group-hover:${card.btnColor} group-hover:text-white`
                  )}>
                    <card.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className={cn(
                    "px-4 py-2 rounded-full backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-widest shadow-lg",
                    card.status === 'Initiate' || card.status === 'Standby' || card.status === 'Baseline' 
                      ? 'bg-white/10 text-white' 
                      : `${card.btnColor} text-white`
                  )}>
                    {card.status}
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6 z-10">
                  <div className="flex-1">
                    <span className="font-mono text-[10px] font-bold text-white/50 tracking-widest uppercase mb-3 block">
                      ID: {card.shortTitle}
                    </span>
                    <h2 className={cn("heading-display text-white uppercase tracking-tighter mb-3 leading-none", card.titleClass)}>
                      {card.title}
                    </h2>
                    <p className="text-white/60 font-medium text-xs sm:text-sm leading-relaxed max-w-lg line-clamp-2">
                      {card.desc}
                    </p>
                  </div>

                  <div className="flex items-end gap-5 shrink-0">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-white/40 font-black mb-1">Modules</span>
                      <span className="text-xl sm:text-2xl font-black text-white">{card.stats.split(' ')[0]}</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 mb-1" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-white/40 font-black mb-1">Accuracy</span>
                      <span className={cn("text-xl sm:text-2xl font-black", card.accentColor)}>{card.score}</span>
                    </div>
                    <div className={cn(
                      "w-12 h-12 rounded-full text-white flex items-center justify-center group-hover:rotate-45 transition-transform shadow-2xl ml-2",
                      card.btnColor
                    )}>
                      <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Stats / Progress Rail - JetBrains Mono inspired */}
      <div className="mt-12 p-8 bg-white border border-emerald-900/10 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
           <Zap className="size-40" />
        </div>
        <div className="flex items-center gap-8">
           <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase text-emerald-800/40 font-bold mb-2 tracking-[0.2em]">Total Units</span>
              <span className="text-3xl font-black text-emerald-950 heading-display">{totalUnits}</span>
           </div>
           <div className="w-[1px] h-10 bg-emerald-900/10 hidden md:block" />
           <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase text-emerald-800/40 font-bold mb-2 tracking-[0.2em]">Practice Time</span>
              <span className="text-3xl font-black text-emerald-950 heading-display">{formatTime(userStats.totalTime)}</span>
           </div>
        </div>

        <div className="flex-1 w-full md:max-w-md">
           <div className="flex justify-between items-end mb-2">
              <span className="font-mono text-[10px] uppercase text-emerald-800/60 font-bold tracking-[0.2em]">Curriculum Sync</span>
              <span className="font-mono text-sm font-bold text-emerald-600">{aggregateProgress.toFixed(1)}%</span>
           </div>
           <div className="w-full h-2 bg-emerald-900/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${aggregateProgress}%` }}
                className="h-full bg-emerald-500" 
              />
           </div>
        </div>

        <Link to="/doubt-solver" className="px-8 py-4 bg-emerald-950 text-white font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-emerald-900 transition-all flex items-center gap-3 group">
          <BrainCircuit size={16} className="text-primary group-hover:scale-110 transition-transform" />
          AI Doubt Solver
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}

