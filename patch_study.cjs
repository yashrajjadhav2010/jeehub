const fs = require('fs');
let code = fs.readFileSync('src/pages/Study.tsx', 'utf8');

const targetStr = `            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] text-white shadow-xl shadow-black/10 relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10 space-y-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <Search size={24} className="text-amber-400" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-black uppercase italic tracking-tight">Question Bank</h4>
                        <p className="text-xs font-medium text-gray-400 leading-relaxed">
                            Browse, search, and practice from our entire collection of physics, chemistry, and mathematics questions.
                        </p>
                    </div>
                    <Link to="/browse" className="w-full py-4 bg-amber-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20">
                        Browse Questions <ArrowRight size={14} />
                    </Link>
                </div>
            </div>`;

code = code.replace(targetStr, "");
fs.writeFileSync('src/pages/Study.tsx', code);
console.log('Study patched');
