"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Glossary from "../ui/glossary";

const contentList = [
  {
    question: "ACH",
    description:
      "ACH (Automated Clearing House) is a payment processing network that’s used to send money electronically between banks in the United States.",
    content: [
      {
        ques: "ACH API",
        answer:
          "ACH (Automated Clearing House) is a payment processing network that’s used to send money electronically between banks and financial institutions in the United States",
        cta: "Read More",
      },
      {
        ques: "ACH Credit",
        answer: "",
        cta: "Read More",
      },
      {
        ques: "ACH Payment Returns",
        answer: "",
        cta: "Read More",
      },
      {
        ques: "ACH Return Codes",
        answer: "",
        cta: "Read More",
      },
      {
        ques: "ACH Return Codes",
        answer: "",
        cta: "Read More",
      },
      {
        ques: "ACH Return Codes",
        answer: "",
        cta: "Read More",
      },
      {
        ques: "ACH Return Codes",
        answer: "",
        cta: "Read More",
      },
      {
        ques: "ACH Return Codes",
        answer: "",
        cta: "Read More",
      },
      {
        ques: "ACH Return Codes",
        answer: "",
        cta: "Read More",
      },
      {
        ques: "ACH Return Codes",
        answer: "",
        cta: "Read More",
      },
    ],
  },
  {
    question: "RTP",
    content: "",
  },
  {
    question: "FedNow",
    content: "",
  },
  {
    question: "Wire Transfers",
    content: "",
  },
  {
    question: "International Payment Rails",
    content: "",
  },
  {
    question: "Ledgering",
    content: "",
  },
  {
    question: "payment Operations",
    content: "",
  },
  {
    question: "Bank Accounts",
    content: "",
  },
  {
    question: "Treasury Management",
    content: "",
  },
  {
    question: "Core Banking Systems",
    content: "",
  },
  {
    question: "Payment Industry Bodies",
    content: "",
  },
];
function Page() {
  return (
    <div>
      <section className="container m-auto pb-5 xl  :pb-20">
        <div className="w-[80%] sm:w-[70%] m-auto">
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px] md:px-[18%] lg:px-20 xl:px-0">
            Insights <span>Learn</span>
          </h1>
          <p className="pt-5 lg:pt-[30px] text-center text-[18px] font-[400] 2xl:text-[27px] w-[100%] lg:w-[75%] m-auto">
            Welcome to Learn, where we provide straightforward,
            easy-to-understand definitions of the payments industry.
          </p>
        </div>
      </section>
      <Glossary contentList={contentList} />
      <ReadytoGetStart />
    </div>
  );
}

export default Page;
