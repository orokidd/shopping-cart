export default function Quantity({ quantity, setQuantity }) {
  return (
    <div className="quantity-selector">
      <p>Quantity:</p>
      
      { quantity > 1 ? <button className="decrease-btn" onClick={() => setQuantity(quantity - 1)}>-</button> : null}
      
      <span className="quantity-value">{quantity}</span>
      <button className="increase-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  )
}