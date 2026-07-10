const fs = require('fs');
let code = fs.readFileSync('src/pages/DPPBuilder.tsx', 'utf8');

const target1 = "const allQuestions = await getQuestions();\n      console.log('allQuestions length:', allQuestions.length);\n      console.log('subject:', subject, 'difficulty:', difficulty, 'chapters:', selectedChapters, 'onlyCustom:', onlyCustom);";
code = code.replace(target1, "const allQuestions = await getQuestions();");

const target2 = "const filtered = allQuestions.filter(q => {\n        console.log('Q:', q.subjectId, q.chapterId, q.difficulty, q.isCustom);";
code = code.replace(target2, "const filtered = allQuestions.filter(q => {");

fs.writeFileSync('src/pages/DPPBuilder.tsx', code);
console.log('DPPBuilder.tsx cleaned');
