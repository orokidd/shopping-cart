import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Header() {
  const { cartItems, toggleCart } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/shop" className="shop-link">Shop</Link>
      <Link to="/" className="home-link">TERATAI</Link>
      <button className="cart-link" onClick={toggleCart}>Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})</button>
    </header>
  );
}
