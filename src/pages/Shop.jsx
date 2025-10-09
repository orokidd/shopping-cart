import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

export default function Shop() {
  const { data } = useLoaderData();
  const [category, setCategory] = useState("all");

  const categoryMen = data.filter((product) => product.category === "men's clothing");
  const categoryWomen = data.filter((product) => product.category === "women's clothing");
  const categoryJewelery = data.filter((product) => product.category === "jewelery");

  return (
    <section className="shop-page">
      <div className="shop-category">
        <button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>All products</button>
        <button className={category === "men" ? "active" : ""} onClick={() => setCategory("men")}>Men</button>
        <button className={category === "women" ? "active" : ""} onClick={() => setCategory("women")}>Women</button>
        <button className={category === "jewelery" ? "active" : ""} onClick={() => setCategory("jewelery")}>Jewelry</button>
      </div>

      <div className="product-list shop">
        {(category === "all" ? data : category === "men" ? categoryMen : category === "women" ? categoryWomen : categoryJewelery).map((product) => (
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
