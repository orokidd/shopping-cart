import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

export default function RootLayout() {
  return (
    <>
      <Header />
      <ShoppingCart />
      <main>
        <Outlet />
      </main>
    </>
  );
}