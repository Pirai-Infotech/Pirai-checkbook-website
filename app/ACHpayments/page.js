"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Faq from "../ui/Faq";
import TopBanner from "@/public/digitalcheck.svg";
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
    <div className="px-5 py-10 lg:py-0 sm:px-0">
      <HeroSection
        heading="Send"
        spancon="ACH Payments"
        description="With Checkbook’s ACH direct deposit option, you can send funds
            directly to your recipient’s bank account - zero friction for your
            recipients. Simply provide the routing and account number of the
            destination account, and we'll take care of the rest."
        rightimg={TopBanner}
      />

      <section>
        <Horizhover
          heading="Programmable ACH Payments"
          description="With Checkbook’s ACH direct deposit option, you can send funds directly to your recipient’s bank account - zero friction for your recipients. Simply provide the routing and account number of the destination account, and we'll take care of the rest."
          items={items}
        />
      </section>

      <Verticalhover
        heading="Receive"
        spancon="ACH Payments"
        description="Our Digital Check solution makes payments quick and easy. All you need is
      the recipient's name, email, and the amount - that's it! Recipients
      receive their Digital Check via email, where they can verify their bank
      account instantly for deposit."
        items={itemscon}
        imageSrc={ACHCompliance}
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
        <DiscoverInsights insightType="ACH payments" />
      </section>
      <section className=" py-10 relative">
        <Testimonials />
      </section>
      <section className="py-10">
        <ReadytoGetStart />
      </section>
      <section className="container main-con m-auto py-10">
        <Faq />
      </section>
    </div>
  );
}

export default page;
