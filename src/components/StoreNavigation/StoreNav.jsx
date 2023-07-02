import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";

const StoreNav = () => {
  return (
    <>
      <header className=" bg-black z-50 flex items-center p-4 fixed top-0 w-full ">
        <nav>
          <ul className=" text-stone-200 ">
            <li>
              <NavLink to="" className=" hidden">
                Gaming PCS
              </NavLink>
              <NavLink to="">
                <HiOutlineMenuAlt2 size="1.4rem" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default StoreNav;
