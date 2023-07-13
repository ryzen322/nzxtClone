import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const CheckOut = () => {
  return (
    <>
      <div className="container  mx-auto bg-white p-3 lg:mb-8"></div>
      <main>
        <Outlet />
        <ScrollToTop />
      </main>
    </>
  );
};

export default CheckOut;
