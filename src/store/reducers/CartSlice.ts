import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem } from "../../types/Cart";

const initialState: Cart = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    toggleCard(state, action: PayloadAction<CartItem>) {
      const isCardAdd = state.items.some(item => item.id === action.payload.id)
      if (!isCardAdd) {
        state.items.push(action.payload)
      } 
    },
    deleteCard(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    countPrice(state) {
      const accPrice = state.items.reduce((acc, item) => {
        return acc + item.price
      }, 0)
      state.totalPrice = accPrice
    },
  },
  
})

export default cartSlice.reducer;

export const {toggleCard, deleteCard, countPrice} = cartSlice.actions;

