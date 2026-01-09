import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header>
      <h1>Paradise Nursery</h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          🛒 {totalQuantity}
        </Link>
      </nav>
    </header>
  );
}
