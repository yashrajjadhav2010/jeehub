import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ChevronRight, Layers, Layout, Play, Clock, BarChart, Binary, FolderOpen, ArrowRight,
  Activity, Target, Box, Compass, FunctionSquare, Infinity, Triangle, Circle, Zap, RefreshCw,
  Magnet, Atom, Hexagon, Waves, Beaker, Calculator, Pi
} from 'lucide-react';
import { SubjectId, Chapter } from '../types';
import { getAllData } from '../lib/dataService';
import { cn, calculatePredictedRank, formatRank } from '../lib/utils';

const getChapterDesign = (chapterId: string, subjectId: string) => {
  const id = chapterId.toLowerCase();
  
  if (id.includes('kinematics')) return { icon: Activity, color: 'text-amber-500', bg: 'bg-amber-50', groupBg: 'group-hover:bg-amber-500', border: 'border-amber-100', shadow: 'group-hover:shadow-amber-500/30' };
  if (id.includes('newton') || id.includes('laws')) return { icon: Target, color: 'text-rose-500', bg: 'bg-rose-50', groupBg: 'group-hover:bg-rose-500', border: 'border-rose-100', shadow: 'group-hover:shadow-rose-500/30' };
  if (id.includes('unit') || id.includes('dimension')) return { icon: Box, color: 'text-lime-500', bg: 'bg-lime-50', groupBg: 'group-hover:bg-lime-500', border: 'border-lime-100', shadow: 'group-hover:shadow-lime-500/30' };
  if (id.includes('vector')) return { icon: Compass, color: 'text-sky-500', bg: 'bg-sky-50', groupBg: 'group-hover:bg-sky-500', border: 'border-sky-100', shadow: 'group-hover:shadow-sky-500/30' };
  if (id.includes('differentiation') || id.includes('calculus')) return { icon: FunctionSquare, color: 'text-emerald-500', bg: 'bg-emerald-50', groupBg: 'group-hover:bg-emerald-500', border: 'border-emerald-100', shadow: 'group-hover:shadow-emerald-500/30' };
  if (id.includes('integration') || id.includes('integral')) return { icon: Infinity, color: 'text-fuchsia-500', bg: 'bg-fuchsia-50', groupBg: 'group-hover:bg-fuchsia-500', border: 'border-fuchsia-100', shadow: 'group-hover:shadow-fuchsia-500/30' };
  if (id.includes('trigo')) return { icon: Triangle, color: 'text-indigo-500', bg: 'bg-indigo-50', groupBg: 'group-hover:bg-indigo-500', border: 'border-indigo-100', shadow: 'group-hover:shadow-indigo-500/30' };
  if (id.includes('circle')) return { icon: Circle, color: 'text-pink-500', bg: 'bg-pink-50', groupBg: 'group-hover:bg-pink-500', border: 'border-pink-100', shadow: 'group-hover:shadow-pink-500/30' };
  if (id.includes('work') || id.includes('energy')) return { icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50', groupBg: 'group-hover:bg-yellow-500', border: 'border-yellow-100', shadow: 'group-hover:shadow-yellow-500/30' };
  if (id.includes('rotation') || id.includes('circular')) return { icon: RefreshCw, color: 'text-orange-500', bg: 'bg-orange-50', groupBg: 'group-hover:bg-orange-500', border: 'border-orange-100', shadow: 'group-hover:shadow-orange-500/30' };
  if (id.includes('electro') || id.includes('current') || id.includes('magnet')) return { icon: Magnet, color: 'text-cyan-500', bg: 'bg-cyan-50', groupBg: 'group-hover:bg-cyan-500', border: 'border-cyan-100', shadow: 'group-hover:shadow-cyan-500/30' };
  if (id.includes('atomic') || id.includes('structure')) return { icon: Atom, color: 'text-purple-500', bg: 'bg-purple-50', groupBg: 'group-hover:bg-purple-500', border: 'border-purple-100', shadow: 'group-hover:shadow-purple-500/30' };
  if (id.includes('organic') || id.includes('carbon')) return { icon: Hexagon, color: 'text-emerald-500', bg: 'bg-emerald-50', groupBg: 'group-hover:bg-emerald-500', border: 'border-emerald-100', shadow: 'group-hover:shadow-emerald-500/30' };
  if (id.includes('wave')) return { icon: Waves, color: 'text-blue-500', bg: 'bg-blue-50', groupBg: 'group-hover:bg-blue-500', border: 'border-blue-100', shadow: 'group-hover:shadow-blue-500/30' };

  // Fallbacks by subject
  if (subjectId === 'physics') return { icon: Atom, color: 'text-sky-500', bg: 'bg-sky-50', groupBg: 'group-hover:bg-sky-500', border: 'border-sky-100', shadow: 'group-hover:shadow-sky-500/30' };
  if (subjectId === 'chemistry') return { icon: Beaker, color: 'text-orange-500', bg: 'bg-orange-50', groupBg: 'group-hover:bg-orange-500', border: 'border-orange-100', shadow: 'group-hover:shadow-orange-500/30' };
  if (subjectId === 'maths') return { icon: Calculator, color: 'text-rose-500', bg: 'bg-rose-50', groupBg: 'group-hover:bg-rose-500', border: 'border-rose-100', shadow: 'group-hover:shadow-rose-500/30' };
  if (subjectId === 'pyq') return { icon: Clock, color: 'text-purple-500', bg: 'bg-purple-50', groupBg: 'group-hover:bg-purple-500', border: 'border-purple-100', shadow: 'group-hover:shadow-purple-500/30' };
  
  return { icon: FolderOpen, color: 'text-emerald-600', bg: 'bg-emerald-50', groupBg: 'group-hover:bg-emerald-500', border: 'border-emerald-100', shadow: 'group-hover:shadow-emerald-500/30' };
}

export default function ChapterSelection() {
  const { subjectId } = useParams<{ subjectId: SubjectId }>();
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const allData = await getAllData();
      if (subjectId && allData[subjectId]) {
        setChapters(allData[subjectId]);
      }
      setLoading(false);
    }
    fetchData();
    const saved = localStorage.getItem('userStats');
    if (saved) setStats(JSON.parse(saved));
  }, [subjectId]);

  // Reset selected chapter when subject changes
  useEffect(() => {
    setSelectedChapterId(null);
    window.scrollTo(0, 0);
  }, [subjectId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedChapterId]);

  const rankNumber = calculatePredictedRank(stats);
  const rank = formatRank(rankNumber);

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
      <div className="w-16 h-16 border-8 border-emerald-100 border-t-emerald-500 rounded-full animate-spin" />
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/40 animate-pulse">Syncing Mission Data...</span>
    </div>
  );

  const selectedChapter = selectedChapterId ? chapters.find(c => c.id === selectedChapterId) : null;

  if (selectedChapter) {
    return (
      <div className="min-h-screen pb-20">
        {/* Header Section for Selected Chapter */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-12 h-[1px] bg-emerald-500/50" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-emerald-600/60">Subject / {subjectId?.toUpperCase()}</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl font-black heading-display leading-[0.85] text-emerald-950 uppercase tracking-tighter mb-6 relative">
              <span className="text-primary italic lowercase font-serif font-light tracking-normal block text-2xl sm:text-4xl mb-2">
                {subjectId === 'pyq' ? 'year' : 'chapter'}
              </span>
              {selectedChapter.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-6 py-3 bg-white border border-emerald-100 rounded-2xl shadow-sm flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="font-mono text-[10px] font-bold text-emerald-950 uppercase tracking-widest">{selectedChapter.sets.length} Modules Active</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setSelectedChapterId(null)}
            className="group flex items-center gap-4 px-8 py-4 bg-emerald-950 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-emerald-900 transition-all active:scale-95"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to {subjectId === 'pyq' ? 'Years' : 'Chapters'}
          </button>
        </div>

        {/* Papers / Sets List */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence>
            {selectedChapter.sets.map((set, idx) => (
              <motion.div
                key={set.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link 
                  to={`/quiz/${subjectId}/${selectedChapter.id}/${set.id}`}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-[2rem] border border-emerald-100/50 hover:bg-emerald-50 hover:border-emerald-500/30 shadow-sm hover:shadow-xl transition-all duration-300 relative group/set gap-4"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-inner group-hover/set:scale-110 group-hover/set:bg-white group-hover/set:text-emerald-600 transition-all">
                       <Play size={24} className="fill-current" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-2">{set.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                         <div className="flex items-center gap-2">
                            <Binary size={14} className="text-emerald-500/50" />
                            <span className="font-mono text-[10px] font-bold text-emerald-900/60 uppercase tracking-widest">{set.itemCount} Questions</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <Clock size={14} className="text-emerald-500/50" />
                            <span className="font-mono text-[10px] font-bold text-emerald-900/60 uppercase tracking-widest">{subjectId === 'pyq' ? '180m' : `${set.itemCount * 1.5}m`} Est.</span>
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-4 mt-2 sm:mt-0">
                    {set.difficulty && (
                      <div className={cn(
                        "px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border",
                        set.difficulty === 'pyq' ? "bg-purple-50 text-purple-700 border-purple-200" :
                        set.difficulty === 'hard' ? "bg-red-50 text-red-700 border-red-200" :
                        set.difficulty === 'medium' ? "bg-amber-50 text-amber-700 border-amber-200" :
                        "bg-emerald-50 text-emerald-700 border-emerald-200"
                      )}>
                        {set.difficulty === 'pyq' ? 'PYQ' : set.difficulty === 'hard' ? 'Advanced' : set.difficulty === 'medium' ? 'Active' : 'Standard'}
                      </div>
                    )}
                    <div className="w-12 h-12 rounded-full bg-emerald-950 text-white flex items-center justify-center group-hover/set:-rotate-45 sm:scale-0 group-hover/set:scale-100 transition-all duration-300">
                       <ArrowRight size={20} className="group-hover/set:rotate-45 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    );
  }

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
            <span className="text-primary italic lowercase font-serif font-light tracking-normal block text-2xl sm:text-4xl md:text-5xl mb-2">
              {subjectId === 'pyq' ? 'history' : 'curriculum'}
            </span>
            {subjectId === 'physics' ? 'Mechanics & Beyond' : 
             subjectId === 'chemistry' ? 'Elemental Bonds' : 
             subjectId === 'maths' ? 'Logical Structures' : 
             subjectId === 'pyq' ? 'Previous Year Questions' : 'Simulations'}
          </h1>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="px-6 py-3 bg-white border border-emerald-100 rounded-2xl shadow-sm flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="font-mono text-[10px] font-bold text-emerald-950 uppercase tracking-widest">{chapters.length} {subjectId === 'pyq' ? 'Years' : 'Chapters'} Active</span>
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
          className="group flex items-center gap-4 px-8 py-4 bg-emerald-950 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-emerald-900 transition-all active:scale-95 shrink-0"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retreat
        </Link>
      </div>

      {/* Chapters / Years Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
        <AnimatePresence>
          {chapters.map((chapter, idx) => {
            const design = getChapterDesign(chapter.id, subjectId || '');
            const Icon = design.icon;
            
            return (
            <motion.div 
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedChapterId(chapter.id)}
            >
              <div className="group relative bg-white border border-emerald-900/10 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col h-full hover:-translate-y-2">
                {/* Technical Accent Background */}
                <div className={cn("absolute -top-4 -right-4 p-8 opacity-[0.02] group-hover:opacity-10 transition-opacity pointer-events-none", design.color)}>
                   <Icon size={120} />
                </div>

                <div className="flex items-center justify-between mb-8 z-10 relative">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center group-hover:text-white transition-colors shadow-inner", design.bg, design.color, design.groupBg, design.border, design.shadow)}>
                     <Icon size={24} />
                  </div>
                  <div className="flex flex-col items-end">
                     <span className="font-mono text-[8px] font-bold text-emerald-800/30 uppercase tracking-widest">Integrity</span>
                     <span className="text-lg font-black text-emerald-900/40 heading-display">{rank}</span>
                  </div>
                </div>

                <div className="mt-auto z-10 relative">
                  <h3 className="text-2xl font-black heading-display tracking-tight text-emerald-950 uppercase mb-2 group-hover:text-emerald-700 transition-colors">{chapter.title}</h3>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-emerald-50">
                    <span className="font-mono text-[10px] font-bold text-emerald-800/60 uppercase tracking-widest flex items-center gap-2">
                      <Layers size={14} className="text-emerald-500/50" />
                      {chapter.sets.length} Modules
                    </span>
                  </div>
                </div>

                {/* Floating action button */}
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-emerald-950 text-white rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl shadow-emerald-950/20 z-10">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          )})}
        </AnimatePresence>
      </div>
    </div>
  );
}
