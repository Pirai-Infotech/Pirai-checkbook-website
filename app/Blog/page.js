"use client";
import React, { useState } from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import CTAButton from "../ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";

const contentList = [
  {
    date: "SEP 01, 2023",
    title: "FinTech Funding and Valuation versus Demand and Supply",
    description:
      "There’s been a growing rumbling in recent months that fintech is plateauing. After all, now that AI is here, what’s to stop it from demolishing the need for fintech innovations altogether?",
    imageUrl: "/Businessintelligence.svg",
  },
  {
    date: "JUL 11, 2023",
    title: "The Anatomy of a 99% Completion Rate",
    description:
      "Most payments happen without payors or recipients ever having to think about them. And that’s the way it should be—in a perfect world, every transaction would be seamless. But it’s not a perfect world, and the reality is that only between 92–95% of payments are completed successfully. While at first glance, that statistic may not be jarring, but think of it this way: what if your paycheck bounced 8% of the time? Suddenly 92% seems a far cry from acceptable.",
    imageUrl: "/Businessintelligence.svg",
  },
  {
    date: "MAY 26, 2023",
    title: "How The Money Flows: Payments for Cash Advance",
    description:
      "There’s probably been a time in your life when you had an unexpected emergency arise and didn’t have the money to address it until your next paycheck. If you don’t have friends or family to help, there aren’t many reputable solutions that can get you money quickly. That’s where cash advance comes in: it’s a short-term lending tool designed to bridge the financial gap between paychecks. Here’s a look at the cash advance industry as a whole and how changing market conditions have made faster payments a necessity.",
    imageUrl: "/Businessintelligence.svg",
  },
  {
    date: "APR 15, 2023",
    title: "The Future of FinTech: A Look Ahead",
    description:
      "As the financial technology industry continues to evolve, it's important to look ahead at the emerging trends that will shape the future of fintech.",
    imageUrl: "/Businessintelligence.svg",
  },
  {
    date: "MAR 22, 2023",
    title: "Understanding Digital Banking Trends",
    description:
      "Digital banking is on the rise. This article explores the latest trends in the industry and what they mean for consumers and businesses alike.",
    imageUrl: "/Businessintelligence.svg",
  },
  {
    date: "FEB 10, 2023",
    title: "Cryptocurrency and Its Impact on FinTech",
    description:
      "Cryptocurrency is changing the landscape of financial technology. This article delves into the impact of digital currencies on the fintech industry.",
    imageUrl: "/Businessintelligence.svg",
  },
  {
    date: "FEB 10, 2023",
    title: "Cryptocurrency and Its Impact on FinTech",
    description:
      "Cryptocurrency is changing the landscape of financial technology. This article delves into the impact of digital currencies on the fintech industry.",
    imageUrl: "/Businessintelligence.svg",
  },
];

function Page() {
  const [visibleItems, setVisibleItems] = useState(3);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
  };

  return (
    <div className="px-2 sm:px-8 sm:px-0">
      <section className="container m-auto">
        <div className="flex-1 sm:px-[9%] lg:px-10">
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px]">
            Checkbook <span>Resources</span>
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col flex-wrap gap-5 justify-center">
          {contentList.slice(0, visibleItems).map((content, index) => (
            <div
              key={index}
              className="flex flex-col-reverse lg:flex-row justify-between grad-border bdr-sm-rds no-bdr gap-10 lg:p-20 mt-10 sm:w-[45%] lg:w-[100%]"
            >
              <div className="lg:w-[55%] pl-10 lg:pl-0">
                <h4 className="border-l-2 border-[#9180FF] pl-4 text-[#3EA6BB] text-[24px] mb-10 lg:mb-0">
                  {content.date}
                  <span className="text-[#9180FF] block pt-2">
                    {content.title}
                  </span>
                </h4>
                <p className="text-[18px] pl-4 pt-10 hidden lg:block min-h-60">
                  {content.description}
                </p>

                <CTAButton
                  icon={signupArrow}
                  backgroundType={"bg-gradient-to-r"}
                  backgroundColor={"from-[#9281FF] to-[#89D6FF]"}
                  textColor={"text-[#FFF]"}
                  content={"Read More"}
                />
              </div>
              <div className="bg-grad lg:w-[40%] ">
                <img alt="example" src={content.imageUrl} />
              </div>
            </div>
          ))}
        </div>
        {visibleItems < contentList.length && (
          <div className="flex justify-center mt-10">
            <CTAButton
              onClick={handleLoadMore}
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#9281FF] to-[#89D6FF]"}
              textColor={"text-[#FFF]"}
              content={"Older Posts"}
            />
          </div>
        )}
      </section>

      <ReadytoGetStart />
    </div>
  );
}

export default Page;
