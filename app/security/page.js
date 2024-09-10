"use client";
import React from "react";
import ReadytoGetStart from "@/app/ui/ReadytoGetStart";
import Faq from "@/app/ui/Faq";

function page() {
  return (
    <div className="px-5 sm:px-0">
      <section>
        <h1 className="font-inter font-light leading-[49.62px] lg:leading-[106.5px] text-center text-[41px] lg:text-[88px] md:m-auto lg:m-0 lg:py-10">
          <span className="custom-text-security">Security</span>
        </h1>
      </section>
      <section className="container main-con m-auto py-10">
        <Faq />
      </section>
      <section className="py-10">
        <ReadytoGetStart />
      </section>
    </div>
  );
}

export default page;
