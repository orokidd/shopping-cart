import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function ShoppingCart() {
  const { cartItems, removeFromCart, isCartOpen, toggleCart } = useContext(CartContext);

  return (
    <div className={`shopping-cart-overlay ${isCartOpen ? "open" : ""}`}>
      <div className={`shopping-cart`}>
        <button className="close-cart-btn" onClick={toggleCart}>Close</button>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}