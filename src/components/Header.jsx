import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/shop" className="shop-link">Shop</Link>
      <Link to="/" className="home-link">TERATAI</Link>
      <Link to="/cart" className="cart-link">Cart ({cartItems.length})</Link>
    </header>
  );
}
