import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAt99lSo6IZjj6PafXdX9WYTglmgkFGV4Q',
  authDomain: 'ian-9a6ef.firebaseapp.com',
  projectId: 'ian-9a6ef',
  storageBucket: 'ian-9a6ef.appspot.com',
  messagingSenderId: '782053154065',
  appId: '1:782053154065:web:4ff43f6e4168de19b880b0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
