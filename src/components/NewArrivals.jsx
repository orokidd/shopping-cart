import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NewArrivals() {
  const { data } = useLoaderData();
  const newProducts = [data[4], data[5], data[6]];

  return (
    <section className="new-arrivals">
      <h2 className="new-arrivals-title">New Arrivals</h2>
      <p className="new-arrivals-description">Check out the latest products in our collection!</p>

      <div className="product-list">
        {newProducts.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.image} alt={product.title} className="product-image" />
            </Link>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
