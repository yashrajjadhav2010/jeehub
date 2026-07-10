const fs = require('fs');
let code = fs.readFileSync('src/pages/Admin.tsx', 'utf8');

code = code.replace(
  /CheckCircle2, ChevronDown, Book, Sparkles/,
  "CheckCircle2, ChevronDown, Book, Sparkles, MessageSquare"
);

fs.writeFileSync('src/pages/Admin.tsx', code);
console.log('Admin imports patched');
