// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmJDHqroB0_DAnNwDNSjC1kRofdHOsjF8",
  authDomain: "fcm-demo-774f4.firebaseapp.com",
  projectId: "fcm-demo-774f4",
  storageBucket: "fcm-demo-774f4.firebasestorage.app",
  messagingSenderId: "625663157",
  appId: "1:625663157:web:09264e3096b2feec8eb2fc",
  measurementId: "G-BFQWKTWBPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

export { messaging, onMessage, getToken, analytics };