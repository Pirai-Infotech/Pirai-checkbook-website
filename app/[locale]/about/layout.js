import React from "react";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";

const layout = ({ children }) => {
  return (
    <div className="cb-bg bg-thr">
      <div className="block bg-gradient-to-r from-[#00FFB2] to-[#00E0FF] text-center py-5 px-5">
        <p className="font-[400] text-[#4d4d4d] text-[17px]">
          <span className="font-[700] flex lg:inline-block justify-center">SED EGESTAS, ANTE ET.</span> VULPUTATE
          VOLUTPAT, ERAS PEDE SEMPER EST.
        </p>
      </div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
