import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../types/Cart";

const initialState: Cart = {
  items: [],
  totalValue: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    toggleCard(state, action) {
      const isCardAdd = state.items.some(item => item.id === action.payload.id)
      if (isCardAdd) {
        state.items = state.items.filter(item => item.id !== action.payload.id)
      } else {
        state.items.push(action.payload)
      }
    },
    deleteCard(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
  
})

export default cartSlice.reducer;

// export const {addCard, removeCard} = cartSlice.actions;

export const {toggleCard, deleteCard} = cartSlice.actions;

