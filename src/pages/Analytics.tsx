import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, BarChart3, TrendingUp, Target, BrainCircuit, Activity, Clock, Award, CheckCircle2, Swords, Calendar, Loader2, Sparkles, AlertCircle, Info, BookOpen } from 'lucide-react';
import { useMemo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn, calculatePredictedRank, formatRank, getAdmissionBenchmark } from '../lib/utils';
import { UserStats } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface StudyPlanDay {
  day: string;
  focus: string;
  tasks: string[];
  rationale: string;
}

import { generateStudyPlanAI } from '../services/aiService';

export default function Analytics() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [studyPlan, setStudyPlan] = useState<StudyPlanDay[] | null>(null);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [planError, setPlanError] = useState('');
  const [showRankInfo, setShowRankInfo] = useState(false);

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

  const accuracy = stats && stats.totalSolved > 0 ? Math.round((stats.correctAnswers / Math.max(stats.totalSolved, 1)) * 100) : 0;
  const physicsProgress = stats?.subjectProgress?.physics || 0;
  const chemistryProgress = stats?.subjectProgress?.chemistry || 0;
  const mathsProgress = stats?.subjectProgress?.maths || 0;

  const calculateRank = () => {
    return calculatePredictedRank(stats);
  };

  const radarData = [
    { subject: 'Physics', value: physicsProgress, fullMark: 100 },
    { subject: 'Chemistry', value: chemistryProgress, fullMark: 100 },
    { subject: 'Math', value: mathsProgress, fullMark: 100 },
    { subject: 'Accuracy', value: accuracy, fullMark: 100 },
    { subject: 'Consistency', value: Math.min((stats?.streak || 0) * 10, 100), fullMark: 100 },
  ];

  const achievement1Progress = accuracy > 0 ? Math.min((accuracy / 90) * 100, 100) : 0;
  const achievement2Progress = Math.min(((stats?.totalSolved || 0) / 100) * 100, 100);
  const avgSpeed = (stats?.totalTime || 0) / Math.max(stats?.totalSolved || 1, 1);
  const achievement3Progress = stats?.totalSolved ? (avgSpeed <= 60 ? 100 : Math.max(0, 100 - (avgSpeed - 60))) : 0;

  // Real heatmap data generator based on days active
  const heatmapData = useMemo(() => {
    const arr = [];
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const solved = stats?.dailyActivity?.[dateStr] || 0;
      let intensity = 0;
      if (solved > 20) intensity = 4;
      else if (solved > 10) intensity = 3;
      else if (solved > 5) intensity = 2;
      else if (solved > 0) intensity = 1;

      arr.push({ date: dateStr, intensity, solved });
    }
    return arr;
  }, [stats]);

  const generateStudyPlan = async () => {
    setIsGeneratingPlan(true);
    setPlanError('');
    try {
      const now = new Date().getTime();
      
      const errorBookRaw = localStorage.getItem('errorBook');
      const errorBookItems = errorBookRaw ? JSON.parse(errorBookRaw) : [];
      // Pass chapter IDs (which represent topics conceptually like 'kinematics', 'thermodynamics' etc)
      // or question topics. 'chapterId' is typically a string topic name in our data structure.
      const errorTopics = [...new Set(errorBookItems.map((q: any) => q.chapterId))].filter(Boolean) as string[];

      const data = await generateStudyPlanAI(stats, radarData, errorTopics);
      
      if (data && data.weekPlan && Array.isArray(data.weekPlan)) {
        setStudyPlan(data.weekPlan);
        localStorage.setItem('lastStudyPlan', JSON.stringify(data.weekPlan));
        localStorage.setItem('studyPlanExpiry', (now + 7 * 24 * 60 * 60 * 1000).toString()); // 1 week
      } else {
         throw new Error('Invalid plan format received');
      }
    } catch (e: any) {
      setPlanError(e.message || 'An error occurred while generating the plan.');
    } finally {
      setIsGeneratingPlan(false);
    }
  };

  useEffect(() => {
    const savedPlan = localStorage.getItem('lastStudyPlan');
    const expiry = localStorage.getItem('studyPlanExpiry');
    if (savedPlan && expiry && new Date().getTime() < parseInt(expiry)) {
      setStudyPlan(JSON.parse(savedPlan));
    }
  }, []);

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
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 uppercase text-emerald-950">Personal <span className="text-primary italic">Insights</span></h1>
        <p className="text-emerald-700/50 font-medium text-sm sm:text-base">Deep dive into your performance and learning patterns.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-2 bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 border border-emerald-100 shadow-sm relative overflow-hidden flex flex-col gap-16">
           <div className="flex-1 space-y-6 w-full">
               <div className="space-y-1 text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-black heading-display text-emerald-950 uppercase italic">Skill <span className="text-primary not-italic">Radar</span></h2>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-emerald-700/40">Multi-axis proficiency mapping</p>
               </div>
               
               <div className="h-[300px] w-full min-w-[280px]">
                 <ResponsiveContainer width="100%" height="100%">
                   <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                     <PolarGrid stroke="#064e3b" strokeOpacity={0.1} />
                     <PolarAngleAxis dataKey="subject" tick={{ fill: '#064e3b', fontSize: 10, fontWeight: 'bold' }} />
                     <Radar name="Proficiency" dataKey="value" stroke="#3b82f6" strokeWidth={2} fill="#3b82f6" fillOpacity={0.2} />
                   </RadarChart>
                 </ResponsiveContainer>
               </div>

               <div className="mt-8 bg-[#fff3f0] border border-[#ffccbc] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col gap-2">
                     <h3 className="text-lg font-bold text-[#bf360c] flex items-center justify-center sm:justify-start gap-2">
                        <BookOpen size={18} className="text-[#e64a19]" /> Error Book
                     </h3>
                     <p className="text-xs text-[#d84315]/70 max-w-sm text-center sm:text-left">
                        Re-solve incorrect questions to bridge your conceptual gaps directly from radar telemetry.
                     </p>
                  </div>
                  <Link 
                     to="/error-book"
                     className="shrink-0 w-full sm:w-auto text-center px-6 py-3 bg-[#ff5722] text-white hover:bg-[#e64a19] transition-colors rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-[#ff5722]/20"
                  >
                     Open Error Book
                  </Link>
               </div>
           </div>

           <div className="flex-1 w-full space-y-6">
               <div className="space-y-1 text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-black heading-display text-emerald-950 uppercase italic">Velocity <span className="text-[#e64a19] not-italic">Trend</span></h2>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-emerald-700/40">Questions Solved: Last 7 Days</p>
               </div>
               
               <div className="h-[250px] sm:h-[300px] flex items-end justify-between gap-2 sm:gap-4 px-0 sm:px-4 relative">
                  {chartData.map((val, i) => (
                     <div key={i} className="flex-1 flex flex-col items-center gap-2 sm:gap-4 group">
                        <div className="w-full relative flex items-end justify-center h-[200px] sm:h-[240px]">
                           <motion.div 
                             initial={{ height: 0 }}
                             animate={{ height: `${val}%` }}
                             transition={{ delay: i * 0.1, type: 'spring', stiffness: 50 }}
                             className={cn(
                               "w-full max-w-[32px] rounded-t-xl relative group-hover:brightness-110 transition-all cursor-help overflow-hidden",
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
                        <span className="text-[9px] font-black uppercase tracking-[0.1em] text-emerald-800/40">{dayLabels[i]}</span>
                     </div>
                  ))}
               </div>
           </div>
        </div>

        {/* Breakdown Stats */}
        <div className="space-y-6">
           <div className="bg-emerald-950 rounded-[2rem] p-8 border border-emerald-100 shadow-2xl relative group">
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                   <Swords size={60} className="text-white" />
                </div>
              </div>
               <div className="relative z-10 space-y-4">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">Predicted Rank</p>
                 <div>
                   <p className="text-4xl font-black text-white heading-display italic tracking-tighter">{formatRank(calculateRank())}</p>
                   <div 
                     className="group relative inline-flex items-center gap-1.5 mt-2 cursor-pointer focus:outline-none"
                     onClick={() => setShowRankInfo(!showRankInfo)}
                     onBlur={() => setShowRankInfo(false)}
                     tabIndex={0}
                   >
                     <Info size={12} className={cn("transition-colors", showRankInfo ? "text-emerald-400" : "text-emerald-400/50 group-hover:text-emerald-400")} />
                     <p className={cn("text-[9px] font-black uppercase tracking-widest transition-colors", showRankInfo ? "text-emerald-100" : "text-emerald-100/30 group-hover:text-emerald-100")}>Based on performance history</p>
                     <div className={cn("absolute left-0 top-full mt-2 w-48 bg-emerald-900 border border-emerald-700/50 p-2 rounded-lg text-[10px] font-medium text-emerald-50 tracking-normal normal-case transition-all z-20 shadow-xl leading-relaxed", showRankInfo ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible")}>
                       Rank is calculated on the basis of correct question solved and it can vary.
                     </div>
                   </div>
                 </div>
                 <div className="pt-4 mt-4 border-t border-emerald-800/50">
                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Admission Benchmark</p>
                    <p className="text-sm font-medium text-emerald-50 leading-tight">{getAdmissionBenchmark(calculateRank())}</p>
                 </div>
              </div>
           </div>

           <div className="bg-white rounded-[2rem] p-8 border border-emerald-100 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-emerald-900">
                 <Award className="text-[#e64a19]" size={20} /> Accomplishments
              </h3>
              <div className="space-y-4">
                <AchievementItem icon={Target} title="Accuracy Pro" desc="Maintain >90% accuracy" progress={achievement1Progress} completed={achievement1Progress === 100} />
                <AchievementItem icon={Activity} title="Century Club" desc="Solve 100 questions" progress={achievement2Progress} completed={achievement2Progress === 100} />
                <AchievementItem icon={Clock} title="Speed Demon" desc="Avg time < 60s per Q" progress={achievement3Progress} completed={achievement3Progress >= 100} />
              </div>
           </div>

           <div className="bg-emerald-950 rounded-[2.5rem] p-8 md:p-10 border border-emerald-800 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-grid-emerald-500/[0.03] bg-[size:20px_20px] pointer-events-none" />
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                 <BrainCircuit size={160} className="text-emerald-500" />
              </div>
              
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full text-white">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 rounded-full text-emerald-300 text-[10px] font-black uppercase tracking-widest mb-6 self-start backdrop-blur-sm">
                   <Sparkles size={12} className="animate-pulse" /> AI Strategic Planner
                 </div>
                 
                 <h3 className="text-3xl md:text-4xl font-black heading-display uppercase tracking-tight text-white mb-4">
                    Weekly <span className="text-emerald-400">Blueprint</span>
                 </h3>
                 {!studyPlan ? (
                    <div className="flex-1 flex flex-col justify-center items-start mt-2">
                       <p className="text-sm text-gray-400 mb-8 font-medium leading-relaxed max-w-sm">
                         Generate a personalized 7-day study plan based on your recent skill radar performance and Error Book conceptual gaps. Aggressively target weak areas and fortify your strengths.
                       </p>
                       <button 
                         onClick={generateStudyPlan}
                         disabled={isGeneratingPlan}
                         className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-emerald-950 font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-emerald-400 transition-all disabled:opacity-50 shadow-[0_8px_30px_rgb(16,185,129,0.3)] active:scale-95 border-2 border-emerald-400"
                       >
                         {isGeneratingPlan ? (
                           <><Loader2 size={16} className="animate-spin" /> Compiling Intel...</>
                         ) : (
                           <><BrainCircuit size={16} /> Generate Protocol</>
                         )}
                       </button>
                       {planError && (
                         <div className="mt-6 flex items-center gap-2 text-rose-400 text-xs font-bold bg-rose-500/10 px-4 py-3 rounded-xl border border-rose-500/20 backdrop-blur-sm">
                           <AlertCircle size={14} /> {planError}
                         </div>
                       )}
                    </div>
                 ) : (
                    <div className="flex-1 flex flex-col mt-4 h-full">
                       <div className="flex items-center justify-between mb-4">
                         <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Your Week Setup</span>
                         <button onClick={generateStudyPlan} className="text-[10px] uppercase font-black text-white/50 hover:text-white transition-colors flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                           <Loader2 size={12} className={isGeneratingPlan ? "animate-spin" : ""} /> Regenerate Plan
                         </button>
                       </div>
                       <div className="h-[280px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                         {studyPlan.map((day, idx) => (
                           <div key={idx} className="bg-black/20 p-5 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-emerald-500/30 transition-colors">
                             <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                               <h4 className="font-black text-emerald-400 text-sm uppercase tracking-wider">{day.day}</h4>
                               <span className="text-white/50 text-xs font-medium px-2 py-1 bg-white/5 rounded-md inline-block">{day.focus}</span>
                             </div>
                             <ul className="space-y-2 mb-4 mt-2">
                               {day.tasks.map((task, i) => (
                                 <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                   <span className="leading-relaxed whitespace-pre-wrap">{task}</span>
                                 </li>
                               ))}
                             </ul>
                             <div className="bg-emerald-900/30 p-3 rounded-xl border border-emerald-500/20 mt-4">
                               <p className="text-[11px] text-emerald-200/70 italic leading-relaxed">{day.rationale}</p>
                             </div>
                           </div>
                         ))}
                       </div>
                    </div>
                 )}
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
         <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-emerald-100 shadow-sm">
           <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-emerald-950 uppercase tracking-tight">Subject Mastery</h2>
           <div className="space-y-6 sm:space-y-8">
             <MasteryBar label="Physics" value={physicsProgress} color="bg-primary" />
             <MasteryBar label="Chemistry" value={chemistryProgress} color="bg-[#e64a19]" />
             <MasteryBar label="Mathematics" value={mathsProgress} color="bg-[#ef5350]" />
           </div>
         </div>

         <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-emerald-100 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-emerald-950 uppercase tracking-tight">Concept Heatmap</h2>
            <div className="grid grid-cols-6 sm:grid-cols-10 gap-2 sm:gap-3">
               {heatmapData.map((day, i) => {
                 let bgColor = "bg-emerald-50/10 border-emerald-50";
                 if (day.intensity === 1) bgColor = "bg-primary/20 border-primary/20";
                 if (day.intensity === 2) bgColor = "bg-primary/60 border-primary/60";
                 if (day.intensity === 3) bgColor = "bg-primary border-primary";
                 if (day.intensity === 4) bgColor = "bg-emerald-950 border-emerald-950";

                 return (
                   <motion.div 
                     key={i}
                     whileHover={{ scale: 1.1, zIndex: 10 }}
                     title={`${day.solved} questions solved on ${day.date}`}
                     className={cn(
                       "aspect-square rounded-lg border",
                       bgColor
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

