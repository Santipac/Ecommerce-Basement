import { CartProducts } from '../store/cart/cartSlice';

export const saveCart = (products: CartProducts[]) => {
  if (typeof window === 'undefined') return;

  const savedCart = localStorage.setItem('cartUser', JSON.stringify(products));

  return savedCart;
};
