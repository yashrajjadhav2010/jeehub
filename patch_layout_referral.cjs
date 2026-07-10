const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const injectLogic = `
        const hasData = await fetchAndPopulateStorage(user.id);
        if (!hasData) {
          await syncToFirebase(user.id);
        }

        try {
          const { doc, setDoc, getDoc, updateDoc } = await import('firebase/firestore');
          const { db } = await import('./lib/firebase');

          let coins = parseInt(window.localStorage.getItem('coins') || '-1', 10);
          if (coins === -1) {
            coins = 20; 
            window.localStorage.setItem('coins', '20');
          }
          
          let referralCode = window.localStorage.getItem('referralCode');
          if (!referralCode) {
            referralCode = user.id.substring(user.id.length - 6).toUpperCase();
            window.localStorage.setItem('referralCode', referralCode);
          }

          await setDoc(doc(db, 'referral_codes', referralCode), { userId: user.id });

          const pendingReferral = window.sessionStorage.getItem('pendingReferral');
          let referredBy = window.localStorage.getItem('referredBy');

          if (pendingReferral && !referredBy && pendingReferral !== referralCode) {
            window.localStorage.setItem('referredBy', pendingReferral);
            coins += 5;
            window.localStorage.setItem('coins', coins.toString());
            
            const referrerDoc = await getDoc(doc(db, 'referral_codes', pendingReferral));
            if (referrerDoc.exists()) {
              const referrerId = referrerDoc.data().userId;
              const rUserDocRef = doc(db, 'user_data', referrerId);
              const rUserDoc = await getDoc(rUserDocRef);
              if (rUserDoc.exists()) {
                const rData = rUserDoc.data();
                let rCoins = parseInt(rData?.data?.coins || '20', 10);
                rCoins += 10;
                await updateDoc(rUserDocRef, { 'data.coins': rCoins.toString() });
              }
            }
            window.sessionStorage.removeItem('pendingReferral');
          }
        } catch(e) {
          console.error("Referral error", e);
        }
`;

code = code.replace(
/        const hasData = await fetchAndPopulateStorage\(user\.id\);\n        if \(\!hasData\) \{\n          await syncToFirebase\(user\.id\);\n        \}/, 
  injectLogic
);

fs.writeFileSync('src/App.tsx', code);
console.log('App layout referral patched');
