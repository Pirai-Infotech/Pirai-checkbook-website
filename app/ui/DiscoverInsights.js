import React from "react";
import CTAButton from "./CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import Entrepreneurship from "@/public/Entrepreneurship.svg";
import Businessintelligence from "@/public/Businessintelligence.svg";
import Payments from "@/public/Payments.svg";
import Image from "next/image";

function DiscoverInsights() {
  return (
    <div className="container m-auto pt-14 lg:pt-20">
      <h3 className="text-center text-[35px] sm:px-8 lg:px-14 lg:text-[70px] pb-10 md:w-[80%] m-auto">
        Discover <span>insights</span> and learn how to manage ACH Payments
      </h3>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-[100%] md:w-[48%] lg:w-[38%]">
        <div className="flex flex-col flex-1 gap-7">
        <div>
          <div className="bg-grad xl:p-[48px] xl:h-[300px]">
            <Image src={Entrepreneurship} alt="Entrepreneurship" />
          </div>
          <div className="bg-grad-sec py-[25px] px-2 xl:pl-[30px] 2xl:pl-[30px]">
            <p className="pl-4 pb-3">SEP 01, 2023</p>
            <p className="border-l-2 border-[#9180FF] pl-4 font-[500] text-[#404040] text-[18px] xl:text-[20px] 2xl:text-[28px]">
              FinTech Funding and Valuation versus Demand and Supply
            </p>
            <div className="pl-4 pt-4">
              <CTAButton
                icon={signupArrow}
                backgroundType={"bg-gradient-to-r"}
                backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                textColor={"text-[#FFF]"}
                content={"Read More"}
              />
            </div>
          </div>
          </div>
          <div className="flex-col lg:flex-row hidden md:flex lg:hidden">
            <div className="bg-grad">
              <Image src={Payments} alt="Payments" />
            </div>
            <div className="bg-grad-sec py-[25px] px-2 xl:pl-[30px] 2xl:pl-[30px]">
              <p className="pl-4 pb-3">MAY 26, 2023</p>
              <p className="border-l-2 border-[#9180FF] pl-4 font-[500] text-[#404040] text-[18px] xl:text-[20px] 2xl:text-[28px]">
              How The Money Flows: Payments for Cash Advance
              </p>
              <div className="pl-4 pt-4">
                <CTAButton
                  icon={signupArrow}
                  backgroundType={"bg-gradient-to-r"}
                  backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                  textColor={"text-[#FFF]"}
                  content={"Read More"}
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-col flex-1 gap-7">
          <div className="flex flex-col lg:flex-row ">
            <div className="bg-grad xl:h-[300px]">
              <Image src={Businessintelligence} alt="Businessintelligence" />
            </div>
            <div className="bg-grad-sec py-[25px] xl:pt-16 px-2 xl:pl-[30px] 2xl:pl-[30px]">
              <p className="pl-4 pb-3">MAR 29, 2023</p>
              <p className="border-l-2 border-[#9180FF] pl-4 font-[500] text-[#404040] text-[18px] xl:text-[20px] 2xl:text-[28px]">
              Building Creativity-Hackathons with Checkbook
              </p>
              <div className="pl-4 pt-4">
                <CTAButton
                  icon={signupArrow}
                  backgroundType={"bg-gradient-to-r"}
                  backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                  textColor={"text-[#FFF]"}
                  content={"Read More"}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="bg-grad xl:h-[300px]">
              <Image src={Payments} alt="Payments" />
            </div>
            <div className="bg-grad-sec py-[25px] xl:pt-16 px-2 xl:pl-[30px] 2xl:pl-[30px]">
              <p className="pl-4 pb-3">MAY 26, 2023</p>
              <p className="border-l-2 border-[#9180FF] pl-4 font-[500] text-[#404040] text-[18px] xl:text-[20px] 2xl:text-[28px]">
              How The Money Flows: Payments for Cash Advance
              </p>
              <div className="pl-4 pt-4">
                <CTAButton
                  icon={signupArrow}
                  backgroundType={"bg-gradient-to-r"}
                  backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                  textColor={"text-[#FFF]"}
                  content={"Read More"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverInsights;
