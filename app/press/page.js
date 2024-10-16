// "use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import PressAwards from "../ui/PressAwards";
import NavigateButton from "../ui/NavigateButton";
import Blogcon from "../ui/Blogcon";

// const contentList = [
//   {
//     question: "2024",
//     content: [
//       {
//         spancon: "[Press release]",
//         month: "May 2024",
//         description:
//           "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.",
//       },
//       {
//         spancon: "[Press release]",
//         month: "May 2024",
//         description:
//           "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. ",
//       },
//       {
//         spancon: "[Press release]",
//         month: "May 2024",
//         description:
//           "Praesent dapibus, neque id cursus faucibus, tortor.",
//       },
//     ],
//   },
//   {
//     question: "2023",
//     content: "",
//   },
//   {
//     question: "2022",
//     content: "",
//   },
//   {
//     question: "2021",
//     content: "",
//   },
//   {
//     question: "2020",
//     content: "",
//   },
//   {
//     question: "2019",
//     content: "",
//   },
//   {
//     question: "2018",
//     content: "",
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
      if(res.slug.split("/")[0] == "in-the-press"){
        return res;
      }
    }))
    console.log(newData,"new")
    return newData
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
};  

const Page = async () => {
  const apidata = await fetchPosts();
  const btnName = "Read More Press";
  return (
    <div className="px-5 md:px-0">
      <section className="container main-con m-auto mt-8 mg:mt-10 lg:mt-14 pb-10 md:pb-12 lg:pb-20">
        <div>
          <h1 className="text-center text-[45px] lg:text-[70px] 2xl:text-[88px] md:px-[18%] lg:px-20 xl:px-0">
            Checkbook <span>Press & Media</span>
          </h1>
          <p className="pt-5 lg:pt-[30px] text-center text-[18px] font-[400] 2xl:text-[27px] w-[100%] lg:w-[75%] m-auto">
            We&apos;ve been busy! Here&apos;s the full list of our press
            releases, newsletters, and other media moments. For questions, reach
            us at
            <a className="text-[#9180FF]"> press@checkbook.io.</a>
          </p>
        </div>
      </section>
      <NavigateButton />
      <section className="md:mb-6 lg:mb-10 blg-pg">
      <Blogcon
        contentList={apidata}
        btnName = {btnName}
        borderclasslist="flex flex-col-reverse lg:flex-row items-center justify-between grad-border grad-border-compliance bdr-webinar-rds gap-5 p-10 xl:p-20 sm:w-[45%] lg:w-[95%] 3xl:w-[78%] m-auto  lg:bg-[#fff0]"
        classlist="text-[#9180FF] font-[400] lg:text-[28px] 3xl:text-[40px] block pt-2 3xl:pr-20"
        classdescription="text-[16px] lg:text-[18px] lg:pl-4 pt-2 sm:pt-5 pb-5"
        classImage = "blg-img bg-grad w-[284px] sm:w-[230px] md:w-[250px] h-[250px] md:h-[181px] lg:w-[470px] lg:h-[300px]"
        textcolor = "text-[#3EA6BB]"
      />
      </section>
      {/* <PressAwards contentList={contentList} /> */}
      <ReadytoGetStart />
    </div>
  );
}

export default Page;
