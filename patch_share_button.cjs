const fs = require('fs');
let code = fs.readFileSync('src/pages/Challenges.tsx', 'utf8');

// Remove {navigator.share && ( ... )} around the share button
code = code.replace(/\{navigator\.share && \(\n([\s\S]*?)          \)\}/g, '$1');

fs.writeFileSync('src/pages/Challenges.tsx', code);
console.log('Patched share button');
