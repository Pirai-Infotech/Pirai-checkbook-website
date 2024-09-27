"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Blogcon from "../ui/Blogcon";
import cspower from "@/public/cs_power.svg";
import csmeal from "@/public/cs_meal.svg";
import csvault from "@/public/cs_vault.svg";
import csace from "@/public/cs_ace.svg";
import CTAButton from "@/app/ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import signupArrowcolor from "../../public/signup-arrow-purple.svg";
import NavigateButton from "../ui/NavigateButton";

const contentList = [
  {
    created: "MAY 07, 2020",
    htmlTitle: "Checkbook Partners with ath Power Consulting",
    metaDescription:
      "Checkbook's cost savings and robust support has been a game changer for ath Power Consulting",
    featuredImage: cspower,
    featuredImageAltText:""
  },
  {
    created: "FEB 13, 2020",
    htmlTitle: "Checkbook Partners with MealHi5",
    metaDescription:
      "Switching to Checkbook.io for vendor payments has significantly made payouts smoother and cheaper for MealHi5",
    featuredImage: csmeal,
    featuredImageAltText:""
  },
  {
    created: "AUG 22, 2019",
    htmlTitle: "Checkbook Partners with Vault.insurance",
    metaDescription:
      "Vault offers insurance coverage and services for high-value homes, art, jewelry, cyber and personal excess liability coverage",
    featuredImage: csvault,
    featuredImageAltText:""
  },
  {
    created: "JUN 13, 2019",
    htmlTitle: "Checkbook Partners with Ace+",
    metaDescription:
      "Checkbook Partners with Ace+, a major mystery shopping company with over 300,000 professional evaluators throughout the United States and Canada",
    featuredImage: csace,
    featuredImageAltText:""
  }
];
function Page() {
 const btnName = "Read More";
  return (
    <div className="px-4 sm:px-0">
      <section className="container main-con m-auto pb-10 md:pb-20">
        <div className="w-[80%] sm:w-[70%] m-auto">
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px] md:px-20 lg:px-0">
          Case <span>Studies</span>
          </h1>
          <div className="flex flex-row pt-10 lg:pt-6 xl:pt-10 gap-2 sm:gap-4 lg:gap-8 items-center justify-center">
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
              textColor={"text-white"}
              paddingx={"px-6 lg:px-4 xl:px-6 2xl:px-9"}
              paddingy={"py-2 md:py-3"}
              textSize={"text-[14px] sm:text-[17px]"}
              rounderTL={"rounded-tl-none"}
              rounderTR={"rounded-tr-[60px]"}
              rounderBR={"rounded-br-[60px]"}
              rounderBL={"rounded-bl-[40px]"}
              content={"Explore Docs"}
              classname={""}
            />
            <CTAButton
              icon={signupArrowcolor}
              backgroundType={""}
              backgroundColor={"grad-border borderbutton"}
              textColor={"text-[#404040]"}
              paddingx={"px-6 lg:px-4 xl:px-6 2xl:px-9"}
              paddingy={"py-2 md:py-3"}
              textSize={"text-[14px] sm:text-[17px]"}
              rounderTL={"rounded-tl-none"}
              rounderTR={"rounded-tr-[60px]"}
              rounderBR={"rounded-br-[60px]"}
              rounderBL={"rounded-bl-[40px]"}
              classname={""}
              content={"Get Started"}
            />
          </div>
          {/* <p className="pt-5 lg:pt-[30px] text-center text-[18px] font-[400] 2xl:text-[27px]">
            See where we’ll be and get a chance to meet with the Checkbook team.
          </p> */}
        </div>
      </section>
      <NavigateButton />
      <section className="md:mb-6 lg:mb-10 blg-pg">
      <Blogcon
        contentList={contentList}
        btnName = {btnName}
        borderclasslist="flex flex-col-reverse lg:flex-row items-center justify-between grad-border grad-border-compliance bdr-webinar-rds gap-5 p-10 xl:p-20 sm:w-[45%] lg:w-[95%] 3xl:w-[78%] m-auto  lg:bg-[#fff0]"
        classlist="text-[#9180FF] font-[400] lg:text-[28px] 3xl:text-[40px] block pt-2 3xl:pr-20"
        classdescription="text-[16px] lg:text-[18px] lg:pl-4 pt-2 sm:pt-5 pb-5"
        classImage = "blg-img bg-grad w-[284px] sm:w-[230px] md:w-[250px] h-[250px] md:h-[181px] lg:w-[470px] lg:h-[300px]"
        textcolor = "text-[#3EA6BB]"
      />
      </section>
      <ReadytoGetStart />
    </div>
  );
}

export default Page;
