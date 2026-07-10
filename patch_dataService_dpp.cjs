const fs = require('fs');
let code = fs.readFileSync('src/lib/dataService.ts', 'utf8');

const target = `  // 2. If it starts with custom_, it's definitely from Firebase
  if (set.startsWith('custom_')) {`;

const replacement = `  // Check if it's a generated DPP from localStorage
  if (chapter === 'dpp' && set.startsWith('dpp-')) {
    try {
      const dppData = localStorage.getItem(\`quiz_dpp_dpp_\${set}\`);
      if (dppData) {
        return JSON.parse(dppData);
      }
    } catch (e) {
      console.error("Failed to parse DPP from localStorage", e);
    }
  }

  // 2. If it starts with custom_, it's definitely from Firebase
  if (set.startsWith('custom_')) {`;

code = code.replace(target, replacement);

fs.writeFileSync('src/lib/dataService.ts', code);
console.log('dataService patched for DPP');
