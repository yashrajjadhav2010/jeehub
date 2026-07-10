import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, ArrowLeft, Brain, Zap, ChevronLeft, ChevronRight, Share2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const FLASHCARDS = [
  { id: '1', front: 'What is the work done by a conservative force along a closed path?', back: 'Zero', subject: 'Physics' },
  { id: '2', front: 'First Law of Thermodynamics (Formula)', back: '\\Delta Q = \\Delta U + \\Delta W', isMath: true, subject: 'Physics' },
  { id: '3', front: 'Oxidation state of Cr in K2Cr2O7?', back: '+6', subject: 'Chemistry' },
  { id: '4', front: 'Condition for two lines with slopes m1 and m2 to be perpendicular?', back: 'm1 \\times m2 = -1', isMath: true, subject: 'Mathematics' },
  { id: '5', front: 'De Broglie Wavelength formula', back: '\\lambda = \\frac{h}{p} = \\frac{h}{mv}', isMath: true, subject: 'Physics' },
  { id: '6', front: 'Hybridization of Carbon in Benzene?', back: 'sp^2', subject: 'Chemistry' },
];

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  const card = FLASHCARDS[currentIndex];

  const nextCard = () => {
    setDirection(1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % FLASHCARDS.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/study" className="p-2 hover:bg-emerald-50 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-emerald-700" />
          </Link>
          <div>
            <h1 className="text-2xl font-black text-emerald-950 uppercase tracking-tight flex items-center gap-2">
              <Brain className="w-6 h-6 text-emerald-600" />
              Active Recall Flashcards
            </h1>
            <p className="text-sm font-medium text-emerald-600/60 uppercase tracking-widest mt-1">
              Master concepts through spaced repetition
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] w-full perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex + (isFlipped ? '-flipped' : '')}
            initial={{ opacity: 0, x: direction * 50, rotateY: isFlipped ? -90 : 90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -direction * 50, rotateY: isFlipped ? 90 : -90 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className={cn(
              "w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl border-2 transition-colors",
              !isFlipped ? "bg-white border-emerald-100" : "bg-emerald-900 border-emerald-800 text-white"
            )}>
              <span className={cn(
                "absolute top-6 left-6 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full",
                !isFlipped ? "bg-emerald-50 text-emerald-600" : "bg-emerald-800 text-emerald-300"
              )}>
                {card.subject}
              </span>
              
              <div className="text-2xl md:text-3xl font-medium tracking-tight">
                {isFlipped ? (
                  card.isMath ? <BlockMath math={card.back} /> : card.back
                ) : (
                  card.front
                )}
              </div>

              <div className="absolute bottom-6 text-sm font-medium opacity-50 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Tap to flip
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between px-4">
        <button
          onClick={prevCard}
          className="p-4 rounded-full bg-white shadow-sm border border-emerald-100 text-emerald-600 hover:bg-emerald-50 hover:scale-105 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="text-sm font-bold tracking-widest uppercase text-emerald-900/40">
          Card {currentIndex + 1} of {FLASHCARDS.length}
        </div>
        <button
          onClick={nextCard}
          className="p-4 rounded-full bg-emerald-600 shadow-sm shadow-emerald-200 text-white hover:bg-emerald-700 hover:scale-105 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
