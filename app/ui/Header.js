import React from "react";
import logo from "@/public/checkbook-logo.svg";
import signupArrow from "@/public/signup-arrow.svg";
import Image from "next/image";
import Nav from "./Nav";
import CTAButton from "./CTAButton";

function Header() {
  return (
    <>
      <div className="container m-auto flex justify-between items-center py-[35px]">
        <div className="">
          <Image src={logo} alt="Checkbook" />
        </div>
        <Nav />
        <div className="">
          <CTAButton
            icon={signupArrow}
            backgroundType={"bg-gradient-to-r"}
            backgroundColor={"from-[#3D77EB] to-[#D289FF]"}
            textColor={"text-[#FFF]"}
            content={"Sign Up"}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
