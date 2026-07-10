const fs = require('fs');
let code = fs.readFileSync('src/pages/Admin.tsx', 'utf8');

code = code.replace(
  /let userScore = 0;/,
  "let userScore = 0;\n        let userXp = 0;\n        let totalSolved = 0;\n        let streak = 0;"
);

code = code.replace(
  /userScore = data\.data\.stats\.totalScore \|\| 0;/,
  "userScore = data.data.stats.totalScore || 0;\n            userXp = data.data.stats.xp || 0;\n            totalSolved = data.data.stats.totalSolved || 0;\n            streak = data.data.stats.streak || 0;"
);

code = code.replace(
  /score: userScore,/,
  "score: userScore,\n          xp: userXp,\n          totalSolved: totalSolved,\n          streak: streak,"
);

code = code.replace(
  /<th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900\/40">Score<\/th>/,
  '<th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">Score</th>\n                    <th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">XP</th>\n                    <th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">Solved</th>'
);

code = code.replace(
  /<td className="py-4 px-4 font-bold text-primary">\{u\.score\}<\/td>/,
  '<td className="py-4 px-4 font-bold text-primary">{u.score}</td>\n                        <td className="py-4 px-4 font-bold text-amber-500">{u.xp}</td>\n                        <td className="py-4 px-4 font-bold text-indigo-500">{u.totalSolved}</td>'
);

fs.writeFileSync('src/pages/Admin.tsx', code);
console.log('Admin stats patched');
