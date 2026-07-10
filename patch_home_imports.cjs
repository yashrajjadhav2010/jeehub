const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /  Sparkles,\n/,
  '  Sparkles,\n  MessageSquare,\n  CheckCircle,\n  TriangleAlert,\n'
);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Home imports patched');
