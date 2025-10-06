import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function ShoppingCart() {
  const { cartItems, removeFromCart, isCartOpen, toggleCart, addToCart } = useContext(CartContext);

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
                        <div className="top">
                            <span className="cart-item-title">{item.title.split(" ").slice(0, 5).join(" ")}</span>
                        </div>
                        <div className="bottom">
                            <div className="quantity-controls">
                                <button className="increase-quantity-btn" onClick={() => addToCart(item)}>+</button>
                                <span className="cart-item-price">{item.quantity}</span>
                                <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>-</button>
                            </div>
                            <span className="cart-item-price">${(item.price)}</span>
                        </div>
                    </div>
                </div>
            ))}
          </>
        )}
        <div className="cart-total">
          <span>Subtotal:</span>
          <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
        </div>
        <div className="cart-actions">
          <button onClick={() => console.log("Proceed to Checkout")}>Checkout</button>
        </div>
      </div>
    </div>
  );
}