import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total items: {cart.totalQuantity}</p>
      <p>Total price: ${cart.totalPrice}</p>
      {cart.items.map(item => <CartItem key={item.id} item={item} />)}
      <button onClick={() => alert("Coming Soon!")}>Checkout</button>
      <button onClick={() => navigate("/products")}>Continue Shopping</button>
    </div>
  );
}
