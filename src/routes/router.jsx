import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import { shopLoader } from "../loaders/shopLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />, loader: shopLoader, },
      { path: "shop", element: <Shop />, loader: shopLoader, },
      { path: "cart", element: <Cart />, loader: shopLoader, },
    ],
  },
]);