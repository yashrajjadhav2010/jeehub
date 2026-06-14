import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Target, TrendingUp, Calendar, ArrowRight, BrainCircuit, Trophy, ChevronRight, Activity, ShieldCheck, BarChart3, Rocket, Layers, Ghost, Crosshair, Cpu, Sparkles, MessageSquare, HelpCircle, CheckCircle, Star, Library, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UserStats, SubjectId } from '../types';
import { cn, formatTime } from '../lib/utils';
import LibraryDashboard from '../components/LibraryDashboard';

export default function Home() {
  const [stats, setStats] = useState<UserStats>({
    totalSolved: 0,
    correctAnswers: 0,
    totalTime: 0,
    streak: 0,
    lastPracticeDate: new Date().toISOString(),
    subjectProgress: { physics: 0, chemistry: 0, maths: 0, 'mock-tests': 0, 'pyq': 0 },
    chapterAccuracy: {},
    weakTopics: [],
    strongTopics: []
  });

  useEffect(() => {
    try {
      const savedStats = localStorage.getItem('userStats');
      if (savedStats) {
        const parsedStats = JSON.parse(savedStats);
        setStats(prev => ({
          ...prev,
          ...parsedStats
        }));
      }
    } catch (e) {
      console.error('Stats recovery failed:', e);
    }
  }, []);

  const accuracy = Math.round((stats.correctAnswers / (stats.totalSolved || 1)) * 100);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (capabilitiesRef.current && window.innerWidth < 768) {
        const container = capabilitiesRef.current;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current && window.innerWidth < 768) {
        const container = scrollContainerRef.current;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const operatorName = localStorage.getItem('operatorName') || 'Candidate';
  const initial = operatorName.substring(0, 2).toUpperCase();

  const subjects = [
    { 
      id: 'physics' as SubjectId, 
      title: 'Physics', 
      desc: 'Master the laws of nature from Mechanics to Modern Physics.',
      color: 'from-emerald-600/30 to-emerald-900/10', 
      img: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=600',
      icon: <Activity size={32} />,
      accent: 'text-emerald-400',
      topics: ['Mechanics', 'Waves', 'Thermodynamics'],
      stats: '42 Modules'
    },
    { 
      id: 'chemistry' as SubjectId, 
      title: 'Chemistry', 
      desc: 'Understand atoms, molecules and complex reactions.',
      color: 'from-[#e64a19]/30 to-[#e64a19]/10', 
      img: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=600',
      icon: <Zap size={32} />,
      accent: 'text-orange-400',
      topics: ['Organic', 'Inorganic', 'Physical'],
      stats: '38 Modules'
    },
    { 
      id: 'maths' as SubjectId, 
      title: 'Mathematics', 
      desc: 'Build logical reasoning and problem-solving speed.',
      color: 'from-[#ef5350]/30 to-[#ef5350]/10', 
      img: 'https://images.unsplash.com/photo-1509228468518-180dd482195e?auto=format&fit=crop&q=80&w=600',
      icon: <Target size={32} />,
      accent: 'text-red-400',
      topics: ['Calculus', 'Algebra', 'Geometry'],
      stats: '56 Modules'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-12">
      <section className="relative py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center text-center lg:text-left">
           <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-12 h-[2px] bg-primary animate-pulse" />
                   <span className="text-[11px] font-black uppercase tracking-[0.5em] text-emerald-800/40">JEE Preparation Dashboard</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black heading-display leading-[0.9] text-emerald-950 uppercase tracking-tighter">
                  Performance <br /> 
                  <span className="text-primary italic relative">
                    Intelligence
                    <motion.span 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      className="absolute left-0 -bottom-1 md:-bottom-2 h-1 md:h-2 bg-primary/10 rounded-full"
                    />
                  </span>
                </h1>
              </div>
              
              <p className="text-emerald-800/60 max-w-lg text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                Welcome to JEE TAPASYA. Your local JEE prep intelligence is active. Tackle chapters, solve doubts, and build your consistency streak to dominate the competitive arena.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-4 md:pt-6">
                 <Link to="/subjects" className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-primary text-white preserve-dark rounded-xl sm:rounded-2xl md:rounded-3xl font-black text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-primary-dark hover:-translate-y-1 transition-all shadow-[0_20px_50px_rgba(29,77,41,0.3)] flex items-center justify-center gap-4 group">
                    START PRACTICE <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                 </Link>
                 <Link to="/analytics" className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-white border border-emerald-100 text-emerald-950 rounded-xl sm:rounded-2xl md:rounded-3xl font-black text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-emerald-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 shadow-xl shadow-emerald-950/5">
                    VIEW PERFORMANCE <Activity size={20} />
                 </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 pt-6 border-t border-emerald-100/50">
                 <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                       <Star key={star} className={cn("w-4 h-4", star <= 4 ? "fill-amber-400 text-amber-400" : (star === 5 ? "fill-amber-400/80 text-amber-400" : "fill-amber-100 text-amber-200"))} />
                    ))}
                 </div>
                 <div className="text-sm text-emerald-800/80 font-medium">
                    <span className="font-bold text-emerald-950">4.8/5</span> average rating from students
                 </div>
              </div>
           </div>
           
           <div className="w-full lg:w-[480px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-emerald-950 preserve-dark rounded-[2rem] sm:rounded-[4rem] p-6 sm:p-12 text-white relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-white/5"
              >
                 <div className="relative z-10 space-y-8 sm:space-y-12">
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/30 mb-6 sm:mb-8 border-b border-white/5 pb-4">Study Progress Report</p>
                      <div className="space-y-8 sm:space-y-10">
                         <div className="group cursor-help">
                            <div className="flex justify-between items-end mb-3 sm:mb-4">
                               <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors">Mastery Index</span>
                               <span className="text-3xl sm:text-4xl font-black heading-display">{accuracy}%</span>
                            </div>
                            <div className="h-1.5 sm:h-2 bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${accuracy}%` }}
                                  className="h-full bg-primary shadow-[0_0_20px_rgba(29,77,41,0.8)]"
                               />
                            </div>
                         </div>
                         <div className="group cursor-help">
                            <div className="flex justify-between items-end mb-3 sm:mb-4">
                               <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white/50 group-hover:text-emerald-400 transition-colors">Solve Velocity</span>
                               <span className="text-3xl sm:text-4xl font-black heading-display">{stats.totalSolved} <span className="text-xs sm:text-sm font-bold text-white/20">Total</span></span>
                            </div>
                            <div className="h-1.5 sm:h-2 bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${Math.min(100, (stats.totalSolved / 500) * 100)}%` }}
                                  className="h-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                               />
                            </div>
                         </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center font-bold text-emerald-400 border border-white/10">{initial}</div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Candidate</p>
                          <p className="text-sm font-black uppercase tracking-tight">{operatorName}</p>
                        </div>
                    </div>
                 </div>
                 
                 <div className="absolute -right-20 -bottom-20 opacity-[0.03] scale-150 pointer-events-none text-white">
                    <TrendingUp size={400} />
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Quick Access Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
         <StatsCard 
            label="Current Streak" 
            value={`${stats.streak} Days`} 
            icon={Zap} 
            color="text-[#c2410c]" 
            bg="bg-[#fff5f2] border-[#c2410c]/10" 
         />
         <StatsCard 
            label="Correct Ops" 
            value={stats.correctAnswers} 
            icon={Trophy} 
            color="text-primary" 
            bg="bg-emerald-50 border-primary/10" 
         />
         <StatsCard 
            label="Engaged" 
            value={formatTime(stats.totalTime)} 
            icon={Calendar} 
            color="text-[#ef5350]" 
            bg="bg-red-50 border-red-100" 
            className="col-span-2 lg:col-span-1"
         />
      </div>
      
      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-10 px-2 gap-4">
           <div className="space-y-1">
             <h2 className="text-2xl md:text-3xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">Study <span className="text-primary not-italic">Sectors</span></h2>
             <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-emerald-700/40">Select your subject and begin practice</p>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-100" />
                 <div className="w-8 h-2 rounded-full bg-primary" />
                 <div className="w-2 h-2 rounded-full bg-emerald-100" />
              </div>
              
              <div className="flex gap-2">
                 <button 
                  onClick={() => scroll('left')}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-emerald-100 bg-white text-emerald-950 flex items-center justify-center hover:bg-emerald-50 transition-colors shadow-sm"
                 >
                    <ChevronRight size={20} className="rotate-180" />
                 </button>
                 <button 
                  onClick={() => scroll('right')}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-emerald-100 bg-white text-emerald-950 flex items-center justify-center hover:bg-emerald-50 transition-colors shadow-sm"
                 >
                    <ChevronRight size={20} />
                 </button>
              </div>
           </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-10 hide-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {subjects.map((sub, i) => (
            <Link 
              key={sub.id} 
              to={`/subjects/${sub.id}`}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] snap-center first:ml-2 last:mr-2"
            >
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 whileHover={{ y: -10, scale: 1.02 }}
                 className="bg-white rounded-[2.5rem] p-8 border border-emerald-900/5 shadow-sm hover:shadow-2xl hover:border-emerald-500/20 transition-all flex flex-col h-[380px] md:h-[450px] relative overflow-hidden group w-full"
               >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                     <Layers size={140} />
                  </div>

                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-emerald-900/5", sub.color.replace('from-', 'bg-').replace('/30', '/10'))}>
                     <div className={sub.accent}>{sub.icon}</div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="font-mono text-[9px] font-bold text-emerald-800/40 uppercase tracking-widest block mb-2">Subject Sector</span>
                    <h3 className="text-3xl font-black heading-display text-emerald-950 uppercase tracking-tight">{sub.title}</h3>
                  </div>

                  <p className="text-emerald-800/60 font-medium text-sm leading-relaxed mb-8">{sub.desc}</p>
                  
                  <div className="mt-auto pt-6 border-t border-emerald-900/5 space-y-4">
                     <div className="flex justify-between items-end">
                        <span className="font-mono text-[9px] font-black uppercase text-emerald-700/40 tracking-widest">Mastery Level</span>
                        <span className="text-xl font-black heading-display text-emerald-950">{stats.subjectProgress[sub.id]}%</span>
                     </div>
                     <div className="h-1.5 bg-emerald-900/5 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${stats.subjectProgress[sub.id]}%` }}
                           className={cn("h-full", sub.accent.replace('text-', 'bg-'))}
                        />
                     </div>
                  </div>

                  <div className="absolute top-6 right-8 w-10 h-10 rounded-full bg-emerald-950 preserve-dark text-white flex items-center justify-center translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                    <ChevronRight size={20} />
                  </div>
               </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Study Library Section */}
      <LibraryDashboard />

      {/* Feature Introduction: Core Capabilities */}
      <section className="py-10 md:py-20 relative">
        <div className="absolute inset-0 bg-emerald-50/30 rounded-[3rem] md:rounded-[5rem] -z-10" />
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-3xl md:text-5xl font-black heading-display text-emerald-950 uppercase italic tracking-tighter">
             Core <span className="text-primary not-italic">Capabilities</span>
           </h2>
           <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-emerald-800/40">The Tapasya intelligence Engine</p>
        </div>

        <div ref={capabilitiesRef} className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 hide-scrollbar snap-x snap-mandatory scroll-smooth w-full">
           <FeatureCard 
              icon={BrainCircuit}
              title="Adaptive AI"
              desc="Our preparation engine tracks your weak sectors and surfaces high-priority questions to bridge your performance gaps."
              accent="text-emerald-500"
              bg="bg-white shadow-sm"
              className="min-w-[280px] w-[85vw] md:w-auto snap-center shrink-0 md:shrink"
           />
           <FeatureCard 
              icon={BarChart3}
              title="Radar Telemetry"
              desc="Real-time visualizations of your accuracy, time-spent, and mastery across all JEE subjects and chapters."
              accent="text-primary"
              bg="bg-white shadow-xl shadow-emerald-950/5"
              className="min-w-[280px] w-[85vw] md:w-auto snap-center shrink-0 md:shrink"
           />
           <FeatureCard 
              icon={ShieldCheck}
              title="Mission Ready"
              desc="Simulate the actual JEE environment with pressurized timers, standard markings, and performance dashboards."
              accent="text-orange-500"
              bg="bg-white shadow-sm"
              className="min-w-[280px] w-[85vw] md:w-auto snap-center shrink-0 md:shrink"
           />
           <FeatureCard 
              icon={Trophy}
              title="Global Rank"
              desc="Compare your telemetry with simulated candidate peers to identify where you stand in the competitive arena."
              accent="text-red-500"
              bg="bg-white shadow-sm"
              className="min-w-[280px] w-[85vw] md:w-auto snap-center shrink-0 md:shrink"
           />
        </div>
      </section>

      {/* Strategic Support Section removed */}


      {/* Numerical Roadmap / Workflow */}
      <section className="py-10 md:py-20">
         <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
            <div className="flex-1 space-y-10">
               <div className="space-y-4">
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-primary">Learning Pipeline</span>
                  <h2 className="text-4xl md:text-6xl font-black heading-display text-emerald-950 leading-tight uppercase italic">
                    Path to <br />
                    <span className="text-primary not-italic">JEE Success.</span>
                  </h2>
               </div>
               <p className="text-emerald-800/60 text-lg md:text-xl font-medium leading-relaxed max-w-xl italic">
                 "Practice is the tapasya that transforms a candidate into a top-ranker. Our workflow is designed for maximum mission-critical retention."
               </p>
               <div className="flex gap-4">
                  <div className="w-12 h-[2px] bg-emerald-100" />
                  <div className="w-12 h-[2px] bg-primary/20" />
                  <div className="w-12 h-[2px] bg-emerald-100" />
               </div>
            </div>

            <div className="flex-1 grid grid-cols-1 gap-6">
               <WorkflowStep 
                  number="01" 
                  title="Topic Selection" 
                  desc="Select your subject and chapter to begin a focused practice session." 
                  icon={Target} 
               />
               <WorkflowStep 
                  number="02" 
                  title="Active Practice" 
                  desc="Solve hand-picked questions with active timers and detailed telemetry." 
                  icon={Zap} 
               />
               <WorkflowStep 
                  number="03" 
                  title="Performance Review" 
                  desc="Analyze your solution paths with AI-powered insights and visual data." 
                  icon={Activity} 
               />
            </div>
         </div>
      </section>

      {/* Feedback Section */}
      <section className="py-12 md:py-20">
         <div className="bg-emerald-950 preserve-dark rounded-[3rem] md:rounded-[5rem] p-8 md:p-12 lg:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:opacity-10 transition-opacity pointer-events-none">
               <BrainCircuit size={200} />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-6 text-center lg:text-left">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                     <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Activity size={20} />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Transmission: Feedback Request</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black heading-display text-white leading-tight uppercase tracking-tighter">
                     Help Us Refine the <br />
                     <span className="text-primary italic">Intelligence Engine</span>
                  </h2>
                  <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                     Your field intelligence is vital. Help us optimize the Tapasya curriculum for 2026 success. Submit your report directly using the terminal.
                  </p>
                  
                  <div className="pt-8 block lg:hidden">
                    <a 
                       href="https://docs.google.com/forms/d/e/1FAIpQLSeIWgZU25Yl_PcW-BkmR1I0NnzUNzjfNRa8ZImM48Z_bPiWmw/viewform?usp=sf_link" 
                       target="_blank" 
                       rel="noreferrer"
                       className="inline-flex items-center gap-4 px-8 py-4 bg-white text-emerald-950 rounded-full font-black text-xs tracking-widest hover:bg-emerald-50 transition-all"
                    >
                       OPEN FEEDBACK FORM <ArrowRight size={18} />
                    </a>
                  </div>
               </div>
               
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden hidden lg:block shadow-2xl h-[600px]">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeIWgZU25Yl_PcW-BkmR1I0NnzUNzjfNRa8ZImM48Z_bPiWmw/viewform?embedded=true" 
                    width="100%" 
                    height="100%" 
                    className="border-none"
                  >
                    Loading…
                  </iframe>
               </div>
            </div>
         </div>
      </section>


    </div>
  );
}

function StatsCard({ icon: Icon, label, value, color, bg, className }: any) {
  return (
    <div className={cn("rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border transition-all flex flex-col justify-between h-40 sm:h-48 md:h-56 bg-white shadow-sm", bg, className)}>
       <div className={cn("w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center", bg)}>
          <Icon size={20} className={cn("sm:size-[24px]", color)} />
       </div>
       <div>
          <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] text-emerald-700/50 mb-1 md:mb-2">{label}</p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-black heading-display text-emerald-950">{value}</p>
       </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, accent, bg, className }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn("p-8 rounded-[2.5rem] border border-emerald-100 flex flex-col gap-6 transition-all", bg, className)}
    >
       <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-emerald-50 shadow-inner", accent)}>
          <Icon size={28} />
       </div>
       <div className="space-y-3">
          <h3 className="text-xl font-black heading-display text-emerald-950 uppercase italic tracking-tight">{title}</h3>
          <p className="text-sm font-medium text-emerald-800/60 leading-relaxed">{desc}</p>
       </div>
    </motion.div>
  );
}

function WorkflowStep({ number, title, desc, icon: Icon }: any) {
  return (
    <div className="flex gap-6 group">
       <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-950 preserve-dark text-primary flex items-center justify-center font-black text-xs heading-display shadow-xl shadow-emerald-950/20 group-hover:scale-110 transition-transform">
             {number}
          </div>
          <div className="flex-1 w-px bg-emerald-100 my-2" />
       </div>
       <div className="pb-8 flex-1">
          <div className="flex items-center gap-3 mb-2">
             <Icon size={16} className="text-primary" />
             <h3 className="text-lg font-black heading-display text-emerald-950 uppercase italic">{title}</h3>
          </div>
          <p className="text-sm font-medium text-emerald-800/60 leading-relaxed max-w-md">{desc}</p>
       </div>
    </div>
  );
}

