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
    iconAlt: "Broad Acceptance",
    title: "Broad Acceptance",
    text: "FedNow will bring real-time payment capabilities to banks and payment processors across the US.",
  },
  {
    icon: labelicon,
    iconAlt: "Instant Settlement",
    title: "Instant Settlement",
    text: "Checkbook’s FedNow payments post instantly to your recipient's bank account, 24 hours a day, 7 days a week.",
  },
];
const itemscon = [
  {
    heading: "User Friendly",
    text: "No need to worry about reconciling or chargebacks. FedNow will require request for payments before debits are made. Initially, only push payments will be rolled out as well.",
  },
  {
    heading: "Finality of Settlement",
    text: "No need to worry about reconciling or chargebacks. FedNow will require request for payments before debits are made. Initially, only push payments will be rolled out as well.",
  },
];
function page() {
  return (
    <div className="px-8 sm:px-0">
      <section className="w-[100%] m-auto flex flex-col lg:flex-row gap-3 items-center py-10">
        <div className="flex-1 pl-[5%]">
          <h1 className="text-center xl:text-left">
            Send <span>ACH Payments</span>
          </h1>
          <p className="pt-5 lg:pr-[10%] text-center xl:text-left">
            With Checkbook’s ACH direct deposit option, you can send funds
            directly to your recipient’s bank account - zero friction for your
            recipients. Simply provide the routing and account number of the
            destination account, and we'll take care of the rest.
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
          heading="Faster Payments for All"
          description="Current bank to bank payment solutions are prohibitively expensive (e.g. wire transfers) or take days to settle (e.g. ACH). Checkbook's FedNow payments solution is helping to bring US-based bank payments to the 21st century with instant, round-the-clock settlement 365 days a year."
          items={items}
        />
      </section>
      <section className="w-[100%] m-auto py-10">
        <div className="w-[100%] lg:w-[50%] m-auto">
          <h3 className="text-center pb-10 md:w-[70%] m-auto">
            Instant Payments <br />
            <span>Are Here!</span>
          </h3>
          <p className="text-center px-10">
            Launching in July, the FedNow payments network brings a much needed
            upgrade to the domestic payments infrastructure. While bringing
            innovations in payment speed and convenience, the FedNow network
            will be supported at the financial institutions that you already
            use.
          </p>
        </div>
        <Verticalhover items={itemscon} imageSrc={ACHCompliance} />
      </section>

      <section className="w-[60%] m-auto">
        <VideoWithThumbnail
          videoUrl="/workflow-ACH_thumbnail.mp4"
          videothumbnail="/workflow-ACH_thumbnail.png"
          alt="VideoThumbnail"
        />
      </section>
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
