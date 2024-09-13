import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const layout = ({ children }) => {
  return (
    <div className="cb-bg bg-ach">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
