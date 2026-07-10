const fs = require('fs');
let code = fs.readFileSync('src/pages/Admin.tsx', 'utf8');

code = code.replace(
  /      try \{\n        console\.error\("Error fetching reports", e\);\n      \}/,
  ""
);

fs.writeFileSync('src/pages/Admin.tsx', code);
console.log('Admin fix applied');
