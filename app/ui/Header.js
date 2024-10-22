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
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";

function Header({ data, query, variables, pageType }) {

  const { data: tinaResponse } = useTina({
    query,
    variables,
    data,
  });
  const tinaData = tinaResponse?.[pageType];
  const [mobileMenuFlag, setMobileMenuFlag] = useState(false);

  return (
    <>
      <div className="container main-con main-con m-auto flex justify-between items-center py-[35px] px-[5%] sm:px-0 ">
        <div className="lg:w-[17%] 2xl:w-[15%] md:w-[28%]">
          <Link href={"/"}>
            <Image src={logo} alt="Checkbook" />
          </Link>
        </div>
        <div className="hidden justify-between items-center w-[75%] lg:flex">
          <Nav tinaData={tinaData}/>
          <div className="" data-tina-field={tinaField(tinaData?.header, "button")}>
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#3D77EB] to-[#D289FF]"}
              textColor={"text-[#FFF]"}
              content={tinaData?.header?.button}
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
            <div className="block lg:hidden absolute w-full bg-[#3D77EB] px-[5%] pt-[40px] pb-14 left-0 top-0 z-50 shadow-4xl">
              <div className="container main-con main-con m-auto">
                <div className="flex items-center justify-between">
                  <div className="lg:w-[17%] 2xl:w-[15%] md:w-[28%]">
                    <Image
                      src={mobileLogo}
                      alt="Checkbook"
                      className="w-full"
                    />
                  </div>
                  <div className="w-[75%] flex justify-end">
                    <div
                      className="bg-white rounded-[3px] w-[30px] h-[30px]"
                      onClick={() => setMobileMenuFlag(false)}
                    >
                      <Image src={closeIcon} alt="Close" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between mt-5 flex-wrap">
                  <div className="md:w-[50%] sm:w-full w-full">
                    <ul>
                      <li className=" border-b border-white py-4">
                        <p className="text-white text-xl font-extrabold uppercase" data-tina-field={tinaField(tinaData?.header, "label1")}>
                          {tinaData?.header?.label1}
                        </p>
                      </li>
                      <li className="border-b border-white py-4 flex flex-wrap lg:bg-none bg-white bg-opacity-10 p-2 sm:p-5 lg:p-0">
                        <p className="text-white text-xl font-extrabold uppercase">
                        {tinaData?.header?.label2}
                        </p>
                        <PaymentSubMenu />
                      </li>
                      <li className="border-b border-white py-4" data-tina-field={tinaField(tinaData?.header, "label3")}>
                        <p className="text-white text-xl font-extrabold uppercase">
                        {tinaData?.header?.label3}
                        </p>
                      </li>
                      <li className="border-b border-white py-4" data-tina-field={tinaField(tinaData?.header, "label4")}>
                        <p className="text-white text-xl font-extrabold uppercase">
                        {tinaData?.header?.label4}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-[44%] sm:w-full w-full">
                    <ul>
                      <li className="border-b border-white py-4" data-tina-field={tinaField(tinaData?.header, "label5")}>
                        <p className="text-white text-xl font-extrabold uppercase">
                        {tinaData?.header?.label5}
                        </p>
                      </li>
                      <li className="border-b border-white py-4 flex flex-wrap" data-tina-field={tinaField(tinaData?.header, "label6")}>
                        <p className="text-white text-xl font-extrabold uppercase">
                        {tinaData?.header?.label6}
                        </p>
                      </li>
                      <li className="border-b border-white py-4" data-tina-field={tinaField(tinaData?.header, "label7")}>
                        <p className="text-white text-xl font-extrabold uppercase">
                        {tinaData?.header?.label7}
                        </p>
                      </li>
                    </ul>
                    <div className="mt-6" data-tina-field={tinaField(tinaData?.header, "button")}>
                      <CTAButton
                        icon={""}
                        backgroundType={"bg-gradient-to-r"}
                        backgroundColor={"from-[#FFFFFF] to-[#09DEF8]"}
                        textColor={"text-[#3D77EB]"}
                        content={tinaData?.header?.button}
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
