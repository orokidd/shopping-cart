import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import CartActions from "./CartActions";

export default function ShoppingCart() {
  const { cartItems, isCartOpen } = useContext(CartContext);

  return (
    <div className={`shopping-cart-overlay ${isCartOpen ? "open" : ""}`}>
      <div className={`shopping-cart`}>
        <CartHeader />

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}

        <CartTotal items={cartItems} />
      </div>
    </div>
  );
}
