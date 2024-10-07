import React, { useState } from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

function Horizhoverhm({ heading, description, listitems }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  function toHandelhover(params) {
    return params === hoveredIndex;
  }

  return (
    <div className="container m-auto p-6 pb-10 md:p-10 md:w-[75%] lg:w-full 2xl:p-0 grad-border grad-border-rtgs bdr-home-rds md:py-10 lg:gap-3 lg:px-30 2xl:px-52 2xl:py-[100px]" data-tina-field={tinaField(description, "sectionTwo")}>
      
      <div className="flex flex-col lg:flex-row justify-center lg:items-center px-5 lg:px-10 md:px-0 sm:gap-0 lg:gap-5 2xl:gap-20 lin-bf-txt">
        {listitems?.map((item, index) => (
          <div
            key={index}
            className={`pt-10 xl:px-2 lg:filter ${
              toHandelhover(index) ? `first-itm` : `lg:blur-[1.5px] scond-itm`
            } hover:blur-0`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(index)}
          >
            <div className="flex flex-row xl:flex-col items-center xl:items-start gap-5">
              <Image src={item.icon} width={60} height={60} alt={item.iconAlt} data-tina-field={tinaField(description?.sectionTwo, item.iconKey)} />
              <h4 className="lg:pl-4 font-inter font-normal text-[22px] leading-[26.63px] xl:text-[24px] xl:leading-[29.05px]" data-tina-field={tinaField(description?.sectionTwo, item.titleKey)}>
                {item.title}
              </h4>
            </div>
            <p className="pt-2 lg:pt-10 md:pl-16 lg:pl-0 xl:w-[233px] xl:h-[189px] text-[16px] leading-[22.58px] xl:text-[18px] xl:leading-[25.04px] sm:pr-10 xl:pr-0" data-tina-field={tinaField(description?.sectionTwo, item.textKey)}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Horizhoverhm;
