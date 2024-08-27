import React from 'react'
import CTAButton from '../ui/CTAButton'
import Image from "next/image";
import Link from "next/link";
import signupArrow from "@/public/signup-arrow.svg";
import signupArrowcolor from "@/public/signup-arrow-purple.svg";
import topRightarrow from "@/public/topRight.svg";

function page() {
  return (
    <div>
         <section className="sm:px-4 px-2 py-8 md:px-8 md:py-12">
            <div className="text-center">
                <div className="font-inter text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-[-2px] text-[#404040]">
                A Complete
                </div>
                <div className="font-inter mt-4 sm:mt-5 md:mt-6 text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-[-2px] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]">
                Payments Platform
                </div>
                <div className="flex justify-center mt-4 sm:mt-5 md:mt-6">
                    <p className="font-circular-spotify lg:w-[770px] md:w-[546px] max-w-screen-lg text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-[#666666] text-center">
                    Send payments with Checkbook's powerful APIs and software solutions designed to help you facilitate your funds flows.
                    </p>
                </div>
                <div className='flex justify-around mt-4 w-[419px] m-auto sm:mt-5 md:mt-6'>
                <CTAButton
                    icon={signupArrow}
                    backgroundType={"bg-gradient-to-r"}
                    backgroundColor={"from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]"}
                    textColor={"text-[#FFF]"}
                    content={"Sign Up"}
                />
                <CTAButton
                    icon={signupArrowcolor}
                    backgroundType={""}
                    backgroundColor={""}
                    textColor={"text-[#404040]"}
                    classname={"grad-border borderbutton "}
                    content={"Try Our Demo"}
                />
                </div>
            </div>
      </section>
      <section>
      <div class="w-[1507px] m-auto px-[403px] py-[60px] h-[336px] gap-0 rounded-[199px] bg-gradient-to-r from-[#E0EBFB] via-[#E0EBFB] to-transparent">
        <div className='w-[701px] justify-between flex'>
        <h3 className='w-[247px]'>Solutions to fit
        your needs</h3>
        <p class="font-[Circular Spotify Text] w-[422px] text-[18px] font-light leading-[25.4px] text-left sm:text-[16px] sm:leading-[22.4px] md:text-[18px] md:leading-[25.4px] lg:text-[20px] lg:leading-[28px] xl:text-[22px] xl:leading-[30.8px]">
        Future proof your accounts payable - our payment rails give you flexibility where you need it and control when you want it. Whether you are looking to push a payment directly to your recipient’s bank account or issue a virtual card, our platform has you covered.
        </p>
        </div>
      </div>
      </section>
      <section className="w-full grid justify-center gap-8 mt-8  md:mt-10 lg:mt-14 px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full max-w-[1240px]">
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt">
            <div className="py-7 px-10 grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="text-lg pt-10 sm:pt-0 lg:text-xl lg:w-[70%] lg:pl-4">
                  PCI DSS
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 text-sm sm:text-base lg:text-lg">
                The Payment Card Industry Data Security Standard is an
                information security standard for organizations that handle
                branded credit cards from the major card schemes.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[747px] h-auto lin-bf-txt">
            <div className="py-7 px-10 grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="text-lg pt-10 sm:pt-0 lg:text-xl lg:w-[70%] lg:pl-4">
                  SOC 1
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 text-sm sm:text-base lg:text-lg">
                A SOC 1 Report (System and Organization Controls Report) is a
                report on Controls at a Service Organization which are relevant
                to user entities&apos; internal control over financial reporting.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full max-w-[1240px]">
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[747px] h-auto lin-bf-txt">
            <div className="py-7 px-10 grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="text-lg pt-10 sm:pt-0 lg:text-xl lg:w-[70%] lg:pl-4">
                  HIPAA
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 text-sm sm:text-base lg:text-lg">
                The Health Insurance Portability and Accountability Act of 1996,
                commonly known as HIPAA, is a series of regulatory standards
                that outline the lawful use and disclosure of protected health
                information (PHI).
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt">
            <div className="py-7 px-10 grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="text-lg pt-10 sm:pt-0 lg:text-xl lg:w-[70%] lg:pl-4">
                  SOC 2
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 text-sm sm:text-base lg:text-lg">
                SOC 2 is an auditing procedure that ensures your service
                providers securely manage your data to protect the interests of
                your organization and the privacy of its clients.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full max-w-[1240px]">
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[460px] h-auto lin-bf-txt">
            <div className="py-7 px-10 grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="text-lg pt-10 sm:pt-0 lg:text-xl lg:w-[70%] lg:pl-4">
                  PCI DSS
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 text-sm sm:text-base lg:text-lg">
                The Payment Card Industry Data Security Standard is an
                information security standard for organizations that handle
                branded credit cards from the major card schemes.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-[747px] h-auto lin-bf-txt">
            <div className="py-7 px-10 grad-border-compliance rounded-[25px] lg:rounded-[62px] bdr-compliance">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
                <div className="w-auto lg:w-full flex justify-start md:justify-normal lg:justify-end">
                  <Image src={topRightarrow} alt="topRightarrow" />
                </div>
                <h4 className="text-lg pt-10 sm:pt-0 lg:text-xl lg:w-[70%] lg:pl-4">
                  SOC 1
                </h4>
              </div>
              <p className="py-2 mt-2 lg:pl-4 text-sm sm:text-base lg:text-lg">
                A SOC 1 Report (System and Organization Controls Report) is a
                report on Controls at a Service Organization which are relevant
                to user entities&apos; internal control over financial reporting.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div class="w-[1507px] mt-10 m-auto px-[403px] py-[60px] h-[336px] gap-0 rounded-[199px] bg-gradient-to-r from-[#fbfcfe] via-[#ffffff] to-transparent">
        <div className='w-[701px] justify-between flex'>
        <h3 className='w-[247px]'>Payment Rail
        Comparison</h3>
        <p class="font-[Circular Spotify Text] w-[422px] text-[18px] font-light leading-[25.4px] text-left sm:text-[16px] sm:leading-[22.4px] md:text-[18px] md:leading-[25.4px] lg:text-[20px] lg:leading-[28px] xl:text-[22px] xl:leading-[30.8px]">
        Future proof your accounts payable - our payment rails give you flexibility where you need it and control when you want it. Whether you are looking to push a payment directly to your recipient’s bank account or issue a virtual card, our platform has you covered.
        </p>
        </div>
      </div>
      </section>
    </div>
  )
}

export default page