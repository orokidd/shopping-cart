import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function ShoppingCart() {
  const { cartItems, removeFromCart, isCartOpen, toggleCart } = useContext(CartContext);

  return (
    <div className={`shopping-cart-overlay ${isCartOpen ? "open" : ""}`}>
      <div className={`shopping-cart`}>
        <div className="cart-header">
            <h2>Cart</h2>
            <button className="close-cart-btn" onClick={toggleCart}>X</button>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="cart-item-details">
                  <span className="cart-item-title">{item.title}</span>
                  <span className="cart-item-price">${item.price} x {item.quantity}</span>
                  <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}