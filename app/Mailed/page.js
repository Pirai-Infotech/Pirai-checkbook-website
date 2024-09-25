"use client";
import React from "react";
import ACHthumbnail from "@/public/workflow-ACH_thumbnail.png";
import cartImage from "@/public/cartBackground.svg";
import Image from "next/image";
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
import HeroSection from "../ui/HeroSection";
import VideoWithThumbnail from "../ui/VideoWithThumbnail";

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
    <div className="px-5 sm:px-0">
      <HeroSection
        heading="Programmatically"
        spancon="Mail Paper Checks"
        description="In our increasingly digital world, paper checks still account for
            over 25% of non-cash payments. Checkbook’s mailed checks include
            remittance advice, and are printed and mailed daily to recipients
            living in the US and Canada."
        rightimg={TopBanner}
      />

      <section>
        <Horizhover
          heading="Complete Paper Check Fulfillment"
          description="Checkbook’s streamlined check fulfillment service is your one-stop source for all your check printing and mailing needs. We can reduce administrative costs and improve your operational efficiencies, all with less effort and paperwork!"
          items={items}
        />
      </section>

      <Verticalhover
        heading="Send Mailed Checks"
        spancon="Through Our API"
        description="Streamline your accounts payable with Checkbook! We integrate
            directly with leading ERPs like QuickBooks Online, AccountingSeed,
            and Sage Intacct - empowering you to spend less time and resources
            on data entry."
        items={itemscon}
        imageSrc={Papercheck}
      />

      <section className="container main-con xl:w-[1238px] m-auto relative">
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
        <DiscoverInsights insightType="Mail Paper Checks" />
      </section>
      <section className="py-14 lg:py-20 relative">
        <Testimonials />
      </section>
      <section className="py-10">
        <ReadytoGetStart />
      </section>
      <section>
        <Faq />
      </section>
    </div>
  );
}

export default page;
