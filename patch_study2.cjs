const fs = require('fs');
let code = fs.readFileSync('src/pages/Study.tsx', 'utf-8');

const target = `<div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black heading-display tracking-tight text-emerald-950 uppercase italic mb-4">
          Study <span className="text-primary not-italic">Material</span>
        </h1>
        <p className="text-emerald-900/60 font-medium max-w-2xl mx-auto">
          Access high-yield revision notes, mind maps, and formula sheets carefully curated for JEE preparation.
        </p>
      </div>`;

const extraRender = `
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-12">
          <Link to="/formula-vault" className="flex items-center gap-4 p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Book className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-950 uppercase tracking-tight">Formula Vault</h3>
              <p className="text-sm font-medium text-emerald-900/60 mt-1">Searchable database of JEE formulas</p>
            </div>
          </Link>
          <Link to="/flashcards" className="flex items-center gap-4 p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <RefreshCw className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-950 uppercase tracking-tight">Active Flashcards</h3>
              <p className="text-sm font-medium text-emerald-900/60 mt-1">Spaced repetition for quick memorization</p>
            </div>
          </Link>
        </div>
`;

code = code.replace(target, target + extraRender);
fs.writeFileSync('src/pages/Study.tsx', code);
