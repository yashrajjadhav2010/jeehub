import { motion } from "motion/react";
import {
  Trophy,
  Clock,
  Zap,
  Target,
  ArrowRight,
  Shield,
  Flame,
  Swords,
  Info,
  CheckCircle2,
  CheckCircle,
  Crown,
  Medal,
  Sword,
  BrainCircuit,
  Coffee,
  Pause,
  Play,
  RotateCcw,
  X,
  Maximize2,
  Gift,
  Coins,
  Copy,
  Check,
  Share2,
} from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn, calculatePredictedRank, formatRank } from "../lib/utils";


function ReferralWidget() {
  const [copied, setCopied] = useState(false);
  const coins = parseInt(localStorage.getItem('coins') || '0', 10);
  const refCode = localStorage.getItem('referralCode') || '';
  const refLink = `${window.location.origin}/?ref=${refCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join me on JEE Practice Hub',
          text: 'Use my referral link to get 5 free AI request coins!',
          url: refLink,
        });
      } catch (err) {
        console.error('Share failed', err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-[2rem] p-6 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-between shadow-xl w-full relative overflow-hidden group">
      <div className="absolute -right-10 -top-10 opacity-[0.05] scale-150 pointer-events-none text-emerald-400 group-hover:scale-110 transition-transform duration-700">
        <Gift size={200} />
      </div>
      <div className="flex items-center gap-4 md:gap-6 flex-1 w-full relative z-10">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-emerald-400/20 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <Gift size={28} className="md:w-8 md:h-8" />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-lg md:text-xl font-black heading-display text-white uppercase tracking-tight">
            Refer & Earn AI Requests
          </h3>
          <p className="text-emerald-100/70 text-xs sm:text-sm max-w-md font-medium leading-relaxed">
            Out of AI limits? Share your link. Get <span className="text-yellow-400 font-bold">10 coins</span> per friend, they get <span className="text-yellow-400 font-bold">5 coins</span>. Each extra AI request costs 1 coin.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full lg:w-auto">
        <div className="flex items-center gap-3 bg-emerald-950/50 rounded-xl px-4 py-3 border border-emerald-800/50 w-full sm:w-auto shrink-0">
          <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
            <Coins size={18} />
          </div>
          <div>
            <div className="text-[9px] font-black uppercase tracking-widest text-emerald-400/60">Your Balance</div>
            <div className="font-black text-white">{coins} Coins</div>
          </div>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto shrink-0">
          <button
            onClick={handleCopy}
            className="flex-1 sm:flex-none h-12 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
          
                      <button
              onClick={handleShare}
              className="flex-1 sm:flex-none h-12 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
            >
              <Share2 size={16} />
              <span>Share</span>
            </button>

        </div>
      </div>
    </div>
  );
}

export default function Challenges() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<any>(null);
  const [showRankInfo, setShowRankInfo] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("userStats");
    if (saved) setStats(JSON.parse(saved));
  }, []);

  const missionsCompleted = stats?.missionsCompleted || 0;
  const correctAnswers = stats?.correctAnswers || 0;
  const totalSolved = stats?.totalSolved || 0;
  const accuracy = totalSolved > 0 ? correctAnswers / totalSolved : 0;

  const calculateRank = () => {
    return calculatePredictedRank(stats);
  };

  const totalPoints = correctAnswers * 10 + missionsCompleted * 100;
  const currentQuestions = stats?.totalSolved || 0;
  const currentStreak = stats?.streak || 0;

  const activeChallenges = [
    {
      id: "blitz-organic",
      title: "Blitz: IUPAC Sniper",
      description:
        "Complete 30 nomenclature questions in under 15 minutes with 95% accuracy.",
      points: 450,
      timeLimit: "15m",
      intensity: "High",
      type: "Time Trial",
      icon: Zap,
      color: "bg-orange-500",
      path: "/quiz/chemistry/iupac-nomenclature/set1",
    },
    {
      id: "deep-physics",
      title: "Electrostatic Lockdown",
      description: "Master advanced Kinematics problems. No hints allowed.",
      points: 600,
      timeLimit: "45m",
      intensity: "Critical",
      type: "Expert Mode",
      icon: Shield,
      color: "bg-blue-600",
      path: "/quiz/physics/kinematics/set-01",
    },
    {
      id: "math-marathon",
      title: "Integration Marathon",
      description: "Solve indefinite integrals. Accuracy bonus active.",
      points: 1200,
      timeLimit: "90m",
      intensity: "Medium",
      type: "Endurance",
      icon: Target,
      color: "bg-emerald-500",
      path: "/quiz/maths/integration/set1",
    },
  ];

  const handleInitiate = (path: string) => {
    localStorage.setItem("activeChallenge", "true");
    navigate(path);
  };

  return (
    <div className="space-y-12 pb-20 w-full min-w-0">
      <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <Trophy size={14} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">
              Live Events
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">
            Mission <span className="text-primary not-italic">Challenges</span>
          </h1>
          <p className="text-emerald-900/40 font-medium max-w-xl text-sm sm:text-base">
            High-intensity mission objectives designed to refine your
            operational speed and conceptual precision.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
          <div className="flex-1 min-w-[140px] p-4 bg-white rounded-2xl border-2 border-emerald-50 flex items-center gap-4 shadow-xl shadow-emerald-900/5">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
              <Flame size={20} />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-black text-emerald-900/40 uppercase tracking-widest">
                Active Streak
              </p>
              <p className="text-lg sm:text-xl font-black text-emerald-950">
                {stats?.streak || 0} DAYS
              </p>
            </div>
          </div>
          <div className="flex-1 min-w-[140px] p-4 bg-emerald-950 rounded-2xl flex items-center gap-4 shadow-2xl">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
              <Swords size={20} />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                Global Rank
              </p>
              <div className="flex flex-col items-start">
                <p className="text-lg sm:text-xl font-black text-white leading-none">
                  {formatRank(calculateRank())}
                </p>
                <div
                  className="group relative inline-flex items-center gap-1 mt-1 cursor-pointer focus:outline-none"
                  onClick={() => setShowRankInfo(!showRankInfo)}
                  onBlur={() => setShowRankInfo(false)}
                  tabIndex={0}
                >
                  <Info
                    size={10}
                    className={cn(
                      "transition-colors",
                      showRankInfo
                        ? "text-emerald-400"
                        : "text-emerald-400/50 group-hover:text-emerald-400",
                    )}
                  />
                  <span
                    className={cn(
                      "text-[8px] font-bold uppercase tracking-widest transition-colors",
                      showRankInfo
                        ? "text-emerald-100"
                        : "text-emerald-100/30 group-hover:text-emerald-100",
                    )}
                  >
                    Info
                  </span>
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-2 w-48 bg-emerald-900 text-emerald-50 text-[10px] leading-relaxed p-2 rounded-lg border border-emerald-700/50 shadow-xl transition-all z-50 tracking-normal normal-case",
                      showRankInfo
                        ? "opacity-100 visible"
                        : "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                    )}
                  >
                    Rank is calculated on the basis of correct question solved
                    and it can vary.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <WeeklyGoalWidget stats={stats} setStats={setStats} />
        <PomodoroWidget />
      </div>
      <ReferralWidget />

      <div className="grid lg:grid-cols-3 gap-8 w-full">
        <div className="lg:col-span-2 space-y-6 min-w-0 w-full">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900/30 px-2">
            Active Objectives
          </h3>
          <div className="space-y-6">
            {activeChallenges.map((challenge, idx) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-[3rem]",
                    challenge.color,
                  )}
                />
                <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-emerald-50 hover:border-emerald-200 shadow-xl shadow-emerald-900/5 hover:shadow-emerald-900/10 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 transition-all relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none scale-150 -translate-y-4">
                    <challenge.icon size={160} />
                  </div>

                  <div
                    className={cn(
                      "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500",
                      challenge.color,
                    )}
                  >
                    <challenge.icon className="size-[24px] sm:size-[32px]" />
                  </div>

                  <div className="flex-1 space-y-3 text-left w-full min-w-0">
                    <div className="flex flex-wrap justify-start gap-2 sm:gap-3 mb-1">
                      <span
                        className={cn(
                          "text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border",
                          challenge.intensity === "Critical"
                            ? "text-red-600 bg-red-50 border-red-100"
                            : challenge.intensity === "High"
                              ? "text-orange-600 bg-orange-50 border-orange-100"
                              : "text-emerald-600 bg-emerald-50 border-emerald-100",
                        )}
                      >
                        {challenge.intensity} Intensity
                      </span>
                      <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-emerald-900/40 bg-emerald-50/50 px-3 py-1 rounded-lg border border-emerald-100/50">
                        {challenge.type}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-black text-emerald-950 uppercase tracking-tight">
                        {challenge.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-emerald-800/60 leading-relaxed max-w-md mt-1 break-words">
                        {challenge.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-center gap-4 w-full md:w-auto mt-2 md:mt-0 shrink-0">
                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50/50 rounded-xl border border-emerald-50 w-full md:w-auto justify-center">
                      <Clock size={14} className="text-emerald-900/40" />
                      <span className="text-[10px] sm:text-xs font-black text-emerald-900/60 uppercase tracking-widest">
                        {challenge.timeLimit}
                      </span>
                    </div>
                    <button
                      onClick={() => handleInitiate(challenge.path)}
                      className={cn(
                        "w-full px-8 py-3.5 text-white rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-xl md:group-hover:px-10 whitespace-nowrap",
                        challenge.color,
                      )}
                    >
                      Initiate
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6 min-w-0 w-full">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900/30 px-2">
            Operator Badges
          </h3>
          <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 space-y-6">
            <div className="space-y-6">
              {/* Day Streak Badges */}
              <div>
                <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">
                  Consistency (Day Streak)
                </h4>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x custom-scrollbar">
                  {[5, 10, 25].map((req) => {
                    const achieved = currentStreak >= req;
                    const badgeImg = {
                      5: "https://i.ibb.co/k61CnZqB/day5.png",
                      10: "https://i.ibb.co/NdYTCBPN/day10.png",
                      25: "https://i.ibb.co/NnxD5y23/day25.png",
                    }[req as 5 | 10 | 25];

                    return (
                      <div
                        key={req}
                        className={cn(
                          "min-w-[120px] max-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0 relative overflow-hidden",
                          achieved
                            ? "bg-orange-50 border-orange-200"
                            : "bg-white border-emerald-50 opacity-40 grayscale",
                        )}
                      >
                        {achieved && (
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rotate-45 -translate-x-full animate-[shimmer_2s_infinite]" />
                        )}
                        <div
                          className={cn(
                            "w-16 h-16 flex items-center justify-center",
                          )}
                        >
                          {badgeImg ? (
                            <img src={badgeImg} alt={`${req} Day Streak`} className="w-full h-full object-contain drop-shadow-sm" />
                          ) : (
                            <div className={cn("w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2", achieved ? "bg-orange-500 text-white border-orange-300" : "bg-emerald-100 text-emerald-300 border-transparent")}>
                              <Flame size={28} className={achieved ? "fill-orange-400" : ""} />
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">
                          {req} Day
                          <br />
                          Streak
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Questions Solved Badges */}
              <div>
                <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">
                  Endurance (Missions Cleared)
                </h4>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x custom-scrollbar">
                  {[50, 100, 300, 1000].map((req) => {
                    const achieved = currentQuestions >= req;
                    const getBadgeInfo = (req: number) => {
                      switch (req) {
                        case 50:
                          return {
                            image: "https://i.ibb.co/Xr6zZtNY/50.png",
                            color: "blue",
                            name: "Tapasya Starter",
                          };
                        case 100:
                          return {
                            image: "https://i.ibb.co/p6kc7WKX/100.png",
                            color: "indigo",
                            name: "Tapasya Warrior",
                          };
                        case 300:
                          return {
                            image: "https://i.ibb.co/RGV0tD6k/300.png",
                            color: "purple",
                            name: "Problem Crusher",
                          };
                        case 1000:
                          return {
                            image: "https://i.ibb.co/5bqYMrh/file-00000000c88472078520c8a8552cfb9f.png",
                            color: "rose",
                            name: "Tapasya Grandmaster",
                          };
                        default:
                          return { image: null, color: "emerald", name: "" };
                      }
                    };
                    const badge = getBadgeInfo(req);
                    const colorStyles = achieved
                      ? {
                          blue: "bg-blue-50 border-blue-200",
                          indigo: "bg-indigo-50 border-indigo-200",
                          purple: "bg-purple-50 border-purple-200",
                          amber: "bg-amber-50 border-amber-200",
                          rose: "bg-rose-50 border-rose-200",
                          emerald: "bg-emerald-50 border-emerald-200",
                        }[badge.color]
                      : "bg-white border-emerald-50 opacity-40 grayscale";

                    return (
                      <div
                        key={req}
                        className={cn(
                          "min-w-[120px] max-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0 relative overflow-hidden",
                          colorStyles,
                        )}
                      >
                        {achieved && (
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rotate-45 -translate-x-full animate-[shimmer_2s_infinite]" />
                        )}
                        <div
                          className={cn(
                            "w-16 h-16 flex items-center justify-center",
                          )}
                        >
                          {badge.image && (
                            <img src={badge.image} alt={badge.name} className="w-full h-full object-contain drop-shadow-sm" />
                          )}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">
                          {badge.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Accuracy Badges */}
              <div>
                <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">
                  Precision (Accuracy)
                </h4>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x custom-scrollbar">
                  {[60, 80, 90, 100].map((req) => {
                    const acc =
                      currentQuestions > 0
                        ? ((stats?.correctAnswers || 0) / currentQuestions) *
                          100
                        : 0;
                    const achieved = acc >= req && currentQuestions >= 10; // Need at least 10 solved to get accuracy badges
                    
                    const badgeImg = {
                      60: "https://i.ibb.co/gM4n3Nmk/file-00000000e7387209a361e4c313ba5a82.png", 
                      80: "https://i.ibb.co/Kjv3bRwV/file-000000002ab8720792e649569ee2cdcf.png", 
                      90: "https://i.ibb.co/Q7gwBmPZ/file-00000000a5807206bfb202a4d85a02e6.png",
                      100: "https://i.ibb.co/XxKHFLH4/file-00000000d1407207ab4a5ab18dcb8003.png",
                    }[req as 60 | 80 | 90 | 100];
                    
                    const badgeName = {
                      60: "Sharp Shooter",
                      80: "Accuracy Master",
                      90: "Accuracy Legend",
                      100: "Perfect Strategist",
                    }[req as 60 | 80 | 90 | 100];

                    return (
                      <div
                        key={req}
                        className={cn(
                          "min-w-[120px] max-w-[120px] snap-center flex flex-col items-center gap-3 p-5 rounded-3xl border-2 transition-all shrink-0 relative overflow-hidden",
                          achieved
                            ? "bg-emerald-50 border-emerald-200"
                            : "bg-white border-emerald-50 opacity-40 grayscale",
                        )}
                      >
                        {achieved && (
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rotate-45 -translate-x-full animate-[shimmer_2s_infinite]" />
                        )}
                        <div
                          className={cn(
                            "w-16 h-16 flex items-center justify-center",
                          )}
                        >
                          {badgeImg ? (
                            <img src={badgeImg} alt={`${req}% Accuracy`} className="w-full h-full object-contain drop-shadow-sm" />
                          ) : (
                            <div className={cn("w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2", achieved ? "bg-emerald-500 text-white border-white" : "bg-emerald-100 text-emerald-300 border-transparent")}>
                              <CheckCircle2 size={24} />
                            </div>
                          )}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">
                          {badgeName}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-50">
              <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 text-center space-y-4">
                <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                  Total Intel Earned
                </p>
                <p className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tighter">
                  {totalPoints.toLocaleString()}{" "}
                  <span className="text-[10px] sm:text-sm uppercase tracking-widest text-emerald-900/30">
                    PTS
                  </span>
                </p>
                <button className="flex items-center gap-2 mx-auto text-[9px] font-black text-primary uppercase tracking-widest hover:gap-4 transition-all">
                  View Leaderboard <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WeeklyGoalWidget({ stats, setStats }: { stats: any; setStats: any }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTarget, setNewTarget] = useState(stats?.weeklyGoalTarget || 50);

  const getWeeklyProgress = () => {
    if (!stats?.dailyActivity) return 0;

    const today = new Date();
    let solvedThisWeek = 0;

    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateString = d.toISOString().split("T")[0];
      solvedThisWeek += stats.dailyActivity[dateString] || 0;
    }

    return solvedThisWeek;
  };

  const currentProgress = getWeeklyProgress();
  const target = stats?.weeklyGoalTarget || 50;
  const progressPercent = Math.min(
    100,
    Math.round((currentProgress / target) * 100),
  );

  const saveTarget = () => {
    const newStats = { ...stats, weeklyGoalTarget: newTarget };
    setStats(newStats);
    localStorage.setItem("userStats", JSON.stringify(newStats));
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-[2rem] border border-emerald-100 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between shadow-sm w-full hover:shadow-md transition-shadow relative overflow-hidden">
      <div className="flex items-center gap-4 md:gap-6 flex-1 w-full relative z-10">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <Target size={28} className="md:w-8 md:h-8" />
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <h3 className="text-lg md:text-xl font-black heading-display text-emerald-950 uppercase tracking-tight">
                Weekly Target
              </h3>
              {progressPercent >= 100 && (
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                  <CheckCircle size={10} /> Achieved
                </span>
              )}
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-emerald-900/40 hover:text-primary transition-colors"
              >
                Edit Target
              </button>
            ) : null}
          </div>

          {isEditing ? (
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={newTarget}
                onChange={(e) =>
                  setNewTarget(Math.max(1, Number(e.target.value)))
                }
                className="w-20 md:w-24 px-3 py-2 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-950 font-black text-center text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                min="1"
                autoFocus
              />
              <button
                onClick={saveTarget}
                className="px-4 py-2 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors shadow-sm active:scale-95"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-white border border-emerald-100 text-emerald-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-50 transition-colors active:scale-95"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-end">
                <span className="text-xs md:text-sm font-bold text-emerald-800/60">
                  {currentProgress}{" "}
                  <span className="text-[10px] uppercase tracking-widest opacity-50">
                    / {target} Ops
                  </span>
                </span>
                <span
                  className={cn(
                    "text-lg md:text-xl font-black heading-display",
                    progressPercent >= 100
                      ? "text-emerald-500"
                      : "text-emerald-950",
                  )}
                >
                  {progressPercent}%
                </span>
              </div>
              <div className="h-2 md:h-2.5 bg-emerald-50 rounded-full overflow-hidden w-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className={cn(
                    "h-full",
                    progressPercent >= 100 ? "bg-emerald-400" : "bg-primary",
                  )}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function PomodoroWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"work" | "shortBreak" | "longBreak">("work");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(0);

  const WORK_TIME = 25 * 60;
  const SHORT_BREAK_TIME = 5 * 60;
  const LONG_BREAK_TIME = 15 * 60;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      if (mode === "work") {
        const newCycles = completedCycles + 1;
        setCompletedCycles(newCycles);
        if (newCycles > 0 && newCycles % 4 === 0) {
          setMode("longBreak");
          setTimeLeft(LONG_BREAK_TIME);
        } else {
          setMode("shortBreak");
          setTimeLeft(SHORT_BREAK_TIME);
        }
      } else {
        setMode("work");
        setTimeLeft(WORK_TIME);
      }
      setIsActive(false);

      try {
        const audio = new Audio(
          "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
        );
        audio.play().catch(() => {});
      } catch (e) {}
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, mode, completedCycles]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    if (mode === "work") setTimeLeft(WORK_TIME);
    else if (mode === "shortBreak") setTimeLeft(SHORT_BREAK_TIME);
    else setTimeLeft(LONG_BREAK_TIME);
  };

  const changeMode = (newMode: "work" | "shortBreak" | "longBreak") => {
    setIsActive(false);
    setMode(newMode);
    if (newMode === "work") setTimeLeft(WORK_TIME);
    else if (newMode === "shortBreak") setTimeLeft(SHORT_BREAK_TIME);
    else setTimeLeft(LONG_BREAK_TIME);
  };

  const formatDisplayTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const getProgress = () => {
    let total = WORK_TIME;
    if (mode === "shortBreak") total = SHORT_BREAK_TIME;
    if (mode === "longBreak") total = LONG_BREAK_TIME;
    return ((total - timeLeft) / total) * 100;
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-white rounded-[2rem] border border-emerald-100 p-6 md:p-8 flex items-center justify-between shadow-sm w-full hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group"
      >
        <div className="absolute -right-10 -top-10 opacity-[0.03] scale-150 pointer-events-none text-primary group-hover:scale-110 transition-transform duration-700">
          <Clock size={200} />
        </div>

        <div className="flex items-center gap-4 md:gap-6 relative z-10">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center shrink-0">
            <Clock size={28} className="md:w-8 md:h-8" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black heading-display text-emerald-950 uppercase tracking-tight">
              Focus Protocol
            </h3>
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40">
              Pomodoro Timer
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 relative z-10">
          {isActive && (
            <div className="hidden sm:block text-xl font-black tabular-nums text-emerald-950 animate-pulse">
              {formatDisplayTime(timeLeft)}
            </div>
          )}
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:bg-primary group-hover:text-white transition-colors">
            <Maximize2 size={20} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-emerald-950/95 backdrop-blur-md"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 flex flex-col items-center gap-10 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner",
                    mode === "work"
                      ? "bg-red-500 text-white"
                      : "bg-emerald-500 text-white",
                  )}
                >
                  {mode === "work" ? (
                    <BrainCircuit size={24} />
                  ) : (
                    <Coffee size={24} />
                  )}
                </div>
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-3 h-3 rounded-full",
                        i < completedCycles % 4 ? "bg-red-400" : "bg-white/20",
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-3 relative z-10 bg-white/5 p-2 rounded-full">
                <button
                  onClick={() => changeMode("work")}
                  className={cn(
                    "px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all",
                    mode === "work"
                      ? "bg-white text-emerald-950 shadow-lg"
                      : "text-white/50 hover:text-white hover:bg-white/10",
                  )}
                >
                  Work
                </button>
                <button
                  onClick={() => changeMode("shortBreak")}
                  className={cn(
                    "px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all",
                    mode === "shortBreak"
                      ? "bg-white text-emerald-950 shadow-lg"
                      : "text-white/50 hover:text-white hover:bg-white/10",
                  )}
                >
                  Short Break
                </button>
                <button
                  onClick={() => changeMode("longBreak")}
                  className={cn(
                    "px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all",
                    mode === "longBreak"
                      ? "bg-white text-emerald-950 shadow-lg"
                      : "text-white/50 hover:text-white hover:bg-white/10",
                  )}
                >
                  Long Break
                </button>
              </div>

              <div className="flex flex-col items-center justify-center py-4 relative z-10 w-full">
                <div className="text-[120px] md:text-[180px] leading-none font-black heading-display tracking-tighter text-white tabular-nums drop-shadow-2xl">
                  {formatDisplayTime(timeLeft)}
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full mt-10 overflow-hidden">
                  <motion.div
                    className={cn(
                      "h-full",
                      mode === "work" ? "bg-red-500" : "bg-emerald-400",
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${getProgress()}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 relative z-10 mt-4">
                <button
                  onClick={toggleTimer}
                  className={cn(
                    "w-20 h-20 rounded-[2rem] flex items-center justify-center text-emerald-950 shadow-2xl transition-transform active:scale-95",
                    mode === "work"
                      ? "bg-white hover:bg-gray-100"
                      : "bg-emerald-400 hover:bg-emerald-300",
                    isActive && "animate-pulse",
                  )}
                >
                  {isActive ? (
                    <Pause size={36} className="fill-current" />
                  ) : (
                    <Play size={36} className="fill-current translate-x-1" />
                  )}
                </button>
                <button
                  onClick={resetTimer}
                  className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center bg-white/10 text-white/50 hover:text-white hover:bg-white/20 transition-colors active:scale-95"
                >
                  <RotateCcw size={28} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
