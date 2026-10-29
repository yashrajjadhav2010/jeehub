import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  X,
  Volume2,
  VolumeX,
  BrainCircuit,
  Coffee,
  Sparkles,
  Flame,
  CheckCircle2,
  Plus,
  Trash2,
  Target,
  Award,
  Zap,
  Sliders,
  Bell,
  Waves,
  CloudRain,
  Headphones,
  ShieldAlert,
  ChevronRight,
  BookmarkCheck,
  Check
} from "lucide-react";
import { cn } from "../lib/utils";

// --- WEB AUDIO API AMBIENT SOUND SYNTHESIZER ---
class FocusAudioEngine {
  private ctx: AudioContext | null = null;
  private noiseNode: AudioNode | null = null;
  private gainNode: GainNode | null = null;
  private lfoNode: OscillatorNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private binauralLeft: OscillatorNode | null = null;
  private binauralRight: OscillatorNode | null = null;
  private currentType: "none" | "rain" | "waves" | "binaural" = "none";

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public setSound(type: "none" | "rain" | "waves" | "binaural", volume: number = 0.3) {
    this.stop();
    this.currentType = type;
    if (type === "none") return;

    this.initCtx();
    if (!this.ctx) return;

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);

    if (type === "rain") {
      // Pink/Brown Noise Generator for Rain
      const bufferSize = 2 * this.ctx.sampleRate;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11;
        b6 = white * 0.115926;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = "lowpass";
      this.filterNode.frequency.setValueAtTime(1000, this.ctx.currentTime);

      whiteNoise.connect(this.filterNode);
      this.filterNode.connect(this.gainNode);
      whiteNoise.start();
      this.noiseNode = whiteNoise;
    } else if (type === "waves") {
      // Modulated Ocean Waves Noise
      const bufferSize = 2 * this.ctx.sampleRate;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = "lowpass";
      this.filterNode.frequency.setValueAtTime(400, this.ctx.currentTime);

      // LFO for wave swelling
      this.lfoNode = this.ctx.createOscillator();
      this.lfoNode.frequency.setValueAtTime(0.12, this.ctx.currentTime); // 1 wave every ~8s
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(300, this.ctx.currentTime);

      this.lfoNode.connect(lfoGain);
      lfoGain.connect(this.filterNode.frequency);

      whiteNoise.connect(this.filterNode);
      this.filterNode.connect(this.gainNode);

      whiteNoise.start();
      this.lfoNode.start();
      this.noiseNode = whiteNoise;
    } else if (type === "binaural") {
      // 10Hz Alpha Waves Binaural Beats (200Hz Left, 210Hz Right)
      const merger = this.ctx.createChannelMerger(2);

      this.binauralLeft = this.ctx.createOscillator();
      this.binauralLeft.type = "sine";
      this.binauralLeft.frequency.setValueAtTime(200, this.ctx.currentTime);

      this.binauralRight = this.ctx.createOscillator();
      this.binauralRight.type = "sine";
      this.binauralRight.frequency.setValueAtTime(210, this.ctx.currentTime);

      this.binauralLeft.connect(merger, 0, 0);
      this.binauralRight.connect(merger, 0, 1);

      merger.connect(this.gainNode);
      this.binauralLeft.start();
      this.binauralRight.start();
    }
  }

  public setVolume(volume: number) {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);
    }
  }

  public playChime() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.5, this.ctx.currentTime + 1.2); // C6 bell pitch

      gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 2.5);
    } catch (e) {
      console.warn("Chime failed", e);
    }
  }

  public stop() {
    try {
      if (this.noiseNode) {
        (this.noiseNode as any).stop();
        this.noiseNode = null;
      }
      if (this.lfoNode) {
        this.lfoNode.stop();
        this.lfoNode = null;
      }
      if (this.binauralLeft) {
        this.binauralLeft.stop();
        this.binauralLeft = null;
      }
      if (this.binauralRight) {
        this.binauralRight.stop();
        this.binauralRight = null;
      }
    } catch (e) {}
  }
}

const audioEngine = new FocusAudioEngine();

// --- JEE MOTIVATIONAL QUOTES ---
const MOTIVATIONAL_QUOTES = [
  "“Push yourself today, because no one else is going to do it for you in the examination hall.”",
  "“AIR 1 is built in silent, consistent study sessions when nobody is watching.”",
  "“Focus on accuracy, control your speed, and conquer every numerical step.”",
  "“Small disciplined habits daily lead to monumental JEE Main & Advanced ranks.”",
  "“Stay relentless. Your future IITian self is counting on this very session.”",
];

// --- PRESETS CONFIG ---
type TimerPreset = {
  id: string;
  name: string;
  workMin: number;
  breakMin: number;
  icon: any;
  desc: string;
};

const PRESETS: TimerPreset[] = [
  { id: "standard", name: "Standard Pomodoro", workMin: 25, breakMin: 5, icon: Clock, desc: "25m Study • 5m Rest" },
  { id: "deep", name: "JEE Deep Sprint", workMin: 50, breakMin: 10, icon: BrainCircuit, desc: "50m Intensive • 10m Rest" },
  { id: "jee_mock", name: "Full JEE Exam", workMin: 180, breakMin: 15, icon: ShieldAlert, desc: "3 Hours Simulated Test" },
  { id: "sprint", name: "Quick Sprint", workMin: 15, breakMin: 3, icon: Zap, desc: "15m Rapid Revision" },
];

type Theme = "cyber" | "space" | "sunset" | "sapphire";

const THEMES: Record<Theme, { name: string; bg: string; text: string; ringGradient: string[]; accent: string }> = {
  cyber: {
    name: "Cyber Emerald",
    bg: "from-slate-950 via-emerald-950 to-slate-900",
    text: "text-emerald-400",
    ringGradient: ["#10b981", "#34d399", "#059669"],
    accent: "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
  },
  space: {
    name: "Deep Obsidian",
    bg: "from-slate-950 via-purple-950 to-slate-950",
    text: "text-purple-400",
    ringGradient: ["#a855f7", "#c084fc", "#7e22ce"],
    accent: "bg-purple-500 text-white hover:bg-purple-400"
  },
  sunset: {
    name: "Zen Amber",
    bg: "from-slate-950 via-amber-950 to-stone-900",
    text: "text-amber-400",
    ringGradient: ["#f59e0b", "#fbbf24", "#d97706"],
    accent: "bg-amber-500 text-slate-950 hover:bg-amber-400"
  },
  sapphire: {
    name: "Neon Sapphire",
    bg: "from-slate-950 via-cyan-950 to-slate-900",
    text: "text-cyan-400",
    ringGradient: ["#06b6d4", "#38bdf8", "#0284c7"],
    accent: "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
  }
};

export default function FocusProtocolTimer() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"work" | "shortBreak" | "longBreak" | "stopwatch">("work");
  const [selectedPreset, setSelectedPreset] = useState<string>("standard");
  const [workDuration, setWorkDuration] = useState<number>(25 * 60);
  const [breakDuration, setBreakDuration] = useState<number>(5 * 60);
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);
  const [stopwatchTime, setStopwatchTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [completedCycles, setCompletedCycles] = useState<number>(0);
  const [totalFocusMinutesToday, setTotalFocusMinutesToday] = useState<number>(0);

  // Sound and Theme States
  const [ambientSound, setAmbientSound] = useState<"none" | "rain" | "waves" | "binaural">("none");
  const [volume, setVolume] = useState<number>(0.3);
  const [theme, setTheme] = useState<Theme>("cyber");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Subject and Tasks
  const [currentSubject, setCurrentSubject] = useState<string>("Physics");
  const [topicName, setTopicName] = useState<string>("Formula Revision & PYQs");
  const [taskList, setTaskList] = useState<{ id: string; text: string; done: boolean }[]>([
    { id: "1", text: "Solve 10 Chapter PYQs", done: false },
    { id: "2", text: "Review Mistakes in Error Book", done: false },
  ]);
  const [newTaskText, setNewTaskText] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Load persistence
  useEffect(() => {
    try {
      const savedMinutes = localStorage.getItem("tapasya_focus_mins_today");
      if (savedMinutes) setTotalFocusMinutesToday(parseInt(savedMinutes, 10));
      const savedCycles = localStorage.getItem("tapasya_focus_cycles");
      if (savedCycles) setCompletedCycles(parseInt(savedCycles, 10));
    } catch (e) {}
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.code === "Space") {
        e.preventDefault();
        toggleTimer();
      } else if (e.code === "KeyR") {
        e.preventDefault();
        resetTimer();
      } else if (e.code === "KeyF") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.code === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isActive]);

  // Main Timer Interval Loop
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      if (mode === "stopwatch") {
        interval = setInterval(() => {
          setStopwatchTime((t) => t + 1);
        }, 1000);
      } else if (timeLeft > 0) {
        interval = setInterval(() => {
          setTimeLeft((t) => t - 1);
        }, 1000);
      } else if (timeLeft === 0) {
        // Session Complete!
        audioEngine.playChime();
        setIsActive(false);

        if (mode === "work") {
          const newCycles = completedCycles + 1;
          setCompletedCycles(newCycles);
          const addMins = Math.round(workDuration / 60);
          const newTotalMins = totalFocusMinutesToday + addMins;
          setTotalFocusMinutesToday(newTotalMins);

          try {
            localStorage.setItem("tapasya_focus_mins_today", newTotalMins.toString());
            localStorage.setItem("tapasya_focus_cycles", newCycles.toString());
            // Trigger custom event to notify rewards system
            window.dispatchEvent(new Event("rewards_updated"));
          } catch (e) {}

          // Switch to break
          if (newCycles % 4 === 0) {
            setMode("longBreak");
            setTimeLeft(15 * 60);
          } else {
            setMode("shortBreak");
            setTimeLeft(breakDuration);
          }
        } else {
          setMode("work");
          setTimeLeft(workDuration);
        }
        setQuoteIndex((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, mode, workDuration, breakDuration, completedCycles, totalFocusMinutesToday]);

  // Handle ambient audio
  useEffect(() => {
    if (isOpen && isActive && ambientSound !== "none") {
      audioEngine.setSound(ambientSound, volume);
    } else {
      audioEngine.stop();
    }
  }, [isOpen, isActive, ambientSound]);

  useEffect(() => {
    audioEngine.setVolume(volume);
  }, [volume]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    if (mode === "work") setTimeLeft(workDuration);
    else if (mode === "shortBreak") setTimeLeft(breakDuration);
    else if (mode === "longBreak") setTimeLeft(15 * 60);
    else if (mode === "stopwatch") setStopwatchTime(0);
  };

  const applyPreset = (preset: TimerPreset) => {
    setSelectedPreset(preset.id);
    setIsActive(false);
    const workSecs = preset.workMin * 60;
    const breakSecs = preset.breakMin * 60;
    setWorkDuration(workSecs);
    setBreakDuration(breakSecs);
    if (mode === "work") setTimeLeft(workSecs);
    else if (mode === "shortBreak") setTimeLeft(breakSecs);
  };

  const changeMode = (newMode: "work" | "shortBreak" | "longBreak" | "stopwatch") => {
    setIsActive(false);
    setMode(newMode);
    if (newMode === "work") setTimeLeft(workDuration);
    else if (newMode === "shortBreak") setTimeLeft(breakDuration);
    else if (newMode === "longBreak") setTimeLeft(15 * 60);
    else if (newMode === "stopwatch") setStopwatchTime(0);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {});
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  const formatDisplayTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getProgressPercent = () => {
    if (mode === "stopwatch") return 100;
    let total = workDuration;
    if (mode === "shortBreak") total = breakDuration;
    if (mode === "longBreak") total = 15 * 60;
    if (total <= 0) return 0;
    return Math.min(100, Math.max(0, ((total - timeLeft) / total) * 100));
  };

  const addTask = () => {
    if (!newTaskText.trim()) return;
    setTaskList([...taskList, { id: Date.now().toString(), text: newTaskText.trim(), done: false }]);
    setNewTaskText("");
  };

  const toggleTask = (id: string) => {
    setTaskList(taskList.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id: string) => {
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  const activeTheme = THEMES[theme];

  return (
    <>
      {/* Small Launcher Card on Page */}
      <div
        onClick={() => setIsOpen(true)}
        className="bg-white rounded-3xl border border-emerald-100/80 p-6 md:p-8 flex items-center justify-between shadow-sm hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group border-b-4 border-b-emerald-600/20"
      >
        <div className="absolute -right-12 -top-12 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none text-emerald-800">
          <Clock size={220} />
        </div>

        <div className="flex items-center gap-5 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/20 group-hover:scale-105 transition-transform">
            <BrainCircuit size={32} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-black uppercase tracking-widest">
                Deep Work Mode
              </span>
              {isActive && (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-black heading-display text-emerald-950 uppercase tracking-tight mt-1">
              Focus Protocol
            </h3>
            <p className="text-xs font-bold text-emerald-900/60 mt-0.5">
              Full-Screen Ambient Study Terminal & Ambient Noise
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          {isActive && (
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-2xl font-black tabular-nums text-emerald-950">
                {formatDisplayTime(timeLeft)}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                Active Session
              </span>
            </div>
          )}
          <button className="px-5 py-3 rounded-2xl bg-emerald-950 text-white font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:bg-emerald-800 transition-colors shadow-md">
            <span>OPEN TERMINAL</span>
            <Maximize2 size={16} />
          </button>
        </div>
      </div>

      {/* FULL-SCREEN IMMERSIVE STUDY TERMINAL OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "fixed inset-0 z-[100] flex flex-col text-white font-sans overflow-y-auto select-none bg-gradient-to-br",
              activeTheme.bg
            )}
          >
            {/* Top Navigation Header */}
            <header className="w-full px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/30 backdrop-blur-md sticky top-0 z-30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 border border-white/10">
                  <BrainCircuit size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-black text-base md:text-lg tracking-wider uppercase text-white">
                      FOCUS PROTOCOL
                    </h2>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-widest">
                      JEE TERMINAL
                    </span>
                  </div>
                  <p className="text-xs text-white/50 font-medium hidden sm:block">
                    Zero-Distraction Execution Engine
                  </p>
                </div>
              </div>

              {/* Center Quick Stats */}
              <div className="hidden lg:flex items-center gap-6 bg-white/5 px-5 py-2 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-xs">
                  <Flame size={16} className="text-orange-400" />
                  <span className="text-white/60">Sessions Today:</span>
                  <span className="font-black text-white">{completedCycles}</span>
                </div>
                <div className="h-4 w-[1px] bg-white/10" />
                <div className="flex items-center gap-2 text-xs">
                  <Clock size={16} className="text-emerald-400" />
                  <span className="text-white/60">Total Focused:</span>
                  <span className="font-black text-white">{totalFocusMinutesToday} mins</span>
                </div>
              </div>

              {/* Top Right Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className={cn(
                    "p-2.5 rounded-xl border transition-all text-xs font-bold flex items-center gap-2",
                    showSettings ? "bg-white text-slate-950 border-white" : "bg-white/10 border-white/10 text-white/80 hover:text-white"
                  )}
                  title="Customize Timer & Theme"
                >
                  <Sliders size={18} />
                  <span className="hidden md:inline">Presets & Custom</span>
                </button>

                <button
                  onClick={toggleFullscreen}
                  className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all"
                  title="Toggle Fullscreen (F)"
                >
                  {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 hover:bg-red-500 hover:text-white transition-all ml-2"
                  title="Exit Terminal (Esc)"
                >
                  <X size={20} />
                </button>
              </div>
            </header>

            {/* Main Terminal View Grid */}
            <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Subject Focus & Ambient Controls */}
              <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
                {/* Subject & Chapter Widget */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md space-y-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-white/50 flex items-center gap-1.5">
                      <Target size={14} className="text-emerald-400" /> ACTIVE TARGET
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">
                        SUBJECT
                      </label>
                      <select
                        value={currentSubject}
                        onChange={(e) => setCurrentSubject(e.target.value)}
                        className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-bold text-white outline-none focus:border-emerald-500 transition-colors"
                      >
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Mock Test">Full Mock Test</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">
                        TOPIC / CHAPTER
                      </label>
                      <input
                        type="text"
                        value={topicName}
                        onChange={(e) => setTopicName(e.target.value)}
                        placeholder="e.g. Rotational Motion PYQs"
                        className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-colors placeholder:text-white/30"
                      />
                    </div>
                  </div>
                </div>

                {/* Ambient Sound Synthesizer Panel */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md space-y-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-white/50 flex items-center gap-1.5">
                      <Headphones size={14} className="text-emerald-400" /> AMBIENT SOUND
                    </span>
                    {ambientSound !== "none" && (
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider animate-pulse">
                        PLAYING
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "none", label: "Silent", icon: VolumeX },
                      { id: "rain", label: "Rainstorm", icon: CloudRain },
                      { id: "waves", label: "Deep Ocean", icon: Waves },
                      { id: "binaural", label: "Alpha Beat", icon: Zap },
                    ].map((s) => {
                      const Icon = s.icon;
                      const active = ambientSound === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => setAmbientSound(s.id as any)}
                          className={cn(
                            "flex items-center gap-2 p-3 rounded-2xl border text-xs font-bold transition-all text-left",
                            active
                              ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-md"
                              : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                          )}
                        >
                          <Icon size={16} />
                          <span>{s.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {ambientSound !== "none" && (
                    <div className="pt-2 space-y-1.5">
                      <div className="flex justify-between text-[10px] text-white/60 font-bold">
                        <span>VOLUME</span>
                        <span>{Math.round(volume * 100)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="w-full accent-emerald-400 cursor-pointer"
                      />
                    </div>
                  )}
                </div>

                {/* Theme Selector */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md space-y-3 shadow-xl">
                  <span className="text-xs font-black uppercase tracking-widest text-white/50 block">
                    THEME ATMOSPHERE
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(THEMES) as Theme[]).map((tKey) => (
                      <button
                        key={tKey}
                        onClick={() => setTheme(tKey)}
                        className={cn(
                          "px-3 py-2 rounded-xl text-xs font-bold border transition-all text-center",
                          theme === tKey
                            ? "bg-white text-slate-950 border-white font-black shadow-md"
                            : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                        )}
                      >
                        {THEMES[tKey].name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Column: Giant Animated Timer & Ring */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-8 order-1 lg:order-2 py-4">
                
                {/* Modes Bar */}
                <div className="flex items-center gap-1.5 p-1.5 bg-white/10 backdrop-blur-lg border border-white/15 rounded-full shadow-2xl">
                  <button
                    onClick={() => changeMode("work")}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
                      mode === "work"
                        ? "bg-white text-slate-950 shadow-xl"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    <BrainCircuit size={14} />
                    <span>Focus</span>
                  </button>

                  <button
                    onClick={() => changeMode("shortBreak")}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
                      mode === "shortBreak"
                        ? "bg-white text-slate-950 shadow-xl"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    <Coffee size={14} />
                    <span>Short Break</span>
                  </button>

                  <button
                    onClick={() => changeMode("longBreak")}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
                      mode === "longBreak"
                        ? "bg-white text-slate-950 shadow-xl"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    <Coffee size={14} />
                    <span>Long Break</span>
                  </button>

                  <button
                    onClick={() => changeMode("stopwatch")}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
                      mode === "stopwatch"
                        ? "bg-white text-slate-950 shadow-xl"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    <Zap size={14} />
                    <span>Flow Mode</span>
                  </button>
                </div>

                {/* Preset Picker Drawer if settings toggled */}
                <AnimatePresence>
                  {showSettings && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="w-full bg-white/10 border border-white/15 rounded-3xl p-5 backdrop-blur-xl space-y-4 overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-widest text-emerald-300">
                          QUICK PRESETS & DURATION
                        </span>
                        <button
                          onClick={() => setShowSettings(false)}
                          className="text-white/40 hover:text-white text-xs"
                        >
                          Close
                        </button>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {PRESETS.map((p) => {
                          const Icon = p.icon;
                          const active = selectedPreset === p.id;
                          return (
                            <button
                              key={p.id}
                              onClick={() => applyPreset(p)}
                              className={cn(
                                "p-3 rounded-2xl border text-left flex flex-col justify-between transition-all",
                                active
                                  ? "bg-white text-slate-950 border-white shadow-lg font-bold"
                                  : "bg-black/30 border-white/10 text-white/70 hover:text-white"
                              )}
                            >
                              <Icon size={18} className="mb-2" />
                              <div>
                                <p className="text-xs font-extrabold">{p.name}</p>
                                <p className="text-[10px] opacity-70 mt-0.5">{p.desc}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Custom Minutes Input */}
                      <div className="pt-3 border-t border-white/10 flex items-center gap-4">
                        <span className="text-xs font-bold text-white/70">Custom Focus Minutes:</span>
                        <input
                          type="number"
                          min="1"
                          max="300"
                          value={Math.round(workDuration / 60)}
                          onChange={(e) => {
                            const val = Math.max(1, parseInt(e.target.value) || 25);
                            setWorkDuration(val * 60);
                            if (mode === "work") setTimeLeft(val * 60);
                          }}
                          className="w-20 bg-black/40 border border-white/20 rounded-xl px-3 py-1.5 text-sm font-black text-center text-white outline-none focus:border-emerald-400"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Circular SVG Timer Display */}
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center my-4">
                  <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_35px_rgba(16,185,129,0.3)]">
                    <defs>
                      <linearGradient id="gradientRing" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={activeTheme.ringGradient[0]} />
                        <stop offset="50%" stopColor={activeTheme.ringGradient[1]} />
                        <stop offset="100%" stopColor={activeTheme.ringGradient[2]} />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="50%"
                      cy="50%"
                      r="43%"
                      className="stroke-white/10"
                      strokeWidth="12"
                      fill="transparent"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="43%"
                      stroke="url(#gradientRing)"
                      strokeWidth="14"
                      strokeDasharray="270"
                      strokeDashoffset={270 - (270 * getProgressPercent()) / 100}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-1000 ease-linear"
                      style={{
                        strokeDasharray: 2 * Math.PI * 150,
                        strokeDashoffset: (2 * Math.PI * 150) * (1 - getProgressPercent() / 100)
                      }}
                    />
                  </svg>

                  {/* Inner Timer Digits & Info */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-2">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-white/50">
                      {mode === "work" ? `${currentSubject.toUpperCase()} SESSION` : mode === "stopwatch" ? "ZEN FLOW TIME" : "RECOVERY BREAK"}
                    </span>

                    <div className="text-6xl sm:text-7xl lg:text-8xl font-black heading-display tracking-tight text-white tabular-nums drop-shadow-2xl">
                      {mode === "stopwatch" ? formatDisplayTime(stopwatchTime) : formatDisplayTime(timeLeft)}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                        {Math.round(getProgressPercent())}% Completed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Primary Control Buttons */}
                <div className="flex items-center gap-6 pt-2">
                  <button
                    onClick={resetTimer}
                    className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 text-white/70 hover:text-white hover:bg-white/20 transition-all active:scale-95 flex items-center justify-center"
                    title="Reset Timer (R)"
                  >
                    <RotateCcw size={22} />
                  </button>

                  <button
                    onClick={toggleTimer}
                    className={cn(
                      "w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl transition-all active:scale-95 group",
                      activeTheme.accent,
                      isActive && "animate-pulse"
                    )}
                    title="Start / Pause (Space)"
                  >
                    {isActive ? (
                      <Pause size={42} className="fill-current" />
                    ) : (
                      <Play size={42} className="fill-current translate-x-1" />
                    )}
                  </button>

                  <button
                    onClick={() => {
                      if (mode === "work" && timeLeft > 10) setTimeLeft(5);
                      else if (mode === "shortBreak") setTimeLeft(5);
                    }}
                    className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 text-white/70 hover:text-white hover:bg-white/20 transition-all active:scale-95 flex items-center justify-center"
                    title="Skip Current Phase"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Motivational Quote Banner */}
                <p className="text-center text-xs sm:text-sm font-medium text-white/70 italic max-w-md px-4 pt-2">
                  {MOTIVATIONAL_QUOTES[quoteIndex]}
                </p>
              </div>

              {/* Right Column: Session Tasks & Goals Checklist */}
              <div className="lg:col-span-3 space-y-6 order-3">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md space-y-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-white/50 flex items-center gap-1.5">
                      <BookmarkCheck size={14} className="text-emerald-400" /> SESSION GOALS
                    </span>
                    <span className="text-[10px] font-bold text-white/40">
                      {taskList.filter((t) => t.done).length}/{taskList.length} Done
                    </span>
                  </div>

                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {taskList.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-all",
                          task.done
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300/60 line-through"
                            : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                        )}
                      >
                        <div className="flex items-center gap-2.5 text-xs font-medium pr-2">
                          <div
                            className={cn(
                              "w-4 h-4 rounded-md border flex items-center justify-center shrink-0",
                              task.done ? "bg-emerald-500 border-emerald-500 text-slate-950" : "border-white/30"
                            )}
                          >
                            {task.done && <Check size={12} strokeWidth={3} />}
                          </div>
                          <span>{task.text}</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteTask(task.id);
                          }}
                          className="text-white/30 hover:text-red-400 p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-1">
                    <input
                      type="text"
                      value={newTaskText}
                      onChange={(e) => setNewTaskText(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addTask()}
                      placeholder="Add session goal..."
                      className="flex-1 bg-slate-900/90 border border-white/15 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-emerald-400 placeholder:text-white/30"
                    />
                    <button
                      onClick={addTask}
                      className="p-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Keyboard Shortcuts Hint */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md space-y-2 shadow-xl">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">
                    KEYBOARD SHORTCUTS
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-white/60">
                    <div className="flex items-center justify-between bg-black/30 px-2.5 py-1.5 rounded-lg border border-white/5">
                      <span>Space</span>
                      <span className="font-mono text-white">Start/Pause</span>
                    </div>
                    <div className="flex items-center justify-between bg-black/30 px-2.5 py-1.5 rounded-lg border border-white/5">
                      <span>R</span>
                      <span className="font-mono text-white">Reset</span>
                    </div>
                    <div className="flex items-center justify-between bg-black/30 px-2.5 py-1.5 rounded-lg border border-white/5">
                      <span>F</span>
                      <span className="font-mono text-white">Fullscreen</span>
                    </div>
                    <div className="flex items-center justify-between bg-black/30 px-2.5 py-1.5 rounded-lg border border-white/5">
                      <span>Esc</span>
                      <span className="font-mono text-white">Exit</span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
