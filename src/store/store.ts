import { combineReducers, configureStore } from '@reduxjs/toolkit';

import cardsReducer from './reducers/CardsSlice';
import cartReducer from './reducers/CartSlice';

const rootReducer = combineReducers({
  cards: cardsReducer,
  cart: cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']