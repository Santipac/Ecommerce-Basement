import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore/lite';
import { useSelector, useDispatch } from 'react-redux';
import { FirebaseDB } from '../firebase/config';
import { getOrdersFromFirestore } from '../helpers/getOrdersFromFirestore';
import { RootState } from '../store';
import { CartState } from '../store/cart/cartSlice';
import { Order } from '../types/orders';

export const useCartStore = () => {
  const dispatch = useDispatch();
  const { products, cartCounter, total } = useSelector(
    (state: RootState) => state.cart
  );
  const { uid } = useSelector((state: RootState) => state.user);

  const startNewOrder = async (order: CartState) => {
    const docReference = doc(FirebaseDB, `users/${uid}/orders/${order.id}`);
    const querySnapshot = await getDoc(docReference);
    if (!querySnapshot.exists()) {
      try {
        await setDoc(docReference, {
          id: order.id,
          totalPaid: order.total,
          totalProducts: order.cartCounter,
          products: order.products,
          createdAt: new Date(),
          user: uid,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  // const startGetOrders = async () => {
  //   const orders = await getOrdersFromFirestore(uid!);
  //   console.log(orders);
  //   return orders;
  // };

  return { startNewOrder };
};
