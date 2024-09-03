"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Faq from "../ui/Faq";
import TopBanner from "../../public/checkbookfednow.svg";
import Horizhover from "../ui/Horizhover";
import easyicon from "@/public/Easyprocess.svg";
import labelicon from "@/public/Whitelabel.svg";
import DiscoverInsights from "../ui/DiscoverInsights";
import Verticalhover from "../ui/Verticalhover";
import ACHCompliance from "../../public/ACMEfednow.svg";
import Testimonials from "../ui/Testimonials";
import VideoWithThumbnail from "../ui/VideoWithThumbnail";
import HeroSection from "../ui/HeroSection";

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
      <HeroSection
        heading="Send"
        spancon="FedNow Payments"
        description="Checkbook’s payments solution utilizes the FedNow network that is
            being launched by the federal reserve. Unlike ACH, FedNow is a
            real-time payments platform that allows recipients to receive funds
            directly into their bank account in less than 60 seconds."
        rightimg={TopBanner}
      />
      <section className="w-[100%] sm:w-[90%] m-auto">
        <Horizhover
          heading="Faster Payments for All"
          description="Current bank to bank payment solutions are prohibitively expensive (e.g. wire transfers) or take days to settle (e.g. ACH). Checkbook's FedNow payments solution is helping to bring US-based bank payments to the 21st century with instant, round-the-clock settlement 365 days a year."
          items={items}
        />
      </section>
      <Verticalhover
        heading="Instant Payments"
        spancon="Are Here!"
        description="Launching in July, the FedNow payments network brings a much needed upgrade to the domestic payments infrastructure. While bringing innovations in payment speed and convenience, the FedNow network will be supported at the financial institutions that you already use."
        items={itemscon}
        imageSrc={ACHCompliance}
      />
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
