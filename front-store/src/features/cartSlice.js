import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
    isCartOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const indexProduct = state.data.findIndex((p) => p.id === action.payload);
      if (indexProduct !== -1) {
        state.data.splice(indexProduct, 1);
      }
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const { addToCart, removeFromCart, closeCart, openCart } = authSlice.actions;
export default authSlice.reducer;
