import React from 'react';
import { useCart } from './CartContext';

export default function Panier() {
  const { cart, totalPrice } = useCart();

  return (
    <div className="product-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} width="100" />
                <p>{item.name}</p>
                <p>${item.price}</p>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}