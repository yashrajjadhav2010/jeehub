import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Trophy, ArrowRight, Home, RefreshCw, CheckCircle2, XCircle, Info, Timer, Target, BrainCircuit, TrendingUp, RefreshCcw, X, MessageSquare } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, LabelList } from 'recharts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { QuizResult, QuizSet } from '../types';
import { cn, formatTime } from '../lib/utils';

export default function Result() {
  const navigate = useNavigate();
  const [result, setResult] = useState<any>(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [explainingIds, setExplainingIds] = useState<string[]>([]);

  const handleExplain = async (q: any, i: number) => {
    if (q.explanation || explainingIds.includes(q.id)) return;
    
    setExplainingIds(prev => [...prev, q.id]);
    
    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q.question,
          options: q.options || [],
          answer: q.answer
        })
      });
      
      if (res.ok) {
        const data = await res.json();
        setResult((prev: any) => {
          if (!prev) return prev;
          const newResult = { ...prev };
          const newQuestions = [...newResult.quizSet.questions];
          newQuestions[i] = { ...newQuestions[i], explanation: data.explanation };
          newResult.quizSet = { ...newResult.quizSet, questions: newQuestions };
          return newResult;
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setExplainingIds(prev => prev.filter(id => id !== q.id));
    }
  };

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
        subjectProgress: { physics: 0, chemistry: 0, maths: 0, 'mock-tests': 0, 'pyq': 0 },
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

  const attemptCount = result.correct + result.wrong;
  const timePerAttemptMin = attemptCount > 0 ? (result.timeTaken / 60) / attemptCount : 0;
  const timeCorrectMin = Number((result.correct * timePerAttemptMin).toFixed(2));
  const timeIncorrectMin = Number((result.wrong * timePerAttemptMin).toFixed(2));
  const timeSkippedMin = 0;
  const totalTimeMin = (result.timeTaken / 60).toFixed(2);
  const totalAllocatedTimeMin = quizSet.questions.length * 1.5;

  const pieData = [
    { name: 'Correct', value: result.correct, color: '#22c55e' },
    { name: 'Incorrect', value: result.wrong, color: '#ef4444' },
    { name: 'Not Answered', value: result.skipped, color: '#e5e7eb' },
  ];

  const qualityTimeData = [
    { name: 'Correct', value: timeCorrectMin, fill: '#22c55e' },
    { name: 'Incorrect', value: timeIncorrectMin, fill: '#ef4444' },
    { name: 'Not Attempted', value: timeSkippedMin, fill: '#e5e7eb' },
  ];

  const subjectTimeData = [
    { name: quizSet.subject, value: Number(totalTimeMin), fill: '#f97316' }
  ];

  return (
    <div className="max-w-6xl mx-auto pb-32 px-4 pt-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-12"
      >
        <div className="bg-white rounded-[2rem] shadow-sm border border-emerald-100 p-8 lg:p-12 mb-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-12">
            {/* Ribbon */}
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-50 text-blue-900 font-bold text-[10px] tracking-widest py-2 px-6 rounded-t-xl z-20 border border-blue-100 border-b-0 uppercase">
                  MARKS OBTAINED
                </div>
                <div className="relative z-10 flex items-center justify-center">
                  {/* Ribbon tails */}
                  <div className="absolute top-4 -left-4 w-12 h-12 bg-[#1e40af]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 25% 50%)' }} />
                  <div className="absolute top-4 -right-4 w-12 h-12 bg-[#1e40af]" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 50%, 100% 100%, 0 100%)' }} />
                  {/* Main card */}
                  <div className="bg-[#2563eb] rounded-sm text-white px-12 py-4 relative z-30 shadow-xl border-b-[6px] border-blue-800 min-w-[200px] text-center">
                     <span className="text-4xl font-bold">{result.totalScore}</span>
                     <span className="text-xl text-blue-200"> /{result.totalPossible}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Pills */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6 lg:gap-8 flex-1">
               {/* Attempted */}
               <div className="flex flex-col items-center">
                 <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-purple-200 shadow-sm bg-white min-w-[140px] justify-center">
                    <HelpCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-xl font-bold text-purple-700">{attemptCount}</span>
                 </div>
                 <p className="text-xs text-gray-500 font-medium mt-3">Qs attempted out of {quizSet.questions.length}</p>
               </div>
               
               {/* Accuracy */}
               <div className="flex flex-col items-center">
                 <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-emerald-200 shadow-sm bg-white min-w-[140px] justify-center">
                    <Target className="w-5 h-5 text-emerald-600" />
                    <span className="text-xl font-bold text-emerald-700">{result.accuracy}%</span>
                 </div>
                 <p className="text-xs text-gray-500 font-medium mt-3">Accuracy</p>
               </div>
               
               {/* Time */}
               <div className="flex flex-col items-center">
                 <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-amber-200 shadow-sm bg-white min-w-[140px] justify-center">
                    <Timer className="w-5 h-5 text-amber-600" />
                    <span className="text-xl font-bold text-amber-700">{totalTimeMin} min</span>
                 </div>
                 <p className="text-xs text-gray-500 font-medium mt-3">Time taken out of {totalAllocatedTimeMin} min</p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-gray-100">
             {/* Attempts Analysis */}
             <div className="lg:col-span-5">
                <h3 className="text-lg font-bold text-gray-800 mb-8">Attempts Analysis <span className="text-gray-400 font-normal">(Overall)</span></h3>
                
                <div className="flex items-center gap-8 md:gap-12 pl-4">
                  <div className="relative w-36 h-36 shrink-0">
                     <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                         <Pie 
                           data={pieData} 
                           innerRadius={45} 
                           outerRadius={65} 
                           paddingAngle={4} 
                           dataKey="value" 
                           stroke="none"
                           cornerRadius={4}
                         >
                           {pieData.map((e, i) => <Cell key={i} fill={e.color} />)}
                         </Pie>
                       </PieChart>
                     </ResponsiveContainer>
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center -mt-1">
                       <span className="font-bold text-xl text-gray-800">{quizSet.questions.length}</span>
                       <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Total Qs</span>
                     </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-8 gap-y-6 text-sm">
                     <div className="w-full">
                       <div className="w-5 h-1.5 bg-[#22c55e] mb-2 rounded-full" />
                       <p className="text-gray-500 text-xs mb-1">Correct</p>
                       <p className="font-bold text-gray-800">{result.correct} Qs</p>
                     </div>
                     <div>
                       <div className="w-5 h-1.5 bg-[#ef4444] mb-2 rounded-full" />
                       <p className="text-gray-500 text-xs mb-1">Incorrect:</p>
                       <p className="font-bold text-gray-800">{result.wrong} Qs</p>
                     </div>
                     <div>
                       <div className="w-5 h-1.5 bg-[#e5e7eb] mb-2 rounded-full" />
                       <p className="text-gray-500 text-xs mb-1">Not Answered:</p>
                       <p className="font-bold text-gray-800">{result.skipped} Qs</p>
                     </div>
                  </div>
                </div>
             </div>

             {/* Charts */}
             <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 lg:border-l border-gray-100 lg:pl-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Quality of Time Spent <span className="text-gray-400 font-normal">(Overall)</span></h3>
                  <p className="text-xs text-gray-500 font-medium mb-6">Total time spent: {totalTimeMin} min</p>
                  
                  <div className="h-44 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={qualityTimeData} 
                        margin={{ top: 20, right: 0, left: -25, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                        <XAxis dataKey="name" axisLine={{stroke: '#e5e7eb'}} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} tickCount={5} dx={-10} domain={[0, 'dataMax + 2']} />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={32}>
                           {qualityTimeData.map((e, index) => <Cell key={index} fill={e.fill} />)}
                           <LabelList dataKey="value" position="top" formatter={(val: number) => `${val} min`} fontSize={10} fill="#6b7280" offset={8} />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-6 flex flex-col gap-2 text-xs">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#22c55e] shrink-0" /> <span className="text-gray-500">Time spent on correct qs:</span> <span className="font-bold text-gray-800">{timeCorrectMin} min</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#ef4444] shrink-0" /> <span className="text-gray-500">Time spent on incorrect qs:</span> <span className="font-bold text-gray-800">{timeIncorrectMin} min</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#e5e7eb] shrink-0" /> <span className="text-gray-500">Time spent on not attempted qs:</span> <span className="font-bold text-gray-800">{timeSkippedMin} min</span></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Subject wise Time spent</h3>
                  <p className="text-xs text-gray-500 font-medium mb-6">Total time spent: {totalTimeMin} min</p>
                  
                  <div className="h-44 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={subjectTimeData} 
                        margin={{ top: 20, right: 0, left: -25, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                        <XAxis dataKey="name" axisLine={{stroke: '#e5e7eb'}} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} tickCount={5} dx={-10} domain={[0, 'dataMax + 2']} />
                        <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} maxBarSize={32}>
                           <LabelList dataKey="value" position="top" formatter={(val: number) => `${val} min`} fontSize={10} fill="#6b7280" offset={8} />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-6 flex flex-col gap-2 text-xs">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#f97316] shrink-0" /> <span className="text-gray-500 capitalize">{quizSet.subject}:</span> <span className="font-bold text-gray-800">{totalTimeMin} min</span></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>

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

                        {q.explanation ? (
                          <div className="p-6 bg-emerald-50/50 border border-emerald-50 rounded-2xl mt-6">
                             <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700/50 mb-2">Step-by-Step Logic</p>
                             <div className="text-emerald-800 text-sm font-medium markdown-body">
                                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                  {q.explanation}
                                </ReactMarkdown>
                             </div>
                          </div>
                        ) : (
                          <div className="mt-6 flex justify-start">
                             <button 
                                onClick={() => handleExplain(q, idx)}
                                disabled={explainingIds.includes(q.id)}
                                className={cn(
                                  "px-6 py-3 bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-primary/20 transition-all flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                )}
                             >
                                <BrainCircuit size={16} className={cn(explainingIds.includes(q.id) && "animate-pulse")} />
                                {explainingIds.includes(q.id) ? 'Synthesizing Logic...' : 'Explain with Axiom AI'}
                             </button>
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

