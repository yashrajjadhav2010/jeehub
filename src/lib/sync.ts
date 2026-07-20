import { db } from './firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

export const syncKeys = [
  'errorBook',
  'userStats',
  'studyPlanExpiry',
  'lastStudyPlan',
  'axiom_usage_limit',
  'axiom_chat_history',
  'lastQuizResult',
  'systemPrefs',
  'operatorName',
  'operatorPfp',
  'activeChallenge',
  'feedbackShown_v1',
  'mobileNoticeDismissed',
  'jee_tapasya_quick_notes',
  'coins',
  'referralCode',
  'referredBy',
  'totalTimeSpent'
];

let originalSetItem: any = null;
let isPopulating = false;

export const setupStorageInterceptor = (userId: string) => {
  if (typeof window === 'undefined') return;
  if (!originalSetItem) {
    originalSetItem = window.localStorage.setItem;
    
    window.localStorage.setItem = function(key, value) {
      originalSetItem.apply(this, [key, value]);
      
      if (!isPopulating && syncKeys.includes(key)) {
        debouncedSync(userId);
      }
    };
  }
};

let syncTimeout: any;
export const debouncedSync = (userId: string) => {
  clearTimeout(syncTimeout);
  syncTimeout = setTimeout(() => {
    syncToFirebase(userId);
  }, 2000); 
};

export const syncToFirebase = async (userId: string) => {
  if (!userId) return;
  
  const data: Record<string, any> = {};
  
  syncKeys.forEach(key => {
    // using direct access to avoid any potential loops if interceptor breaks
    const val = window.localStorage.getItem(key);
    if (val) {
      try {
        data[key] = JSON.parse(val);
      } catch {
        data[key] = val; 
      }
    }
  });
  
  try {
    const userDocRef = doc(db, 'user_data', userId);
    
    const updatePayload: any = {
      data,
      updated_at: serverTimestamp()
    };
    
    const operatorName = window.localStorage.getItem('operatorName');
    if (operatorName) {
      updatePayload.name = operatorName;
    }
    
    if (userId.startsWith('guest_')) {
      updatePayload.email = 'Guest User';
      updatePayload.isGuest = true;
    }
    
    await setDoc(userDocRef, updatePayload, { merge: true });
  } catch (error: any) {
    console.error('Failed to sync to Firebase:', error.message || error);
  }
};

export const fetchAndPopulateStorage = async (userId: string) => {
  if (!userId) return false;
  
  try {
    const userDocRef = doc(db, 'user_data', userId);
    const docSnap = await getDoc(userDocRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data?.data) {
        isPopulating = true;
        const userData = data.data;
        Object.keys(userData).forEach(key => {
          const val = userData[key];
          if (typeof val === 'string') {
            window.localStorage.setItem(key, val);
          } else {
            window.localStorage.setItem(key, JSON.stringify(val));
          }
        });
        isPopulating = false;
        return true; 
      }
    }
  } catch (error: any) {
    console.error('Failed to fetch from Firebase:', error.message || error);
  }
  return false;
};
