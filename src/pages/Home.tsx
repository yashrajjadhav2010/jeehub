import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Target, TrendingUp, Calendar, ArrowRight, BrainCircuit, Trophy, ChevronRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UserStats, SubjectId } from '../types';
import { cn } from '../lib/utils';

export default function Home() {
  const [stats, setStats] = useState<UserStats>({
    totalSolved: 0,
    correctAnswers: 0,
    totalTime: 0,
    streak: 0,
    lastPracticeDate: new Date().toISOString(),
    subjectProgress: { physics: 0, chemistry: 0, maths: 0 },
    chapterAccuracy: {},
    weakTopics: [],
    strongTopics: []
  });

  useEffect(() => {
    const savedStats = localStorage.getItem('userStats');
    if (savedStats) {
      setStats(prev => ({
        ...prev,
        ...JSON.parse(savedStats)
      }));
    }
  }, []);

  const accuracy = Math.round((stats.correctAnswers / (stats.totalSolved || 1)) * 100);

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
                   <span className="text-[11px] font-black uppercase tracking-[0.5em] text-emerald-800/40">Neural Mission Control</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black heading-display leading-[0.9] text-emerald-950 uppercase tracking-tighter">
                  Tactical <br /> 
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
                Welcome Commander. Your current readiness index is being analyzed. Engage with tactical sectors to populate your data radar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-4 md:pt-6">
                 <Link to="/subjects" className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-primary text-white rounded-xl sm:rounded-2xl md:rounded-3xl font-black text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-primary-dark hover:-translate-y-1 transition-all shadow-[0_20px_50px_rgba(29,77,41,0.3)] flex items-center justify-center gap-4 group">
                    START NEW MISSION <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                 </Link>
                 <Link to="/analytics" className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-white border border-emerald-100 text-emerald-950 rounded-xl sm:rounded-2xl md:rounded-3xl font-black text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-emerald-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 shadow-xl shadow-emerald-950/5">
                    VIEW RADAR DATA <Activity size={20} />
                 </Link>
              </div>
           </div>
           
           <div className="w-full lg:w-[480px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-emerald-950 rounded-[2rem] sm:rounded-[4rem] p-6 sm:p-12 text-white relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-white/5"
              >
                 <div className="relative z-10 space-y-8 sm:space-y-12">
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/30 mb-6 sm:mb-8 border-b border-white/5 pb-4">Mission Status Report</p>
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
                          <p className="text-[10px] font-black uppercase tracking-widest text-white/30">System Operator</p>
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
            value="0.0 Hrs" 
            icon={Calendar} 
            color="text-[#ef5350]" 
            bg="bg-red-50 border-red-100" 
            className="col-span-2 lg:col-span-1"
         />
      </div>

      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-10 px-2 gap-4">
           <div className="space-y-1">
             <h2 className="text-2xl md:text-3xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">Operational <span className="text-primary not-italic">Sectors</span></h2>
             <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-emerald-700/40">Select your field of engagement</p>
           </div>
           <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-100" />
              <div className="w-8 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-emerald-100" />
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {subjects.map((sub, i) => (
            <Link key={sub.id} to={`/subjects/${sub.id}`}>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 whileHover={{ y: -10, scale: 1.02 }}
                 className="bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 border border-emerald-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col h-[350px] md:h-[400px] relative overflow-hidden group"
               >
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform", sub.color.replace('from-', 'bg-').replace('/30', '/10'))}>
                     <div className={sub.accent}>{sub.icon}</div>
                  </div>
                  <h3 className="text-3xl font-black heading-display mb-3 text-emerald-950 uppercase tracking-tight">{sub.title}</h3>
                  <p className="text-emerald-800/60 font-medium text-sm leading-relaxed mb-6">{sub.desc}</p>
                  
                  <div className="mt-auto space-y-4">
                     <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black uppercase text-emerald-700/40 tracking-widest">Mastery Level</span>
                        <span className="text-lg font-black heading-display text-emerald-950">{stats.subjectProgress[sub.id]}%</span>
                     </div>
                     <div className="h-1.5 bg-emerald-50 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${stats.subjectProgress[sub.id]}%` }}
                           className={cn("h-full", sub.accent.replace('text-', 'bg-'))}
                        />
                     </div>
                  </div>

                  <div className="absolute top-6 right-8 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-300 group-hover:bg-primary group-hover:text-white transition-all opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                    <ChevronRight size={20} />
                  </div>
               </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 md:pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-12 bg-white rounded-3xl md:rounded-[4rem] p-8 md:p-12 border border-emerald-100 shadow-sm relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 relative z-10">
             <div className="max-w-2xl text-center md:text-left">
               <h2 className="text-2xl md:text-4xl font-black heading-display mb-4 text-emerald-950 uppercase tracking-tight">System Recommendations</h2>
               <p className="text-emerald-800/70 mb-8 md:mb-10 text-base md:text-lg leading-relaxed font-medium">Complete more assessments to receive AI-driven personalized study recommendations and focused practice targets.</p>
               <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="px-6 md:px-8 py-3 md:py-4 bg-primary/10 border-2 border-primary/20 rounded-2xl md:rounded-[2rem] flex items-center gap-4 opacity-50">
                     <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">?</div>
                     <div className="text-left">
                        <p className="text-[9px] md:text-[10px] font-black uppercase text-primary/60 tracking-[0.1em]">Target Focus</p>
                        <p className="text-xs md:text-sm font-bold text-emerald-950">Awaiting Data</p>
                     </div>
                  </div>
               </div>
             </div>
             <div className="flex justify-center">
               <button className="h-36 w-36 md:h-48 md:w-48 rounded-full bg-emerald-950 text-white flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform shadow-2xl relative group">
                  <div className="absolute inset-0 border-4 border-dashed border-primary animate-[spin_20s_linear_infinite] rounded-full scale-110 opacity-20" />
                  <BrainCircuit size={32} className="text-primary md:size-12 md:size-12" />
                  <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase">Enter Flow</span>
               </button>
             </div>
          </div>
        </motion.div>
      </div>
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

