import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Checkbooklogo from "@/public/checkbook_logo.svg";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import signupArrowcolor from "@/public/signup-arrow-purple.svg";

function page() {
  return (
    <div>
      <section className="container main-con m-auto mb-10">
        <div className="text-center">
          <h1 className="font-inter font-light text-center text-[41px] lg:text-[72px] 3xl:text-[88px] text-[#404040]">
            Checkbook <br />
            <span> Brand Assets</span>
          </h1>

          <div className="flex justify-center mt-4 sm:mt-5 md:mt-6 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
            <p className="font-circular-spotify font-light leading-[25.4px] lg:leading-[38.1px] text-[18px] lg:text-[27px] text-[#404040] text-center">
              Download Official Checkbook Logos
            </p>
          </div>
        </div>

        <div className="grad-border grad-border-rtgs rounded-[50px] lg:rounded-[149px] onlyfor-bdr mt-24 px-[10%] py-[10%] lg:py-[6%]">
          <div className="flex flex-col lg:flex-row  gap-6">
            <div className="flex-1 order-2 lg:order-1">
              <h3 className="font-normal text-center lg:text-left w-full text-[27px] leading-[34.99px] text-[#404040]">
                The Checkbook Logo
              </h3>
            </div>
            <div className="flex-1 order-2">
              <p className="text-[18px] font-light leading-[25.4px] text-center lg:text-left text-[#404040] pb-7">
                The Checkbook logo is available in two colors. Blue is designed
                for lighter backgrounds, while white works best on dark
                backgrounds. Please don&apos;t alter the logo in any way.
              </p>
              <div className="flex justify-center lg:justify-start">
                <CTAButton
                  icon={signupArrowcolor}
                  backgroundType={""}
                  backgroundColor={"grad-border borderbutton"}
                  textColor={"text-[#4D4D4D]"}
                  paddingx={"px-6 lg:px-3 xl:px-6"}
                  paddingy={"py-3 md:py-3 xl:py-4"}
                  textSize={
                    "text-[17px] lg:text-[10px] xl:text-[14px] 2xl:text-[17px]"
                  }
                  rounderTL={"rounded-tl-none"}
                  rounderTR={"rounded-tr-[60px]"}
                  rounderBR={"rounded-br-[60px]"}
                  rounderBL={"rounded-bl-[40px]"}
                  classname={""}
                  content={"Download Logo Kit"}
                />
              </div>
            </div>
            <div className="flex-1 flex justify-center items-start order-1 lg:order-3">
              <Image src={Checkbooklogo} alt="Checkbook Logo" />
            </div>
          </div>
        </div>
      </section>

      <ReadytoGetStart />
    </div>
  );
}

export default page;
