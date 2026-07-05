const fs = require('fs');
let code = fs.readFileSync('src/pages/MockTests.tsx', 'utf-8');
code = code.replace(/duration: \(set as any\)\.duration \? \`\$\{\(set as any\)\.duration\} Mins\` : "180 Mins",/g, 'duration: "No Time Limit",');
fs.writeFileSync('src/pages/MockTests.tsx', code);
console.log('Patched MockTests.tsx successfully!');
