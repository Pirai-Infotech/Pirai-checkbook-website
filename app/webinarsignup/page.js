"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Chronicles from "@/public/cb_chronicles.svg";
import Image from "next/image";
import SpeakerPh from "@/public/Speaker_ph.svg";

function Page() {
  return (
    <div>
      <section className="container main-con m-auto pb-5 lg:pb-10 xl:py-20">
        <div className="w-[100%] sm:w-[70%] m-auto">
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px] md:px-[18%] lg:px-20 xl:px-0">
            Checkbook <span>Webinars</span>
          </h1>
          <p className="pt-5 lg:pt-[30px] text-center text-[18px] font-[300] lg:font-[400] 2xl:text-[27px] w-[100%] lg:w-[75%] m-auto">
            Illuminating discussions with respected finance leaders from
            different industries and experts from the Checkbook team.
          </p>
        </div>
      </section>
      <section>
        <div className="container main-con m-auto md:px-[30px] sm:px-[10px] flex flex-col sm:flex-row lg:flex-col flex-wrap gap-10 justify-center pb-10">
          <div className="p-7 xl:p-20  lg:w-[95%] 3xl:w-[78%] m-auto bg-gradient-to-r from-[#9281FF]  to-[#3E89BD] grad-border grad-border-webinar bdr-wbnr-rds shadow-bottom">
            <div className="flex flex-row-reverse lg:flex-row justify-between items-start md:items-center gap-5 ">
              <div className="w-[87%] lg:w-[58%] sm:pl-10 lg:pl-0 md:pb-5 lg:pb-0">
                <h4 className="border-l-2 md:border-0 lg:border-l-2 border-[#fff] pl-4 text-[#ffffff] text-[12px] sm:text-[18px] font-[700] md:mb-5 lg:mb-0 md:py-5">
                  THURSDAY, JULY 11TH
                  <span className="text-[#fff] text-[25px] sm:text-[35px] lg:text-[48px] 3xl:text-[70px] block font-[300] pt-2 ">
                    Elevate Expense Audits: AI Insights for Productivity &
                    Policy
                  </span>
                </h4>
              </div>
              <div className="">
                <Image
                  alt="Chronicles"
                  src={Chronicles}
                  className="object-contain w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container main-con m-auto px-[30px] sm:px-[10px] flex flex-col sm:flex-row lg:flex-col flex-wrap gap-10 justify-center pb-10">
          <div className="flex flex-col lg:flex-row justify-around xl:p-20  lg:w-[95%] 3xl:w-[78%] m-auto">
            <div className=" w-[100%] lg:w-[20%] pb-20 lg:pb-0">
              <h4 className="text-[#9281FF] text-[27px] text-center font-[450] pb-7">
                SPEAKERS
              </h4>
              <div className="flex flex-col md:flex-row lg:flex-col justify-around">
                <div className="relative">
                  <Image
                    alt="SpeakerPh"
                    src={SpeakerPh}
                    className="object-contain w-[70%] m-auto md:w-full"
                  />
                  <p className="text-[27px] font-[450] text-center pt-3">
                    PJ Gupta
                  </p>
                  <p className="text-[23px] font-[300] text-center">
                    CEO & Founder
                  </p>
                  <div class="md:hidden lg:block border-0 border-b-4 border-dashed border-[#4F535B] absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[14%] "></div>
                </div>
                <div className="pt-20 md:pt-0 lg:pt-20">
                  <Image
                    alt="SpeakerPh"
                    src={SpeakerPh}
                    className="object-contain w-[70%] m-auto md:w-full"
                  />
                  <p className="text-[27px] font-[450] text-center pt-3">
                    PJ Gupta
                  </p>
                  <p className="text-[23px] font-[300] text-center">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] lg:w-[65%]">
              <p className="text-[22px] lg:text-[27px]">
                As finance organizations continue to take a closer look at
                spending to help drive business growth and reduce cost, auditors
                face a daunting challenge to monitor and control travel and
                entertainment expenditures, uncover reimbursement errors and
                abuses, and provide the necessary data to support findings and
                communicate recommendations to management.  Auditors are being
                tasked with more work and fewer resources. <br /> <br />
                Join us to learn how Checkbook Expense Audit can expand the
                capabilities of your accounting and audit teams without adding
                headcount. 
                <br />
                <br />
                This 30-minute webinar will cover:
              </p>
              <br />
              <br />
              <ul className="text-[22px] lg:text-[27px] font-[300] list-disc pl-10">
                <li>
                  Using embedded Generative AI to coach audit teams to be more
                  productive and exercise professional skepticism effectively
                </li>
                <li>
                  Improving audit quality with ongoing policy compliance and
                  automation
                </li>
                <li>
                  Tips and tricks to identifying the right risks for your audit
                  teams to review across 100% of company expense reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReadytoGetStart />
    </div>
  );
}

export default Page;
