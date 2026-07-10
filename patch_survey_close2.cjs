const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /onClose=\{async \(\) => \{\n        setShowSurvey\(false\);\n        if \(user && user\.id\) \{\n          try \{\n            await setDoc\(doc\(db, "surveys", user\.id\), \{ \n              userId: user\.id,\n              dismissed: true,\n              createdAt: serverTimestamp\(\)\n            \}\);\n          \} catch \(e\) \{ console\.error\(e\); \}\n        \}\n      \}\}/g,
  'onClose={() => setShowSurvey(false)}'
);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Survey close patched');
