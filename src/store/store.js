import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { storageReducer } from "../reducers/storageReducer";
import { filterReducer } from "../reducers/filterReducer";
import { feedbackSelectReducer } from "../reducers/feedbackSelectReducer";


const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({ 
  storage_reducer: storageReducer,
  filter_reducer: filterReducer,
  feedback_reducer: feedbackSelectReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)