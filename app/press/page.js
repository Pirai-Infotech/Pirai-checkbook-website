"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import PressAwards from "../ui/PressAwards";
import NavigateButton from "../ui/NavigateButton";

const contentList = [
  {
    question: "2024",
    content: [
      {
        spancon: "[Press release]",
        month: "May 2024",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.",
      },
      {
        spancon: "[Press release]",
        month: "May 2024",
        description:
          "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. ",
      },
      {
        spancon: "[Press release]",
        month: "May 2024",
        description:
          "Praesent dapibus, neque id cursus faucibus, tortor.",
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
    <div className="px-5 md:px-0">
      <section className="container main-con m-auto mt-8 mg:mt-10 lg:mt-14 pb-10 md:pb-12 lg:pb-20">
        <div>
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
      <NavigateButton />
      <PressAwards contentList={contentList} />
      <ReadytoGetStart />
    </div>
  );
}

export default Page;
