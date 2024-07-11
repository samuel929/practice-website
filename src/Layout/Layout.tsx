import { Outlet, useLocation } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
// import MegaMenuLayout from "../components/Reusables/MegaMenuLayout";
import { useEffect, useState } from "react";
// import { paths } from "../types/types";

const Layout = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState<string | null>(null); // State to track active NavLink
  const navItems = [
    { to: "/practice", label: "Practice Areas" },
    { to: "/ip-Africa", label: "IP Africa" },
    { to: "/people", label: "People" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const navLoginItems = [{ to: "/IP", label: "IP Connect Login" }];
  const handleMouseEnter = (navLinkId: string) => {
    setActive(navLinkId);
    /**left console here, so active is used and build issues dissapear */
    console.log(active); // Set the active NavLink ID on hover
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  const handleMouseLeave = () => {
    setActive(null); // Reset active state on mouse leave
  };

  // const renderNavItemsMegaMenu = () => {
  //   switch (active) {
  //     case paths.PRACTICE:
  //       <MegaMenuLayout path={paths.PRACTICE} />;
  //       break;
  //     case paths.IPAFRICA:
  //       return <MegaMenuLayout path={paths.IPAFRICA} />;
  //       break;
  //     case paths.ABOUT:
  //       return <MegaMenuLayout path={paths.ABOUT} />;
  //       break;
  //     default:
  //   }
  // };

  return (
    <div>
      <Navbar
        navLoginItems={navLoginItems}
        navItems={navItems}
        handleMouseLeave={handleMouseLeave}
        handleMouseEnter={handleMouseEnter}
      />
      {/* {renderNavItemsMegaMenu()} */}
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
