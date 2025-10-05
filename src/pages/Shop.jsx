import { useLoaderData, Link } from "react-router-dom";

export default function Shop() {
  const { data } = useLoaderData();

  return (
    <section className="shop-page">
      <div className="category">
        <p>All products</p>
        <p>Men</p>
        <p>Women</p>
        <p>Jewelry</p>
      </div>

      <div className="product-list shop">
        {data.map((product) => (
          <div className="product-item" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
