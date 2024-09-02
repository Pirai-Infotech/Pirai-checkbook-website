import React from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import signupArrowcolor from "../../public/signup-arrow-purple.svg";

function HeroSection({ heading, spancon, description, rightimg }) {
  return (
    <div className="lg:relative lg:flex lg:items-center">
      <div className="container lg:my-[90px] xl:my-[100px] 2xl:my-[190px] mx-auto flex flex-col lg:flex-row gap-3 items-center">
        <div className="flex-1">
          <h1 className="text-center lg:text-left text-[43px] leading-[52.04px] 2xl:text-[70px] 2xl:leading-[79.52px] md:m-auto lg:m-0 sm:px-[20%] md:px-[25%] lg:px-0 lg:pr-[10%]">
            {heading} <span className="custom-text">{spancon}</span>
          </h1>
          <p className="pt-5 font-circular-spotify text-center lg:text-left text-[18px] leading-[25.4px] xl:text-[27px] xl:leading-[38.1px] md:px-[12%] lg:px-0 lg:w-auto">
            {description}
          </p>
          <div className="flex flex-row pt-10 gap-4 items-center justify-center lg:justify-start">
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
              textColor={"text-white"}
              paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-6"}
              paddingy={"py-2 md:py-4"}
              textSize={"text-[17px]"}
              rounderTL={"rounded-tl-none"}
              rounderTR={"rounded-tr-[60px]"}
              rounderBR={"rounded-br-[60px]"}
              rounderBL={"rounded-bl-[40px]"}
              content={"Sign Up"}
              classname={""}
            />
            <CTAButton
              icon={signupArrowcolor}
              backgroundType={""}
              backgroundColor={"grad-border borderbutton"}
              textColor={"text-[#404040]"}
              paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-6"}
              paddingy={"py-2 md:py-4"}
              textSize={"text-[17px]"}
              rounderTL={"rounded-tl-none"}
              rounderTR={"rounded-tr-[60px]"}
              rounderBR={"rounded-br-[60px]"}
              rounderBL={"rounded-bl-[40px]"}
              classname={""}
              content={"Try Our Demo"}
            />
          </div>
        </div>
        <div className="hidden lg:block flex-1"></div>
      </div>
      <div className="lg:absolute my-0 lg:w-[50%] top-0 right-0 flex items-center justify-end">
        <div>
          <Image src={rightimg} alt="Printable Check" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
