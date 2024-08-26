import React from "react";
import CTAButton from "./CTAButton";
import signupArrow from "@/public/signup-arrow.svg";

function DiscoverInsights() {
  return (
    <div className="w-[90%] m-auto rounded-[20px] sm:rounded-[80px] px-8 py-20 2xl:p-10 ">
      <h3 className="text-center pb-10 md:w-[80%] m-auto">
        Discover <span>insights</span> and learn how to manage ACH Payments
      </h3>
      <div className="flex flex-col md:flex-row gap-7">
        <div className="w-[100%] md:w-[50%]">
          <div className="bg-grad">
            <img alt="example" src="/Entrepreneurship.svg" />
          </div>
          <div className="bg-grad-sec py-[25px] px-2 xl:pl-[30px] 2xl:pl-[30px]">
            <p className="pl-4 pb-3">SEP 01, 2023</p>
            <p className="border-l-2 border-[#9180FF] pl-4 font-[500] text-[#404040] text-[18px] xl:text-[14px] 2xl:text-[28px]">
              FinTech Funding and Valuation versus Demand and Supply
            </p>
            <div className="pl-4 pt-4">
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#9281FF] to-[#89D6FF]"}
              textColor={"text-[#FFF]"}
              content={"Read More"}
            />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-7">
          <div className="flex flex-col lg:flex-row ">
            <div className="bg-grad">
              <img alt="example" src="/Businessintelligence.svg" />
            </div>
            <div className="bg-grad-sec py-[25px] px-2 xl:pl-[30px] 2xl:pl-[30px]">
              <p className="pl-4 pb-3">SEP 01, 2023</p>
              <p className="border-l-2 border-[#9180FF] pl-4 font-[500] text-[#404040] text-[18px] xl:text-[14px] 2xl:text-[28px]">
                FinTech Funding and Valuation versus Demand and Supply
              </p>
              <div className="pl-4 pt-4">
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#9281FF] to-[#89D6FF]"}
              textColor={"text-[#FFF]"}
              content={"Read More"}
            />
            </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="bg-grad">
              <img alt="example" src="/Payments.svg" />
            </div>
            <div className="bg-grad-sec py-[25px] px-2 xl:pl-[30px] 2xl:pl-[30px]">
              <p className="pl-4 pb-3">SEP 01, 2023</p>
              <p className="border-l-2 border-[#9180FF] pl-4 font-[500] text-[#404040] text-[18px] xl:text-[14px] 2xl:text-[28px]">
                FinTech Funding and Valuation versus Demand and Supply
              </p>
              <div className="pl-4 pt-4">
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#9281FF] to-[#89D6FF]"}
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
