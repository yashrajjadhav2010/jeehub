const fs = require('fs');
let code = fs.readFileSync('src/lib/dataService.ts', 'utf8');

code = code.replace(
  /type: q\.type \|\| 'mcq'/g,
  "type: q.type || 'mcq',\n          isCustom: true"
);

fs.writeFileSync('src/lib/dataService.ts', code);
console.log('dataService patched');
