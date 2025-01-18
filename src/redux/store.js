// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './slices/slice';

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export default store;
