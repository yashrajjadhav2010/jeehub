const fs = require('fs');
let code = fs.readFileSync('src/pages/Subjects.tsx', 'utf-8');

code = code.replace(
  "allChapters.pyq.reduce", 
  "allChapters.pyq?.reduce"
);

code = code.replace(
  "userStats.subjectProgress.pyq || 0", 
  "0"
);

code = code.replace(
  "userStats.subjectProgress.physics || 0", 
  "userStats.subjectProgress?.physics || 0"
);

code = code.replace(
  "userStats.subjectProgress.chemistry || 0", 
  "userStats.subjectProgress?.chemistry || 0"
);

code = code.replace(
  "userStats.subjectProgress.maths || 0", 
  "userStats.subjectProgress?.maths || 0"
);


fs.writeFileSync('src/pages/Subjects.tsx', code);
console.log("Patched Subjects.tsx");
