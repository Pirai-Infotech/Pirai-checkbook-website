import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const layout = ({ children }) => {
  return (
    <div className="bg-about cb-bg">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
