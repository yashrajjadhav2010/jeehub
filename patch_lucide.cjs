const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const regex = /import \{\n([\s\S]*?)\n\} from "lucide-react";/;
const match = code.match(regex);
if (match) {
  const imports = match[1].split(',').map(s => s.trim()).filter(Boolean);
  const uniqueImports = [...new Set(imports)];
  code = code.replace(regex, `import { \n  ${uniqueImports.join(',\n  ')} \n} from "lucide-react";`);
  fs.writeFileSync('src/pages/Home.tsx', code);
  console.log('Unique lucide imports applied');
}
