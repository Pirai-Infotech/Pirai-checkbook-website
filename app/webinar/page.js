"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Webinarph from "@/public/webinar_ph.svg";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import signupArrowcolor from "@/public/sign-up-voilet.svg";
import Webinarcon from "../ui/Webinarcon";

const contentList = [
  {
    title: "Driving HCP finance compliance with AI",
    description:
      "If you're running a finance team in the healthcare industry, you know how hard it is to retain both institutional knowledge and expertise in the face of do-more-with-less initiatives. You need targeted, innovative solutions to help you do it all...",
    imageUrl: Webinarph,
    link: "",
  },
  {
    title: "Driving HCP finance compliance with AI",
    description:
      "If you're running a finance team in the healthcare industry, you know how hard it is to retain both institutional knowledge and expertise in the face of do-more-with-less initiatives. You need targeted, innovative solutions to help you do it all...",
    imageUrl: Webinarph,
    link: "",
  },
  {
    title: "Driving HCP finance compliance with AI",
    description:
      "If you're running a finance team in the healthcare industry, you know how hard it is to retain both institutional knowledge and expertise in the face of do-more-with-less initiatives. You need targeted, innovative solutions to help you do it all...",
    imageUrl: Webinarph,
    link: "",
  },
  {
    title: "Driving HCP finance compliance with AI",
    description:
      "If you're running a finance team in the healthcare industry, you know how hard it is to retain both institutional knowledge and expertise in the face of do-more-with-less initiatives. You need targeted, innovative solutions to help you do it all...",
    imageUrl: Webinarph,
    link: "",
  },
  {
    title: "Driving HCP finance compliance with AI",
    description:
      "If you're running a finance team in the healthcare industry, you know how hard it is to retain both institutional knowledge and expertise in the face of do-more-with-less initiatives. You need targeted, innovative solutions to help you do it all...",
    imageUrl: Webinarph,
    link: "",
  },
  {
    title: "Driving HCP finance compliance with AI",
    description:
      "If you're running a finance team in the healthcare industry, you know how hard it is to retain both institutional knowledge and expertise in the face of do-more-with-less initiatives. You need targeted, innovative solutions to help you do it all...",
    imageUrl: Webinarph,
    link: "",
  },
  {
    title: "Driving HCP finance compliance with AI",
    description:
      "If you're running a finance team in the healthcare industry, you know how hard it is to retain both institutional knowledge and expertise in the face of do-more-with-less initiatives. You need targeted, innovative solutions to help you do it all...",
    imageUrl: Webinarph,
    link: "",
  },
  {
    title: "Driving HCP finance compliance with AI",
    description:
      "If you're running a finance team in the healthcare industry, you know how hard it is to retain both institutional knowledge and expertise in the face of do-more-with-less initiatives. You need targeted, innovative solutions to help you do it all...",
    imageUrl: Webinarph,
    link: "",
  },
];

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
      <section className="container m-auto pb-20 md:pb-30 px-[30px] sm:px-0">
        <h2 className="text-center text-[30px] lg:text-[44px] font-[400] md:px-[18%] py-8 lg:px-20 xl:px-0">
          Upcoming Webinars
        </h2>
        <div className="p-10 xl:p-20 lg:w-[95%] 3xl:w-[78%] m-auto bg-gradient-to-r from-[#9281FF]  to-[#3E89BD] grad-border grad-border-webinar bdr-wbnr-rds shadow-bottom">
          <div className="flex flex-col-reverse sm:flex-row-reverse lg:flex-row justify-between items-center sm:items-start lg:items-center gap-5 ">
            <div className="w-[92%] lg:w-[58%] sm:pl-10 lg:pl-0 md:pb-5 lg:pb-0">
              <h4 className="border-0 lg:border-l-2 border-[#fff] lg:pl-4 text-[#ffffff] text-[18px]  font-[400] md:mb-5 lg:mb-0 md:py-5">
                THURSDAY, JULY 11TH
                <span className="text-[#fff] text-[24px] lg:text-[37px]  block font-[300] pt-2 ">
                  Elevate Expense Audits: AI Insights for Productivity & Policy
                </span>
              </h4>
              <p className="text-[18px] text-[#fff] lg:pl-4 pb-5 lg:pb-10 py-5 ">
                As finance organizations continue to take a closer look at
                spending to help drive business growth and reduce cost, auditors
                face a daunting challen...
              </p>

              <CTAButton
                icon={signupArrowcolor}
                backgroundType={"bg-gradient-to-r"}
                backgroundColor={"from-[#fff] to-[#fff]"}
                textColor={"text-[#8883F7]"}
                content={"Sign Up"}
                paddingx={"px-8 lg:px-6 xl:px-7 2xl:px-8"}
                paddingy={"py-3"}
                textSize={"text-[16px] xl:text-[18px]"}
                rounderTL={"rounded-tl-none"}
                rounderTR={"rounded-tr-[60px]"}
                rounderBR={"rounded-br-[60px]"}
                rounderBL={"rounded-bl-[40px]"}
              />
            </div>
            <div className="">
              <h4 className="block lg:hidden text-[#ffffff] text-[18px]  font-semibold mb-4">FEATURED</h4>
              <Image
                alt="Webinarph"
                src={Webinarph}
                className="object-contain m-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <Webinarcon
        contentList={contentList}
        classlist="text-[#9180FF] font-[500] xl:font-[400] text-[27px] 3xl:text-[30px] block pt-2 "
      />

      <ReadytoGetStart />
    </div>
  );
}

export default Page;
