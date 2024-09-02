import React from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";
import payico from "@/public/pay-ico.svg";
import payicogray from "@/public/pay-ico-gray.svg";
import codeico from "@/public/code-ico.svg";
import codeicogray from "@/public/codeico-gray.svg";
import signupArrow from "@/public/signup-arrow.svg";
import signupArrowcolor from "@/public/signup-arrow-purple.svg";

function ReadytoGetStart() {
  return (
    <div className="px-5 sm:px-0 container m-auto flex flex-col lg:flex-row items-center gap-8 py-10">
      <div className="lg:p-7 grad-border grad-border-rtgs bdr-sm-rds no-bdr flex-grow-1 xl:w-[60%]">
        <div className="bg-[#fff] sm:border-[#C4DCFF] sm:border-2 lg:border-none lg:border-0 rounded-[30px] py-10 md:px-[15%] md:py-12 lg:px-[10%] 2xl:py-[100px] 2xl:px-[80px]">
          <h2 className="text-center xl:text-left">
            Ready to get <br />
            <span>started?</span>
          </h2>
          <p className="text-center lg:text-left px-8 py-5 md:px-0 md:py-10 xl:px-0">
            Explore Checkbook, or create an account instantly and start sending
            payments. You can also contact us to design a custom package for
            your business.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center xl:justify-start">
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
              textColor={"text-[#fff]"}
              paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-6"}
              paddingy={"py-3 md:py-4"}
              textSize={"text-[17px] lg:text-[10px] xl:text-[17px]"}
              rounderTL={"rounded-tl-none"}
              rounderTR={"rounded-tr-[60px]"}
              rounderBR={"rounded-br-[60px]"}
              rounderBL={"rounded-bl-[40px]"}
              content={"Create Account"}
              classname={""}
            />
            <CTAButton
              icon={signupArrowcolor}
              backgroundType={""}
              backgroundColor={"grad-border borderbutton"}
              textColor={"text-[#404040]"}
              paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-6"}
              textSize={"text-[17px] lg:text-[10px] xl:text-[17px]"}
              paddingy={"py-3 md:py-4"}
              rounderTL={"rounded-tl-none"}
              rounderTR={"rounded-tr-[60px]"}
              rounderBR={"rounded-br-[60px]"}
              rounderBL={"rounded-bl-[40px]"}
              classname={""}
              content={"Contact Sales"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="py-10 w-full px-10 sm:px-20 md:py-10 md:px-10 lg:p-[20px] xl:p-[70px] grad-border grad-border-compliance bdr-sm-rtgs lin-bf-txt2">
          <div className="flex flex-row lg:flex-col  items-center xl:items-start gap-5">
            <Image
              src={payicogray}
              className="hidden lg:block"
              alt="What you Pay"
            />
            <Image
              src={payico}
              className="block lg:hidden"
              alt="What you Pay"
            />
            <h4 className="xl:w-[74%] lg:pl-4">Always know what you pay</h4>
          </div>
          <p className="py-10 md:py-6 xl:py-10 md:h-[130px] xl:h-[170px]">
            Integrated per-transaction pricing with no hidden fees.
          </p>
          <CTAButton
            icon={signupArrowcolor}
            backgroundType={""}
            backgroundColor={"grad-border borderbutton"}
            textColor={"text-[#404040]"}
            paddingx={"px-6 lg:px-3 xl:px-6"}
            textSize={"text-[17px] lg:text-[10px] xl:text-[17px]"}
            paddingy={"py-3 md:py-4"}
            rounderTL={"rounded-tl-none"}
            rounderTR={"rounded-tr-[60px]"}
            rounderBR={"rounded-br-[60px]"}
            rounderBL={"rounded-bl-[40px]"}
            classname={""}
            content={"Pricing Details"}
          />
        </div>
        <div className="py-10 w-full px-10 sm:px-20 md:py-10 md:px-10 lg:p-[20px] xl:p-[70px] grad-border grad-border-syi bdr-sm-rtgs lin-bf-txt">
          <div className="flex flex-row lg:flex-col  items-center xl:items-start gap-5">
            <Image
              src={codeicogray}
              className="hidden lg:block"
              alt="What you Pay"
            />
            <Image
              src={codeico}
              className="block lg:hidden"
              alt="What you Pay"
            />
            <h4 className="xl:w-[74%] lg:pl-4">Start your integration</h4>
          </div>
          <p className="py-10 md:py-5 xl:py-10 md:h-[130px] xl:h-[170px]">
            Get up and running with Checkbook in as little as 10 minutes.
          </p>
          <CTAButton
            icon={signupArrowcolor}
            backgroundType={""}
            backgroundColor={"grad-border borderbutton"}
            textColor={"text-[#404040]"}
            paddingx={"px-6 lg:px-3 xl:px-6"}
            textSize={"text-[17px] lg:text-[10px] xl:text-[17px]"}
            paddingy={"py-3 md:py-4"}
            rounderTL={"rounded-tl-none"}
            rounderTR={"rounded-tr-[60px]"}
            rounderBR={"rounded-br-[60px]"}
            rounderBL={"rounded-bl-[40px]"}
            classname={""}
            content={"API Reference"}
          />
        </div>
      </div>
    </div>
  );
}

export default ReadytoGetStart;
