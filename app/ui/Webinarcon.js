"use client";
// import React, { useState } from "react";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import { useRouter } from "next/navigation";

const Webinarcon = ({ contentList, classlist }) => {
  const visibleItems = 6;
  const router = useRouter();
  // const handleLoadMore = () => {
  //   setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  // };
  const handleClick = (id) => {
    router.push(`/blogdetails/${id}`);
  };

  return (
    <section>
      <div className="flex flex-wrap content-center gap-10 justify-center">
        {/* {contentList.slice(0, visibleItems).map((content, index) => ( */}
        {contentList.map((content, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between grad-border grad-border-compliance bdr-webinar-rds gap-5 p-7 xl:p-10 w-[100%] md:w-[47%] 2xl:w-[30%] m-auto  lg:bg-[#fff0]"
          >
            <div className="">
              <Image
                alt={content.featuredImageAltText}
                src={content.featuredImage}
                className="object-contain"
              />
            </div>
            <div className="w-[100%] lg:pl-0 pb-5 lg:pb-0">
              <h4 className="border-l-2 border-[#9180FF] pl-4 text-[#3EA6BB] text-[18px] font-[400] mb-5 lg:mb-0">
                {content.htmlTitle}
                <span className={`${classlist}`}>{content.title}</span>
              </h4>
              <p className="text-[16px] lg:text-[18px]  pt-2 sm:pt-5 pb-5">
                {content.metaDescription}
              </p>
              <div className="cursor-pointer" onClick={() => handleClick(content.id)} >
              <CTAButton
                icon={signupArrow}
                backgroundType={"bg-gradient-to-r"}
                backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                textColor={"text-[#fff]"}
                content={"More"}
                paddingx={"px-7 lg:px-4 xl:px-6 2xl:px-7"}
                paddingy={"py-2 sm:py-3"}
                textSize={"text-[16px] xl:text-[18px]"}
                rounderTL={"rounded-tl-none"}
                rounderTR={"rounded-tr-[60px]"}
                rounderBR={"rounded-br-[60px]"}
                rounderBL={"rounded-bl-[40px]"}
              />
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < contentList?.length && (
        <div className="flex justify-center my-10 lg:my-20 cursor-pointer">
          <CTAButton
            // onClick={handleLoadMore}
            icon={signupArrow}
            backgroundType={"bg-gradient-to-r"}
            backgroundColor={"from-[#3D77EB]  to-[#D289FF]"}
            textColor={"text-[#fff]"}
            content={"VIEW ALL"}
            paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-6 ml-4"}
            paddingy={"py-2 sm:py-3"}
            textSize={"text-[16px] xl:text-[18px]"}
            rounderTL={"rounded-tl-none"}
            rounderTR={"rounded-tr-[60px]"}
            rounderBR={"rounded-br-[60px]"}
            rounderBL={"rounded-bl-[40px]"}
          />
        </div>
      )}
    </section>
  );
};

export default Webinarcon;
