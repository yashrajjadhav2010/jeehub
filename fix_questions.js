import fs from 'fs';

const file = 'src/questions/physics/kinematics/pyq.ts';
let content = fs.readFileSync(file, 'utf8');

// The script added questions from q36 to q56.
// Let's remove them and re-add properly!

const idRegex = /kinematics-pyq-q36/;
const index = content.indexOf('    {\n      id: "kinematics-pyq-q36"');
if (index !== -1) {
    content = content.substring(0, index - 2) + "\n  ]\n};\n\nexport default pyq;\n";
    fs.writeFileSync(file, content);
}
