import { useLoaderData, useParams } from "react-router-dom";
import { AddCartButton } from "../components/Product/AddCartButton";
import ProductImage from "../components/Product/ProductImage";
import { useState } from "react";
import Quantity from "../components/Product/Quantity";
import ProductDetail from "../components/Product/ProductDetail";

export default function Product() {
  const { data } = useLoaderData();
  const { id } = useParams();

  return (
    <>
      {data
        .filter((product) => product.id === parseInt(id))
        .map((product) => (
          <div key={product.id} className="product-section">
            <ProductImage product={product} />
            <ProductDetail product={product} />
          </div>
        ))}
    </>
  );
}
