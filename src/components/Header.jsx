import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/shop" className="shop-button">Shop</Link>
      <Link to="/" className="home-button">Home</Link>
      <Link to="/cart" className="cart-button">Cart</Link>
    </header>
  );
}
