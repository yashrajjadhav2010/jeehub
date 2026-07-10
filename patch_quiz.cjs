const fs = require('fs');
let code = fs.readFileSync('src/pages/Quiz.tsx', 'utf8');

code = code.replace(/import AdModal from '\.\.\/components\/AdModal';\n/, '');
code = code.replace(/  const \[showAdModal, setShowAdModal\] = useState\(false\);\n/, '');

const oldLimitCheck = `    const limitStatus = await checkAILimit(user?.id);
    if (!limitStatus.allowed) {
      if (limitStatus.needsAd) {
        setShowAdModal(true);
      } else {
        setAiLimitError(limitStatus.error || "Daily Axiom AI limit reached!");
        setTimeout(() => setAiLimitError(null), 5000);
      }
      return;
    }`;

const newLimitCheck = `    const limitStatus = await checkAILimit(user?.id);
    if (!limitStatus.allowed) {
      setAiLimitError(limitStatus.error || "Daily Axiom AI limit reached!");
      setTimeout(() => setAiLimitError(null), 5000);
      return;
    }`;

code = code.replace(oldLimitCheck, newLimitCheck);

const oldModalRender = `      {/* Ad Modal */}
      <AdModal 
        isOpen={showAdModal} 
        onClose={() => setShowAdModal(false)} 
        onRewardGranted={() => {
          setShowAdModal(false);
          // Optional: re-trigger the AI generation automatically or just let them click again
        }} 
      />`;

code = code.replace(oldModalRender, '');

fs.writeFileSync('src/pages/Quiz.tsx', code);
console.log('Quiz.tsx patched');
