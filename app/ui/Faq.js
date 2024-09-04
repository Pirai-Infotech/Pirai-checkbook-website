import React from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import cartImage from "@/public/cartBackground.svg"
import Image from "next/image";


const { Panel } = Collapse;

const expandIcon = ({ isActive }) =>
  isActive ? <MinusOutlined /> : <PlusOutlined />;

const questions = [
  {
    question: "How de I verify my bank?",
    answer:
      "Banks can either be verified instantly (using online banking username and password) or manually (using account and routing number) on Checkbook. If you are adding a bank for the first time on Checkbook, you will be prompted to complete your profile thorough a banner notification...",
    ctaText: "Read More",
    ctaLink: "/",
  },
  {
    question: "How long does it take to receive funds?",
    answer:
      "Banks can either be verified instantly (using online banking username and password) or manually (using account and routing number) on Checkbook. If you are adding a bank for the first time on Checkbook, you will be prompted to complete your profile thorough a banner notification...",
    ctaText: "Read More",
    ctaLink: "/",
  },
  {
    question: "How does Checkbook.io keep customer data secure?",
    answer:
      "Banks can either be verified instantly (using online banking username and password) or manually (using account and routing number) on Checkbook. If you are adding a bank for the first time on Checkbook, you will be prompted to complete your profile thorough a banner notification...",
    ctaText: "Read More",
    ctaLink: "/",
  },
  {
    question: "How do I increase my limits?",
    answer:
      "Banks can either be verified instantly (using online banking username and password) or manually (using account and routing number) on Checkbook. If you are adding a bank for the first time on Checkbook, you will be prompted to complete your profile thorough a banner notification...",
    ctaText: "Read More",
    ctaLink: "/",
  },
  {
    question: "How do I add a different bank account?",
    answer:
      "Banks can either be verified instantly (using online banking username and password) or manually (using account and routing number) on Checkbook. If you are adding a bank for the first time on Checkbook, you will be prompted to complete your profile thorough a banner notification...",
    ctaText: "Read More",
    ctaLink: "/",
  },
];
const defaultActiveKey = [0];
const Faq = () => {
  return (
    <section className="px-8 sm:px-0 relative">
      <div className="container m-auto rounded-[20px] sm:rounded-[60px] bg-grad-1 px-6 sm:px-10 py-10 lg:px-[100px] lg:py-[60px] sm:w-[95%] lg:w-[80%] 2xl:w-[70%]">
        <h3 className="text-center pb-10">Frequently Asked Questions</h3>
        <Collapse
          expandIcon={expandIcon}
          expandIconPosition="end"
          className="border-0 bg-[unset]"
          defaultActiveKey={defaultActiveKey}
        >
          {questions?.map((item, index) => (
            <Panel
              className="text-[#4F535B] text-[20px] md:text-[24px] font-bold md:font-[400]"
              header={item.question}
              key={index}
            >
              <p className="text-[16px] lg:text-[18px]">
                {item.answer}
                <span className="lg:block lg:pt-5">
                  <a
                    className="text-[18px]  font-[600] text-[#7F53E8] btn btn-primary"
                    href={item.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.ctaText}
                  </a>
                </span>
              </p>
            </Panel>
          ))}
        </Collapse>
      </div>
      <div className="absolute z-[-1] top-[80px] left-[-500px] md:left-[0]">
            <Image src={cartImage} className="w-[100%] opacity-30 sm:opacity-30 md:opacity-30 lg:opacity-70" alt="cartImage" />
         </div>
    </section>
  );
};

export default Faq;
