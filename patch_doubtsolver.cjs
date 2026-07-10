const fs = require('fs');
let code = fs.readFileSync('src/pages/DoubtSolver.tsx', 'utf8');

code = code.replace(/import AdModal from '\.\.\/components\/AdModal';\n/, '');
code = code.replace(/  const \[showAdModal, setShowAdModal\] = useState\(false\);\n/, '');

const oldLimitCheck = `    const limitStatus = await checkAILimit(user?.id);
    if (!limitStatus.allowed) {
      if (limitStatus.needsAd) {
        setShowAdModal(true);
      } else {
        setError(limitStatus.error || "Daily limit reached!");
      }
      return;
    }`;

const newLimitCheck = `    const limitStatus = await checkAILimit(user?.id);
    if (!limitStatus.allowed) {
      setError(limitStatus.error || "Daily limit reached!");
      return;
    }`;

code = code.replace(oldLimitCheck, newLimitCheck);

const oldModalRender = `      {/* Ad Modal */}
      <AdModal 
        isOpen={showAdModal} 
        onClose={() => setShowAdModal(false)} 
        onRewardGranted={() => {
          setShowAdModal(false);
          // Optional: user can resubmit their doubt manually
        }} 
      />`;

code = code.replace(oldModalRender, '');

fs.writeFileSync('src/pages/DoubtSolver.tsx', code);
console.log('DoubtSolver.tsx patched');
