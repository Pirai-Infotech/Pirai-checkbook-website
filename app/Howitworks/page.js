"use client";
import React from "react";
import signupArrowcolor from "../../public/signup-arrow.svg";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import VideoWithThumbnail from "../ui/VideoWithThumbnail";
import Faq from "../ui/Faq";
import checkbook from "../../public/checkbook.svg";
import checkico from "../../public/check_ico.svg";
import bankico from "../../public/bank_ico.svg";
import Videothumbnail from "@/public/Videothumbnail.svg";

const sections = [
  {
    image: checkbook,
    title: "Create your Checkbook.io account",
    description:
      "To get started, simply create an account using your name and email. You will not be charged until you send a check. No monthly fees.",
    cta: "Read More",
    num: "1",
  },
  {
    image: bankico,
    title: "Add and verify your bank",
    description:
      "To start sending, you will need to verify your banking information, identify your bank account as personal or business, and choose between manual and instant verification.",
    cta: "Read More",
    num: "2",
  },
  {
    image: checkico,
    title: "Send your first check",
    description:
      "Once your bank is verified, you are ready to start sending! Simply enter the recipient's name and email and hit send check. You can also use our RESTful API, CSV upload, or Integrations.",
    cta: "Read More",
    num: "3",
  },
];
function page() {
  return (
    <div className="">
      <section className="container m-auto flex flex-col lg:flex-row gap-10 lg:gap-3 items-center py-10   sm:w-[95%] lg:w-[80%] 2xl:w-[70%] px-4 md:px-[0]">
        <div className="flex-1 px-[0%] sm:px-[7%] lg:px-[0%] lg:pr-[5%] 2xl:pr-[2%]">
          <h1 className="text-center lg:text-left text-[45px] xl:text-[70px] 2xl:text-[88px] whitespace-nowrap">
            How it <span>Works</span>
          </h1>
          <p className="pt-5 text-center lg:text-left text-[18px]  2xl:text-[22px] 3xl:text-[27px] 2xl:pr-[5%]">
            No percentages. No hidden fees. Checkbook offers everything needed
            to disburse payments at scale. Get in touch with our sales team for
            details on volume discounts, integration assistance, and our
            dedicated support.
          </p>
        </div>
        <div className="flex-1">
          <VideoWithThumbnail
            videoUrl="/path-to-your-video.mp4"
            videothumbnail={Videothumbnail}
            alt="VideoThumbnail"
            classnames="rounded-[23px]"
          />
        </div>
      </section>
      <section className="container m-auto py-10  px-4 md:px-[0] sm:w-[95%] lg:w-[80%] 2xl:w-[70%]">
        <h2 className="hidden 2xl:block text-[44px] text-[#404040] text-center pb-10">
          3 Simple Steps
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 items-start lg:justify-center gap-10 ">
          {sections?.map((section, index) => (
            <div
              key={index}
              className={`py-7 px-8 lg:px-5 grad-border grad-border-compliance bdr-hiw-rds relative ${
                index === 1 && "xl:mt-[50px]"
              } `}
            >
              <div className="flex flex-col items-left gap-5">
                <Image
                  src={section.image}
                  alt={section.title}
                  className="ml-4"
                />
                <h4 className="pl-4 border-l-2 border-[#9180FF]  text-[22px] 2xl:text-[24px] ">
                  {section.title}
                </h4>
              </div>
              <p className="py-5 text-left pl-4 text-[18px]">
                {section.description}
              </p>
              <CTAButton
                icon={signupArrowcolor}
                backgroundType={"bg-gradient-to-r"}
                backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                textColor={"text-[#fff]"}
                content={section.cta}
                paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-6 ml-4"}
                paddingy={"py-3"}
                textSize={"text-[16px] xl:text-[18px]"}
                rounderTL={"rounded-tl-none"}
                rounderTR={"rounded-tr-[60px]"}
                rounderBR={"rounded-br-[60px]"}
                rounderBL={"rounded-bl-[40px]"}
              />
              <div className="absolute top-[-10px] right-[0px] text-[#fff] bg-[#89D6FF] py-[10px] px-[17px] rounded-[50px]">
                {section.num}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Faq />

      <ReadytoGetStart />
    </div>
  );
}

export default page;
