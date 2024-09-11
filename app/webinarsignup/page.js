"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Synctera from "@/public/Synctera.svg";
import Image from "next/image";

function Page() {
  return (
    <div>
      <section className="container main-con m-auto pb-5 lg:pb-10 xl:py-20">
        <div className="w-[80%] sm:w-[70%] m-auto">
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px] md:px-[18%] lg:px-20 xl:px-0">
            Checkbook <span>Webinars</span>
          </h1>
          <p className="pt-5 lg:pt-[30px] text-center text-[18px] font-[400] 2xl:text-[27px] w-[100%] lg:w-[75%] m-auto">
            Illuminating discussions with respected finance leaders from
            different industries and experts from the Checkbook team.
          </p>
        </div>
      </section>
      <section>
        <div className="container main-con m-auto px-[30px] sm:px-[10px] flex flex-col sm:flex-row lg:flex-col flex-wrap gap-10 justify-center pb-10">
          <div className="p-10 xl:p-20  lg:w-[95%] 3xl:w-[78%] m-auto bg-[#3D77EB]">
            <div className="flex flex-col-reverse sm:flex-row-reverse lg:flex-row justify-between  gap-5 ">
              <div className="lg:w-[58%] sm:pl-10 lg:pl-0 pb-5 lg:pb-0">
                <h4 className="lg:border-l-2 border-[#fff] sm:pl-4 text-[#ffffff]  text-[18px] lg:text-[24px] mb-5 lg:mb-0">
                  THURSDAY, JULY 11TH
                  <span className="text-[#fff] text-[24px] block pt-2">
                    THURSDAY, JULY 11TH Elevate Expense Audits: AI Insights for
                    Productivity & Policy
                  </span>
                </h4>
              </div>
              <div className="bg-grad btm-lr-n w-[284px] h-[181px] lg:w-[470px] lg:h-[300px] border-[6px] border-[#fff]">
                <Image
                  alt="Synctera"
                  src={Synctera}
                  className="object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReadytoGetStart />
    </div>
  );
}

export default Page;
