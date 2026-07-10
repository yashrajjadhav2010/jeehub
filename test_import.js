import('fs').then(fs => {
  const code = fs.readFileSync('src/pages/Subjects.tsx', 'utf-8');
  console.log("length of Subjects.tsx:", code.length);
}).catch(console.error);
