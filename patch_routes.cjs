const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const imports = `import Flashcards from './pages/Flashcards';
import FormulaVault from './pages/FormulaVault';
import DPPBuilder from './pages/DPPBuilder';`;

code = code.replace("import Admin from './pages/Admin';", "import Admin from './pages/Admin';\n" + imports);

const routes = `<Route path="/flashcards" element={<Flashcards />} />
            <Route path="/formula-vault" element={<FormulaVault />} />
            <Route path="/dpp-builder" element={<DPPBuilder />} />`;

code = code.replace('<Route path="/admin" element={<Admin />} />', '<Route path="/admin" element={<Admin />} />\n            ' + routes);

fs.writeFileSync('src/App.tsx', code);
console.log("Patched App.tsx for new routes");
