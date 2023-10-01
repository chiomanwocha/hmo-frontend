import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const AppShell = ({ children }) => {
  return (
    <div className="App text-base">
      <Navbar />
      <div className="flex bg-grey-100 flex-col gap-14">{children}</div>
      <Footer />
    </div>
  );
};

export default AppShell;
