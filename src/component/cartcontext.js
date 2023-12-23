import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (itemName, itemPrice) => {
    const newItem = {
      name: itemName,
      price: itemPrice,
    };

    setCartItems([...cartItems, newItem]);
    setTotalPrice(totalPrice + itemPrice);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
