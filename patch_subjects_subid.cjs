const fs = require('fs');
let code = fs.readFileSync('src/pages/Subjects.tsx', 'utf-8');

code = code.replace(
  "subjectId: sub.id,", 
  "subjectId: sub.id as SubjectId,"
);

fs.writeFileSync('src/pages/Subjects.tsx', code);
console.log("Patched SubjectId cast");
