import React, { useState, useRef, useEffect } from 'react';
import { Send, Cpu, Sparkles, AlertCircle, RotateCcw, BrainCircuit, MessageSquare, History, Activity, Zap, Binary, FlaskConical, Target, Loader2, User, ChevronLeft, ArrowRight, Trash2, Mic, MicOff, ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { solveDoubt } from '../services/aiService';
import { AxiomMascot } from '../components/AxiomMascot';
import { cn } from '../lib/utils';
import PeriodicTable from './PeriodicTable';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  image?: string;
}



const ThemeMicIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Capsule - Emerald gradient or primary color */}
    <rect x="9.5" y="3" width="5" height="10" rx="2.5" fill="url(#micCapsuleGrad)" />
    {/* Mid arch */}
    <path d="M6 11C6 14.3137 8.68629 17 12 17" stroke="url(#micArchGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17C15.3137 17 18 14.3137 18 11" stroke="url(#micArchGradRight)" strokeWidth="2" strokeLinecap="round" />
    {/* Base stand */}
    <path d="M12 17V21M9 21H15" stroke="url(#micStandGrad)" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="micCapsuleGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="micArchGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="micArchGradRight" x1="1" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#059669" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
      <linearGradient id="micStandGrad" x1="0" y1="1" x2="1" y2="1">
        <stop offset="0%" stopColor="#047857" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
  </svg>
);

export default function DoubtSolver() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [operatorName, setOperatorName] = useState('U');
  const [operatorPfp, setOperatorPfp] = useState<string | null>(null);
  const [dailyCount, setDailyCount] = useState(0);
  const [dailyImageCount, setDailyImageCount] = useState(0);

  const [suggestions, setSuggestions] = useState<any[]>([
    { title: "Newton's Laws", desc: "Complex pulley systems", icon: Target },
    { title: "Integration", desc: "Definite integrals of trig functions", icon: Binary },
    { title: "Organic Chem", desc: "SN1 vs SN2 mechanisms", icon: FlaskConical },
    { title: "Modern Physics", desc: "De Broglie wavelength", icon: Zap }
  ]);

  useEffect(() => {
    try {
      const errorBookRaw = localStorage.getItem('errorBook');
      if (errorBookRaw) {
        const errorBook = JSON.parse(errorBookRaw);
        if (errorBook.length > 0) {
          // Get unique chapterIds from recent errors
          const recentErrors = [...errorBook].reverse();
          const uniqueChapters = Array.from(new Set(recentErrors.map(item => item.chapterId).filter(Boolean))).slice(0, 4) as string[];
          
          if (uniqueChapters.length > 0) {
            const icons = [Target, Binary, FlaskConical, Zap];
            const newSuggestions: any[] = uniqueChapters.map((ch: string, i) => {
              const formattedTitle = ch.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
              return {
                title: formattedTitle,
                desc: "Review missed concepts from this topic",
                icon: icons[i % icons.length]
              };
            });
            
            // Fill the rest with default
            const defaults = [
              { title: "Newton's Laws", desc: "Complex pulley systems", icon: Target },
              { title: "Integration", desc: "Definite integrals of trig functions", icon: Binary },
              { title: "Organic Chem", desc: "SN1 vs SN2 mechanisms", icon: FlaskConical },
              { title: "Modern Physics", desc: "De Broglie wavelength", icon: Zap }
            ];
            
            while (newSuggestions.length < 4) {
               newSuggestions.push(defaults[newSuggestions.length]);
            }
            
            setSuggestions(newSuggestions.slice(0, 4));
          }
        }
      }
    } catch (e) {
      console.error(e);
    }

    try {
      const name = localStorage.getItem('operatorName');
      const pfp = localStorage.getItem('operatorPfp');
      if (name) setOperatorName(name.charAt(0).toUpperCase());
      if (pfp) setOperatorPfp(pfp);
    } catch (e) {
      console.error(e);
    }

    // Initialize/Check Daily Limit
    try {
      const today = new Date().toISOString().split('T')[0];
      const limitData = localStorage.getItem('axiom_usage_limit');
      if (limitData) {
        const parsed = JSON.parse(limitData);
        if (parsed.date === today) {
          setDailyCount(parsed.count || 0);
          setDailyImageCount(parsed.imageCount || 0);
        } else {
          localStorage.setItem('axiom_usage_limit', JSON.stringify({ date: today, count: 0, imageCount: 0 }));
          setDailyCount(0);
          setDailyImageCount(0);
        }
      } else {
        localStorage.setItem('axiom_usage_limit', JSON.stringify({ date: today, count: 0, imageCount: 0 }));
        setDailyCount(0);
        setDailyImageCount(0);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [placeholder, setPlaceholder] = useState('Ask Anything...');
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const toggleListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError("Speech recognition is not supported in this browser. Please try Chrome or Safari.");
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
    } else {
      try {
        const rec = new SpeechRecognition();
        rec.continuous = false;
        rec.interimResults = false;
        rec.lang = 'en-IN'; // Highly optimized for mixed Indian accents and JEE students

        rec.onstart = () => {
          setIsListening(true);
          setError(null);
        };

        rec.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          if (transcript) {
            setInput(prev => {
              const trimmed = prev.trim();
              return trimmed ? `${trimmed} ${transcript}` : transcript;
            });
          }
        };

        rec.onerror = (event: any) => {
          console.error("Speech recognition error", event.error);
          if (event.error === 'not-allowed') {
            setError("Microphone permission denied. Please enable microphone access.");
          } else if (event.error === 'no-speech' || event.error === 'aborted') {
            // Quietly handle silence or manual cancellation without presenting a loud error box
          } else {
            setError(`Speech recognition error: ${event.error}`);
          }
          setIsListening(false);
        };

        rec.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = rec;
        rec.start();
      } catch (e: any) {
        console.error(e);
        setError("Failed to start voice recognition.");
        setIsListening(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const placeholders = [
    "Ask Anything...",
    "Clarity today, Victory Tomorrow",
    "Mastering JEE, one doubt at a time.",
    "Solve complex equations instantly",
    "Axiom is ready to solve",
    "Physics, Chemistry or Maths?"
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % placeholders.length;
      setPlaceholder(placeholders[i]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('axiom_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) {
      if (messages.length > 0 || loading) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      } else {
        scrollRef.current.scrollTop = 0;
      }
    }
  }, [messages, loading]);

  const loadHistory = () => {
    const saved = localStorage.getItem('axiom_chat_history');
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setError("No saved history found.");
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (dailyImageCount >= 2) {
      setError('Daily image limit reached! You can only post 2 images per day.');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
    if ((!input.trim() && !selectedImage) || loading) return;

    const today = new Date().toISOString().split('T')[0];
    let usage = { date: today, count: 0, imageCount: 0 };
    try {
      const limitData = localStorage.getItem('axiom_usage_limit');
      if (limitData) {
        const parsed = JSON.parse(limitData);
        if (parsed.date === today) {
          usage = { count: parsed.count || 0, imageCount: parsed.imageCount || 0, date: today };
        }
      }
    } catch (e) {
      console.error(e);
    }

    if (usage.count >= 10) {
      setError("Daily limit reached! You have consumed your 10 free queries for today. Please come back tomorrow!");
      return;
    }
    if (selectedImage && usage.imageCount >= 2) {
      setError("Daily image limit reached! You can only post 2 images per day.");
      return;
    }

    const userMessage = input.trim();
    setInput('');
    const currentImage = selectedImage;
    removeImage();
    setError(null);
    
    const userMessageObj: Message = { role: 'user', content: userMessage, image: currentImage || undefined };
    const newMessages = [...messages, userMessageObj];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await solveDoubt(newMessages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      
      // Update usage limit
      usage.count += 1;
      if (currentImage) usage.imageCount += 1;
      localStorage.setItem('axiom_usage_limit', JSON.stringify(usage));
      setDailyCount(usage.count);
      setDailyImageCount(usage.imageCount);
    } catch (err: any) {
      setError(err.message || "Failed to contact AI.");
      setMessages(prev => [...prev, { role: 'assistant', content: `⚠️ **Service Unavailable:**\n\nOur AI servers are currently experiencing high traffic or a connection issue. Please try again in a few moments.` }]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setMessages([]);
    localStorage.removeItem('axiom_chat_history');
    setError(null);
    setInput('');
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-white relative overflow-hidden text-[#0d0d0d]">
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed bottom-0 left-0 right-0 h-[380px] pointer-events-none z-10 overflow-hidden"
          >
            {/* Soft, dense multi-color listening glow right behind and below the bottom input/search bar */}
            {/* Center Main Glow (Teal/Emerald) */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[90%] sm:w-[60%] h-[240px] bg-emerald-500/40 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '2.5s' }} />
            
            {/* Left Glow (Cyan) */}
            <div className="absolute bottom-[-120px] left-[15%] w-[45%] h-[220px] bg-cyan-450/35 blur-[90px] rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.4s' }} />
            
            {/* Right Glow (Amber/Gold) */}
            <div className="absolute bottom-[-120px] right-[15%] w-[45%] h-[220px] bg-amber-500/30 blur-[90px] rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.8s' }} />

            {/* Accent Glow (Deep Emerald) */}
            <div className="absolute bottom-[-80px] left-1/3 right-1/3 h-[180px] bg-teal-500/35 blur-[70px] rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.2s' }} />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Search Header / Navigation */}
      <div className="flex items-center justify-between p-3 md:p-4 border-b border-gray-100 bg-white/80 backdrop-blur-md z-30 sticky top-0">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="flex items-center gap-1.5 bg-emerald-50/70 hover:bg-emerald-50/90 transition-colors px-3.5 py-1 rounded-full border border-emerald-100/80 shadow-[0_2px_10px_rgba(16,185,129,0.06)]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse fill-emerald-500/10" />
            <span className="text-sm md:text-base font-black tracking-[0.1em] text-[#0d0d0d] bg-gradient-to-r from-emerald-900 to-emerald-950 bg-clip-text text-transparent flex items-center">
              AXIOM
            </span>
          </div>
          <span className="text-[7px] md:text-[8px] font-extrabold uppercase tracking-[0.4em] text-gray-400 mt-1.5 select-none pl-[0.4em]">by JEE TAPASYA</span>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={loadHistory}
            className="p-2 text-gray-400 hover:text-primary hover:bg-emerald-50 rounded-xl transition-all"
            title="Load Previous Chat"
          >
            <RotateCcw size={20} />
          </button>
          <button 
            onClick={clearHistory}
            className="p-2 text-gray-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
            title="Clear Chat"
          >
            <Trash2 size={20} />
          </button>
        </div>

      </div>

      {/* Ambient Thinking Aurora Glow */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            className="absolute top-0 left-0 right-0 h-[500px] z-20 pointer-events-none mix-blend-multiply overflow-visible"
          >
            <div className="absolute top-[-50px] left-[-10%] w-[60%] h-[300px] bg-emerald-400/30 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute top-[-100px] right-[-10%] w-[60%] h-[350px] bg-amber-400/30 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <div className="absolute top-0 left-[20%] w-[60%] h-[250px] bg-blue-400/20 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto w-full relative z-10 scroll-smooth" ref={scrollRef}>
        <div className="max-w-3xl mx-auto w-full flex flex-col pt-0 md:pt-4 pb-40">
          
          <AnimatePresence mode="popLayout">
            {messages.length === 0 && !loading && (
              <motion.div 
                key="empty-state"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center mt-2 md:mt-4"
              >
                <div className="absolute inset-0 bg-grid-emerald-500/[0.02] bg-[size:20px_20px] pointer-events-none" />
                
                <div className="relative mb-6 md:mb-10 scale-75 md:scale-100 group">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full group-hover:bg-emerald-500/30 transition-colors duration-700" />
                  <AxiomMascot size="lg" />
                </div>
                
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-4 md:mb-6"
                  >
                    <Sparkles size={12} className="animate-pulse" /> Axiom AI 2.0 Online
                  </motion.div>
                  
                  <h2 className="text-2xl md:text-5xl font-black heading-display uppercase tracking-tighter mb-3 md:mb-4 text-[#0d0d0d]">
                    How can I <span className="text-emerald-600">help you</span> today?
                  </h2>
                  <p className="text-xs md:text-base text-gray-500 mb-6 md:mb-10 max-w-lg mx-auto font-medium leading-relaxed px-4">
                    Clear your JEE doubts instantly with step-by-step guidance.
                  </p>
                </div>
                
                {localStorage.getItem('axiom_chat_history') && (
                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={loadHistory}
                    className="mb-8 md:mb-10 flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white bg-emerald-950 hover:bg-black rounded-full shadow-[0_8px_30px_rgb(16,185,129,0.2)] transition-all active:scale-95 group"
                  >
                    <RotateCcw size={14} className="md:w-4 md:h-4 group-hover:-rotate-90 transition-transform duration-500" />
                    Restore Previous Session
                  </motion.button>
                )}
                
                <div className="w-full max-w-2xl relative z-10 pb-4 md:pb-0">
                  <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Try asking about</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                    {suggestions.map((sample, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        onClick={() => setInput(sample.title + ": " + sample.desc)}
                        className="p-3 md:p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 transition-all text-left group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gray-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            <sample.icon size={18} />
                          </div>
                          <div>
                            <div className="text-xs md:text-sm text-gray-900 font-bold mb-0.5 md:mb-1">{sample.title}</div>
                            <div className="text-[10px] md:text-[12px] text-gray-500 font-medium line-clamp-1">{sample.desc}</div>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: idx * 0.02 }}
                className={cn(
                  "flex w-full mb-6 max-w-4xl mx-auto px-4",
                  msg.role === 'user' ? "justify-end" : "justify-start"
                )}
              >
                {msg.role === 'user' ? (
                  <div className="flex gap-4 flex-row-reverse max-w-[85%] md:max-w-[75%]">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center shrink-0 text-white font-black text-xs md:text-sm shadow-xl bg-gradient-to-br from-emerald-500 to-emerald-700 ring-4 ring-emerald-50/50">
                      {operatorPfp ? (
                        <img src={operatorPfp} alt="User" className="w-full h-full object-cover" />
                      ) : (
                        operatorName
                      )}
                    </div>
                    <div className="flex flex-col space-y-2 items-end">
                      <div className="flex items-center gap-2 px-2">
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">You</span>
                      </div>
                      <div className="text-[14px] md:text-[15px] leading-relaxed break-words bg-emerald-950 text-white rounded-3xl rounded-tr-sm p-4 md:p-6 shadow-sm">
                        <div className="flex flex-col gap-4">
                          {msg.image && (
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 mt-1">
                               <img src={msg.image} alt="User attachment" className="max-w-[200px] md:max-w-xs object-cover" />
                            </div>
                          )}
                          <p className="whitespace-pre-wrap font-medium">{msg.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col w-full max-w-full">
                    <div className="flex items-center gap-3 mb-2 px-2">
                      <div className="shrink-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md border border-emerald-100 flex items-center justify-center relative inner-shadow-emerald ring-4 ring-gray-50 scale-90 md:scale-100">
                          <AxiomMascot size="sm" />
                        </div>
                      </div>
                      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700">Axiom Solves</span>
                    </div>
                    
                    <div className="text-[14px] md:text-[15px] leading-relaxed markdown-body w-full text-gray-800 px-2 py-2">
                      <ReactMarkdown 
                        remarkPlugins={[remarkMath, remarkGfm]} 
                        rehypePlugins={[rehypeKatex]}
                        components={{
                          table: ({node, ...props}) => (
                            <div className="w-full overflow-x-auto my-4 md:my-6 rounded-xl border border-gray-100 shadow-sm">
                              <table className="w-full text-left border-collapse min-w-[500px]" {...props} />
                            </div>
                          )
                        }}
                      >
                        {msg.content.replace(/\[EMBED:PERIODIC_TABLE\]/g, '')}
                      </ReactMarkdown>
                      {msg.content.includes('[EMBED:PERIODIC_TABLE]') && (
                        <div className="mt-6 w-full max-w-full rounded-2xl shadow-sm border border-gray-100 bg-white">
                           <PeriodicTable embedded={true} />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {loading && (
              <motion.div 
                layout 
                className="flex w-full px-4 md:px-6 py-6 md:py-8 bg-gray-50/50 border-y border-gray-100/50"
              >
                <div className="max-w-3xl mx-auto w-full flex gap-4 md:gap-6">
                  <AxiomMascot size="sm" isThinking />
                  <div className="flex-1 space-y-2 pt-1 text-[#374151] animate-pulse">
                     <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Axiom is calculating...</span>
                     <div className="h-4 bg-gray-200 rounded-full w-2/3" />
                  </div>
                </div>
              </motion.div>
            )}

            {error && (
              <div className="max-w-3xl mx-auto w-full px-4 py-6">
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600">
                  <AlertCircle size={18} />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Input Overlay - Clean floating bar */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 z-20 pb-4 md:pb-8 pt-4 px-4 transition-all duration-500",
          isListening 
            ? "bg-gradient-to-t from-transparent via-transparent to-transparent" 
            : "bg-gradient-to-t from-white via-white to-transparent"
        )} 
        style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
      >
        <div className="max-w-3xl mx-auto w-full">
          <form 
            onSubmit={handleSubmit}
            className="relative flex items-center group flex-col"
          >
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
            />

            <div className={cn(
              "relative w-full bg-white border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[1.25rem] md:rounded-[2rem] flex flex-col transition-all group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
              selectedImage ? "pt-1" : "pt-0"
            )}>
              <AnimatePresence>
                {selectedImage && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                    animate={{ opacity: 1, height: 'auto', scale: 1 }}
                    exit={{ opacity: 0, height: 0, scale: 0.95 }}
                    className="relative inline-flex self-start ml-4 md:ml-6 mt-3 mb-1"
                  >
                    <div className="relative p-1.5 bg-gray-50 border border-gray-100/50 shadow-sm rounded-[1rem]">
                      <img src={selectedImage} alt="Preview" className="h-14 md:h-20 w-auto rounded-xl object-contain bg-white" />
                      <button 
                        type="button"
                        onClick={removeImage}
                        className="absolute -top-2.5 -right-2.5 bg-white text-gray-500 rounded-full p-1 border border-gray-200 shadow-sm hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-colors z-10"
                      >
                        <X size={14} strokeWidth={2.5} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center relative w-full h-[52px] md:h-[68px]">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center text-gray-400 hover:text-emerald-500 transition-colors rounded-full hover:bg-gray-50/80 hidden md:flex"
                  title="Attach an image of your doubt"
                >
                  <ImageIcon size={22} className={cn(selectedImage && "text-emerald-500", "stroke-[1.5]")} />
                </button>
                
                {/* Mobile Image Upload Icon (inline) */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute left-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-emerald-500 transition-colors rounded-full active:bg-gray-50 md:hidden"
                >
                  <ImageIcon size={20} className={cn(selectedImage && "text-emerald-500", "stroke-[1.5]")} />
                </button>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isListening ? "Listening... Speak your doubt clearly" : placeholder}
                  className={cn(
                    "w-full h-full bg-transparent border-none py-3 pl-12 md:pl-16 outline-none font-medium text-[15px] md:text-[17px] text-gray-800 placeholder:text-gray-400",
                    (input.trim() === '' || isListening) ? "pr-24 md:pr-36" : "pr-14 md:pr-20"
                  )}
                  disabled={loading}
                />
                
                <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 md:gap-2">
                  <AnimatePresence mode="popLayout">
                    {(input.trim() === '' || isListening) && (
                      <motion.button
                        key="google-mic-btn"
                        type="button"
                        onClick={toggleListening}
                        initial={{ opacity: 0, scale: 0.8, width: 0 }}
                        animate={{ opacity: 1, scale: 1, width: "auto" }}
                        exit={{ opacity: 0, scale: 0.8, width: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={cn(
                          "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all outline-none border shadow-md hover:shadow-lg active:scale-95 shrink-0 bg-white border-gray-100/80",
                          isListening && "ring-4 ring-emerald-500/20 shadow-xl border-emerald-400"
                        )}
                        title={isListening ? "Stop listening" : "Ask by speaking (Voice Match)"}
                        disabled={loading}
                      >
                        {isListening ? (
                          <div className="relative flex items-center justify-center w-full h-full">
                            <span className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-75" />
                            <MicOff size={18} className="md:w-5 md:h-5 text-emerald-600 z-10 animate-pulse" />
                          </div>
                        ) : (
                          <ThemeMicIcon className="w-5 h-5 md:w-6 md:h-6" />
                        )}
                      </motion.button>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={loading || (!input.trim() && !selectedImage)}
                    className={cn(
                      "w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all shrink-0",
                      loading || (!input.trim() && !selectedImage)
                        ? "bg-gray-50 text-gray-200"
                        : "bg-primary text-white preserve-dark hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                    )}
                  >
                    {loading ? (
                      <Loader2 size={18} className="animate-spin md:w-5 md:h-5" />
                    ) : (
                      <ArrowRight size={18} className="md:w-5 md:h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
