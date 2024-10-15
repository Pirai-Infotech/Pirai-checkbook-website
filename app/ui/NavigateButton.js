"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function NavigateButton() {
  const router = useRouter();
  const pathname = usePathname();

    const buttonlists = [
        {
          btnname: "Blog",
          btnlink: "/Blog",
        },
        {
          btnname: "Case Studies",
          btnlink: "/casestudies",
        },
        {
          btnname: "Webinar",
          btnlink: "/webinar",
        },
        {
          btnname: "Podcast",
          btnlink: "/podcast",
        },
        {
          btnname: "Videos",
          btnlink: "",
        },
        {
          btnname: "In the Press",
          btnlink: "/press",
        },
        {
          btnname: "Product Info/Updates",
          btnlink: "",
        },
        {
          btnname: "API Docs",
          btnlink: "",
        },
      ];

  return (
    <div className=" m-auto flex gap-3 justify-start xl:justify-center py-10 overflow-scroll scrollbar-hide">
          {buttonlists.map((contentlist, index) => (
            <button
              key={index}
              onClick={() => router.push(contentlist.btnlink)} 
              className={pathname == contentlist.btnlink ? 'flex items-center px-9 py-3 grad-border-Active grad-border-blog-tag bdr-sm-rds text-[14px] 2xl:text-[22px] cursor-pointer whitespace-nowrap' : "flex items-center px-9 py-3 grad-border grad-border-blog-tag bdr-sm-rds text-[14px] 2xl:text-[22px] cursor-pointer whitespace-nowrap"}
            >
              {contentlist.btnname}
            </button>
          ))}
        </div>
  )
}

export default NavigateButton