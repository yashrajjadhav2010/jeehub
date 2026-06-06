import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, ArrowRight, Home, RefreshCw, CheckCircle2, XCircle, Info, Timer, Target, BrainCircuit, TrendingUp, RefreshCcw, X, MessageSquare } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { QuizResult, QuizSet } from '../types';
import { cn, formatTime } from '../lib/utils';

export default function Result() {
  const navigate = useNavigate();
  const [result, setResult] = useState<any>(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('lastQuizResult');
    if (data) {
      const parsed = JSON.parse(data);
      const { answers, quizSet } = parsed;
      
      let correct = 0;
      let wrong = 0;
      let skipped = 0;

      let errorBook = [];
      try {
        errorBook = JSON.parse(localStorage.getItem('errorBook') || '[]');
      } catch(e) {}

      quizSet.questions.forEach((q: any) => {
        const selected = answers[q.id];
        if (selected === null) skipped++;
        else if (selected === q.answer) correct++;
        else {
          wrong++;
          if (!errorBook.find((item: any) => item.id === q.id)) {
            errorBook.push({ ...q, subjectId: quizSet.subjectId, chapterId: quizSet.chapterId, userWrongAnswer: selected, timestamp: new Date().toISOString() });
          }
        }
      });
      
      localStorage.setItem('errorBook', JSON.stringify(errorBook));

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
        totalTime: 0,
        streak: 1,
        missionsCompleted: 0,
        subjectProgress: { physics: 0, chemistry: 0, maths: 0, 'mock-tests': 0 },
        dailyActivity: {}
      };

      stats.totalSolved += quizSet.questions.length;
      stats.correctAnswers += correct;
      stats.totalTime = (stats.totalTime || 0) + parsed.timeTaken;
      stats.missionsCompleted = (stats.missionsCompleted || 0) + 1;
      
      // Update daily activity radar data
      const today = new Date().toISOString().split('T')[0];
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      
      const lastActive = stats.lastActiveDate;
      if (lastActive !== today) {
        if (lastActive === yesterday) {
          stats.streak += 1;
        } else if (!lastActive) {
          stats.streak = 1;
        } else {
          stats.streak = 1; // reset streak
        }
        stats.lastActiveDate = today;
      }

      stats.dailyActivity = stats.dailyActivity || {};
      stats.dailyActivity[today] = (stats.dailyActivity[today] || 0) + quizSet.questions.length;
      
      // Update subject specific progress (increment by 5% per set for demo purposes)
      const subId = parsed.subjectId as keyof typeof stats.subjectProgress;
      if (stats.subjectProgress[subId] < 100) {
        stats.subjectProgress[subId] = Math.min(100, (stats.subjectProgress[subId] || 0) + 5);
      }

      localStorage.setItem('userStats', JSON.stringify(stats));

      // Trigger one-time feedback popup for first submission
      const feedbackShown = localStorage.getItem('feedbackShown_v1');
      if (stats.missionsCompleted === 1 && !feedbackShown) {
        setTimeout(() => setShowFeedbackModal(true), 1500);
      }
    }
  }, []);

  const handleCloseFeedback = () => {
    setShowFeedbackModal(false);
    localStorage.setItem('feedbackShown_v1', 'true');
  };

  if (!result) return <div className="flex items-center justify-center h-64"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  const { quizSet } = result;

  return (
    <div className="max-w-6xl mx-auto pb-32 px-4 pt-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2rem] p-6 sm:p-10 md:p-16 border border-emerald-100 shadow-sm relative overflow-hidden mb-12"
      >
        <div className="relative z-10 flex flex-col items-center text-center">
           <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-50 rounded-3xl flex items-center justify-center text-[#e64a19] mb-6 sm:mb-10">
              <Trophy size={32} className="sm:size-[40px]" />
           </div>
           
           <h1 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-emerald-700/50 uppercase mb-4">Post-Exam Analysis</h1>
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold heading-display mb-8 text-emerald-950 px-4">Mission <span className="text-primary italic">{result.accuracy > 70 ? 'Accomplished' : 'Debriefed'}</span></h2>
           
           <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-4 sm:mt-8 px-4 w-full">
              <div className="text-center flex-1 min-w-[120px]">
                 <p className="text-[10px] font-bold tracking-widest text-emerald-700/50 uppercase mb-2">Total Score</p>
                 <p className="text-3xl sm:text-4xl md:text-5xl font-bold heading-display text-emerald-900">{result.totalScore}</p>
                 <p className="text-xs font-medium text-emerald-700/50 mt-1">/{result.totalPossible}</p>
              </div>
              <div className="w-px h-16 bg-emerald-100 hidden md:block" />
              <div className="text-center flex-1 min-w-[120px]">
                 <p className="text-[10px] font-bold tracking-widest text-emerald-700/50 uppercase mb-2">Accuracy</p>
                 <p className="text-3xl sm:text-4xl md:text-5xl font-bold heading-display text-emerald-600">{result.accuracy}%</p>
              </div>
              <div className="w-px h-16 bg-emerald-100 hidden md:block" />
              <div className="text-center flex-1 min-w-[120px]">
                 <p className="text-[10px] font-bold tracking-widest text-emerald-700/50 uppercase mb-2">Time spent</p>
                 <p className="text-3xl sm:text-4xl md:text-5xl font-bold heading-display text-emerald-900">{formatTime(result.timeTaken)}</p>
              </div>
           </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 underline-cols px-4 md:px-0">
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
                    "bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-12 border transition-all",
                    isSkipped ? "border-emerald-50 opacity-80" : 
                    isCorrect ? "border-emerald-100 bg-emerald-50/20" : "border-red-100 bg-[#dc2626]/5"
                  )}
                >
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
                     <div className={cn(
                       "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0",
                       isSkipped ? "bg-emerald-50 text-emerald-400" :
                       isCorrect ? "bg-emerald-500 text-white" : "bg-[#dc2626] text-white"
                     )}>
                       {idx + 1}
                     </div>
                     
                     <div className="flex-1 min-w-0 text-left">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 leading-relaxed text-emerald-900">
                          <div className="markdown-body">
                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                              {q.question}
                            </ReactMarkdown>
                          </div>
                        </h4>
                        
                        <div className="grid grid-cols-1 gap-3 mb-6 sm:mb-8">
                           {(!q.options || q.options.length === 0 || q.type === 'integer') ? (
                             <div className="flex flex-col gap-4">
                                <div className={cn("p-4 rounded-xl border flex flex-col gap-2 transition-all text-sm", isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-[#dc2626]/20")}>
                                  <div className="flex items-center justify-between">
                                    <span className="font-bold text-emerald-900">Your Answer:</span>
                                    <span className={cn("font-bold text-lg", isCorrect ? "text-emerald-700" : "text-[#dc2626]")}>
                                      {selected !== null ? selected : "Not Attempted"}
                                    </span>
                                  </div>
                                  {!isCorrect && (
                                    <div className="flex items-center justify-between border-t border-emerald-900/10 pt-2 mt-2">
                                      <span className="font-bold text-emerald-900">Correct Answer:</span>
                                      <span className="font-bold text-lg text-emerald-700">{q.answer}</span>
                                    </div>
                                  )}
                                </div>
                             </div>
                           ) : (
                             q.options.map((option: string, oIdx: number) => {
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
                                    <span className="w-8 h-8 rounded-lg bg-white/50 flex items-center justify-center font-bold shrink-0">
                                       {oIdx + 1}
                                    </span>
                                    <span className="markdown-body text-left">
                                      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                        {option}
                                      </ReactMarkdown>
                                    </span>
                                    {isCorrectOption && <CheckCircle2 size={20} className="ml-auto text-primary shrink-0" />}
                                    {isUserSelected && !isCorrect && <XCircle size={20} className="ml-auto text-[#dc2626] shrink-0" />}
                                 </div>
                               );
                             })
                           )}
                        </div>

                        {q.explanation && (
                          <div className="p-6 bg-emerald-50/50 border border-emerald-50 rounded-2xl">
                             <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700/50 mb-2">Step-by-Step Logic</p>
                             <div className="text-emerald-800 text-sm font-medium markdown-body">
                                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                  {q.explanation}
                                </ReactMarkdown>
                             </div>
                          </div>
                        )}
                     </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-20 px-4">
         <button 
           onClick={() => navigate('/subjects')}
           className="flex-1 py-6 bg-white border-2 border-emerald-950 text-emerald-950 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-50 transition-all flex items-center justify-center gap-4 group"
         >
           <RefreshCcw size={18} className="group-hover:rotate-180 transition-transform duration-700" /> 
           Return to Subjects
         </button>
         <button 
           onClick={() => navigate('/')}
           className="flex-1 py-6 bg-emerald-950 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-900 transition-all shadow-2xl flex items-center justify-center gap-4 group"
         >
           Back to Command Center <Home size={18} className="group-hover:scale-110 transition-transform" />
         </button>
      </div>

      <AnimatePresence>
        {showFeedbackModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseFeedback}
              className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-6 md:p-8 flex items-center justify-between border-b border-emerald-900/5">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                      <MessageSquare size={20} />
                   </div>
                   <div>
                     <h3 className="text-lg font-black text-emerald-950 leading-none">FEEDBACK TERMINAL</h3>
                     <span className="text-[10px] font-bold text-emerald-800/40 uppercase tracking-widest">Post-Mission Debriefing</span>
                   </div>
                </div>
                <button 
                  onClick={handleCloseFeedback}
                  className="p-2 rounded-full hover:bg-emerald-50 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="h-[500px] md:h-[600px]">
                 <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeIWgZU25Yl_PcW-BkmR1I0NnzUNzjfNRa8ZImM48Z_bPiWmw/viewform?embedded=true" 
                    width="100%" 
                    height="100%" 
                    className="border-none"
                  >
                    Loading…
                  </iframe>
              </div>

              <div className="p-6 md:p-8 bg-emerald-50/50 border-t border-emerald-900/5 flex flex-col md:flex-row items-center justify-between gap-4">
                 <p className="text-[10px] font-bold text-emerald-800/40 uppercase tracking-widest max-w-[200px]">
                    Your transmission helps us evolve. Thank you for your service.
                 </p>
                 <button 
                    onClick={handleCloseFeedback}
                    className="w-full md:w-auto px-10 py-4 bg-emerald-950 text-white rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl"
                  >
                    CLOSE TERMINAL
                  </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
   );
}

function StatsCard({ label, value, color, icon: Icon }: any) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-emerald-50 flex flex-col justify-between h-36 sm:h-48 shadow-sm group hover:border-emerald-100 transition-all">
       <div className={cn("text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.1em] mb-2 sm:mb-4 opacity-70", color)}>{label}</div>
       <div className="text-2xl sm:text-4xl font-bold heading-display text-emerald-950">{value}</div>
       <div className="flex justify-end opacity-10 group-hover:opacity-30 transition-opacity">
          <Icon size={32} className={cn("sm:size-[48px]", color)} />
       </div>
    </div>
  );
}

