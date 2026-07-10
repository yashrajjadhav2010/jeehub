const fs = require('fs');
let code = fs.readFileSync('src/lib/dataService.ts', 'utf-8');

const getQuestionsCode = `

export async function getQuestions() {
  const data = await getAllData();
  let questions = [];
  for (const subjectId of Object.keys(data)) {
    const chapters = data[subjectId];
    for (const chapter of chapters) {
      for (const set of chapter.sets) {
        const quizSet = await loadQuizSet(subjectId, chapter.id, set.id);
        if (quizSet && quizSet.questions) {
          questions = questions.concat(quizSet.questions);
        }
      }
    }
  }
  return questions;
}
`;

code += getQuestionsCode;

fs.writeFileSync('src/lib/dataService.ts', code);
console.log("Patched dataService.ts with getQuestions");
