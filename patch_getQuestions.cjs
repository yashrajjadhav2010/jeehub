const fs = require('fs');
let code = fs.readFileSync('src/lib/dataService.ts', 'utf8');

const target = `        if (quizSet && quizSet.questions) {
          questions = questions.concat(quizSet.questions);
        }`;

const replacement = `        if (quizSet && quizSet.questions) {
          questions = questions.concat(quizSet.questions.map(q => ({
            ...q,
            subjectId,
            chapterId: chapter.id
          })));
        }`;

code = code.replace(target, replacement);

fs.writeFileSync('src/lib/dataService.ts', code);
console.log('dataService patched');
