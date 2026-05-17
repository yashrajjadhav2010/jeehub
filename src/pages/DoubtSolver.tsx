import React, { useState, useRef, useEffect } from 'react';
import { Send, Cpu, Sparkles, AlertCircle, RotateCcw, BrainCircuit, MessageSquare, History, Activity, Zap, Binary, FlaskConical, Target, Loader2, User, ChevronLeft, ArrowRight, Trash2 } from 'lucide-react';
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

export default function DoubtSolver() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [placeholder, setPlaceholder] = useState('Ask Anything...');
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setError(null);
    const userMessageObj: Message = { role: 'user', content: userMessage };
    const newMessages = [...messages, userMessageObj];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await solveDoubt(newMessages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
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
    <div className="flex flex-col h-screen bg-white relative overflow-hidden text-[#0d0d0d]">
      {/* Search Header / Navigation */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white/80 backdrop-blur-md z-30 sticky top-0">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-lg font-black tracking-tighter italic">AXIOM</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-400 -mt-1">by JEE TAPASYA</span>
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

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto w-full relative z-10" ref={scrollRef}>
        <div className="max-w-3xl mx-auto w-full flex flex-col pt-4 md:pt-8 pb-32">
          
          <AnimatePresence mode="popLayout">
            {messages.length === 0 && !loading && (
              <motion.div 
                key="empty-state"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center"
              >
                <div className="mb-8">
                  <AxiomMascot size="lg" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                  Hi, I'm Axiom!
                </h2>
                <p className="text-gray-500 mb-8 max-w-sm">
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                  {[
                    "Explain Heisenberg's Uncertainty Principle",
                    "Solve: Integration of tan³x",
                    "Periodic trends in Chemistry",
                    "Newton's Laws of Motion"
                  ].map((sample, i) => (
                    <motion.button
                      key={sample}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setInput(sample)}
                      className="p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all text-left text-sm text-gray-600 font-medium"
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
                  "flex w-full px-4 py-8 md:px-0",
                  msg.role === 'assistant' ? "bg-gray-50/50" : "bg-white"
                )}
              >
                <div className="max-w-3xl mx-auto w-full flex gap-4 md:gap-6">
                  {msg.role === 'user' ? (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-xs shadow-sm bg-[#10a37f]">
                      U
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
                    <div className="text-base text-[#374151] markdown-body overflow-hidden break-words">
                      {msg.role === 'user' ? (
                        <p className="whitespace-pre-wrap">{msg.content}</p>
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
                className="flex w-full px-4 py-8 md:px-0 bg-gray-50/50"
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
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-6 md:pb-8 pt-4 px-4 bg-gradient-to-t from-white via-white to-transparent">
        <div className="max-w-3xl mx-auto w-full">
          <form 
            onSubmit={handleSubmit}
            className="relative flex items-center group flex-col"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-white border border-gray-200 shadow-lg rounded-2xl py-4 md:py-5 pl-5 pr-14 md:pr-16 outline-none focus:border-gray-300 transition-all font-medium text-gray-800"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className={cn(
                  "absolute right-2.5 md:right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all",
                  loading || !input.trim()
                    ? "bg-gray-100 text-gray-300"
                    : "bg-[#10a37f] text-white hover:bg-[#1a7f64]"
                )}
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <ArrowRight size={18} />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
