import { motion } from 'motion/react';
import { Trophy, Clock, Zap, Target, ArrowRight, Shield, Flame, Swords, Info, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cn, calculatePredictedRank } from '../lib/utils';

export default function Challenges() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('userStats');
    if (saved) setStats(JSON.parse(saved));
  }, []);

  const missionsCompleted = stats?.missionsCompleted || 0;
  const correctAnswers = stats?.correctAnswers || 0;
  const totalSolved = stats?.totalSolved || 0;
  const accuracy = totalSolved > 0 ? (correctAnswers / totalSolved) : 0;
  
  const calculateRank = () => {
    return calculatePredictedRank(stats);
  };

  const totalPoints = (correctAnswers * 10) + (missionsCompleted * 100);
  const currentQuestions = stats?.totalSolved || 0;
  const currentStreak = stats?.streak || 0;

  const activeChallenges = [
    {
      id: 'blitz-organic',
      title: 'Blitz: IUPAC Sniper',
      description: 'Complete 30 nomenclature questions in under 15 minutes with 95% accuracy.',
      points: 450,
      timeLimit: '15m',
      intensity: 'High',
      type: 'Time Trial',
      icon: Zap,
      color: 'bg-orange-500',
      path: '/quiz/chemistry/iupac-nomenclature/set1'
    },
    {
      id: 'deep-physics',
      title: 'Electrostatic Lockdown',
      description: 'Master advanced Kinematics problems. No hints allowed.',
      points: 600,
      timeLimit: '45m',
      intensity: 'Critical',
      type: 'Expert Mode',
      icon: Shield,
      color: 'bg-blue-600',
      path: '/quiz/physics/kinematics/set-01'
    },
    {
      id: 'math-marathon',
      title: 'Integration Marathon',
      description: 'Solve indefinite integrals. Accuracy bonus active.',
      points: 1200,
      timeLimit: '90m',
      intensity: 'Medium',
      type: 'Endurance',
      icon: Target,
      color: 'bg-emerald-500',
      path: '/quiz/maths/integration/set1'
    }
  ];

  const handleInitiate = (path: string) => {
    localStorage.setItem('activeChallenge', 'true');
    navigate(path);
  };

  return (
    <div className="space-y-12 pb-20 w-full min-w-0">
      <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <Trophy size={14} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live Events</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">
            Mission <span className="text-primary not-italic">Challenges</span>
          </h1>
          <p className="text-emerald-900/40 font-medium max-w-xl text-sm sm:text-base">
            High-intensity mission objectives designed to refine your operational speed and conceptual precision.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
          <div className="flex-1 min-w-[140px] p-4 bg-white rounded-2xl border-2 border-emerald-50 flex items-center gap-4 shadow-xl shadow-emerald-900/5">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
               <Flame size={20} />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-black text-emerald-900/40 uppercase tracking-widest">Active Streak</p>
              <p className="text-lg sm:text-xl font-black text-emerald-950">{stats?.streak || 0} DAYS</p>
            </div>
          </div>
          <div className="flex-1 min-w-[140px] p-4 bg-emerald-950 rounded-2xl flex items-center gap-4 shadow-2xl">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
               <Swords size={20} />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-black text-emerald-400 uppercase tracking-widest">Global Rank</p>
              <div className="flex flex-col items-start">
                 <p className="text-lg sm:text-xl font-black text-white leading-none">{calculateRank()}</p>
                 <div className="group relative inline-flex items-center gap-1 mt-1 cursor-pointer">
                   <Info size={10} className="text-emerald-400/50 group-hover:text-emerald-400 transition-colors" />
                   <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-100/30 group-hover:text-emerald-100 transition-colors">Info</span>
                   <div className="absolute top-full left-0 mt-2 w-48 bg-emerald-900 text-emerald-50 text-[10px] leading-relaxed p-2 rounded-lg border border-emerald-700/50 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 tracking-normal normal-case">
                     Rank is calculated on the basis of correct question solved and it can vary.
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8 w-full">
        <div className="lg:col-span-2 space-y-6 min-w-0 w-full">
           <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900/30 px-2">Active Objectives</h3>
           <div className="space-y-6">
             {activeChallenges.map((challenge, idx) => (
               <motion.div
                 key={challenge.id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 className="group relative"
               >
                  <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-[3rem]", challenge.color)} />
                  <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-emerald-50 hover:border-emerald-200 shadow-xl shadow-emerald-900/5 hover:shadow-emerald-900/10 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 transition-all relative z-10 overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none scale-150 -translate-y-4">
                        <challenge.icon size={160} />
                     </div>
                     
                     <div className={cn("w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500", challenge.color)}>
                       <challenge.icon className="size-[24px] sm:size-[32px]" />
                     </div>
                     
                     <div className="flex-1 space-y-3 text-left w-full min-w-0">
                        <div className="flex flex-wrap justify-start gap-2 sm:gap-3 mb-1">
                          <span className={cn("text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border", 
                            challenge.intensity === 'Critical' ? "text-red-600 bg-red-50 border-red-100" :
                            challenge.intensity === 'High' ? "text-orange-600 bg-orange-50 border-orange-100" :
                            "text-emerald-600 bg-emerald-50 border-emerald-100"
                          )}>
                            {challenge.intensity} Intensity
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-emerald-900/40 bg-emerald-50/50 px-3 py-1 rounded-lg border border-emerald-100/50">
                            {challenge.type}
                          </span>
                        </div>
                        <div>
                           <h4 className="text-xl sm:text-2xl font-black text-emerald-950 uppercase tracking-tight">{challenge.title}</h4>
                           <p className="text-xs sm:text-sm font-medium text-emerald-800/60 leading-relaxed max-w-md mt-1 break-words">{challenge.description}</p>
                        </div>
                     </div>
                     
                     <div className="flex flex-col items-start md:items-center gap-4 w-full md:w-auto mt-2 md:mt-0 shrink-0">
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50/50 rounded-xl border border-emerald-50 w-full md:w-auto justify-center">
                           <Clock size={14} className="text-emerald-900/40" />
                           <span className="text-[10px] sm:text-xs font-black text-emerald-900/60 uppercase tracking-widest">{challenge.timeLimit}</span>
                        </div>
                        <button 
                         onClick={() => handleInitiate(challenge.path)}
                         className={cn("w-full px-8 py-3.5 text-white rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-xl md:group-hover:px-10 whitespace-nowrap", challenge.color)}
                        >
                          Initiate
                        </button>
                     </div>
                  </div>
               </motion.div>
             ))}
           </div>
        </div>

         <div className="space-y-6 min-w-0 w-full">
           <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900/30 px-2">Operator Badges</h3>
           <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 space-y-6">
             <div className="space-y-6">
               {/* Day Streak Badges */}
               <div>
                 <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">Consistency (Day Streak)</h4>
                 <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x custom-scrollbar">
                   <div className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0", currentStreak >= 5 ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                     <img src="https://i.ibb.co/rf2bDs03/day5.png" alt="5 Day Streak" className="w-16 h-16 object-contain drop-shadow-xl" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">5 Day<br/>Streak</span>
                   </div>
                   <div className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0", currentStreak >= 10 ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                     <img src="https://i.ibb.co/KjNrCF0Q/day10.png" alt="10 Day Streak" className="w-16 h-16 object-contain drop-shadow-xl" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">10 Day<br/>Streak</span>
                   </div>
                   <div className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0", currentStreak >= 20 ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                     <img src="https://i.ibb.co/d0pwjqRw/day25.png" alt="20 Day Streak" className="w-16 h-16 object-contain drop-shadow-xl" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">20 Day<br/>Streak</span>
                   </div>
                   <div className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0", currentStreak >= 25 ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                     <img src="https://i.ibb.co/d0pwjqRw/day25.png" alt="25 Day Streak" className="w-16 h-16 object-contain drop-shadow-xl" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">25 Day<br/>Streak</span>
                   </div>
                 </div>
               </div>

               {/* Questions Solved Badges */}
               <div>
                 <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">Endurance (Missions Cleared)</h4>
                 <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x custom-scrollbar">
                   {[50, 100, 300, 500, 1000].map(req => {
                     const achieved = currentQuestions >= req;
                     const getBadgeInfo = (req: number) => {
                        switch(req) {
                           case 50: return { img: 'https://i.ibb.co/7d9yGDc8/50.png', name: 'Tapasya Starter' };
                           case 100: return { img: 'https://i.ibb.co/My6jJ607/100.png', name: 'Tapasya Warrior' };
                           case 300: return { img: 'https://i.ibb.co/vvK33M3Q/300.png', name: 'Problem Crusher' };
                           case 500: return { img: 'https://i.ibb.co/m5VHGh7J/Chat-GPT-Image-Jun-6-2026-01-37-44-PM.png', name: 'Tapasya Master' };
                           case 1000: return { img: 'https://i.ibb.co/qLSYXW1t/file-00000000c88472078520c8a8552cfb9f.png', name: 'Tapasya Grandmaster' };
                           default: return { img: '', name: '' };
                        }
                     };
                     const badge = getBadgeInfo(req);
                     return (
                       <div key={req} className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0 relative overflow-hidden", achieved ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                         {achieved && <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rotate-45 -translate-x-full animate-[shimmer_2s_infinite]" />}
                         <img src={badge.img} alt={badge.name} className="w-16 h-16 object-contain drop-shadow-xl" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">{badge.name}</span>
                       </div>
                     );
                   })}
                 </div>
               </div>

               {/* Accuracy Badges */}
               <div>
                 <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">Precision (Accuracy)</h4>
                 <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x custom-scrollbar">
                   {[80, 90, 95].map(req => {
                     const acc = currentQuestions > 0 ? ((stats?.correctAnswers || 0) / currentQuestions) * 100 : 0;
                     const achieved = acc >= req && currentQuestions >= 10; // Need at least 10 solved to get accuracy badges
                     return (
                       <div key={req} className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-5 rounded-3xl border-2 transition-all shrink-0 relative overflow-hidden", achieved ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                         {achieved && <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rotate-45 -translate-x-full animate-[shimmer_2s_infinite]" />}
                         <div className={cn("w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2", achieved ? "bg-emerald-500 text-white border-white" : "bg-emerald-100 text-emerald-300 border-transparent")}>
                            <CheckCircle2 size={24} />
                         </div>
                         <span className="text-[9px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">&ge;{req}%<br/>Accuracy</span>
                       </div>
                     );
                   })}
                 </div>
               </div>
             </div>
             
             <div className="pt-6 border-t border-emerald-50">
               <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 text-center space-y-4">
                 <p className="text-[10px] font-black text-primary uppercase tracking-widest">Total Intel Earned</p>
                 <p className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tighter">{totalPoints.toLocaleString()} <span className="text-[10px] sm:text-sm uppercase tracking-widest text-emerald-900/30">PTS</span></p>
                 <button className="flex items-center gap-2 mx-auto text-[9px] font-black text-primary uppercase tracking-widest hover:gap-4 transition-all">
                    View Leaderboard <ArrowRight size={12} />
                 </button>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
