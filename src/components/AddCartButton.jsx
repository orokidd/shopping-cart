import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function AddCartButton({product, quantity, setCurrentQuantity}) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setCurrentQuantity(1);
  };

  return (
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      <span>${product.price}</span>
      <span>Add to cart</span>
    </button>
  );
}