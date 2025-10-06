import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

export default function ShoppingCart() {
  const { cartItems, isCartOpen } = useContext(CartContext);

  return (
    <div className={`shopping-cart-overlay ${isCartOpen ? "open" : ""}`}>
      <div className={`shopping-cart`}>
        <CartHeader />

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
        )}

        <CartTotal items={cartItems} />
        <CartActions />
      </div>
    </div>
  );
}
