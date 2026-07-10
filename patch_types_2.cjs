const fs = require('fs');
let code = fs.readFileSync('src/types.ts', 'utf8');

code = code.replace(
  /export interface Question \{/,
  "export interface Question {\n  isCustom?: boolean;"
);

fs.writeFileSync('src/types.ts', code);
console.log('Types patched');
