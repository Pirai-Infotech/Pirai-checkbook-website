"use client";
import React from "react";
import ReadytoGetStart from "./ReadytoGetStart";
import Faq from "./Faq";
import TopBanner from "../../public/checkbookfednow.svg";
import Horizhover from "./Horizhover";
import easyicon from "@/public/Easyprocess.svg";
import labelicon from "@/public/Whitelabel.svg";
import DiscoverInsights from "./DiscoverInsights";
import Verticalhover from "./Verticalhover";
import ACHCompliance from "../../public/ACMEfednow.svg";
import Testimonials from "./Testimonials";
import VideoWithThumbnail from "./VideoWithThumbnail";
import HeroSection from "./HeroSection";
import ACHthumbnail from "@/public/workflow-ACH_thumbnail.png";
import cartImage from "@/public/cartBackground.svg";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";

// const items = [
//   {
//     icon: easyicon,
//     iconAlt: "Broad Acceptance",
//     title: "Broad Acceptance",
//     text: "FedNow will bring real-time payment capabilities to banks and payment processors across the US.",
//   },
//   {
//     icon: labelicon,
//     iconAlt: "Instant Settlement",
//     title: "Instant Settlement",
//     text: "Checkbook’s FedNow payments post instantly to your recipient's bank account, 24 hours a day, 7 days a week.",
//   },
// ];
// const itemscon = [
//   {
//     heading: "User Friendly",
//     text: "No need to worry about reconciling or chargebacks. FedNow will require request for payments before debits are made. Initially, only push payments will be rolled out as well.",
//   },
//   {
//     heading: "Finality of Settlement",
//     text: "No need to worry about reconciling or chargebacks. FedNow will require request for payments before debits are made. Initially, only push payments will be rolled out as well.",
//   },
// ];
export default function Page(props) {

    const { data } = useTina({
      query: props.query,
      variables: props.variables,
      data: props.data,
    });

    const tinaData = data?.fednow;
    const sectionTwoData = tinaData?.horizhover;
    const items = [1, 2].map((index) => ({
      icon: sectionTwoData?.[`image${index}`],
      iconKey: `image${index}`, 
      iconAlt: sectionTwoData?.[`title${index}`],
      title: sectionTwoData?.[`title${index}`],
      titleKey: `title${index}`, 
      text: sectionTwoData?.[`content${index}`],
      textKey: `content${index}`, 
    }));

    const sectionThree = tinaData?.sectionThree;
    const itemscon = [1, 2].map((index) => ({
      heading: sectionThree?.[`title${index}`],
      headingKey: `title${index}`, 
      text: sectionThree?.[`content${index}`],
      textKey: `content${index}`, 
    }));
    
  return (
    <div className="px-5 md:py-10 lg:py-0 sm:px-0">
     <HeroSection
        heroText={tinaData?.heroText}
        heading={tinaData?.heroText?.bannerTitle}
        spancon={tinaData?.heroText?.bannerSpanTitle}
        description={tinaData?.heroText?.bannerContent}
        rightimg={TopBanner}
        heroString="heroText"
        bannerString="bannerTitle"
        bannerspanString="bannerSpanTitle"
        contentString="bannerContent"
        TitleString="bannerTitle"
        SignupString="bannerButtonText1"
        ButtonString="bannerButtonText2"
        BannerImage="bannerImage"
        Button1={tinaData?.heroText?.bannerButtonText1}
        Button2={tinaData?.heroText?.bannerButtonText2}
      />
      <section className="w-[100%] sm:w-[90%] m-auto">
      <Horizhover
          sectionTwo={tinaData?.horizhover}
          heading={tinaData?.horizhover?.title}
          description={tinaData?.horizhover?.content}
          items={items}
          TitleString="title"
          ContentString="content"
        />
      </section>
      <Verticalhover
        sectionThree={tinaData?.sectionThree}
        digital="digital"
        digitalspan="digitalspan"
        digitalcontent="digitalcontent"
        heading={tinaData?.sectionThree?.digital}
        spancon={tinaData?.sectionThree?.digitalspan}
        description={tinaData?.sectionThree?.digitalcontent}
        items={itemscon}
        imageSrc={tinaData?.sectionThree?.image}
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
        <DiscoverInsights
        insightType="FedNow payments" 
        displayinsights={tinaData?.displayinsights}
        heading={tinaData?.displayinsights?.Headingone}
        description={tinaData?.displayinsights?.Headingtwo}
        descriptions={tinaData?.displayinsights?.insight}
        headstring="Headingtwo"
        discover={tinaData?.discover}
        />
      </section>
      <section className="py-10 relative">
        <Testimonials />
      </section>
      <section>
      <ReadytoGetStart  
        rgs={tinaData?.rgs}
        rgstwo={tinaData?.rgstwo}    
        rgsthree={tinaData?.rgsthree}
      />
      </section>
      <section>
        <Faq />
      </section>
    </div>
  );
}
