import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Atom,
  Search,
  RotateCw,
  Eye,
  EyeOff,
  Layers,
  Sparkles,
  Compass,
  Zap,
  CheckCircle2,
  ChevronLeft,
  Info
} from 'lucide-react';
import { MOLECULES_DATABASE, generateDynamicMolecule, MoleculeData } from '../data/moleculesData';
import Molecular3DCanvas from '../components/Molecular3DCanvas';
import { Link } from 'react-router-dom';

export default function MolecularVisualizer() {
  const [selectedMoleculeId, setSelectedMoleculeId] = useState<string>('co2');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [customMolecule, setCustomMolecule] = useState<MoleculeData | null>(null);

  const [toggles, setToggles] = useState({
    showLonePairs: true,
    showBondAngles: true,
    showElectronGeometry: true,
    showAtomLabels: true,
    autoRotate: true,
  });

  const categories = ['All', 'sp', 'sp2', 'sp3', 'sp3d', 'sp3d2', 'sp3d3'];

  const filteredMolecules = useMemo(() => {
    return MOLECULES_DATABASE.filter((m) => {
      const matchCategory = activeCategory === 'All' || m.category === activeCategory;
      const matchSearch =
        m.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.vseprNotation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const currentMolecule: MoleculeData = useMemo(() => {
    if (customMolecule) return customMolecule;
    const found = MOLECULES_DATABASE.find((m) => m.id === selectedMoleculeId);
    return found || MOLECULES_DATABASE[0];
  }, [selectedMoleculeId, customMolecule]);

  const handleGenerateCustom = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    const generated = generateDynamicMolecule(searchQuery);
    setCustomMolecule(generated);
    setSelectedMoleculeId(generated.id);
  };

  const handleSelectPreset = (m: MoleculeData) => {
    setCustomMolecule(null);
    setSelectedMoleculeId(m.id);
  };

  return (
    <div className="h-[100dvh] w-full bg-gray-950 text-slate-100 flex flex-col overflow-hidden">
      {/* Top Header */}
      <header className="h-14 md:h-16 shrink-0 border-b border-emerald-900/30 px-3 md:px-6 flex items-center justify-between bg-gray-950/90 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            to="/study"
            className="inline-flex items-center justify-center w-8 h-8 md:w-auto md:px-3 md:py-1.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800 transition-colors"
            title="Back to Learn Archive"
          >
            <ChevronLeft size={16} />
            <span className="hidden md:inline text-xs font-bold ml-1">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30 hidden sm:flex">
              <Atom size={18} />
            </div>
            <div>
              <h1 className="text-sm md:text-lg font-black tracking-tight text-white uppercase italic leading-none">
                Molecular <span className="text-emerald-400 not-italic">Visualizer</span>
              </h1>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest hidden sm:block mt-0.5">
                3D VSEPR & Hybridisation Engine
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <form onSubmit={handleGenerateCustom} className="flex items-center gap-2 w-full max-w-[200px] md:max-w-xs">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Formula (e.g. SF6)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-2 py-1.5 md:py-2 text-[10px] md:text-xs font-bold text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors shadow-inner"
            />
          </div>
          <button
            type="submit"
            className="px-2.5 py-1.5 md:px-3 md:py-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-black text-[10px] md:text-xs uppercase rounded-lg transition-all"
          >
            Draw
          </button>
        </form>
      </header>

      {/* Main Split View */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* Left: 3D Canvas Area */}
        <div className="flex-1 relative h-[50vh] lg:h-full bg-gray-950">
          <Molecular3DCanvas molecule={currentMolecule} toggles={toggles} />

          {/* Molecule Name Overlay */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 shadow-lg">
              <span className="text-sm md:text-base font-black uppercase italic tracking-widest text-emerald-400">
                {currentMolecule.formula}
              </span>
              <span className="text-[10px] md:text-xs font-bold text-slate-300 border-l border-slate-700 pl-2">
                {currentMolecule.name}
              </span>
            </div>
          </div>

          {/* Preset Category Filters */}
          <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2 max-w-[200px] sm:max-w-none">
             <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-xl border border-white/10 overflow-x-auto max-w-full hide-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                      activeCategory === cat
                        ? 'bg-emerald-500 text-gray-950 shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cat === 'All' ? 'All' : cat}
                  </button>
                ))}
             </div>
          </div>

          {/* Info Hint */}
          <div className="absolute bottom-16 sm:bottom-20 left-4 z-10 pointer-events-none hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 text-[9px] font-bold text-slate-400">
            <Info size={10} className="text-emerald-400" />
            Drag to rotate • Scroll to zoom
          </div>

          {/* Floating Controls Bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/70 backdrop-blur-xl px-2 py-1.5 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-1">
            <button
              onClick={() => setToggles((t) => ({ ...t, showLonePairs: !t.showLonePairs }))}
              className={`p-2 rounded-xl text-xs transition-all flex items-center justify-center w-10 h-10 sm:w-auto sm:px-3 sm:gap-1.5 ${
                toggles.showLonePairs ? 'bg-purple-600 text-white' : 'hover:bg-white/10 text-slate-400'
              }`}
              title="Lone Pairs"
            >
              <Sparkles size={16} />
              <span className="hidden sm:inline text-[10px] font-bold uppercase">Lone Pairs</span>
            </button>
            <button
              onClick={() => setToggles((t) => ({ ...t, showBondAngles: !t.showBondAngles }))}
              className={`p-2 rounded-xl text-xs transition-all flex items-center justify-center w-10 h-10 sm:w-auto sm:px-3 sm:gap-1.5 ${
                toggles.showBondAngles ? 'bg-amber-500 text-slate-950' : 'hover:bg-white/10 text-slate-400'
              }`}
              title="Bond Angles"
            >
              <Compass size={16} />
              <span className="hidden sm:inline text-[10px] font-bold uppercase">Angles</span>
            </button>
            <button
              onClick={() => setToggles((t) => ({ ...t, showElectronGeometry: !t.showElectronGeometry }))}
              className={`p-2 rounded-xl text-xs transition-all flex items-center justify-center w-10 h-10 sm:w-auto sm:px-3 sm:gap-1.5 ${
                toggles.showElectronGeometry ? 'bg-sky-500 text-slate-950' : 'hover:bg-white/10 text-slate-400'
              }`}
              title="Geometry Cage"
            >
              <Layers size={16} />
              <span className="hidden sm:inline text-[10px] font-bold uppercase">Cage</span>
            </button>
            <button
              onClick={() => setToggles((t) => ({ ...t, showAtomLabels: !t.showAtomLabels }))}
              className={`p-2 rounded-xl text-xs transition-all flex items-center justify-center w-10 h-10 sm:w-auto sm:px-3 sm:gap-1.5 ${
                toggles.showAtomLabels ? 'bg-emerald-500 text-slate-950' : 'hover:bg-white/10 text-slate-400'
              }`}
              title="Labels"
            >
              {toggles.showAtomLabels ? <Eye size={16} /> : <EyeOff size={16} />}
              <span className="hidden sm:inline text-[10px] font-bold uppercase">Labels</span>
            </button>
            <div className="w-px h-6 bg-white/10 mx-1" />
            <button
              onClick={() => setToggles((t) => ({ ...t, autoRotate: !t.autoRotate }))}
              className={`p-2 rounded-xl transition-all flex items-center justify-center w-10 h-10 ${
                toggles.autoRotate ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40' : 'hover:bg-white/10 text-slate-400'
              }`}
              title="Auto-Rotate"
            >
              <RotateCw size={16} className={toggles.autoRotate ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {/* Right: Info Panel & Presets */}
        <div className="h-[50vh] lg:h-full w-full lg:w-[400px] shrink-0 bg-slate-950/80 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-emerald-900/30 flex flex-col z-20">
          
          {/* Top of panel: Presets Scroll */}
          <div className="p-4 border-b border-white/5 bg-black/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Preset Library</span>
              <span className="text-[9px] font-bold text-slate-500">{filteredMolecules.length} found</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {filteredMolecules.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleSelectPreset(m)}
                  className={`px-3 py-1.5 rounded-lg border text-left transition-all shrink-0 flex items-center gap-2 ${
                    currentMolecule.id === m.id
                      ? 'bg-emerald-500/10 border-emerald-500/50 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-xs font-black uppercase">{m.formula}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 hide-scrollbar pb-24 lg:pb-4">
            
            <div className="space-y-1">
              <h2 className="text-xl font-black text-white uppercase italic tracking-tight">
                {currentMolecule.name}
              </h2>
              <div className="inline-block px-2.5 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                VSEPR: {currentMolecule.vseprNotation}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Hybridisation</p>
                <p className="text-base font-black text-emerald-400">{currentMolecule.hybridisation}</p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Steric Number</p>
                <p className="text-base font-black text-purple-400">{currentMolecule.stericNumber}</p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Bond Pairs (BP)</p>
                <p className="text-sm font-black text-sky-400">{currentMolecule.bondPairsCount}</p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Lone Pairs (LP)</p>
                <p className="text-sm font-black text-amber-400">{currentMolecule.lonePairsCount}</p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 col-span-2 flex justify-between items-center">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Electron Geometry</p>
                  <p className="text-sm font-black text-slate-200">{currentMolecule.electronGeometry}</p>
                </div>
                <Layers size={16} className="text-slate-600" />
              </div>
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 col-span-2 flex justify-between items-center">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Molecular Shape</p>
                  <p className="text-sm font-black text-emerald-400">{currentMolecule.molecularShape}</p>
                </div>
                <Atom size={16} className="text-emerald-700" />
              </div>
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 col-span-2">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Bond Angle</p>
                <p className="text-sm font-black text-amber-300">{currentMolecule.bondAngle}</p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 col-span-2 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Polarity</p>
                  <p className={`text-sm font-black ${currentMolecule.polarity === 'Polar' ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {currentMolecule.polarity}
                  </p>
                </div>
                <p className="text-[10px] font-bold text-slate-400">{currentMolecule.dipoleMoment}</p>
              </div>
            </div>

            <p className="text-xs font-medium text-slate-400 leading-relaxed pt-2 border-t border-white/5">
              {currentMolecule.description}
            </p>

            <div className="bg-emerald-950/30 p-4 rounded-2xl border border-emerald-900/40 space-y-3">
              <h3 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <Zap size={14} /> JEE Mastery Notes
              </h3>
              <ul className="space-y-2">
                {currentMolecule.jeeNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-300 font-medium leading-relaxed">
                    <CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
