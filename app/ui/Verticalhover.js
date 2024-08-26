import React from "react";
import Image from "next/image";

function Verticalhover({ items, imageSrc }) {
  return (
    <div className="flex flex-row items-center justify-between gap-2 lg:gap-8 py-10 pl-[2%] lg:pl-[10%]">
      <div>
        {items?.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col xl:flex-row xl:items-start gap-5 lg:filter pt-10 lg:blur-[1.5px] hover:blur-0 opacity-50 hover:opacity-100"
          >
            <h4 className="lg:pl-4 text-[#404040] 2xl:text-[40px] group-hover:text-[#7F53E7]">
              {`0${index + 1}`}
            </h4>
            <div className="w-full max-w-[524px] lg:border-l-2 border-[#40404020] group-hover:border-[#7F53E7] lg:pl-4 px-4">
            <h4 className="text-[#404040] text-xl sm:text-2xl md:text-3xl xl:text-[40px] group-hover:text-[#7F53E7]">
              {item.heading}
            </h4>
            <p className="text-[#404040] pt-3 hidden group-hover:block group-hover:text-[#7F53E7] text-base sm:text-lg md:text-xl">
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
          className="h-[500px] lg:h-[100%] object-left object-cover"
        />
      </div>
    </div>
  );
}

export default Verticalhover;
