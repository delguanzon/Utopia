import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import 'firebase/firestore';
import 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA6aWldr3fMNXGWlwv7MRdwNw_paNX9f8s',
  authDomain: 'utopia-android.firebaseapp.com',
  projectId: 'utopia-android',
  storageBucket: 'utopia-android.appspot.com',
  messagingSenderId: '971460527423',
  appId: '1:971460527423:web:1ad0aaf8188a30c40fbf8a',
};

const app = initializeApp(firebaseConfig);

// let app;

// if (firebase.apps.length === 0) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
