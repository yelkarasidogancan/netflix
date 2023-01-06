// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyBAKHc6xrtBlcY5ge2xhcjHFSP8cA64gfA
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-react-1aa2a.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-react-1aa2a
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-react-1aa2a.appspot.com
// REACT_APP_MESSAGING_SENDER=2656207395
// REACT_APP_APP_ID=1:2656207395:web:d26016605aaaa3e2cfe796

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
