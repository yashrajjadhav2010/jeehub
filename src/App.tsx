import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BarChart3, Trophy, Settings, Menu, X, Zap, Activity, User, BrainCircuit } from 'lucide-react';
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
import DeviceNotice from './components/DeviceNotice';
import { cn } from './lib/utils';

function Navbar() {
  const location = useLocation();
  let operatorName = 'Candidate';
  try {
    operatorName = localStorage.getItem('operatorName') || 'Candidate';
  } catch (e) {
    console.error('Navbar storage access failed:', e);
  }
  const initial = operatorName.substring(0, 2).toUpperCase();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: BookOpen, label: 'Subjects', path: '/subjects' },
    { icon: BrainCircuit, label: 'Solver', path: '/doubt-solver' },
    { icon: Trophy, label: 'Challenges', path: '/challenges' },
    { icon: BarChart3, label: 'Radar', path: '/analytics' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 sm:h-20">
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
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
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
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
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
                  {initial}
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
              <Link to="/settings" className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-950">
                <User size={18} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function BottomNav() {
  const location = useLocation();
  const menuItems = [
    { icon: LayoutDashboard, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Subjects', path: '/subjects' },
    { icon: BrainCircuit, label: 'Solver', path: '/doubt-solver' },
    { icon: Trophy, label: 'Missions', path: '/challenges' },
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
  const isCleanLayout = isQuizMode || isSolverMode;
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

      window.addEventListener('storage', handleStorage);
      
      const name = localStorage.getItem('operatorName');
      if (!name) {
        setShowNameModal(true);
      }
      
      return () => window.removeEventListener('storage', handleStorage);
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
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-32 sm:pb-16 border-t border-emerald-50 w-full">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="text-primary fill-primary" size={16} />
                </div>
                <span className="text-lg font-black heading-display tracking-tight text-emerald-950 uppercase italic">
                  JEE <span className="text-primary not-italic">TAPASYA</span>
                </span>
              </div>
              <div className="flex gap-10">
                <Link to="/documentation" className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/30 hover:text-primary transition-colors">Documentation</Link>
                <Link to="/privacy" className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/30 hover:text-primary transition-colors">Privacy Policy</Link>
                <a href="mailto:yaashh.tech@gmaiil.com" className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/30 hover:text-primary transition-colors">Contact Terminal</a>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-900/20">© 2026 JEE TAPASYA Command</p>
            </div>
            
            <div className="flex items-center gap-2 px-6 py-2 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm">
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-900/50 whitespace-nowrap">Made with <span className="text-red-500 animate-pulse">❤️</span> by Yashraj Jadhav</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="mesh-bg" />
      <div className="noise-overlay" />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/subjects/:subjectId" element={<ChapterSelection />} />
          <Route path="/quiz/:subjectId/:chapterId/:setId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/analytics" element={<Analytics />} />
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
