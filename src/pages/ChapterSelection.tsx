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

  if (loading) return <div className="flex items-center justify-center h-64"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="space-y-12">
      <div className="flex justify-start">
        <Link 
          to="/subjects" 
          className="group flex items-center gap-3 px-6 py-3 bg-white text-emerald-950 font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl hover:bg-emerald-50 transition-all border-2 border-emerald-50"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Catalog
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-8 md:mb-12">
        <div>
           <h1 className="text-4xl md:text-6xl font-black heading-display mb-4 capitalize text-emerald-950 uppercase tracking-tight">{subjectId} <span className="text-primary italic">Core</span></h1>
           <p className="text-emerald-800/70 text-base md:text-lg font-medium">Select a specialized module to begin intensive practice. Each set is designed for peak performance.</p>
        </div>
        <div className="flex gap-4">
           <div className="px-4 md:px-6 py-3 md:py-4 glass-premium rounded-xl md:rounded-2x border border-emerald-100 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700/50 bg-white">
              {chapters.length} CHAPTERS
           </div>
           <div className="px-4 md:px-6 py-3 md:py-4 bg-primary/10 rounded-xl md:rounded-2x border border-primary/20 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              {chapters.reduce((acc, c) => acc + c.sets.length, 0)} TOTAL SETS
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10 pb-10 md:pb-20">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="glass-premium rounded-[2rem] md:rounded-[3rem] border border-emerald-100 p-6 md:p-10 group overflow-hidden relative bg-white">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none hidden md:block">
               <Layers size={140} className="text-primary" />
            </div>

            <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10 relative z-10">
               <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.5rem] bg-emerald-50 text-primary flex items-center justify-center shadow-sm shrink-0">
                  <Layers size={24} className="md:size-32" />
               </div>
               <div>
                  <h3 className="text-2xl md:text-3xl font-black heading-display tracking-tight text-emerald-950">{chapter.title}</h3>
                  <p className="text-[9px] md:text-xs text-emerald-700/50 font-black uppercase tracking-widest mt-1">{chapter.sets.length} Specialized Sets</p>
               </div>
            </div>

            <div className="space-y-4 relative z-10">
              {chapter.sets.map((set) => (
                <Link 
                  key={set.id} 
                  to={`/quiz/${subjectId}/${chapter.id}/${set.id}`}
                  className="group flex items-center justify-between p-4 md:p-6 bg-emerald-50/50 rounded-2xl md:rounded-[2rem] border border-transparent hover:border-primary/40 hover:bg-emerald-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white border border-emerald-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm shrink-0">
                       <Play size={18} className="fill-primary md:size-20" />
                    </div>
                    <div>
                       <h4 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors text-emerald-900 leading-tight">{set.title}</h4>
                       <div className="flex flex-wrap items-center gap-3 md:gap-6 mt-1 md:mt-2">
                          <span className="flex items-center gap-2 text-[8px] md:text-[10px] text-emerald-700/60 font-black uppercase tracking-widest">
                            <Binary size={10} className="text-primary md:size-12" /> {set.itemCount} Qs
                          </span>
                          <span className="flex items-center gap-2 text-[8px] md:text-[10px] text-emerald-700/60 font-black uppercase tracking-widest">
                            <Clock size={10} className="text-primary md:size-12" /> {set.itemCount * 1.5} M
                          </span>
                       </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex flex-col items-end mr-6">
                       <span className="text-[10px] text-emerald-700/60 font-black uppercase tracking-widest">TOP RANK</span>
                       <span className="text-lg font-black text-primary heading-display">--</span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-emerald-100 bg-white flex items-center justify-center text-emerald-700/60 group-hover:bg-primary group-hover:text-white transition-all text-emerald-400">
                       <ChevronRight size={20} />
                    </div>
                  </div>
                </Link>
              ))}
                            {chapter.sets.length === 0 && (
                <div className="p-16 text-center text-emerald-700/50 border-2 border-dashed border-emerald-100 rounded-[3rem] bg-emerald-50/20">
                   <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Layout size={32} className="opacity-20" />
                   </div>
                   <p className="text-sm font-bold uppercase tracking-widest opacity-50">Locked / No Data Available</p>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {chapters.length === 0 && (
           <div className="col-span-full py-32 text-center bg-white rounded-[4rem] border-dashed border-emerald-100 border-2">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                 <Layout size={48} className="text-emerald-300" />
              </div>
              <h3 className="text-2xl font-black heading-display mb-4 text-emerald-950 uppercase">Systems <span className="text-primary italic">Offline</span></h3>
              <p className="text-emerald-700/60 font-medium max-w-sm mx-auto">This sector hasn't been populated with modules yet. Contact your instructor or check physical chemistry.</p>
           </div>
        )}
      </div>
    </div>
  );
}
