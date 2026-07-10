const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf-8');

code = code.replace('@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@500;700;900&family=JetBrains+Mono:wght@400;500&display=swap");', '');

code = '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@500;700;900&family=JetBrains+Mono:wght@400;500&display=swap");\n' + code;

fs.writeFileSync('src/index.css', code);
console.log("Patched index.css");
