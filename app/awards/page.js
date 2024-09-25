"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import PressAwards from "../ui/PressAwards";

const contentList = [
  {
    question: "2022",

    listcon: [
      { listli: "Fortune's 100 Best Small Workplaces " },
      { listli: "San Francisco Chronicle’s Top Workplaces in the Bay Area" },
      {
        listli:
          "Fast Company’s World Changing Ideas Awards for Their Employee-controlled Compensation Program",
      },
      { listli: "CPA Practice Advisor’s Readers' Choice Awards" },
    ],
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
  {
    question: "2017",
    content: "",
  },
  {
    question: "2016",
    content: "",
  },
];
function Page() {
  return (
    <div className="px-4 sm:px-0">
      <section className="container main-con m-auto mt-8 md:mt-10 lg:mt-14 pb-10 md:pb-12 lg:pb-20">
        <div className="w-[80%] sm:w-[70%] m-auto">
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px] md:px-[18%] lg:px-20 xl:px-0">
            Checkbook <span>Awards</span>
          </h1>
          <p className="pt-5 lg:pt-[30px] text-center text-[18px] font-[400] 2xl:text-[27px] w-[100%] lg:w-[75%] m-auto">
            Check out why Checkbook is rated as a great place to work as well as
            why folks love our product, support, and brand!
          </p>
        </div>
      </section>
      <PressAwards contentList={contentList} />
      <ReadytoGetStart />
    </div>
  );
}

export default Page;
