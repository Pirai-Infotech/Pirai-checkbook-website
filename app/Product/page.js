import React from "react";
import CTAButton from "../ui/CTAButton";
import Image from "next/image";
import signupArrow from "@/public/signup-arrow.svg";
import signupArrowcolor from "@/public/signup-arrow-purple.svg";
import topRightarrow from "@/public/topRight.svg";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import nextprevious from "@/public/table-pre-next.svg";

function page() {
  const paymentMethods = [
    {
      product: "ACH Payments",
      price: "Starting at $1",
      settlementDelay: "≤ 3 business days",
      depositMethod: "Bank Account",
      chargebackPeriod: "3-60 business days",
      processingDays: "US Business Days",
    },
    {
      product: "Mailed Checks",
      price: "Starting at $1.79",
      settlementDelay: "~ 3 business days",
      depositMethod: "Bank Account",
      chargebackPeriod: "3-40 business days",
      processingDays: "US Business Days",
    },
    {
      product: "Printed Checks",
      price: "Starting at $1",
      settlementDelay: "≤ 3 business days",
      depositMethod: "Bank Account",
      chargebackPeriod: "3-40 business days",
      processingDays: "US Business Days",
    },
    {
      product: "Instant Pay",
      price: "Contact Sales",
      settlementDelay: "~ 20 seconds",
      depositMethod: "Existing Debit Card",
      chargebackPeriod: "None",
      processingDays: "24x7x365",
    },
    {
      product: "Virtual Cards",
      price: "Contact Sales",
      settlementDelay: "~ 20 seconds",
      depositMethod: "Checkbook",
      chargebackPeriod: "None",
      processingDays: "24x7x365",
    },
    {
      product: "Real-Time Payments",
      price: "Contact Sales",
      settlementDelay: "< 60 seconds",
      depositMethod: "Debit Card",
      chargebackPeriod: "None",
      processingDays: "24x7x365",
    },
  ];

  return (
    <div className="px-5">
      <section className="container m-auto sm:px-4 px-2 py-8 md:px-8 md:py-12">
        <div className="text-center">
          <h1 className="font-inter font-light leading-[49.62px] lg:leading-[106.5px] text-center text-[41px] lg:text-[88px] text-[#404040]">
            A Complete
          </h1>
          <h1 className="font-inter font-light leading-[49.62px] lg:leading-[106.5px] text-center text-[41px] lg:text-[88px]">
            <span>Payments Platform</span>
          </h1>
          <div className="flex justify-center mt-4 sm:mt-5 md:mt-6 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
            <p className="font-circular-spotify font-light leading-[25.4px] lg:leading-[38.1px] text-[18px] lg:text-[27px] text-[#404040] text-center">
              Send payments with Checkbook's powerful APIs and software
              solutions designed to help you facilitate your funds flows.
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
      {/* first box */}
      <section className="container m-auto py-8 md:py-10 lg:py-14">
        <div className="px-[35px] py-[60px] rounded-[69px] md:px-[60px] md:py-[60px] lg:px-[150px] lg:py-[50px] xl:px-[250px] xl:py-[80px] 2xl:px-[350px] 2xl:py-[100px] md:rounded-[69px] lg:rounded-[199px] bg-gradient-to-r from-[#E0EBFB] via-[#E0EBFB] to-transparent">
          <div className="lg:flex gap-6">
            <h3 className="font-normal text-left w-full text-[27px] leading-[34.99px] text-[#404040]">
              Solutions to fit your needs
            </h3>
            <p className="font-[Circular Spotify Text] text-[18px] font-light leading-[25.4px] pt-4 md:pt-6 lg:pt-0 text-left text-[#404040] lg:px-14">
              Future proof your accounts payable - our payment rails give you
              flexibility where you need it and control when you want it.
              Whether you are looking to push a payment directly to your
              recipient’s bank account or issue a virtual card, our platform has
              you covered.
            </p>
          </div>
        </div>
      </section>
      {/* list box for tab and mobile*/}
      <section className="md:flex lg:grid container m-auto gap-8">
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
                  Push funds directly to your recipient's bank account via the
                  automated clearing house network.
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
      {/* list box for web*/}
      <section className="hidden container m-auto w-full justify-center gap-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full lg:max-w-[1000px] xl:max-w-[1240px]">
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt3">
            <div className="py-7 px-10 lg:pb-10 grad-border grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="pt-10 sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] lg:pl-4">
                  ACH Payments
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                Push funds directly to your recipient's bank account via the
                automated clearing house network.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[747px] h-auto lin-bf-txt3">
            <div className="py-7 px-10 lg:pb-10 grad-border grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="pt-10 sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] lg:pl-4">
                  Real-Time Payments
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 xl:pr-56 2xl:pr-60 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                Deposit funds directly to your bank account in less than 60
                seconds with our real-time payments solution.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full lg:max-w-[1000px] xl:max-w-[1240px]">
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[747px] h-auto lin-bf-txt">
            <div className="py-7 px-10 lg:pb-10 grad-border grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="pt-10 sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] lg:pl-4">
                  Instant Payments
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 xl:pr-56 2xl:pr-60 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                Accept money instantly with your existing VISA or MasterCard
                debit and ATM cards.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt">
            <div className="py-7 px-10 lg:pb-10 grad-border grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="pt-10 sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] lg:pl-4">
                  Print
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                Print a physical check and deposit with your banking mobile app
                or in person at a local branch or ATM.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full lg:max-w-[1000px] xl:max-w-[1240px]">
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt">
            <div className="py-7 px-10 lg:pb-10 grad-border grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="pt-10 sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] lg:pl-4">
                  Mail
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                Send a paper check via USPS, and deposit with your banking
                mobile app or in person at a local branch.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[747px] h-auto lin-bf-txt">
            <div className="py-7 px-10 lg:pb-10 grad-border grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="pt-10 sm:pt-0 text-[22px] lg:text-[24px] leading-[30.77px] lg:leading-[25.4px] lg:w-[70%] lg:pl-4">
                  Virtual Card *
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 xl:pr-56 2xl:pr-60 text-[16px] lg:text-[18px] leading-[22.58px] lg:leading-[25.4px]">
                No bank account necessary! Accept funds in seconds with a
                virtual card and use it just like a debit card.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* second box */}
      <section className="hidden lg:block container m-auto md:py-10 lg:py-14">
        <div className="md:px-[60px] md:py-[60px] lg:px-[150px] lg:py-[50px] xl:px-[250px] xl:py-[80px] 2xl:px-[350px] 2xl:py-[100px] grad-border grad-border-rtgs bdr-rds-prd">
          <div className="lg:flex gap-6">
            <h3 className="font-normal text-left w-full text-[27px] leading-[34.99px] text-[#404040]">
              Payment Rail Comparison
            </h3>
            <p className="font-[Circular Spotify Text] text-[18px] font-light leading-[25.4px] text-left text-[#404040] lg:px-14">
              Our platform gives you the freedom to offer various payment rails
              to your customers depending on what best fits your business.
            </p>
          </div>
        </div>
      </section>
      {/* table */}
      <section className="px-8 pt-10 my-14 overflow-x-scroll">
        <table className="min-w-[1459px] m-auto table-auto text-center font-inter font-semibold text-[21px] leading-[25px] text-[#7F53E8]">
          <thead className="grad-border grad-border-rtgs rounded-[149px] bdr-rds-prd bottom-10">
            <tr className="text-[#7F53E8] font-inter font-semibold text-[21px] leading-[25.41px]">
              <th className="px-4 py-7 w-[5%]"></th>
              <th className="px-4 py-7">Product</th>
              <th className="px-4 py-7">Price</th>
              <th className="px-4 py-7">Settlement Delay</th>
              <th className="px-4 py-7">Deposit Method</th>
              <th className="px-4 py-7">Chargeback Period</th>
              <th className="px-4 py-7">Processing Days</th>
              <th className="px-4 py-7 w-[5%]"></th>
            </tr>
          </thead>
          <tbody className="grad-border grad-border-rtgs bdr-rds-prd-tdata remove-last-border">
            {paymentMethods.map((method, index) => (
              <tr
                key={index}
                className="text-[#404040] last:border-b-0 px-3 font-inter font-normal text-[21px] leading-[25.41px]"
              >
                <td className="px-4 py-7 w-[5%]"></td>
                <td className="border-b border-dashed border-[#7F53E8] last:border-b-0 px-4 py-7">
                  {method.product}
                </td>
                <td className="border-b border-dashed border-[#7F53E8] last:border-b-0 px-4 py-7">
                  {method.price}
                </td>
                <td className="border-b border-dashed border-[#7F53E8] last:border-b-0 px-4 py-7">
                  {method.settlementDelay}
                </td>
                <td className="border-b border-dashed border-[#7F53E8] last:border-b-0 px-4 py-7">
                  {method.depositMethod}
                </td>
                <td className="border-b border-dashed border-[#7F53E8] last:border-b-0 px-4 py-7">
                  {method.chargebackPeriod}
                </td>
                <td className="border-b border-dashed border-[#7F53E8] last:border-b-0 px-4 py-7">
                  {method.processingDays}
                </td>
                <td className="px-4 py-7 w-[5%]"></td>
              </tr>
            ))}
            {/* <tr>
      <td colSpan="8" className="py-7">
        <div className="flex justify-center">
          <Image src={nextprevious} alt="Next and Previous" />
        </div>
      </td>
    </tr> */}
          </tbody>
        </table>
      </section>
      <section className="container m-auto mt-8 md:mt-10 lg:mt-14">
        <ReadytoGetStart />
      </section>
    </div>
  );
}

export default page;
