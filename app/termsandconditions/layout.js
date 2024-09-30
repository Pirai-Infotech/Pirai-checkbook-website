import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const layout = ({ children }) => {
  return (
    <div className="bg-pp">
      <div className="cb-bg bg-image">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
