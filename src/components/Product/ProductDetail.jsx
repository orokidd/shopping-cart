import { AddCartButton } from "./AddCartButton";
import Quantity from "./Quantity";
import { useState } from "react";

export default function ProductDetail({ product }) {
    const [currentQuantity, setCurrentQuantity] = useState(1);

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Quantity quantity={currentQuantity} setQuantity={setCurrentQuantity} />
      <AddCartButton product={product} quantity={currentQuantity} setCurrentQuantity={setCurrentQuantity} />
    </div>
  );
}
