import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartProducts {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartState {
  id?: string;
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
    addProduct: (state, { payload }: PayloadAction<CartProducts>) => {
      const isDuplicated = state.products.find(
        product => product.id === payload.id
      );
      if (isDuplicated) return;
      ++state.cartCounter;
      state.products.push({ ...payload, quantity: 1 });
      state.total = state.products.reduce(
        (acc, actual) => acc + actual.price,
        0
      );
    },
    cleanCart: state => {
      (state.products = []), (state.cartCounter = 0);
      state.total = 0;
    },
    SumQuantity: (state, { payload }: PayloadAction<number>) => {
      ++state.cartCounter;
      state.products.map(product => {
        if (product.id === payload) {
          product.quantity++;
          state.total = Math.round(state.total + product.price);
        }
      });
    },
    resQuantity: (state, { payload }: PayloadAction<number>) => {
      --state.cartCounter;
      const itemToDelete = state.products.find(
        product => product.id === payload
      );
      state.products.map(product => {
        if (product.id === payload) {
          product.quantity--;
          state.total = Math.round(state.total - product.price);
          if (product.quantity < 1) {
            const newCart = state.products.filter(
              product => product.id !== itemToDelete?.id
            );
            state.products = newCart;
          }
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, cleanCart, SumQuantity, resQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
