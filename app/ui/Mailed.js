"use client";
import React from "react";
import ACHthumbnail from "@/public/workflow-ACH_thumbnail.png";
import cartImage from "@/public/cartBackground.svg";
import Image from "next/image";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Faq from "../ui/Faq";
import TopBanner from "../../public/mailCheckbook.svg";
import Horizhover from "../ui/Horizhover";
import easyicon from "@/public/Easyprocess.svg";
import labelicon from "@/public/Whitelabel.svg";
import DiscoverInsights from "../ui/DiscoverInsights";
import Verticalhover from "../ui/Verticalhover";
import Papercheck from "../../public/MailBox.svg";
import Testimonials from "../ui/Testimonials";
import HeroSection from "../ui/HeroSection";
import VideoWithThumbnail from "../ui/VideoWithThumbnail";
import { useTina } from "tinacms/dist/react";

// const items = [
//   {
//     icon: easyicon,
//     iconAlt: "Easy to send",
//     title: "Easy to send",
//     text: "Our mailed checks only require a name, address and amount - we do the rest!",
//   },
//   {
//     icon: labelicon,
//     iconAlt: "White-label experience",
//     title: "White-label experience",
//     text: "Customize mailed checks with your business name and branding.",
//   },
// ];
// const itemscon = [
//   {
//     heading: "Keep everything in one place",
//     text: "Not using an ERP? No problem. Our RESTful API and dashboard CSV upload provide an effortless way for sending large volumes of checks.",
//   },
//   {
//     heading: "Batch Files",
//     text: "Not using an ERP? No problem. Our RESTful API and dashboard CSV upload provide an effortless way for sending large volumes of checks.",
//   },
// ];
export default function Page(props) {

    const { data } = useTina({
      query: props.query,
      variables: props.variables,
      data: props.data,
    });

    const tinaData = data?.mailed;
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
    <div className="px-5 sm:px-0">
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

      <section>
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
        imageSrc={Papercheck}
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
        insightType="Mail Paper Checks" 
        displayinsights={tinaData?.displayinsights}
        heading={tinaData?.displayinsights?.Headingone}
        description={tinaData?.displayinsights?.Headingtwo}
        descriptions={tinaData?.displayinsights?.insight}
        headstring="Headingtwo"
        discover={tinaData?.discover}
        />
      </section>
      <section className="py-14 lg:py-20 relative">
        <Testimonials />
      </section>
      <section className="py-10">
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

