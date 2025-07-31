'use client';

import { getToken, messaging, onMessage } from '@/lib/firebase';
import React, { useEffect } from 'react';
// import { messaging, getToken, onMessage } from '@/lib/firebase';

export default function PushNotification() {
  useEffect(() => {
    Notification.requestPermission().then(async (permission) => {
      if (permission === 'granted') {
        const token = await getToken(messaging, {
          vapidKey: process.env.NEXT_PUBLIC_FIREBASE_KEY, // from Firebase → Project Settings → Cloud Messaging
        });

        if (token) {
          console.log('FCM Token:', token);
          // Send token to your server here if needed
        } else {
          console.warn('No registration token available.');
        }
      }
    });

    // Handle foreground messages
    onMessage(messaging, (payload) => {
      console.log('Message received in foreground:', payload);
      alert(payload?.notification?.title);
    });
  }, []);

  return <div>Push notification component mounted.</div>;
}
