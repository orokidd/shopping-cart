import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Handbag } from "lucide-react";

export function Header() {
  const { cartItems, toggleCart } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/shop" className="shop-link">
        Shop
      </Link>
      <Link to="/" className="home-link">
        TERATAI
      </Link>
      <button className="cart-link" onClick={toggleCart}>
        <Handbag strokeWidth={1.5} size={18} />
        {cartItems.length > 0 ? <span className="cart-item-count">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span> : null}
      </button>
    </header>
  );
}
