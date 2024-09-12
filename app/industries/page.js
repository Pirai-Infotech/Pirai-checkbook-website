"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Image from "next/image";
import IndustriesImg from "@/public/cb_industries.png";

const Contentlist = [
  {
    heading: "Benefits of tracking construction expenses with Expensify:",
    contents: [
      {
        title: "Streamline expense tracking for field employees",
        description:
          "Automate the entire expense tracking process to efficiently manage expenses across various projects and job sites. Reduce errors and ease the burden on your field employees, allowing them to focus more on the project at hand.",
      },
      {
        title: "Project-based expense assignments",
        description:
          "Customize expense categories based on projects, phases, or departments. This feature facilitates budget tracking and control, a critical aspect for construction companies managing multiple projects simultaneously.",
      },
      {
        title: "Save hours of time",
        description:
          "Automatically sync Checkbook with your general ledger using our accounting Integrations.",
      },
      {
        title: "Credit card management",
        description:
          "Eliminate risk with no more shared cards, while earning unlimited 2% cash back — issue Checkbook Company Credit Cards in a matter of minutes by simply connecting a verified business bank account.",
      },
    ],
  },
  {
    heading: "For managers, employees, and contractors:",
    contents: [
      {
        title: "Mobile-first expense reporting",
        description:
          "Mobile and web application for all types of employees and contractors. Give your staff more of their time back every month.",
      },
      {
        title: "Project and custom approval workflows",
        description:
          "Assign expenses to custom projects and departments & set-up custom approval workflows for those expense reports.",
      },
    ],
  },
];
function Page() {
  return (
    <div>
      <section className="container main-con m-auto pb-20">
        <div className="w-[80%] sm:w-[75%] m-auto">
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px] md:px-[120px] lg:px-0">
            Industries <span>Construction</span>
          </h1>
          <p className="pt-5 lg:pt-[30px] text-center text-[18px] font-[400] 2xl:text-[27px] sm:px-20 lg:px-0">
            See where we’ll be and get a chance to meet with the Checkbook team.
          </p>
        </div>
      </section>
      <section className="container main-con m-auto pb-20">
        <div className="w-[100%] lg:w-[90%] 3xl:w-[75%] gap-[30px] lg:gap-[60px] m-auto flex flex-col sm:flex-row items-start lg:items-center">
          <div className="w-full sm:w-[30%] lg:w-[43%]">
            <Image
              alt="Industries"
              src={IndustriesImg}
              className="object-contain w-full"
            />
          </div>
          <div className="w-full sm:w-[70%] lg:w-[70%] 2xl:w-[50%] px-5 sm:px-0">
            <h4 className="text-[40px] lg:text-[50px] font-[700] sm:font-[500] text-[#4F535B] ">
              Expense management for construction companies
            </h4>
            <p className="text-[30px] lg:text-[35px] font-[450] leading-[44px] pt-7">
              Seamlessly track construction costs and business expenses
            </p>
            <p className="text-[22px] lg:text-[27px] font-[300] pt-7">
              Centralize receipt and expense management for your construction
              company to gain greater visibility into your expenses. With
              Checkbook, you can achieve greater transparency and control over
              project expenses, boosting profitability and efficiency in your
              construction operations.
            </p>
          </div>
        </div>
      </section>
      <section className="container m-auto">
        <div className="w-[95%] sm:w-[100%] lg:w-[90%] 3xl:w-[75%] gap-[60px] m-auto">
          {Contentlist?.map((conlist, index) => (
            <div key={index} className="pb-20">
              {conlist?.heading && (
                <h6 className="text-[30px] lg:text-[35px] text-center lg:text-left text-[#4F535B] font-[450] px-10 sm:px-20 lg:px-0">
                  {conlist.heading}
                </h6>
              )}
              {conlist?.contents?.length > 0 && (
                <div className="flex flex-wrap gap-10 justify-center pt-[45px]">
                  {conlist.contents.map((content, idx) => (
                    <div
                      key={idx}
                      className="w-full sm:w-[46%] lg;w-[45%] 2xl:w-[48%] grad-border grad-border-compliance bdr-idstry-rds p-10"
                    >
                      {content?.title && (
                        <h4 className="flex items-center text-[30px] font-[700] text-[#9180FF] leading-[38px] border-l-2 border-[#9180FF] pl-4 lg:pl-10 min-h-[145px] lg:min-h-20">
                          {content.title}
                        </h4>
                      )}
                      {content?.description && (
                        <p className="text-[22px] lg:text-[27px] font-[300] text-[#404040] pl-4 lg:pl-10 pt-10">
                          {content.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <ReadytoGetStart />
    </div>
  );
}

export default Page;
