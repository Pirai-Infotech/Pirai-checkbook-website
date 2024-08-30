import React, { useState } from "react";
import Image from "next/image";

function Verticalhover({ heading, spancon, description, items, imageSrc }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  function toHandelhover(params) {
    return params === hoveredIndex;
  }

  return (
    <>
    <div className="container m-auto pt-10">
    <div className="lg:px-[26%]">
    <h3 className="text-center pb-6 md:10">
      {heading}
      <br />
      <span>{spancon}</span>
    </h3>
    <p className="text-center px-4 sm:px-24 md:px-32 lg:px-0">
      {description}
    </p>
  </div>
    </div>
    <div className="container m-auto flex flex-row items-center justify-between gap-2 lg:gap-8 py-10 ">
      <div className="w-[60%] 2xl:w-[36%] h-[500px]">
        {items?.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col xl:flex-row xl:items-start gap-5 lg:filter pt-6 md:pt-8 lg:pt-10 lg:blur-[1.5px] hover:blur-0 opacity-50 hover:opacity-100"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(index)}>
            <h4 className="lg:pl-4 text-[#404040] 2xl:text-[40px] group-hover:text-[#7F53E7]">
              {`0${index + 1}`}
            </h4>
            <div className={`lg:border-l-2 border-[#40404020] group-hover:border-[#7F53E7] lg:pl-4 px-4`}>
              <h4 className="text-[#404040] lg:pr-24 text-[25px] leading-[28.62px] xl:text-[39px] xl:leading-[44.65px] group-hover:text-[#7F53E7] pb-3">
                {item.heading}
              </h4>
              <p className={`text-[#404040] ${toHandelhover(index) ? `block` : `hidden`} lg:group-hover:block group-hover:text-[#7F53E7] text-[18px] leading-[25.4px] xl:text-[25px] xl:leading-[35.28px]`}
              >
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-grow-1">
        <Image
          src={imageSrc}
          alt="Printable Check"
          className="h-[500px] w-[150px] md:w-[500px] lg:w-[775px] lg:h-[100%] object-left object-cover"
        />
      </div>
    </div>
    </>
  );
}

export default Verticalhover;
