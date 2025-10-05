import { useLoaderData } from "react-router-dom";

export function AddCartButton({price}) {

  return (
    <button className="add-to-cart-btn">
      <span>${price}</span>
      <span>Add to cart</span>
    </button>
  );
}