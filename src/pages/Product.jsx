import { useLoaderData, useParams } from "react-router-dom";
import { AddCartButton } from "../components/AddCartButton";
import { useState } from "react";
import Quantity from "../components/Product/Quantity";

export default function Product() {
  const { data } = useLoaderData();
  const { id } = useParams();
  const [currentQuantity, setCurrentQuantity] = useState(1);

  return (
    <>
      {data
        .filter((product) => product.id === parseInt(id))
        .map((product) => (
          <div key={product.id} className="product-section">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-detail">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <Quantity quantity={currentQuantity} setQuantity={setCurrentQuantity} />
              <AddCartButton product={product} quantity={currentQuantity} setCurrentQuantity={setCurrentQuantity} />
            </div>
          </div>
        ))}
    </>
  );
}