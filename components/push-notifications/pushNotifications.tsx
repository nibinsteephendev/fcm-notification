"use client";

import firebaseApp from "@/lib/firebase";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import React, { useEffect, useState } from "react";
// import { messaging, getToken, onMessage } from '@/lib/firebase';

export default function PushNotification() {
  const [token, setToken] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!token) return;
    try {
      await navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const messaging = getMessaging(firebaseApp);

    Notification.requestPermission().then(async (permission) => {
      if (permission === "granted") {
        const token = await getToken(messaging, {
          vapidKey: process.env.NEXT_PUBLIC_FIREBASE_KEY, // from Firebase → Project Settings → Cloud Messaging
        });
        setToken(token);

        if (token) {
          console.log("FCM Token:", token);
          // Send token to your server here if needed
        } else {
          console.warn("No registration token available.");
        }
      }
    });
    // Handle foreground messages
    onMessage(messaging, (payload) => {
      console.log("Message received in foreground:", payload);
      alert(payload?.notification?.title);
    });
  }, []);

  return (
    <div className="text-[30px] text-[#ffffff] w-full">
      <p>Push notification component mounted.</p>

      <p className=" flex justify-center text-center bg-[#ffffff] text-[#000000] mt-[50px] w-full text-[20px]">{token || "Fetching token..."}
      </p>
      <button className="bg-[#ffffff] text-[#000000] mt-[30px] rounded p-10 cursor-pointer" onClick={handleCopy}>{copied ? "Copied!" : "CLICK TO COPY"}</button>
    </div>
  );
}
