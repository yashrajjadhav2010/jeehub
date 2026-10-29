import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Code, Zap, Target, BookOpen, ShieldCheck, ArrowRight, LayoutDashboard, BrainCircuit, Activity, Library, FlaskConical, Beaker, Calculator, MessageSquare, AlertTriangle, Lightbulb, Sparkles, PlayCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Platform Overview', icon: LayoutDashboard },
    { id: 'library', label: 'Digital Library', icon: Library },
    { id: 'practice', label: 'Practice Modules', icon: Target },
    { id: 'solver', label: 'AI Doubt Solver', icon: BrainCircuit },
    { id: 'errors', label: 'Error Book', icon: AlertTriangle },
    { id: 'focus', label: 'Focus Mode', icon: Lightbulb },
  ];

  const content = {
    overview: {
      title: 'Platform Overview',
      subtitle: 'The ultimate JEE training terminal.',
      icon: LayoutDashboard,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      gradient: 'from-emerald-400 to-teal-600',
      description: 'JEE Tapasya is a highly optimized environment engineered specifically for JEE Advanced preparation. We focus on active recall, deliberate practice, and cognitive endurance. Every interaction is designed to push your limits and maximize your problem-solving speed.',
      features: [
        { title: 'Zero Distractions', desc: 'Minimalist interface designed for pure focus.', icon: ShieldCheck },
        { title: 'Instant Analytics', desc: 'Real-time calculation of your performance metrics.', icon: Activity },
      ]
    },
    library: {
      title: 'Digital Library',
      subtitle: 'Your curated study archive.',
      icon: Library,
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
      gradient: 'from-indigo-400 to-purple-600',
      description: 'The Digital Bookshelf on the Dashboard organizes all your study materials. Select a subject (Physics, Chemistry, or Mathematics) to dive into chapters and concepts. We provide high-quality theory notes, flashcards, and formula sheets.',
      features: [
        { title: 'Subject Materials', desc: 'Comprehensive notes and formulas.', icon: BookOpen },
        { title: 'PYQ Archives', desc: 'Previous Year Questions sorted by relevance.', icon: Book },
      ]
    },
    practice: {
      title: 'Practice Modules',
      subtitle: 'Precision-guided testing.',
      icon: Target,
      color: 'text-red-500',
      bg: 'bg-red-500/10',
      border: 'border-red-500/20',
      gradient: 'from-red-400 to-orange-600',
      description: 'Navigate to any subject to access Practice Modules. Tests are timed to simulate real exam pressure. Every question includes a detailed solution that appears after submission. Filter by difficulty, chapter, or question type.',
      features: [
        { title: 'Custom DPPs', desc: 'Daily Practice Problems generated on demand.', icon: Zap },
        { title: 'Mock Tests', desc: 'Full-length and part-tests with negative marking.', icon: FlaskConical },
      ]
    },
    solver: {
      title: 'AI Doubt Solver',
      subtitle: 'Instant conceptual clarity.',
      icon: BrainCircuit,
      color: 'text-primary',
      bg: 'bg-primary/10',
      border: 'border-primary/20',
      gradient: 'from-emerald-400 to-primary',
      description: 'Stuck on a problem? Our advanced AI Doubt Solver acts as your personal tutor. Upload images of questions or type them out to get step-by-step guidance. The AI is specifically trained on JEE level physics, chemistry, and mathematics concepts.',
      features: [
        { title: 'Image Recognition', desc: 'Upload diagrams and equations instantly.', icon: Beaker },
        { title: 'Step-by-step', desc: 'Breaks down complex problems logically.', icon: MessageSquare },
      ]
    },
    errors: {
      title: 'Error Book',
      subtitle: 'Learn from your mistakes.',
      icon: AlertTriangle,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      gradient: 'from-amber-400 to-yellow-600',
      description: 'Every incorrect answer during practice is automatically logged into your Error Book. Review these questions periodically to ensure you do not repeat mistakes. This is the fastest way to improve your score.',
      features: [
        { title: 'Auto-logging', desc: 'Never manually copy a wrong question again.', icon: Zap },
        { title: 'Revision Mode', desc: 'Re-test yourself purely on past mistakes.', icon: ShieldCheck },
      ]
    },
    focus: {
      title: 'Study Focus Mode',
      subtitle: 'Unbreakable concentration.',
      icon: Lightbulb,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      gradient: 'from-purple-400 to-pink-600',
      description: 'The upcoming Study Focus Mode will transform your device into a dedicated learning terminal. During active study sessions, distracting websites and notifications will be blocked to ensure you stay in the zone.',
      features: [
        { title: 'Deep Work', desc: 'Lock the terminal to prevent tab switching.', icon: Target },
        { title: 'Distraction Blocker', desc: 'Block known distracting domains during tests.', icon: ShieldCheck },
      ]
    }
  };

  const activeData = content[activeSection as keyof typeof content];

  return (
    <div className="min-h-screen bg-[#fbfdfb] relative overflow-hidden">
      <ParticleEffect />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Animated Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full border-dashed pointer-events-none" 
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100/50 shadow-sm"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-emerald-800">Next-Gen Learning</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black heading-display tracking-tight text-emerald-950 uppercase leading-[1.1]"
          >
            Welcome to the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 italic">
              Future of JEE
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-900/60 font-medium max-w-2xl"
          >
            Experience an AI-powered terminal designed to maximize your cognitive endurance and problem-solving speed.
          </motion.p>

          {/* Abstract AI Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-full max-w-3xl aspect-video rounded-[2rem] bg-emerald-950 relative overflow-hidden group cursor-pointer shadow-2xl shadow-emerald-900/20 mt-8 border border-emerald-900/50"
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          >
            {/* Visualizer Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div 
                 animate={{ 
                   scale: [1, 1.2, 1],
                   opacity: [0.3, 0.6, 0.3]
                 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="w-64 h-64 bg-primary rounded-full blur-[80px]"
               />
               <motion.div 
                 animate={{ 
                   rotate: 360,
                   scale: [1, 1.1, 1]
                 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"
               />
            </div>
            
            {/* Playing State / Placeholder content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-500 group-hover:bg-black/20">
               {!isVideoPlaying ? (
                 <div className="flex flex-col items-center gap-4 transform transition-transform group-hover:scale-110">
                   <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                     <PlayCircle size={40} className="text-white" />
                   </div>
                   <span className="text-white font-bold tracking-widest uppercase text-sm">Play Platform Tour</span>
                 </div>
               ) : (
                 <div className="flex flex-col items-center justify-center text-white space-y-6">
                    {/* Simulated "Video" Content */}
                    <div className="flex gap-2 items-end h-16">
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-3 bg-primary rounded-t-sm"
                          animate={{ height: [10, Math.random() * 60 + 20, 10] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                        />
                      ))}
                    </div>
                    <p className="font-mono text-emerald-400 tracking-widest text-xs uppercase animate-pulse">Initializing Neural Engine...</p>
                    <button onClick={(e) => { e.stopPropagation(); setIsVideoPlaying(false); }} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors backdrop-blur-md">Pause</button>
                 </div>
               )}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-emerald-300"
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </section>

      {/* Interactive Documentation Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black heading-display uppercase tracking-tight text-emerald-950">
            System <span className="text-primary italic">Manual</span>
          </h2>
          <p className="text-emerald-900/50 font-medium max-w-2xl mx-auto">
            Select a module to explore its capabilities and learn how to integrate it into your training routine.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Nav */}
          <div className="lg:col-span-4 flex flex-col gap-3 relative">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "w-full text-left flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 font-bold relative overflow-hidden group",
                  activeSection === item.id
                    ? "bg-emerald-950 text-white shadow-xl shadow-emerald-900/20 scale-[1.02]"
                    : "bg-white text-emerald-950 border border-emerald-100 hover:border-emerald-300 hover:shadow-md"
                )}
              >
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="active-indicator" 
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" 
                  />
                )}
                <div className={cn(
                  "p-3 rounded-xl transition-colors duration-300 relative z-10",
                  activeSection === item.id ? "bg-white/10 text-primary" : "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100 group-hover:text-emerald-800"
                )}>
                  <item.icon size={22} />
                </div>
                <span className="uppercase tracking-tight text-sm relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <ArrowRight size={18} className="ml-auto opacity-50 relative z-10" />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white border border-emerald-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-emerald-900/5 relative overflow-hidden h-full flex flex-col"
              >
                {/* Decorative BG element */}
                <div className={cn("absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 bg-gradient-to-br", activeData.gradient)} />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-6 mb-8">
                    <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center border shadow-inner", activeData.bg, activeData.color, activeData.border)}>
                      <activeData.icon size={40} />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-5xl font-black text-emerald-950 uppercase italic tracking-tight leading-none mb-2">{activeData.title}</h2>
                      <p className="text-sm md:text-base font-bold uppercase tracking-widest text-emerald-900/40">{activeData.subtitle}</p>
                    </div>
                  </div>

                  <div className="prose prose-emerald max-w-none mb-10">
                    <p className="text-lg md:text-xl leading-relaxed text-emerald-900/70 font-medium">
                      {activeData.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mt-auto">
                    {activeData.features.map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        key={idx} 
                        className="p-6 md:p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100 hover:bg-emerald-50 transition-colors group"
                      >
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110", activeData.bg, activeData.color)}>
                          <feature.icon size={24} />
                        </div>
                        <h4 className="font-black text-lg text-emerald-950 mb-2 tracking-tight">{feature.title}</h4>
                        <p className="text-sm text-emerald-900/60 leading-relaxed font-medium">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Footer Banner */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 bg-emerald-950 rounded-[3rem] shadow-2xl relative overflow-hidden group mt-20"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] group-hover:bg-primary/30 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-[60px]" />
          
          <div className="relative z-10 space-y-8 flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Ready to initialize?</h2>
              <p className="text-emerald-100/60 max-w-xl font-medium text-lg">
                Return to the dashboard to select your subject and begin your training sequence. Your data is synced automatically.
              </p>
            </div>
            <div className="flex shrink-0">
              <Link 
                to="/home"
                className="px-8 py-4 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
              >
                Go to Dashboard
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.section>
      </section>
    </div>
  );
}
