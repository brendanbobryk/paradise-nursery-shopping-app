import { configureStore, createSlice } from '@reduxjs/toolkit';
import productsData from './productsSlice';

// Keep your existing products slice
const productsSlice = createSlice({
  name: 'products',
  initialState: productsData,
  reducers: {},
});

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer, // only products slice for now
  },
});
