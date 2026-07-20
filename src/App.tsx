import React, { useState, useEffect, Suspense, lazy } from "react";
import { DeveloperCredit } from "./components/DeveloperCredit";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Trophy,
  Settings,
  Menu,
  X,
  Zap,
  Activity,
  User,
  BrainCircuit,
  ExternalLink,
  Library,
  Bot,
  Target,
  Sparkles,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";

// Lazy loaded pages to improve performance
const Home = lazy(() => import("./pages/Home"));
const Subjects = lazy(() => import("./pages/Subjects"));
const ChapterSelection = lazy(() => import("./pages/ChapterSelection"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Result = lazy(() => import("./pages/Result"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Challenges = lazy(() => import("./pages/Challenges"));
const DoubtSolver = lazy(() => import("./pages/DoubtSolver"));
const SettingsPage = lazy(() => import("./pages/Settings"));
const Documentation = lazy(() => import("./pages/Documentation"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const ErrorBook = lazy(() => import("./pages/ErrorBook"));
const MockTests = lazy(() => import("./pages/MockTests"));
const Study = lazy(() => import("./pages/Study"));
const MaterialViewer = lazy(() => import("./pages/MaterialViewer"));
const PeriodicTable = lazy(() => import("./pages/PeriodicTable"));
const QuestionPage = lazy(() => import("./pages/QuestionPage"));
const BrowseQuestions = lazy(() => import("./pages/BrowseQuestions"));
const Admin = lazy(() => import("./pages/Admin"));
const Flashcards = lazy(() => import("./pages/Flashcards"));
const FormulaVault = lazy(() => import("./pages/FormulaVault"));
const DPPBuilder = lazy(() => import("./pages/DPPBuilder"));

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

import DeviceNotice from "./components/DeviceNotice";
import { AxiomMascot } from "./components/AxiomMascot";
import { cn } from "./lib/utils";
import { QuickNotes } from "./components/QuickNotes";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navbar() {
  const location = useLocation();
  const { user } = useUser();
  const isAdmin = user?.primaryEmailAddress?.emailAddress === 'yashrajjadhav2010@gmail.com';
  
  const [activeRewards, setActiveRewards] = useState<string[]>([]);
  
  useEffect(() => {
    const updateRewards = () => {
      try {
        setActiveRewards(JSON.parse(localStorage.getItem('active_rewards') || '[]'));
      } catch (e) {}
    };
    updateRewards();
    window.addEventListener('rewards_updated', updateRewards);
    return () => window.removeEventListener('rewards_updated', updateRewards);
  }, []);

  let operatorName = "Candidate";
  let operatorPfp: string | null = null;
  try {
    operatorName = localStorage.getItem("operatorName") || "Candidate";
    operatorPfp = localStorage.getItem("operatorPfp");
  } catch (e) {
    console.error("Navbar storage access failed:", e);
  }
  const initial = operatorName.substring(0, 2).toUpperCase();

  const menuItems = [
    { icon: LayoutDashboard, label: "Home", path: "/" },
    { icon: BookOpen, label: "Subject", path: "/subjects" },
    { icon: Library, label: "Learn", path: "/study" },
    { icon: Trophy, label: "Mission", path: "/challenges" },
    { icon: BarChart3, label: "Radar", path: "/analytics" },
  ];

  if (isAdmin) {
    menuItems.push({ icon: Settings, label: "Admin", path: "/admin" });
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 sm:h-20">
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center gap-3 shrink-0">
                <img
                  src="/JT_LOGO.png"
                  alt="JEE Tapasya Logo"
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain hover:scale-110 transition-transform"
                />
                <span className="text-lg sm:text-2xl font-black heading-display tracking-tighter text-emerald-950 uppercase italic leading-none mt-1">
                  JEE <span className="text-primary not-italic">TAPASYA</span>
                </span>
              </Link>

              <div className="hidden lg:flex items-center gap-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "px-5 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2",
                      location.pathname === item.path
                        ? "bg-primary text-white preserve-dark shadow-lg shadow-primary/20"
                        : "text-emerald-900/40 hover:text-primary hover:bg-emerald-50",
                    )}
                  >
                    <item.icon size={16} />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="h-10 w-[1px] bg-emerald-100 mx-2" />
              <div className="flex items-center gap-3">
                <SignedOut>
                  <Link to="/sign-in">
                    <button className="px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-emerald-950 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/sign-up">
                    <button className="px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-white bg-primary hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105">
                      Sign Up
                    </button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <div className="relative flex items-center justify-center p-1">
                    {activeRewards.includes('premium_avatar') && (
                      <div className="holo-avatar-ring pointer-events-none" />
                    )}
                    <div className="relative z-10">
                      <UserButton />
                    </div>
                  </div>
                </SignedIn>
              </div>
              <Link
                to="/settings"
                className="p-3 text-emerald-900/40 hover:text-primary hover:bg-emerald-50 rounded-xl transition-colors"
              >
                <Settings size={20} />
              </Link>
            </div>

            <div className="flex items-center lg:hidden gap-3">
              <div className="text-right">
                <p className="text-[8px] font-black text-emerald-900/40 uppercase tracking-widest leading-none mb-1">
                  Sector
                </p>
                <p className="text-[10px] font-black text-emerald-950 uppercase leading-none">
                  {location.pathname === "/"
                    ? "DASHBOARD"
                    : location.pathname.split("/")[1].toUpperCase()}
                </p>
              </div>
              <SignedOut>
                <Link to="/sign-in">
                  <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white bg-primary hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20 transition-all">
                    Sign In
                  </button>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from going under the fixed navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
}

function BottomNav() {
  const location = useLocation();
  const { user } = useUser();
  const isAdmin = user?.primaryEmailAddress?.emailAddress === 'yashrajjadhav2010@gmail.com';

  const menuItems = [
    { icon: LayoutDashboard, label: "Home", path: "/" },
    { icon: BookOpen, label: "Subject", path: "/subjects" },
    { icon: Library, label: "Learn", path: "/study" },
    { icon: Trophy, label: "Mission", path: "/challenges" },
    { icon: BarChart3, label: "Radar", path: "/analytics" },
  ];

  if (isAdmin) {
    menuItems.push({ icon: Settings, label: "Admin", path: "/admin" });
  }

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-emerald-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around h-16 px-2">
        {menuItems.map((item) => {
          const isActive =
            item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 w-full h-full transition-all relative",
                isActive ? "text-primary" : "text-emerald-900/40",
              )}
            >
              <item.icon
                size={20}
                className={cn(isActive ? "fill-primary/5" : "")}
              />
              <span className="text-[9px] font-black uppercase tracking-widest">
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="bottomNavDot"
                  className="absolute top-0 w-8 h-0.5 bg-primary rounded-b-full"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function NameModal({ onComplete }: { onComplete: () => void }) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem("operatorName", name.trim());
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-emerald-950/40">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-10 space-y-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
            <User size={32} />
          </div>
          <h2 className="text-3xl font-black heading-display uppercase tracking-tight text-emerald-950 italic">
            Identify <span className="text-primary not-italic">Operator</span>
          </h2>
          <p className="text-emerald-900/40 font-medium text-sm px-4">
            Welcome to the command terminal. Please register your operational
            handle to proceed with the mission.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 px-2">
              Operational Name
            </label>
            <input
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Yashraj Jadhav"
              className="w-full px-6 py-4 bg-emerald-50 rounded-2xl border-2 border-emerald-50 focus:border-primary focus:bg-white outline-none transition-all font-bold text-emerald-950 placeholder:text-emerald-900/20"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-5 bg-primary text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Register Terminal
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isQuizMode = location.pathname.startsWith("/quiz");
  const isSolverMode = location.pathname === "/doubt-solver";
  const isPeriodicTable = location.pathname === "/study/periodic-table";
  const isAuthRoute = location.pathname.startsWith("/sign-in") || location.pathname.startsWith("/sign-up");
  const isCleanLayout = isQuizMode || isSolverMode || isPeriodicTable || isAuthRoute;
  const [showNameModal, setShowNameModal] = useState(false);
  const [key, setKey] = useState(0); // For forcing re-render of navbar
  
  const { isSignedIn, user } = useUser();
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
    const initData = async () => {
      if (isSignedIn && user) {
        if (user.fullName) {
          window.localStorage.setItem("operatorName", user.fullName);
        } else if (user.primaryEmailAddress?.emailAddress) {
          window.localStorage.setItem("operatorName", user.primaryEmailAddress.emailAddress.split("@")[0]);
        }
        
        if (user.imageUrl) {
          window.localStorage.setItem("operatorPfp", user.imageUrl);
        }
        
        // Import sync utilities dynamically to avoid breaking imports at the top
        const { fetchAndPopulateStorage, syncToFirebase, setupStorageInterceptor } = await import('./lib/sync');
        

        const hasData = await fetchAndPopulateStorage(user.id);
        if (!hasData) {
          await syncToFirebase(user.id);
        }

       try {
          const { doc, setDoc, getDoc, updateDoc } = await import('firebase/firestore');
          const { db } = await import('./lib/firebase');

          let coins = parseInt(window.localStorage.getItem('coins') || '-1', 10);
          if (coins === -1) {
            coins = 0; 
            window.localStorage.setItem('coins', '0');
          }
          
          let referralCode = window.localStorage.getItem('referralCode');
          if (!referralCode) {
            referralCode = user.id.substring(user.id.length - 6).toUpperCase();
            window.localStorage.setItem('referralCode', referralCode);
          }

          try {
            await setDoc(doc(db, 'referral_codes', referralCode), { userId: user.id });
          } catch (e) {
             console.error("setDoc referral_codes error", e);
          }

          const pendingReferral = window.sessionStorage.getItem('pendingReferral');
          let referredBy = window.localStorage.getItem('referredBy');

          if (pendingReferral && !referredBy && pendingReferral !== referralCode) {
            window.localStorage.setItem('referredBy', pendingReferral);
            coins += 5;
            window.localStorage.setItem('coins', coins.toString());
            
            try {
              const referrerDoc = await getDoc(doc(db, 'referral_codes', pendingReferral));
              if (referrerDoc.exists()) {
                const referrerId = referrerDoc.data().userId;
                const rUserDocRef = doc(db, 'user_data', referrerId);
                const rUserDoc = await getDoc(rUserDocRef);
                if (rUserDoc.exists()) {
                  const rData = rUserDoc.data();
                  let rCoins = parseInt(rData?.data?.coins || '0', 10);
                  rCoins += 10;
                  await updateDoc(rUserDocRef, { 'data.coins': rCoins.toString() });
                }
              }
            } catch (e) {
               console.error("getDoc/updateDoc referral error", e);
            }
            window.sessionStorage.removeItem('pendingReferral');
          }
        } catch(e) {
          console.error("Referral outer error", e);
        }

        
        // Sync user email/name for Admin panel
        try {
          const { doc, setDoc } = await import('firebase/firestore');
          const { db } = await import('./lib/firebase');
          await setDoc(doc(db, 'user_data', user.id), {
            email: user.primaryEmailAddress?.emailAddress || 'Unknown',
            name: user.fullName || window.localStorage.getItem("operatorName") || 'Unknown',
          }, { merge: true });
        } catch (e) {
          console.error("Failed to sync user metadata to Firebase", e);
        }

        setupStorageInterceptor(user.id);
        
        setShowNameModal(false);
        setKey((prev) => prev + 1);
      } else if (isSignedIn === false) {
        let guestId = window.localStorage.getItem('guestId');
        if (!guestId) {
          guestId = 'guest_' + Math.random().toString(36).substr(2, 9);
          window.localStorage.setItem('guestId', guestId);
        }
        
        try {
          const { setupStorageInterceptor, syncToFirebase } = await import('./lib/sync');
          setupStorageInterceptor(guestId);
          await syncToFirebase(guestId);
        } catch (e) {
          console.error("Failed to setup guest sync", e);
        }
      }
      setIsDataReady(true);
    };
    initData();
  }, [isSignedIn, user]);

  useEffect(() => {
    try {
      const handleStorage = () => {
        setKey((prev) => prev + 1);
        const name = localStorage.getItem("operatorName");
        if (!name && !isSignedIn) setShowNameModal(true);
        else setShowNameModal(false);
      };

      // Prevent Copying and Context Menu
      const handleCopy = (e: ClipboardEvent) => {
        e.preventDefault();
      };
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
      };

      window.addEventListener("copy", handleCopy as any);
      window.addEventListener("contextmenu", handleContextMenu);
      window.addEventListener("storage", handleStorage);

      const name = localStorage.getItem("operatorName");
      if (!name) {
        setShowNameModal(true);
      }

      return () => {
        window.removeEventListener("copy", handleCopy as any);
        window.removeEventListener("contextmenu", handleContextMenu);
        window.removeEventListener("storage", handleStorage);
      };
    } catch (e) {
      console.error("Storage access failed:", e);
      setShowNameModal(true);
    }
  }, []);

  const handleNameComplete = async () => {
    setShowNameModal(false);
    setKey((prev) => prev + 1); // Refresh layout components that depend on localstorage
    
    if (isSignedIn === false) {
      const guestId = window.localStorage.getItem('guestId');
      if (guestId) {
        try {
          const { syncToFirebase } = await import('./lib/sync');
          await syncToFirebase(guestId);
        } catch (e) {
          console.error("Failed to sync guest name", e);
        }
      }
    }
  };

  if (isSignedIn !== undefined && !isDataReady && isSignedIn) {
    return (
      <div className="min-h-screen bg-[#fbfdfb] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="text-emerald-900/40 text-[10px] uppercase font-black tracking-widest">Syncing Operator Data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbfdfb] text-emerald-900 relative flex flex-col overflow-x-hidden">
      <DeviceNotice />
      <AnimatePresence>
        {showNameModal && <NameModal onComplete={handleNameComplete} />}
      </AnimatePresence>

      {!isCleanLayout && <Navbar key={key} />}
      {!isCleanLayout && <BottomNav />}

      <main
        className={cn(
          "relative z-10 flex-1",
          !isCleanLayout
            ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 pb-32 sm:pb-10 w-full"
            : "w-full flex flex-col"
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full flex-1 flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {!isCleanLayout && (
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32 sm:pb-8 border-t border-emerald-50 w-full mt-auto">
          <div className="flex flex-col items-center justify-center w-full gap-8">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6">
              <div className="flex items-center gap-3 relative cursor-default shrink-0">
                <img
                  src="/JT_LOGO.png"
                  alt="JEE Tapasya Logo"
                  className="w-8 h-8 object-contain shrink-0 hover:scale-110 transition-transform"
                />
                <span className="text-lg font-black heading-display tracking-tight text-emerald-950 uppercase italic hover:text-primary transition-colors relative overflow-hidden group leading-none mt-1">
                  JEE <span className="text-primary not-italic">TAPASYA</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-[shimmer_2s_infinite] z-10 pointer-events-none" />
                </span>
              </div>

              <div className="flex justify-center items-center gap-x-6 gap-y-4 text-center flex-wrap">

                <Link
                  to="/documentation"
                  className="text-[10px] font-bold uppercase tracking-widest text-emerald-900/40 hover:text-primary transition-colors"
                >
                  Documentation
                </Link>
                <Link
                  to="/privacy"
                  className="text-[10px] font-bold uppercase tracking-widest text-emerald-900/40 hover:text-primary transition-colors"
                >
                  Privacy
                </Link>
                <a
                  href="mailto:jeetapasya@gmail.com"
                  className="text-[10px] font-bold uppercase tracking-widest text-emerald-900/40 hover:text-primary transition-colors"
                >
                  Contact Terminal
                </a>
              </div>
            </div>

            <DeveloperCredit className="w-full sm:w-auto flex justify-center mt-4 sm:mt-0" />
          </div>
        </footer>
      )}

      {/* Floating AI Toggle */}
      {!isCleanLayout && (
        <div className="fixed bottom-24 lg:bottom-10 right-4 lg:right-10 z-[100] flex flex-col flex-col-reverse items-end gap-3 pointer-events-none">
          <Link
            to="/doubt-solver"
            className="group pointer-events-auto relative mt-2 sm:mt-3"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0px 0px 0px 0px rgba(249, 115, 22, 0.5)",
                  "0px 0px 0px 25px rgba(249, 115, 22, 0)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white via-orange-50 to-blue-50 rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(249,115,22,0.3)] relative overflow-visible group-hover:scale-110 transition-transform duration-300 border-[3px] border-white ring-2 ring-orange-100"
            >
              <div className="absolute inset-0 bg-white/40 rounded-full group-hover:bg-white/0 transition-colors duration-300" />

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex items-center justify-center pt-2 drop-shadow-xl"
              >
                <div className="scale-[1.3] sm:scale-[1.6] transition-transform duration-300 group-hover:drop-shadow-[0_8px_16px_rgba(59,130,246,0.4)] group-hover:scale-[1.4] sm:group-hover:scale-[1.7]">
                  <AxiomMascot size="sm" isThinking={false} />
                </div>
              </motion.div>

              {/* Sparkle effects */}
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400 animate-pulse drop-shadow-md" />
              </div>
            </motion.div>
          </Link>

          <motion.div
            animate={{
              opacity: [0, 1, 1, 1, 1, 0, 0],
              scale: [0.5, 1.1, 1, 1, 1.05, 0.5, 0.5],
              y: [20, -5, 0, 0, -5, 20, 20],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              times: [0, 0.02, 0.04, 0.15, 0.17, 0.2, 1],
              ease: [
                "easeOut",
                "easeOut",
                "linear",
                "easeInOut",
                "easeIn",
                "linear",
              ],
              delay: 3,
            }}
            className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl rounded-br-sm shadow-xl shadow-orange-500/10 border border-orange-200 pointer-events-auto origin-bottom-right relative"
          >
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-orange-500" />
              <p className="text-[13px] sm:text-sm font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent whitespace-nowrap">
                Ask Axiom AI
              </p>
            </div>

            {/* Thinking dots */}
            <div className="absolute -top-2 -left-2 flex space-x-1">
              <div
                className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    // Time tracking logic
    let interval: NodeJS.Timeout;
    try {
      const storedTime = localStorage.getItem('totalTimeSpent');
      if (!storedTime) {
        localStorage.setItem('totalTimeSpent', '0');
      }
      interval = setInterval(() => {
        const currentTime = parseInt(localStorage.getItem('totalTimeSpent') || '0', 10);
        localStorage.setItem('totalTimeSpent', (currentTime + 1).toString());
      }, 60000); // 1 minute
    } catch (e) {
      console.error('Time tracking error', e);
    }
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const applyStoreEffects = () => {
      try {
        const active = JSON.parse(localStorage.getItem('active_rewards') || '[]');
        const prefs = JSON.parse(localStorage.getItem("systemPrefs") || "{}");
        
        if (active.includes('dark_mode_extreme') || prefs.darkMode) {
          document.documentElement.classList.add("dark-mode");
        } else {
          document.documentElement.classList.remove("dark-mode");
        }

        if (active.includes('focus_shield')) {
          document.documentElement.classList.add("focus-shield-active");
        } else {
          document.documentElement.classList.remove("focus-shield-active");
        }
      } catch (e) {}
    };

    applyStoreEffects();
    window.addEventListener('rewards_updated', applyStoreEffects);

    // Track total site visits
    const recordVisit = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const refCode = urlParams.get('ref');
      if (refCode) {
        window.sessionStorage.setItem('pendingReferral', refCode);
      }

      if (!window.sessionStorage.getItem('visited_site')) {
        window.sessionStorage.setItem('visited_site', 'true');
        try {
          const { doc, setDoc, increment } = await import('firebase/firestore');
          const { db } = await import('./lib/firebase');
          await setDoc(doc(db, 'analytics', 'global'), {
            totalVisits: increment(1)
          }, { merge: true });
        } catch(e) {
          console.error("Failed to record visit", e);
        }
      }
    };
    recordVisit();

    return () => {
      window.removeEventListener('rewards_updated', applyStoreEffects);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="mesh-bg" />
      <div className="noise-overlay" />
      <Layout>
        <QuickNotes />
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[50vh]">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in/*" element={<Login />} />
            <Route path="/sign-up/*" element={<Register />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/study" element={<Study />} />
            <Route path="/study/periodic-table" element={<PeriodicTable />} />
            <Route path="/study/:materialId" element={<MaterialViewer />} />
            <Route path="/mock-tests" element={<MockTests />} />
            <Route path="/subjects/:subjectId" element={<ChapterSelection />} />
            <Route
              path="/quiz/:subjectId/:chapterId/:setId"
              element={<Quiz />}
            />
            <Route path="/browse" element={<BrowseQuestions />} />
            <Route
              path="/question/:subjectId/:chapterId/:setId/:questionId"
              element={<QuestionPage />}
            />
            <Route path="/result" element={<Result />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/error-book" element={<ErrorBook />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/doubt-solver" element={<DoubtSolver />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/formula-vault" element={<FormulaVault />} />
            <Route path="/dpp-builder" element={<DPPBuilder />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
