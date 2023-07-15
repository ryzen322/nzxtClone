import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavigationHomePage from "./pages/Navigation";
import HomePage from "./components/home/HomePage";
import StoreNav from "./components/StoreNavigation/StoreNav";
import CheckOut from "./pages/CheckOut";
import { Suspense, lazy } from "react";

const Cart = lazy(() => import("./components/Cart"));
const ShoppingStore = lazy(() =>
  import("./components/StoreNavigation/ShoppingStore")
);
const CheckOutMain = lazy(() => import("./components/checkout/CheckOutMain"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<NavigationHomePage />}>
        <Route index element={<HomePage />} />
        <Route
          path="/cart"
          element={
            <Suspense fallback="Loading...">
              <Cart />
            </Suspense>
          }
        />
      </Route>
      <Route path="build/pc" element={<StoreNav />}>
        <Route
          index
          element={
            <Suspense fallback="Loading...">
              <ShoppingStore />
            </Suspense>
          }
        />
      </Route>
      <Route path="checkout" element={<CheckOut />}>
        <Route
          index
          element={
            <Suspense fallback="Loading...">
              <CheckOutMain />
            </Suspense>
          }
        />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
