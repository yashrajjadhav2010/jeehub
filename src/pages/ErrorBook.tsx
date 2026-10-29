import React, { useState, useEffect, useMemo, Component, ErrorInfo, ReactNode } from 'react';
import { ArrowLeft, BookOpen, AlertCircle, CheckCircle2, Trash2, ArrowRight, Sparkles, HelpCircle, Lightbulb, RefreshCw, MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { cn } from '../lib/utils';
import { AxiomMascot } from '../components/AxiomMascot';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBookBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBook render error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-xl mx-auto my-12 p-8 bg-white rounded-3xl border border-red-100 shadow-xl text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
            <AlertCircle size={28} />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Error Book Display Recovery</h2>
          <p className="text-sm text-slate-600">
            A rendering error occurred while loading this problem card. You can safely reset your view or clear corrupted records.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-emerald-700"
            >
              <RefreshCw size={14} /> Reload Page
            </button>
            <button
              onClick={() => {
                try {
                  localStorage.removeItem('errorBook');
                } catch (e) {}
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="px-5 py-2.5 bg-red-50 text-red-700 rounded-xl text-xs font-bold uppercase tracking-wider border border-red-200 hover:bg-red-100"
            >
              Reset Error Book
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function parseStoredErrorBook(): any[] {
  try {
    const raw = localStorage.getItem('errorBook');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.filter(item => item && typeof item === 'object');
    }
    if (parsed && typeof parsed === 'object') {
      return Object.values(parsed).filter((item: any) => item && typeof item === 'object');
    }
    return [];
  } catch (err) {
    console.warn("Failed to parse errorBook from localStorage:", err);
    return [];
  }
}

function getCorrectOptionIndex(q: any): number | null {
  if (!q) return null;
  const val = q.correctOption !== undefined ? q.correctOption : q.answer;
  if (typeof val === 'number') return val;
  if (typeof val === 'string') {
    const clean = val.trim().toLowerCase();
    const parsed = parseInt(clean, 10);
    if (!isNaN(parsed) && parsed >= 0 && parsed < (q.options?.length || 4)) {
      return parsed;
    }
    if (clean === 'a' || clean.startsWith('(a)')) return 0;
    if (clean === 'b' || clean.startsWith('(b)')) return 1;
    if (clean === 'c' || clean.startsWith('(c)')) return 2;
    if (clean === 'd' || clean.startsWith('(d)')) return 3;
    if (Array.isArray(q.options)) {
      const idx = q.options.findIndex((opt: string) => String(opt).trim().toLowerCase() === clean);
      if (idx !== -1) return idx;
    }
  }
  return null;
}

export default function ErrorBook() {
  return (
    <ErrorBookBoundary>
      <ErrorBookContent />
    </ErrorBookBoundary>
  );
}

function ErrorBookContent() {
  const navigate = useNavigate();
  const [errorBook, setErrorBook] = useState<any[]>(() => parseStoredErrorBook());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  useEffect(() => {
    setErrorBook(parseStoredErrorBook());
  }, []);

  const subjects = useMemo(() => {
    const subs = new Set<string>();
    if (Array.isArray(errorBook)) {
      errorBook.forEach(item => {
        if (item?.subjectId && typeof item.subjectId === 'string') {
          subs.add(item.subjectId);
        }
      });
    }
    return Array.from(subs);
  }, [errorBook]);

  const filteredErrorBook = useMemo(() => {
    if (!Array.isArray(errorBook)) return [];
    if (selectedSubject === 'all') return errorBook;
    return errorBook.filter(item => item?.subjectId === selectedSubject);
  }, [errorBook, selectedSubject]);

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowSolution(false);
  }, [selectedSubject]);

  const safeIndex = useMemo(() => {
    if (filteredErrorBook.length === 0) return 0;
    return Math.min(Math.max(0, currentIndex), filteredErrorBook.length - 1);
  }, [currentIndex, filteredErrorBook.length]);

  const activeQuestion = filteredErrorBook[safeIndex] || null;

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear your Error Book?")) {
      try {
        localStorage.removeItem('errorBook');
      } catch (e) {}
      setErrorBook([]);
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setShowSolution(false);
    }
  };

  const handleRemoveCurrent = () => {
    if (!activeQuestion) return;
    const activeId = activeQuestion.id;
    const newBook = errorBook.filter(item => item && item.id !== activeId);
    try {
      localStorage.setItem('errorBook', JSON.stringify(newBook));
    } catch (e) {}
    setErrorBook(newBook);

    const remainingFiltered = selectedSubject === 'all' 
      ? newBook 
      : newBook.filter(item => item && item.subjectId === selectedSubject);
      
    if (safeIndex >= remainingFiltered.length && remainingFiltered.length > 0) {
      setCurrentIndex(remainingFiltered.length - 1);
    }
    setSelectedAnswer(null);
    setShowSolution(false);
  };

  const handleNext = () => {
    if (safeIndex < filteredErrorBook.length - 1) {
      setCurrentIndex(safeIndex + 1);
      setSelectedAnswer(null);
      setShowSolution(false);
    }
  };

  const handlePrev = () => {
    if (safeIndex > 0) {
      setCurrentIndex(safeIndex - 1);
      setSelectedAnswer(null);
      setShowSolution(false);
    }
  };

  const optionsList: string[] = useMemo(() => {
    if (activeQuestion && Array.isArray(activeQuestion.options)) {
      return activeQuestion.options.map((opt: any) => String(opt ?? ''));
    }
    return [];
  }, [activeQuestion]);

  const correctIndex = useMemo(() => {
    return getCorrectOptionIndex(activeQuestion);
  }, [activeQuestion]);

  const questionText = typeof activeQuestion?.question === 'string'
    ? activeQuestion.question
    : String(activeQuestion?.question || '');

  const explanationText = typeof activeQuestion?.explanation === 'string'
    ? activeQuestion.explanation
    : typeof activeQuestion?.solution === 'string'
      ? activeQuestion.solution
      : 'No detailed step-by-step explanation was recorded for this problem.';

  const isMCQ = optionsList.length > 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500 pb-16">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Link 
            to="/analytics" 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all text-emerald-900 border border-emerald-50 hover:bg-emerald-50 shrink-0"
            title="Back to Analytics"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black heading-display uppercase tracking-tight text-[#bf360c] flex items-center gap-2">
              <BookOpen size={24} /> <span className="italic">Error</span> Book
            </h1>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#d84315]/70 mt-0.5">
              Re-solve, Fortify Concepts & Eliminate Weaknesses
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
          {errorBook.length > 0 && (
            <div className="flex bg-white rounded-xl shadow-sm border border-emerald-50 p-1 flex-1 sm:flex-auto">
              <button
                onClick={() => setSelectedSubject('all')}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap flex-1 sm:flex-auto text-center",
                  selectedSubject === 'all' ? "bg-emerald-100 text-emerald-900" : "text-emerald-600/60 hover:bg-emerald-50/50 hover:text-emerald-800"
                )}
              >
                All ({errorBook.length})
              </button>
              {subjects.map(sub => {
                const count = errorBook.filter(i => i?.subjectId === sub).length;
                return (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubject(sub)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap flex-1 sm:flex-auto text-center",
                      selectedSubject === sub ? "bg-emerald-100 text-emerald-900" : "text-emerald-600/60 hover:bg-emerald-50/50 hover:text-emerald-800"
                    )}
                  >
                    {sub} ({count})
                  </button>
                );
              })}
            </div>
          )}
          {errorBook.length > 0 && (
            <button 
              onClick={handleClear}
              className="px-4 py-3 sm:py-2 bg-red-50 text-red-600 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-red-100 transition-colors border border-red-100 flex items-center justify-center gap-2 shrink-0"
              title="Clear all saved errors"
            >
              <Trash2 size={14} className="hidden sm:block" /> 
              <span>Clear All</span>
            </button>
          )}
        </div>
      </div>

      {filteredErrorBook.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-8 sm:p-12 text-center border border-emerald-100 shadow-sm flex flex-col items-center justify-center gap-4 min-h-[42vh]">
          <div className="relative p-2.5 rounded-3xl bg-gradient-to-b from-orange-50/80 via-white to-emerald-50/50 border border-orange-200/80 shadow-md">
            <AxiomMascot size="lg" />
            <div className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white rounded-full p-1 shadow-sm">
              <CheckCircle2 size={16} />
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
            Your Error Book is Clear{selectedSubject !== 'all' ? ` for ${selectedSubject}` : ''}!
          </h2>
          <p className="text-slate-600 max-w-md text-sm leading-relaxed">
            Zero pending mistakes! Axiom says you're mastering your concepts. Keep practicing PYQs or ask Axiom doubts anytime.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
            {selectedSubject !== 'all' ? (
              <button 
                onClick={() => setSelectedSubject('all')}
                className="px-6 py-3 bg-emerald-100 text-emerald-900 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-200 transition-colors"
              >
                View All Subjects
              </button>
            ) : (
              <Link 
                to="/subjects" 
                className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
              >
                Solve Practice Sets
              </Link>
            )}
            <Link 
              to="/doubt-solver" 
              className="px-6 py-3 bg-orange-50 text-orange-800 border border-orange-200 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-orange-100 transition-all flex items-center gap-2"
            >
              <div className="w-4 h-4 flex items-center justify-center overflow-visible">
                <AxiomMascot size="xs" />
              </div>
              <span>Ask Axiom AI</span>
            </Link>
          </div>
        </div>
      ) : activeQuestion && (
        <div className="grid grid-cols-1 gap-6">
          {/* Question Index & Controls */}
          <div className="flex items-center justify-between px-2 sm:px-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800/60 bg-emerald-50/80 px-3 py-1 rounded-full border border-emerald-100">
                Problem {safeIndex + 1} of {filteredErrorBook.length}
              </span>
              {activeQuestion.subjectId && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                  {activeQuestion.subjectId}
                </span>
              )}
              {activeQuestion.chapterId && (
                <span className="hidden md:inline-block text-[10px] font-semibold text-slate-400">
                  {activeQuestion.chapterId}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handlePrev} 
                disabled={safeIndex === 0}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm disabled:opacity-40 text-emerald-900 border border-emerald-100 hover:bg-emerald-50 transition-colors"
                title="Previous question"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={handleNext} 
                disabled={safeIndex === filteredErrorBook.length - 1}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm disabled:opacity-40 text-emerald-900 border border-emerald-100 hover:bg-emerald-50 transition-colors"
                title="Next question"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Problem Card */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-emerald-100 shadow-xl shadow-emerald-900/5 relative">
            {/* Question Text */}
            <div className="prose prose-emerald max-w-none mb-8 text-base md:text-xl font-medium text-slate-900 leading-relaxed selection:bg-primary/20">
              <ReactMarkdown 
                remarkPlugins={[remarkMath, remarkGfm]} 
                rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}
              >
                {questionText}
              </ReactMarkdown>
            </div>

            {/* MCQ Options or Numerical Banner */}
            {isMCQ ? (
              <div className="grid grid-cols-1 gap-3.5">
                {optionsList.map((opt: string, idx: number) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = correctIndex !== null && idx === correctIndex;
                  
                  return (
                    <label 
                      key={idx} 
                      className={cn(
                        "flex items-center gap-3.5 md:gap-5 p-4 md:p-5 rounded-2xl transition-all border-2 relative group",
                        !showSolution ? "cursor-pointer hover:border-emerald-200 hover:bg-emerald-50/20" : "cursor-default",
                        isSelected && !showSolution ? "border-primary bg-primary/5 shadow-md shadow-primary/5" : "border-slate-100 bg-white",
                        showSolution && isCorrect && "border-emerald-500 bg-emerald-50/70 shadow-sm",
                        showSolution && isSelected && !isCorrect && "border-red-500 bg-red-50/70"
                      )}
                    >
                      <div className={cn(
                        "w-9 h-9 rounded-xl border-2 flex items-center justify-center font-bold text-sm transition-colors shrink-0",
                        isSelected && !showSolution ? "border-primary bg-primary text-white" : "border-slate-200 text-slate-400 group-hover:border-slate-300",
                        showSolution && isCorrect && "border-emerald-500 bg-emerald-500 text-white",
                        showSolution && isSelected && !isCorrect && "border-red-500 bg-red-500 text-white"
                      )}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <div className="font-medium text-slate-800 flex-1 text-sm md:text-base leading-snug">
                        <ReactMarkdown 
                          remarkPlugins={[remarkMath, remarkGfm]} 
                          rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}
                        >
                          {opt}
                        </ReactMarkdown>
                      </div>
                      <input 
                        type="radio" 
                        name="errorbook-option"
                        className="sr-only" 
                        disabled={showSolution}
                        checked={isSelected}
                        onChange={() => {
                          if (!showSolution) setSelectedAnswer(idx);
                        }} 
                      />
                    </label>
                  );
                })}
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 flex items-start gap-3">
                <Lightbulb size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <span className="font-bold">Numerical Problem or Concept Doubt:</span> Review your notes and step-by-step resolution below to ensure complete clarity.
                </div>
              </div>
            )}

            {/* Bottom Solution & Actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-6">
              {showSolution ? (
                <div className="bg-emerald-50/60 p-6 md:p-8 rounded-2xl border border-emerald-100 w-full animate-in fade-in duration-300">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-emerald-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center overflow-visible shadow-xs">
                        <AxiomMascot size="xs" />
                      </div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-emerald-900">
                        Axiom Step-by-Step Solution & Breakdown
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold text-orange-700 bg-orange-100/90 px-2 py-0.5 rounded-full border border-orange-200/60 hidden sm:inline-block">
                      Axiom AI Verified
                    </span>
                  </div>
                  <div className="text-sm font-normal text-slate-800 prose prose-sm prose-emerald max-w-none leading-relaxed">
                    <ReactMarkdown 
                      remarkPlugins={[remarkMath, remarkGfm]} 
                      rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}
                    >
                      {explanationText}
                    </ReactMarkdown>
                  </div>
                </div>
              ) : null}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-auto">
                  {!showSolution ? (
                    <button 
                      onClick={() => {
                        if (isMCQ && selectedAnswer === null) {
                          alert("Please select an option first to test yourself, or click again to reveal the explanation.");
                          setShowSolution(true);
                          return;
                        }
                        setShowSolution(true);
                      }}
                      className="w-full sm:w-auto px-7 py-3.5 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-[0.15em] shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] transition-all"
                    >
                      {isMCQ && selectedAnswer !== null ? "Verify Selection" : "Reveal Solution"}
                    </button>
                  ) : (
                    <button 
                      onClick={() => setShowSolution(false)}
                      className="w-full sm:w-auto px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
                    >
                      Hide Solution
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => {
                      const qText = `I made an error on this problem from my Error Book:\n\n"${questionText}"\n\n${optionsList.length > 0 ? `Options:\n${optionsList.map((o, idx) => `(${String.fromCharCode(65 + idx)}) ${o}`).join('\n')}\n\n` : ''}Can you explain the underlying concept in simple terms, highlight the exact mistake/trap students usually fall into, and give a 30-second shortcut or memory tip?`;
                      navigate('/doubt-solver', { state: { query: qText } });
                    }}
                    className="w-full sm:w-auto px-5 py-3.5 bg-gradient-to-r from-orange-50 to-amber-50 text-orange-800 border-2 border-orange-200/90 hover:border-orange-300 hover:bg-orange-100/70 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                    title="Ask Axiom AI to explain traps and shortcuts"
                  >
                    <div className="w-5 h-5 flex items-center justify-center overflow-visible">
                      <AxiomMascot size="xs" />
                    </div>
                    <span>Ask Axiom AI</span>
                  </button>

                  <button 
                    onClick={handleRemoveCurrent}
                    className="w-full sm:w-auto px-5 py-3.5 bg-white text-emerald-700 border-2 border-emerald-200 hover:bg-emerald-50/70 rounded-xl font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                    title="Remove this problem from your error book"
                  >
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>Mark as Mastered</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
