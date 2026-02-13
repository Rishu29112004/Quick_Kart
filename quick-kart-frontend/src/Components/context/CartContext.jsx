import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(()=>{
    const savedCart = localStorage.getItem("cartItem")
    return savedCart? JSON.parse(savedCart):[]
  });

  useEffect(()=>{
    localStorage.setItem("cartItem", JSON.stringify(cartItem))
  },[cartItem])
  // Add to cart
  const addToCart = (product) => {
    setCartItem((prev) => {
      const existing = prev.find((item) => item._id === product._id);

      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (_id) => {
    setCartItem((prev) => prev.filter((item) => item._id !== _id));
  };

  // Increment quantity
  const increment = (_id) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity
  const decrement = (_id) => {
    setCartItem((prev) =>
      prev
        .map((item) =>
          item._id === _id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // 0 quantity wale item remove ho jaye
    );
  };

    const total = cartItem.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  return (
    <CartContext.Provider
      value={{ cartItem, addToCart, removeFromCart, increment, decrement, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
