const fs = require('fs');
let code = fs.readFileSync('src/pages/Subjects.tsx', 'utf8');

const target = `        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex flex-col gap-4">
            <Link 
              to="/browse" 
              className="group flex items-center justify-center gap-4 px-8 py-4 bg-emerald-100 text-emerald-950 font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-emerald-200 transition-all active:scale-95 border border-emerald-900/10"
            >
              <Search size={16} className="group-hover:scale-110 transition-transform" />
              Question Bank
            </Link>
            <Link 
              to="/dpp-builder" 
              className="group flex items-center justify-center gap-4 px-8 py-4 bg-emerald-600 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-emerald-500 transition-all active:scale-95"
            >
              <Target size={16} className="group-hover:scale-110 transition-transform" />
              Custom DPP Builder
            </Link>
          </div>
          <Link 
            to="/" 
            className="group flex items-center gap-4 px-8 py-4 bg-emerald-950 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-emerald-900 transition-all active:scale-95 h-full self-stretch md:self-auto"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Abort to Base
          </Link>
        </div>`;

const replacement = `        <div className="flex flex-wrap gap-4 items-end justify-end">
          <div className="flex gap-4 flex-wrap justify-end">
            <Link 
              to="/browse" 
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-950 font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-md hover:bg-emerald-200 transition-all active:scale-95 border border-emerald-900/10"
            >
              <Search size={14} className="group-hover:scale-110 transition-transform" />
              Question Bank
            </Link>
            <Link 
              to="/dpp-builder" 
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-md hover:bg-emerald-500 transition-all active:scale-95"
            >
              <Target size={14} className="group-hover:scale-110 transition-transform" />
              DPP Builder
            </Link>
            <Link 
              to="/" 
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-emerald-950 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-md hover:bg-emerald-900 transition-all active:scale-95"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Abort to Base
            </Link>
          </div>
        </div>`;

code = code.replace(target, replacement);

fs.writeFileSync('src/pages/Subjects.tsx', code);
console.log('Subjects.tsx layout patched');
