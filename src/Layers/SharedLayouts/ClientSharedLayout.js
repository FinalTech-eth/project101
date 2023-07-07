<<<<<<< HEAD
import React from "react";
import { Outlet } from "react-router-dom";
import { ResponsiveAppBar } from "../AppBar/ResponsiveAppBar";
import Footer from "../Footer/index";

const ClientSharedLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientSharedLayout;
=======
import React from "react";
import { Outlet } from "react-router-dom";
import { ResponsiveAppBar } from "../AppBar/ResponsiveAppBar";
import Footer from "../Footer/index";

const ClientSharedLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientSharedLayout;
>>>>>>> ed6fc9dfc10b143894e260a7f93d5d49317dc7a8
