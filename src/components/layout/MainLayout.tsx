import React, { FC } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Type } from "typescript";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
