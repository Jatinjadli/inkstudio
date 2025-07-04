import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import TattooStyles from "./styles";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <Navbar />
      <main
        className={`min-h-screen bg-white ${
          isHome ? "" : "pt-20 px-4 md:px-8"
        }`}
      >
        <Outlet />
        {isHome && <TattooStyles />}
      </main>
      <Footer />
    </>
  );
}
