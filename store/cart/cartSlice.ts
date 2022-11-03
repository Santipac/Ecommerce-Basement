import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartProducts {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface CartState {
  products: CartProducts[];
  cartCounter: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  cartCounter: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProducts>) => {
      ++state.cartCounter;
      state.products.push(action.payload);
      state.total = state.products.reduce(
        (acc, actual) => acc + actual.price,
        0
      );
    },
    cleanCart: state => {
      (state.products = []), (state.cartCounter = 0);
      state.total = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
