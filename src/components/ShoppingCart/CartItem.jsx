import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function CartItem({ item }) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="cart-item-details">
        <div className="top">
          <span className="cart-item-title">{item.title.split(" ").slice(0, 5).join(" ")}</span>
        </div>

        <div className="bottom">
          <div className="quantity-controls">
            <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
              -
            </button>
            <span className="cart-item-quantity">{item.quantity}</span>
            <button className="increase-quantity-btn" onClick={() => addToCart(item)}>
              +
            </button>
          </div>
          <span className="cart-item-price">${item.price}</span>
        </div>
      </div>
    </div>
  );
}
