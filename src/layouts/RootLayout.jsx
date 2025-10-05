import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { CartProvider } from "../contexts/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Outlet />
      </main>
    </CartProvider>
  );
}