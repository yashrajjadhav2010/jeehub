const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const injectCode = `
    // Track total site visits
    const recordVisit = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const refCode = urlParams.get('ref');
      if (refCode) {
        window.sessionStorage.setItem('pendingReferral', refCode);
      }
`;

code = code.replace(/    \/\/ Track total site visits\n    const recordVisit = async \(\) => \{/, injectCode);

fs.writeFileSync('src/App.tsx', code);
console.log('App referral extraction patched');
