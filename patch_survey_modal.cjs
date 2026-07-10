const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950\/40 backdrop-blur-sm p-4"/,
  'className="fixed inset-0 z-[999] flex items-center justify-center bg-emerald-950/40 backdrop-blur-sm p-4"'
);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('SurveyModal patched');
