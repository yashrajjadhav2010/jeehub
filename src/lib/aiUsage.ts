import { db } from './firebase';
import { doc, getDoc, setDoc, increment } from 'firebase/firestore';

export async function checkAILimit(userId: string | undefined): Promise<{ allowed: boolean; error?: string }> {
  const today = new Date().toISOString().split('T')[0];
  
  if (!userId) {
    return { allowed: false, error: "Please sign in to use Axiom AI." };
  }

  try {
    const userRef = doc(db, 'ai_usage', userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      if (data.date === today && data.count >= 10) {
        return { allowed: false, error: "Daily limit reached! You have consumed your 10 free queries for today." };
      }
    }
    return { allowed: true };
  } catch (e) {
    console.error("Firestore AI limit check failed", e);
    // fallback
    let usage = { date: today, count: 0 };
    try {
      const limitData = localStorage.getItem(`axiom_usage_${userId}`);
      if (limitData) {
        const parsed = JSON.parse(limitData);
        if (parsed.date === today) usage = parsed;
      }
    } catch (err) {}
    if (usage.count >= 10) {
      return { allowed: false, error: "Daily limit reached! You have consumed your 10 free queries for today." };
    }
    return { allowed: true };
  }
}

export async function incrementAIUsage(userId: string | undefined) {
  if (!userId) return;
  const today = new Date().toISOString().split('T')[0];
  
  try {
    const userRef = doc(db, 'ai_usage', userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists() && userSnap.data().date === today) {
       await setDoc(userRef, { count: increment(1) }, { merge: true });
    } else {
       await setDoc(userRef, { date: today, count: 1 }, { merge: true });
    }
  } catch (e) {
    let usage = { date: today, count: 0 };
    try {
      const limitData = localStorage.getItem(`axiom_usage_${userId}`);
      if (limitData) {
        const parsed = JSON.parse(limitData);
        if (parsed.date === today) usage = parsed;
      }
    } catch (err) {}
    usage.count += 1;
    localStorage.setItem(`axiom_usage_${userId}`, JSON.stringify(usage));
  }
}
