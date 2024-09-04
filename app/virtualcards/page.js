"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Faq from "../ui/Faq";
import TopBanner from "@/public/virtualcheck.svg";
import Horizhover from "../ui/Horizhover";
import easyicon from "@/public/Easyprocess.svg";
import labelicon from "@/public/Whitelabel.svg";
import DiscoverInsights from "../ui/DiscoverInsights";
import Verticalhover from "../ui/Verticalhover";
import ACHCompliance from "../../public/ACH_complaince.png";
import Testimonials from "../ui/Testimonials";
import VideoWithThumbnail from "../ui/VideoWithThumbnail";
import HeroSection from "../ui/HeroSection";
import ACHthumbnail from "@/public/workflow-ACH_thumbnail.png";
import cartImage from "@/public/cartBackground.svg";
import Image from "next/image";

const items = [
  {
    icon: easyicon,
    iconAlt: "Reduced Risk",
    title: "Reduced Risk",
    text: "Virtual cards act as a layer of protection between your funding source and the merchant - reducing risk and enhancing privacy.",
  },
  {
    icon: labelicon,
    iconAlt: "Increase Control",
    title: "Increase Control",
    text: "Virtual cards are created with a specified recipient, time limit, and amount for every payment.",
  },
];
const itemscon = [
  {
    heading: "User Friendly",
    text: "Use virtual cards so you never have to worry about canceling a free trial or monthly subscription again.",
  },
  {
    heading: "Reduce Risk",
    text: "Use virtual cards so you never have to worry about canceling a free trial or monthly subscription again.",
  },
];
function page() {
  return (
    <div className="px-5 py-10 lg:py-0 sm:px-0">
      <HeroSection
        heading="Create & Send"
        spancon="Virtual Cards*"
        description="A virtual card is a unique 16-digit payment card number that is digitally generated and tied to your account. Virtual cards can be processed anywhere traditional card payments are accepted."
        rightimg={TopBanner}
      />

      <section>
        <Horizhover
          heading="Funds Delivered in Near Real-time with Virtual Card"
          description="Did you know that you can earn money with virtual cards? Checkbook shares a portion of the interchange fee with our senders, allowing you to earn money with every payment. Pay merchants or vendors in a few simple clicks!"
          items={items}
        />
      </section>

      <Verticalhover
        heading="Recipients Expect"
        spancon="Fast Payments"
        description="There are 55 million adults in the US who are unbanked or underbanked. Checkbook’s virtual cards are a great choice for serving recipients who do not have sufficient access to a bank account or are reluctant to provide sensitive bank information."
        items={itemscon}
        imageSrc={ACHCompliance}
      />

      <section className="container xl:w-[1238px] m-auto relative">
        <VideoWithThumbnail
          videoUrl="/workflow-ACH_thumbnail.mp4"
          videothumbnail={ACHthumbnail}
          alt="VideoThumbnail"
        />
        <div className="absolute z-[-1] top-[-100px]">
          <Image
            src={cartImage}
            className="w-[100%] opacity-30 sm:opacity-30 md:opacity-30 lg:opacity-70"
            alt="cartImage"
          />
        </div>
      </section>
      <section>
        <DiscoverInsights insightType="Virtual Cards" />
      </section>
      <section className=" py-10 relative">
        <Testimonials />
      </section>
      <section className="py-10">
        <ReadytoGetStart />
      </section>
      <section className="container m-auto py-10">
        <Faq />
      </section>
    </div>
  );
}

export default page;
