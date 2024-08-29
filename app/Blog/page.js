"use client";
import React, { useState } from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import CTAButton from "../ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import Entrepreneurship from "@/public/Entrepreneurship.svg";
import Businessintelligence from "@/public/Businessintelligence.svg";
import Payments from "@/public/Payments.svg";
import Image from "next/image";

const buttonlists = [
  {
    btnname: "Blog",
    btnlink: "",
  },
  {
    btnname: "Case Studies",
    btnlink: "",
  },
  {
    btnname: "Webinar",
    btnlink: "",
  },
  {
    btnname: "Podcast",
    btnlink: "",
  },
  {
    btnname: "Videos",
    btnlink: "",
  },
  {
    btnname: "In the Press",
    btnlink: "",
  },
  {
    btnname: "Product Info/Updates",
    btnlink: "",
  },
  {
    btnname: "API Docs",
    btnlink: "",
  },
];
const contentList = [
  {
    date: "SEP 01, 2023",
    title: "FinTech Funding and Valuation versus Demand and Supply",
    description:
      "There’s been a growing rumbling in recent months that fintech is plateauing. After all, now that AI is here, what’s to stop it from demolishing the need for fintech innovations altogether?",
    imageUrl: Businessintelligence,
  },
  {
    date: "JUL 11, 2023",
    title: "The Anatomy of a 99% Completion Rate",
    description:
      "Most payments happen without payors or recipients ever having to think about them. And that’s the way it should be—in a perfect world, every transaction would be seamless. But it’s not a perfect world, and the reality is that only between 92–95% of payments are completed successfully. While at first glance, that statistic may not be jarring, but think of it this way: what if your paycheck bounced 8% of the time? Suddenly 92% seems a far cry from acceptable.",
    imageUrl: Businessintelligence,
  },
  {
    date: "MAY 26, 2023",
    title: "How The Money Flows: Payments for Cash Advance",
    description:
      "There’s probably been a time in your life when you had an unexpected emergency arise and didn’t have the money to address it until your next paycheck. If you don’t have friends or family to help, there aren’t many reputable solutions that can get you money quickly. That’s where cash advance comes in: it’s a short-term lending tool designed to bridge the financial gap between paychecks. Here’s a look at the cash advance industry as a whole and how changing market conditions have made faster payments a necessity.",
    imageUrl: Businessintelligence,
  },
  {
    date: "APR 15, 2023",
    title: "The Future of FinTech: A Look Ahead",
    description:
      "As the financial technology industry continues to evolve, it's important to look ahead at the emerging trends that will shape the future of fintech.",
    imageUrl: Businessintelligence,
  },
  {
    date: "MAR 22, 2023",
    title: "Understanding Digital Banking Trends",
    description:
      "Digital banking is on the rise. This article explores the latest trends in the industry and what they mean for consumers and businesses alike.",
    imageUrl: Businessintelligence,
  },
  {
    date: "FEB 10, 2023",
    title: "Cryptocurrency and Its Impact on FinTech",
    description:
      "Cryptocurrency is changing the landscape of financial technology. This article delves into the impact of digital currencies on the fintech industry.",
    imageUrl: Businessintelligence,
  },
  {
    date: "FEB 10, 2023",
    title: "Cryptocurrency and Its Impact on FinTech",
    description:
      "Cryptocurrency is changing the landscape of financial technology. This article delves into the impact of digital currencies on the fintech industry.",
    imageUrl: Businessintelligence,
  },
];

function Page() {
  const [visibleItems, setVisibleItems] = useState(4);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
  };

  return (
    <div>
      <section className="">
        <div className="container m-auto flex-1 sm:px-[9%] lg:px-10 lg:py-20">
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px] md:px-20 lg:px-0">
            Checkbook <span>Resources</span>
          </h1>
        </div>
        <div className="lg:container m-auto flex gap-3 justify-center py-10">
          {buttonlists.map((contentlist, index) => (
            <button
              key={index}
              className="flex items-center px-9 py-3 grad-border bdr-sm-rds text-[14px] 2xl:text-[22px] cursor-pointer"
            >
              {contentlist.btnname}
            </button>
          ))}
        </div>
        <div className="container m-auto flex flex-col sm:flex-row lg:flex-col flex-wrap gap-10 justify-center">
          {contentList.slice(0, visibleItems).map((content, index) => (
            <div
              key={index}
              className="flex flex-col-reverse lg:flex-row justify-between grad-border bdr-sm-rds gap-5 lg:p-20  sm:w-[45%] lg:w-[100%] bg-[#fff] lg:bg-[#fff0]"
            >
              <div className="lg:w-[55%] pl-10 lg:pl-0 pb-5 lg:pb-0">
                <h4 className="border-l-2 border-[#9180FF] pl-4 text-[#404040] lg:text-[#3EA6BB] text-[18px] lg:text-[24px] mb-5 lg:mb-0">
                  {content.date}
                  <span className="text-[#404040] lg:text-[#9180FF] block pt-2">
                    {content.title}
                  </span>
                </h4>
                <p className="text-[18px] pl-4 pt-10 hidden lg:block min-h-60">
                  {content.description}
                </p>

                <CTAButton
                  onClick={""}
                  icon={signupArrow}
                  backgroundType={"bg-gradient-to-r"}
                  backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                  textColor={"text-[#FFF]"}
                  content={"Read More"}
                />
              </div>
              <div className="bg-grad btm-lr-n lg:w-[40%] ">
                <Image
                  alt={content.title}
                  src={content.imageUrl}
                  className="object-contain"
                />
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
