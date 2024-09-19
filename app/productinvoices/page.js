import React from "react";
import CTAButton from "../ui/CTAButton";
import Image from "next/image";
import signupArrow from "@/public/signup-arrow.svg";
import signupArrowcolor from "@/public/signup-arrow-purple.svg";
import topRightarrow from "@/public/topRight.svg";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import CBIsolation from "@/public/cb_isolation_mode.png";

function page() {
  return (
    <div className="px-5">
      <section className="container main-con m-auto sm:px-4 px-2 py-8 md:px-8 md:py-12">
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
              paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-10"}
              paddingy={"py-3 md:py-4"}
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
              paddingx={"px-6 lg:px-3 xl:px-5 2xl:px-10"}
              paddingy={"py-3 md:py-4"}
              textSize={"text-[17px]"}
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
      <section className="hidden lg:block container main-con m-auto md:py-10 lg:py-14">
        <div className="md:px-[60px] md:py-[60px] lg:px-[150px] lg:py-[50px] xl:px-[250px] xl:py-[80px] 2xl:px-[350px] 2xl:py-[100px] grad-border grad-border-rtgs bdr-rds-prd">
          <div className="flex flex-col gap-6">
            <h3 className="font-normal text-left w-full text-[28px] text-[#9180FF]">
              Easy To Send
            </h3>
            <p className="w-[48%] font-[Circular Spotify Text] text-[18px] font-light leading-[25.4px] text-left text-[#404040]">
              Checkbook’s digital invoicing system allows users to manage their
              payments and invoices in one convenient place. Customers use our
              powerful built-in features including real time payment tracking to
              streamline their receipt of funds. Need to give a controller or
              accountant access to your account? No problem! Our authorized user
              feature allows for users to grant permissioned access with the
              click of a button.
            </p>
          </div>
          <Image
            alt="Isolation Image"
            src={CBIsolation}
            className="object-contain"
          />
        </div>
      </section>
      {/* list box for tab and mobile and web*/}
      <section className="md:flex lg:grid container main-con m-auto gap-8">
        <div className="grid md:w-[50%] lg:w-full justify-center lg:gap-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8 w-full lg:max-w-[1000px] xl:max-w-[1240px] rounded-[25px] grad-border grad-border-def borderimage no-bdr-prd py-12 lg:px-0 lg:py-0">
            <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt3">
              <div className="lg:py-7 px-10 lg:pb-10 grad-border no-bdr grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
                <div className="flex flex-row lg:flex-col lg:justify-normal justify-between items-start gap-5">
                  <div className="lg:w-full hidden lg:flex justify-end">
                    <Image src={topRightarrow} alt="topRightarrow" />
                  </div>
                  <h4 className="sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] pl-4">
                    ACH Payments
                  </h4>
                  <div className="lg:w-full flex lg:hidden justify-end">
                    <Image src={topRightarrow} alt="topRightarrow" />
                  </div>
                </div>
                <p className="py-2 lg:mt-2 lg:pl-4 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                  Push funds directly to your recipient&apos;s bank account via
                  the automated clearing house network.
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
                    Real-Time Payments
                  </h4>
                  <div className="lg:w-full flex lg:hidden justify-end">
                    <Image src={topRightarrow} alt="topRightarrow" />
                  </div>
                </div>
                <p className="py-2 lg:mt-2 lg:pl-4 xl:pr-56 2xl:pr-60 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                  Deposit funds directly to your bank account in less than 60
                  seconds with our real-time payments solution.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-8 w-full lg:max-w-[1000px] xl:max-w-[1240px] rounded-[25px] grad-border grad-border-def borderimage no-bdr-prd py-12 lg:px-0 lg:py-0">
            <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[747px] h-auto lin-bf-txt3">
              <div className="lg:py-7 px-10 lg:pb-10 grad-border no-bdr grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
                <div className="flex flex-row lg:flex-col lg:justify-normal justify-between items-start gap-5">
                  <div className="lg:w-full hidden lg:flex justify-end">
                    <Image src={topRightarrow} alt="topRightarrow" />
                  </div>
                  <h4 className="sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] pl-4">
                    Instant Payments
                  </h4>
                  <div className="lg:w-full flex lg:hidden justify-end">
                    <Image src={topRightarrow} alt="topRightarrow" />
                  </div>
                </div>
                <p className="py-2 lg:mt-2 lg:pl-4 xl:pr-56 2xl:pr-60 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                  Accept money instantly with your existing VISA or MasterCard
                  debit and ATM cards.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt3">
              <div className="lg:py-7 px-10 lg:pb-10 grad-border no-bdr grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
                <div className="flex flex-row lg:flex-col lg:justify-normal justify-between items-start gap-5">
                  <div className="lg:w-full hidden lg:flex justify-end">
                    <Image src={topRightarrow} alt="topRightarrow" />
                  </div>
                  <h4 className="sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] pl-4">
                    Print
                  </h4>
                  <div className="lg:w-full flex lg:hidden justify-end">
                    <Image src={topRightarrow} alt="topRightarrow" />
                  </div>
                </div>
                <p className="py-2 lg:mt-2 lg:pl-4 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                  Print a physical check and deposit with your banking mobile
                  app or in person at a local branch or ATM.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] lg:w-full justify-center grid md:gap-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8 w-full lg:max-w-[1000px] xl:max-w-[1240px] rounded-[25px] grad-border grad-border-def borderimage no-bdr-prd py-12 lg:px-0 lg:py-0">
            <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt3">
              <div className="lg:py-7 px-10 lg:pb-10 grad-border no-bdr grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
                <div className="flex flex-row lg:flex-col lg:justify-normal justify-between items-start gap-5">
                  <div className="lg:w-full hidden lg:flex justify-end">
                    <Image src={topRightarrow} alt="topRightarrow" />
                  </div>
                  <h4 className="sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] pl-4">
                    Mail
                  </h4>
                  <div className="lg:w-full flex lg:hidden justify-end">
                    <Image src={topRightarrow} alt="topRightarrow" />
                  </div>
                </div>
                <p className="py-2 lg:mt-2 lg:pl-4 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                  Send a paper check via USPS, and deposit with your banking
                  mobile app or in person at a local branch.
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
                    Virtual Card *
                  </h4>
                  <div className="lg:w-full flex lg:hidden justify-end">
                    <Image src={topRightarrow} alt="topRightarrow" />
                  </div>
                </div>
                <p className="py-2 lg:mt-2 lg:pl-4 xl:pr-56 2xl:pr-60 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                  No bank account necessary! Accept funds in seconds with a
                  virtual card and use it just like a debit card.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:hidden md:mb-24 px-[35px] py-[60px] rounded-[69px] bg-gradient-to-r from-[#E0EBFB] via-[#E0EBFB] to-transparent">
            <div className="lg:flex gap-6">
              <h3 className="font-normal text-left w-full text-[27px] leading-[34.99px] text-[#404040]">
                Payment Rail Comparison
              </h3>
              <p className="font-[Circular Spotify Text] text-[18px] font-light leading-[25.4px] text-left text-[#404040] pt-4">
                Our platform gives you the freedom to offer various payment
                rails to your customers depending on what best fits your
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container main-con m-auto mt-8 md:mt-10 lg:mt-14">
        <ReadytoGetStart />
      </section>
    </div>
  );
}

export default page;
