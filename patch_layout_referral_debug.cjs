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
            coins = 0; 
            window.localStorage.setItem('coins', '0');
          }
          
          let referralCode = window.localStorage.getItem('referralCode');
          if (!referralCode) {
            referralCode = user.id.substring(user.id.length - 6).toUpperCase();
            window.localStorage.setItem('referralCode', referralCode);
          }

          try {
            await setDoc(doc(db, 'referral_codes', referralCode), { userId: user.id });
          } catch (e) {
             console.error("setDoc referral_codes error", e);
          }

          const pendingReferral = window.sessionStorage.getItem('pendingReferral');
          let referredBy = window.localStorage.getItem('referredBy');

          if (pendingReferral && !referredBy && pendingReferral !== referralCode) {
            window.localStorage.setItem('referredBy', pendingReferral);
            coins += 5;
            window.localStorage.setItem('coins', coins.toString());
            
            try {
              const referrerDoc = await getDoc(doc(db, 'referral_codes', pendingReferral));
              if (referrerDoc.exists()) {
                const referrerId = referrerDoc.data().userId;
                const rUserDocRef = doc(db, 'user_data', referrerId);
                const rUserDoc = await getDoc(rUserDocRef);
                if (rUserDoc.exists()) {
                  const rData = rUserDoc.data();
                  let rCoins = parseInt(rData?.data?.coins || '0', 10);
                  rCoins += 10;
                  await updateDoc(rUserDocRef, { 'data.coins': rCoins.toString() });
                }
              }
            } catch (e) {
               console.error("getDoc/updateDoc referral error", e);
            }
            window.sessionStorage.removeItem('pendingReferral');
          }
        } catch(e) {
          console.error("Referral outer error", e);
        }
`;

// It's easier to just match the outer try/catch and replace it completely.
// Let's replace the whole referral logic block.
const regex = /        try \{\n          const \{ doc, setDoc, getDoc, updateDoc \} = await import\('firebase\/firestore'\);[\s\S]*?          console\.error\("Referral error", e\);\n        \}/;

code = code.replace(regex, injectLogic.trim().substring(injectLogic.indexOf('try {')));

fs.writeFileSync('src/App.tsx', code);
console.log('App layout referral debug patched');
