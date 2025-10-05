import { useLoaderData, useParams } from "react-router-dom";
import { AddCartButton } from "../components/AddCartButton";

export default function Product() {
  const { data } = useLoaderData();
  const { id } = useParams();

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
              <AddCartButton price={product.price} />
            </div>
          </div>
        ))}
    </>
  );
}
