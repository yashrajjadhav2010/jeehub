const fs = require('fs');

const code = `import { db } from './firebase';
import { doc, getDoc, setDoc, increment } from 'firebase/firestore';

export async function checkAILimit(userId: string | undefined): Promise<{ allowed: boolean; error?: string }> {
  const today = new Date().toISOString().split('T')[0];
  
  if (!userId) {
    return { allowed: false, error: "Please sign in to use Axiom AI." };
  }

  const getCoins = () => {
    return parseInt(window.localStorage.getItem('coins') || '0', 10);
  };

  try {
    const userRef = doc(db, 'ai_usage', userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const data = userSnap.data();
      if (data.date === today && data.count >= 10) {
        if (getCoins() > 0) {
          return { allowed: true };
        }
        return { allowed: false, error: "Daily limit reached! You have consumed your 10 free queries. Refer friends to earn coins for more requests!" };
      }
    }
    return { allowed: true };
  } catch (e) {
    console.error("Firestore AI limit check failed", e);
    // fallback
    let usage = { date: today, count: 0 };
    try {
      const limitData = localStorage.getItem(\`axiom_usage_\${userId}\`);
      if (limitData) {
        const parsed = JSON.parse(limitData);
        if (parsed.date === today) usage = parsed;
      }
    } catch (err) {}

    if (usage.count >= 10) {
      if (getCoins() > 0) {
        return { allowed: true };
      }
      return { allowed: false, error: "Daily limit reached! You have consumed your 10 free queries. Refer friends to earn coins for more requests!" };
    }
    return { allowed: true };
  }
}

export async function incrementAIUsage(userId: string | undefined) {
  if (!userId) return;
  const today = new Date().toISOString().split('T')[0];
  
  let currentCount = 0;
  try {
    const userRef = doc(db, 'ai_usage', userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists() && userSnap.data().date === today) {
       currentCount = userSnap.data().count;
       await setDoc(userRef, { count: increment(1) }, { merge: true });
    } else {
       await setDoc(userRef, { date: today, count: 1 }, { merge: true });
    }
  } catch (e) {
    let usage = { date: today, count: 0 };
    try {
      const limitData = localStorage.getItem(\`axiom_usage_\${userId}\`);
      if (limitData) {
        const parsed = JSON.parse(limitData);
        if (parsed.date === today) usage = parsed;
      }
    } catch (err) {}
    
    currentCount = usage.count;
    usage.count += 1;
    localStorage.setItem(\`axiom_usage_\${userId}\`, JSON.stringify(usage));
  }
  
  if (currentCount >= 10) {
    let coins = parseInt(window.localStorage.getItem('coins') || '0', 10);
    if (coins > 0) {
      coins -= 1;
      window.localStorage.setItem('coins', coins.toString());
      // Trigger debouncedSync manually so it saves to FB if implemented in syncKeys
      const event = new Event('storage');
      window.dispatchEvent(event);
    }
  }
}
`;

fs.writeFileSync('src/lib/aiUsage.ts', code);
console.log('aiUsage patched');
