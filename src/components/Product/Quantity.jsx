export default function Quantity({ quantity, setQuantity }) {
  return (
    <div className="quantity-selector">
      <p>Quantity:</p>
      <button className="decrease-btn" onClick={() => setQuantity(quantity - 1)}>-</button>
      <span className="quantity-value">{quantity}</span>
      <button className="increase-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  )
}