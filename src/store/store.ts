import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cardsReducer from './reducers/CardsSlice';
import cartReducer from './reducers/CartSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['card'],
}

const rootReducer = combineReducers({
  cards: cardsReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })

export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch

export const persistor = persistStore(setupStore)