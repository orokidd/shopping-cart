export default function CartTotal({ items }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-total">
      <span>Subtotal: ${total.toFixed(2)}</span>
      <button className="checkout-button" onClick={() => console.log("Proceed to Checkout")}>Checkout</button>
    </div>
  );
}
