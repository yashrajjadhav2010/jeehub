const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /if \(!surveyDoc\.exists\(\)\) \{\n            setShowSurvey\(true\);\n          \}/g,
  'if (!surveyDoc.exists() || surveyDoc.data().dismissed === true) {\n            setShowSurvey(true);\n          }'
);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Survey check patched');
