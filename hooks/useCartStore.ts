import { doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { useSelector, useDispatch } from 'react-redux';
import { FirebaseDB } from '../firebase/config';
import { RootState } from '../store';
import { CartState } from '../store/cart/cartSlice';

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

  return { startNewOrder };
};
