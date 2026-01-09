import { createSlice } from '@reduxjs/toolkit';
import fiddleImg from '../assets/fiddle.jpg';
import snakeImg from '../assets/snake.jpg';
import aloeImg from '../assets/aloe.jpg';
import monsteraImg from '../assets/monstera.jpg';
import pothosImg from '../assets/pothos.jpg';
import peaceImg from '../assets/peace.jpg';

const initialState = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 30, category: 'Large', image: fiddleImg },
  { id: 2, name: 'Snake Plant', price: 20, category: 'Medium', image: snakeImg },
  { id: 3, name: 'Aloe Vera', price: 15, category: 'Small', image: aloeImg },
  { id: 4, name: 'Monstera', price: 25, category: 'Large', image: monsteraImg },
  { id: 5, name: 'Pothos', price: 18, category: 'Medium', image: pothosImg },
  { id: 6, name: 'Peace Lily', price: 22, category: 'Small', image: peaceImg },
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
