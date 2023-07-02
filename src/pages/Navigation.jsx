import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";

const NavigationHomePage = () => {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavigationHomePage;
