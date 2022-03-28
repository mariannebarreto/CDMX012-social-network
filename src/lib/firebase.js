/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { onNavigate } from '../main.js';

// Your web app's Firebase configuration
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_uPjnOcNCFnIvon8gHMvQKhm0h3DesHc',
  authDomain: 'meetarcade-d78e8.firebaseapp.com',
  databaseURL: 'https://meetarcade-d78e8-default-rtdb.firebaseio.com',
  projectId: 'meetarcade-d78e8',
  storageBucket: 'meetarcade-d78e8.appspot.com',
  messagingSenderId: '912563964006',
  appId: '1:912563964006:web:5466d454f38b635f25c5a7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create new users with email acc
export const createNewUsers = (username, email, password) => {
  const auth = getAuth(); // clave para au
  createUserWithEmailAndPassword(auth, email, password) // Crea el usuario
    .then((userCredential) => {
      console.log('User created');
      alert('User created');
      onNavigate('/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const authError = document.getElementById('pError');

      if (errorCode === 'auth/invalid-email') {
        authError.textContent = 'Write a valid mail example@gmail.com';
        alert('write a valid mail example@gmail.com');
      }
      if (errorCode === 'auth/weak-password') {
        authError.textContent = 'Your Password must have 6 characters at least';
        alert('Your Password must have 6 characters at least');
      }
      if (errorCode === 'auth/email-already-in-use') {
        authError.textContent = 'This email is in use, try another or logIn';
        alert('This email is in use, try another or logIn.');
      }
    });
};

// login with a registered email
export const shootIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('You are In!');
      onNavigate('/home');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password, try again.');
      }
      if (errorCode === 'auth/invalid-email') {
        alert('write a valid email');
      }
    });
};

// Google Login
export const googleSignIn = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      onNavigate('/');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// save date to firestore
const db = getFirestore(app); // Save registerData collection in fireStore

export const createAccount = (username, email, password) => {
  addDoc(collection(db, 'users'), {
    username,
    email,
    password,
  });
};
