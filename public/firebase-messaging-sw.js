importScripts("https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAmJDHqroB0_DAnNwDNSjC1kRofdHOsjF8",
  authDomain: "fcm-demo-774f4.firebaseapp.com",
  projectId: "fcm-demo-774f4",
  storageBucket: "fcm-demo-774f4.firebasestorage.app",
  messagingSenderId: "625663157",
  appId: "1:625663157:web:09264e3096b2feec8eb2fc",
  measurementId: "G-BFQWKTWBPX"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  
  const { title, body } = payload.data;

  self.registration.showNotification(title, {
    body,
    icon: '/favicon.ico',
  });
});
