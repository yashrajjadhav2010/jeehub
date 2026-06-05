import React, { useState, useRef, useEffect } from 'react';
import { Send, Cpu, Sparkles, AlertCircle, RotateCcw, BrainCircuit, MessageSquare, History, Activity, Zap, Binary, FlaskConical, Target, Loader2, User, ChevronLeft, ArrowRight, Trash2, Mic, MicOff, ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { solveDoubt } from '../services/aiService';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  image?: string;
}

const AxiomMascot = ({ size = "md", isThinking = false }: { size?: "sm" | "md" | "lg", isThinking?: boolean }) => {
  const scale = {
    sm: 0.22,
    md: 0.45,
    lg: 1.0
  }[size];

  const dimensions = {
    sm: "w-8 h-8",
    md: "w-20 h-20",
    lg: "w-44 h-44"
  }[size];

  return (
    <motion.div
      animate={{
        y: isThinking ? [0, -10, 0] : [0, -6, 0],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: isThinking ? 1.5 : 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ willChange: 'transform' }}
      className={cn(dimensions, "flex items-center justify-center shrink-0 overflow-visible")}
    >
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
        <svg id="axiom" width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
          <defs>
            <radialGradient id="coreGlow" cx="35%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#FFD166"/>
              <stop offset="40%" stopColor="#FF9933"/>
              <stop offset="100%" stopColor="#E67E22"/>
            </radialGradient>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA"/>
              <stop offset="100%" stopColor="#2563EB"/>
            </linearGradient>
            <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.5)"/>
              <stop offset="100%" stopColor="rgba(255,255,255,0.2)"/>
            </linearGradient>
            
            <filter id="crispShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feOffset dx="0" dy="3" in="SourceAlpha" result="off"/>
              <feFlood floodColor="#FF9933" floodOpacity="0.25" result="color"/>
              <feComposite in="color" in2="off" operator="in" result="shadow"/>
              <feMerge>
                <feMergeNode in="shadow"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <g>
            <g className="orbits" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="90" cy="90" rx="65" ry="26" stroke="url(#orbitGradient)" strokeWidth="2.5" fill="none" opacity="0.8" vectorEffect="non-scaling-stroke">
                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse cx="90" cy="90" rx="65" ry="26" stroke="url(#orbitGradient)" strokeWidth="2.5" fill="none" opacity="0.8" transform="rotate(60 90 90)" vectorEffect="non-scaling-stroke">
                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse cx="90" cy="90" rx="65" ry="26" stroke="url(#orbitGradient)" strokeWidth="2.5" fill="none" opacity="0.8" transform="rotate(120 90 90)" vectorEffect="non-scaling-stroke">
                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite"/>
              </ellipse>
              <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="25s" repeatCount="indefinite"/>
            </g>
            
            <g filter="url(#crispShadow)">
              <polygon points="90,55 120,72.5 120,107.5 90,125 60,107.5 60,72.5" fill="url(#coreGlow)" stroke="#EA580C" strokeWidth="1" vectorEffect="non-scaling-stroke"/>
            </g>
            
            <g shapeRendering="crispEdges">
              <circle cx="78" cy="82" r="11" stroke="#0F172A" strokeWidth="3" fill="url(#glassGradient)" vectorEffect="non-scaling-stroke"/>
              <circle cx="102" cy="82" r="11" stroke="#0F172A" strokeWidth="3" fill="url(#glassGradient)" vectorEffect="non-scaling-stroke"/>
              <path d="M89 82H91" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
              <ellipse cx="74" cy="78" rx="2.5" ry="3.5" fill="white" opacity="0.95">
                <animate attributeName="opacity" values="0.95;0.5;0.95" dur="3s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse cx="98" cy="78" rx="2.5" ry="3.5" fill="white" opacity="0.95">
                <animate attributeName="opacity" values="0.95;0.5;0.95" dur="3s" repeatCount="indefinite"/>
              </ellipse>
            </g>
            
            <g shapeRendering="geometricPrecision">
              <ellipse cx="78" cy="84" rx="2.5" ry="3.5" fill="#0F172A">
                <animate attributeName="ry" values="3.5;0.5;3.5" dur="4s" repeatCount="indefinite" keyTimes="0;0.05;0.1" begin="0s"/>
              </ellipse>
              <circle cx="79" cy="82.5" r="0.8" fill="white">
                <animate attributeName="opacity" values="1;0;1" dur="4s" repeatCount="indefinite" keyTimes="0;0.05;0.1" begin="0s"/>
              </circle>
              
              <ellipse cx="102" cy="84" rx="2.5" ry="3.5" fill="#0F172A">
                <animate attributeName="ry" values="3.5;0.5;3.5" dur="4s" repeatCount="indefinite" keyTimes="0;0.05;0.1" begin="0.1s"/>
              </ellipse>
              <circle cx="103" cy="82.5" r="0.8" fill="white">
                <animate attributeName="opacity" values="1;0;1" dur="4s" repeatCount="indefinite" keyTimes="0;0.05;0.1" begin="0.1s"/>
              </circle>
            </g>
            
            <g>
              <circle cx="155" cy="90" r="5.5" fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" vectorEffect="non-scaling-stroke">
                <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="r" values="5.5;7;5.5" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="57" cy="40" r="5.5" fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" vectorEffect="non-scaling-stroke">
                <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="r" values="5.5;7;5.5" dur="2s" repeatCount="indefinite" begin="0.6s"/>
              </circle>
              <circle cx="57" cy="140" r="5.5" fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" vectorEffect="non-scaling-stroke">
                <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="r" values="5.5;7;5.5" dur="2s" repeatCount="indefinite" begin="1.2s"/>
              </circle>
            </g>
          </g>
        </svg>
      </div>
    </motion.div>
  );
};

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

  useEffect(() => {
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
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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
      setError(err.message || "Failed to solve doubt. Please try again.");
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
        <div className="max-w-3xl mx-auto w-full flex flex-col pt-4 md:pt-8 pb-40">
          
          <AnimatePresence mode="popLayout">
            {messages.length === 0 && !loading && (
              <motion.div 
                key="empty-state"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center"
              >
                <div className="mb-4 md:mb-8 scale-75 md:scale-100">
                  <AxiomMascot size="lg" />
                </div>
                <h2 className="text-xl md:text-3xl font-black heading-display uppercase tracking-tight mb-2">
                  Hi, I'm Axiom!
                </h2>
                <p className="text-sm md:text-base text-gray-500 mb-8 max-w-sm font-medium">
                  Your premium AI assistant for JEE prep. What can I help you solve today?
                </p>
                
                {localStorage.getItem('axiom_chat_history') && (
                  <button 
                    onClick={loadHistory}
                    className="mb-8 flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#10a37f] bg-[#10a37f]/5 hover:bg-[#10a37f]/10 rounded-2xl border border-[#10a37f]/20 transition-all active:scale-95"
                  >
                    <RotateCcw size={16} />
                    Restore Previous Session
                  </button>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 w-full max-w-xl">
                  {[
                    "Newton's Laws of Motion",
                    "Integration of tan³x",
                    "Periodic trends in Chemistry",
                    "Heisenberg Principle"
                  ].map((sample, i) => (
                    <motion.button
                      key={sample}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setInput(sample)}
                      className="p-3 md:p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition-all text-left text-[11px] md:text-sm text-gray-600 font-bold uppercase tracking-tight"
                    >
                      {sample}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "flex w-full px-4 md:px-6 py-6 md:py-8",
                  msg.role === 'assistant' ? "bg-gray-50/50 border-y border-gray-100/50" : "bg-white"
                )}
              >
                <div className="max-w-3xl mx-auto w-full flex gap-4 md:gap-6">
                  {msg.role === 'user' ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0 text-white font-bold text-xs shadow-sm bg-[#10a37f]">
                      {operatorPfp ? (
                        <img src={operatorPfp} alt="User" className="w-full h-full object-cover" />
                      ) : (
                        operatorName
                      )}
                    </div>
                  ) : (
                    <AxiomMascot size="sm" />
                  )}
                  
                  <div className="flex-1 min-w-0 flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        {msg.role === 'user' ? 'You' : 'Axiom Solves'}
                      </span>
                    </div>
                    <div className="text-[15px] leading-[1.65] md:text-base text-[#374151] markdown-body overflow-x-auto break-words pb-2">
                      {msg.role === 'user' ? (
                        <div className="flex flex-col gap-4">
                          {msg.image && (
                            <img src={msg.image} alt="User attachment" className="max-w-xs md:max-w-sm rounded-[1rem] shadow-sm border border-emerald-900/5 object-contain" />
                          )}
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        </div>
                      ) : (
                        <ReactMarkdown 
                          remarkPlugins={[remarkMath]} 
                          rehypePlugins={[rehypeKatex]}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      )}
                    </div>
                  </div>
                </div>
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
