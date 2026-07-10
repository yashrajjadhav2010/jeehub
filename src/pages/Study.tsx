import React from 'react';
import { motion } from 'motion/react';
import { Book, FileText, Network, Beaker, Calculator, Atom, Download, Search, ArrowRight, Zap, Target, ScrollText, Bookmark, Activity, Waves, RotateCcw, Crosshair, Settings2, Compass, PenTool, BatteryCharging, RefreshCw, TriangleRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

export default function Study() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const [activeSubject, setActiveSubject] = React.useState<string>(location.state?.subject || 'All');

  const materialsDb: Record<string, any[]> = {
    'formulas': [
       { id: 'kinematics-equations', title: 'Kinematics Equations', subject: 'Physics', type: 'Formula Sheet', time: 'Latest', icon: Activity, iconColor: 'text-rose-500', iconBg: 'bg-rose-50', iconBorder: 'border-rose-100' },
       { id: 'laws-of-motion', title: 'Laws of Motion', subject: 'Physics', type: 'Formula Sheet', time: 'Updated', icon: Target, iconColor: 'text-amber-500', iconBg: 'bg-amber-50', iconBorder: 'border-amber-100' },
    ],
    'short-notes': [
       { id: 'unit-and-dimension', title: 'Unit & Dimension', subject: 'Physics', type: 'Revision Notes', time: 'Latest', icon: TriangleRight, iconColor: 'text-lime-500', iconBg: 'bg-lime-50', iconBorder: 'border-lime-100' },
       { id: 'periodic-properties', title: 'Periodic Properties', subject: 'Chemistry', type: 'Revision Notes', time: 'Latest', icon: Beaker, iconColor: 'text-fuchsia-500', iconBg: 'bg-fuchsia-50', iconBorder: 'border-fuchsia-100' },
       { id: 'vectors-short-notes', title: 'Vector & Calculus', subject: 'Mathematics/Physics', type: 'Revision Notes', time: 'Latest', icon: Compass, iconColor: 'text-sky-500', iconBg: 'bg-sky-50', iconBorder: 'border-sky-100' },
       { id: 'work-power-energy-short-notes', title: 'Work, Power & Energy', subject: 'Physics', type: 'Revision Notes', time: 'Latest', icon: BatteryCharging, iconColor: 'text-yellow-500', iconBg: 'bg-yellow-50', iconBorder: 'border-yellow-100' },
       { id: 'rotational-motion-short-notes', title: 'Rotational Motion', subject: 'Physics', type: 'Revision Notes', time: 'Latest', icon: RefreshCw, iconColor: 'text-orange-500', iconBg: 'bg-orange-50', iconBorder: 'border-orange-100' },
       { id: 'atomic-structure', title: 'Atomic Structure', subject: 'Chemistry', type: 'Revision Notes', time: 'Latest', icon: Atom, iconColor: 'text-purple-500', iconBg: 'bg-purple-50', iconBorder: 'border-purple-100' },
       { id: 'waves', title: 'Waves', subject: 'Physics', type: 'Revision Notes', time: 'Latest', icon: Waves, iconColor: 'text-cyan-500', iconBg: 'bg-cyan-50', iconBorder: 'border-cyan-100' },
    ],
    'mind-maps': [
       { id: 'kinematics-mindmap', title: 'Kinematics', subject: 'Physics', type: 'Mind Map', time: 'Latest', icon: Activity, iconColor: 'text-rose-500', iconBg: 'bg-rose-50', iconBorder: 'border-rose-100' },
       { id: 'laws-of-motion-mindmap', title: 'Laws of Motion', subject: 'Physics', type: 'Mind Map', time: 'Latest', icon: Target, iconColor: 'text-amber-500', iconBg: 'bg-amber-50', iconBorder: 'border-amber-100' },
       { id: 'unit-dimension-mindmap', title: 'Unit & Dimension', subject: 'Physics', type: 'Mind Map', time: 'Latest', icon: TriangleRight, iconColor: 'text-lime-500', iconBg: 'bg-lime-50', iconBorder: 'border-lime-100' },
       { id: 'work-power-energy-mindmap', title: 'Work, Power & Energy', subject: 'Physics', type: 'Mind Map', time: 'Latest', icon: BatteryCharging, iconColor: 'text-yellow-500', iconBg: 'bg-yellow-50', iconBorder: 'border-yellow-100' },
       { id: 'centre-of-mass-mindmap', title: 'Centre of Mass & Collisions', subject: 'Physics', type: 'Mind Map', time: 'New', icon: Target, iconColor: 'text-orange-600', iconBg: 'bg-orange-50', iconBorder: 'border-orange-100' },
       { id: 'rotational-motion-mindmap', title: 'Rotational Motion', subject: 'Physics', type: 'Mind Map', time: 'Latest', icon: RefreshCw, iconColor: 'text-orange-500', iconBg: 'bg-orange-50', iconBorder: 'border-orange-100' },
       { id: 'thermodynamics-mindmap', title: 'Thermodynamics', subject: 'Physics', type: 'Mind Map', time: 'New', icon: Zap, iconColor: 'text-red-500', iconBg: 'bg-red-50', iconBorder: 'border-red-100' },
       { id: 'waves-mindmap', title: 'Waves', subject: 'Physics', type: 'Mind Map', time: 'Latest', icon: Waves, iconColor: 'text-cyan-500', iconBg: 'bg-cyan-50', iconBorder: 'border-cyan-100' },
       { id: 'periodic-properties-mindmap', title: 'Periodic Properties', subject: 'Chemistry', type: 'Mind Map', time: 'Latest', icon: Beaker, iconColor: 'text-fuchsia-500', iconBg: 'bg-fuchsia-50', iconBorder: 'border-fuchsia-100' },
       { id: 'atomic-structure-mindmap', title: 'Atomic Structure', subject: 'Chemistry', type: 'Mind Map', time: 'Latest', icon: Atom, iconColor: 'text-purple-500', iconBg: 'bg-purple-50', iconBorder: 'border-purple-100' },
       { id: 'chemical-bonding-mindmap', title: 'Chemical Bonding', subject: 'Chemistry', type: 'Mind Map', time: 'New', icon: Network, iconColor: 'text-pink-500', iconBg: 'bg-pink-50', iconBorder: 'border-pink-100' },
       { id: 'goc-mindmap', title: 'General Organic Chemistry', subject: 'Chemistry', type: 'Mind Map', time: 'New', icon: Beaker, iconColor: 'text-emerald-500', iconBg: 'bg-emerald-50', iconBorder: 'border-emerald-100' },
       { id: 'vectors-mindmap', title: 'Vector & Calculus', subject: 'Mathematics/Physics', type: 'Mind Map', time: 'Latest', icon: Compass, iconColor: 'text-sky-500', iconBg: 'bg-sky-50', iconBorder: 'border-sky-100' },
       { id: 'algebra-mindmap', title: 'Algebra Fundamentals', subject: 'Mathematics', type: 'Mind Map', time: 'New', icon: Calculator, iconColor: 'text-indigo-500', iconBg: 'bg-indigo-50', iconBorder: 'border-indigo-100' },
       { id: 'calculus-mindmap', title: 'Calculus Fundamentals', subject: 'Mathematics', type: 'Mind Map', time: 'New', icon: Network, iconColor: 'text-blue-500', iconBg: 'bg-blue-50', iconBorder: 'border-blue-100' },
       { id: 'electrostatics-mindmap', title: 'Electrostatics', subject: 'Physics', type: 'Mind Map', time: 'New', icon: Zap, iconColor: 'text-amber-500', iconBg: 'bg-amber-50', iconBorder: 'border-amber-100' },
       { id: 'optics-mindmap', title: 'Optics', subject: 'Physics', type: 'Mind Map', time: 'New', icon: Crosshair, iconColor: 'text-violet-500', iconBg: 'bg-violet-50', iconBorder: 'border-violet-100' },
       { id: 'hydrocarbons-mindmap', title: 'Hydrocarbons', subject: 'Chemistry', type: 'Mind Map', time: 'New', icon: Beaker, iconColor: 'text-emerald-500', iconBg: 'bg-emerald-50', iconBorder: 'border-emerald-100' },
       { id: 'equilibrium-mindmap', title: 'Chemical Equilibrium', subject: 'Chemistry', type: 'Mind Map', time: 'New', icon: RefreshCw, iconColor: 'text-blue-500', iconBg: 'bg-blue-50', iconBorder: 'border-blue-100' },
       { id: 'coordinate-geometry-mindmap', title: 'Coordinate Geometry', subject: 'Mathematics', type: 'Mind Map', time: 'New', icon: Compass, iconColor: 'text-rose-500', iconBg: 'bg-rose-50', iconBorder: 'border-rose-100' },
       { id: 'probability-mindmap', title: 'Probability & Statistics', subject: 'Mathematics', type: 'Mind Map', time: 'New', icon: Target, iconColor: 'text-indigo-500', iconBg: 'bg-indigo-50', iconBorder: 'border-indigo-100' },
    ],
    'cheat-sheets': []
  };

  const [dbMaterials, setDbMaterials] = React.useState<Record<string, any[]>>({
    'formulas': [],
    'short-notes': [],
    'mind-maps': [],
    'cheat-sheets': []
  });

  React.useEffect(() => {
    async function fetchCustomMaterials() {
      try {
        const { collection, getDocs } = await import('firebase/firestore');
        const { db } = await import('../lib/firebase');
        const querySnapshot = await getDocs(collection(db, 'custom_materials'));
        
        const loaded: Record<string, any[]> = {
          'formulas': [],
          'short-notes': [],
          'mind-maps': [],
          'cheat-sheets': []
        };
        
        querySnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          const cat = data.category || 'short-notes';
          if (loaded[cat]) {
            loaded[cat].push({
              id: docSnap.id,
              title: data.title || 'Untitled',
              subject: data.subject || 'Physics',
              type: cat === 'formulas' ? 'Formula Sheet' : cat === 'mind-maps' ? 'Mind Map' : 'Revision Notes',
              time: 'New',
              icon: cat === 'formulas' ? Calculator : cat === 'mind-maps' ? Network : ScrollText,
              iconColor: cat === 'formulas' ? 'text-rose-500' : cat === 'mind-maps' ? 'text-purple-500' : 'text-lime-500',
              iconBg: cat === 'formulas' ? 'bg-rose-50' : cat === 'mind-maps' ? 'bg-purple-50' : 'bg-lime-50',
              iconBorder: cat === 'formulas' ? 'border-rose-100' : cat === 'mind-maps' ? 'border-purple-100' : 'border-lime-100',
              isCustom: true
            });
          }
        });
        
        setDbMaterials(loaded);
      } catch (e) {
        console.error("Error loading custom materials", e);
      }
    }
    fetchCustomMaterials();
  }, []);

  const mergedMaterialsDb: Record<string, any[]> = {
    'formulas': [...materialsDb['formulas'], ...dbMaterials['formulas']],
    'short-notes': [...materialsDb['short-notes'], ...dbMaterials['short-notes']],
    'mind-maps': [...materialsDb['mind-maps'], ...dbMaterials['mind-maps']],
    'cheat-sheets': [...materialsDb['cheat-sheets'], ...dbMaterials['cheat-sheets']],
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
      count: `${mergedMaterialsDb['formulas'].length} Sheets`
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
      count: `${mergedMaterialsDb['short-notes'].length} Chapters`
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
      count: `${mergedMaterialsDb['mind-maps'].length} Maps`
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
      count: `${mergedMaterialsDb['cheat-sheets'].length} Sheets`
    }
  ];

  const recentMaterials = [
    { id: 'work-power-energy-short-notes', title: 'Work, Power & Energy', subject: 'Physics', type: 'Revision Notes', time: 'Just Now', icon: BatteryCharging, iconColor: 'text-yellow-500', iconBg: 'bg-yellow-50', iconBorder: 'border-yellow-100' },
    { id: 'rotational-motion-short-notes', title: 'Rotational Motion', subject: 'Physics', type: 'Revision Notes', time: 'Latest', icon: RefreshCw, iconColor: 'text-orange-500', iconBg: 'bg-orange-50', iconBorder: 'border-orange-100' },
    { id: 'atomic-structure', title: 'Atomic Structure', subject: 'Chemistry', type: 'Revision Notes', time: 'Latest', icon: Atom, iconColor: 'text-purple-500', iconBg: 'bg-purple-50', iconBorder: 'border-purple-100' },
    { id: 'vectors-short-notes', title: 'Vector & Calculus', subject: 'Mathematics/Physics', type: 'Revision Notes', time: 'Latest', icon: Compass, iconColor: 'text-sky-500', iconBg: 'bg-sky-50', iconBorder: 'border-sky-100' },
    { id: 'kinematics-equations', title: 'Kinematics Equations', subject: 'Physics', type: 'Formula Sheet', time: 'Latest', icon: Activity, iconColor: 'text-rose-500', iconBg: 'bg-rose-50', iconBorder: 'border-rose-100' },
  ];

  const rawDisplayedMaterials = activeCategory ? mergedMaterialsDb[activeCategory] : recentMaterials;
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
                      <div className={cn("w-12 h-12 rounded-xl shadow-sm border flex items-center justify-center shrink-0 transition-colors", item.iconBg || "bg-white", item.iconBorder || "border-emerald-100", item.iconColor || "text-emerald-900/40 group-hover:text-primary")}>
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

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] text-white shadow-xl shadow-black/10 relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10 space-y-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <Target size={24} className="text-emerald-400" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-black uppercase italic tracking-tight">DPP Generator</h4>
                        <p className="text-xs font-medium text-gray-400 leading-relaxed">
                            Create custom Daily Practice Problems tailored to your specific needs, difficulty level, and subject.
                        </p>
                    </div>
                    <Link to="/dpp-builder" className="w-full py-4 bg-emerald-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
                        Generate DPP <ArrowRight size={14} />
                    </Link>
                </div>
            </div>



            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] text-white shadow-xl shadow-black/10 relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10 space-y-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <Beaker size={24} className="text-blue-400" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-black uppercase italic tracking-tight">Interactive Periodic Table</h4>
                        <p className="text-xs font-medium text-gray-400 leading-relaxed">
                            Explore elements, their properties, electron configurations, and test your knowledge with the built-in quiz mode.
                        </p>
                    </div>
                    <Link to="/study/periodic-table" className="w-full py-4 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                        Open Table <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
         </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-4">
        <Link to="/formula-vault" className="flex items-center gap-4 p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Book className="w-7 h-7 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-emerald-950 uppercase tracking-tight">Formula Vault</h3>
            <p className="text-xs font-medium text-emerald-900/60 mt-1">Searchable database of JEE formulas</p>
          </div>
        </Link>
        <Link to="/flashcards" className="flex items-center gap-4 p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform">
            <RefreshCw className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-emerald-950 uppercase tracking-tight">Active Flashcards</h3>
            <p className="text-xs font-medium text-emerald-900/60 mt-1">Spaced repetition for quick memorization</p>
          </div>
        </Link>
      </div>

</div>
    </div>
  );
}
