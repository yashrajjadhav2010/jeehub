const fs = require('fs');
let code = fs.readFileSync('src/pages/DPPBuilder.tsx', 'utf8');

code = code.replace(
  /const allQuestions = await getQuestions\(\);/,
  "const allQuestions = await getQuestions();\n      console.log('allQuestions length:', allQuestions.length);\n      console.log('subject:', subject, 'difficulty:', difficulty, 'chapters:', selectedChapters, 'onlyCustom:', onlyCustom);"
);

code = code.replace(
  /const filtered = allQuestions\.filter\(q => \{/,
  "const filtered = allQuestions.filter(q => {\n        console.log('Q:', q.subjectId, q.chapterId, q.difficulty, q.isCustom);"
);

fs.writeFileSync('src/pages/DPPBuilder.tsx', code);
console.log('DPPBuilder.tsx patched with logging');
