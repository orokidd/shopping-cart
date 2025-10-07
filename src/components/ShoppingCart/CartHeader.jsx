import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function CartHeader() {
  const { toggleCart } = useContext(CartContext);

  return (
    <div className="cart-header">
      <h2>Cart</h2>
      <button className="close-cart-btn" onClick={toggleCart}>
        X
      </button>
    </div>
  );
}
