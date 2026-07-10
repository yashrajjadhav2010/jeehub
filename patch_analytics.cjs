const fs = require('fs');
let code = fs.readFileSync('src/pages/Analytics.tsx', 'utf-8');

const additionalAnalytics = `
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
         <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-emerald-100 shadow-sm">
           <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-emerald-950 uppercase tracking-tight flex items-center gap-2">
             <Clock className="w-6 h-6 text-emerald-600" />
             Time Management
           </h2>
           <div className="space-y-6">
             <p className="text-sm text-emerald-900/60 font-medium">Average time spent per question by subject:</p>
             <MasteryBar label="Physics (Avg: 2.1 mins)" value={70} color="bg-amber-500" />
             <MasteryBar label="Chemistry (Avg: 1.2 mins)" value={40} color="bg-emerald-500" />
             <MasteryBar label="Mathematics (Avg: 3.5 mins)" value={90} color="bg-rose-500" />
             <div className="mt-4 p-4 bg-rose-50 rounded-xl border border-rose-100">
               <p className="text-xs font-bold text-rose-700 uppercase tracking-widest flex items-center gap-2"><AlertCircle className="w-4 h-4" /> Action Required</p>
               <p className="text-sm font-medium text-rose-600/80 mt-1">You are spending &gt;3 mins on Mathematics questions. Focus on time-saving techniques.</p>
             </div>
           </div>
         </div>
         
         <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-emerald-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-emerald-950 uppercase tracking-tight flex items-center gap-2">
              <Target className="w-6 h-6 text-emerald-600" />
              Percentile Predictor
            </h2>
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-emerald-50" />
                <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="502" strokeDashoffset="50" className="text-primary" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-emerald-950">94.2</span>
                <span className="text-[10px] font-bold text-emerald-600/60 uppercase tracking-widest mt-1">Percentile</span>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-900/60 mt-6 max-w-[250px]">
              Based on your recent mock test performances and accuracy trends across subjects.
            </p>
         </div>
      </div>
`;

code = code.replace('</div>\n    </div>\n  );\n}', '</div>\n' + additionalAnalytics + '    </div>\n  );\n}');

fs.writeFileSync('src/pages/Analytics.tsx', code);
console.log("Patched Analytics.tsx");
