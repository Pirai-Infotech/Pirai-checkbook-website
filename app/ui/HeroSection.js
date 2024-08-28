import React from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import signupArrowcolor from "../../public/signup-arrow-purple.svg";

function HeroSection({ heading, spancon, description, rightimg }) {
  return (
    <div className="container m-auto flex flex-col lg:flex-row gap-3 items-center py-10 ">
      <div className="flex-1 ">
        <h1 className="text-center lg:text-left text-[43px] 2xl:text-[70px] md:m-auto lg:m-0 sm:px-[20%] md:px-[25%] lg:px-[0] lg:pr-[10%] ">
          {heading} <span className="custom-text">{spancon}</span>
        </h1>
        <p className="pt-5 text-center lg:text-left text-[18px] lg:text-[27px] md:px-[12%] lg:px-0 lg:w-auto">
          {description}
        </p>
        <div className="flex flex-row pt-10 gap-4 items-center justify-center lg:justify-start">
          <CTAButton
            icon={signupArrow}
            backgroundType={"bg-gradient-to-r"}
            backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
            textColor={"text-[#fff]"}
            content={"Sign Up"}
            classname={""}
          />
          <CTAButton
            icon={signupArrowcolor}
            backgroundType={""}
            backgroundColor={"grad-border borderbutton"}
            textColor={"text-[#404040]"}
            classname={""}
            content={"Try Our Demo"}
          />
        </div>
      </div>
      <div className="flex-1">
        <Image src={rightimg} alt="Printable Check" />
      </div>
    </div>
  );
}

export default HeroSection;
