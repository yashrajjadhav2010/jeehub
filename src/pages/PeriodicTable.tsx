import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { elementsData } from '../data/elementsData';
import { cn } from '../lib/utils';

const categoryColors: Record<string, string> = {
    'nonmetal': 'text-green-400 border-green-500/40 bg-green-500/10 hover:bg-green-500/20',
    'noble-gas': 'text-purple-400 border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20',
    'alkali-metal': 'text-red-400 border-red-500/40 bg-red-500/10 hover:bg-red-500/20',
    'alkaline-earth': 'text-orange-400 border-orange-500/40 bg-orange-500/10 hover:bg-orange-500/20',
    'metalloid': 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20',
    'halogen': 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20',
    'transition': 'text-blue-400 border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20',
    'post-transition': 'text-blue-300 border-blue-400/40 bg-blue-400/10 hover:bg-blue-400/20',
    'lanthanide': 'text-pink-400 border-pink-500/40 bg-pink-500/10 hover:bg-pink-500/20',
    'actinide': 'text-fuchsia-400 border-fuchsia-500/40 bg-fuchsia-500/10 hover:bg-fuchsia-500/20'
};

const hexMap: Record<string, string> = {
    'green':'#22c55e','purple':'#a855f7','red':'#ef4444','orange':'#f97316',
    'emerald':'#10b981','cyan':'#06b6d4','blue':'#3b82f6','pink':'#db2777',
    'fuchsia':'#c026d3','gray':'#888'
};

const phaseIcons: Record<string, string> = { 's': 'Cube 🧊', 'l': 'Drop 💧', 'g': 'Gas ☁️' };

export default function PeriodicTable() {
    const [searchText, setSearchText] = useState('');
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [isHeatmap, setIsHeatmap] = useState(false);
    const [isQuiz, setIsQuiz] = useState(false);
    
    const [quizStarted, setQuizStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [quizTarget, setQuizTarget] = useState<any>(null);
    const [correctEl, setCorrectEl] = useState<any>(null);
    const [wrongEl, setWrongEl] = useState<any>(null);
    const [revealEl, setRevealEl] = useState<any>(null);
    const [isResolving, setIsResolving] = useState(false);

    const [selectedElement, setSelectedElement] = useState<any>(null);
    
    const quizPoolRef = useRef<any[]>([]);

    useEffect(() => {
        if (quizStarted) {
            quizPoolRef.current = elementsData.filter(e => typeof e.num === 'number').sort(() => Math.random() - 0.5);
            pickQuizElement();
        }
    }, [quizStarted]);

    const pickQuizElement = () => {
        if (quizPoolRef.current.length === 0) {
            quizPoolRef.current = elementsData.filter(e => typeof e.num === 'number').sort(() => Math.random() - 0.5);
        }
        setQuizTarget(quizPoolRef.current.pop());
    };

    const handleQuizClick = (el: any) => {
        if (isResolving || !quizTarget) return;
        setIsResolving(true);

        if (el.num === quizTarget.num) {
            setCorrectEl(el.num);
            setScore(s => s + 10);
            setTimeout(() => {
                setCorrectEl(null);
                setIsResolving(false);
                pickQuizElement();
            }, 600);
        } else {
            setWrongEl(el.num);
            setRevealEl(quizTarget.num);
            setScore(s => Math.max(0, s - 5));
            setTimeout(() => {
                setWrongEl(null);
                setRevealEl(null);
                setIsResolving(false);
                pickQuizElement();
            }, 1500);
        }
    };

    const getHeatmapClass = (en: number) => {
        if (!en) return 'bg-gray-800 border-gray-700 text-gray-500';
        const ratio = Math.min(en / 4.0, 1);
        const r = Math.floor(ratio * 255);
        const b = Math.floor((1 - ratio) * 255);
        return `text-white`;
    };

    const getHeatmapStyle = (en: number) => {
        if (!en) return {};
        const ratio = Math.min(en / 4.0, 1);
        const r = Math.floor(ratio * 255);
        const b = Math.floor((1 - ratio) * 255);
        return { backgroundColor: `rgba(${r},40,${b},0.3)`, borderColor: `rgba(${r},40,${b},0.6)` };
    };

    const AtomStructure = ({ el }: { el: any }) => {
        const colorClass = isHeatmap ? '#3b82f6' : (categoryColors[el.cat] ? categoryColors[el.cat].match(/text-([a-z]+)-400/)?.[1] : 'gray');
        const svgColor = hexMap[colorClass as string] || '#3b82f6';
        const center = 150;
        
        const particleCount = Math.min(el.s.reduce((a: number,b: number)=>a+b, 0), 15);
        const maxShells = el.s.length;
        const shellSpacing = 130 / maxShells; 
        
        return (
            <svg viewBox="0 0 300 300" className="w-full h-auto max-h-56 drop-shadow-2xl">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
                <g style={{ transformOrigin: '150px 150px' }} className="animate-[pulse-nucleus_2s_infinite_alternate_ease-in-out]">
                    {Array.from({length: particleCount}).map((_, p) => {
                        const angle = Math.random() * Math.PI * 2;
                        const dist = Math.random() * 8;
                        return (
                            <circle key={p} cx={center + Math.cos(angle)*dist} cy={center + Math.sin(angle)*dist} r={4} fill={svgColor} opacity={0.8} filter="url(#glow)" />
                        );
                    })}
                </g>
                {el.s.map((electronCount: number, i: number) => {
                    const radius = 25 + (i * shellSpacing);
                    const speedMultiplier = 1 + (maxShells - i) * 0.5;
                    const duration = (8 / speedMultiplier).toFixed(2);
                    const direction = i % 2 === 0 ? 'rotate-right' : 'rotate-left';
                    return (
                        <g key={`shell-${i}`}>
                            <circle cx={center} cy={center} r={radius} fill="none" stroke={svgColor} strokeWidth="1" strokeDasharray="2 6" strokeOpacity="0.2" />
                            <g style={{ animation: `${direction} ${duration}s linear infinite`, transformOrigin: '150px 150px' }}>
                                {Array.from({length: electronCount}).map((_, j) => {
                                    const initialAngle = (j / electronCount) * 360;
                                    return (
                                        <g key={`electron-${i}-${j}`} transform={`rotate(${initialAngle} 150 150)`}>
                                            <circle cx={center + radius} cy={center} r={3} fill="#ffffff" stroke={svgColor} strokeWidth="1.5" filter="url(#glow)" />
                                        </g>
                                    )
                                })}
                            </g>
                        </g>
                    )
                })}
            </svg>
        );
    };

    return (
        <div className="bg-[#0a0a0a] text-white min-h-screen relative selection:bg-blue-500/30 overflow-x-hidden font-sans">
            <style>{`
                .periodic-grid { display: grid; grid-template-columns: repeat(18, minmax(45px, 1fr)); grid-template-rows: repeat(10, minmax(45px, 1fr)); gap: 6px; max-width: 1280px; margin: 0 auto; overflow-x: auto; padding: 1rem; padding-bottom: 4rem; }
                .element-cell { aspect-ratio: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 8px; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); background-color: rgba(30, 30, 30, 0.5); border: 1px solid rgba(255, 255, 255, 0.05); position: relative; overflow: hidden; }
                .element-cell:hover:not(.quiz-active) { transform: scale(1.2); z-index: 50; box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.9); border-color: rgba(255, 255, 255, 0.6); background-color: rgba(40, 40, 40, 0.9); }
                .faded { opacity: 0.15 !important; filter: grayscale(80%); transform: scale(0.95); pointer-events: none; }
                .quiz-mode .element-text { opacity: 0; transition: opacity 0.3s; }
                .quiz-active:hover { transform: scale(1.1); border-color: #3b82f6; box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
                .quiz-correct { animation: flash-green 0.6s !important; z-index: 50; }
                .quiz-wrong { animation: flash-red 1.5s !important; z-index: 50; }
                .quiz-reveal { animation: flash-reveal 1.5s !important; z-index: 51; }
                @keyframes flash-green { 0%, 100% { background-color: rgba(30, 30, 30, 0.5); } 50% { background-color: #22c55e; border-color: #22c55e; box-shadow: 0 0 20px #22c55e; } }
                @keyframes flash-red { 0%, 100% { background-color: rgba(30, 30, 30, 0.5); } 15%, 85% { background-color: #ef4444; border-color: #ef4444; box-shadow: 0 0 20px #ef4444; } }
                @keyframes flash-reveal { 0%, 100% { background-color: rgba(30, 30, 30, 0.5); } 15%, 85% { background-color: #0ea5e9; border-color: #0ea5e9; box-shadow: 0 0 25px #0ea5e9; transform: scale(1.15); } }
                @keyframes rotate-right { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes rotate-left { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                @keyframes pulse-nucleus { 0% { transform: scale(0.95); opacity: 0.8; } 100% { transform: scale(1.1); opacity: 1; } }
            `}</style>

            <header className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/5">
                <div className="flex items-center gap-6">
                    <Link to="/study" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            Vision Elements
                        </h1>
                        <p className="text-gray-400 mt-1 font-medium tracking-widest text-[10px] md:text-xs uppercase">Powered by JEE Tapasya</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <input 
                            type="text" 
                            placeholder="Search element..." 
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-full bg-[#1a1a1a] border border-gray-800 text-white rounded-full px-6 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" 
                        />
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#111] border-b border-white/5">
                <div className="flex gap-2 bg-[#1a1a1a] p-1 rounded-full border border-gray-800">
                    <button onClick={() => { setIsHeatmap(false); if(quizStarted) setQuizStarted(false); }} className={cn("px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all", !isHeatmap ? "bg-white/10 text-white" : "text-gray-400 hover:text-white")}>Category View</button>
                    <button onClick={() => { setIsHeatmap(true); if(quizStarted) setQuizStarted(false); }} className={cn("px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all", isHeatmap ? "bg-white/10 text-white" : "text-gray-400 hover:text-white")}>Electronegativity Heatmap</button>
                </div>
                
                <div className="flex items-center gap-4">
                    {quizStarted && (
                        <div className="flex items-center gap-4 bg-gray-800/50 px-4 py-2 rounded-xl border border-white/10">
                            <span className="text-xs font-bold text-gray-400 uppercase">Target: <span className="text-blue-400 text-sm font-bold tracking-wide">{quizTarget?.name}</span></span>
                            <span className="text-xs font-bold text-gray-400 uppercase border-l border-white/10 pl-4">Score: <span className="text-emerald-400 text-sm font-bold">{score}</span></span>
                        </div>
                    )}
                    <button 
                        onClick={() => { setQuizStarted(!quizStarted); setIsHeatmap(false); setActiveFilter(null); }}
                        className={cn("px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg", quizStarted ? "bg-gradient-to-r from-red-600 to-red-500 shadow-red-500/20" : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-blue-500/20")}
                    >
                        {quizStarted ? 'End Quiz' : 'Start Quiz Mode'}
                    </button>
                </div>
            </div>

            {!quizStarted && (
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-2">
                    {Object.keys(categoryColors).map(cat => (
                        <button 
                            key={cat} 
                            onClick={() => setActiveFilter(activeFilter === cat ? null : cat)}
                            className={cn("px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10 bg-white/5 hover:bg-white/10 transition-all", categoryColors[cat].split(' ')[0], activeFilter === cat && "ring-2 ring-white/50")}
                        >
                            {cat.replace('-', ' ')}
                        </button>
                    ))}
                </div>
            )}

            <main className="w-full overflow-x-auto pb-12 mt-4">
                <div className={cn("periodic-grid min-w-[1000px]", quizStarted && "quiz-mode")}>
                    {elementsData.map(el => {
                        const isVisible = (el.name.toLowerCase().includes(searchText.toLowerCase()) || el.sym.toLowerCase().includes(searchText.toLowerCase())) && (activeFilter ? el.cat === activeFilter : true);
                        const isFaded = !isVisible && !quizStarted;
                        
                        let cellClass = "element-cell ";
                        let cellStyle = { gridColumn: el.col, gridRow: el.row, ...((isHeatmap && !quizStarted) ? getHeatmapStyle(el.en) : {}) };

                        if (quizStarted) {
                            cellClass += "bg-gray-800/40 border-gray-700 hover:bg-gray-700 text-gray-500 quiz-active ";
                            if (correctEl === el.num) cellClass += "quiz-correct ";
                            if (wrongEl === el.num) cellClass += "quiz-wrong ";
                            if (revealEl === el.num) cellClass += "quiz-reveal ";
                        } else if (isHeatmap) {
                            cellClass += getHeatmapClass(el.en) + " ";
                        } else {
                            cellClass += (categoryColors[el.cat] || '') + " ";
                        }

                        if (isFaded) cellClass += "faded ";

                        return (
                            <div 
                                key={`el-${el.num}`}
                                style={cellStyle}
                                className={cn(cellClass, typeof el.num !== 'number' && "pointer-events-none opacity-80 opacity-60")}
                                onClick={() => {
                                    if (typeof el.num !== 'number') return;
                                    if (quizStarted) {
                                        handleQuizClick(el);
                                    } else if (isVisible) {
                                        setSelectedElement(el);
                                    }
                                }}
                            >
                                <div className="element-text flex flex-col items-center w-full pointer-events-none">
                                    <span className="text-[9px] text-white/50 absolute top-1 left-1.5 font-bold">{el.num}</span>
                                    <strong className={cn(
                                        typeof el.num === 'number' ? "text-xl md:text-2xl" : "text-[10px] md:text-xs",
                                        "leading-none mt-2",
                                        isHeatmap && "text-white"
                                    )}>{el.sym}</strong>
                                    <span className="text-[8px] md:text-[9px] text-white/70 mt-1 truncate w-full text-center px-1 font-medium tracking-wide uppercase">{el.name}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>

            <AnimatePresence>
                {selectedElement && (
                    <motion.div 
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }} 
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 bg-black/60 z-[150] flex justify-center items-center p-4"
                        onClick={(e) => { if (e.target === e.currentTarget) setSelectedElement(null); }}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }} 
                            animate={{ scale: 1, y: 0 }} 
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#111]/95 border border-white/10 rounded-[2rem] shadow-2xl p-6 md:p-8 max-w-2xl w-full mx-4 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="flex items-center gap-5">
                                    <div className={cn("text-5xl font-black w-24 h-24 rounded-[1.5rem] flex items-center justify-center border-2 shadow-inner relative overflow-hidden group", isHeatmap ? "text-white border-white/50 bg-gray-800" : categoryColors[selectedElement.cat])}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {selectedElement.sym}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{selectedElement.name}</h2>
                                        <span className={cn("text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/5 mt-2 inline-block border border-white/10", isHeatmap ? "text-gray-300" : (categoryColors[selectedElement.cat]?.split(' ')[0] || ''))}>
                                            {selectedElement.cat.replace('-', ' ')}
                                        </span>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedElement(null)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-colors bg-[#1a1a1a]">
                                    <X size={20} />
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#1a1a1a] p-4 rounded-3xl border border-gray-800 relative z-10">
                                <div className="p-4 rounded-2xl border border-white/5 bg-[#111] shadow-inner flex flex-col justify-center">
                                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-1">Atomic No.</p>
                                    <p className="text-2xl font-mono text-white tracking-tight">{selectedElement.num}</p>
                                </div>
                                <div className="p-4 rounded-2xl border border-white/5 bg-[#111] shadow-inner flex flex-col justify-center">
                                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-1">Atomic Mass</p>
                                    <p className="text-2xl font-mono text-white tracking-tight">{selectedElement.mass}</p>
                                </div>
                                <div className="p-4 rounded-2xl border border-white/5 bg-[#111] shadow-inner flex flex-col justify-center">
                                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-1">Electronegativity</p>
                                    <p className="text-2xl font-mono text-blue-400 tracking-tight">{selectedElement.en ? selectedElement.en.toFixed(2) : 'N/A'}</p>
                                </div>
                                <div className="p-4 rounded-2xl border border-white/5 bg-[#111] shadow-inner flex flex-col justify-center">
                                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-1">State (20°C)</p>
                                    <p className="text-xl font-bold text-emerald-400 flex items-center gap-2">
                                        {selectedElement.p ? phaseIcons[selectedElement.p] : 'Unknown'}
                                    </p>
                                </div>
                                
                                <div className="col-span-2 md:col-span-4 bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-2 rounded-2xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mt-3 min-h-[220px]">
                                    <div className="absolute top-4 left-5 z-10">
                                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Electron Shells</p>
                                        <p className="text-sm font-mono text-gray-400 mt-1">[{selectedElement.s.join(', ')}]</p>
                                    </div>
                                    <AtomStructure el={selectedElement} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
