import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  }
  
  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  }
  
  const clearCart = () => {
    setCartItems([]);
  }
  
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
  
  return (
    <div>
      <h2><FaShoppingCart/> Carrito de Compras</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeItemFromCart(item)}>Restar</button>
          <button onClick={() => addItemToCart(item)}>Sumar</button>
        </div>
      ))}
      <button onClick={clearCart}>Vaciar Carrito</button>
      <p>Total: ${totalPrice}</p>
    </div>
  );
}

export default ShoppingCart;
