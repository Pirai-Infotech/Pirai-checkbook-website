"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Forms from "@/app/ui/Forms"

const items = [
  { value: "1,000", label: "CUSTOMERS" },
  { value: "1/3", label: "FORTUNE 500" },
  { value: "$8B", label: "TRANSACTIONS PER YEAR" },
];
function Page() {
  return (
    <div>
      <section className="container main-con m-auto mt-8 md:mt-10 lg:mt-14 pb-10 md:pb-12 lg:pb-20">
        <div className="w-[80%] lg:w-[90%] 4xl:w-[75%] m-auto flex flex-col lg:flex-row items-center gap-10">
          <h1 className="text-center lg:text-left text-[45px] lg:text-[30px] xl:text-[40px] 2xl:text-[52px] 3xl:text-[70px] leading-[54px] lg:leading-[30px] xl:leading-[40px] 2xl:leading-[60px] 3xl:leading-[75px] text-dk sm:px-[20%] lg:px-[0]">
            See how much <span>Expense Audit</span> can save you
          </h1>
          <div className="flex flex-col md:flex-row  gap-5">
            {items.map((item, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-r from-[#9281FF] to-[#3E89BD] py-2 px-10 rounded-[10px] min-w-[250px] lg:min-w-[200px] 2xl:min-w-[250px] h-[150px]"
              >
                <h3 className="text-[#fff] text-[59px]  2xl:text-[59px] pb-2 font-[300]">
                  {item.value}
                </h3>
                <p className="m-auto w-[40%] border-b-2 border-[#fff]"></p>
                <p className="text-[#fff] text-[17px] sm:text-[14px] 2xl:text-[17px] pt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Forms />
      <ReadytoGetStart />
    </div>
  );
}

export default Page;
