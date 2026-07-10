const fs = require('fs');
let code = fs.readFileSync('src/pages/Challenges.tsx', 'utf8');

code = code.replace(
  /  Maximize2,\n\} from "lucide-react";/,
  '  Maximize2,\n  Gift,\n  Coins,\n  Copy,\n  Check,\n} from "lucide-react";'
);

fs.writeFileSync('src/pages/Challenges.tsx', code);
console.log('Challenges imports patched');
