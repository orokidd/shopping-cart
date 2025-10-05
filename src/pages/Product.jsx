import { useLoaderData, useParams } from "react-router-dom";

export default function Product() {
  const { data } = useLoaderData();
  const { id } = useParams();

  return (
    <section className="product-page">
      {data
        .filter((product) => product.id === parseInt(id))
        .map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
    </section>
  );
}
