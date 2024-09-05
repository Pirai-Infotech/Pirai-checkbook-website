import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const layout = ({ children }) => {
  return (
    <div className="cb-bg bg-ach">
      <Header />
      {children}
      <Footer contactFormText= "Enroll in Printable Checks" />
    </div>
  );
};

export default layout;
