import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import cartReducer from '../redux/cartSlice'
import productsReducer from '../redux/productsSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    persistedReducer
  },
  middleware: [thunk]
})

export const persistor = persistStore(store)
