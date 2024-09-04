"use client";
import Image from "next/image";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import DiscoverInsights from "./ui/DiscoverInsights";
import Testimonials from "./ui/Testimonials";
import CTAButton from "./ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
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
import Verticalhoverhm from "./ui/Verticalhoverhm";
import singlepaymentimg from "@/public/singlepayment.png";

const poweruppayment = [
  {
    heading: "Sending digital check",
    text: "",
  },
  {
    heading: "Enhance recipient satisfaction",
    text: "",
  },
  {
    heading: "Reduce overhead cost",
    text: "",
  },
];
const singlepayment = [
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
          <h1 className="text-center text-[50px] xl:text-[70px] 2xl:text-[80px] 3xl:text-[88px]">
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
      <section className="container m-auto relative pt-[10%] overflow-hidden">
        <div className=" my-10 grad-border grad-border-rtgs bdr-md-rds no-bdr gap-20 px-8 lg:px-[12%] py-[5%]">
          <p className="w-[58%] text-[18px] lg:text-[27px] text-[#404040]">
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
        <div className="pt-[100px] px-8 lg:pt-[0px]">
          <Horizhoverhm heading="" description="" listitems={listitems} />
        </div>
        <div className="absolute  right-[-250px] top-0 lg:right-[12%]">
          <Image
            src={Hmmobilesec}
            className="w-[68%] lg:w-[100%]"
            alt="Mobile Payment Screen"
          />
        </div>
      </section>
      <section className="container m-auto px-8">
        <div className=" my-10 flex flex-col lg:flex-row items-center grad-border grad-border-rtgs bdr-md-rds gap-10 lg:gap-20 p-[60px] lg:px-[12%] lg:py-[5%] md:w-[75%] lg:w-full m-auto">
          <div>
            <h4 className="text-center lg:text-left text-[30px] xl:text-[35px] 3xl:text-[41px] text-[#404040] ">
              Searching for the best enterprise SEO solution?
            </h4>
            <p className="text-center lg:text-left text-[20px] xl:text-[22px] 3xl:text-[27px] font-[400] leading-[24px] text-[#404040] pt-5">
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
        </div>
      </section>
      <section className="container mx-auto px-8">
        <Verticalhoverhm
          heading="Let us"
          spancon="power up"
          headingtwo="your payments"
          description=""
          flexReverse=""
          vhoveritems={poweruppayment}
          imageSrc={Hmenggprodt}
        />
      </section>
      <section>
        <Verticalhoverhm
          heading=""
          spancon=""
          headingtwo=""
          description=""
          flexReverse="flex-row-reverse"
          vhoveritems={singlepayment}
          imageSrc={singlepaymentimg}
        />
      </section>
      <section className="container m-auto">
        <h5 className="text-[50px] lg:text-[92px] text-[#404040] text-center font-[400]">
          They <span className="font-[300] italic shaded-border">trust us</span>
        </h5>
        {/* <div className="flex flex-wrap gap-10 py-[80px] justify-center">
          <Image
            src={Anydesk}
            className="w-1/3 md:w-1/3 lg:w-1/6"
            alt="AnyDesk"
          />
          <Image
            src={MassMutual}
            className="w-1/3 md:w-1/3 lg:w-1/6"
            alt="MassMutual"
          />
          <Image src={Arm} className="w-1/3 md:w-1/3 lg:w-1/6" alt="Arm" />
          <Image src={Visa} className="w-1/3 md:w-1/3 lg:w-1/6" alt="Visa" />
          <Image
            src={Stampli}
            className="w-1/3 md:w-1/3 lg:w-1/6"
            alt="Stampli"
          />
          <Image src={Kin} className="w-1/3 md:w-1/3 lg:w-1/6" alt="Kin" />
        </div> */}
      </section>
      <Testimonials />

      <Verticalhoverhm
        heading="Discover"
        spancon="Our Solutions"
        description=""
        flexReverse="flex-row-reverse"
        vhoveritems={itemscon}
        imageSrc={Hmenggprodt}
      />
      <DiscoverInsights />

      <Footer />
    </>
  );
}
