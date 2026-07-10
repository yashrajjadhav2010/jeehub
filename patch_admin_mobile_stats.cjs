const fs = require('fs');
let code = fs.readFileSync('src/pages/Admin.tsx', 'utf8');

code = code.replace(
  /<span className="text-\[9px\] font-black uppercase tracking-widest text-emerald-900\/40">XP<\/span>\n                        <p className="font-black text-primary text-md leading-none mt-0\.5">\{u\.score\}<\/p>/,
  '<span className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40">Score</span>\n                        <p className="font-black text-primary text-md leading-none mt-0.5">{u.score}</p>\n                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mt-1 block">XP</span>\n                        <p className="font-black text-amber-500 text-md leading-none mt-0.5">{u.xp}</p>'
);

fs.writeFileSync('src/pages/Admin.tsx', code);
console.log('Admin mobile stats patched');
