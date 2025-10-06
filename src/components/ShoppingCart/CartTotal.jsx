export default function CartTotal({ items }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-total">
      <span>Subtotal:</span>
      <span>${total.toFixed(2)}</span>
    </div>
  );
}
