import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavigationHomePage from "./pages/Navigation";
import HomePage from "./components/home/HomePage";
import StoreNav from "./components/StoreNavigation/StoreNav";
import ShoppingStore from "./components/StoreNavigation/ShoppingStore";
import CartParts from "./components/Cart";
import CheckOut from "./pages/CheckOut";
import CheckOutMain from "./components/checkout/CheckOutMain";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<NavigationHomePage />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartParts />} />
      </Route>
      <Route path="build/pc" element={<StoreNav />}>
        <Route index element={<ShoppingStore />} />
      </Route>
      <Route path="checkout" element={<CheckOut />}>
        <Route index element={<CheckOutMain />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      {/* <div className=" h-11 w-full bg-[#8a00fc] flex items-center justify-center text-white">
        <p className=" text-xs font-[500]">All PCs Built in 2 business Days</p>
      </div> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;
