import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import ScrollToTop from "../components/ScrollToTop";

const NavigationHomePage = () => {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
        <ScrollToTop />
      </main>
    </>
  );
};

export default NavigationHomePage;
