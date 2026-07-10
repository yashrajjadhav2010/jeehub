import fs from 'fs';
import ts from 'typescript';

const sourceFile = ts.createSourceFile(
  'Subjects.tsx',
  fs.readFileSync('src/pages/Subjects.tsx', 'utf8'),
  ts.ScriptTarget.Latest,
  true
);

function printAllErrors(node) {
  // basic check
}
console.log("TS parsed Subjects.tsx. Diagnostics:", sourceFile.parseDiagnostics);
