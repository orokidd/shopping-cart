import { useLoaderData, useParams } from "react-router-dom";
import ProductImage from "../components/Product/ProductImage";
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
