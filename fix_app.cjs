const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Remove the mistakenly prepended string
code = code.replace(/^let rCoins = parseInt\(rData\?\.data\?\.coins \|\| '0', 10\);/, "");

// Fix the actual line where it should be
code = code.replace(/let rCoins = parseInt\(rData\?\.data\?\.coins \|\| '20', 10\);/, "let rCoins = parseInt(rData?.data?.coins || '0', 10);");

fs.writeFileSync('src/App.tsx', code);
console.log('App fixed');
