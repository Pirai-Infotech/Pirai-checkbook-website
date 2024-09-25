"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import DiscoverInsights from "../ui/DiscoverInsights";
import Testimonials from "../ui/Testimonials";
import CTAButton from "../ui/CTAButton";
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
import Horizhoverhm from "../ui/Horizhoverhm";
import Hmmobilesec from "@/public/hm_mobile_sec.svg";
import Verticalhoverhm from "../ui/Verticalhoverhm";
import singlepaymentimg from "@/public/singlepayment.png";
import Easytouse from "@/public/easytouseapi_hm.png";
import React from "react";
import { Tabs } from "antd";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
// import { TinaMarkdown } from "tinacms/dist/rich-text";

const onChange = (key) => {
  console.log(key);
};

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

const items = [
  {
    key: "1",
    label: (
      <span className="font-spotify text-[20px] font-light leading-[28.22px] text-cente">
        DEPARTMENTS (04)
      </span>
    ),
    children: (
      <Verticalhoverhm
        discoverheading={true}
        heading=""
        spancon=""
        description=""
        flexReverse="md:flex-row lg:flex-row-reverse"
        vhoveritems={itemscon}
        imageSrc={Hmenggprodt}
      />
    ),
  },
  {
    key: "2",
    label: (
      <span className="font-spotify text-[20px] font-light leading-[28.22px] text-cente">
        INDUSTRIES (08){" "}
      </span>
    ),
    children: "",
  },
  {
    key: "3",
    label: (
      <span className="font-spotify text-[20px] font-light leading-[28.22px] text-cente">
        USE CASES (05)
      </span>
    ),
    children: "",
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


export default function HomePage(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const tinaData = data?.page;

  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkResponsive = () => {
        setIsResponsive(window.innerWidth <= 1024);
      };
      checkResponsive();
      window.addEventListener("resize", checkResponsive);
      return () => window.removeEventListener("resize", checkResponsive);
    }
  }, []);
  
const sectionTwoData = tinaData?.sectionTwo;

const listitems = [1, 2, 3, 4].map((index) => ({
  iconAlt: sectionTwoData?.TableImageAlt,    
  icon: sectionTwoData?.[`TableImage${index}`],
  iconKey: `TableImage${index}`, 
  title: sectionTwoData?.[`TableHead${index}`],
  titleKey: `TableHead${index}`,              
  text: sectionTwoData?.[`TableBody${index}`], 
  textKey: `TableBody${index}`, 
}));

const hoverList = tinaData?.sectionFourText?.HoverList 

  const poweruppayment = [1, 2, 3].map((index) => ({
      heading: hoverList?.[`Heading${index}`],
      headingKey: `Heading${index}`, 
      text: hoverList?.[`Content${index}`],
      textKey: `Content${index}`, 
  }));

  return (
    <div className="cb-bg bg-pp">
      <div className="hidden lg:block bg-gradient-to-r from-[#00FFB2] to-[#00E0FF] text-center py-5 ">
        <p className="font-[400] text-[#4d4d4d] text-[17px]">
          <span className="font-[700]">SED EGESTAS, ANTE ET.</span> VULPUTATE
          VOLUTPAT, ERAS PEDE SEMPER EST.
        </p>
      </div>
      <Header />
      <section className="container main-con m-auto sm:w-[95%] lg:w-[80%] 2xl:w-[70%] px-4 py-10 md:px-[0]" data-tina-field={tinaField(tinaData, "banner")}>
        <div className="flex flex-col items-center px-[0%] sm:px-[7%] lg:px-[0%]">
          <h1 className="text-center text-[50px] xl:text-[70px] 2xl:text-[80px] 3xl:text-[88px]" data-tina-field={tinaField(tinaData?.banner, "bannerTitle")}>
            {tinaData?.banner?.bannerTitle}
            <br />
            <span data-tina-field={tinaField(tinaData?.banner, "bannerSpanTitle")}>{tinaData?.banner?.bannerSpanTitle}</span>
          </h1>
          {tinaData?.banner?.bannerSubTitle?.children?.map((list) => {
            return list?.children?.map((item, index) => {
              return (
                <p
                  className="py-[30px] text-center text-[#404040] text-[18px] xl:text-[27px]"
                  key={index}
                  data-tina-field={tinaField(tinaData?.banner, "bannerSubTitle")}
                >
                  {item?.text}
                </p>
              );
            });
          })}
          <p className="py-[30px] text-center text-[#404040] text-[18px] xl:text-[27px]" data-tina-field={tinaField(tinaData?.banner, "bannerSubTitle")}>
            {tinaData?.banner?.bannerSubTitle}
          </p>
          <div data-tina-field={tinaField(tinaData?.banner, "bannerButtonText")}>
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#3D77EB]  to-[#D289FF]"}
              textColor={"text-[#fff]"}
              content={tinaData?.banner?.bannerButtonText}
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
      <section className=" relative pt-[10%] sm:px-8 overflow-hidden">
        <div className="container m-auto md:w-[75%] lg:w-full my-10 grad-border grad-border-rtgs bdr-hm-rds no-bdr gap-20 px-10 md:px-0 lg:px-[12%] py-[5%]" data-tina-field={tinaField(tinaData, "sectionOne")}>
          <p className="w-[53%] sm:w-[58%] text-[18px] lg:text-[27px] text-[#404040]" data-tina-field={tinaField(tinaData?.sectionOne, "sectionOneText")}>
            {tinaData?.sectionOne?.sectionOneText}
          {/* <TinaMarkdown content={tinaData?.sectionOne?.sectionOneText} /> */}
          </p>
        </div>
        <div className="pt-[100px] px-8 lg:px-0 lg:pt-[0px]">
          <Horizhoverhm heading="" description={tinaData} listitems={listitems} />
        </div>
        <div className="absolute right-[-230px] top-0 md:right-[-50px] lg:right-[2%] 2xl:right-[12%]" data-tina-field={tinaField(tinaData?.sectionOne, "sectionOneImage")}>
          <Image
            src={tinaData?.sectionOne?.sectionOneImage? tinaData?.sectionOne?.sectionOneImage : ''}
            width={500}
            height={500}
            className="w-[68%] lg:w-[85%] xl:w-[90%] 2xl:w-[100%]"
            alt="Mobile Payment Screen"
          />
        </div>
      </section>
      <section className="container main-con m-auto px-4">
        <div className=" my-10 flex flex-col lg:flex-row items-center grad-border grad-border-rtgs bdr-hm-rds gap-10 lg:gap-20 p-[60px] 2xl:px-[12%] lg:py-[5%] md:w-[75%] lg:w-full m-auto" data-tina-field={tinaField(tinaData, "sectionThreeText")}>
          <div>
            <h4 className="text-center lg:text-left text-[30px] 2xl:text-[32px] 3xl:text-[41px] text-[#404040]" data-tina-field={tinaField(tinaData?.sectionThreeText, "Heading")}>
              {tinaData?.sectionThreeText?.Heading}
            </h4>
            <p className="text-center lg:text-left text-[20px] 2xl:text-[22px] 3xl:text-[27px] font-[400] leading-[24px] text-[#404040] pt-5" data-tina-field={tinaField(tinaData?.sectionThreeText, "Content")}>
              {tinaData?.sectionThreeText?.Content}
            </p>
          </div>
          <div data-tina-field={tinaField(tinaData?.sectionThreeText, "Button")}>
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#3D77EB]  to-[#D289FF]"}
              textColor={"text-[#FFF]"}
              content={tinaData?.sectionThreeText?.Button}
              paddingx={"px-8 lg:px-6 xl:px-7 2xl:px-8"}
              paddingy={"py-2 md:py-3"}
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
      <section className="container mx-auto lg:px-8" data-tina-field={tinaField(tinaData, "sectionFourText")}>
        <Verticalhoverhm
          heading={!isResponsive ? tinaData?.sectionFourText?.HeadingI : (tinaData?.sectionFourText?.HeadingI + '' + tinaData?.sectionFourText?.HeadingII + '' + tinaData?.sectionFourText?.HeadingIII) }
          spancon={!isResponsive ? tinaData?.sectionFourText?.HeadingII : ""}
          headingtwo={!isResponsive ? tinaData?.sectionFourText?.HeadingIII : ""}
          description=""
          flexReverse="md:flex-row"
          vhoveritems={poweruppayment}
          imageSrc={tinaData?.sectionFourText?.Image}
          imgMessage={tinaData?.sectionFourText?.ImageTopText}
          tinaData={tinaData}
        />
      </section>
      <section className="container m-auto lg:px-8">
        <Verticalhoverhm
          heading={
            !isResponsive
              ? ""
              : "A no code/low code option and a seamless Dashboard"
          }
          spancon=""
          headingtwo=""
          description=""
          flexReverse="md:flex-row-reverse"
          vhoveritems={singlepayment}
          imageSrc={singlepaymentimg}
          imgMessage={
            isResponsive
              ? ""
              : "A no code/low code option and a seamless Dashboard"
          }
        />
      </section>
      <section className="container main-con m-auto pb-0 md:pb-10 lg:pb-20">
        <h5 className="text-[50px] lg:text-[92px] text-[#404040] text-center font-[400]">
          They <span className="font-[300] italic shaded-border">trust us</span>
        </h5>
        <div className="flex flex-wrap gap-[4%] 2xl:gap-[7%] py-[80px] justify-center">
          <div className="flex justify-center pb-10 lg:pb-0 w-[40%] sm:w-[30%] lg:w-auto">
            <Image src={Anydesk} className="" alt="AnyDesk" />
          </div>
          <div className="flex justify-center pb-10 lg:pb-0 w-[40%] sm:w-[30%] lg:w-auto">
            <Image src={MassMutual} className="" alt="MassMutual" />
          </div>
          <div className="flex justify-center pb-10 lg:pb-0 w-[40%] sm:w-[30%] lg:w-auto">
            <Image src={Arm} className="" alt="Arm" />
          </div>
          <div className="flex justify-center pb-10 lg:pb-0 w-[40%] sm:w-[30%] lg:w-auto">
            <Image src={Visa} className="" alt="Visa" />
          </div>
          <div className="flex justify-center pb-10 lg:pb-0 w-[40%] sm:w-[30%] lg:w-auto">
            <Image src={Stampli} className="" alt="Stampli" />
          </div>
          <div className="flex justify-center pb-10 lg:pb-0 w-[40%] sm:w-[30%] lg:w-auto">
            <Image src={Kin} className="" alt="Kin" />
          </div>
        </div>
      </section>
      <section className="tmnl-bg">
        <Testimonials />
      </section>
      <section className="container m-auto">
        <h3 className="text-center mt-14 font-[300] text-[30px] xl:text-[92px]">
          Discover
          <span> Our Sulation </span>
        </h3>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className="noBorderTabs pt-10 block sm:inline-flex"
        />
      </section>
      <DiscoverInsights insightType="your payments" />

      <Footer isForm={true} />
    </div>
  );
}
