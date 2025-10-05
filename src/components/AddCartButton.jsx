import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function AddCartButton({price, id}) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id: id, price: price });
  };

  return (
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      <span>${price}</span>
      <span>Add to cart</span>
    </button>
  );
}