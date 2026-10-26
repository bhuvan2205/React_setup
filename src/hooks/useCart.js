import { useDispatch, useSelector } from "react-redux";

export const useCart = () => {
  const { items: cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (total, item) => total + (item?.price / 100) * (item?.quantity ?? 1),
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
  };
};
