import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChevronLeft, ChevronRight, ArrowRight, Calculator, HelpCircle, Info, Activity, BrainCircuit, LayoutGrid, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
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
  const [isStarted, setIsStarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const requestFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  const startTest = () => {
    setIsStarted(true);
    const prefs = JSON.parse(localStorage.getItem('systemPrefs') || '{}');
    if (prefs.autoFullscreen !== false) {
      requestFullScreen();
    }
    // Clear challenge flag after start
    localStorage.removeItem('activeChallenge');
  };

  useEffect(() => {
    const prefs = JSON.parse(localStorage.getItem('systemPrefs') || '{}');
    if (prefs.autoFullscreen && isStarted === false && loading === false && quizSet) {
      // If auto-fullscreen is on and we are on briefing screen, maybe suggest it or just let startBtn handle it
      // For UX, it's better to trigger on button click as browsers block auto-fullscreen without user intent
    }
  }, [isStarted, loading, quizSet]);

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

  const exitFullScreen = () => {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const handleFinish = useCallback(() => {
    setIsFinished(true);
    exitFullScreen();
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

  const handleExit = () => {
    exitFullScreen();
    navigate('/subjects');
  };

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

  if (!isStarted) return (
    <div className="flex flex-col items-center justify-center h-screen bg-emerald-950 text-white p-10 text-center relative overflow-hidden">
      <div className="mesh-bg opacity-20" />
      <div className="relative z-10 space-y-10 max-w-2xl">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center shadow-2xl shadow-primary/40 animate-bounce">
            <Activity size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-black heading-display tracking-tight uppercase italic">
            Mission <span className="text-primary not-italic">Briefing</span>
          </h1>
        </div>
        
        <div className="space-y-4 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
           <div className="flex justify-between items-center border-b border-white/10 pb-4">
             <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Tactical Objective</span>
             <span className="text-sm font-bold uppercase">{quizSet.title}</span>
           </div>
           <div className="flex justify-between items-center border-b border-white/10 pb-4">
             <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Payload Size</span>
             <span className="text-sm font-bold uppercase">{quizSet.questions.length} Questions</span>
           </div>
           <div className="flex justify-between items-center">
             <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Estimated Duration</span>
             <span className="text-sm font-bold uppercase">{formatTime(quizSet.questions.length * 90)}</span>
           </div>
        </div>

        <p className="text-emerald-100/40 text-xs font-medium leading-relaxed italic uppercase tracking-widest">
          Initiating the terminal will lock the browser in full-screen mode for maximum focus. 
          Ensure all subsystems are ready.
        </p>

        <div className="flex flex-col gap-4">
          <button 
            onClick={startTest}
            className="w-full py-6 bg-primary text-white font-black text-xs uppercase tracking-[0.4em] rounded-[2rem] shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all"
          >
            Initiate Terminal
          </button>
          <button 
            onClick={() => navigate('/subjects')}
            className="w-full py-4 text-white/30 font-black text-[10px] uppercase tracking-[0.4em] hover:text-white transition-all"
          >
            Abort Mission
          </button>
        </div>
      </div>
    </div>
  );

  const currentQuestion = quizSet.questions[currentIdx];
  const operatorName = localStorage.getItem('operatorName') || 'Candidate';
  const initial = operatorName.substring(0, 2).toUpperCase();
  
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

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden text-emerald-950 relative">
      <div className="mesh-bg opacity-30" />
      <div className="noise-overlay" />
      
      {/* CBT Header */}
      <div className="bg-white border-b border-emerald-100 flex items-center justify-between z-[60] shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative shrink-0">
        <div className="flex items-center flex-1">
          <button 
            onClick={handleExit}
            className="group flex items-center gap-2 md:gap-3 text-emerald-950 hover:text-primary transition-all p-4 md:px-8 md:py-6 border-r border-emerald-100"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ChevronLeft size={18} className="md:size-20" />
            </div>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hidden sm:inline">Exit Test</span>
          </button>
          
          <div className="flex items-center gap-3 md:gap-4 px-4 md:px-8">
             <div className="px-2 md:px-4 py-1 md:py-1.5 bg-emerald-950 text-white text-[8px] md:text-[10px] font-black rounded-lg md:rounded-xl uppercase tracking-[0.1em] md:tracking-[0.2em] shadow-lg shadow-emerald-950/20 whitespace-nowrap">JEE MAIN</div>
             <div className="flex flex-col min-w-0">
                <span className="text-[8px] font-black uppercase tracking-widest text-emerald-700/40 leading-none mb-1 hidden md:block">Mission Identifier</span>
                <h1 className="text-[10px] md:text-sm font-black text-emerald-950 tracking-tight leading-tight uppercase truncate max-w-[120px] md:max-w-none">{quizSet.title}</h1>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-8 pr-4 md:pr-10">
          <button 
            onClick={handleFinish}
            className="md:hidden bg-primary text-white px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-lg shadow-primary/20 border border-white/10"
          >
            Submit
          </button>

          <div className="flex flex-col items-center sm:items-end">
             <span className="text-[8px] font-black uppercase tracking-widest text-emerald-700/40 leading-none mb-1 md:mb-2 hidden md:block">T-Minus Remaining</span>
             <div className="flex items-center gap-2 md:gap-2 bg-emerald-50 px-3 md:px-2 py-2 md:py-1 rounded-xl md:rounded-xl border border-emerald-100 shadow-inner">
               <Clock size={14} className="md:size-10 text-primary animate-pulse" />
               <span className="text-sm md:text-sm font-black text-emerald-950 heading-display tabular-nums tracking-tighter leading-none">{formatTime(timeLeft)}</span>
             </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 pl-8 border-l border-emerald-100">
             <div className="text-right">
                <p className="text-[9px] text-emerald-700/40 font-black uppercase tracking-widest leading-none mb-1">Aspirant</p>
                <p className="text-sm font-black text-emerald-950 leading-none uppercase">{operatorName}</p>
             </div>
             <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-sm shadow-xl shadow-primary/20 border border-white/10 ring-4 ring-emerald-50">{initial}</div>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-emerald-950 text-white flex items-center justify-center shadow-lg shrink-0"
          >
             <LayoutGrid size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Section */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
           {/* Section Tabs */}
           <div className="flex bg-emerald-50/30 border-b border-emerald-100 p-2 gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <button className="px-4 md:px-10 py-2.5 md:py-3 bg-emerald-950 text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-xl md:rounded-2xl shadow-xl shadow-emerald-950/20 flex items-center gap-2 md:gap-3 border border-white/5 shrink-0">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 animate-[pulse_2s_infinite]" />
                 SECTOR: {subjectId}
              </button>
              <div className="flex-1" />
           </div>
           
           <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-white/50 backdrop-blur-sm relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="max-w-4xl mx-auto"
                >
                   <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10 border-b border-emerald-50 pb-4 md:pb-6 gap-4">
                      <div className="flex items-center gap-3 md:gap-6">
                        <div className="flex flex-col">
                          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-emerald-800/40 mb-1">Current Sector</span>
                          <h2 className="text-xl md:text-2xl font-black heading-display text-emerald-950 uppercase italic">Question {currentIdx + 1}<span className="text-primary not-italic">.0</span></h2>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-950 px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black text-white border border-white/10 shadow-lg shadow-emerald-950/20">
                          <Clock size={12} className="text-emerald-400" />
                          TIME: {formatShortTime(questionTime)}
                        </div>
                      </div>
                      <div className="flex gap-2 md:gap-4">
                         <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-emerald-300 hover:text-primary hover:bg-emerald-50 transition-all"><Info size={18} className="md:size-20" /></button>
                         <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-emerald-300 hover:text-primary hover:bg-emerald-50 transition-all"><Calculator size={18} className="md:size-20" /></button>
                      </div>
                   </div>

                   <div className="text-xl md:text-2xl text-emerald-950 font-black heading-display mb-8 md:mb-16 leading-relaxed whitespace-pre-wrap tracking-tight">
                      <ReactMarkdown 
                        remarkPlugins={[remarkMath]} 
                        rehypePlugins={[rehypeKatex]}
                      >
                        {currentQuestion.question}
                      </ReactMarkdown>
                   </div>

                   <div className="grid grid-cols-1 gap-4 md:gap-6">
                      {currentQuestion.options.map((option, idx) => {
                        const isCorrect = idx === currentQuestion.answer;
                        const isSelected = answers[currentQuestion.id] === idx;
                        
                        return (
                          <label key={idx} className={cn(
                            "flex items-center gap-4 md:gap-8 p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] cursor-pointer transition-all border-2 relative overflow-hidden group",
                            answers[currentQuestion.id] === idx 
                              ? "border-primary bg-white shadow-2xl shadow-primary/10 -translate-y-1" 
                              : "border-emerald-50 hover:bg-white hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5",
                            showSolution && isCorrect && "border-emerald-500 bg-emerald-50/50",
                            showSolution && isSelected && !isCorrect && "border-red-500 bg-red-50/50"
                          )}>
                            <div className={cn(
                              "w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border-2 flex items-center justify-center transition-all font-black text-sm md:text-base shadow-sm shrink-0",
                              answers[currentQuestion.id] === idx 
                                ? "border-primary bg-primary text-white scale-110 shadow-primary/20" 
                                : "border-emerald-100 text-emerald-300 group-hover:border-emerald-300 group-hover:text-emerald-500",
                              showSolution && isCorrect && "border-emerald-500 bg-emerald-500 text-white",
                              showSolution && isSelected && !isCorrect && "border-red-500 bg-red-500 text-white"
                            )}>
                              {idx + 1}
                            </div>
                            <span className="text-base md:text-xl font-bold text-emerald-950 group-hover:translate-x-1 transition-transform tracking-tight flex-1">
                              <ReactMarkdown 
                                remarkPlugins={[remarkMath]} 
                                rehypePlugins={[rehypeKatex]}
                              >
                                {option}
                              </ReactMarkdown>
                            </span>
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
                        className="mt-8 md:mt-16 p-6 md:p-10 bg-emerald-950 rounded-3xl md:rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
                      >
                         <div className="relative z-10 markdown-body">
                            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/30 mb-4 md:mb-6 border-b border-white/5 pb-4">Tactical Solution Analysis</p>
                            <div className="text-white/90 leading-relaxed font-medium text-sm md:text-lg italic">
                                <ReactMarkdown 
                                  remarkPlugins={[remarkMath]} 
                                  rehypePlugins={[rehypeKatex]}
                                >
                                  {currentQuestion.explanation || "No tactical breakdown available for this engagement."}
                                </ReactMarkdown>
                            </div>
                         </div>
                         <div className="absolute top-0 right-0 p-10 opacity-[0.03] hidden md:block">
                            <HelpCircle size={200} />
                         </div>
                      </motion.div>
                   )}
                </motion.div>
              </AnimatePresence>
           </div>

           {/* Controls Footer */}
           <div className="bg-white/95 backdrop-blur-2xl px-4 md:px-6 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50 relative border-t border-emerald-50 shadow-[0_-10px_50px_rgba(0,0,0,0.02)] shrink-0">
              <div className="flex gap-2 items-center w-full md:w-auto">
                 <button 
                  onClick={handleMarkReviewNext}
                  className="flex-1 md:flex-none px-4 md:px-5 py-2 md:py-2 bg-white text-emerald-900 border-2 border-emerald-50 text-[9px] md:text-[9px] font-black uppercase rounded-xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 md:gap-3 group"
                 >
                   <div className="w-2 h-2 rounded-full bg-orange-500 ring-2 ring-orange-500/10 group-hover:scale-125 transition-transform" />
                   <span className="truncate">Mark Review</span>
                 </button>
                 <button 
                  onClick={handleClear}
                  className="px-3 md:px-5 py-2 md:py-2 bg-white text-emerald-900 border-2 border-emerald-50 text-[9px] md:text-[9px] font-black uppercase rounded-xl hover:bg-emerald-50 transition-all shrink-0"
                 >
                   Clear
                 </button>
                 
                 {answers[currentQuestion.id] !== null && (
                   <button 
                    onClick={() => setShowSolution(!showSolution)}
                    className="px-2 md:px-4 py-1.5 md:py-1 bg-emerald-500 text-white text-[8px] md:text-[8px] font-black uppercase rounded-lg md:rounded-lg shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all flex items-center justify-center gap-1.5 border-2 border-emerald-400 shrink-0"
                   >
                      <BrainCircuit size={10} className="md:size-10" />
                      <span className="hidden sm:inline">{showSolution ? 'Hide Intel' : 'Analyze'}</span>
                   </button>
                 )}
              </div>
              
              <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
                <button 
                  disabled={currentIdx === 0}
                  onClick={() => selectIdx(currentIdx - 1)}
                  className="flex-1 md:flex-none px-6 md:px-6 py-2 md:py-2 bg-white text-emerald-950 border-2 border-emerald-50 text-[9px] md:text-[9px] font-black uppercase rounded-xl hover:bg-emerald-100 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                >
                  Prev
                </button>
                <button 
                  onClick={handleSaveNext}
                  className="flex-[2] md:flex-none px-8 md:px-4 py-3 md:py-1.5 bg-emerald-950 text-white text-[9px] md:text-[9px] font-black uppercase rounded-xl shadow-[0_10px_30px_rgba(6,78,59,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 md:gap-2 group border-2 border-emerald-800 shrink-0"
                >
                  Save & Next <ChevronRight size={16} className="md:size-14 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
           </div>
        </div>

        {/* Palette Section */}
        <div 
          className={cn(
            "fixed inset-y-0 right-0 z-[100] w-[85%] sm:w-[400px] bg-white lg:static lg:w-[400px] lg:z-0 border-l border-emerald-100 flex flex-col overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.5)] lg:shadow-[-10px_0_30px_rgba(0,0,0,0.02)] transition-transform duration-300 ease-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          )}
        >
           <div className="lg:hidden flex items-center justify-between p-4 bg-emerald-950 text-white shrink-0">
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Tactical Palette</span>
              <button onClick={() => setIsMenuOpen(false)} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                 <X size={20} />
              </button>
           </div>
           
           <div className="p-6 md:p-8 shrink-0 bg-emerald-50/30">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                 <div className="w-1.5 md:w-2 h-6 md:h-8 bg-primary rounded-full" />
                 <h3 className="text-[11px] md:text-sm font-black text-emerald-950 uppercase tracking-[0.3em]">Telemetry</h3>
              </div>
              
              <div className="bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6 md:space-y-8">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-emerald-800/40">Engagement</p>
                    <p className="text-2xl md:text-3xl font-black heading-display text-emerald-950">{stats.answered}<span className="text-xs md:text-sm text-emerald-300">/{quizSet.questions.length}</span></p>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-emerald-50 flex items-center justify-center">
                    <Activity size={20} className="md:size-24 text-primary animate-pulse" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-emerald-50/50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-emerald-100/50">
                    <p className="text-[8px] md:text-[9px] font-black uppercase text-emerald-700/50 mb-1">Reviewed</p>
                    <p className="text-lg md:text-xl font-black text-orange-600">{stats.marked}</p>
                  </div>
                  <div className="bg-red-50/50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-red-100/50">
                    <p className="text-[8px] md:text-[9px] font-black uppercase text-red-700/50 mb-1">Skipped</p>
                    <p className="text-lg md:text-xl font-black text-red-600">{stats.notAnswered}</p>
                  </div>
                </div>
              </div>
           </div>

           <div className="p-6 md:p-8 flex-1 overflow-y-auto">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h2 className="text-[9px] md:text-[10px] font-black text-emerald-800/40 tracking-[0.3em] md:tracking-[0.4em] uppercase">Tactical Palette</h2>
                <div className="flex gap-1">
                   <div className="w-1 h-1 rounded-full bg-emerald-200" />
                   <div className="w-1 h-1 rounded-full bg-emerald-200" />
                   <div className="w-4 md:w-5 h-1 rounded-full bg-primary" />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-3 md:gap-4">
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
                        onClick={() => {
                           selectIdx(idx);
                           setIsMenuOpen(false);
                        }}
                        className={cn(
                          "palette-btn w-full aspect-square text-xs md:text-sm font-black transition-all duration-300", 
                          statusClass,
                          currentIdx === idx && "current scale-110 ring-4 md:ring-8 ring-primary/5"
                        )}
                      >
                        {idx + 1}
                      </motion.button>
                    )
                 })}
              </div>
           </div>

           <div className="p-6 md:p-8 bg-white border-t border-emerald-100 grid grid-cols-2 gap-3 md:gap-4">
              <button 
                onClick={handleExit}
                className="bg-white border-2 border-emerald-100 text-emerald-950 py-3.5 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-xl md:rounded-2xl hover:bg-emerald-50 transition-all font-black"
              >
                 Exit
              </button>
              <button 
                onClick={handleFinish}
                className="bg-emerald-950 text-white py-3.5 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-xl md:rounded-2xl hover:bg-black transition-all shadow-xl shadow-emerald-950/20 font-black"
              >
                 Submit
              </button>
           </div>
        </div>

        {/* Mobile Overlay */}
        <AnimatePresence>
           {isMenuOpen && (
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 onClick={() => setIsMenuOpen(false)}
                 className="fixed inset-0 bg-emerald-950/60 backdrop-blur-sm z-[90] lg:hidden"
              />
           )}
        </AnimatePresence>
      </div>
    </div>
  );
}
