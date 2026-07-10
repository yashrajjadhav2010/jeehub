const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  /export default function Home\(\) \{/,
  "export default function Home() {\n  const { user, isLoaded, isSignedIn } = useUser();\n  const [showSurvey, setShowSurvey] = useState(false);\n"
);

const useEffectCode = `
  useEffect(() => {
    if (isLoaded && isSignedIn && user?.id) {
      const checkSurvey = async () => {
        try {
          const surveyDoc = await getDoc(doc(db, 'surveys', user.id));
          if (!surveyDoc.exists()) {
            setShowSurvey(true);
          }
        } catch (e) {
          console.error("Error checking survey status", e);
        }
      };
      checkSurvey();
    }
  }, [isLoaded, isSignedIn, user?.id]);
`;

code = code.replace(
  /useEffect\(\(\) => \{\n    try \{\n      const savedStats = localStorage\.getItem\("userStats"\);/,
  `${useEffectCode}\n  useEffect(() => {\n    try {\n      const savedStats = localStorage.getItem("userStats");`
);

code = code.replace(
  /return \(\n    <div className="space-y-12">/,
  `return (\n    <div className="space-y-12">\n      <SurveyModal isOpen={showSurvey} onClose={() => setShowSurvey(false)} user={user} />`
);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Home Survey trigger added');
