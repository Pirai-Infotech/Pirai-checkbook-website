"use client";
import React from "react";
import signupArrowcolor from "../../public/signup-arrow.svg";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import VideoWithThumbnail from "../ui/VideoWithThumbnail";
import Faq from "../ui/Faq";
import checkbook from "../../public/checkbook.svg";
import checkico from "../../public/check_ico.svg";
import bankico from "../../public/bank_ico.svg";

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
    <div className="px-8 sm:px-0">
      <section className="w-[90%] lg:w-[70%] m-auto flex flex-col lg:flex-row gap-3 items-center py-10">
        <div className="flex-1">
          <h1 className="text-center xl:text-left">
            How it <span>Works</span>
          </h1>
          <p className="pt-5 text-center xl:text-left">
            No percentages. No hidden fees. Checkbook offers everything needed
            to disburse payments at scale. Get in touch with our sales team for
            details on volume discounts, integration assistance, and our
            dedicated support.
          </p>
        </div>
        <div className="flex-1">
          <VideoWithThumbnail />
        </div>
      </section>
      <section className="w-[90%] lg:w-[70%] m-auto py-10 flex flex-wrap items-start lg:justify-center gap-5 lg:gap-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`py-7 px-10 lg:px-5 grad-border bdr-sm-rds relative ${
              index === 1 && "lg:mt-[50px]"
            } w-full sm:w-[48%] lg:w-[32%]`}
          >
            <div className="flex flex-col items-left gap-5">
              <Image src={section.image} alt={section.title} className="ml-4" />
              <h4 className="xl:w-[70%] pl-4 lg:pl-4 border-l-2 border-[#9180FF]">
                {section.title}
              </h4>
            </div>
            <p className="py-5 text-left pl-4">{section.description}</p>
            <CTAButton
              icon={signupArrowcolor}
              backgroundType={""}
              backgroundColor={""}
              textColor={"text-[#fff]"}
              classname={"btn-bg-grad ml-4"}
              content={section.cta}
            />
            <div className="absolute top-[-20px] right-[-10px] bg-[#89D6FF] py-[10px] px-[17px] rounded-[50px]">
              {section.num}
            </div>
          </div>
        ))}
      </section>

      <section className="py-10">
        <Faq />
      </section>
      <section className="w-[90%] m-auto">
        <ReadytoGetStart />
      </section>
    </div>
  );
}

export default page;
