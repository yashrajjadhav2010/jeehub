const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// remove showSurvey state
code = code.replace(/  const \[showSurvey, setShowSurvey\] = useState\(false\);\n/, '');

// remove checkSurvey useEffect
const checkSurveyRegex = /  useEffect\(\(\) => \{\n    if \(isLoaded && isSignedIn && user\?\.id\) \{\n      const checkSurvey = async \(\) => \{\n        try \{\n          const surveyDoc = await getDoc\(doc\(db, 'surveys', user\.id\)\);\n          if \(!surveyDoc\.exists\(\) \|\| surveyDoc\.data\(\)\.dismissed === true\) \{\n            setShowSurvey\(true\);\n          \}\n        \} catch \(e\) \{\n          console\.error\("Error checking survey status", e\);\n        \}\n      \};\n      checkSurvey\(\);\n    \}\n  \}, \[isLoaded, isSignedIn, user\?\.id\]\);\n\n/;
code = code.replace(checkSurveyRegex, '');

// remove SurveyModal render
code = code.replace(/      <SurveyModal isOpen=\{showSurvey\} onClose=\{\(\) => setShowSurvey\(false\)\} user=\{user\} \/>\n/, '');

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Patched home');
