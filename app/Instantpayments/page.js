"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Faq from "../ui/Faq";
import TopBanner from "../../public/InstantPayments_Banner.png";
import Horizhover from "../ui/Horizhover";
import easyicon from "@/public/Easyprocess.svg";
import labelicon from "@/public/Whitelabel.svg";
import DiscoverInsights from "../ui/DiscoverInsights";
import Verticalhover from "../ui/Verticalhover";
import Instantbnr from "../../public/InstantPayment_centerbnr1.png";
import Testimonials from "../ui/Testimonials";
import HeroSection from "../ui/HeroSection";
import VideoWithThumbnail from "../ui/VideoWithThumbnail";
import ACHthumbnail from "@/public/workflow-ACH_thumbnail.png";
import cartImage from "@/public/cartBackground.svg";
import Image from "next/image";

const items = [
  {
    icon: easyicon,
    iconAlt: "Increased Security",
    title: "Increased Security",
    text: "Instant Pay is supported through our API, our dashboard and our integrations - customize the experience to fit your needs.",
  },
  {
    icon: labelicon,
    iconAlt: "Full Control",
    title: "Full Control",
    text: "Instant Pay is supported through our API, our dashboard and our integrations - customize the experience to fit your needs.",
  },
];
const itemscon = [
  {
    heading: "Improved customer experience",
    text: "No more checks lost in the mail or long settlement wait times - funds arrive in seconds.",
  },
  {
    heading: "Instant availability of funds",
    text: "No more checks lost in the mail or long settlement wait times - funds arrive in seconds.",
  },
];
function page() {
  return (
    <div className="px-5 md:py-10 lg:py-0 sm:px-0">
      <HeroSection
        heading="Send"
        spancon="Instant Payments Today"
        description="With Instant Pay your business can push payouts to any VISA or MasterCard branded debit or ATM card in seconds. Checkbook leverages original credit transactions (OCT) to expand our network to billions of eligible cards."
        rightimg={TopBanner}
      />

      <section>
        <Horizhover
          heading="Funds Delivered Immediately with Instant Pay"
          description="Instant Pay allows our users to receive funds in seconds, directly to their debit card, any day of the week. All card data is tokenized and protected in our PCI DSS service provider level 1 systems."
          items={items}
        />
      </section>

      <Verticalhover
        heading="Recipients Expect"
        spancon="Instant Paymentss"
        description="Checkbook eliminates pain points for frustrated customers waiting on checks in the mail, reluctant to provide sensitive bank information or those without bank accounts. Satisfy your customers by enabling them to receive payments instantly, 365 days a year."
        items={itemscon}
        imageSrc={Instantbnr}
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
        <DiscoverInsights insightType="Instant Payments" />
      </section>
      <section className=" py-10 relative">
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
