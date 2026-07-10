const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const regex = /function SurveyModal\([\s\S]*?\n\}\n\nexport default function Home\(\)/;
code = code.replace(regex, 'export default function Home()');

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Removed SurveyModal definition');
