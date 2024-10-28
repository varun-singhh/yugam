import React from "react";
import NavbarFive from "@/components/common/navbars/NavbarFive";

import FooterOne from "@/components/common/footers/FooterOne";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarFive />
      {children}
      <FooterOne />
    </>
  );
};

export default Layout;
