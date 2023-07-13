import { NavLink, Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const StoreNav = () => {
  return (
    <>
      <header className=" bg-black z-50 flex items-center p-4 fixed top-0 w-full ">
        <nav>
          <ul className=" text-stone-200 ">
            <li className=" text-black block lg:bloc ml-4">
              <NavLink
                to=".."
                className=" font-extrabold text-[1.35rem] text-white"
              >
                NZXT
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
        <ScrollToTop />
      </main>
    </>
  );
};

export default StoreNav;
