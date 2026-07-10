const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  /    \{ icon: Target, label: "DPP", path: "\/dpp-builder" \},\n/g,
  ""
);

fs.writeFileSync('src/App.tsx', code);
console.log('App.tsx patched');
