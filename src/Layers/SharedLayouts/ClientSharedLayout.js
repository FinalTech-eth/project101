import React from "react";
import { Outlet } from "react-router-dom";
import { ResponsiveAppBar } from "../AppBar/ResponsiveAppBar";
import Footer from "../Footer";

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
