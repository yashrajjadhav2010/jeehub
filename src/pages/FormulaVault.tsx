import React, { useState } from 'react';
import { BookOpen, Search, ArrowLeft, Filter, Book, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlockMath } from 'react-katex';
import { cn } from '../lib/utils';
import 'katex/dist/katex.min.css';

const FORMULAS = [
  { id: '1', title: 'Quadratic Formula', chapter: 'Algebra', subject: 'Mathematics', math: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}' },
  { id: '2', title: 'Work-Energy Theorem', chapter: 'Work, Power & Energy', subject: 'Physics', math: 'W_{net} = \\Delta K' },
  { id: '3', title: 'Ideal Gas Law', chapter: 'States of Matter', subject: 'Chemistry', math: 'PV = nRT' },
  { id: '4', title: 'Centripetal Force', chapter: 'Circular Motion', subject: 'Physics', math: 'F_c = \\frac{mv^2}{r}' },
  { id: '5', title: 'De Broglie Wavelength', chapter: 'Atomic Structure', subject: 'Chemistry', math: '\\lambda = \\frac{h}{p} = \\frac{h}{mv}' },
  { id: '6', title: 'Distance between two points', chapter: 'Coordinate Geometry', subject: 'Mathematics', math: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}' },
];

export default function FormulaVault() {
  const [search, setSearch] = useState('');
  const [activeSubject, setActiveSubject] = useState('All');

  const filtered = FORMULAS.filter(f => {
    if (activeSubject !== 'All' && f.subject !== activeSubject) return false;
    if (search && !f.title.toLowerCase().includes(search.toLowerCase()) && !f.chapter.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link to="/study" className="p-2 hover:bg-emerald-50 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-emerald-700" />
          </Link>
          <div>
            <h1 className="text-3xl font-black text-emerald-950 uppercase tracking-tight flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-emerald-600" />
              Formula Vault
            </h1>
            <p className="text-sm font-medium text-emerald-600/60 uppercase tracking-widest mt-1">
              Your ultimate collection of JEE formulas
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-emerald-900/40" />
          </div>
          <input
            type="text"
            className="w-full pl-11 pr-4 py-3 bg-white border border-emerald-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm font-medium placeholder:text-emerald-900/30 outline-none"
            placeholder="Search formulas or chapters..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto pb-4 hide-scrollbar">
        {['All', 'Physics', 'Chemistry', 'Mathematics'].map(sub => (
          <button
            key={sub}
            onClick={() => setActiveSubject(sub)}
            className={cn(
              "px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap",
              activeSubject === sub 
                ? "bg-emerald-900 text-white shadow-md"
                : "bg-white text-emerald-900/60 hover:bg-emerald-50 border border-emerald-100"
            )}
          >
            {sub}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(f => (
          <div key={f.id} className="bg-white border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg text-emerald-950">{f.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600/60 mt-1">{f.chapter}</p>
              </div>
              <span className={cn(
                "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest",
                f.subject === 'Physics' ? "bg-amber-100 text-amber-700" :
                f.subject === 'Chemistry' ? "bg-blue-100 text-blue-700" :
                "bg-rose-100 text-rose-700"
              )}>
                {f.subject}
              </span>
            </div>
            
            <div className="mt-auto pt-6 flex items-center justify-center min-h-[80px] bg-emerald-50/50 rounded-xl px-4 overflow-x-auto">
              <BlockMath math={f.math} />
            </div>
          </div>
        ))}
        
        {filtered.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <Book className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
            <p className="text-emerald-900/50 font-medium">No formulas found for your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
