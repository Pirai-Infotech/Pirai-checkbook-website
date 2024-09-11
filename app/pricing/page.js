"use client";
import React from "react";
import { useState, useEffect } from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Faq from "../ui/Faq";
import Verticalhover from "../ui/Verticalhover";
import PricingEasytosend from "../../public/Pricing_Easytosend.png";
import pricingTab from "@/public/pricing_ETS_Tab.svg"

const plans = [
  {
    planname: "Basic",
    plan: "Pay as you go",
    description: "No minimum, get started anytime",
    items: [
      {
        section: "Products",
        items: [
          { text: "Payments", value: "$1", style: {} },
          { text: "Invoices", value: "$1", style: {} },
          { text: "Multi-Party Checks", style: { color: "#c2c2c2" } },
        ],
      },
      {
        section: "Available Deposit Options",
        items: [
          { text: "Printed Check", value: "", style: {} },
          { text: "ACH Payment", value: "", style: {} },
          { text: "Mailed Check", value: "$1.79", style: {} },
          { text: "Instant Pay", value: "", style: { color: "#c2c2c2" } },
          { text: "Virtual Card", value: "", style: { color: "#c2c2c2" } },
          {
            text: "Real-Time Payments",
            value: "",
            style: { color: "#c2c2c2" },
          },
        ],
      },
      {
        section: "Features",
        items: [
          { text: "CSV Upload", value: "", style: {} },
          { text: "API access", value: "", style: {} },
          { text: "3rd Party Integrations", value: "", style: {} },
          { text: "Check Approvals", value: "", style: { color: "#c2c2c2" } },
          { text: "Authorized Users", value: "", style: { color: "#c2c2c2" } },
          { text: "White-Labeling", value: "", style: { color: "#c2c2c2" } },
          { text: "Marketplace", value: "", style: { color: "#c2c2c2" } },
        ],
      },
      {
        section: "Limits",
        items: [
          { text: "Sending/Receiving limits apply", value: "", style: {} },
        ],
      },
      {
        section: "Support",
        items: [
          { text: "Online support", value: "", style: {} },
          {
            text: "Dedicated Account Manager",
            value: "",
            style: { color: "#c2c2c2" },
          },
          {
            text: "Private Slack Channel",
            value: "",
            style: { color: "#c2c2c2" },
          },
        ],
      },
    ],
  },
  {
    planname: "Business",
    plan: "$2000/month",
    description: "Reduced rates, expanded functionality.",
    items: [
      {
        section: "Products",
        items: [
          { text: "Payments", value: "79¢", style: {} },
          { text: "Invoices", value: "79¢", style: {} },
          { text: "Multi-Party Checks", style: { color: "#c2c2c2" } },
        ],
      },
      {
        section: "Available Deposit Options",
        items: [
          { text: "Printed Check", value: "", style: {} },
          { text: "ACH Payment", value: "", style: {} },
          { text: "Mailed Check", value: "$1.49", style: {} },
          { text: "Instant Pay", value: "", style: { color: "#c2c2c2" } },
          { text: "Virtual Card", value: "", style: { color: "#c2c2c2" } },
          {
            text: "Real-Time Payments",
            value: "",
            style: { color: "#c2c2c2" },
          },
        ],
      },
      {
        section: "Features",
        items: [
          { text: "CSV Upload", value: "", style: {} },
          { text: "API access", value: "", style: {} },
          { text: "3rd Party Integrations", value: "", style: {} },
          { text: "Check Approvals", value: "", style: {} },
          { text: "Authorized Users", value: "", style: {} },
          { text: "White-Labeling", value: "", style: {} },
          { text: "Marketplace", value: "", style: { color: "#c2c2c2" } },
        ],
      },
      {
        section: "Limits",
        items: [
          { text: "Higher Sending/Receiving limits", value: "", style: {} },
        ],
      },
      {
        section: "Support",
        items: [
          { text: "Live support", value: "", style: {} },
          {
            text: "Dedicated Account Manager",
            value: "",
            style: { color: "#c2c2c2" },
          },
          {
            text: "Private Slack Channel",
            value: "",
            style: { color: "#c2c2c2" },
          },
        ],
      },
    ],
  },
  {
    planname: "Enterprise",
    plan: "Custom",
    description: "Custom solution & pricing, full availability of features.",
    items: [
      {
        section: "Products",
        items: [
          { text: "Payments", value: "", style: {} },
          { text: "Invoices", value: "", style: {} },
          { text: "Multi-Party Checks", style: {} },
        ],
      },
      {
        section: "Available Deposit Options",
        items: [
          { text: "Printed Check", value: "", style: {} },
          { text: "ACH Payment", value: "", style: {} },
          { text: "Mailed Check", value: "", style: {} },
          { text: "Instant Pay", value: "", style: {} },
          { text: "Virtual Card", value: "", style: {} },
          {
            text: "Real-Time Payments",
            value: "",
            style: {},
          },
        ],
      },
      {
        section: "Features",
        items: [
          { text: "CSV Upload", value: "", style: {} },
          { text: "API access", value: "", style: {} },
          { text: "3rd Party Integrations", value: "", style: {} },
          { text: "Check Approvals", value: "", style: {} },
          { text: "Authorized Users", value: "", style: {} },
          { text: "White-Labeling", value: "", style: {} },
          { text: "Marketplace", value: "", style: {} },
        ],
      },
      {
        section: "Limits",
        items: [
          { text: "No limits", value: "", style: {} },
        ],
      },
      {
        section: "Support",
        items: [
          { text: "Live support", value: "", style: {} },
          {
            text: "Dedicated Account Manager",
            value: "",
            style: {},
          },
          {
            text: "Private Slack Channel",
            value: "",
            style: {},
          },
        ],
      },
    ],
  },
];
const itemscon = [
  {
    heading: "Real-time tracking",
    text: "No percentages. No hidden fees. Only pay for the payments you send.",
  },
  {
    heading: "No hidden fees",
    text: "No percentages. No hidden fees. Only pay for the payments you send.",
  },
  {
    heading: "Monthly Billing",
    text: "No percentages. No hidden fees. Only pay for the payments you send.",
  },
];
function page() {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkResponsive = () => {
        setIsResponsive(window.innerWidth <= 1024);
      };
      checkResponsive();
      window.addEventListener("resize", checkResponsive);
      return () => window.removeEventListener("resize", checkResponsive);
    }
  }, []);

  return (
    <div>
      <section className="container main-con m-auto flex flex-col lg:flex-row gap-10 lg:gap-3 items-center py-10   sm:w-[95%] lg:w-[80%] 2xl:w-[70%] px-4 md:px-[0]">
        <div className="flex-1 px-[0%] sm:px-[7%] lg:px-[0%] lg:pr-[5%] 2xl:pr-[2%]">
          <h1 className="text-center text-[43px] xl:text-[70px] 2xl:text-[88px]">
            Scalable Pricing to
            <br />
            <span>Fit Your Needs</span>
          </h1>
          <p className="pt-[30px] text-center text-[18px] 2xl:text-[27px]">
            No hassle. No percentages. No hidden fees.
          </p>
        </div>
      </section>
      <section className="container main-con m-auto sm:w-[99%] lg:w-[80%] 2xl:w-[75%] px-[28px] md:px-[0px] mt-14">
        <div className="flex flex-col md:flex-wrap md:flex-row xl:flex-nowrap gap-[30px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${
                index === 2 ? "md:w-full xl:flex-1" : "flex-1"
              } px-[28px] py-[35px] 2xl:px-[35px] 2xl:py-[42px] grad-border grad-border-price borderimage`}
            >
              <div className="text-center border-b border-[#404040] pb-2 2xl:pb-6">
                <p className="text-[25px] font-[700] text-[#404040]">
                  {plan.planname}
                </p>
                <h4 className="text-[45px] xl:text-[40px] 2xl:text-[60px] font-[200] text-[#8F83FD]">
                  {plan.plan}
                </h4>
                <p className="text-[17px] 2xl:text-[20px] font-[400] text-[#404040] min-h-[60px] 2xl:pr-3">
                  {plan.description}
                </p>
              </div>
              {plan.items.map((section, sectionIndex) => (
                <div key={sectionIndex} className="pt-7 ">
                  <h3 className="text-[20px] font-[700] text-[404040]">
                    {section.section}
                  </h3>
                  <ul className="custom-list pl-8">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-[20px] font-[300] text-[#404040] list-disc"
                        style={{ ...item.style, position: "relative" }}
                      >
                        <span>{item.text}</span>
                        <span className="absolute right-0 pr-8">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Verticalhover
        heading="All Plans Include"
        spancon=""
        description=""
        items={itemscon}
        imageSrc={isResponsive? pricingTab : PricingEasytosend}
      />
      <Faq />
      <ReadytoGetStart />
    </div>
  );
}

export default page;
