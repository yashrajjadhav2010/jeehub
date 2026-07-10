const fs = require('fs');
let code = fs.readFileSync('src/pages/Subjects.tsx', 'utf8');

code = code.replace(
  /            <Link \n              to="\/browse" \n              className="group flex items-center justify-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-950 font-black text-\[10px\] uppercase tracking-\[0\.2em\] rounded-full shadow-md hover:bg-emerald-200 transition-all active:scale-95 border border-emerald-900\/10"\n            >\n              <Search size=\{14\} className="group-hover:scale-110 transition-transform" \/>\n              Question Bank\n            <\/Link>\n/,
  ""
);

fs.writeFileSync('src/pages/Subjects.tsx', code);
console.log('Subjects patched');
