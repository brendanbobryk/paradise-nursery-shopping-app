import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../redux/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(increaseItem(item.id))}>+</button>
      <button onClick={() => dispatch(decreaseItem(item.id))}>-</button>
      <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
    </div>
  );
}
