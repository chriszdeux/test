import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { storageReducer } from "../reducers/storageReducer";
import { filterReducer } from "../reducers/filterReducer";


const persistConfig = {
  key: 'main-root',
  storage,
}

const reducers = combineReducers({ 
  storage_reducer: storageReducer,
  filter_reducer: filterReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)