import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwrI63-NNUF7tf_eJHuZ0y03qChUtl6OI",
  authDomain: "civicpulse-55a6b.firebaseapp.com",
  projectId: "civicpulse-55a6b",
  storageBucket: "civicpulse-55a6b.firebasestorage.app",
  messagingSenderId: "300172219103",
  appId: "1:300172219103:web:d74842ce23a82328de4f6a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
