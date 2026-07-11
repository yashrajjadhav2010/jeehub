importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');

firebase.initializeApp({
  projectId: "cedar-anagram-707pf",
  appId: "1:613366179439:web:751c4decc2f3899d60cf9a",
  apiKey: "AIzaSyAMJV1PDA6RE3BzPc0EOJ4rhuMojhD3QTY",
  authDomain: "cedar-anagram-707pf.firebaseapp.com",
  storageBucket: "cedar-anagram-707pf.firebasestorage.app",
  messagingSenderId: "613366179439",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png', // Create a 192x192 icon in your public folder for best results
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
