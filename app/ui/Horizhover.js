import React from "react";
import Image from "next/image";

function Horizhover({ heading, description, items }) {
  return (
    <div className="flex p-10 flex-col xl:flex-row grad-border bdr-sm-rds items-center justify-center gap-3">
      <div className="p-5 sm:p-5 md:p-6 lg:p-7 flex-grow">
        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {heading}
        </h4>
        <p className="text-left pt-3 sm:pt-4 md:pt-5 lg:pt-5 w-full max-w-[575px] xl:px-0">
          {description}
        </p>
      </div>
      <div className="flex flex-col xl:flex-row lg:items-center px-5 lg:px-0 gap-3 lin-bf-txt">
        {items?.map((item, index) => (
          <div
            key={index}
            className={`py-7 px-2 lg:filter ${
              index === 0 ? "blur-0" : "md:blur-[1.5px]"
            } hover:blur-0`}
          >
            <div className="flex flex-row xl:flex-col items-center xl:items-start gap-5">
              <Image src={item.icon} alt={item.iconAlt} />
              <h4 className="lg:pl-4">{item.title}</h4>
            </div>
            <p className="pt-10 lg:w-[233px] lg:h-[189px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Horizhover;
