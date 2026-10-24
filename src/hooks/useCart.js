import { useState } from "react";
import { initialCart } from "../utils/mockData";

export const useCart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = subtotal === 0 || subtotal >= 3000 ? 49 : 99;
  const total = subtotal + shipping;

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return {
    formatPrice,
    subtotal,
    total,
    shipping,
    cartItems,
    removeItem,
    updateQuantity,
  };
};
