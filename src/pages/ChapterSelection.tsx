import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronRight, Layers, Layout, Play, Clock, BarChart, Binary } from 'lucide-react';
import { SubjectId, Chapter } from '../types';
import { getAllData } from '../lib/dataService';
import { cn } from '../lib/utils';

export default function ChapterSelection() {
  const { subjectId } = useParams<{ subjectId: SubjectId }>();
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const allData = await getAllData();
      if (subjectId && allData[subjectId]) {
        setChapters(allData[subjectId]);
      }
      setLoading(false);
    }
    fetchData();
  }, [subjectId]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
      <div className="w-16 h-16 border-8 border-emerald-100 border-t-emerald-500 rounded-full animate-spin" />
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/40 animate-pulse">Syncing Mission Data...</span>
    </div>
  );

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-[1px] bg-emerald-500/50" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-emerald-600/60">Subject Analysis / {subjectId?.toUpperCase()}</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black heading-display leading-[0.85] text-emerald-950 uppercase tracking-tighter mb-6 relative">
            <span className="text-primary italic lowercase font-serif font-light tracking-normal block text-2xl sm:text-4xl md:text-5xl mb-2">curriculum</span>
            {subjectId === 'physics' ? 'Mechanics & Beyond' : subjectId === 'chemistry' ? 'Elemental Bonds' : 'Logical Structures'}
          </h1>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="px-6 py-3 bg-white border border-emerald-100 rounded-2xl shadow-sm flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="font-mono text-[10px] font-bold text-emerald-950 uppercase tracking-widest">{chapters.length} Sectors Active</span>
            </div>
            <div className="px-6 py-3 bg-emerald-50/50 border border-emerald-100 rounded-2xl flex items-center gap-3">
               <BarChart size={14} className="text-emerald-500" />
               <span className="font-mono text-[10px] font-bold text-emerald-950 uppercase tracking-widest">
                {chapters.reduce((acc, c) => acc + c.sets.length, 0)} Combined Modules
               </span>
            </div>
          </div>
        </div>

        <Link 
          to="/subjects" 
          className="group flex items-center gap-4 px-8 py-4 bg-emerald-950 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-emerald-900 transition-all active:scale-95"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retreat to Catalog
        </Link>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10 pb-20">
        <AnimatePresence>
          {chapters.map((chapter, idx) => (
            <motion.div 
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white border border-emerald-900/10 rounded-[3rem] p-8 md:p-12 shadow-sm hover:shadow-2xl hover:border-emerald-500/20 transition-all duration-500 overflow-hidden"
            >
              {/* Technical Accent Background */}
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-10 transition-opacity pointer-events-none">
                 <Layers size={180} />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-emerald-900/5">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                     <Layers size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black heading-display tracking-tight text-emerald-950 uppercase">{chapter.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-[9px] font-bold text-emerald-800/40 uppercase tracking-widest">Sector: {subjectId?.slice(0,3).toUpperCase()}-{(idx+1).toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                   <span className="font-mono text-[9px] font-bold text-emerald-800/30 uppercase tracking-widest">Integrity Rank</span>
                   <span className="text-xl font-black text-emerald-900/60 heading-display">UNRANKED</span>
                </div>
              </div>

              <div className="space-y-4">
                {chapter.sets.map((set) => (
                  <Link 
                    key={set.id} 
                    to={`/quiz/${subjectId}/${chapter.id}/${set.id}`}
                    className="flex items-center justify-between p-6 bg-emerald-50/20 rounded-[2rem] border border-emerald-100/50 hover:bg-emerald-50 hover:border-emerald-500/30 transition-all duration-300 relative group/set"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-400 shadow-sm group-hover/set:scale-110 transition-transform">
                         <Play size={20} className="fill-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-emerald-950 uppercase tracking-tight">{set.title}</h4>
                        <div className="flex items-center gap-6 mt-1">
                           <div className="flex items-center gap-2">
                              <Binary size={12} className="text-emerald-500/40" />
                              <span className="font-mono text-[9px] font-bold text-emerald-800/50 uppercase tracking-widest">{set.itemCount} Units</span>
                           </div>
                           <div className="flex items-center gap-2">
                              <Clock size={12} className="text-emerald-500/40" />
                              <span className="font-mono text-[9px] font-bold text-emerald-800/50 uppercase tracking-widest">{set.itemCount * 1.5}m Est.</span>
                           </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {set.difficulty && (
                        <div className={cn(
                          "px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border",
                          set.difficulty === 'hard' ? "bg-red-50 text-red-600 border-red-100" :
                          set.difficulty === 'medium' ? "bg-amber-50 text-amber-600 border-amber-100" :
                          "bg-emerald-50 text-emerald-600 border-emerald-100"
                        )}>
                          {set.difficulty === 'hard' ? 'Advanced' : set.difficulty === 'medium' ? 'Active' : 'Tactical'}
                        </div>
                      )}
                      <div className="w-10 h-10 rounded-full bg-emerald-950 text-white flex items-center justify-center scale-0 group-hover/set:scale-100 transition-all duration-300">
                         <ChevronRight size={20} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
