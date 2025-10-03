import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <Link to="/shop" className="shop-link">Shop</Link>
      <Link to="/" className="home-link">TERATAI</Link>
      <Link to="/cart" className="cart-link">Cart</Link>
    </header>
  );
}
