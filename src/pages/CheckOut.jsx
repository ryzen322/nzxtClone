import { Outlet } from "react-router-dom";

const CheckOut = () => {
  return (
    <>
      <div className="container  mx-auto bg-white p-3 lg:mb-8"></div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default CheckOut;
