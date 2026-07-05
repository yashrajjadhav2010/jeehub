import fs from 'fs';
const file = 'src/questions/physics/kinematics/pyq.ts';
let content = fs.readFileSync(file, 'utf8');

// I'll just remove the bad questions from the file by finding where they started.
// They started at '    },\n    {\n      id: "kinematics-pyq-q91"'
const startIdx = content.indexOf('    },\n    {\n      id: "kinematics-pyq-q91"');
if (startIdx !== -1) {
  content = content.substring(0, startIdx) + '    }\n  ]\n};\nexport default pyq;\n';
}

fs.writeFileSync(file, content);
