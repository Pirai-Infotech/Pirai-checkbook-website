"use client";
import React from "react";
import Image from "next/image";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Faq from "../ui/Faq";
import TopBanner from "../../public/printablecheckesbanner.png";
import Horizhover from "../ui/Horizhover";
import easyicon from "@/public/Easyprocess.svg";
import labelicon from "@/public/Whitelabel.svg";
import DiscoverInsights from "../ui/DiscoverInsights";
import Verticalhover from "../ui/Verticalhover";
import Papercheck from "../../public/PaperCheck.png";
import Testimonials from "../ui/Testimonials";
import VideoWithThumbnail from "../ui/VideoWithThumbnail";
import HeroSection from "../ui/HeroSection";
import ACHthumbnail from "@/public/workflow-ACH_thumbnail.png";
import cartImage from "@/public/cartBackground.svg";

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
    <div className="px-5 py-10 lg:py-0 sm:px-0">
      <HeroSection
        heading="Send"
        spancon="Printable Checks"
        description="Checkbook’s printable checks eliminate print and postage costs,
            while cutting delivery time from days to seconds. Delivered via
            email, printable checks combine the efficiency of digital
            communication, with the familiarity of a paper check."
        rightimg={TopBanner}
      />

      <section>
        <Horizhover
          heading="Sending Payments is Simple"
          description="Send a check directly to your recipient’s email. Our checks can be printed on standard printer paper and deposited just like a regular check - with a banking mobile app or in person at a local branch or ATM."
          items={items}
        />
      </section>

      <Verticalhover
        heading="Printable Checks Replace"
        spancon="Paper Checks"
        description="Printable checks provide a great way to transition from mailed
            checks to digital payments. Recipients can leverage the same deposit
            processes they use for mailed checks, yet they don’t have to wait
            3-5 days for the mail to arrive!"
        items={itemscon}
        imageSrc={Papercheck}
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
        <DiscoverInsights insightType="Printable Checks" />
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
