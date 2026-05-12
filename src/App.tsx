import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BarChart3, Trophy, Settings, Menu, X, ChevronRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import ChapterSelection from './pages/ChapterSelection';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Analytics from './pages/Analytics';
import { cn } from './lib/utils';

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: BookOpen, label: 'Subjects', path: '/subjects' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: Trophy, label: 'Challenges', path: '/challenges' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-emerald-950/40 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -280 }}
        className="fixed top-0 left-0 bottom-0 w-[280px] bg-white border-r border-emerald-100 shadow-xl z-50 lg:translate-x-0 h-screen transition-transform duration-300"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-3 mb-10 overflow-hidden">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center relative group">
              <Zap className="text-primary fill-primary relative z-10" size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight heading-display text-emerald-900">JEE <span className="text-primary italic">HUB</span></h1>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  location.pathname === item.path 
                    ? "bg-primary/10 text-primary border border-primary/20" 
                    : "text-emerald-900/60 hover:text-primary hover:bg-emerald-50"
                )}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
                {location.pathname === item.path && (
                  <motion.div layoutId="active" className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-emerald-100">
            <div className="p-5 bg-primary/5 rounded-3xl border border-primary/10 mb-6">
              <p className="text-[10px] text-primary/60 uppercase tracking-[0.2em] mb-3 font-bold">Today's Progress</p>
              <div className="flex justify-between items-end mb-3">
                <span className="text-sm font-bold text-emerald-950">0 / 50</span>
                <span className="text-xs font-bold text-primary">0%</span>
              </div>
              <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '0%' }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-emerald-900/60 hover:text-primary hover:bg-emerald-50 transition-all font-medium">
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbfdfb] text-emerald-900 flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <main className="flex-1 lg:ml-[280px] p-6 lg:p-10 relative">
        <header className="flex items-center justify-between mb-10 lg:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-emerald-100 rounded-lg text-emerald-900">
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
             <Zap className="text-primary fill-primary" size={20} />
             <h1 className="font-bold text-emerald-900">JEE Hub</h1>
          </div>
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-bold ring-2 ring-primary ring-offset-2 ring-offset-white text-primary">
            YR
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={useLocation().pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
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
        </Routes>
      </Layout>
    </Router>
  );
}
