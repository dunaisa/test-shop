import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Card, CardArray } from "../../types/Card"

type CardsState = {
  cards: CardArray;
  isLoading: boolean;
  error: string;
  // isClicked: boolean;
  // btnText: string;
};

const initialState: CardsState = {
  cards: {items: []},
  isLoading: false,
  error: '',
  // isClicked: false,
  // btnText: ''
};

export const fetchCards = createAsyncThunk(
  "cards/fetchCards",
  async(_, thunkAPI) => {
    try {
      const res = await axios.get<CardArray>('https://appevent.ru/dev/task1/catalog');
      return res.data
    } catch {
        return thunkAPI.rejectWithValue('Something went wrong')
    }
    
  }
  
)

export const cardsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {

    toggleCard(state, action) {
      const allCards = state.cards
      console.log(allCards)
      // allCards.map((card) => card = action.payload)
    },
    

    // addCardToCart(state, action) {
    //   const allCards = state.cards.items
    //   allCards.map((card) => card = action.payload)
    // },
    // setTextCard(state, action) {
      
    //   if(!state.isClicked) {
    //     state.btnText = 'Добавить'
    //   } else {
    //     state.btnText = 'Удалить'
    //   }
    // },
    // toogleTextCard(state, action) {
    //   if(!state.isClicked) {
    //     state.btnText = action.payload
    //   } else {
    //     state.btnText = action.payload
    //   }
    // },
    // removeCardFromCart(state, action) {
      
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  }
})

export default cardsSlice.reducer;
// export const {addCardToCart} = cardsSlice.actions;
export const {toggleCard} = cardsSlice.actions;