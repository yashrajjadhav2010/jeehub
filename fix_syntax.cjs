const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
/       const \{ doc, setDoc, getDoc, updateDoc \} = await import\('firebase\/firestore'\);/,
"       try {\n          const { doc, setDoc, getDoc, updateDoc } = await import('firebase/firestore');"
);

fs.writeFileSync('src/App.tsx', code);
console.log('Fixed syntax');
