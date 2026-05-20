import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, BookOpen, AlertCircle, CheckCircle2, Trash2, ArrowRight, Filter } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { cn } from '../lib/utils';

export default function ErrorBook() {
  const navigate = useNavigate();
  const [errorBook, setErrorBook] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('errorBook') || '[]');
      setErrorBook(data);
    } catch(e) {}
  }, []);

  const subjects = useMemo(() => {
    const subs = new Set<string>();
    errorBook.forEach(item => {
      if (item.subjectId) subs.add(item.subjectId);
    });
    return Array.from(subs);
  }, [errorBook]);

  const filteredErrorBook = useMemo(() => {
    if (selectedSubject === 'all') return errorBook;
    return errorBook.filter(item => item.subjectId === selectedSubject);
  }, [errorBook, selectedSubject]);

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowSolution(false);
  }, [selectedSubject]);

  const handleClear = () => {
    if (confirm("Are you sure you want to clear your Error Book?")) {
      localStorage.removeItem('errorBook');
      setErrorBook([]);
    }
  };

  const handleRemoveCurrent = () => {
    const activeQuestion = filteredErrorBook[currentIndex];
    if (!activeQuestion) return;
    const newBook = errorBook.filter((item) => item.id !== activeQuestion.id);
    localStorage.setItem('errorBook', JSON.stringify(newBook));
    setErrorBook(newBook);
    
    // Check filtered questions after removal
    const remainingInFiltered = selectedSubject === 'all' ? newBook : newBook.filter(item => item.subjectId === selectedSubject);
    if (currentIndex >= remainingInFiltered.length && remainingInFiltered.length > 0) {
      setCurrentIndex(remainingInFiltered.length - 1);
    }
    setSelectedAnswer(null);
    setShowSolution(false);
  };

  const activeQuestion = filteredErrorBook[currentIndex];

  const handleNext = () => {
    if (currentIndex < filteredErrorBook.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedAnswer(null);
      setShowSolution(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(c => c - 1);
      setSelectedAnswer(null);
      setShowSolution(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Link to="/analytics" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all text-emerald-900 border border-emerald-50 hover:bg-emerald-50 shrink-0">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black heading-display uppercase tracking-tight text-[#bf360c] flex items-center gap-2">
              <BookOpen size={24} /> <span className="italic">Error</span> Book
            </h1>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#d84315]/50 mt-1">Re-solve and Fortify</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
           {errorBook.length > 0 && subjects.length > 0 && (
             <div className="flex bg-white rounded-xl shadow-sm border border-emerald-50 p-1 flex-1 sm:flex-auto">
               <button
                 onClick={() => setSelectedSubject('all')}
                 className={cn(
                   "px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap flex-1 sm:flex-auto text-center",
                   selectedSubject === 'all' ? "bg-emerald-100 text-emerald-900" : "text-emerald-600/60 hover:bg-emerald-50/50 hover:text-emerald-800"
                 )}
               >
                 All
               </button>
               {subjects.map(sub => (
                 <button
                   key={sub}
                   onClick={() => setSelectedSubject(sub)}
                   className={cn(
                     "px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap flex-1 sm:flex-auto text-center",
                     selectedSubject === sub ? "bg-emerald-100 text-emerald-900" : "text-emerald-600/60 hover:bg-emerald-50/50 hover:text-emerald-800"
                   )}
                 >
                   {sub}
                 </button>
               ))}
             </div>
           )}
           {errorBook.length > 0 && (
             <button 
               onClick={handleClear}
               className="px-4 py-3 sm:py-2 bg-red-50 text-red-600 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-red-100 transition-colors border border-red-100 flex items-center justify-center gap-2 shrink-0"
             >
               <Trash2 size={14} className="hidden sm:block" /> <span className="sm:hidden">Clear</span> <span className="hidden sm:inline">All</span>
             </button>
           )}
        </div>
      </div>

      {filteredErrorBook.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-12 text-center border border-emerald-100 shadow-sm flex flex-col items-center justify-center gap-4 min-h-[40vh]">
           <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-300">
              <CheckCircle2 size={40} />
           </div>
           <h2 className="text-xl font-bold text-emerald-900">Your Error Book is Empty{selectedSubject !== 'all' ? ' for this subject' : ''}!</h2>
           <p className="text-emerald-700/60 max-w-sm">You haven't made any mistakes yet or you've cleared them all. Keep solving missions to build up your concept radar.</p>
           {selectedSubject !== 'all' && (
             <button 
               onClick={() => setSelectedSubject('all')}
               className="mt-4 px-6 py-3 bg-emerald-100 text-emerald-900 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-200 transition-colors"
             >
               View All Subjects
             </button>
           )}
           {selectedSubject === 'all' && (
             <Link to="/subjects" className="mt-4 px-6 py-3 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
               Start a Mission
             </Link>
           )}
        </div>
      ) : activeQuestion && (
        <div className="grid grid-cols-1 gap-6">
           {/* Question Info */}
           <div className="flex items-center justify-between px-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700/40">
                 Question {currentIndex + 1} of {filteredErrorBook.length}
              </span>
              <div className="flex gap-2">
                 <button 
                   onClick={handlePrev} 
                   disabled={currentIndex === 0}
                   className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm disabled:opacity-50 text-emerald-900 border border-emerald-50"
                 >
                   <ArrowLeft size={16} />
                 </button>
                 <button 
                   onClick={handleNext} 
                   disabled={currentIndex === filteredErrorBook.length - 1}
                   className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm disabled:opacity-50 text-emerald-900 border border-emerald-50"
                 >
                   <ArrowRight size={16} />
                 </button>
              </div>
           </div>

           {/* Quiz Card */}
           <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-emerald-100 shadow-xl shadow-emerald-900/5 relative">
              <div className="prose prose-emerald max-w-none mb-10 text-lg md:text-2xl font-semibold text-emerald-950 leading-relaxed md:leading-relaxed selection:bg-primary/20">
                 <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                   {activeQuestion.question || ''}
                 </ReactMarkdown>
              </div>

              <div className="grid grid-cols-1 gap-4">
                 {activeQuestion.options?.map((opt: string, idx: number) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === activeQuestion.answer;
                    
                    return (
                       <label key={idx} className={cn(
                          "flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl md:rounded-[2rem] transition-all border-2 relative group",
                          !showSolution ? "cursor-pointer hover:border-emerald-200" : "cursor-default",
                          isSelected && !showSolution ? "border-primary bg-white shadow-xl shadow-primary/10" : "border-emerald-50",
                          showSolution && isCorrect && "border-emerald-500 bg-emerald-50",
                          showSolution && isSelected && !isCorrect && "border-red-500 bg-red-50"
                       )}>
                          <div className={cn(
                             "w-10 h-10 rounded-xl border-2 flex items-center justify-center font-black transition-colors shrink-0",
                             isSelected && !showSolution ? "border-primary bg-primary text-white" : "border-emerald-100 text-emerald-300",
                             showSolution && isCorrect && "border-emerald-500 bg-emerald-500 text-white",
                             showSolution && isSelected && !isCorrect && "border-red-500 bg-red-500 text-white"
                          )}>
                             {idx + 1}
                          </div>
                          <div className="font-semibold text-emerald-950 flex-1">
                             <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                {String(opt)}
                             </ReactMarkdown>
                          </div>
                          <input 
                             type="radio" 
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

              <div className="mt-10 pt-8 border-t border-emerald-50 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
                 {showSolution ? (
                    <div className="flex-1 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 w-full mb-4 sm:mb-0">
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-700/50 mb-2">Explanation</h4>
                       <div className="text-sm font-medium text-emerald-900/80 prose prose-sm prose-emerald max-w-none">
                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                             {activeQuestion.explanation || "No explanation provided for this question."}
                          </ReactMarkdown>
                       </div>
                    </div>
                 ) : (
                    <button 
                       onClick={() => {
                          if (selectedAnswer !== null) setShowSolution(true);
                          else alert("Select an option first to verify.");
                       }}
                       disabled={selectedAnswer === null}
                       className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100"
                    >
                       Verify Answer
                    </button>
                 )}
                 <button 
                   onClick={handleRemoveCurrent}
                   className="w-full sm:w-auto px-6 py-4 bg-white text-emerald-600 border-2 border-emerald-50 hover:bg-emerald-50 rounded-xl font-black text-[10px] uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                 >
                   <CheckCircle2 size={16} /> Mark as Mastered
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
