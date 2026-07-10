import fs from 'fs';
import * as babel from '@babel/core';
const code = fs.readFileSync('src/pages/Subjects.tsx', 'utf-8');
try {
  babel.parseSync(code, {
    filename: 'src/pages/Subjects.tsx',
    presets: ['@babel/preset-typescript', '@babel/preset-react']
  });
  console.log("No syntax errors");
} catch(e) {
  console.log(e.message);
}
