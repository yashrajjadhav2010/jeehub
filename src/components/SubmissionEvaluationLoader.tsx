import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Atom, FlaskConical, Calculator, ShieldCheck, Sparkles, BrainCircuit } from 'lucide-react';
import { AxiomMascot } from './AxiomMascot';

interface SubmissionEvaluationLoaderProps {
  onComplete?: () => void;
  durationMs?: number;
  totalQuestions?: number;
}

interface EvaluationStage {
  id: number;
  threshold: number; // progress percentage threshold to enter
  title: string;
  subtitle: string;
  tag: string;
  subjectIcon?: 'physics' | 'chemistry' | 'math' | 'all';
}

const EVALUATION_STAGES: EvaluationStage[] = [
  {
    id: 1,
    threshold: 0,
    title: "Indexing Response Sheet",
    subtitle: "Auditing marked vectors, visit order & time-per-question telemetry",
    tag: "OMR Ingestion",
    subjectIcon: 'all',
  },
  {
    id: 2,
    threshold: 24,
    title: "Applying NTA Scoring Matrix",
    subtitle: "Computing +4 accuracy, integer tolerances & negative marking penalties",
    tag: "CBT Marking Engine",
    subjectIcon: 'physics',
  },
  {
    id: 3,
    threshold: 54,
    title: "Synthesizing AI Diagnostics",
    subtitle: "Logging conceptual errors into your Error Book for targeted revision",
    tag: "Axiom Telemetry",
    subjectIcon: 'chemistry',
  },
  {
    id: 4,
    threshold: 82,
    title: "Calibrating Rank & Percentile",
    subtitle: "Finalizing chapter mastery radar, accuracy ratio & AIR trajectory",
    tag: "Scorecard Assembly",
    subjectIcon: 'math',
  },
];

const TAPASYA_QUOTES = [
  "Precision over speed: negative marks separate ranks more than difficult questions.",
  "Every error logged into your Error Book today is 4 marks secured on JEE D-Day.",
  "Consistency is the true Tapasya. Review your conceptual missteps thoroughly.",
  "Calibrating your subject radar across Physics, Chemistry, and Mathematics.",
];

export const SubmissionEvaluationLoader: React.FC<SubmissionEvaluationLoaderProps> = ({
  onComplete,
  durationMs = 2800,
  totalQuestions,
}) => {
  const [progress, setProgress] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);

  // Quote rotation
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIdx(prev => (prev + 1) % TAPASYA_QUOTES.length);
    }, 1800);
    return () => clearInterval(quoteInterval);
  }, []);

  // Smooth progress calculation
  useEffect(() => {
    const startTime = performance.now();
    let animFrame: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(100, (elapsed / durationMs) * 100);
      
      // Natural non-linear easing (starts fast, pauses slightly during diagnostic, then finishes strong)
      let displayProgress: number;
      if (rawProgress < 30) {
        displayProgress = rawProgress * 1.1;
      } else if (rawProgress < 70) {
        displayProgress = 33 + (rawProgress - 30) * 0.85;
      } else {
        displayProgress = 67 + (rawProgress - 70) * 1.1;
      }
      
      const clamped = Math.min(100, Math.round(displayProgress));
      setProgress(clamped);

      if (elapsed < durationMs) {
        animFrame = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setIsFinishing(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 350);
      }
    };

    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, [durationMs, onComplete]);

  // Determine current active stage
  const currentStageIndex = EVALUATION_STAGES.reduce((acc, stage, idx) => {
    return progress >= stage.threshold ? idx : acc;
  }, 0);

  const currentStage = EVALUATION_STAGES[currentStageIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] flex flex-col items-center justify-between bg-gradient-to-b from-[#021811] via-[#04241a] to-[#01110b] text-white p-4 sm:p-6 md:p-8 select-none overflow-hidden"
    >
      {/* Background Quantum Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[380px] h-[380px] bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[340px] h-[340px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* TOP ZONE: Brand Wordmark & Mode Indicator */}
      <div className="w-full max-w-4xl flex items-center justify-between border-b border-emerald-900/40 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1.5px] shadow-lg shadow-emerald-950/60">
            <div className="w-full h-full bg-[#032016] rounded-[10px] flex items-center justify-center font-black text-xs text-emerald-400 tracking-wider">
              JT
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base font-black tracking-tight uppercase text-white font-mono">
                JEE TAPASYA
              </span>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400/80 px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/50">
                CBT EVALUATOR
              </span>
            </div>
            <p className="text-[10px] text-emerald-400/60 font-medium tracking-wide">
              NTA Compliant Scoring & AI Diagnostic Terminal
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-right">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-emerald-300 font-bold uppercase tracking-wider hidden sm:inline">
            Live Calibration
          </span>
          {totalQuestions && (
            <span className="text-[10px] font-mono text-emerald-400/50 bg-emerald-900/30 px-2 py-0.5 rounded border border-emerald-800/40">
              {totalQuestions} Qs
            </span>
          )}
        </div>
      </div>

      {/* CENTER ZONE: The Unique Brand Reactor Animation */}
      <div className="flex-1 flex flex-col items-center justify-center my-auto w-full max-w-2xl relative z-10 py-6">
        {/* Reactor Visual Stage */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center mb-6">
          {/* Gyroscopic Orbital Rings with Subject Glyphs */}

          {/* Orbit 1: Physics Ring (Cyan / Azure) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 pointer-events-none"
          >
            {/* Physics Node */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#021d15] border border-cyan-400/70 text-cyan-300 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg shadow-cyan-950/80 backdrop-blur-md"
            >
              <Atom size={12} className="text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Physics</span>
            </motion.div>
          </motion.div>

          {/* Orbit 2: Chemistry Ring (Emerald / Mint) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-5 rounded-full border border-emerald-400/30 pointer-events-none"
          >
            {/* Chemistry Node */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-[#021d15] border border-emerald-400/70 text-emerald-300 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-950/80 backdrop-blur-md"
            >
              <FlaskConical size={12} className="text-emerald-400" />
              <span>Chemistry</span>
            </motion.div>
          </motion.div>

          {/* Orbit 3: Mathematics Ring (Amber / Gold) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-10 rounded-full border border-amber-400/25 pointer-events-none"
          >
            {/* Mathematics Node */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -right-4 -translate-y-1/2 bg-[#021d15] border border-amber-400/70 text-amber-300 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg shadow-amber-950/80 backdrop-blur-md"
            >
              <Calculator size={12} className="text-amber-400" />
              <span>Maths</span>
            </motion.div>
          </motion.div>

          {/* Pulsing Energy Core */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.7, 0.95, 0.7],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-emerald-600/20 via-teal-500/30 to-amber-500/20 blur-xl pointer-events-none"
          />

          {/* Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              className="text-emerald-950/40"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="46"
              className="text-emerald-400 transition-all duration-150 ease-out"
              strokeWidth="2.8"
              strokeDasharray={289}
              strokeDashoffset={289 - (289 * progress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>

          {/* Center Mascot: Axiom in Quantum Thinking State */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <AxiomMascot size="lg" isThinking={true} className="drop-shadow-[0_0_24px_rgba(16,185,129,0.35)]" />
          </div>
        </div>

        {/* Telemetry Counter & Percentage */}
        <div className="flex flex-col items-center text-center w-full px-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl sm:text-5xl font-black font-mono tracking-tighter text-white tabular-nums">
              {progress}
            </span>
            <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400">
              %
            </span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full max-w-md h-2 bg-emerald-950/80 rounded-full border border-emerald-800/40 p-[2px] mb-4 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Active Evaluation Stage Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="bg-emerald-950/50 border border-emerald-800/50 backdrop-blur-md px-5 py-3 rounded-2xl max-w-md w-full shadow-xl shadow-black/40"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Stage 0{currentStage.id} · {currentStage.tag}
                </span>
                <span className="text-[10px] font-mono text-emerald-400/60 flex items-center gap-1">
                  <BrainCircuit size={11} className="text-emerald-400" />
                  Calibrating
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {currentStage.title}
              </h3>
              <p className="text-xs text-emerald-200/70 font-medium leading-relaxed mt-0.5">
                {currentStage.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Stage Milestones */}
          <div className="grid grid-cols-4 gap-2 w-full max-w-md mt-3.5">
            {EVALUATION_STAGES.map((s, idx) => {
              const isPast = progress > s.threshold + 20;
              const isCurrent = currentStageIndex === idx;

              return (
                <div
                  key={s.id}
                  className={`flex flex-col items-center gap-1 p-1.5 rounded-lg border transition-all ${
                    isPast
                      ? 'border-emerald-600/50 bg-emerald-900/30 text-emerald-300'
                      : isCurrent
                      ? 'border-emerald-400 bg-emerald-900/60 text-white shadow-[0_0_8px_rgba(52,211,153,0.3)]'
                      : 'border-emerald-950 bg-emerald-950/20 text-emerald-600/50'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    {isPast ? (
                      <CheckCircle2 size={13} className="text-emerald-400" />
                    ) : (
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isCurrent ? 'bg-emerald-400 animate-ping' : 'bg-emerald-800/40'
                        }`}
                      />
                    )}
                  </div>
                  <span className="text-[9px] font-mono uppercase font-bold tracking-wider truncate w-full text-center">
                    {s.tag.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM ZONE: Tapasya Wisdom / Aspirant Quote Ticker */}
      <div className="w-full max-w-xl text-center relative z-10 pt-2 border-t border-emerald-900/40">
        <div className="flex items-center justify-center gap-2 mb-1 text-amber-400 text-[10px] font-mono tracking-widest uppercase font-bold">
          <Sparkles size={11} className="text-amber-400" />
          <span>Tapasya Axiom</span>
          <Sparkles size={11} className="text-amber-400" />
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={quoteIdx}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="text-xs sm:text-sm text-emerald-200/80 italic font-medium max-w-lg mx-auto min-h-[36px] flex items-center justify-center"
          >
            "{TAPASYA_QUOTES[quoteIdx]}"
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Finishing Flash Overlay */}
      {isFinishing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-emerald-950/80 backdrop-blur-md flex flex-col items-center justify-center z-50 text-center p-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-16 h-16 rounded-2xl bg-emerald-500 text-emerald-950 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.8)] mb-4"
          >
            <ShieldCheck size={36} />
          </motion.div>
          <h2 className="text-2xl font-black font-mono tracking-tight text-white uppercase">
            Scorecard Ready
          </h2>
          <p className="text-xs text-emerald-300 font-mono tracking-wide mt-1">
            Loading your performance analytics...
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};
