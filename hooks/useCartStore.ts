import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveCart } from '../helpers';
import { RootState } from '../store';

export const useCartStore = () => {
  const dispatch = useDispatch();
  const { products, cartCounter, total } = useSelector(
    (state: RootState) => state.cart
  );

  return {};
};
