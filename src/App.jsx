import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { CartProvider } from "./contexts/CartContext";
import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}