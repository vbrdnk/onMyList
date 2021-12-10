import {
  getFirestore,
  doc,
  setDoc,
} from 'firebase/firestore';
import firebaseApp from './firebase';

import { UserDTO } from './mappers/user.mapper';

const db = getFirestore(firebaseApp);

const createUser = async (uid: string, data: UserDTO): Promise<void> => {
  const userDocRef = await doc(db, `users/${uid}`);
  return setDoc(userDocRef, data, { merge: true });
};


export { createUser };
