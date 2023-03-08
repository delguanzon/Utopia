import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';

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

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
