import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  AlertCircle, 
  RotateCcw, 
  Trash2, 
  Mic, 
  MicOff, 
  ImageIcon, 
  X, 
  ChevronLeft, 
  ArrowRight, 
  Copy, 
  Check, 
  Volume2, 
  VolumeX, 
  BookmarkPlus, 
  BookmarkCheck, 
  Lightbulb, 
  Zap, 
  Compass, 
  GraduationCap, 
  HelpCircle,
  Loader2,
  Atom,
  TrendingUp,
  Brain,
  LucideIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { solveDoubt, AIMode } from '../services/aiService';
import { AxiomMascot } from '../components/AxiomMascot';
import { cn } from '../lib/utils';
import { checkAILimit, incrementAIUsage } from '../lib/aiUsage';
import PeriodicTable from './PeriodicTable';
import { useUser } from '@clerk/clerk-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  image?: string;
  mode?: AIMode;
  timestamp?: number;
}

const ThemeMicIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9.5" y="3" width="5" height="10" rx="2.5" fill="url(#micCapsuleGrad)" />
    <path d="M6 11C6 14.3137 8.68629 17 12 17" stroke="url(#micArchGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17C15.3137 17 18 14.3137 18 11" stroke="url(#micArchGradRight)" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17V21M9 21H15" stroke="url(#micStandGrad)" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="micCapsuleGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#059669" />
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

const MODES: { id: AIMode; label: string; icon: LucideIcon; shortDesc: string; placeholder: string }[] = [
  {
    id: 'solution',
    label: 'Master Solution',
    icon: GraduationCap,
    shortDesc: 'Complete step-by-step LaTeX derivation',
    placeholder: 'Ask any Physics, Chemistry, or Maths problem...'
  },
  {
    id: 'socratic',
    label: 'Socratic Hints',
    icon: Lightbulb,
    shortDesc: 'Guided clues without spoiling the answer',
    placeholder: 'Share a question you are stuck on — AXIOM will guide your thinking...'
  },
  {
    id: 'similar',
    label: 'Twin Question',
    icon: Brain,
    shortDesc: 'Fresh practice problems based on concept',
    placeholder: 'Give a question or topic to generate a twin practice problem...'
  },
  {
    id: 'shortcut',
    label: '30s Exam Hacks',
    icon: Zap,
    shortDesc: 'Dimensional analysis & option elimination',
    placeholder: 'Ask for fast 45-second elimination tricks for any problem...'
  },
  {
    id: 'rank',
    label: 'Rank Predictor',
    icon: TrendingUp,
    shortDesc: 'Marks to AIR & JoSAA college cutoff',
    placeholder: 'Enter your score (e.g. 185 marks Shift 1) for rank & college cutoffs...'
  }
];

export default function DoubtSolver() {
  const location = useLocation();
  const { isSignedIn, user } = useUser();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [operatorName, setOperatorName] = useState('U');
  const [operatorPfp, setOperatorPfp] = useState<string | null>(null);
  const [dailyImageCount, setDailyImageCount] = useState(0);
  const [selectedMode, setSelectedMode] = useState<AIMode>('solution');
  
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [savedErrorIndex, setSavedErrorIndex] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  // Suggestions curated for high-yield JEE domains
  const [suggestions, setSuggestions] = useState([
    { 
      title: "Orthocentre of Triangles", 
      subject: "Maths", 
      desc: "Slope perpendicularity property from JEE 2025 Shift 1", 
      query: "How do we find the orthocentre of a right-angled triangle formed by lines 4x - 7y + 10 = 0 and 7x + 4y = 15?"
    },
    { 
      title: "Conformational Isomers", 
      subject: "Chemistry", 
      desc: "Stereoisomerism vs C-C single bond rotation in butane", 
      query: "Explain conformational isomers and dihedral angles with staggered and eclipsed forms for butane."
    },
    { 
      title: "Simple Harmonic Motion", 
      subject: "Physics", 
      desc: "Time period of oscillating liquid columns in U-tubes", 
      query: "Derive the time period of oscillation for a liquid column of length L in a vertical U-tube."
    },
    { 
      title: "Rank & JoSAA Predictor", 
      subject: "Strategy", 
      desc: "190 marks in JEE Main Shift 1 — what NIT and branch?", 
      query: "I am targeting 190 marks in JEE Main 2025. What is my expected percentile, All India Rank, and eligible NIT branches?"
    }
  ]);

  useEffect(() => {
    try {
      const errorBookRaw = localStorage.getItem('errorBook');
      if (errorBookRaw) {
        const errorBook = JSON.parse(errorBookRaw);
        if (errorBook.length > 0) {
          const recentErrors = [...errorBook].reverse();
          const uniqueChapters = Array.from(new Set(recentErrors.map(item => item.chapterId).filter(Boolean))).slice(0, 4) as string[];
          
          if (uniqueChapters.length > 0) {
            const dynamicList = uniqueChapters.map((ch: string) => {
              const formattedTitle = ch.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
              return {
                title: formattedTitle,
                subject: "Error Book",
                desc: "Review your recent conceptual gap",
                query: `Help me clarify the key JEE Main concepts and common traps for ${formattedTitle}.`
              };
            });
            while (dynamicList.length < 4 && suggestions[dynamicList.length]) {
              dynamicList.push(suggestions[dynamicList.length]);
            }
            setSuggestions(dynamicList.slice(0, 4));
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
  }, []);

  useEffect(() => {
    if (location.state && (location.state as any).query) {
      setInput((location.state as any).query);
      try {
        window.history.replaceState({}, document.title);
      } catch (e) {}
    }
  }, [location.state]);

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

  // Clean Speech synthesis on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const loadHistory = () => {
    const saved = localStorage.getItem('axiom_chat_history');
    if (saved) {
      setMessages(JSON.parse(saved));
      triggerToast("Previous session restored");
    } else {
      setError("No saved chat history found.");
      setTimeout(() => setError(null), 3000);
    }
  };

  const clearHistory = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setMessages([]);
    localStorage.removeItem('axiom_chat_history');
    setError(null);
    setInput('');
    setSpeakingIndex(null);
    triggerToast("Chat session cleared");
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      triggerToast("Solution copied to clipboard");
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const saveToErrorBook = (userQuestion: string, aiSolution: string, index: number) => {
    try {
      const existing = JSON.parse(localStorage.getItem('errorBook') || '[]');
      const newEntry = {
        id: `axiom-${Date.now()}`,
        question: userQuestion || "Doubt solved with AXIOM AI",
        options: ["(A) Solved via AXIOM", "(B) Option 2", "(C) Option 3", "(D) Option 4"],
        correctOption: 0,
        answer: 0,
        solution: aiSolution,
        explanation: aiSolution,
        subjectId: "axiom",
        chapterId: "axiom-notes",
        timestamp: Date.now()
      };
      existing.unshift(newEntry);
      localStorage.setItem('errorBook', JSON.stringify(existing));
      setSavedErrorIndex(index);
      triggerToast("Saved to your Error Book for review");
      setTimeout(() => setSavedErrorIndex(null), 3000);
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  const toggleSpeech = (text: string, index: number) => {
    if (!('speechSynthesis' in window)) {
      triggerToast("Text-to-Speech not supported in this browser");
      return;
    }

    if (speakingIndex === index) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(null);
      return;
    }

    window.speechSynthesis.cancel();

    // Clean markdown and LaTeX tags for natural auditory speech
    const cleanText = text
      .replace(/\[EMBED:PERIODIC_TABLE\]/g, '')
      .replace(/\$([^$]+)\$/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/#{1,6}\s?/g, '')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 over $2')
      .replace(/\\sqrt\{([^}]+)\}/g, 'square root of $1')
      .replace(/\\cdot/g, ' times ')
      .replace(/\\perp/g, ' perpendicular to ')
      .replace(/\\implies/g, ' implies that ')
      .slice(0, 1500); // Read first chunk comfortably

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.lang = 'en-IN';

    utterance.onend = () => setSpeakingIndex(null);
    utterance.onerror = () => setSpeakingIndex(null);

    setSpeakingIndex(index);
    window.speechSynthesis.speak(utterance);
  };

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
        rec.lang = 'en-IN';

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
          if (event.error === 'not-allowed') {
            setError("Microphone permission denied. Please allow microphone access.");
          } else if (event.error !== 'no-speech' && event.error !== 'aborted') {
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (dailyImageCount >= 2) {
      setError('Daily image limit reached (2 images/day).');
      if (fileInputRef.current) fileInputRef.current.value = '';
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
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const triggerQuickPrompt = (promptText: string, modeOverride?: AIMode) => {
    const targetMode = modeOverride || selectedMode;
    if (modeOverride) setSelectedMode(modeOverride);
    handleSubmitWithText(promptText, targetMode);
  };

  const handleSubmitWithText = async (textToSend: string, modeToUse: AIMode) => {
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
    if ((!textToSend.trim() && !selectedImage) || loading) return;

    if (!isSignedIn) {
      setError("Please sign in to ask Axiom AI.");
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `🔒 **Sign-in Required**\n\nPlease sign in to your JEE Tapasya account to ask AXIOM AI and maintain your question history.` 
      }]);
      return;
    }

    const limitStatus = await checkAILimit(user?.id);
    if (!limitStatus.allowed) {
      setError(limitStatus.error || "Daily limit reached!");
      return;
    }
    if (selectedImage && dailyImageCount >= 2) {
      setError("Daily image limit reached (2 images/day).");
      return;
    }

    const userMessage = textToSend.trim();
    setInput('');
    const currentImage = selectedImage;
    removeImage();
    setError(null);
    
    const userMessageObj: Message = { 
      role: 'user', 
      content: userMessage, 
      image: currentImage || undefined,
      mode: modeToUse,
      timestamp: Date.now()
    };
    const newMessages = [...messages, userMessageObj];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await solveDoubt(newMessages, modeToUse);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response,
        mode: modeToUse,
        timestamp: Date.now()
      }]);
      
      await incrementAIUsage(user?.id);
      if (currentImage) setDailyImageCount(prev => prev + 1);
    } catch (err: any) {
      setError(err.message || "Failed to contact AI.");
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `⚠️ **Service High Load**\n\nOur AI engines are experiencing momentary peak traffic. Please try sending again in a few seconds.` 
      }]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    handleSubmitWithText(input, selectedMode);
  };

  const activeModeConfig = MODES.find(m => m.id === selectedMode) || MODES[0];

  return (
    <div className="flex flex-col h-[100dvh] bg-slate-50 text-slate-900 relative overflow-hidden font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg border border-slate-700 flex items-center gap-2"
          >
            <Check size={14} className="text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mic Active Glow */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed bottom-0 left-0 right-0 h-[380px] pointer-events-none z-10 overflow-hidden"
          >
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[90%] sm:w-[60%] h-[240px] bg-emerald-500/25 blur-[90px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-120px] left-[15%] w-[45%] h-[220px] bg-cyan-500/20 blur-[90px] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header Bar */}
      <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-slate-200/80 bg-white/90 backdrop-blur-md z-30 sticky top-0">
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors py-1 px-2 rounded-lg hover:bg-slate-100 text-sm font-medium"
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
          <span className="text-slate-300">/</span>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center overflow-visible shadow-xs">
              <AxiomMascot size="xs" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 tracking-tight text-base">AXIOM AI</span>
                <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-1.5 py-0.5 rounded border border-orange-200/60">Assistant</span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Your Intelligent JEE Study Buddy</p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button 
            onClick={loadHistory}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title="Restore previous session"
          >
            <RotateCcw size={15} />
            <span className="hidden md:inline">History</span>
          </button>
          <button 
            onClick={clearHistory}
            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
            title="Clear current chat"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </header>

      {/* Mode Selector Ribbon */}
      <nav aria-label="AI Modes" className="bg-white border-b border-slate-200/60 px-4 py-2 z-20 overflow-x-auto no-scrollbar shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center gap-1.5 min-w-max">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-2 shrink-0">Engine:</span>
          {MODES.map((mode) => {
            const Icon = mode.icon;
            const isActive = selectedMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 cursor-pointer",
                  isActive
                    ? "bg-slate-900 text-white shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                )}
                title={mode.shortDesc}
              >
                <Icon size={14} className={isActive ? "text-emerald-400" : "text-slate-400"} />
                <span>{mode.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Conversation Stream */}
      <main className="flex-1 overflow-y-auto w-full relative z-10" ref={scrollRef}>
        <div className="max-w-3xl mx-auto w-full flex flex-col pt-4 pb-48 px-4">
          
          <AnimatePresence mode="popLayout">
            {messages.length === 0 && !loading && (
              <motion.div 
                key="empty-state"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center min-h-[55vh] text-center my-auto py-6"
              >
                {/* Cute Mascot Hero Companion */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="relative mb-5 flex flex-col items-center"
                >
                  <div className="relative p-2.5 rounded-3xl bg-gradient-to-b from-orange-50/80 via-white to-amber-50/60 border border-orange-200/80 shadow-lg shadow-orange-500/10">
                    <AxiomMascot size="lg" />
                    <motion.div 
                      animate={{ rotate: [0, 12, -12, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full p-1.5 shadow-md"
                    >
                      <Sparkles size={14} className="fill-white" />
                    </motion.div>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/90 border border-orange-200 text-xs font-bold text-orange-800 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                    <span>Axiom Assistant · Ready to Solve</span>
                  </div>
                </motion.div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                  What are we solving today?
                </h1>
                <p className="text-sm text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
                  Active in <span className="font-semibold text-slate-700">{activeModeConfig.label}</span> mode: {activeModeConfig.shortDesc}.
                </p>

                {/* Domain Starter Cards */}
                <div className="w-full max-w-2xl text-left">
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">High-Yield Starters</span>
                    <span className="text-xs text-slate-400">Click to run immediately</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {suggestions.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => triggerQuickPrompt(item.query)}
                        className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all text-left group cursor-pointer"
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                          <span className="text-emerald-700">{item.subject}</span>
                          <span className="text-slate-400 group-hover:text-emerald-600 transition-colors">Solve →</span>
                        </div>
                        <div className="text-sm font-bold text-slate-900 mb-1 group-hover:text-emerald-950 transition-colors">
                          {item.title}
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {item.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Render Messages */}
            {messages.map((msg, idx) => (
              <motion.article
                key={idx}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "flex w-full mb-6",
                  msg.role === 'user' ? "justify-end" : "justify-start"
                )}
              >
                {msg.role === 'user' ? (
                  <div className="flex gap-3 flex-row-reverse max-w-[85%] md:max-w-[75%]">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                      {operatorPfp ? (
                        <img src={operatorPfp} alt="User" className="w-full h-full object-cover rounded-full" />
                      ) : (
                        operatorName
                      )}
                    </div>
                    <div className="flex flex-col space-y-1 items-end">
                      <span className="text-[11px] font-medium text-slate-400">You</span>
                      <div className="bg-slate-900 text-white rounded-2xl rounded-tr-xs p-4 shadow-xs text-sm leading-relaxed">
                        {msg.image && (
                          <div className="relative rounded-lg overflow-hidden border border-white/20 mb-3 bg-black/40">
                            <img src={msg.image} alt="User attachment" className="max-w-[220px] object-cover" />
                          </div>
                        )}
                        <p className="whitespace-pre-wrap">{msg.content}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col w-full max-w-full">
                    <div className="flex items-center gap-2 mb-2 px-1">
                      <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center overflow-visible shadow-xs shrink-0">
                        <AxiomMascot size="xs" />
                      </div>
                      <span className="text-xs font-bold text-slate-800">Axiom Assistant</span>
                      {msg.mode && (
                        <span className="text-[11px] text-slate-400 font-medium">
                          · {MODES.find(m => m.id === msg.mode)?.label || "Solution"}
                        </span>
                      )}
                    </div>
                    
                    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs text-slate-800 leading-relaxed text-sm">
                      <div className="markdown-body">
                        <ReactMarkdown 
                          remarkPlugins={[remarkMath, remarkGfm]} 
                          rehypePlugins={[rehypeKatex]}
                          components={{
                            table: ({node, ...props}) => (
                              <div className="w-full overflow-x-auto my-4 rounded-lg border border-slate-200">
                                <table className="w-full text-left border-collapse text-xs" {...props} />
                              </div>
                            ),
                            h3: ({node, ...props}) => (
                              <h3 className="text-base font-bold text-slate-900 mt-4 mb-2" {...props} />
                            ),
                            h4: ({node, ...props}) => (
                              <h4 className="text-sm font-semibold text-slate-800 mt-3 mb-1" {...props} />
                            )
                          }}
                        >
                          {msg.content.replace(/\[EMBED:PERIODIC_TABLE\]/g, '')}
                        </ReactMarkdown>
                      </div>

                      {msg.content.includes('[EMBED:PERIODIC_TABLE]') && (
                        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-2">
                          <PeriodicTable embedded={true} />
                        </div>
                      )}

                      {/* Interactive Solution Action Strip */}
                      <footer className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => copyToClipboard(msg.content, idx)}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                            title="Copy full solution"
                          >
                            {copiedIndex === idx ? (
                              <>
                                <Check size={14} className="text-emerald-600" />
                                <span className="text-emerald-700 font-semibold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy size={14} />
                                <span>Copy</span>
                              </>
                            )}
                          </button>

                          <button
                            onClick={() => toggleSpeech(msg.content, idx)}
                            className={cn(
                              "flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors cursor-pointer",
                              speakingIndex === idx
                                ? "bg-emerald-50 text-emerald-700 font-semibold"
                                : "hover:bg-slate-100 hover:text-slate-900"
                            )}
                            title="Listen to solution explanation"
                          >
                            {speakingIndex === idx ? (
                              <>
                                <VolumeX size={14} />
                                <span>Stop Audio</span>
                              </>
                            ) : (
                              <>
                                <Volume2 size={14} />
                                <span>Read Aloud</span>
                              </>
                            )}
                          </button>

                          <button
                            onClick={() => {
                              const userQuery = messages[idx - 1]?.content || "Question";
                              saveToErrorBook(userQuery, msg.content, idx);
                            }}
                            className={cn(
                              "flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors cursor-pointer",
                              savedErrorIndex === idx 
                                ? "bg-emerald-50 text-emerald-700 font-semibold" 
                                : "hover:bg-slate-100 hover:text-slate-900"
                            )}
                            title="Save this question to your Error Book for revision"
                          >
                            {savedErrorIndex === idx ? (
                              <>
                                <BookmarkCheck size={14} className="text-emerald-600" />
                                <span>Saved in Error Book</span>
                              </>
                            ) : (
                              <>
                                <BookmarkPlus size={14} />
                                <span>Save in Error Book</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Follow-up Quick Prompts */}
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => triggerQuickPrompt("Generate a similar twin question with different values based on this concept.", "similar")}
                            className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer"
                            title="Generate a similar problem to practice"
                          >
                            <Brain size={13} className="text-emerald-600" />
                            <span>Twin Problem</span>
                          </button>

                          <button
                            onClick={() => triggerQuickPrompt("Can you show a 30-second shortcut or elimination trick for this problem?", "shortcut")}
                            className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer"
                            title="Get 30s shortcut trick"
                          >
                            <Zap size={13} className="text-amber-500" />
                            <span>Shortcut</span>
                          </button>
                        </div>
                      </footer>
                    </div>
                  </div>
                )}
              </motion.article>
            ))}

            {loading && (
              <motion.div 
                layout 
                className="flex items-center gap-3.5 p-4 bg-gradient-to-r from-orange-50/80 via-white to-amber-50/50 border border-orange-200/80 rounded-2xl max-w-md shadow-sm mb-4"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-orange-200 flex items-center justify-center overflow-visible shrink-0 shadow-xs">
                  <AxiomMascot size="sm" isThinking={true} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-800">Axiom is thinking...</span>
                    <span className="flex space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">Verifying physics principles & step derivation</span>
                </div>
              </motion.div>
            )}

            {error && (
              <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-3 text-rose-700 text-sm mb-4">
                <AlertCircle size={18} className="shrink-0" />
                <p>{error}</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Floating Modern Input Console */}
      <footer className="absolute bottom-0 left-0 right-0 z-20 pb-4 md:pb-6 pt-3 px-4 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent">
        <div className="max-w-3xl mx-auto w-full">
          <form onSubmit={handleSubmit} className="relative flex flex-col group">
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
            />

            <div className="relative w-full bg-white border border-slate-300/80 shadow-md rounded-2xl flex flex-col focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/10 transition-all">
              {/* Image Preview Thumbnail */}
              <AnimatePresence>
                {selectedImage && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3 border-b border-slate-100 flex items-center gap-3"
                  >
                    <div className="relative rounded-lg overflow-hidden border border-slate-200 h-16 w-16 bg-slate-100 shrink-0">
                      <img src={selectedImage} alt="Attachment" className="w-full h-full object-cover" />
                      <button 
                        type="button"
                        onClick={removeImage}
                        className="absolute top-1 right-1 bg-slate-900/80 text-white rounded-full p-0.5 hover:bg-rose-600 transition-colors"
                      >
                        <X size={12} />
                      </button>
                    </div>
                    <div className="text-xs text-slate-500">
                      <p className="font-semibold text-slate-700">Image attached</p>
                      <p className="text-[11px]">AXIOM will OCR and extract equations automatically.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Input Field Strip */}
              <div className="flex items-center min-h-[56px] px-3">
                {/* Image Upload Trigger */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-emerald-600 transition-colors rounded-lg hover:bg-slate-100 cursor-pointer shrink-0"
                  title="Upload question photo (diagram / handwriting)"
                >
                  <ImageIcon size={20} className={selectedImage ? "text-emerald-600" : ""} />
                </button>

                {/* Text Field */}
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isListening ? "Listening... Speak clearly" : activeModeConfig.placeholder}
                  className="w-full bg-transparent border-none py-3 px-3 outline-none font-medium text-sm text-slate-900 placeholder:text-slate-400"
                  disabled={loading}
                />

                {/* Right Actions: Voice & Submit */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={toggleListening}
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center transition-all cursor-pointer",
                      isListening 
                        ? "bg-rose-50 text-rose-600 ring-2 ring-rose-400 animate-pulse" 
                        : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                    )}
                    title={isListening ? "Stop listening" : "Voice input (Hinglish/English)"}
                    disabled={loading}
                  >
                    {isListening ? <MicOff size={18} /> : <ThemeMicIcon className="w-5 h-5" />}
                  </button>

                  <button
                    type="submit"
                    disabled={loading || (!input.trim() && !selectedImage)}
                    className={cn(
                      "w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer",
                      loading || (!input.trim() && !selectedImage)
                        ? "bg-slate-100 text-slate-300"
                        : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm active:scale-95"
                    )}
                    title="Send to AXIOM"
                  >
                    {loading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <ArrowRight size={16} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Engine Sub-indicator */}
            <div className="flex items-center justify-between mt-2 px-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <span>Active:</span>
                <span className="font-semibold text-slate-600">{activeModeConfig.label}</span>
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <span>AI can make mistakes. Always cross-check critical calculations & formulas.</span>
              </span>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
}
