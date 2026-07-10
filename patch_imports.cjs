const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const imports = `import Flashcards from './pages/Flashcards';
import FormulaVault from './pages/FormulaVault';
import DPPBuilder from './pages/DPPBuilder';`;

code = code.replace("import Admin from './pages/Admin';", "import Admin from './pages/Admin';\n" + imports);

fs.writeFileSync('src/App.tsx', code);
console.log("Patched App.tsx with imports");
