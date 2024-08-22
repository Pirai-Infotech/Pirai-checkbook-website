import React from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";
import payico from "@/public/pay-ico.svg";
import codeico from "@/public/code-ico.svg";

function ReadytoGetStart() {
  return (
    <div className="flex flex-col lg:flex-row items-center px-7 md:px-10 gap-8">
      <div className="md:p-7 clr-bdr no-bdr flex-grow-1">
        <div className="bg-[#fff] rounded-[30px] p-5 md:p-20">
          <h2 className="text-center md:text-left">
            Ready to get <br />
            <span>started?</span>
          </h2>
          <p className="text-center md:text-left">
            Explore Checkbook, or create an account instantly and start sending
            payments. You can also contact us to design a custom package for
            your business.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 lin-bf-txt">
        <div className="p-7 clr-bdr">
          <div className="flex flex-row md:flex-col items-center md:items-start gap-5">
            <Image src={payico} alt="What you Pay" />
            <h4 className="xl:w-[70%]">Always know what you pay</h4>
          </div>
          <p className="min-h-[120px]">
            Integrated per-transaction pricing with no hidden fees.
          </p>
        </div>
        <div className="p-7 clr-bdr">
          <div className="flex flex-row md:flex-col items-center md:items-start gap-5">
            <Image src={codeico} alt="What you Pay" />
            <h4 className="xl:w-[70%]">Start your integration</h4>
          </div>
          <p className="min-h-[120px]">
            Get up and running with Checkbook in as little as 10 minutes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReadytoGetStart;
