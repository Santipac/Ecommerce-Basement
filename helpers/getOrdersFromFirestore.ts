import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const getOrdersFromFirestore = async (uid: string) => {
  const PATH = `users/${uid}/orders`;
  const collectionReference = collection(FirebaseDB, PATH);
  const { docs } = await getDocs(collectionReference);
  const orders = docs.map(doc => doc.data());
  return orders;
};
