import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getMessaging, getToken, isSupported } from 'firebase/messaging';

const firebaseConfig = {
  projectId: "cedar-anagram-707pf",
  appId: "1:613366179439:web:751c4decc2f3899d60cf9a",
  apiKey: "AIzaSyAMJV1PDA6RE3BzPc0EOJ4rhuMojhD3QTY",
  authDomain: "cedar-anagram-707pf.firebaseapp.com",
  storageBucket: "cedar-anagram-707pf.firebasestorage.app",
  messagingSenderId: "613366179439",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "ai-studio-jeepracticehub-2f74b451-51e2-47dc-97fb-931ef7246151");
export const auth = getAuth(app);

// Initialize Firebase Cloud Messaging
export const messaging = async () => {
  const supported = await isSupported();
  if (supported) {
    return getMessaging(app);
  }
  return null;
};

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const msg = await messaging();
      if (msg) {
        // You will need to generate a VAPID key in the Firebase Console:
        // Project Settings -> Cloud Messaging -> Web Push certificates -> Generate Key Pair
        const token = await getToken(msg, {
          vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
        });
        return token;
      }
    }
  } catch (error) {
    console.error('An error occurred while retrieving token. ', error);
  }
  return null;
};
