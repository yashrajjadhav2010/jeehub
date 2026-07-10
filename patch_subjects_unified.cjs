const fs = require('fs');
let code = fs.readFileSync('src/pages/Subjects.tsx', 'utf-8');

code = code.replace("const aggregateProgress = useMemo(() => {\\n    const vals = Object.values(userStats.subjectProgress);\\n    return vals.reduce((a, b) => a + b, 0) / vals.length;\\n  }, [userStats]);", 
"const aggregateProgress = useMemo(() => {\\n    const vals = [\\n      userStats.subjectProgress.physics || 0,\\n      userStats.subjectProgress.chemistry || 0,\\n      userStats.subjectProgress.maths || 0\\n    ];\\n    return vals.reduce((a, b) => a + b, 0) / (vals.length || 1);\\n  }, [userStats]);");

fs.writeFileSync('src/pages/Subjects.tsx', code);
console.log("Patched Subjects.tsx with updated aggregate progress");
