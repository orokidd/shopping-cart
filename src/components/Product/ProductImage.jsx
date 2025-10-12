export default function ProductImage({ product }) {
  return (
    <div className="product-image">
      <img src={product.image} alt={product.title} />
    </div>
  );
}