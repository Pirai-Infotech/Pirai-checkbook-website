"use client";
import React from "react";
import signupArrowcolor from "../../public/signup-arrow.svg";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Faq from "../ui/Faq";
import TopBanner from "../../public/mailCheckbook.svg";
import Horizhover from "../ui/Horizhover";
import easyicon from "@/public/Easyprocess.svg";
import labelicon from "@/public/Whitelabel.svg";
import DiscoverInsights from "../ui/DiscoverInsights";
import Verticalhover from "../ui/Verticalhover";
import Papercheck from "../../public/MailBox.svg";
import Testimonials from "../ui/Testimonials";

const items = [
  {
    icon: easyicon,
    iconAlt: "Easy to send",
    title: "Easy to send",
    text: "Our mailed checks only require a name, address and amount - we do the rest!",
  },
  {
    icon: labelicon,
    iconAlt: "White-label experience",
    title: "White-label experience",
    text: "Customize mailed checks with your business name and branding.",
  },
];
const itemscon = [
  {
    heading: "Keep everything in one place",
    text: "Not using an ERP? No problem. Our RESTful API and dashboard CSV upload provide an effortless way for sending large volumes of checks.",
  },
  {
    heading: "Batch Files",
    text: "Not using an ERP? No problem. Our RESTful API and dashboard CSV upload provide an effortless way for sending large volumes of checks.",
  },
];
function page() {
  return (
    <div className="px-8 sm:px-0">
      <section className="w-[100%] m-auto flex flex-col lg:flex-row gap-3 items-center py-10">
        <div className="flex-1 pl-[5%]">
          <div className="text-center xl:text-left">
            <p className="font-inter text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-light leading-[1.2] md:leading-[1.3] lg:leading-[79.52px] tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-2px] text-left">
              Programmatically
            </p>
            <p className="font-inter text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-normal leading-[1.2] md:leading-[1.3] lg:leading-[79.52px] tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-2px] text-left bg-gradient-to-r from-[#9281FF] via-[#3EA8BD] to-[#89D6FF] bg-clip-text text-transparent sm:text-[#404040] sm:font-Inter">
              Mail Paper Checks
            </p>
          </div>
          <p className="pt-5 lg:pr-[10%] text-center sm:text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-left">
            In our increasingly digital world, paper checks still account for
            over 25% of non-cash payments. Checkbook’s mailed checks include
            remittance advice, and are printed and mailed daily to recipients
            living in the US and Canada.
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
          heading="Complete Paper Check Fulfillment"
          description="Checkbook’s streamlined check fulfillment service is your one-stop source for all your check printing and mailing needs. We can reduce administrative costs and improve your operational efficiencies, all with less effort and paperwork!"
          items={items}
        />
      </section>
      <section className="w-[100%] m-auto py-10">
        <div className="w-full lg:w-1/2 mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Inter mb-2 sm:mb-4 text-[#404040]">
            Send Mailed Checks
          </h3>
          <h3 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium pb-4 sm:pb-6">
            <span>Through Our API</span>
          </h3>
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 mx-auto">
            Streamline your accounts payable with Checkbook! We integrate
            directly with leading ERPs like QuickBooks Online, AccountingSeed,
            and Sage Intacct - empowering you to spend less time and resources
            on data entry.
          </p>
        </div>
        <Verticalhover items={itemscon} imageSrc={Papercheck} />
      </section>
      <section className="w-[50%] m-auto h-[300px] rounded-[40px] bg-slate-300"></section>
      <section className="w-[90%] m-auto">
        <DiscoverInsights />
      </section>
      <section className="w-[90%] py-10 m-auto relative">
        <Testimonials />
      </section>
      <section className="w-[90%] py-10 m-auto">
        <ReadytoGetStart />
      </section>
      <section className=" py-10">
        <Faq />
      </section>
    </div>
  );
}

export default page;
