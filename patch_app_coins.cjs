const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/coins = 20; \n            window.localStorage.setItem\('coins', '20'\);/, "coins = 0; \n            window.localStorage.setItem('coins', '0');");
code = code.replace(/let rCoins = parseInt\(rData\?\.data\?\.coins || '20', 10\);/, "let rCoins = parseInt(rData?.data?.coins || '0', 10);");

fs.writeFileSync('src/App.tsx', code);
console.log('Coins patched');
