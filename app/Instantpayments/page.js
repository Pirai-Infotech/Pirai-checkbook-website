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
    <div className="px-8 sm:px-0">
      <sectio>
        <HeroSection
          heading="Send"
          spancon="Instant Payments Today"
          description="With Instant Pay your business can push payouts to any VISA or MasterCard branded debit or ATM card in seconds. Checkbook leverages original credit transactions (OCT) to expand our network to billions of eligible cards."
          rightimg={TopBanner}
        />
      </sectio>
      <section className="w-[100%] sm:w-[90%] m-auto">
        <Horizhover
          heading="Funds Delivered Immediately with Instant Pay"
          description="Instant Pay allows our users to receive funds in seconds, directly to their debit card, any day of the week. All card data is tokenized and protected in our PCI DSS service provider level 1 systems."
          items={items}
        />
      </section>
      <section className="w-[100%] m-auto py-10">
        <div className="w-[100%] lg:w-[50%] m-auto">
          <h3 className="text-center pb-10 md:w-[70%] m-auto">
            Recipients Expect <br />
            <span>Instant Payments</span>
          </h3>
          <p className="text-center px-10">
            Checkbook eliminates pain points for frustrated customers waiting on
            checks in the mail, reluctant to provide sensitive bank information
            or those without bank accounts. Satisfy your customers by enabling
            them to receive payments instantly, 365 days a year.
          </p>
        </div>
        <Verticalhover items={itemscon} imageSrc={Instantbnr} />
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
