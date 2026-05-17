import { motion } from 'motion/react';
import { Trophy, Clock, Zap, Target, ArrowRight, Shield, Flame, Swords } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

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
    if (missionsCompleted === 0) return 'UNRANKED';
    const baseRank = 1402345;
    const missionBonus = missionsCompleted * 25000;
    const accuracyBonus = Math.floor(accuracy * 500000);
    const predictedRank = Math.max(1, baseRank - missionBonus - accuracyBonus);
    return `#${predictedRank.toLocaleString()}`;
  };

  const totalPoints = (correctAnswers * 10) + (missionsCompleted * 100);

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
      path: '/quiz/chemistry/organic-chemistry/set-1'
    },
    {
      id: 'deep-physics',
      title: 'Electrostatic Lockdown',
      description: 'Master advanced Gauss Law problems. No hints allowed.',
      points: 600,
      timeLimit: '45m',
      intensity: 'Critical',
      type: 'Expert Mode',
      icon: Shield,
      color: 'bg-blue-600',
      path: '/quiz/physics/electrostatics/set-1'
    },
    {
      id: 'math-marathon',
      title: 'Integration Marathon',
      description: 'Solve 50 indefinite integrals. Accuracy bonus active.',
      points: 1200,
      timeLimit: '90m',
      intensity: 'Medium',
      type: 'Endurance',
      icon: Target,
      color: 'bg-emerald-500',
      path: '/quiz/maths/calculus/set-1'
    }
  ];

  const handleInitiate = (path: string) => {
    localStorage.setItem('activeChallenge', 'true');
    navigate(path);
  };

  const milestones = [
    { label: 'Rookie Aspirant', status: 'Completed', req: '5 Missions' },
    { label: 'Mission Analyst', status: 'In Progress', req: '25 Missions' },
    { label: 'Grandmaster Operator', status: 'Locked', req: '100 Missions' }
  ];

  return (
    <div className="space-y-12 pb-20 px-4 md:px-0">
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
              <p className="text-lg sm:text-xl font-black text-emerald-950">5 DAYS</p>
            </div>
          </div>
          <div className="flex-1 min-w-[140px] p-4 bg-emerald-950 rounded-2xl flex items-center gap-4 shadow-2xl">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
               <Swords size={20} />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-black text-emerald-400 uppercase tracking-widest">Global Rank</p>
              <p className="text-lg sm:text-xl font-black text-white">{calculateRank()}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900/30 px-2">Active Objectives</h3>
           <div className="space-y-4">
             {activeChallenges.map((challenge, idx) => (
               <motion.div
                 key={challenge.id}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 className="group p-1 bg-emerald-50 hover:bg-primary/5 rounded-[2.5rem] transition-all cursor-pointer"
               >
                  <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.3rem] border border-emerald-100 group-hover:border-primary/20 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                     <div className={cn("w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex items-center justify-center text-white shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform", challenge.color)}>
                       <challenge.icon className="size-[24px] sm:size-[32px]" />
                     </div>
                     <div className="flex-1 space-y-2 text-center md:text-left min-w-0">
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-2">
                          <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">{challenge.type}</span>
                          <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-orange-500 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">{challenge.intensity} Intensity</span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-black text-emerald-950 uppercase italic tracking-tighter">{challenge.title}</h4>
                        <p className="text-xs sm:text-sm font-medium text-emerald-900/40 leading-relaxed max-w-md">{challenge.description}</p>
                     </div>
                     <div className="flex flex-col items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2">
                           <Clock size={14} className="text-emerald-900/30" />
                           <span className="text-[10px] sm:text-xs font-black text-emerald-900/60 uppercase tracking-widest">{challenge.timeLimit}</span>
                        </div>
                        <button 
                         onClick={() => handleInitiate(challenge.path)}
                         className="w-full md:w-auto px-8 py-3 bg-emerald-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all md:group-hover:px-10"
                        >
                          Initiate
                        </button>
                     </div>
                  </div>
               </motion.div>
             ))}
           </div>
        </div>

        <div className="space-y-6">
           <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900/30 px-2">Operator Milestones</h3>
           <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 space-y-8">
             {milestones.map((m, i) => (
               <div key={i} className="space-y-3">
                 <div className="flex justify-between items-center">
                   <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950">{m.label}</span>
                   <span className={cn(
                     "text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded",
                     m.status === 'Completed' ? "bg-emerald-100 text-emerald-600" : "bg-emerald-50 text-emerald-400"
                   )}>{m.status}</span>
                 </div>
                 <div className="h-2 bg-emerald-50 rounded-full overflow-hidden">
                    <div className={cn(
                      "h-full transition-all duration-1000",
                      m.status === 'Completed' ? "w-full bg-emerald-500" : "w-1/3 bg-primary"
                    )} />
                 </div>
                 <p className="text-[9px] font-black text-emerald-900/20 uppercase tracking-widest">Requirement: {m.req}</p>
               </div>
             ))}
             
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
