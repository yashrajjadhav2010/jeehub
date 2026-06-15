import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BarChart3, Trophy, Settings, Menu, X, Zap, Activity, User, BrainCircuit, ExternalLink, Library, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import ChapterSelection from './pages/ChapterSelection';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Analytics from './pages/Analytics';
import Challenges from './pages/Challenges';
import DoubtSolver from './pages/DoubtSolver';
import SettingsPage from './pages/Settings';
import Documentation from './pages/Documentation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ErrorBook from './pages/ErrorBook';
import MockTests from './pages/MockTests';
import Study from './pages/Study';
import MaterialViewer from './pages/MaterialViewer';
import PeriodicTable from './pages/PeriodicTable';
import DeviceNotice from './components/DeviceNotice';
import { AxiomMascot } from './components/AxiomMascot';
import { cn } from './lib/utils';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navbar() {
  const location = useLocation();
  let operatorName = 'Candidate';
  let operatorPfp: string | null = null;
  try {
    operatorName = localStorage.getItem('operatorName') || 'Candidate';
    operatorPfp = localStorage.getItem('operatorPfp');
  } catch (e) {
    console.error('Navbar storage access failed:', e);
  }
  const initial = operatorName.substring(0, 2).toUpperCase();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Subject', path: '/subjects' },
    { icon: Library, label: 'Learn', path: '/study' },
    { icon: Trophy, label: 'Mission', path: '/challenges' },
    { icon: BarChart3, label: 'Radar', path: '/analytics' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 sm:h-20">
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary preserve-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <Zap className="text-white fill-white" size={18} />
                </div>
                <span className="text-lg sm:text-2xl font-black heading-display tracking-tighter text-emerald-950 uppercase italic">
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
                        : "text-emerald-900/40 hover:text-primary hover:bg-emerald-50"
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
              <div className="flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="text-right">
                  <p className="text-[10px] font-black text-emerald-900/40 uppercase tracking-widest">Operator</p>
                  <p className="text-xs font-black text-emerald-900 uppercase">{operatorName}</p>
                </div>
                <div className="w-9 h-9 rounded-xl overflow-hidden bg-primary preserve-dark flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
                  {operatorPfp ? (
                    <img src={operatorPfp} alt={operatorName} className="w-full h-full object-cover preserve-dark-ignore" />
                  ) : (
                    initial
                  )}
                </div>
              </div>
              <Link to="/settings" className="p-3 text-emerald-900/40 hover:text-primary hover:bg-emerald-50 rounded-xl transition-colors">
                <Settings size={20} />
              </Link>
            </div>

            <div className="flex items-center lg:hidden gap-3">
              <div className="text-right">
                <p className="text-[8px] font-black text-emerald-900/40 uppercase tracking-widest leading-none mb-1">Sector</p>
                <p className="text-[10px] font-black text-emerald-950 uppercase leading-none">{location.pathname === '/' ? 'DASHBOARD' : location.pathname.split('/')[1].toUpperCase()}</p>
              </div>
              <Link to="/settings" className="w-9 h-9 rounded-xl overflow-hidden bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-950">
                {operatorPfp ? (
                  <img src={operatorPfp} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={18} />
                )}
              </Link>
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
  const menuItems = [
    { icon: LayoutDashboard, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Subject', path: '/subjects' },
    { icon: Library, label: 'Learn', path: '/study' },
    { icon: Trophy, label: 'Mission', path: '/challenges' },
    { icon: BarChart3, label: 'Radar', path: '/analytics' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-emerald-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around h-16 px-2">
        {menuItems.map((item) => {
          const isActive = item.path === '/' 
            ? location.pathname === '/' 
            : location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 w-full h-full transition-all relative",
                isActive ? "text-primary" : "text-emerald-900/40"
              )}
            >
              <item.icon size={20} className={cn(isActive ? "fill-primary/5" : "")} />
              <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
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
  const [name, setName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem('operatorName', name.trim());
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
            Welcome to the command terminal. Please register your operational handle to proceed with the mission.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 px-2">Operational Name</label>
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
  const isQuizMode = location.pathname.startsWith('/quiz');
  const isSolverMode = location.pathname === '/doubt-solver';
  const isPeriodicTable = location.pathname === '/study/periodic-table';
  const isCleanLayout = isQuizMode || isSolverMode || isPeriodicTable;
  const [showNameModal, setShowNameModal] = useState(false);
  const [key, setKey] = useState(0); // For forcing re-render of navbar

  useEffect(() => {
    try {
      const handleStorage = () => {
        setKey(prev => prev + 1);
        const name = localStorage.getItem('operatorName');
        if (!name) setShowNameModal(true);
        else setShowNameModal(false);
      };

      // Prevent Copying and Context Menu
      const handleCopy = (e: ClipboardEvent) => {
        e.preventDefault();
      };
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
      };
      
      window.addEventListener('copy', handleCopy as any);
      window.addEventListener('contextmenu', handleContextMenu);
      window.addEventListener('storage', handleStorage);
      
      const name = localStorage.getItem('operatorName');
      if (!name) {
        setShowNameModal(true);
      }
      
      return () => {
        window.removeEventListener('copy', handleCopy as any);
        window.removeEventListener('contextmenu', handleContextMenu);
        window.removeEventListener('storage', handleStorage);
      };
    } catch (e) {
      console.error('Storage access failed:', e);
      setShowNameModal(true);
    }
  }, []);

  const handleNameComplete = () => {
    setShowNameModal(false);
    setKey(prev => prev + 1); // Refresh layout components that depend on localstorage
  };
  
  return (
    <div className="min-h-screen bg-[#fbfdfb] text-emerald-900 relative flex flex-col overflow-x-hidden">
      <DeviceNotice />
      <AnimatePresence>
        {showNameModal && <NameModal onComplete={handleNameComplete} />}
      </AnimatePresence>

      {!isCleanLayout && <Navbar key={key} />}
      {!isCleanLayout && <BottomNav />}
      
      <main className={cn(
        "relative z-10 flex-1",
        !isCleanLayout ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 pb-32 sm:pb-10 w-full" : ""
      )}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(isCleanLayout ? "h-screen" : "")}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {!isCleanLayout && (
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32 sm:pb-8 border-t border-emerald-50 w-full mt-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6">
            <div className="flex items-center gap-3 relative cursor-default shrink-0">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 hover:scale-110 transition-transform">
                <Zap className="text-primary fill-primary animate-pulse" size={16} />
              </div>
              <span className="text-lg font-black heading-display tracking-tight text-emerald-950 uppercase italic hover:text-primary transition-colors relative overflow-hidden group">
                JEE <span className="text-primary not-italic">TAPASYA</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-[shimmer_2s_infinite] z-10 pointer-events-none" />
              </span>
            </div>
            
            <div className="flex justify-center items-center gap-x-6 gap-y-4 text-center flex-wrap">
              <Link to="/documentation" className="text-[10px] font-bold uppercase tracking-widest text-emerald-900/40 hover:text-primary transition-colors">Documentation</Link>
              <Link to="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-emerald-900/40 hover:text-primary transition-colors">Privacy</Link>
              <a href="mailto:yashrajart1999@gmail.com" className="text-[10px] font-bold uppercase tracking-widest text-emerald-900/40 hover:text-primary transition-colors">Contact Terminal</a>
            </div>
            
            <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-900/30 text-center lg:hidden">© 2026 JEE TAPASYA Command</p>

            <div className="relative inline-block shrink-0">
              <div className="flex items-center gap-2 px-6 py-2 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm transition-all hover:scale-105 hover:bg-emerald-100 active:scale-95 group cursor-pointer relative overflow-hidden z-10 box-border">
                <a href="https://yashrajjadhav.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-emerald-900/60 whitespace-nowrap group-hover:text-emerald-900 transition-colors z-10 w-full h-full absolute inset-0 px-6 py-2">
                  <span className="relative z-10 flex flex-row items-center gap-1 w-full justify-center">Made with <span className="text-red-500 animate-pulse">❤️</span> by Yashraj Jadhav <ExternalLink size={10} className="text-emerald-900/40 group-hover:text-emerald-900 transition-all opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </a>
                <span className="opacity-0 text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-1.5 py-0 px-0">
                  Made with <span className="text-red-500">❤️</span> by Yashraj Jadhav <ExternalLink size={10} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0 pointer-events-none" />
              </div>
            </div>
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
                ]
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
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
              y: [20, -5, 0, 0, -5, 20, 20]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              times: [0, 0.02, 0.04, 0.15, 0.17, 0.2, 1], 
              ease: ["easeOut", "easeOut", "linear", "easeInOut", "easeIn", "linear"],
              delay: 3
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
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    try {
      const prefs = JSON.parse(localStorage.getItem('systemPrefs') || '{}');
      if (prefs.darkMode) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    } catch(e) {}
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="mesh-bg" />
      <div className="noise-overlay" />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/study" element={<Study />} />
          <Route path="/study/periodic-table" element={<PeriodicTable />} />
          <Route path="/study/:materialId" element={<MaterialViewer />} />
          <Route path="/mock-tests" element={<MockTests />} />
          <Route path="/subjects/:subjectId" element={<ChapterSelection />} />
          <Route path="/quiz/:subjectId/:chapterId/:setId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/error-book" element={<ErrorBook />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/doubt-solver" element={<DoubtSolver />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </Router>
  );
}
