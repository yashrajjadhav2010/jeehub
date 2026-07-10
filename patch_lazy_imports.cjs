const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const newImports = `const Flashcards = lazy(() => import("./pages/Flashcards"));
const FormulaVault = lazy(() => import("./pages/FormulaVault"));
const DPPBuilder = lazy(() => import("./pages/DPPBuilder"));`;

code = code.replace('const Admin = lazy(() => import("./pages/Admin"));', 'const Admin = lazy(() => import("./pages/Admin"));\n' + newImports);

fs.writeFileSync('src/App.tsx', code);
console.log("Added lazy imports to App.tsx");
