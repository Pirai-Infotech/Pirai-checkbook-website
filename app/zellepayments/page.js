"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Faq from "../ui/Faq";
import TopBanner from "@/public/zellecheck.svg";
import Horizhover from "../ui/Horizhover";
import easyicon from "@/public/Easyprocess.svg";
import labelicon from "@/public/Whitelabel.svg";
import DiscoverInsights from "../ui/DiscoverInsights";
import Verticalhover from "../ui/Verticalhover";
import zellepayments from "@/public/zellepayment.svg";
import Testimonials from "../ui/Testimonials";
import VideoWithThumbnail from "../ui/VideoWithThumbnail";
import HeroSection from "../ui/HeroSection";
import ACHthumbnail from "@/public/workflow-ACH_thumbnail.png";
import cartImage from "@/public/cartBackground.svg";
import Image from "next/image";

const items = [
  {
    icon: easyicon,
    iconAlt: "Broad Acceptance",
    title: "Broad Acceptance",
    text: "By leveraging Zelle's ubiquity, Checkbook can empower more businesses and individuals with a reliable and credible payment solution.",
  },
  {
    icon: labelicon,
    iconAlt: "Instant Settlement",
    title: "Instant Settlement",
    text: "With Zelle, Checkbook customers can transfer funds instantly.",
  },
];
function page() {
  return (
    <div className="px-5 py-10 lg:py-0 sm:px-0">
      <HeroSection
        heading="Send"
        spancon="Zelle Payments"
        description="Checkbook's modern payments platform now offers Zelle as a payout option to instantly pay their recipients. This provides a seamless and trustworthy experience for our users, emphasizing faster, secure and easily accessible financial transactions."
        rightimg={TopBanner}
      />

      <section>
        <Horizhover
          heading="Faster Payments for All"
          description="Beyond a new payment option, the integration of Zelle with Checkbook's innovative technology ensures secure money transfers and peace of mind throughout the payment journey. With Zelle, Checkbook reinforces its position as the most ubiquitous single portal for payments."
          items={items}
        />
      </section>

      <Verticalhover
        heading="Instant Payments"
        spancon="Are Here!"
        description="The collaboration between Checkbook and Zelle reflects a shared goal to solve the challenges of push payments by helping people get paid faster, safer and with fewer errors."
        imageSrc={zellepayments}
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
        <DiscoverInsights insightType="Zelle Payments" />
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
