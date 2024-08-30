"use client";
import React, { useState } from "react";
import logo from "@/public/checkbook-logo.svg";
import signupArrow from "@/public/signup-arrow.svg";
import mobileLogo from "@/public/mobile-logo.svg";
import closeIcon from "@/public/close-icon.svg";
import Image from "next/image";
import Nav from "./Nav";
import CTAButton from "./CTAButton";
import PaymentSubMenu from "./PaymentSubMenu";

function Header() {
  const [mobileMenuFlag, setMobileMenuFlag] = useState(false);

  return (
    <>
      <div className="container m-auto flex justify-between items-center py-[35px] px-[5%] md:px-0">
        <div className="lg:w-[17%] 2xl:w-[15%] md:w-[28%]">
          <Image src={logo} alt="Checkbook" />
        </div>
        <div className="hidden justify-between items-center w-[75%] lg:flex">
          <Nav />
          <div className="">
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#3D77EB] to-[#D289FF]"}
              textColor={"text-[#FFF]"}
              content={"Sign Up"}
              paddingx={"px-[26px]"}
              paddingy={"py-[12px]"}
              textSize={"xl:text-[17px] lg:text-[15px]"}
              rounderTL={"rounded-tl-none"}
              rounderTR={"rounded-tr-[60px]"}
              rounderBR={"rounded-br-[60px]"}
              rounderBL={"rounded-bl-[40px]"}
            />
          </div>
        </div>
        {mobileMenuFlag ? (
          <>
            <div className="block lg:hidden fixed w-full bg-[#3D77EB] px-[5%] pt-[30px] pb-14 left-0 top-0 z-50">
              <div className="container m-auto ">
                <div className="flex items-center justify-between">
                  <Image src={mobileLogo} alt="Checkbook" />
                  <div
                    className="bg-white rounded-[3px] w-[30px] h-[30px]"
                    onClick={() => setMobileMenuFlag(false)}
                  >
                    <Image src={closeIcon} alt="Close" />
                  </div>
                </div>
                <div className="flex items-start justify-between mt-5 flex-wrap">
                  <div className="sm:w-[47%] w-full">
                    <ul>
                      <li className="text-white text-xl font-extrabold border-b border-white py-4 uppercase">
                        Home
                      </li>
                      <li className="text-white text-xl font-extrabold border-b border-white py-4 uppercase flex flex-wrap lg:bg-none bg-white bg-opacity-10 p-5 lg:p-0">
                        Products
                        <PaymentSubMenu />
                      </li>
                      <li className="text-white text-xl font-extrabold border-b border-white py-4 uppercase">
                        Solutions
                      </li>
                      <li className="text-white text-xl font-extrabold border-b border-white py-4 uppercase">
                        Resources
                      </li>
                    </ul>
                  </div>
                  <div className="sm:w-[47%] w-full">
                    <ul>
                      <li className="text-white text-xl font-extrabold border-b border-white py-4 uppercase">
                        Industries
                      </li>
                      <li className="text-white text-xl font-extrabold border-b border-white py-4 uppercase flex flex-wrap">
                        ROI Calculator
                      </li>
                      <li className="text-white text-xl font-extrabold border-b border-white py-4 uppercase">
                        Pricing
                      </li>
                    </ul>
                    <div className="mt-6">
                      <CTAButton
                        icon={""}
                        backgroundType={"bg-gradient-to-r"}
                        backgroundColor={"from-[#FFFFFF] to-[#09DEF8]"}
                        textColor={"text-[#3D77EB]"}
                        content={"Sign Up"}
                        paddingx={"px-[26px]"}
                        paddingy={"py-[12px]"}
                        textSize={"xl:text-[17px] lg:text-[15px]"}
                        rounderTL={"rounded-tl-none"}
                        rounderTR={"rounded-tr-[60px]"}
                        rounderBR={"rounded-br-[60px]"}
                        rounderBL={"rounded-bl-[40px]"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            className="block lg:hidden"
            onClick={() => setMobileMenuFlag(true)}
          >
            <div className="bg-[#3D77EB] rounded-[3px] p-[7px]">
              <ul>
                <li className="bg-white w-[18px] h-[2px] mb-[5px] rounded-md"></li>
                <li className="bg-white w-[18px] h-[2px] mb-[5px] rounded-md"></li>
                <li className="bg-white w-[18px] h-[2px] rounded-md"></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
