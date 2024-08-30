"use client";
import React from "react";
import signupArrowcolor from "../../public/signup-arrow.svg";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Faq from "../ui/Faq";
import TopBanner from "../../public/printablecheckesbanner.png";
import Horizhover from "../ui/Horizhover";
import easyicon from "@/public/Easyprocess.svg";
import labelicon from "@/public/Whitelabel.svg";
import DiscoverInsights from "../ui/DiscoverInsights";
import Verticalhover from "../ui/Verticalhover";
import ACHCompliance from "../../public/ACH_complaince.png";
import Testimonials from "../ui/Testimonials";
import VideoWithThumbnail from "../ui/VideoWithThumbnail";

const items = [
  {
    icon: easyicon,
    iconAlt: "Complete Control",
    title: "Complete Control",
    text: "Disburse payments to your users using our ACH API or full featured, user-friendly dashboard.",
  },
  {
    icon: labelicon,
    iconAlt: "Built in Scalability",
    title: "Built in Scalability",
    text: "Checkbook offers a secure, scalable and reliable way for your business to move money via ACH.",
  },
];
const itemscon = [
  {
    heading: "Automatic Reconciliation",
    text: "No more storing sensitive banking information. We take care of the compliance so you don't have to.",
  },
  {
    heading: "Compliance Covered",
    text: "No more storing sensitive banking information. We take care of the compliance so you don't have to.",
  },
];
function page() {
  return (
    <div className="px-8 sm:px-0">
      <section className="w-[100%] m-auto flex flex-col lg:flex-row gap-3 items-center py-10">
        <div className="flex-1 pl-[5%]">
          <h1 className="text-center xl:text-left">
            Send <span>FedNow Payments</span>
          </h1>
          <p className="pt-5 lg:pr-[10%] text-center xl:text-left">
            Checkbook’s payments solution utilizes the FedNow network that is
            being launched by the federal reserve. Unlike ACH, FedNow is a
            real-time payments platform that allows recipients to receive funds
            directly into their bank account in less than 60 seconds.
          </p>
          <div className="flex flex-row pt-10 gap-4 items-center justify-center xl:justify-start">
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#3D77EB] to-[#D289FF]"}
              textColor={"text-[#fff]"}
              content={"Sign Up"}
              classname={""}
            />
            <CTAButton
              icon={signupArrowcolor}
              backgroundType={""}
              backgroundColor={""}
              textColor={"text-[#404040]"}
              classname={"grad-border borderbutton "}
              content={"Try Our Demo"}
            />
          </div>
        </div>
        <div className="flex-1">
          <Image src={TopBanner} alt="Printable Check" />
        </div>
      </section>
      <section className="w-[100%] sm:w-[90%] m-auto">
        <Horizhover
          heading="Programmable ACH Payments"
          description="With Checkbook’s ACH direct deposit option, you can send funds directly to your recipient’s bank account - zero friction for your recipients. Simply provide the routing and account number of the destination account, and we'll take care of the rest."
          items={items}
        />
      </section>
      <section className="w-[100%] m-auto py-10">
        <div className="w-[100%] lg:w-[50%] m-auto">
          <h3 className="text-center pb-10 md:w-[70%] m-auto">
            Receive <br />
            <span>ACH Payments</span>
          </h3>
          <p className="text-center px-10">
            Our Digital Check solution makes payments quick and easy. All you
            need is the recipient&apos;s name, email, and the amount - that&apos;s it!
            Recipients receive their Digital Check via email, where they can
            verify their bank account instantly for deposit.
          </p>
        </div>
        <Verticalhover items={itemscon} imageSrc={ACHCompliance} />
      </section>

      <section className="w-[50%] m-auto h-[300px] rounded-[40px] bg-slate-300"></section>
      <section>
        <DiscoverInsights />
      </section>
      <section className="w-[90%] py-10 m-auto relative">
        <Testimonials />
      </section>
      <section className="py-10">
        <ReadytoGetStart />
      </section>
      <section className=" py-10">
        <Faq />
      </section>
    </div>
  );
}

export default page;
