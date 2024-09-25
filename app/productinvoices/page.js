"use client";
import { useState, useEffect } from "react";
import React from "react";
import CTAButton from "../ui/CTAButton";
import Image from "next/image";
import signupArrow from "@/public/signup-arrow.svg";
import signupArrowcolor from "@/public/signup-arrow-purple.svg";
import topRightarrow from "@/public/topRight.svg";
import ACME_getpaid from "@/public/ACME_getpaid.svg";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import CBIsolation from "@/public/cb_isolation_mode.png";

function Page() {
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

  return (
    <div className="px-4 sm:px-0">
      <section className="container main-con m-auto sm:px-4 md:px-8 md:py-12">
        <div className="text-center">
          <h1 className="font-inter font-light leading-[49.62px] lg:leading-[106.5px] text-center text-[41px] lg:text-[88px] text-[#404040]">
            Get Paid <br />
            <span>On Time</span>
          </h1>
          <div className="flex justify-center mt-4 sm:mt-5 md:mt-6 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
            <p className="font-circular-spotify font-light leading-[25.4px] lg:leading-[38.1px] text-[18px] lg:text-[27px] text-[#404040] text-center">
              Checkbook&apos;s invoicing solution enables users to get paid via
              our popular Digital Check solution. No hassle. Directly into your
              account.
            </p>
          </div>
          <div className="flex justify-center gap-4 lg:gap-8 m-auto mt-5 md:mt-10 lg:mt-10">
            <CTAButton
              icon={signupArrow}
              backgroundType={"bg-gradient-to-r"}
              backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
              textColor={"text-[#FFF]"}
              paddingx={"px-5 sm:px-7 lg:px-6 xl:px-7 2xl:px-10"}
              paddingy={"py-2 sm:py-3 md:py-4"}
              textSize={"text-[17px]"}
              rounderTL={"rounded-tl-none"}
              rounderTR={"rounded-tr-[60px]"}
              rounderBR={"rounded-br-[60px]"}
              rounderBL={"rounded-bl-[40px]"}
              content={"Sign Up"}
            />
            <CTAButton
              icon={signupArrowcolor}
              backgroundType={""}
              backgroundColor={"grad-border borderbutton"}
              textColor={"text-[#404040]"}
              paddingx={"px-5 sm:px-7 lg:px-6 xl:px-7 2xl:px-10"}
              paddingy={"py-2 sm:py-3 md:py-4"}
              textSize={"text-[15px] sm:text-[17px]"}
              rounderTL={"rounded-tl-none"}
              rounderTR={"rounded-tr-[60px]"}
              rounderBR={"rounded-br-[60px]"}
              rounderBL={"rounded-bl-[40px]"}
              classname={"grad-border borderbutton "}
              content={"Try Our Demo"}
            />
          </div>
        </div>
      </section>
      <div className="lg:relative md:mt-8">
        <div className="block lg:hidden flex-1 lg:absolute right-0">
          <Image
            alt="Isolation Image"
            src={CBIsolation}
            className="object-contain sm:w-[850px] sm:h-[500px] md:w-full md:h-full"
          />
        </div>
        <section className="md:flex lg:block container main-con m-auto md:py-10 lg:py-14 gap-6">
          <div
            className={`mb-8 md:mb-0 md:w-[50%] lg:w-auto flex-row px-[40px] py-[50px] md:px-[40px] md:py-[40px] lg:px-[100px] lg:py-[50px] xl:px-[250px] xl:py-[80px] 2xl:px-[300px] 2xl:py-[100px] grad-border ${
              isResponsive ? `grad-border-def` : `grad-border-rtgs`
            } rounded-[55px] lg:rounded-[149px] onlyfor-bdr`}
          >
            <div className="flex-1 flex-col gap-6">
              <h3 className="font-normal text-left w-full text-[28px] text-[#9180FF] mb-4">
                Easy To Send
              </h3>
              <p className="lg:w-[40%] font-[Circular Spotify Text] text-[18px] font-light leading-[25.4px] text-left text-[#404040]">
                Checkbook’s digital invoicing system allows users to manage
                their payments and invoices in one convenient place. Customers
                use our powerful built-in features including real time payment
                tracking to streamline their receipt of funds. Need to give a
                controller or accountant access to your account? No problem! Our
                authorized user feature allows for users to grant permissioned
                access with the click of a button.
              </p>
            </div>
          </div>

          <div className="hidden md:block lg:hidden md:w-[50%] flex-row md:px-[40px] md:py-[40px] lg:px-[150px] lg:py-[50px] xl:px-[250px] xl:py-[80px] 2xl:px-[300px] 2xl:py-[100px] grad-border grad-border-def rounded-[55px] lg:rounded-[149px] onlyfor-bdr">
            <div className="flex-1 flex-row gap-6">
              <h3 className="font-normal text-left w-full text-[28px] text-[#9180FF] mb-4">
                Easy To Pay
              </h3>
              <p className="font-[Circular Spotify Text] text-[18px] font-light leading-[25.4px] text-left text-[#404040]">
                Once an invoice is received, customers can pay securely and
                quickly with our Digital Check solution. Worried about juggling
                multiple accounts for paying invoices? Checkbook’s intuitive
                account management system easily accommodates enterprises with
                dozens of accounts.
              </p>
            </div>
          </div>
        </section>
        <div className="hidden lg:block lg:flex-1 lg:absolute lg:top-[80px] 3xl:top-[-100px] lg:right-0">
          <Image
            alt="Isolation Image"
            src={CBIsolation}
            className="object-contain lg:w-[650px] xl:w-[700px] 2xl:w-[800px] 3xl:w-full md:h-full"
          />
        </div>
      </div>

      <div
        className={
          isResponsive ? `md:flex gap-8 container main-con m-auto` : ``
        }
      >
        {/* list box one*/}
        <section
          className={`mb-8 md:mb-0 md:flex lg:grid ${
            !isResponsive ? `container main-con m-auto` : ``
          } gap-8`}
        >
          <div className="grid lg:w-full justify-center lg:gap-8">
            <div className="flex flex-col lg:flex-row justify-between gap-8 w-full lg:max-w-[1000px] 2xl:max-w-[1240px] rounded-[25px] grad-border grad-border-def borderimage no-bdr-prd py-12 lg:px-0 lg:py-0">
              <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt3">
                <div className="lg:py-7 px-10 lg:pb-10 grad-border no-bdr grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
                  <div className="flex flex-row lg:flex-col lg:justify-normal justify-between items-start gap-5">
                    <div className="lg:w-full hidden lg:flex justify-end">
                      <Image src={topRightarrow} alt="topRightarrow" />
                    </div>
                    <h4 className="sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] pl-4">
                      On a Schedule
                    </h4>
                    <div className="lg:w-full flex lg:hidden justify-end">
                      <Image src={topRightarrow} alt="topRightarrow" />
                    </div>
                  </div>
                  <p className="py-2 lg:mt-2 lg:pl-4 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                    Turn on recurring billing to get payments at the same time
                    every week or month.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[747px] h-auto lin-bf-txt3">
                <div className="lg:py-7 px-10 lg:pb-10 grad-border no-bdr grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
                  <div className="flex flex-row lg:flex-col lg:justify-normal justify-between items-start gap-5">
                    <div className="lg:w-full hidden lg:flex justify-end">
                      <Image src={topRightarrow} alt="topRightarrow" />
                    </div>
                    <h4 className="sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] pl-4">
                      Designed For You
                    </h4>
                    <div className="lg:w-full flex lg:hidden justify-end">
                      <Image src={topRightarrow} alt="topRightarrow" />
                    </div>
                  </div>
                  <p className="py-2 lg:mt-2 lg:pl-4 xl:pr-56 2xl:pr-60 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                    Customize your invoices by attaching a description, note,
                    receipt, or invoice when requesting payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* second box */}
        <section
          className={`mb-8 md:mb-0 block md:hidden lg:block ${
            !isResponsive ? `container main-con m-auto` : ``
          } md:py-10 lg:py-14`}
        >
          <div
            className={`flex md:px-[60px] px-[40px] py-[50px] lg:px-[150px] xl:px-[250px] 2xl:px-[250px] grad-border ${
              isResponsive ? `grad-border-def` : `grad-border-rtgs`
            } rounded-[50px] lg:rounded-[149px] onlyfor-bdr`}
          >
            <div className="hidden lg:block flex-1">
              <Image
                alt="Isolation Image"
                src={ACME_getpaid}
                className="object-contain"
              />
            </div>
            <div className="flex-1 flex-row gap-6 md:py-[60px] lg:py-[50px] xl:py-[80px] 2xl:py-[120px]">
              <h3 className="font-normal text-left w-full text-[28px] text-[#9180FF] mb-4">
                Easy To Pay
              </h3>
              <p className="font-[Circular Spotify Text] text-[18px] font-light leading-[25.4px] text-left text-[#404040]">
                Once an invoice is received, customers can pay securely and
                quickly with our Digital Check solution. Worried about juggling
                multiple accounts for paying invoices? Checkbook’s intuitive
                account management system easily accommodates enterprises with
                dozens of accounts.
              </p>
            </div>
          </div>
        </section>

        {/* list box two*/}
        <section
          className={`md:flex lg:grid ${
            !isResponsive ? `container main-con m-auto` : ``
          } gap-8`}
        >
          <div className="lg:w-full justify-center grid md:gap-8">
            <div className="flex flex-col lg:flex-row justify-between gap-8 w-full lg:max-w-[1000px] 2xl:max-w-[1240px] rounded-[25px] grad-border grad-border-def borderimage no-bdr-prd py-12 lg:px-0 lg:py-0">
              <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt3">
                <div className="lg:py-7 px-10 lg:pb-10 grad-border no-bdr grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
                  <div className="flex flex-row lg:flex-col lg:justify-normal justify-between items-start gap-5">
                    <div className="lg:w-full hidden lg:flex justify-end">
                      <Image src={topRightarrow} alt="topRightarrow" />
                    </div>
                    <h4 className="sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] pl-4">
                      Realtime Tracking
                    </h4>
                    <div className="lg:w-full flex lg:hidden justify-end">
                      <Image src={topRightarrow} alt="topRightarrow" />
                    </div>
                  </div>
                  <p className="py-2 lg:mt-2 lg:pl-4 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                    With our webhooks notifications, we provide status updates
                    for your invoice payments the second they happen.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[747px] h-auto lin-bf-txt3">
                <div className="lg:py-7 px-10 lg:pb-10 grad-border no-bdr grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
                  <div className="flex flex-row lg:flex-col lg:justify-normal justify-between items-start gap-5">
                    <div className="lg:w-full hidden lg:flex justify-end">
                      <Image src={topRightarrow} alt="topRightarrow" />
                    </div>
                    <h4 className="sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] pl-4">
                      Automatic Payments
                    </h4>
                    <div className="lg:w-full flex lg:hidden justify-end">
                      <Image src={topRightarrow} alt="topRightarrow" />
                    </div>
                  </div>
                  <p className="py-2 lg:mt-2 lg:pl-4 xl:pr-56 2xl:pr-60 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                    Worried about forgetting to pay an invoice every month?
                    Setup automatic payments so you never have a late payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-8 md:mt-10 lg:mt-14">
        <ReadytoGetStart />
      </section>
    </div>
  );
}

export default Page;
