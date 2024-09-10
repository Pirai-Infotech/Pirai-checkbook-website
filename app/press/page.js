"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import PressAwards from "../ui/PressAwards";

const contentList = [
  {
    question: "2024",
    content: [
      {
        spancon: "[Press release]",
        month: "May 2024",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
      },
      {
        spancon: "[Press release]",
        month: "May 2024",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
      },
      {
        spancon: "[Press release]",
        month: "May 2024",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
      },
    ],
  },
  {
    question: "2023",
    content: "",
  },
  {
    question: "2022",
    content: "",
  },
  {
    question: "2021",
    content: "",
  },
  {
    question: "2020",
    content: "",
  },
  {
    question: "2019",
    content: "",
  },
  {
    question: "2018",
    content: "",
  },
];
function Page() {
  return (
    <div>
      <section className="container m-auto pb-5 xl:pb-20">
        <div className="w-[80%] sm:w-[70%] m-auto">
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px] md:px-[18%] lg:px-20 xl:px-0">
            Checkbook <span>Press & Media</span>
          </h1>
          <p className="pt-5 lg:pt-[30px] text-center text-[18px] font-[400] 2xl:text-[27px] w-[100%] lg:w-[75%] m-auto">
            We&apos;ve been busy! Here&apos;s the full list of our press
            releases, newsletters, and other media moments. For questions, reach
            us at
            <a className="text-[#9180FF]"> press@checkbook.io.</a>
          </p>
        </div>
      </section>
      <PressAwards contentList={contentList} />
      <ReadytoGetStart />
    </div>
  );
}

export default Page;
