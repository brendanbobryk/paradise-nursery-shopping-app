import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {id: 1, name: 'Fiddle Leaf Fig', price: 30, category: 'Large', image: '/assets/fiddle.jpg'},
  {id: 2, name: 'Snake Plant', price: 20, category: 'Medium', image: '/assets/snake.jpg'},
  {id: 3, name: 'Aloe Vera', price: 15, category: 'Small', image: '/assets/aloe.jpg'},
  {id: 4, name: 'Monstera', price: 25, category: 'Large', image: '/assets/monstera.jpg'},
  {id: 5, name: 'Pothos', price: 18, category: 'Medium', image: '/assets/pothos.jpg'},
  {id: 6, name: 'Peace Lily', price: 22, category: 'Small', image: '/assets/peace.jpg'},
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
