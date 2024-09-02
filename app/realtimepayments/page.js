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
import ACME from "@/public/ACME.svg";
import Testimonials from "../ui/Testimonials";
import VideoWithThumbnail from "../ui/VideoWithThumbnail";
import HeroSection from "../ui/HeroSection";
import ACHthumbnail from "@/public/workflow-ACH_thumbnail.png";
import cartImage from "@/public/cartBackground.svg"
import Image from "next/image";

const items = [
  {
    icon: easyicon,
    iconAlt: "Board Acceptance",
    title: "Board Acceptance",
    text: "Today, the RTP network’s real-time payment capabilities are accessible to over 70% of US bank accounts.",
  },
  {
    icon: labelicon,
    iconAlt: "Instant Settlement",
    title: "Instant Settlement",
    text: "Checkbook’s real-time payments post instantly to your recipient's bank account, 24 hours a day, 7 days a week.",
  },
];
const itemscon = [
  {
    heading: "User Friendly",
    text: "No need to worry about reconciling or chargebacks. Real-time payments allow for immediate and final settlement.",
  },
  {
    heading: "Finality Settlement",
    text: "No need to worry about reconciling or chargebacks. Real-time payments allow for immediate and final settlement.",
  },
];
function page() {
  return (
    <div className="px-8 sm:px-0">
      <HeroSection
        heading="Send"
        spancon="Real-Time Payments"
        description="Checkbook’s real-time payment solution utilizes the RTP network provided by The Clearing House. Unlike ACH, RTP is a real-time payments platform that allows recipients to receive funds directly into their bank account in less than 60 seconds."
        rightimg={TopBanner}
      />

      <section>
        <Horizhover
          heading="Instant Payments for All"
          description="Current bank to bank payment solutions are prohibitively expensive (e.g. wire transfers) or take days to settle (e.g. ACH). Checkbook's real-time payments solution is helping to bring US-based bank payments to the 21st century with instant, round the clock settlement 365 days a year."
          items={items}
        />
      </section>

      <Verticalhover
        heading="RTP"
        spancon="Growing"
        description="First launched in 2017, the RTP network brings a much needed upgrade to the domestic payments infrastructure. While bringing innovations in payments speed and convenience, the RTP® network is supported at the financial institutions you already use."
        items={itemscon}
        imageSrc={ACME}
      />

      <section className="w-[50%] m-auto h-[300px] rounded-[40px] bg-slate-300"></section>
      <section>
        <DiscoverInsights />
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
