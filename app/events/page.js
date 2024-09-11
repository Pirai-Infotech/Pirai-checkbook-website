"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Blogcon from "../ui/Blogcon";
import Businessintelligence from "@/public/Businessintelligence.svg";

const contentList = [
  {
    date: "JUNE 25-26, 2024",
    title: "SSON Finance Transformation Virtual Summit",
    description:
      "Join our session during the SSON Finance Transformation Virtual Summit on Tuesday, June 25th at 9:00am ET! VP of Global Solutions Consulting, Andy Foster, will discuss how you should be evaluating generative AI for your finance functions. Learn how to ask the right questions to get the answers you need to effectively evaluate things like ROI, implementation, and benefits of generative AI for your team. This event is free to join!",
    imageUrl: Businessintelligence,
  },
  {
    date: "JUNE 25-26, 2024",
    title: "SSON Finance Transformation Virtual Summit",
    description:
      "Join our session during the SSON Finance Transformation Virtual Summit on Tuesday, June 25th at 9:00am ET! VP of Global Solutions Consulting, Andy Foster, will discuss how you should be evaluating generative AI for your finance functions. Learn how to ask the right questions to get the answers you need to effectively evaluate things like ROI, implementation, and benefits of generative AI for your team. This event is free to join!",
    imageUrl: Businessintelligence,
  },
  {
    date: "JUNE 25-26, 2024",
    title: "SSON Finance Transformation Virtual Summit",
    description:
      "Join our session during the SSON Finance Transformation Virtual Summit on Tuesday, June 25th at 9:00am ET! VP of Global Solutions Consulting, Andy Foster, will discuss how you should be evaluating generative AI for your finance functions. Learn how to ask the right questions to get the answers you need to effectively evaluate things like ROI, implementation, and benefits of generative AI for your team. This event is free to join!",
    imageUrl: Businessintelligence,
  },
  {
    date: "JUNE 25-26, 2024",
    title: "SSON Finance Transformation Virtual Summit",
    description:
      "Join our session during the SSON Finance Transformation Virtual Summit on Tuesday, June 25th at 9:00am ET! VP of Global Solutions Consulting, Andy Foster, will discuss how you should be evaluating generative AI for your finance functions. Learn how to ask the right questions to get the answers you need to effectively evaluate things like ROI, implementation, and benefits of generative AI for your team. This event is free to join!",
    imageUrl: Businessintelligence,
  },
  {
    date: "JUNE 25-26, 2024",
    title: "SSON Finance Transformation Virtual Summit",
    description:
      "Join our session during the SSON Finance Transformation Virtual Summit on Tuesday, June 25th at 9:00am ET! VP of Global Solutions Consulting, Andy Foster, will discuss how you should be evaluating generative AI for your finance functions. Learn how to ask the right questions to get the answers you need to effectively evaluate things like ROI, implementation, and benefits of generative AI for your team. This event is free to join!",
    imageUrl: Businessintelligence,
  },
  {
    date: "JUNE 25-26, 2024",
    title: "SSON Finance Transformation Virtual Summit",
    description:
      "Join our session during the SSON Finance Transformation Virtual Summit on Tuesday, June 25th at 9:00am ET! VP of Global Solutions Consulting, Andy Foster, will discuss how you should be evaluating generative AI for your finance functions. Learn how to ask the right questions to get the answers you need to effectively evaluate things like ROI, implementation, and benefits of generative AI for your team. This event is free to join!",
    imageUrl: Businessintelligence,
  },
  {
    date: "JUNE 25-26, 2024",
    title: "SSON Finance Transformation Virtual Summit",
    description:
      "Join our session during the SSON Finance Transformation Virtual Summit on Tuesday, June 25th at 9:00am ET! VP of Global Solutions Consulting, Andy Foster, will discuss how you should be evaluating generative AI for your finance functions. Learn how to ask the right questions to get the answers you need to effectively evaluate things like ROI, implementation, and benefits of generative AI for your team. This event is free to join!",
    imageUrl: Businessintelligence,
  },
];
function Page() {
  return (
    <div>
      <section className="container main-con m-auto pb-20">
        <div className="w-[80%] sm:w-[70%] m-auto">
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px] md:px-20 lg:px-0">
            Upcoming <span>Events</span>
          </h1>
          <p className="pt-5 lg:pt-[30px] text-center text-[18px] font-[400] 2xl:text-[27px]">
            See where we’ll be and get a chance to meet with the Checkbook team.
          </p>
        </div>
      </section>
      <Blogcon
        contentList={contentList}
        borderclasslist="flex flex-col-reverse lg:flex-row items-center justify-between grad-border grad-border-compliance bdr-sm-blg gap-5 p-10 xl:p-20 sm:w-[45%] lg:w-[95%] 3xl:w-[78%] m-auto  lg:bg-[#fff0]"
        classlist="text-[#404040] lg:text-[#9180FF] font-[400] lg:text-[28px] 3xl:text-[40px] block pt-2 pr-20"
      />
      <ReadytoGetStart />
    </div>
  );
}

export default Page;
