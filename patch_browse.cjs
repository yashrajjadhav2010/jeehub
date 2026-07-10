const fs = require('fs');
let code = fs.readFileSync('src/pages/BrowseQuestions.tsx', 'utf-8');

const target = `<p className="text-emerald-900/60 font-medium max-w-2xl mx-auto">
          Directory of all practice questions. Select any question to view its detailed solution and structured explanation.
        </p>`;

const replacement = target + `\n        <div className="mt-8 flex justify-center">
          <Link to="/dpp-builder" className="bg-emerald-600 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-emerald-700 hover:-translate-y-1 transition-all shadow-md">
            Go to DPP Builder
          </Link>
        </div>`;

code = code.replace(target, replacement);

fs.writeFileSync('src/pages/BrowseQuestions.tsx', code);
console.log("Patched BrowseQuestions.tsx");
