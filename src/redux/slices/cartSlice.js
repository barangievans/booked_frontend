import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    purchaseItems: [],
    lendingItems: [],
  },
  reducers: {
    addToPurchaseCart: (state, action) => {
      state.purchaseItems.push(action.payload);
    },
    addToLendingCart: (state, action) => {
      state.lendingItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const { cartType, id } = action.payload;
      state[cartType] = state[cartType].filter(item => item.id !== id);
    },
  },
});

export const { addToPurchaseCart, addToLendingCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
