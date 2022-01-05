import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBuWlenuJ1ffbS59c_FsDbS6bF6zlfPuNE",
  authDomain: "netflix-8e3f3.firebaseapp.com",
  projectId: "netflix-8e3f3",
  storageBucket: "netflix-8e3f3.appspot.com",
  messagingSenderId: "786629868583",
  appId: "1:786629868583:web:73e730017cf85d29d42202",
  measurementId: "G-27301FC72E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth();


export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}



export default db