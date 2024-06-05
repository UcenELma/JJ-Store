import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import authReducer from "../features/authSlice"
// import userReducer from "./users/userSlice";
// import productReducer from "./products/productSlice"
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
};

const reducers = combineReducers({
  auth: authReducer,
  // user: userReducer,
  // product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;