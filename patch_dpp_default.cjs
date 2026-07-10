const fs = require('fs');
let code = fs.readFileSync('src/pages/DPPBuilder.tsx', 'utf8');

code = code.replace(
  /const \[onlyCustom, setOnlyCustom\] = useState\(false\);/,
  "const [onlyCustom, setOnlyCustom] = useState(true);"
);

fs.writeFileSync('src/pages/DPPBuilder.tsx', code);
console.log('DPPBuilder.tsx patched default onlyCustom');
