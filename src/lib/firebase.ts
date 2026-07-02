import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
