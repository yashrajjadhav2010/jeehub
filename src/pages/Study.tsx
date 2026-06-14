import React from 'react';
import { motion } from 'motion/react';
import { Book, FileText, Network, Beaker, Calculator, Atom, Download, Search, ArrowRight, Zap, Target, ScrollText, Bookmark } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

export default function Study() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const [activeSubject, setActiveSubject] = React.useState<string>(location.state?.subject || 'All');

  const materialsDb: Record<string, any[]> = {
    'formulas': [
       { id: 'kinematics-equations', title: 'Kinematics Equations', subject: 'Physics', type: 'Formula Sheet', time: 'Latest', icon: Atom },
       { id: 'laws-of-motion', title: 'Laws of Motion', subject: 'Physics', type: 'Formula Sheet', time: 'Updated', icon: Atom },
    ],
    'short-notes': [
       { id: 'periodic-properties', title: 'Periodic Properties', subject: 'Chemistry', type: 'Revision Notes', time: 'Latest', icon: Beaker },
       { id: 'vectors-short-notes', title: 'Vectors & 3D', subject: 'Mathematics/Physics', type: 'Revision Notes', time: 'Latest', icon: Calculator },
       { id: 'work-power-energy-short-notes', title: 'Work, Power & Energy', subject: 'Physics', type: 'Revision Notes', time: 'Latest', icon: Atom },
       { id: 'rotational-motion-short-notes', title: 'Rotational Motion', subject: 'Physics', type: 'Revision Notes', time: 'Latest', icon: Atom },
    ],
    'mind-maps': [],
    'cheat-sheets': []
  };

  const filterSubjects = ['All', 'Physics', 'Chemistry', 'Mathematics'];

  const categories: Array<{
    id: string; title: string; description: string; icon: any; color: string; shadow?: string; textColor?: string; lightBg: string; count: string; bookmark: string; tabs: string[]; latch: boolean;
  }> = [
    {
      id: 'formulas',
      title: 'Formula Vault',
      description: 'Master equations for Physics, Chemistry, and Math',
      icon: Calculator,
      color: 'bg-[#fb8b66]',
      lightBg: 'bg-[#ffebe3]',
      bookmark: 'bg-[#eeb136]',
      tabs: [],
      latch: true,
      count: '2 Sheets'
    },
    {
      id: 'short-notes',
      title: 'Short Notes',
      description: 'Quick revision summaries for every chapter',
      icon: ScrollText,
      color: 'bg-[#6cbeb5]',
      lightBg: 'bg-[#e1f5f2]',
      bookmark: 'bg-[#e86665]',
      tabs: ['bg-[#f5c64b]', 'bg-[#e86665]', 'bg-[#9071df]'],
      latch: false,
      count: '4 Chapters'
    },
    {
      id: 'mind-maps',
      title: 'Mind Maps',
      description: 'Visual concept linkages for instant recall',
      icon: Network,
      color: 'bg-[#8165b4]',
      lightBg: 'bg-[#eee9f8]',
      bookmark: 'bg-[#bc90e9]',
      tabs: ['bg-[#f5c64b]', 'bg-[#f5c64b]', 'bg-[#f5c64b]', 'bg-[#f5c64b]'],
      latch: false,
      count: '0 Maps'
    },
    {
      id: 'cheat-sheets',
      title: 'Cheat Sheets',
      description: 'Reaction mechanisms, constants, and exceptions',
      icon: Zap,
      color: 'bg-[#f6a0b9]',
      lightBg: 'bg-[#fceef2]',
      bookmark: 'bg-[#f5c64b]',
      tabs: ['bg-[#6cbeb5]', 'bg-[#eeb136]'],
      latch: false,
      count: '0 Sheets'
    }
  ];

  const recentMaterials = [
    { id: 'work-power-energy-short-notes', title: 'Work, Power & Energy', subject: 'Physics', type: 'Revision Notes', time: 'Just Now', icon: Atom },
    { id: 'periodic-properties', title: 'Periodic Properties', subject: 'Chemistry', type: 'Revision Notes', time: 'Latest', icon: Beaker },
    { id: 'kinematics-equations', title: 'Kinematics Equations', subject: 'Physics', type: 'Formula Sheet', time: 'Latest', icon: Atom },
    { id: 'laws-of-motion', title: 'Laws of Motion', subject: 'Physics', type: 'Formula Sheet', time: 'Updated', icon: Atom },
    { id: 'vectors-short-notes', title: 'Vectors & 3D', subject: 'Mathematics/Physics', type: 'Revision Notes', time: 'Latest', icon: Calculator },
  ];

  const rawDisplayedMaterials = activeCategory ? materialsDb[activeCategory] : recentMaterials;
  const displayedMaterials = rawDisplayedMaterials.filter(item => activeSubject === 'All' || item.subject.includes(activeSubject));

  return (
    <div className="space-y-12 pb-20 px-4 md:px-0 w-full overflow-hidden sm:overflow-visible">
      <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <Book size={14} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Tapasya Library</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">
            Study <span className="text-primary not-italic">Archive</span>
          </h1>
          <p className="text-emerald-700/50 font-medium max-w-xl text-sm sm:text-base">
            Your centralized repository for formulas, short notes, mind maps, and quick revision materials.
          </p>
        </div>
        
        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar w-full sm:w-auto">
              {filterSubjects.map(subject => (
                 <button
                    key={subject}
                    onClick={() => setActiveSubject(subject)}
                    className={cn(
                       "px-4 py-3 sm:py-2 rounded-xl sm:rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                       activeSubject === subject 
                       ? "bg-emerald-950 text-white shadow-md"
                       : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                    )}
                 >
                    {subject}
                 </button>
              ))}
          </div>

          <div className="relative flex-1 sm:w-80">
             <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/40" />
             <input 
               type="text" 
               placeholder="Search chapters, formulas..." 
               className="w-full bg-white border-2 border-emerald-50 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold text-emerald-950 placeholder:text-emerald-900/30 focus:border-primary focus:outline-none transition-colors shadow-sm"
             />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {categories.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center gap-4 group cursor-pointer"
            onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
          >
            <div className={cn("relative w-full aspect-square rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-6 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 border-[3px] sm:border-4 box-border", activeCategory === category.id ? "border-primary shadow-xl shadow-primary/20" : "border-transparent shadow-md hover:shadow-xl", category.lightBg)}>
               {/* The Book Container */}
               <div className="relative w-[75%] sm:w-[70%] h-[80%] rounded-r-2xl sm:rounded-r-3xl rounded-l-md sm:rounded-l-xl transition-transform duration-500 group-hover:scale-105" style={{ perspective: '1000px' }}>
                  {/* Bookmark */}
                  {category.bookmark && (
                    <div className={cn("absolute -bottom-4 sm:-bottom-5 right-4 sm:right-6 w-5 sm:w-6 h-10 sm:h-12 z-0 shadow-sm transition-all duration-500 group-hover:translate-y-2", category.bookmark)} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)' }} />
                  )}

                  {/* Tabs */}
                  {category.tabs && category.tabs.length > 0 && (
                     <div className="absolute right-[-4px] sm:right-[-6px] top-[15%] bottom-[15%] flex flex-col justify-evenly gap-1 sm:gap-2 z-0">
                        {category.tabs.map((tabBg, i) => (
                           <div key={i} className={cn("w-2 sm:w-3 h-5 sm:h-6 rounded-r-sm shadow-sm transition-transform duration-300 group-hover:translate-x-2", tabBg)} style={{ transitionDelay: `${i * 50}ms` }} />
                        ))}
                     </div>
                  )}

                  {/* Pages (white background slightly offset) */}
                  <div className="absolute inset-y-1 sm:inset-y-2 left-2 right-[-6px] sm:right-[-10px] bg-white rounded-r-2xl sm:rounded-r-3xl rounded-l-md sm:rounded-l-xl shadow-md border-y border-r border-[#e9ecef]">
                     <div className="absolute top-1/4 bottom-1/4 right-1 w-[2px] bg-gray-100 rounded-full" />
                     <div className="absolute top-1/3 bottom-1/3 right-2 w-[2px] bg-gray-100 rounded-full" />
                     
                     {/* Inner page content hints */}
                     <div className="absolute inset-y-6 sm:inset-y-8 inset-x-6 sm:inset-x-8 flex flex-col gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                        <div className="h-1 sm:h-1.5 bg-emerald-100 rounded-full w-1/3" />
                        <div className="h-1 sm:h-1.5 bg-emerald-50 rounded-full w-3/4 mt-2" />
                        <div className="h-1 sm:h-1.5 bg-emerald-50 rounded-full w-full" />
                        <div className="h-1 sm:h-1.5 bg-emerald-50 rounded-full w-5/6" />
                        <div className="h-1 sm:h-1.5 bg-emerald-50 rounded-full w-4/5" />
                     </div>
                  </div>
                  
                  {/* Front Cover */}
                  <div 
                    className={cn(
                      "absolute inset-0 right-0 sm:right-1 rounded-r-xl sm:rounded-r-2xl rounded-l-md sm:rounded-l-xl shadow-sm flex items-center justify-center z-10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-left", 
                      category.color,
                      "group-hover:[transform:rotateY(-35deg)]"
                    )}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                      <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 bg-black/10 rounded-l-md sm:rounded-l-xl border-r border-black/10 z-0" style={{ transform: 'translateZ(0.1px)' }} />
                      <div className="absolute left-2 sm:left-3 top-2 sm:top-3 bottom-2 sm:bottom-3 w-0 border-l-[2px] sm:border-l-[3px] border-dotted border-white/30 z-10" style={{ transform: 'translateZ(0.1px)' }} />
                      
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-r-xl sm:rounded-r-2xl rounded-l-md sm:rounded-l-xl overflow-hidden" style={{ transform: 'translateZ(0.1px)' }} />

                      <category.icon size={28} className="text-white z-20 drop-shadow-md sm:scale-125 lg:scale-150 relative -left-1 sm:-left-1.5 transition-transform duration-500 group-hover:scale-105" style={{ transform: 'translateZ(1px)' }} />

                      {/* Latch */}
                      {category.latch && (
                         <div className="absolute right-[-10px] sm:right-[-14px] top-1/2 -translate-y-1/2 w-8 sm:w-12 h-10 sm:h-14 bg-[#7d5641] rounded-r-lg sm:rounded-r-xl z-20 flex items-center justify-end pr-1 sm:pr-2 shadow-md transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-left group-hover:[transform:rotateY(-140deg)]" style={{ transform: 'translateZ(0.5px)' }}>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#e3b587] shadow-sm ml-auto relative right-1" />
                         </div>
                      )}
                  </div>
               </div>
            </div>
            
            <div className="text-center space-y-1 w-full flex-1">
              <h3 className={cn("text-[11px] sm:text-base font-black uppercase tracking-tight transition-colors leading-tight sm:leading-normal", activeCategory === category.id ? "text-primary" : "text-emerald-950")}>{category.title}</h3>
              <p className="hidden sm:block text-[9px] sm:text-[11px] font-bold text-emerald-900/40 uppercase tracking-widest">{category.count}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-6 min-w-0 w-full">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900/30 px-2">
               {activeCategory ? `${categories.find(c => c.id === activeCategory)?.title} Materials` : 'Recent & Recommended'}
            </h3>
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 flex flex-col gap-4">
              {displayedMaterials.length > 0 ? displayedMaterials.map((item, i) => (
                <Link to={item.id ? `/study/${item.id}` : `/study/vectors-short-notes`} key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl border-2 border-emerald-50 hover:border-primary/20 bg-emerald-50/20 hover:bg-emerald-50/50 transition-all gap-4 group cursor-pointer block">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-900/40 group-hover:text-primary transition-colors">
                         <item.icon size={20} />
                      </div>
                      <div>
                         <h4 className="text-sm font-black text-emerald-950 uppercase tracking-tight mb-1">{item.title}</h4>
                         <div className="flex items-center gap-2">
                           <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40">{item.subject}</span>
                           <span className="w-1 h-1 rounded-full bg-emerald-900/20" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-primary">{item.type}</span>
                         </div>
                      </div>
                   </div>
                   <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-4 ml-16 sm:ml-0">
                     <span className="text-[9px] font-black uppercase tracking-widest text-emerald-900/30">{item.time}</span>
                     <button className="w-8 h-8 rounded-full bg-white border border-emerald-100 flex items-center justify-center text-emerald-900/40 hover:text-primary hover:border-primary/30 transition-colors shadow-sm pointer-events-none">
                       <Download size={14} />
                     </button>
                   </div>
                </Link>
              )) : (
                 <div className="py-12 flex flex-col items-center justify-center opacity-60">
                    <Book size={48} className="text-emerald-900/20 mb-4" />
                    <p className="text-sm font-bold text-emerald-950 uppercase tracking-widest text-center">No materials found for this subject</p>
                 </div>
              )}
            </div>
         </div>

         <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900/30 px-2">Quick Navigation</h3>
            <div className="bg-emerald-950 p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] text-white shadow-xl shadow-emerald-900/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
               <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                     <Target size={24} className="text-primary" />
                  </div>
                  <div className="space-y-2">
                     <h4 className="text-xl font-black uppercase italic tracking-tight">Need a customized plan?</h4>
                     <p className="text-xs font-medium text-emerald-100/60 leading-relaxed">
                        Tapasya AI can generate a distinct revision schedule combining formulas, notes, and question banks based on your weaknesses.
                     </p>
                  </div>
                  <Link to="/doubt-solver" className="w-full py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                     Ask the Engine <ArrowRight size={14} />
                  </Link>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
