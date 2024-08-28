import React from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import signupArrowcolor from "../../public/signup-arrow.svg";

function HeroSection({ heading, spancon, description, rightimg }) {
  return (
    <div className="container m-auto flex flex-col lg:flex-row gap-3 items-center py-10 ">
      <div className="flex-1 pl-[5%] 2xl:pl-[0px]">
        <h1 className="text-center xl:text-left 2xl:text-[70px]">
          {heading} <span>{spancon}</span>
        </h1>
        <p className="pt-5 lg:pr-[10%] text-center xl:text-left 2xl:text-[27px]">
          {description}
        </p>
        <div className="flex flex-row pt-10 gap-4 items-center justify-center xl:justify-start">
          <CTAButton
            icon={signupArrow}
            backgroundType={"bg-gradient-to-r"}
            backgroundColor={"from-[#3D77EB] to-[#D289FF]"}
            textColor={"text-[#fff]"}
            content={"Sign Up"}
            classname={""}
          />
          <CTAButton
            icon={signupArrowcolor}
            backgroundType={""}
            backgroundColor={""}
            textColor={"text-[#404040]"}
            classname={"grad-border borderbutton "}
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
