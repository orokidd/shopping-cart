import { useLoaderData } from "react-router-dom";

export function AddCartButton({price}) {

  return (
    <button className="add-cart-button">
      <span>${price}</span>
      <span>Add to cart</span>
    </button>
  );
}