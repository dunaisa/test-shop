import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CardArray } from "../../types/Card"

type CardsState = {
  cards: CardArray;
  isLoading: boolean;
  error: string;
};

const initialState: CardsState = {
  cards: {items: []},
  isLoading: false,
  error: '',
};

export const fetchCards = createAsyncThunk<CardArray, void>(
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
  reducers: {},
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