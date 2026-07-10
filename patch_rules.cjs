const fs = require('fs');
let code = fs.readFileSync('firestore.rules', 'utf8');

code = code.replace(
  /match \/ai_usage\/\{userId\} \{\n      allow read, write: if true;\n    \}/,
  "match /ai_usage/{userId} {\n      allow read, write: if true;\n    }\n    match /surveys/{surveyId} {\n      allow read, write: if true;\n    }"
);

fs.writeFileSync('firestore.rules', code);
console.log('firestore.rules patched');
