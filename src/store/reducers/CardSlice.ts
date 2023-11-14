import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Card } from "../../types/Card"

type CardState = {
  cards: Card[];
  isLoading: boolean;
  error: string;
};

const initialState: CardState = {
  cards: [],
  isLoading: false,
  error: '',
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    //Запрос карточек
    fetchCards(state) {
      state.isLoading = true;
    },
    //Запрос карточек - успешно
    fetchCardsSuccess(state, action: PayloadAction<Card[]>) {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload;

    },
    //Запрос карточек - ошибка
    fetchCardsError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;

    },
  }
})

export default cardSlice.reducer;