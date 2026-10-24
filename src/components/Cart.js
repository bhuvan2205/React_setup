import { useCart } from "../hooks/useCart";

const Cart = () => {
  const {
    formatPrice,
    subtotal,
    total,
    shipping,
    cartItems,
    removeItem,
    updateQuantity,
  } = useCart();

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h1>My Shopping Cart</h1>
        <span>{cartItems.length} Products</span>
      </header>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 🛒</h2>
          <p>Add some products to get started!</p>
          <button onClick={() => window.history.back()}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <section className="cart-products">
            <div className="cart-column-header">
              <span>PRODUCT</span>
              <span>PRICE</span>
              <span>QUANTITY</span>
              <span>TOTAL</span>
            </div>

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="product-info">
                  <img src={item.image} alt={item.name} />

                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="product-price">{formatPrice(item.price)}</div>

                <div className="quantity-control">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    +
                  </button>
                </div>

                <div className="product-total">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))}

            <button
              className="continue-btn"
              onClick={() => window.history.back()}
            >
              ← Continue Shopping
            </button>
          </section>

          <aside className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
            </div>

            <div className="shipping-message">
              {subtotal >= 3000
                ? "You've unlocked free shipping!"
                : `Spend ${formatPrice(
                    3000 - subtotal,
                  )} more for free shipping.`}
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>

            <button
              className="checkout-btn"
              onClick={() => alert("Proceeding to checkout!")}
            >
              Proceed to Checkout →
            </button>

            <p className="secure-message">
              🔒 Secure checkout · Your information is protected
            </p>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;
