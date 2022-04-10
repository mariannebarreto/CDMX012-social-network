/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
export { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
export { getFirestore, collection, getDocs, doc, addDoc, deleteDoc, setDoc, query, orderBy, onSnapshot, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';







/* export async function showPosts() {
  const q = await query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((post) => {
      const postDocs = post.data();
      console.log(postDocs.date);
      renderPost(postDocs);
    });
  });
} */