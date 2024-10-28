import React from "react";
import FooterOne from "@/components/common/footers/FooterOne";
import NavbarFive from "@/components/common/navbars/NavbarFive";

import ScrollReset from "@/components/common/ScrollReset";
const Layout = ({ children }) => {
  return (
    <>
      <ScrollReset />
      <NavbarFive />
      {children}
      <FooterOne />
    </>
  );
};

export default Layout;
