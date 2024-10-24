import React from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import signupArrowcolor from "../../public/signup-arrow-purple.svg";
import { tinaField } from "tinacms/dist/react";

function HeroSection({
  heading,
  spancon,
  description,
  rightimg,
  heroText,
  heroString,
  bannerString,
  bannerspanString,
  contentString,
  ButtonString,
  SignupString,
  BannerImage,
  Button1,
  Button2
}) {
  return (
    <div
      className="lg:relative lg:flex lg:items-center 4xl:w-[1920px] m-auto"
      data-tina-field={tinaField(heroText, heroString)}
    >
      <div className="mx-auto flex flex-col lg:flex-row gap-3 items-center">
        <div className="flex-1 lg:pl-[3%] xl:pl-[8%] 2xl:w-[12%] 3xl:pl-[3%]">
          <h1
            className="text-center font-light lg:text-left text-[41px] leading-[52.04px] 2xl:text-[55px] 3xl:text-[70px] 2xl:leading-[79.52px] md:m-auto lg:m-0 sm:px-[15%] md:px-[20%] lg:px-0 lg:pr-[10%]"
            data-tina-field={tinaField(heroText, bannerString)}
          >
            {heading}
            <b className="block lg:hidden" />{" "}
            <span
              className="custom-text font-normal"
              data-tina-field={tinaField(heroText, bannerspanString)}
            >
              {spancon}
            </span>
          </h1>
          <p
            className="pt-5 font-circular-spotify text-[#404040] font-light text-center lg:text-left text-[18px] leading-[25.4px] 2xl:text-[22px] 3xl:text-[27px] 2xl:leading-[30.1px] 3xl:leading-[38.1px] md:px-[12%] lg:px-0 lg:w-auto"
            data-tina-field={tinaField(heroText, contentString)}
          >
            {description}
          </p>
          <div className="flex flex-row pt-10 lg:pt-6 xl:pt-10  gap-4 lg:gap-8 items-center justify-center lg:justify-start">
            <span data-tina-field={tinaField(heroText, SignupString)}>
              <CTAButton
                icon={signupArrow}
                backgroundType={"bg-gradient-to-r"}
                backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                textColor={"text-white"}
                paddingx={"px-6 lg:px-4 xl:px-6 2xl:px-9"}
                paddingy={"py-2 md:py-3"}
                textSize={"text-[15px] sm:text-[17px]"}
                rounderTL={"rounded-tl-none"}
                rounderTR={"rounded-tr-[60px]"}
                rounderBR={"rounded-br-[60px]"}
                rounderBL={"rounded-bl-[40px]"}
                content={Button1}
                classname={""}
              />
            </span>
            <span data-tina-field={tinaField(heroText, ButtonString)}>
              <CTAButton
                icon={signupArrowcolor}
                backgroundType={""}
                backgroundColor={"grad-border borderbutton"}
                textColor={"text-[#404040]"}
                paddingx={"px-6 lg:px-4 xl:px-6 2xl:px-9"}
                paddingy={"py-2 md:py-3"}
                textSize={"text-[15px] sm:text-[17px]"}
                rounderTL={"rounded-tl-none"}
                rounderTR={"rounded-tr-[60px]"}
                rounderBR={"rounded-br-[60px]"}
                rounderBL={"rounded-bl-[40px]"}
                classname={""}
                content={Button2}
              />
            </span>
          </div>
        </div>
        <div
          className="flex-1"
          data-tina-field={tinaField(heroText, BannerImage)}
        >
          <Image
            src={rightimg? rightimg : ""}
            width={700}
            height={500}
            alt="Printable Check"
          />
        </div>
      </div>
      {/* <div className="lg:absolute my-0 lg:w-[50%] top-0 right-0 flex items-center justify-end">
        <div>
          <Image src={rightimg} alt="Printable Check" />
        </div>
      </div> */}
    </div>
  );
}

export default HeroSection;
