const fs = require('fs');
let code = fs.readFileSync('src/pages/Study.tsx', 'utf-8');

const target = `<div className="flex flex-col md:flex-row gap-6 mt-8">`;
const extraRender = `
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-4">
        <Link to="/formula-vault" className="flex items-center gap-4 p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Book className="w-7 h-7 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-emerald-950 uppercase tracking-tight">Formula Vault</h3>
            <p className="text-xs font-medium text-emerald-900/60 mt-1">Searchable database of JEE formulas</p>
          </div>
        </Link>
        <Link to="/flashcards" className="flex items-center gap-4 p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform">
            <RefreshCw className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-emerald-950 uppercase tracking-tight">Active Flashcards</h3>
            <p className="text-xs font-medium text-emerald-900/60 mt-1">Spaced repetition for quick memorization</p>
          </div>
        </Link>
      </div>
`;
code = code.replace('</div>\n    </div>\n  );\n}', extraRender + '\n</div>\n    </div>\n  );\n}');

fs.writeFileSync('src/pages/Study.tsx', code);
console.log('done');
