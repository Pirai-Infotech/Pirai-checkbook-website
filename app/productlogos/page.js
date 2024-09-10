import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Checkbooklogo from "@/public/checkbook_logo.svg";
import Image from "next/image";

function page() {
  return (
    <div className="px-5">
      <section className="container m-auto sm:px-4 px-2 py-8 md:px-8 md:py-12">
        <div className="text-center">
          <h1 className="font-inter font-light text-center text-[41px] lg:text-[72px] 3xl:text-[88px] text-[#404040]">
            Checkbook <br />
            <span> Brand Assets</span>
          </h1>

          <div className="flex justify-center mt-4 sm:mt-5 md:mt-6 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
            <p className="font-circular-spotify font-light leading-[25.4px] lg:leading-[38.1px] text-[18px] lg:text-[27px] text-[#404040] text-center">
              Download Official Checkbook Logos
            </p>
          </div>
        </div>

        <div className="grad-border grad-border-rtgs bdr-rds-prd mt-24 p-[100px] ">
          <div className="lg:flex gap-6">
            <h3 className="font-normal text-left w-full text-[27px] leading-[34.99px] text-[#404040]">
              The Checkbook Logo
            </h3>
            <p className="font-[Circular Spotify Text] text-[18px] font-light leading-[25.4px] text-left text-[#404040] pt-4">
              The Checkbook logo is available in two colors. Blue is designed
              for lighter backgrounds, while white works best on dark
              backgrounds. Please don't alter the logo in any way.
            </p>
            <div>
              <Image src={Checkbooklogo} alt="Checkbook Logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="container m-auto mt-8 md:mt-10 lg:mt-14">
        <ReadytoGetStart />
      </section>
    </div>
  );
}

export default page;
