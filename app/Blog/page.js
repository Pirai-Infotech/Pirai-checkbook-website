
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import CTAButton from "../ui/CTAButton";
import Arrowclr from "@/public/Arrow_r_clr.svg";
import Businessintelligence from "@/public/Businessintelligence.svg";
import Enterpreneurship from "@/public/Entrepreneurship.svg";
import Payments from "@/public/Payments.svg";
import Synctera from "@/public/Synctera.svg";
import Blogcon from "../ui/Blogcon";
import Image from "next/image";
import Faq from "../ui/Faq";
import NavigateButton from "../ui/NavigateButton";

// const contentList = [
//   {
//     date: "SEP 01, 2023",
//     title: "FinTech Funding and Valuation versus Demand and Supply",
//     description:
//       "There’s been a growing rumbling in recent months that fintech is plateauing. After all, now that AI is here, what’s to stop it from demolishing the need for fintech innovations altogether?",
//     imageUrl: Enterpreneurship,
//   },
//   {
//     date: "JUL 11, 2023",
//     title: "The Anatomy of a 99% Completion Rate",
//     description:
//       "Most payments happen without payors or recipients ever having to think about them. And that’s the way it should be—in a perfect world, every transaction would be seamless. But it’s not a perfect world, and the reality is that only between 92–95% of payments are completed successfully. While at first glance, that statistic may not be jarring, but think of it this way: what if your paycheck bounced 8% of the time? Suddenly 92% seems a far cry from acceptable.",
//     imageUrl: Payments,
//   },
//   {
//     date: "MAY 26, 2023",
//     title: "How The Money Flows: Payments for Cash Advance",
//     description:
//       "There’s probably been a time in your life when you had an unexpected emergency arise and didn’t have the money to address it until your next paycheck. If you don’t have friends or family to help, there aren’t many reputable solutions that can get you money quickly. That’s where cash advance comes in: it’s a short-term lending tool designed to bridge the financial gap between paychecks. Here’s a look at the cash advance industry as a whole and how changing market conditions have made faster payments a necessity.",
//     imageUrl: Businessintelligence,
//   },
//   {
//     date: "APR 15, 2023",
//     title: "The Future of FinTech: A Look Ahead",
//     description:
//       "As the financial technology industry continues to evolve, it's important to look ahead at the emerging trends that will shape the future of fintech.",
//     imageUrl: Enterpreneurship,
//   },
//   {
//     date: "MAR 22, 2023",
//     title: "Understanding Digital Banking Trends",
//     description:
//       "Digital banking is on the rise. This article explores the latest trends in the industry and what they mean for consumers and businesses alike.",
//     imageUrl: Businessintelligence,
//   },
//   {
//     date: "FEB 10, 2023",
//     title: "Cryptocurrency and Its Impact on FinTech",
//     description:
//       "Cryptocurrency is changing the landscape of financial technology. This article delves into the impact of digital currencies on the fintech industry.",
//     imageUrl: Businessintelligence,
//   },
//   {
//     date: "FEB 10, 2023",
//     title: "Cryptocurrency and Its Impact on FinTech",
//     description:
//       "Cryptocurrency is changing the landscape of financial technology. This article delves into the impact of digital currencies on the fintech industry.",
//     imageUrl: Businessintelligence,
//   },
// ];

const fetchPosts = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_HUBSPOT_API_URL, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    const newData = data.results?.filter((res=>{
      if(res.slug.split("/")[0] == "blog"){
        return res;
      }
    }))
    return newData
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
};

const Page = async () => {
  const apidata = await fetchPosts();
  const btnName = "Read More";
  return (
    <div className="px-4 sm:px-0">
      <section className="blg-pg">
        <div className="container main-con m-auto flex-1 sm:px-[9%] lg:px-10 lg:py-20">
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px] md:px-20 lg:px-0">
            Checkbook <span>Resources</span>
          </h1>
        </div>
        <NavigateButton />
        <div className="container main-con m-auto sm:px-[10px] flex flex-col sm:flex-row lg:flex-col flex-wrap gap-10 justify-center pb-10">
          <div className="grad-border grad-border-compliance bdr-sm-rds p-10 xl:p-20 lg:w-[95%] 3xl:w-[78%] m-auto bg-[#3D77EB]">
          <h4 className="block lg:hidden lg:pl-4 text-[#ffffff] text-[18px] lg:text-[24px] font-[700] pb-4 lg:pb-[40px]  lg:mb-0">
              FEATURED
            </h4>
            <div className="flex flex-col-reverse sm:flex-row-reverse lg:flex-row justify-between gap-5 md:gap-14 lg:gap-5 ">
            <div className="lg:w-[58%] pb-5 lg:pb-0">
            <h4 className="hidden lg:block lg:pl-4 text-[#ffffff] text-[18px] lg:text-[24px] font-[700] pb-4 lg:pb-[40px]  lg:mb-0">
              FEATURED
            </h4>
                <h4 className="lg:border-l-2 border-[#fff] lg:pl-4 text-[#ffffff]  text-[18px] lg:text-[24px] mb-5 lg:mb-0">
                  MAR 06, 2024
                  <span className="text-[#fff] text-[24px] block pt-2">
                    Checkbook & Synctera: Revolutionizing Payments Together
                  </span>
                </h4>
                <p className="text-[18px] text-[#fff] lg:pl-4 lg:pt-10 min-h-14 lg:min-h-32">
                  Checkbook Synctera Partnership
                </p>
                <CTAButton
                  icon={Arrowclr}
                  backgroundType={"bg-gradient-to-r"}
                  backgroundColor={"from-[#fff] to-[#fff]"}
                  textColor={"text-[#3D77EB]"}
                  content={"Read More"}
                  paddingx={"px-4 sm:px-6 lg:px-3 xl:px-5 2xl:px-6 "}
                  paddingy={"py-2 sm:py-3"}
                  textSize={"text-[16px] xl:text-[18px]"}
                  rounderTL={"rounded-tl-none"}
                  rounderTR={"rounded-tr-[60px]"}
                  rounderBR={"rounded-br-[60px]"}
                  rounderBL={"rounded-bl-[40px]"}
                />
              </div>
              <div className="bg-grad sm:w-[300px] h-[181px] md:w-[400px] md:h-[200px] lg:w-[470px] lg:h-[300px] border-[6px] border-[#fff]">
                <Image
                  alt="Synctera"
                  src={Synctera}
                  className="object-contain "
                />
              </div>
            </div>
          </div>
        </div>
        <Blogcon
          contentList={apidata}
          btnName = {btnName}
          borderclasslist="flex flex-col-reverse lg:flex-row items-center justify-between grad-border grad-border-compliance bdr-sm-blg gap-5 lg:p-20 sm:w-[45%] lg:w-[95%] 3xl:w-[78%] lg:bg-[#fff0]"
          classlist="text-[#404040] lg:text-[#9180FF] font-[400] text-[20px] 3xl:text-[24px] block pt-2 pr-10"
          classdescription="hidden lg:block text-[16px] lg:text-[18px] lg:pl-4 pt-2 sm:pt-5 pb-5"
          classImage = "w-[284px] h-[250px] md:h-[181px] lg:w-[470px] lg:h-[300px]"
          blogpx = "px-8"
          textcolor = "text-[#404040] lg:text-[#3EA6BB]"
        />
      </section>

      <ReadytoGetStart />
      <section className="lg:hidden">
        <Faq />
      </section>
    </div>
  );
}

export default Page;
