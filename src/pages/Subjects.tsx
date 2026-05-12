import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Zap, FlaskConical, Binary, Atom, Layers, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SubjectId } from '../types';
import { cn } from '../lib/utils';

export default function Subjects() {
  const subjects = [
    { 
      id: 'physics' as SubjectId, 
      title: 'Physics', 
      desc: 'Master the laws of nature from Mechanics to Modern Physics.',
      color: 'from-emerald-600/30 to-emerald-900/10', 
      img: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=600',
      icon: Atom,
      accent: 'text-emerald-400',
      topics: ['Mechanics', 'Waves', 'Thermodynamics', 'Electromagnetism', 'Modern Physics'],
      stats: '42 Modules'
    },
    { 
      id: 'chemistry' as SubjectId, 
      title: 'Chemistry', 
      desc: 'Understand atoms, molecules and complex reactions.',
      color: 'from-[#e64a19]/30 to-[#e64a19]/10', 
      img: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=600',
      icon: FlaskConical,
      accent: 'text-orange-400',
      topics: ['Organic', 'Inorganic', 'Physical Chemistry', 'IUPAC Nomenclature'],
      stats: '38 Modules'
    },
    { 
      id: 'maths' as SubjectId, 
      title: 'Mathematics', 
      desc: 'Build logical reasoning and problem-solving speed.',
      color: 'from-[#ef5350]/30 to-[#ef5350]/10', 
      img: 'https://images.unsplash.com/photo-1509228468518-180dd482195e?auto=format&fit=crop&q=80&w=600',
      icon: Binary,
      accent: 'text-red-400',
      topics: ['Algebra', 'Calculus', 'Trigonometry', 'Coordinate Geometry', 'Vectors'],
      stats: '56 Modules'
    }
  ];

  return (
    <div className="space-y-12 pb-20">
      <div className="flex justify-start">
        <Link 
          to="/" 
          className="group flex items-center gap-3 px-6 py-3 bg-white text-emerald-950 font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl hover:bg-emerald-50 transition-all border-2 border-emerald-50"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
           <div className="w-8 h-[2px] bg-primary" />
           <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-700/50">Curriculum v4.1</span>
        </div>
        <h1 className="text-6xl font-black heading-display leading-tight mb-4 text-emerald-950 uppercase tracking-tight">The Mission <br /> <span className="text-primary italic">Catalog</span></h1>
        <p className="text-emerald-800/70 max-w-xl text-lg font-medium">Select a core subject to explore advanced modules and competitive practice sets tailored for JEE excellence.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {subjects.map((sub, idx) => (
          <Link key={sub.id} to={`/subjects/${sub.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative h-[600px] bg-gradient-to-br rounded-[3rem] border border-white/5 p-10 flex flex-col transition-all duration-500 hover:border-primary/40",
                sub.color
              )}
            >
              <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                 <img 
                    src={sub.img} 
                    alt={sub.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
              </div>

              <div className="relative h-full flex flex-col">
                <div className={cn("w-16 h-16 rounded-[1.5rem] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 shadow-2xl", sub.accent)}>
                    <sub.icon size={32} />
                </div>

                <div className="flex-1">
                  <h3 className="text-5xl font-black heading-display mb-6 tracking-tight text-white">{sub.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {sub.topics.map(topic => (
                      <span key={topic} className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase font-black tracking-widest text-white/70 border border-white/10">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4 mb-20 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                     <p className="text-emerald-50 font-medium leading-relaxed">{sub.desc}</p>
                     <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                           <Layers size={14} className="text-primary" />
                           <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-100/60">{sub.stats}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <Target size={14} className="text-emerald-400" />
                           <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-100/60">Avg. 72% Accuracy</span>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-10 border-t border-white/10 mt-auto">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-100/60 group-hover:text-white transition-colors">Start Field Mission</span>
                    <div className={cn("w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300", sub.accent)}>
                    <ArrowRight size={24} />
                    </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
