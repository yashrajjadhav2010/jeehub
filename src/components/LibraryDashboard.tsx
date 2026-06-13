import React from 'react';
import { motion } from 'motion/react';
import { Calculator, Atom, Beaker, Zap, Library, ScrollText, Network } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';

const books = [
  {
    id: 'physics',
    title: 'Physics',
    category: 'Subject Material',
    type: 'All Documents',
    icon: Atom,
    color: 'bg-[#fb8b66]',
    lightBg: 'bg-[#ffebe3]',
    bookmark: 'bg-[#eeb136]',
    tabs: [],
    latch: true,
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    category: 'Subject Material',
    type: 'All Documents',
    icon: Beaker,
    color: 'bg-[#6cbeb5]',
    lightBg: 'bg-[#e1f5f2]',
    bookmark: 'bg-[#e86665]',
    tabs: ['bg-[#f5c64b]', 'bg-[#e86665]', 'bg-[#9071df]'],
    latch: false,
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    category: 'Subject Material',
    type: 'All Documents',
    icon: Calculator,
    color: 'bg-[#8165b4]',
    lightBg: 'bg-[#eee9f8]',
    bookmark: 'bg-[#bc90e9]',
    tabs: ['bg-[#f5c64b]', 'bg-[#f5c64b]'],
    latch: false,
  },
  {
    id: 'information',
    title: 'Information',
    category: 'Bulletins',
    type: 'Updates',
    icon: Zap,
    color: 'bg-[#f6a0b9]',
    lightBg: 'bg-[#fceef2]',
    bookmark: 'bg-[#f5c64b]',
    tabs: ['bg-[#6cbeb5]', 'bg-[#eeb136]'],
    latch: false,
  }
];

export default function LibraryDashboard() {
  const navigate = useNavigate();

  return (
    <div className="w-full py-10 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 px-4 md:px-0 gap-6">
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-3">
              <Library size={14} className="text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary border-transparent">Study Archive</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-black heading-display uppercase tracking-tight text-emerald-950 italic">
              Digital <span className="text-primary not-italic">Bookshelf</span>
           </h2>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
           <Link to="/study" className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-700 hover:bg-primary hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors border border-emerald-100">
              View Full Library
           </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 md:px-0">
        {books.map((book, idx) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center gap-4 group cursor-pointer"
            onClick={() => navigate('/study', { state: { subject: book.title } })}
          >
            <div className={cn("relative w-full aspect-square rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-6 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-4 border-[3px] sm:border-4 box-border border-transparent shadow-md hover:shadow-2xl hover:shadow-emerald-900/10", book.lightBg)}>
               {/* Bookshelf Base (shadow effect for visual anchoring) */}
               <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-emerald-900/5 blur-md rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               {/* The Book Container */}
               <div className="relative w-[75%] sm:w-[80%] lg:w-[70%] h-[85%] lg:h-[80%] rounded-r-2xl sm:rounded-r-3xl rounded-l-md sm:rounded-l-xl transition-transform duration-500 group-hover:scale-105" style={{ perspective: '1000px' }}>
                  {/* Bookmark */}
                  {book.bookmark && (
                    <div className={cn("absolute -bottom-4 sm:-bottom-5 right-4 sm:right-6 w-5 sm:w-6 h-10 sm:h-12 z-0 shadow-sm transition-all duration-500 group-hover:translate-y-2", book.bookmark)} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)' }} />
                  )}

                  {/* Tabs */}
                  {book.tabs && book.tabs.length > 0 && (
                     <div className="absolute right-[-4px] sm:right-[-6px] top-[15%] bottom-[15%] flex flex-col justify-evenly gap-1 sm:gap-2 z-0">
                        {book.tabs.map((tabBg, i) => (
                           <div key={i} className={cn("w-2 sm:w-3 h-5 sm:h-6 rounded-r-sm shadow-sm transition-transform duration-300 group-hover:translate-x-2", tabBg)} style={{ transitionDelay: `${i * 50}ms` }} />
                        ))}
                     </div>
                  )}

                  {/* Pages (white background slightly offset) */}
                  <div className="absolute inset-y-1 sm:inset-y-2 left-2 right-[-6px] sm:right-[-10px] bg-white rounded-r-2xl sm:rounded-r-3xl rounded-l-md sm:rounded-l-xl shadow-md border-y border-r border-[#e9ecef]">
                     <div className="absolute top-1/4 bottom-1/4 right-1 w-[2px] bg-gray-100 rounded-full" />
                     <div className="absolute top-1/3 bottom-1/3 right-2 w-[2px] bg-gray-100 rounded-full" />
                     
                     {/* Inner page content hints (shows when cover opens) */}
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
                      book.color,
                      "group-hover:[transform:rotateY(-35deg)]"
                    )}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                      <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 bg-black/10 rounded-l-md sm:rounded-l-xl border-r border-black/10 z-0" style={{ transform: 'translateZ(0.1px)' }} />
                      <div className="absolute left-2 sm:left-3 top-2 sm:top-3 bottom-2 sm:bottom-3 w-0 border-l-[2px] sm:border-l-[3px] border-dotted border-white/30 z-10" style={{ transform: 'translateZ(0.1px)' }} />
                      
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-r-xl sm:rounded-r-2xl rounded-l-md sm:rounded-l-xl overflow-hidden" style={{ transform: 'translateZ(0.1px)' }} />
                      
                      <div className="z-20 transform transition-transform duration-500 group-hover:scale-105 relative -left-1 sm:-left-1.5 flex flex-col items-center gap-2" style={{ transform: 'translateZ(1px)' }}>
                         <book.icon size={28} className="text-white drop-shadow-md sm:scale-125 lg:scale-150" />
                      </div>

                      {/* Latch */}
                      {book.latch && (
                         <div className="absolute right-[-10px] sm:right-[-14px] top-1/2 -translate-y-1/2 w-8 sm:w-12 h-10 sm:h-14 bg-[#7d5641] rounded-r-lg sm:rounded-r-xl z-20 flex items-center justify-end pr-1 sm:pr-2 shadow-md transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-left group-hover:[transform:rotateY(-140deg)]" style={{ transform: 'translateZ(0.5px)' }}>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#e3b587] shadow-sm ml-auto relative right-1" />
                         </div>
                      )}
                  </div>
               </div>
            </div>
            
            <div className="text-center space-y-1 w-full flex-1">
              <h3 className="text-[11px] sm:text-sm font-black uppercase tracking-tight text-emerald-950 transition-colors group-hover:text-primary leading-tight sm:leading-normal">{book.title}</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                 <p className="text-[9px] sm:text-[10px] font-bold text-emerald-900/40 uppercase tracking-widest">{book.category}</p>
                 <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-emerald-900/20" />
                 <p className="text-[9px] sm:text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{book.type}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center sm:hidden px-4">
        <Link to="/study" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-700 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors border border-emerald-100 w-full justify-center">
           View Full Library
        </Link>
      </div>
    </div>
  );
}
