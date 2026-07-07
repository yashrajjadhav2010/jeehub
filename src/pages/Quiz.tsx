import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChevronLeft, ChevronRight, ArrowRight, HelpCircle, Info, Activity, BrainCircuit, LayoutGrid, X, Sparkles, Loader2, Zap, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { QuizSet } from '../types';
import { loadQuizSet } from '../lib/dataService';
import { solveDoubt } from '../services/aiService';
import { cn } from '../lib/utils';
import { checkAILimit, incrementAIUsage } from '../lib/aiUsage';
import { useUser } from '@clerk/clerk-react';

export default function Quiz() {
  const { user } = useUser();
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
  const [solutionViewed, setSolutionViewed] = useState<Record<string, boolean>>({});
  const [isStarted, setIsStarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<Record<string, string>>({});
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiLimitError, setAiLimitError] = useState<string | null>(null);
  const [showSubmitAlert, setShowSubmitAlert] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportDescription, setReportDescription] = useState('');
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const requestFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  const startTest = () => {
    setIsStarted(true);
    try {
      const prefs = JSON.parse(localStorage.getItem('systemPrefs') || '{}');
      if (prefs.autoFullscreen !== false) {
        requestFullScreen();
      }
      // Clear challenge flag after start
      localStorage.removeItem('activeChallenge');
    } catch (e) {
      console.error('Start test storage access failed:', e);
    }
  };

  useEffect(() => {
    try {
      const prefs = JSON.parse(localStorage.getItem('systemPrefs') || '{}');
      if (prefs.autoFullscreen && isStarted === false && loading === false && quizSet) {
        // If auto-fullscreen is on and we are on briefing screen
      }
    } catch (e) {
      console.error('Prefs recovery failed:', e);
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
          const sessionKey = `quiz_session_${subjectId}_${chapterId}_${setId}`;
          const savedSession = localStorage.getItem(sessionKey);
          
          if (savedSession) {
            try {
              const parsed = JSON.parse(savedSession);
              setAnswers(parsed.answers);
              setTimeLeft(parsed.timeLeft);
              setCurrentIdx(parsed.currentIdx);
              setVisited(parsed.visited);
              setMarkedForReview(parsed.markedForReview);
              setSolutionViewed(parsed.solutionViewed);
              setIsStarted(true); // Auto-resume if session exists
            } catch (e) {
              console.error("Error parsing saved session", e);
              const defaultDuration = subjectId === 'mock-tests' ? 10800 : (subjectId === 'pyq' ? 0 : data.questions.length * 90);
              setTimeLeft(data.duration ? data.duration * 60 : defaultDuration);
              const initialAnswers = data.questions.reduce((acc, q) => {
                acc[q.id] = null;
                return acc;
              }, {} as Record<string, number | null>);
              setAnswers(initialAnswers);
            }
          } else {
            const defaultDuration = subjectId === 'mock-tests' ? 10800 : (subjectId === 'pyq' ? 0 : data.questions.length * 90);
            setTimeLeft(data.duration ? data.duration * 60 : defaultDuration);
            const initialAnswers = data.questions.reduce((acc, q) => {
              acc[q.id] = null;
              return acc;
            }, {} as Record<string, number | null>);
            setAnswers(initialAnswers);
          }
        }
      }
      setLoading(false);
    }
    loadData();
  }, [subjectId, chapterId, setId]);

  // Save session state to localStorage
  useEffect(() => {
    if (isStarted && !isFinished && subjectId && chapterId && setId) {
      const sessionKey = `quiz_session_${subjectId}_${chapterId}_${setId}`;
      const sessionData = {
        answers,
        timeLeft,
        currentIdx,
        visited,
        markedForReview,
        solutionViewed
      };
      localStorage.setItem(sessionKey, JSON.stringify(sessionData));
    }
    if (isFinished && subjectId && chapterId && setId) {
      const sessionKey = `quiz_session_${subjectId}_${chapterId}_${setId}`;
      localStorage.removeItem(sessionKey);
    }
  }, [answers, timeLeft, currentIdx, visited, markedForReview, solutionViewed, isStarted, isFinished, subjectId, chapterId, setId]);

  useEffect(() => {
    if (isFinished || !isStarted) return;
    const isPyq = subjectId === 'pyq';
    if (!isPyq && timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => isPyq ? prev + 1 : prev - 1);
      setQuestionTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isFinished, isStarted, subjectId]);

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
      timeTaken: subjectId === 'pyq' ? timeLeft : (quizSet?.duration ? quizSet.duration * 60 : (subjectId === 'mock-tests' ? 10800 : (quizSet?.questions.length || 0) * 90)) - timeLeft,
      quizSet
    };
    localStorage.setItem('lastQuizResult', JSON.stringify(results));
    navigate('/result');
  }, [answers, timeLeft, quizSet, subjectId, chapterId, setId, navigate]);

  useEffect(() => {
    if (isStarted && !isFinished && timeLeft === 0 && quizSet && subjectId !== 'pyq') {
      handleFinish();
    }
  }, [timeLeft, isStarted, isFinished, handleFinish, quizSet, subjectId]);

  useEffect(() => {
    setQuestionTime(0);
  }, [currentIdx]);

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
    } else {
      setShowSubmitAlert(true);
    }
  };

  const handleClear = () => {
    if (currentQuestion && solutionViewed[currentQuestion.id]) return;
    setAnswers(prev => ({ ...prev, [currentQuestion!.id]: null }));
    setMarkedForReview(prev => ({ ...prev, [currentQuestion!.id]: false }));
    setShowSolution(false);
  };

  const handleAiExplain = async () => {
    if (!currentQuestion || isAiLoading) return;
    
    if (aiAnalysis[currentQuestion.id]) {
      setShowSolution(true);
      return;
    }

    const limitStatus = await checkAILimit(user?.id);
    if (!limitStatus.allowed) {
      setAiLimitError(limitStatus.error || "Daily Axiom AI limit reached!");
      setTimeout(() => setAiLimitError(null), 5000);
      return;
    }

    setIsAiLoading(true);
    setShowSolution(true);
    setSolutionViewed(prev => ({ ...prev, [currentQuestion.id]: true }));
    try {
      const answerStr = typeof currentQuestion.answer === 'number' ? currentQuestion.answer + 1 : currentQuestion.answer;
      const prompt = `Question: ${currentQuestion.question}\nOptions: ${currentQuestion.options?.join(', ') || 'N/A'}\nCorrect Answer: Option ${answerStr}\nExplanation: ${currentQuestion.explanation || 'None provided'}`;
      const analysis = await solveDoubt([{ role: 'user', content: prompt }], `Deep-dive analysis for Subject: ${subjectId}`);
      setAiAnalysis(prev => ({ ...prev, [currentQuestion.id]: analysis }));
      
      // Update usage limit
      await incrementAIUsage(user?.id);
    } catch (e) {
      console.error("AI Analysis failed:", e);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleMarkReviewNext = () => {
    setMarkedForReview(prev => ({ ...prev, [currentQuestion!.id]: true }));
    handleSaveNext();
  };

  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportDescription.trim()) return;
    setIsSubmittingReport(true);
    try {
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      const { db } = await import('../lib/firebase');
      
      const userEmail = localStorage.getItem('operatorName') || 'Candidate'; // Just as fallback, or we can get it from Clerk later if needed in Quiz
      
      await addDoc(collection(db, 'reports'), {
        quizId: quizSet?.id || setId,
        subjectId: subjectId || null,
        chapterId: chapterId || null,
        quizTitle: quizSet?.title,
        questionId: currentQuestion?.id,
        questionText: currentQuestion?.question,
        description: reportDescription,
        reporter: userEmail,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      setReportSuccess(true);
      setTimeout(() => {
        setIsReportModalOpen(false);
        setReportSuccess(false);
        setReportDescription('');
      }, 2000);
    } catch (err) {
      console.error('Failed to submit report', err);
    } finally {
      setIsSubmittingReport(false);
    }
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
             <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Mission Objective</span>
             <span className="text-sm font-bold uppercase">{quizSet.title}</span>
           </div>
           <div className="flex justify-between items-center border-b border-white/10 pb-4">
             <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Payload Size</span>
             <span className="text-sm font-bold uppercase">{quizSet.questions.length} Questions</span>
           </div>
           {quizSet.difficulty && (
             <div className="flex justify-between items-center border-b border-white/10 pb-4">
               <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Mission Intensity</span>
               <span className={cn(
                 "text-sm font-black uppercase tracking-widest",
                 quizSet.difficulty === 'pyq' ? "text-purple-400" :
                 quizSet.difficulty === 'hard' ? "text-red-400" :
                 quizSet.difficulty === 'medium' ? "text-amber-400" :
                 "text-green-400"
               )}>{quizSet.difficulty === 'pyq' ? 'PYQ' : quizSet.difficulty === 'hard' ? 'Advanced' : quizSet.difficulty === 'medium' ? 'Moderate' : 'Easy'}</span>
             </div>
           )}
           <div className="flex justify-between items-center">
             <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Estimated Duration</span>
             <span className="text-sm font-bold uppercase">{subjectId === 'pyq' ? 'No Time Limit' : formatTime(quizSet.duration ? quizSet.duration * 60 : quizSet.questions.length * 90)}</span>
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
  let operatorName = 'Candidate';
  try {
    operatorName = localStorage.getItem('operatorName') || 'Candidate';
  } catch (e) {
    console.error('Operator name recovery failed:', e);
  }
  const initial = operatorName.substring(0, 2).toUpperCase();
  
  // Extract exam tag (e.g., JEE Main 2024)
  let _qText = currentQuestion?.question || (currentQuestion as any)?.text || "";
  let _eText = currentQuestion?.explanation || "";
  let _examTag = null;

  const qMatch = _qText ? _qText.match(/\s*\((JEE[^)]+)\)\s*$/i) : null;
  if (qMatch) {
    _examTag = qMatch[1];
    _qText = _qText.replace(qMatch[0], '');
  }

  if (_eText) {
    const eMatch = _eText.match(/\s*\*\(\s*(?:Asked in\s+|Note:\s+)?(JEE.*?)\s*\)\*\s*$/i);
    if (eMatch) {
      _examTag = eMatch[1];
      _eText = _eText.replace(eMatch[0], '');
    } else {
        const eMatch2 = _eText.match(/\s*\(\s*(?:Asked in\s+|Note:\s+)?(JEE.*?)\s*\)\s*$/i);
        if (eMatch2) {
          _examTag = eMatch2[1];
          _eText = _eText.replace(eMatch2[0], '');
        }
    }
  }

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
                <h1 className="text-[10px] md:text-sm font-black text-emerald-950 tracking-tight leading-tight uppercase truncate max-w-[80px] sm:max-w-[120px] md:max-w-none">{quizSet.title}</h1>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-8 pr-4 md:pr-10">
          <div className="flex flex-col items-center md:hidden">
             <span className="text-[7px] font-black uppercase tracking-widest text-emerald-700/40 leading-none mb-1">{subjectId === 'pyq' ? 'Elapsed' : 'Grand Timer'}</span>
             <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
               <Clock size={10} className="text-primary animate-pulse" />
               <span className="text-[10px] font-black text-emerald-950 tabular-nums">{formatTime(timeLeft)}</span>
             </div>
          </div>

          <button 
            onClick={() => setShowSubmitAlert(true)}
            className="md:hidden bg-primary text-white px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-lg shadow-primary/20 border border-white/10"
          >
            Submit
          </button>

          <div className="flex flex-col items-center sm:items-end hidden md:flex">
             <span className="text-[8px] font-black uppercase tracking-widest text-emerald-700/40 leading-none mb-1 md:mb-2 hidden md:block">{subjectId === 'pyq' ? 'Time Elapsed' : 'T-Minus Remaining'}</span>
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
              {subjectId === 'mock-tests' || subjectId === 'pyq' ? (
                <>
                  <button 
                    onClick={() => setCurrentIdx(0)}
                    className={cn(
                      "px-4 md:px-10 py-2.5 md:py-3 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 shrink-0 transition-all",
                      currentIdx < 25 ? "bg-emerald-950 text-white shadow-xl shadow-emerald-950/20" : "bg-emerald-100/50 text-emerald-900/60 hover:bg-emerald-100/80"
                    )}
                  >
                     <div className={cn("w-1.5 h-1.5 md:w-2 md:h-2 rounded-full", currentIdx < 25 ? "bg-emerald-400 animate-[pulse_2s_infinite]" : "bg-emerald-900/20")} />
                     PHYSICS
                  </button>
                  <button 
                    onClick={() => setCurrentIdx(25)}
                    className={cn(
                      "px-4 md:px-10 py-2.5 md:py-3 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 shrink-0 transition-all",
                      currentIdx >= 25 && currentIdx < 50 ? "bg-emerald-950 text-white shadow-xl shadow-emerald-950/20" : "bg-emerald-100/50 text-emerald-900/60 hover:bg-emerald-100/80"
                    )}
                  >
                     <div className={cn("w-1.5 h-1.5 md:w-2 md:h-2 rounded-full", currentIdx >= 25 && currentIdx < 50 ? "bg-emerald-400 animate-[pulse_2s_infinite]" : "bg-emerald-900/20")} />
                     CHEMISTRY
                  </button>
                  <button 
                    onClick={() => setCurrentIdx(50)}
                    className={cn(
                      "px-4 md:px-10 py-2.5 md:py-3 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 shrink-0 transition-all",
                      currentIdx >= 50 ? "bg-emerald-950 text-white shadow-xl shadow-emerald-950/20" : "bg-emerald-100/50 text-emerald-900/60 hover:bg-emerald-100/80"
                    )}
                  >
                     <div className={cn("w-1.5 h-1.5 md:w-2 md:h-2 rounded-full", currentIdx >= 50 ? "bg-emerald-400 animate-[pulse_2s_infinite]" : "bg-emerald-900/20")} />
                     MATHEMATICS
                  </button>
                </>
              ) : (
                <button className="px-4 md:px-10 py-2.5 md:py-3 bg-emerald-950 text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-xl md:rounded-2xl shadow-xl shadow-emerald-950/20 flex items-center gap-2 md:gap-3 border border-white/5 shrink-0">
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 animate-[pulse_2s_infinite]" />
                   SECTOR: {subjectId}
                </button>
              )}
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
                      <div className="flex items-center gap-3 md:gap-6 w-full">
                        <div className="flex flex-col">
                          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-emerald-800/40 mb-1">Current Sector</span>
                          <h2 className="text-xl md:text-2xl font-black heading-display text-emerald-950 uppercase italic">Question {currentIdx + 1}<span className="text-primary not-italic">.0</span></h2>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-950 px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black text-white border border-white/10 shadow-lg shadow-emerald-950/20">
                          <Clock size={12} className="text-emerald-400" />
                          TIME: {formatShortTime(questionTime)}
                        </div>
                        {_examTag && (
                          <div className="ml-auto inline-flex items-center gap-1.5 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200">
                             <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                             <span className="text-[10px] font-black text-purple-900 uppercase tracking-widest leading-none">{_examTag}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 md:gap-4">
                         <button onClick={() => setIsReportModalOpen(true)} className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-red-300 hover:text-red-500 hover:bg-red-50 transition-all" title="Report Issue"><AlertCircle size={18} className="md:size-20" /></button>
                         <button onClick={() => setIsInfoModalOpen(true)} className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-emerald-300 hover:text-primary hover:bg-emerald-50 transition-all" title="Test Information"><Info size={18} className="md:size-20" /></button>
                      </div>
                   </div>

                   <div className="text-xl md:text-2xl text-emerald-950 font-black heading-display mb-8 md:mb-16 leading-relaxed whitespace-pre-wrap tracking-tight">
                      <ReactMarkdown 
                        remarkPlugins={[remarkMath, remarkGfm]} 
                        rehypePlugins={[rehypeKatex]}
                      >
                        {_qText}
                      </ReactMarkdown>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      {(currentQuestion.type === 'integer' || !currentQuestion.options || currentQuestion.options.length === 0) ? (
                        <div className="flex flex-col items-start gap-4 col-span-1 sm:col-span-2">
                          <label className="text-sm font-black uppercase tracking-widest text-emerald-800">Numerical Value Answer</label>
                          <input 
                            type="number"
                            disabled={solutionViewed[currentQuestion.id]}
                            value={answers[currentQuestion.id] === null ? '' : answers[currentQuestion.id]}
                            onChange={(e) => {
                              if (!solutionViewed[currentQuestion.id]) {
                                const val = e.target.value === '' ? null : Number(e.target.value);
                                setAnswers(prev => ({ ...prev, [currentQuestion.id]: val }));
                              }
                            }}
                            className={cn(
                              "w-full max-w-sm px-6 py-4 bg-white border-2 rounded-2xl md:rounded-[2rem] text-xl font-bold text-emerald-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 transition-all",
                              solutionViewed[currentQuestion.id] 
                                ? (answers[currentQuestion.id] === currentQuestion.answer ? "border-emerald-500 bg-emerald-50" : "border-red-500 bg-red-50")
                                : "border-emerald-100 focus:border-emerald-500 hover:border-emerald-200"
                            )}
                            placeholder="Enter your integer answer"
                          />
                          {showSolution && answers[currentQuestion.id] !== currentQuestion.answer && (
                            <div className="px-4 py-2 bg-emerald-500/10 text-emerald-700 rounded-xl text-sm font-bold border border-emerald-500/20">
                              Correct Answer: {currentQuestion.answer}
                            </div>
                          )}
                        </div>
                      ) : (
                        currentQuestion.options.map((option, idx) => {
                          const isCorrect = idx === currentQuestion.answer;
                          const isSelected = answers[currentQuestion.id] === idx;
                          
                          return (
                            <label key={idx} className={cn(
                              "flex items-center gap-4 md:gap-8 p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] transition-all border-2 relative overflow-hidden group",
                              !solutionViewed[currentQuestion.id] ? "cursor-pointer" : "cursor-default opacity-80",
                              answers[currentQuestion.id] === idx 
                                ? (showSolution ? "border-emerald-50 bg-white" : "border-primary bg-white shadow-2xl shadow-primary/10 -translate-y-1")
                                : (showSolution ? "border-emerald-50" : "border-emerald-50 hover:bg-white hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5"),
                              showSolution && isCorrect && "border-emerald-500 bg-emerald-50/50 opacity-100",
                              showSolution && isSelected && !isCorrect && "border-red-500 bg-red-50/50 opacity-100"
                            )}>
                              <div className={cn(
                                "w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border-2 flex items-center justify-center transition-all font-black text-sm md:text-base shadow-sm shrink-0",
                                answers[currentQuestion.id] === idx 
                                  ? (showSolution ? "border-emerald-100 text-emerald-300" : "border-primary bg-primary text-white scale-110 shadow-primary/20")
                                  : (showSolution ? "border-emerald-100 text-emerald-300" : "border-emerald-100 text-emerald-300 group-hover:border-emerald-300 group-hover:text-emerald-500"),
                                showSolution && isCorrect && "border-emerald-500 bg-emerald-500 text-white",
                                showSolution && isSelected && !isCorrect && "border-red-500 bg-red-500 text-white"
                              )}>
                                {idx + 1}
                              </div>
                              <span className={cn(
                                "text-base md:text-xl font-bold text-emerald-950 transition-transform tracking-tight flex-1",
                                !solutionViewed[currentQuestion.id] && "group-hover:translate-x-1"
                              )}>
                                <ReactMarkdown 
                                  remarkPlugins={[remarkMath, remarkGfm]} 
                                  rehypePlugins={[rehypeKatex]}
                                >
                                  {option}
                                </ReactMarkdown>
                              </span>
                              <input 
                                type="radio" 
                                name="quiz-option" 
                                className="sr-only"
                                disabled={solutionViewed[currentQuestion.id]}
                                checked={answers[currentQuestion.id] === idx}
                                onChange={() => {
                                  if (!solutionViewed[currentQuestion.id]) {
                                    setAnswers(prev => ({ ...prev, [currentQuestion.id]: idx }));
                                  }
                                }}
                              />
                              
                              {answers[currentQuestion.id] === idx && !showSolution && (
                                <motion.div 
                                  layoutId="active-bg"
                                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -z-10"
                                />
                              )}
                            </label>
                          );
                        })
                      )}
                   </div>

                    {showSolution && (
                      <div className="space-y-6 mt-8 md:mt-16">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-6 md:p-10 bg-emerald-950 rounded-3xl md:rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
                        >
                           <div className="relative z-10 markdown-body">
                              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/30 mb-4 md:mb-6 border-b border-white/5 pb-4">Internal Mission Log: Solution</p>
                              <div className="text-white/90 font-medium text-sm md:text-lg italic whitespace-pre-wrap">
                                  <ReactMarkdown 
                                    remarkPlugins={[remarkMath, remarkGfm]} 
                                    rehypePlugins={[rehypeKatex]}
                                  >
                                    {_eText || "No expert breakdown available for this engagement."}
                                  </ReactMarkdown>
                              </div>
                           </div>
                           <div className="absolute top-0 right-0 p-10 opacity-[0.03] hidden md:block">
                              <HelpCircle size={200} />
                           </div>
                        </motion.div>

                        {(isAiLoading || aiAnalysis[currentQuestion.id]) && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-emerald-950 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 text-white shadow-2xl relative overflow-hidden"
                          >
                             {/* Tactical Grid Background */}
                             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                             </div>

                             <div className="relative z-10 p-6 md:p-12">
                                <div className="flex items-center justify-between mb-8 md:mb-10 border-b border-white/5 pb-6">
                                  <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-primary/20">
                                      <Sparkles className="text-primary animate-pulse" size={24} />
                                    </div>
                                    <div>
                                      <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary leading-none mb-2 italic">AI Concept Explanation</p>
                                      <h3 className="text-lg md:text-2xl font-black heading-display uppercase tracking-tight italic">Step-by-step <span className="text-primary not-italic">Solution</span></h3>
                                    </div>
                                  </div>
                                  <div className="hidden md:flex flex-col items-end">
                                    <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">AXIOM Live Engine</span>
                                    </div>
                                    <p className="text-[8px] font-bold text-white/20 uppercase tracking-[0.4em] mt-1">Status: Analyzing Problem</p>
                                  </div>
                                </div>

                                {isAiLoading ? (
                                  <div className="space-y-6 animate-pulse">
                                    <div className="h-6 bg-white/10 rounded-full w-3/4" />
                                    <div className="space-y-3">
                                       <div className="h-3 bg-white/5 rounded-full w-full" />
                                       <div className="h-3 bg-white/5 rounded-full w-5/6" />
                                       <div className="h-3 bg-white/5 rounded-full w-4/6" />
                                    </div>
                                    <div className="h-40 bg-white/5 rounded-3xl w-full border border-white/5" />
                                  </div>
                                ) : (
                                  <div className="prose prose-invert prose-emerald prose-sm md:prose-lg max-w-none prose-headings:text-primary prose-headings:uppercase prose-headings:tracking-tighter prose-headings:italic prose-pre:bg-black/40 prose-pre:backdrop-blur-xl prose-pre:text-emerald-50 prose-pre:rounded-[2rem] prose-pre:border prose-pre:border-white/5">
                                    <ReactMarkdown 
                                      remarkPlugins={[remarkMath, remarkGfm]} 
                                      rehypePlugins={[rehypeKatex]}
                                    >
                                      {aiAnalysis[currentQuestion.id]}
                                    </ReactMarkdown>
                                  </div>
                                )}

                                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                                   <div className="flex items-center gap-3">
                                      <Activity size={14} className="text-primary/40" />
                                      <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Strategic Output Validated</span>
                                   </div>
                                   <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                                      <Zap size={10} className="text-primary/60" />
                                      <span className="text-[8px] font-black uppercase tracking-widest text-white/40 italic">Priority: Concept Mastery</span>
                                   </div>
                                </div>
                             </div>
                             
                             <div className="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none rotate-12">
                                <BrainCircuit size={400} />
                             </div>
                          </motion.div>
                        )}
                      </div>
                   )}
                </motion.div>
              </AnimatePresence>
           </div>

           {/* Controls Footer */}
           {aiLimitError && (
             <div className="bg-rose-50 border-t border-b border-rose-100 px-4 py-2 text-rose-700 text-[10px] md:text-xs font-bold text-center w-full uppercase tracking-wider animate-pulse z-50">
               ⚠️ {aiLimitError}
             </div>
           )}
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
                  disabled={currentQuestion ? solutionViewed[currentQuestion.id] : false}
                  className="px-3 md:px-5 py-2 md:py-2 bg-white text-emerald-900 border-2 border-emerald-50 text-[9px] md:text-[9px] font-black uppercase rounded-xl hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shrink-0"
                 >
                   Clear
                 </button>
                 
                 {answers[currentQuestion.id] !== null && subjectId !== 'mock-tests' && subjectId !== 'pyq' && (
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        if (!showSolution) {
                           setSolutionViewed(prev => ({ ...prev, [currentQuestion.id]: true }));
                        }
                        setShowSolution(!showSolution);
                      }}
                      className="px-2 md:px-4 py-1.5 md:py-1 bg-white text-emerald-950 text-[8px] md:text-[8px] font-black uppercase rounded-lg md:rounded-lg shadow-sm hover:bg-emerald-50 transition-all flex items-center justify-center gap-1.5 border-2 border-emerald-100 shrink-0"
                    >
                       <Info size={10} className="md:size-10" />
                       <span className="hidden sm:inline">{showSolution ? 'Hide Info' : 'Solution'}</span>
                    </button>
                    <button 
                      onClick={handleAiExplain}
                      disabled={isAiLoading}
                      className="px-2 md:px-4 py-1.5 md:py-1 bg-emerald-950 text-white text-[8px] md:text-[8px] font-black uppercase rounded-lg md:rounded-lg shadow-lg shadow-emerald-950/20 hover:bg-black transition-all flex items-center justify-center gap-1.5 border-2 border-emerald-800 shrink-0 disabled:opacity-50"
                    >
                       {isAiLoading ? <Loader2 size={10} className="animate-spin" /> : <Sparkles size={10} className="text-primary" />}
                       <span className="hidden sm:inline">{aiAnalysis[currentQuestion.id] ? 'AI Insight' : 'AI Analysis'}</span>
                    </button>
                  </div>
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
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Mastery Palette</span>
              <button onClick={() => setIsMenuOpen(false)} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                 <X size={20} />
              </button>
           </div>
           
           <div className="p-3 md:p-4 shrink-0 bg-emerald-50/30">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                 <div className="w-1 md:w-1.5 h-4 md:h-5 bg-primary rounded-full" />
                 <h3 className="text-[9px] md:text-[10px] font-black text-emerald-950 uppercase tracking-[0.3em]">Telemetry</h3>
              </div>
              
              <div className="bg-white rounded-[1rem] md:rounded-[1.5rem] p-3 md:p-4 border border-emerald-100 shadow-sm space-y-2 md:space-y-3">
                <div className="flex justify-between items-center bg-primary/5 p-2 md:p-3 rounded-xl border border-primary/10">
                   <div className="flex flex-col">
                      <span className="text-[7px] font-black uppercase tracking-[0.2em] text-primary/40">Total Remaining</span>
                      <span className="text-base md:text-lg font-black text-primary tabular-nums">{formatTime(timeLeft)}</span>
                   </div>
                   <Clock size={16} className="text-primary animate-pulse" />
                </div>

                <div className="flex justify-between items-center">
                  <div className="space-y-0.5">
                    <p className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-emerald-800/40">Engagement</p>
                    <p className="text-lg md:text-xl font-black heading-display text-emerald-950">{stats.answered}<span className="text-[10px] text-emerald-300">/{quizSet.questions.length}</span></p>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Activity size={14} className="md:size-16 text-primary animate-pulse" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-emerald-50/50 p-2 md:p-2.5 rounded-lg border border-emerald-100/50">
                    <p className="text-[7px] font-black uppercase text-emerald-700/50 mb-0.5">Reviewed</p>
                    <p className="text-sm md:text-base font-black text-orange-600">{stats.marked}</p>
                  </div>
                  <div className="bg-red-50/50 p-2 md:p-2.5 rounded-lg border border-red-100/50">
                    <p className="text-[7px] font-black uppercase text-red-700/50 mb-0.5">Skipped</p>
                    <p className="text-sm md:text-base font-black text-red-600">{stats.notAnswered}</p>
                  </div>
                </div>
              </div>
           </div>

           <div className="p-6 md:p-8 flex-1 overflow-y-auto">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h2 className="text-[9px] md:text-[10px] font-black text-emerald-800/40 tracking-[0.3em] md:tracking-[0.4em] uppercase">Mastery Palette</h2>
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
                onClick={() => setShowSubmitAlert(true)}
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

      {/* Submit Confirmation Alert */}
      <AnimatePresence>
        {showSubmitAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2rem] p-6 max-w-sm w-full shadow-2xl overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500" />
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-2xl font-black text-emerald-950 heading-display uppercase tracking-tight mb-2">Submit Test?</h3>
              <p className="text-emerald-900/60 font-medium text-sm mb-8">
                Are you sure you want to submit your test? Make sure you have reviewed all your answers.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowSubmitAlert(false)}
                  className="flex-1 px-4 py-3 bg-emerald-50 text-emerald-900 font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-emerald-100 transition-colors"
                >
                  Review
                </button>
                <button
                  onClick={() => {
                    setShowSubmitAlert(false);
                    handleFinish();
                  }}
                  className="flex-1 px-4 py-3 bg-red-500 text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20"
                >
                  Submit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Report Issue Modal */}
      <AnimatePresence>
        {isReportModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-emerald-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setIsReportModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-emerald-900/40 hover:text-emerald-950 hover:bg-emerald-50 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-2xl font-black text-emerald-950 heading-display uppercase tracking-tight mb-2">Report Issue</h3>
              <p className="text-emerald-900/60 font-medium text-sm mb-6 leading-relaxed">
                Found a mistake in the question, options, or solution? Let us know and we'll fix it.
              </p>
              
              {reportSuccess ? (
                <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-200 font-bold text-center">
                  Report submitted successfully! Thank you.
                </div>
              ) : (
                <form onSubmit={handleReportSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-2">Describe the issue</label>
                    <textarea 
                      value={reportDescription}
                      onChange={(e) => setReportDescription(e.target.value)}
                      placeholder="e.g. Option B and C are the same, or the solution uses wrong formula..."
                      className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 text-sm font-medium focus:outline-none focus:border-primary/50 focus:bg-white transition-colors min-h-[120px] resize-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmittingReport || !reportDescription.trim()}
                    className="w-full py-4 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-600 active:scale-[0.98] transition-all disabled:opacity-50 disabled:active:scale-100 shadow-xl shadow-primary/20 flex justify-center items-center h-14"
                  >
                    {isSubmittingReport ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      "Submit Report"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Information Modal */}
      <AnimatePresence>
        {isInfoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-emerald-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setIsInfoModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-emerald-900/40 hover:text-emerald-950 hover:bg-emerald-50 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Info size={32} />
              </div>
              <h3 className="text-2xl font-black text-emerald-950 heading-display uppercase tracking-tight mb-2">Test Information</h3>
              <p className="text-emerald-900/40 font-bold text-xs uppercase tracking-widest mb-6 border-b border-emerald-50 pb-2">
                {quizSet?.title || "Practice Set"}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center bg-emerald-50/50 px-4 py-3 rounded-xl border border-emerald-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60">Total Questions</span>
                  <span className="text-sm font-black text-emerald-950">{quizSet?.questions.length || 0}</span>
                </div>
                <div className="flex justify-between items-center bg-emerald-50/50 px-4 py-3 rounded-xl border border-emerald-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60">Duration</span>
                  <span className="text-sm font-black text-emerald-950">
                    {quizSet ? (subjectId === 'pyq' ? 'No Time Limit' : formatTime(quizSet.duration ? quizSet.duration * 60 : quizSet.questions.length * 90)) : "N/A"}
                  </span>
                </div>

                <div className="pt-2">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-3">Marking Scheme</h4>
                  
                  <div className="space-y-3">
                    <div className="border border-emerald-100 rounded-xl p-4 bg-white">
                      <p className="text-[11px] font-black uppercase tracking-wider text-emerald-950 mb-2">Single Choice (MCQ)</p>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-emerald-50 p-2 rounded-lg">
                          <p className="text-[9px] font-black text-emerald-800 uppercase tracking-widest">Correct</p>
                          <p className="text-xs font-black text-emerald-600">+4</p>
                        </div>
                        <div className="bg-red-50 p-2 rounded-lg">
                          <p className="text-[9px] font-black text-red-800 uppercase tracking-widest">Incorrect</p>
                          <p className="text-xs font-black text-red-600">-1</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <p className="text-[9px] font-black text-gray-800 uppercase tracking-widest">Left</p>
                          <p className="text-xs font-black text-gray-600">0</p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-emerald-100 rounded-xl p-4 bg-white">
                      <p className="text-[11px] font-black uppercase tracking-wider text-emerald-950 mb-2">Numerical Value</p>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-emerald-50 p-2 rounded-lg">
                          <p className="text-[9px] font-black text-emerald-800 uppercase tracking-widest">Correct</p>
                          <p className="text-xs font-black text-emerald-600">+4</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg col-span-2">
                          <p className="text-[9px] font-black text-gray-800 uppercase tracking-widest">Incorrect or Left</p>
                          <p className="text-xs font-black text-gray-600">0 (No Negative Marking)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsInfoModalOpen(false)}
                className="w-full py-4 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-600 active:scale-[0.98] transition-all shadow-xl shadow-primary/20 flex justify-center items-center h-14 cursor-pointer"
              >
                Return to Test
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
