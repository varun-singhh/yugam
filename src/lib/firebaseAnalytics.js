import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCcCPH1zE2DnuPc244bRJe0zE6TBsdFWJU",
  authDomain: "yugam-live.firebaseapp.com",
  projectId: "yugam-live",
  storageBucket: "yugam-live.firebasestorage.app",
  messagingSenderId: "930842489265",
  appId: "1:930842489265:web:68d5ed3a0e72e3aba20d90",
  measurementId: "G-078W4PQ06F"
};


const app = initializeApp(firebaseConfig);
let analytics;


if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };