import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      // state = [] --> Not going to work
      state.items.length = 0;
    },
    removeFromCart: (state) => {
      // console.log(state) ---> Prints the Proxy Object
      console.log(current(state));
      state.items.pop();
    },
  },
});

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
