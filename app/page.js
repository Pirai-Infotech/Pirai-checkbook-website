"use client";
import Image from "next/image";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import DiscoverInsights from "./ui/DiscoverInsights";
import Testimonials from "./ui/Testimonials";
import CTAButton from "./ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import Verticalhover from "./ui/Verticalhover";
import Hmenggprodt from "@/public/Hm_engg_prodt.svg";
import Anydesk from "@/public/Anydesk.svg";
import Arm from "@/public/Arm.svg";
import Kin from "@/public/Kin.svg";
import MassMutual from "@/public/MassMutual.svg";
import Stampli from "@/public/Stampli.svg";
import Visa from "@/public/Visa.svg";
import easyicon from "@/public/Easyprocess.svg";
import labelicon from "@/public/Whitelabel.svg";
import simpleicon from "@/public/Simple.svg";
import robusticon from "@/public/Robust.svg";
import Horizhoverhm from "./ui/Horizhoverhm";
import Hmmobilesec from "@/public/hm_mobile_sec.svg";

const itemsconnocode = [
  {
    heading: "Send or Request a single payment",
    text: "",
  },
  {
    heading: "Upload a payments file",
    text: "",
  },
  {
    heading: "Real-time reporting",
    text: "",
  },
];
const itemscon = [
  {
    heading: "Compliance and Legal (PCI vs Non-PCI)",
    text: "Easy integration into a unified, white labeled platform and enhaced customer experience.",
  },
  {
    heading: "Finance and Treasury",
    text: "Easy integration into a unified, white labeled platform and enhaced customer experience.",
  },
  {
    heading: "Engineering and Product",
    text: "Easy integration into a unified, white labeled platform and enhaced customer experience.",
  },
  {
    heading: "Accounting",
    text: "Easy integration into a unified, white labeled platform and enhaced customer experience.",
  },
];
const listitems = [
  {
    icon: simpleicon,
    iconAlt: "Simple",
    title: "Simple",
    text: "Payments are sent through email or text. Recipients choose how they want to accept payments.",
  },
  {
    icon: labelicon,
    iconAlt: "Payment Options",
    title: "Payment Options",
    text: "From paper to digital, Checkbook provides recipients with all their preferred payment methods.",
  },
  {
    icon: easyicon,
    iconAlt: "Broad Acceptance",
    title: "All-In-One",
    text: "Checkbook’s all-in-one platform streamlines payments and eliminates complexity.",
  },
  {
    icon: robusticon,
    iconAlt: "Robust APIs",
    title: "Instant Settlement",
    text: "Integrate and customize Checkbook’s comprehensive functionality into your platform.",
  },
];
export default function Home() {
  return (
    <>
      <Header />
      <section className="container m-auto sm:w-[95%] lg:w-[80%] 2xl:w-[70%] px-4 py-10   md:px-[0]">
        <div className="flex flex-col items-center px-[0%] sm:px-[7%] lg:px-[0%]">
          <h1 className="text-center text-[45px] xl:text-[70px] 2xl:text-[80px] 3xl:text-[88px]">
            Enabling Businesses to
            <br />
            <span>Send Payments at Scale</span>
          </h1>
          <p className="py-[30px] text-center text-[#404040] text-[18px] xl:text-[27px] ">
            Simplify your payments processes, reduce <br />
            your costs and delight your customers.
          </p>
          <div>
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#3D77EB]  to-[#D289FF]"}
              textColor={"text-[#fff]"}
              content={"Get Started"}
              paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-6 ml-4"}
              paddingy={"py-3"}
              textSize={"text-[16px] xl:text-[22px]"}
              rounderTL={"rounded-tl-none"}
              rounderTR={"rounded-tr-[60px]"}
              rounderBR={"rounded-br-[60px]"}
              rounderBL={"rounded-bl-[40px]"}
            />
          </div>
        </div>
      </section>
      <section className="container m-auto relative pt-[10%]">
        <div className=" my-10 grad-border grad-border-rtgs bdr-md-rds gap-20 px-[12%] py-[5%]">
          <p className="w-[58%] text-[27px] text-[#404040]">
            Whether you’re sending hundreds or millions of payments,{" "}
            <a
              href="https://www.checkbook.io"
              className="text-[#9281FF] underline"
            >
              Checkbook’s platform will supercharge your payables experience
            </a>
            . Simplify your payments processes, reduce your costs and delight
            your customers.
          </p>
        </div>
        <Horizhoverhm heading="" description="" listitems={listitems} />
        <div className="absolute top-0 right-[12%]">
          <Image src={Hmmobilesec} className="" alt="Mobile Payment Screen" />
        </div>
      </section>
      <section className="container m-auto my-10 flex flex-row items-center grad-border grad-border-rtgs bdr-md-rds gap-20 px-[12%] py-[5%]">
        <div>
          <h4 className="text-[41px] text-[#404040] ">
            Searching for the best enterprise SEO solution?
          </h4>
          <p className="text-[27px] text-[#404040]">
            So are you competitors! Schedule a personalized demo today.
          </p>
        </div>
        <div>
          <CTAButton
            icon={signupArrow}
            backgroundType={"bg-gradient-to-r"}
            backgroundColor={"from-[#3D77EB]  to-[#D289FF]"}
            textColor={"text-[#FFF]"}
            content={"Get Started"}
            paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-6"}
            paddingy={"py-3 md:py-4"}
            textSize={"text-[17px] lg:text-[10px] xl:text-[26px]"}
            rounderTL={"rounded-tl-none"}
            rounderTR={"rounded-tr-[60px]"}
            rounderBR={"rounded-br-[60px]"}
            rounderBL={"rounded-bl-[40px]"}
            classname={"btn-bg-grad ml-4"}
          />
        </div>
      </section>
      <Verticalhover
        heading=""
        spancon=""
        description=""
        items={itemsconnocode}
        imageSrc={Hmenggprodt}
      />
      <Testimonials />
      <section className="container m-auto">
        <h5 className="text-[92px] text-[#404040] text-center font-[400]">
          They <span className="font-[300] italic shaded-border">trust us</span>
        </h5>
        <div className="flex flex-row gap-[100px] items-center justify-center py-[80px]">
          <Image src={Anydesk} className="" alt="AnyDesk" />
          <Image src={MassMutual} className="" alt="MassMutual" />
          <Image src={Arm} className="" alt="Arm" />
          <Image src={Visa} className="" alt="Visa" />
          <Image src={Stampli} className="" alt="Stampli" />
          <Image src={Kin} className="" alt="Kin" />
        </div>
      </section>
      <Verticalhover
        heading="Discover"
        spancon="Our Solutions"
        description=""
        items={itemscon}
        imageSrc={Hmenggprodt}
      />
      <DiscoverInsights />

      <Footer />
    </>
  );
}
