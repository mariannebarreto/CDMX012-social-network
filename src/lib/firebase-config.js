/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp, getAuth, getFirestore } from './firebase-imports.js';

// Your web app's Firebase configuration
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_ThiwA5H72obNdUcQfmlTuYNTMzCtpgg',
  authDomain: 'meet-arcade.firebaseapp.com',
  projectId: 'meet-arcade',
  storageBucket: 'meet-arcade.appspot.com',
  messagingSenderId: '431563958432',
  appId: '1:431563958432:web:79a0ed6e749cdac23bc1c5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
