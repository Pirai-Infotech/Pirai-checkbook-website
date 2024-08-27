import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
