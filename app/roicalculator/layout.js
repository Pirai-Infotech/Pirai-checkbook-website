import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const layout = ({ children }) => {
  return (
    <div className="cb-bg bg-two">
      <div className=" bg-image">
        <Header />
        {children}
        <Footer isForm = {true}/>
      </div>
    </div>
  );
};

export default layout;
