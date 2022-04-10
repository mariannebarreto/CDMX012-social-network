import { doc, deleteDoc } from './firebase-imports.js';
import { db } from './firebase-config.js';

export const deletePost = (docRef) => {
  deleteDoc(doc(db, 'posts', docRef));
};
