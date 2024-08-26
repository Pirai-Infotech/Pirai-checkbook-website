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
import Papercheck from "../../public/Papercheck.png";
import Testimonials from "../ui/Testimonials";

const items = [
  {
    icon: easyicon,
    iconAlt: "Easy to process",
    title: "Easy to process",
    text: "Our printable checks display the check and endorsement on the same page - no need to fumble with multiple pages.",
  },
  {
    icon: labelicon,
    iconAlt: "White-label experience",
    title: "White-label experience",
    text: "Completely customize the color and branding information displayed on each check.",
  },
];
const itemscon = [
  {
    heading: "Privacy Conscious",
    text: "Printable checks provide a cost effective way for businesses to make payments.",
  },
  {
    heading: "Cost Effective",
    text: "Printable checks provide a cost effective way for businesses to make payments.",
  },
];
function page() {
  return (
    <div className="px-8 sm:px-0">
      <section className="w-[100%] m-auto flex flex-col lg:flex-row gap-3 items-center py-10">
        <div className="flex-1 pl-[5%]">
          <h1 className="text-center xl:text-left">
            Send <span>Printable Checks</span>
          </h1>
          <p className="pt-5 lg:pr-[10%] text-center xl:text-left">
            Checkbook’s printable checks eliminate print and postage costs,
            while cutting delivery time from days to seconds. Delivered via
            email, printable checks combine the efficiency of digital
            communication, with the familiarity of a paper check.
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
          heading="Sending Payments is Simple"
          description="Send a check directly to your recipient’s email. Our checks can be printed on standard printer paper and deposited just like a regular check - with a banking mobile app or in person at a local branch or ATM."
          items={items}
        />
      </section>
      <section className="w-[100%] m-auto py-10">
        <div className="w-[100%] lg:w-[50%] m-auto">
          <h3 className="text-center pb-10 md:w-[80%] m-auto">
            Printable Checks Replace <span>Paper Checks</span>
          </h3>
          <p className="text-center px-10">
            Printable checks provide a great way to transition from mailed
            checks to digital payments. Recipients can leverage the same deposit
            processes they use for mailed checks, yet they don’t have to wait
            3-5 days for the mail to arrive!
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
