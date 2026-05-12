import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trophy, ArrowRight, Home, RefreshCw, CheckCircle2, XCircle, Info, Timer, Target, BrainCircuit, TrendingUp, RefreshCcw } from 'lucide-react';
import { QuizResult, QuizSet } from '../types';
import { cn } from '../lib/utils';

export default function Result() {
  const navigate = useNavigate();
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem('lastQuizResult');
    if (data) {
      const parsed = JSON.parse(data);
      const { answers, quizSet } = parsed;
      
      let correct = 0;
      let wrong = 0;
      let skipped = 0;

      quizSet.questions.forEach((q: any) => {
        const selected = answers[q.id];
        if (selected === null) skipped++;
        else if (selected === q.answer) correct++;
        else wrong++;
      });

      const totalScore = correct * 4 - wrong * 1; // standard JEE +4, -1
      const totalPossible = quizSet.questions.length * 4;
      const accuracy = Math.round((correct / (correct + wrong || 1)) * 100);

      setResult({
        ...parsed,
        correct,
        wrong,
        skipped,
        totalScore,
        totalPossible,
        accuracy
      });

      // Update cumulative stats
      const existingStats = localStorage.getItem('userStats');
      const stats = existingStats ? JSON.parse(existingStats) : {
        totalSolved: 0,
        correctAnswers: 0,
        streak: 1,
        subjectProgress: { physics: 0, chemistry: 0, maths: 0 }
      };

      stats.totalSolved += quizSet.questions.length;
      stats.correctAnswers += correct;
      
      // Update subject specific progress (increment by 5% per set for demo purposes)
      const subId = parsed.subjectId as keyof typeof stats.subjectProgress;
      if (stats.subjectProgress[subId] < 100) {
        stats.subjectProgress[subId] = Math.min(100, (stats.subjectProgress[subId] || 0) + 5);
      }

      localStorage.setItem('userStats', JSON.stringify(stats));
    }
  }, []);

  if (!result) return <div className="flex items-center justify-center h-64"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  const { quizSet } = result;

  return (
    <div className="max-w-6xl mx-auto pb-32 px-4 pt-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2rem] p-12 md:p-20 border border-emerald-100 shadow-sm relative overflow-hidden mb-12"
      >
        <div className="relative z-10 flex flex-col items-center text-center">
           <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center text-[#e64a19] mb-10">
              <Trophy size={40} />
           </div>
           
           <h1 className="text-sm font-bold tracking-[0.2em] text-emerald-700/50 uppercase mb-4">Post-Exam Analysis</h1>
           <h2 className="text-5xl font-bold heading-display mb-8 text-emerald-950">Mission <span className="text-primary italic">{result.accuracy > 70 ? 'Accomplished' : 'Debriefed'}</span></h2>
           
           <div className="flex flex-wrap justify-center gap-12 mt-8">
              <div className="text-center">
                 <p className="text-[10px] font-bold tracking-widest text-emerald-700/50 uppercase mb-2">Total Score</p>
                 <p className="text-5xl font-bold heading-display text-emerald-900">{result.totalScore}</p>
                 <p className="text-xs font-medium text-emerald-700/50 mt-1">/{result.totalPossible}</p>
              </div>
              <div className="w-px h-16 bg-emerald-100 hidden md:block" />
              <div className="text-center">
                 <p className="text-[10px] font-bold tracking-widest text-emerald-700/50 uppercase mb-2">Accuracy</p>
                 <p className="text-5xl font-bold heading-display text-emerald-600">{result.accuracy}%</p>
              </div>
              <div className="w-px h-16 bg-emerald-100 hidden md:block" />
              <div className="text-center">
                 <p className="text-[10px] font-bold tracking-widest text-emerald-700/50 uppercase mb-2">Time spent</p>
                 <p className="text-5xl font-bold heading-display text-emerald-900">{Math.floor(result.timeTaken / 60)}:{(result.timeTaken % 60).toString().padStart(2, '0')}</p>
              </div>
           </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 underline-cols px-4">
         <StatsCard label="Correct" value={result.correct} color="text-emerald-600" icon={CheckCircle2} />
         <StatsCard label="Incorrect" value={result.wrong} color="text-[#dc2626]" icon={XCircle} />
         <StatsCard label="Skipped" value={result.skipped} color="text-emerald-700/40" icon={ArrowRight} />
         <StatsCard label="Performance" value={`${Math.round(result.accuracy)}%`} color="text-[#c2410c]" icon={Target} />
      </div>

      <div className="space-y-12">
        <h3 className="text-2xl font-bold heading-display tracking-tight ml-4 flex items-center gap-4 text-emerald-950 underline decoration-primary/30 decoration-4 underline-offset-8 uppercase">
           Detailed Review
        </h3>
        
        <div className="grid grid-cols-1 gap-6">
           {quizSet.questions.map((q: any, idx: number) => {
             const selected = result.answers[q.id];
             const isCorrect = selected === q.answer;
             const isSkipped = selected === null;

             return (
               <motion.div 
                 key={q.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className={cn(
                   "bg-white rounded-[2rem] p-8 md:p-12 border transition-all",
                   isSkipped ? "border-emerald-50 opacity-80" : 
                   isCorrect ? "border-emerald-100 bg-emerald-50/20" : "border-red-100 bg-[#dc2626]/5"
                 )}
               >
                 <div className="flex flex-col md:flex-row gap-8">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0",
                      isSkipped ? "bg-emerald-50 text-emerald-400" :
                      isCorrect ? "bg-emerald-500 text-white" : "bg-[#dc2626] text-white"
                    )}>
                      {idx + 1}
                    </div>
                    
                    <div className="flex-1">
                       <h4 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed text-emerald-900">{q.question}</h4>
                       
                       <div className="grid grid-cols-1 gap-3 mb-8">
                          {q.options.map((option: string, oIdx: number) => {
                            const isUserSelected = selected === oIdx;
                            const isCorrectOption = q.answer === oIdx;

                            return (
                              <div 
                                key={oIdx}
                                className={cn(
                                  "p-4 rounded-xl border flex items-center gap-4 transition-all text-sm",
                                  isCorrectOption ? "bg-emerald-50 border-emerald-200 text-emerald-700 font-bold" :
                                  isUserSelected && !isCorrect ? "bg-red-50 border-[#dc2626]/20 text-[#dc2626]" :
                                  "bg-emerald-50/30 border-emerald-50 text-emerald-800/60"
                                )}
                              >
                                 <span className="w-8 h-8 rounded-lg bg-white/50 flex items-center justify-center font-bold">
                                    {oIdx + 1}
                                 </span>
                                 <span>{option}</span>
                                 {isCorrectOption && <CheckCircle2 size={20} className="ml-auto text-primary" />}
                                 {isUserSelected && !isCorrect && <XCircle size={20} className="ml-auto text-[#dc2626]" />}
                              </div>
                            );
                          })}
                       </div>

                       {q.explanation && (
                         <div className="p-6 bg-emerald-50/50 border border-emerald-50 rounded-2xl">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700/50 mb-2">Step-by-Step Logic</p>
                            <p className="text-emerald-800 leading-relaxed text-sm font-medium">{q.explanation}</p>
                         </div>
                       )}
                    </div>
                 </div>
               </motion.div>
             );
           })}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-20">
         <button 
           onClick={() => navigate('/subjects')}
           className="flex-1 py-6 bg-white border border-emerald-100 rounded-2xl font-bold text-sm text-emerald-700 hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
         >
           <RefreshCcw size={18} /> Review Catalog
         </button>
         <button 
           onClick={() => navigate('/')}
           className="flex-1 py-6 bg-primary text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
         >
           Back to Dashboard <Home size={18} />
         </button>
      </div>
    </div>
   );
}

function StatsCard({ label, value, color, icon: Icon }: any) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-emerald-50 flex flex-col justify-between h-48 shadow-sm group hover:border-emerald-100 transition-all">
       <div className={cn("text-[10px] font-bold uppercase tracking-[0.1em] mb-4 opacity-70", color)}>{label}</div>
       <div className="text-4xl font-bold heading-display text-emerald-950">{value}</div>
       <div className="flex justify-end opacity-10 group-hover:opacity-30 transition-opacity">
          <Icon size={48} className={color} />
       </div>
    </div>
  );
}

