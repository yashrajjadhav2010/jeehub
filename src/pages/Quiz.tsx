import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChevronLeft, ChevronRight, Calculator, HelpCircle, Info, Activity, BrainCircuit } from 'lucide-react';
import { QuizSet } from '../types';
import { loadQuizSet } from '../lib/dataService';
import { cn } from '../lib/utils';

export default function Quiz() {
  const { subjectId, chapterId, setId } = useParams<{ subjectId: string; chapterId: string; setId: string }>();
  const navigate = useNavigate();
  
  const [quizSet, setQuizSet] = useState<QuizSet | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [visited, setVisited] = useState<Record<number, boolean>>({ 0: true });
  const [timeLeft, setTimeLeft] = useState(0);
  const [questionTime, setQuestionTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (subjectId && chapterId && setId) {
        const data = await loadQuizSet(subjectId, chapterId, setId);
        if (data) {
          setQuizSet(data);
          setTimeLeft(data.questions.length * 90);
          const initialAnswers = data.questions.reduce((acc, q) => {
            acc[q.id] = null;
            return acc;
          }, {} as Record<string, number | null>);
          setAnswers(initialAnswers);
        }
      }
      setLoading(false);
    }
    loadData();
  }, [subjectId, chapterId, setId]);

  useEffect(() => {
    if (timeLeft <= 0 || isFinished) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
      setQuestionTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isFinished]);

  useEffect(() => {
    setQuestionTime(0);
  }, [currentIdx]);

  const handleFinish = useCallback(() => {
    setIsFinished(true);
    const results = {
      subjectId,
      chapterId,
      setId,
      answers,
      timeTaken: (quizSet?.questions.length || 0) * 90 - timeLeft,
      quizSet
    };
    localStorage.setItem('lastQuizResult', JSON.stringify(results));
    navigate('/result');
  }, [answers, timeLeft, quizSet, subjectId, chapterId, setId, navigate]);

  const selectIdx = (idx: number) => {
    setCurrentIdx(idx);
    setVisited(prev => ({ ...prev, [idx]: true }));
    setShowSolution(false);
  };

  const handleSaveNext = () => {
    if (currentIdx < (quizSet?.questions.length || 0) - 1) {
      selectIdx(currentIdx + 1);
    }
  };

  const handleClear = () => {
    setAnswers(prev => ({ ...prev, [currentQuestion!.id]: null }));
    setMarkedForReview(prev => ({ ...prev, [currentQuestion!.id]: false }));
    setShowSolution(false);
  };

  const handleMarkReviewNext = () => {
    setMarkedForReview(prev => ({ ...prev, [currentQuestion!.id]: true }));
    handleSaveNext();
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fbfdfb]">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-primary font-bold uppercase tracking-widest">Loading Test Content...</p>
    </div>
  );

  if (!quizSet) return <div className="flex items-center justify-center h-screen">MISSION DATA MISSING</div>;

  const currentQuestion = quizSet.questions[currentIdx];
  
  // Calculate Stats
  const stats = quizSet.questions.reduce((acc, q, idx) => {
    const isAnswered = answers[q.id] !== null;
    const isMarked = markedForReview[q.id];
    const isVisited = visited[idx];

    if (isMarked && isAnswered) acc.marked++; // Count as marked regardless of answer for simplicity in JEE style, or add separate count
    else if (isMarked) acc.marked++;
    else if (isAnswered) acc.answered++;
    else if (isVisited) acc.notAnswered++;
    else acc.notVisited++;

    return acc;
  }, { answered: 0, notAnswered: 0, marked: 0, notVisited: 0 });

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const formatShortTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden text-emerald-950 relative">
      <div className="mesh-bg opacity-30" />
      <div className="noise-overlay" />
      
      {/* CBT Header */}
      <div className="bg-white border-b border-emerald-100 px-8 py-4 flex items-center justify-between z-30 shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/subjects')}
            className="group flex items-center gap-3 text-emerald-950 hover:text-primary transition-all pr-6 border-r border-emerald-100"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ChevronLeft size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Exit Test</span>
          </button>
          
          <div className="flex items-center gap-4">
             <div className="px-4 py-1.5 bg-emerald-950 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] shadow-lg shadow-emerald-950/20">JEE MAIN</div>
             <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-700/40 leading-none mb-1">Mission Identifier</span>
                <h1 className="text-sm font-black text-emerald-950 tracking-tight leading-none uppercase">{quizSet.title}</h1>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <div className="flex flex-col items-end">
             <span className="text-[9px] font-black uppercase tracking-widest text-emerald-700/40 leading-none mb-2">T-Minus Remaining</span>
             <div className="flex items-center gap-3 bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-100 shadow-inner">
               <Clock size={16} className="text-primary animate-pulse" />
               <span className="text-xl font-black text-emerald-950 heading-display tabular-nums tracking-tighter">{formatTime(timeLeft)}</span>
             </div>
          </div>
          
          <div className="flex items-center gap-4 pl-8 border-l border-emerald-100">
             <div className="text-right">
                <p className="text-[9px] text-emerald-700/40 font-black uppercase tracking-widest leading-none mb-1">Aspirant</p>
                <p className="text-sm font-black text-emerald-950 leading-none">COMMANDER YR</p>
             </div>
             <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-sm shadow-xl shadow-primary/20 border border-white/10 ring-4 ring-emerald-50">YR</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Section */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
           {/* Section Tabs */}
           <div className="flex bg-emerald-50/30 border-b border-emerald-100 p-2 gap-2">
              <button className="px-10 py-3 bg-emerald-950 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl shadow-xl shadow-emerald-950/20 flex items-center gap-3 border border-white/5">
                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-[pulse_2s_infinite]" />
                 SECTOR: {subjectId}
              </button>
              <div className="flex-1" />
              <div className="flex items-center gap-2 px-6">
                 <div className="w-2 h-2 rounded-full bg-emerald-200" />
                 <div className="w-2 h-2 rounded-full bg-emerald-200" />
                 <div className="w-2 h-2 rounded-full bg-emerald-200" />
              </div>
           </div>
           
           <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-white/50 backdrop-blur-sm relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="max-w-4xl mx-auto"
                >
                   <div className="flex items-center justify-between mb-10 border-b border-emerald-50 pb-6">
                      <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-800/40 mb-1">Current Sector</span>
                          <h2 className="text-2xl font-black heading-display text-emerald-950 uppercase italic">Question {currentIdx + 1}<span className="text-primary not-italic">.0</span></h2>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-950 px-3 py-1.5 rounded-xl text-[10px] font-black text-white border border-white/10 shadow-lg shadow-emerald-950/20">
                          <Clock size={12} className="text-emerald-400" />
                          TIME: {formatShortTime(questionTime)}
                        </div>
                      </div>
                      <div className="flex gap-4">
                         <button className="w-10 h-10 rounded-full flex items-center justify-center text-emerald-300 hover:text-primary hover:bg-emerald-50 transition-all"><Info size={20} /></button>
                         <button className="w-10 h-10 rounded-full flex items-center justify-center text-emerald-300 hover:text-primary hover:bg-emerald-50 transition-all"><Calculator size={20} /></button>
                      </div>
                   </div>

                   <div className="text-2xl text-emerald-950 font-black heading-display mb-16 leading-relaxed whitespace-pre-wrap tracking-tight">
                      {currentQuestion.question}
                   </div>

                   <div className="grid grid-cols-1 gap-6">
                      {currentQuestion.options.map((option, idx) => {
                        const isCorrect = idx === currentQuestion.answer;
                        const isSelected = answers[currentQuestion.id] === idx;
                        
                        return (
                          <label key={idx} className={cn(
                            "flex items-center gap-8 p-8 rounded-[2.5rem] cursor-pointer transition-all border-2 relative overflow-hidden group",
                            answers[currentQuestion.id] === idx 
                              ? "border-primary bg-white shadow-2xl shadow-primary/10 -translate-y-1" 
                              : "border-emerald-50 hover:bg-white hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5",
                            showSolution && isCorrect && "border-emerald-500 bg-emerald-50/50",
                            showSolution && isSelected && !isCorrect && "border-red-500 bg-red-50/50"
                          )}>
                            <div className={cn(
                              "w-12 h-12 rounded-2xl border-2 flex items-center justify-center transition-all font-black text-base shadow-sm",
                              answers[currentQuestion.id] === idx 
                                ? "border-primary bg-primary text-white scale-110 shadow-primary/20" 
                                : "border-emerald-100 text-emerald-300 group-hover:border-emerald-300 group-hover:text-emerald-500",
                              showSolution && isCorrect && "border-emerald-500 bg-emerald-500 text-white",
                              showSolution && isSelected && !isCorrect && "border-red-500 bg-red-500 text-white"
                            )}>
                              {idx + 1}
                            </div>
                            <span className="text-xl font-bold text-emerald-950 group-hover:translate-x-1 transition-transform tracking-tight">{option}</span>
                            <input 
                              type="radio" 
                              name="quiz-option" 
                              className="sr-only"
                              disabled={showSolution}
                              checked={answers[currentQuestion.id] === idx}
                              onChange={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: idx }))}
                            />
                            
                            {isSelected && (
                              <motion.div 
                                layoutId="active-bg"
                                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -z-10"
                              />
                            )}
                          </label>
                        );
                      })}
                   </div>

                   {showSolution && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-16 p-10 bg-emerald-950 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
                      >
                         <div className="relative z-10">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-6 border-b border-white/5 pb-4">Tactical Solution Analysis</p>
                            <p className="text-white/90 leading-relaxed font-medium text-lg italic">
                                "{currentQuestion.explanation || "No tactical breakdown available for this engagement."}"
                            </p>
                         </div>
                         <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                            <HelpCircle size={200} />
                         </div>
                      </motion.div>
                   )}
                </motion.div>
              </AnimatePresence>
           </div>

           {/* Controls Footer */}
           <div className="bg-white/80 backdrop-blur-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 z-50 relative border-t border-emerald-50 shadow-[0_-10px_50px_rgba(0,0,0,0.02)]">
              <div className="flex gap-4 flex-wrap">
                 <button 
                  onClick={handleMarkReviewNext}
                  className="px-10 py-5 bg-white text-emerald-900 border-2 border-emerald-50 text-[11px] font-black uppercase rounded-2xl hover:bg-emerald-50 hover:border-emerald-100 transition-all flex items-center gap-4 group"
                 >
                   <div className="w-2.5 h-2.5 rounded-full bg-orange-500 ring-4 ring-orange-500/10 group-hover:scale-125 transition-transform" />
                   Mark for Review & Next
                 </button>
                 <button 
                  onClick={handleClear}
                  className="px-10 py-5 bg-white text-emerald-900 border-2 border-emerald-50 text-[11px] font-black uppercase rounded-2xl hover:bg-emerald-50 hover:border-emerald-100 transition-all"
                 >
                   Clear Response
                 </button>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 hidden xl:block">
                {answers[currentQuestion.id] !== null && (
                   <button 
                    onClick={() => setShowSolution(!showSolution)}
                    className="px-12 py-5 bg-emerald-500 text-white text-[11px] font-black uppercase rounded-2xl shadow-2xl shadow-emerald-500/20 hover:bg-emerald-600 hover:scale-105 transition-all flex items-center gap-4 border-2 border-emerald-400"
                   >
                      <BrainCircuit size={20} />
                      {showSolution ? 'COLLAPSE INTEL' : 'ANALYZE SOLUTION'}
                   </button>
                )}
              </div>
              
              <div className="flex items-center gap-6">
                <button 
                  disabled={currentIdx === 0}
                  onClick={() => selectIdx(currentIdx - 1)}
                  className="px-10 py-5 bg-white text-emerald-950 border-2 border-emerald-50 text-[11px] font-black uppercase rounded-2xl hover:bg-emerald-50 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>
                <button 
                  onClick={handleSaveNext}
                  className="px-14 py-5 bg-primary text-white text-[11px] font-black uppercase rounded-2xl shadow-[0_20px_50px_rgba(29,77,41,0.25)] hover:scale-105 active:scale-95 transition-all flex items-center gap-4 group"
                >
                  Save & Next <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
           </div>
        </div>

        {/* Palette Section */}
        <div className="w-[400px] border-l border-emerald-100 flex flex-col bg-white overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
           <div className="p-8 bg-emerald-50/30">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-2 h-8 bg-primary rounded-full" />
                 <h3 className="text-sm font-black text-emerald-950 uppercase tracking-[0.3em]">Mission Telemetry</h3>
              </div>
              
              <div className="bg-white rounded-[2.5rem] p-8 border border-emerald-100 shadow-sm space-y-8">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800/40">Engagement</p>
                    <p className="text-3xl font-black heading-display text-emerald-950">{stats.answered}<span className="text-sm text-emerald-300">/{quizSet.questions.length}</span></p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center">
                    <Activity size={24} className="text-primary animate-pulse" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                    <p className="text-[9px] font-black uppercase text-emerald-700/50 mb-1">Reviewed</p>
                    <p className="text-xl font-black text-orange-600">{stats.marked}</p>
                  </div>
                  <div className="bg-red-50/50 p-4 rounded-2xl border border-red-100/50">
                    <p className="text-[9px] font-black uppercase text-red-700/50 mb-1">Skipped</p>
                    <p className="text-xl font-black text-red-600">{stats.notAnswered}</p>
                  </div>
                </div>
              </div>
           </div>

           <div className="p-8 flex-1 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[10px] font-black text-emerald-800/40 tracking-[0.4em] uppercase">Tactical Palette</h2>
                <div className="flex gap-1">
                   <div className="w-1 h-1 rounded-full bg-emerald-200" />
                   <div className="w-1 h-1 rounded-full bg-emerald-200" />
                   <div className="w-5 h-1 rounded-full bg-primary" />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4">
                 {quizSet.questions.map((q, idx) => {
                    const isAnswered = answers[q.id] !== null;
                    const isMarked = markedForReview[q.id];
                    const isVisited = visited[idx];
                    
                    let statusClass = "not-visited";
                    if (isMarked && isAnswered) statusClass = "marked-answered";
                    else if (isMarked) statusClass = "marked";
                    else if (isAnswered) statusClass = "answered";
                    else if (isVisited) statusClass = "not-answered";

                    return (
                      <motion.button 
                        key={idx} 
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => selectIdx(idx)}
                        className={cn(
                          "palette-btn w-full aspect-square text-sm font-black transition-all duration-300", 
                          statusClass,
                          currentIdx === idx && "current scale-110 ring-8 ring-primary/5"
                        )}
                      >
                        {idx + 1}
                      </motion.button>
                    )
                 })}
              </div>
           </div>

           <div className="p-8 bg-white border-t border-emerald-100 grid grid-cols-2 gap-4">
              <button 
                onClick={() => navigate('/subjects')}
                className="bg-white border-2 border-emerald-100 text-emerald-950 py-4 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-emerald-50 transition-all"
              >
                 Question Paper
              </button>
              <button 
                onClick={handleFinish}
                className="bg-emerald-950 text-white py-4 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-black transition-all shadow-xl shadow-emerald-950/20"
              >
                 Submit
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
