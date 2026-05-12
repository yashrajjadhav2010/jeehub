import { motion } from 'motion/react';
import { ArrowLeft, BarChart3, TrendingUp, Target, BrainCircuit, Activity, Clock, Award, CheckCircle2, Swords } from 'lucide-react';
import { useMemo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { UserStats } from '../types';

export default function Analytics() {
  const [stats, setStats] = useState<UserStats | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('userStats');
    if (saved) setStats(JSON.parse(saved));
  }, []);

  const { chartData, rawData, dayLabels } = useMemo(() => {
    const labels = [];
    const data = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      
      labels.push(dayName);
      data.push(stats?.dailyActivity?.[dateStr] || 0);
    }
    
    // Normalize data for height % (max questions solve in day or 50 as min ceiling)
    const maxVal = Math.max(...data, 20);
    const normalizedData = data.map(v => (v / maxVal) * 100);
    
    return { chartData: normalizedData, rawData: data, dayLabels: labels };
  }, [stats]);

  const accuracy = stats ? Math.round((stats.correctAnswers / (stats.totalSolved || 1)) * 100) : 0;
  const physicsProgress = stats?.subjectProgress.physics || 0;
  const chemistryProgress = stats?.subjectProgress.chemistry || 0;
  const mathsProgress = stats?.subjectProgress.maths || 0;

  const calculateRank = () => {
    const missions = stats?.missionsCompleted || 0;
    if (missions === 0) return 'UNRANKED';
    const acc = stats?.totalSolved > 0 ? (stats.correctAnswers / stats.totalSolved) : 0;
    const baseRank = 1402345;
    const predictedRank = Math.max(1, baseRank - (missions * 25000) - Math.floor(acc * 500000));
    return `#${predictedRank.toLocaleString()}`;
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-start">
        <Link 
          to="/" 
          className="group flex items-center gap-3 px-6 py-3 bg-white text-emerald-950 font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl hover:bg-emerald-50 transition-all border-2 border-emerald-50"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
      </div>

      <section>
        <h1 className="text-4xl font-bold mb-2 uppercase text-emerald-950">Personal <span className="text-primary italic">Insights</span></h1>
        <p className="text-emerald-700/50 font-medium">Deep dive into your performance and learning patterns.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Performance Chart */}
        <div className="lg:col-span-2 bg-white rounded-[3rem] p-12 border border-emerald-100 shadow-sm relative overflow-hidden group/chart">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-1">
              <h2 className="text-2xl font-black heading-display text-emerald-950 uppercase italic">Activity <span className="text-primary not-italic">Radar</span></h2>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-700/40">Questions Solved: Last 7 Days</p>
            </div>
            <div className="flex gap-6">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-primary" />
                 <span className="text-[10px] text-emerald-700/60 font-black uppercase tracking-widest">Physics</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#e64a19]" />
                 <span className="text-[10px] text-emerald-700/60 font-black uppercase tracking-widest">Chemistry</span>
               </div>
            </div>
          </div>

          <div className="h-[350px] flex items-end justify-between gap-4 px-4 relative">
             {chartData.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-6 group">
                   <div className="w-full relative flex items-end justify-center h-[280px]">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${val}%` }}
                        transition={{ delay: i * 0.1, type: 'spring', stiffness: 50 }}
                        className={cn(
                          "w-full max-w-[44px] rounded-t-2xl relative group-hover:brightness-110 transition-all cursor-help overflow-hidden",
                          i % 2 === 0 
                            ? "bg-primary shadow-[0_0_30px_rgba(29,77,41,0.2)]" 
                            : "bg-[#e64a19] shadow-[0_0_30px_rgba(230,74,25,0.2)]"
                        )}
                      >
                         <div className="absolute inset-0 bg-white/5" />
                         <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-950 text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {rawData[i]} SOLVED
                         </div>
                      </motion.div>
                   </div>
                   <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-800/40">{dayLabels[i]}</span>
                </div>
             ))}

             {!stats && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-[2px] z-10 rounded-[3rem]">
                   <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center border-2 border-emerald-100 border-dashed animate-spin-slow mb-6">
                      <Activity size={32} className="text-emerald-200" />
                   </div>
                   <p className="text-sm font-black uppercase tracking-[0.4em] text-emerald-900/40 italic">Awaiting Mission Data...</p>
                   <p className="text-[10px] font-bold text-emerald-700/30 uppercase mt-2">Complete subject modules to populate radar</p>
                </div>
             )}
          </div>
        </div>

        {/* Breakdown Stats */}
        <div className="space-y-6">
           <div className="bg-emerald-950 rounded-[2rem] p-8 border border-emerald-100 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                 <Swords size={60} className="text-white" />
              </div>
              <div className="relative z-10 space-y-4">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">Predicted Rank</p>
                 <div>
                   <p className="text-4xl font-black text-white heading-display italic tracking-tighter">{calculateRank()}</p>
                   <p className="text-[9px] font-black uppercase tracking-widest text-emerald-100/30 mt-1">Based on tactical performance</p>
                 </div>
              </div>
           </div>

           <div className="bg-white rounded-[2rem] p-8 border border-emerald-100 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-emerald-900">
                 <Award className="text-[#e64a19]" size={20} /> Accomplishments
              </h3>
              <div className="space-y-4">
                <AchievementItem icon={Target} title="Accuracy Pro" desc="Maintain >90% for 3 days" progress={0} />
                <AchievementItem icon={Activity} title="Early Bird" desc="Solved 50 Qs before 8 AM" progress={0} />
                <AchievementItem icon={Clock} title="Speed Demon" desc="Avg time < 45s per Q" progress={100} completed />
              </div>
           </div>

           <div className="bg-emerald-50 rounded-[1.5rem] p-8 border border-emerald-100">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-emerald-900">
                 <BrainCircuit className="text-primary" size={20} /> Smart Suggestion
              </h3>
              <p className="text-sm text-emerald-800/70 leading-relaxed font-medium">
                Complete assessments to generate smart study suggestions based on your performance patterns.
              </p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white rounded-[2.5rem] p-10 border border-emerald-100 shadow-sm">
           <h2 className="text-xl font-bold mb-8 text-emerald-950 uppercase tracking-tight">Subject Mastery</h2>
           <div className="space-y-8">
             <MasteryBar label="Physics" value={physicsProgress} color="bg-primary" />
             <MasteryBar label="Chemistry" value={chemistryProgress} color="bg-[#e64a19]" />
             <MasteryBar label="Mathematics" value={mathsProgress} color="bg-[#ef5350]" />
           </div>
         </div>

         <div className="bg-white rounded-[2.5rem] p-10 border border-emerald-100 shadow-sm">
            <h2 className="text-xl font-bold mb-8 text-emerald-950 uppercase tracking-tight">Concept Heatmap</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
               {Array.from({ length: 24 }).map((_, i) => {
                 return (
                   <motion.div 
                     key={i}
                     whileHover={{ scale: 1.1, zIndex: 10 }}
                     className={cn(
                       "aspect-square rounded-lg border border-emerald-50 bg-emerald-50/10"
                     )}
                   />
                 )
               })}
            </div>
            <div className="flex items-center gap-4 mt-6">
               <span className="text-[10px] text-emerald-700/60 font-bold uppercase">Beginner</span>
               <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-sm bg-emerald-50" />
                  <div className="w-2 h-2 rounded-sm bg-primary/20" />
                  <div className="w-2 h-2 rounded-sm bg-primary/60" />
                  <div className="w-2 h-2 rounded-sm bg-primary" />
               </div>
               <span className="text-[10px] text-emerald-700/60 font-bold uppercase">Master</span>
            </div>
         </div>
      </div>
    </div>
  );
}

function AchievementItem({ icon: Icon, title, desc, progress, completed }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", completed ? "bg-primary/10 text-primary border border-primary/20" : "bg-emerald-50 text-emerald-400")}>
        <Icon size={16} />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className={cn("text-xs font-bold", completed ? "text-emerald-900" : "text-emerald-700/50")}>{title}</h4>
          {completed && <CheckCircle2 className="text-primary" size={12} />}
        </div>
        <p className="text-[10px] text-emerald-700/60 mb-2 font-medium">{desc}</p>
        <div className="h-1 bg-emerald-50 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className={cn("h-full", completed ? "bg-primary" : "bg-[#e64a19]")}
          />
        </div>
      </div>
    </div>
  )
}

function MasteryBar({ label, value, color }: any) {
  return (
    <div>
       <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-700/50">{label}</span>
          <span className="text-sm font-bold text-emerald-950">{value}%</span>
       </div>
       <div className="h-2.5 bg-emerald-50 rounded-full overflow-hidden p-0.5 border border-emerald-100">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            className={cn("h-full rounded-full", color)}
          />
       </div>
    </div>
  )
}

