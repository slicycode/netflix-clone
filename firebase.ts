// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJfs1BAcj6C5TngmISq8lm9aYMfn5yIws",
  authDomain: "netflix-clone-57d54.firebaseapp.com",
  projectId: "netflix-clone-57d54",
  storageBucket: "netflix-clone-57d54.appspot.com",
  messagingSenderId: "295202488182",
  appId: "1:295202488182:web:d4aade4f176ac4400ec457",
  measurementId: "G-GLE5HGP413"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }