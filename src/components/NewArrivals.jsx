import { useLoaderData } from "react-router-dom";

export default function NewArrivals() {
    const { products } = useLoaderData();

  return (
    <section className="new-arrivals">
      <h2 className="new-arrivals-title">New Arrivals</h2>
      <p>Check out the latest products in our collection!</p>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
    </section>
  );
}