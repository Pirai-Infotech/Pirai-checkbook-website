import React from "react";
import Image from "next/image";

function Horizhover({ heading, description, items }) {
  return (
    <div className="container m-auto flex p-6 lg:p-10 2xl:p-0 flex-col lg:flex-row grad-border bdr-md-rds items-center justify-center md:py-10 lg:py-0 lg:gap-3 lg:px-30 2xl:px-52">
      <div className="p-5 sm:p-5 md:p-6 lg:p-7 flex-grow">
        <h4>
          {heading}
        </h4>
        <p className="text-left pt-3 sm:pt-4 md:pt-5 lg:pt-5 w-full max-w-[575px] xl:px-0">
          {description}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center px-5 lg:px-0 gap-3 lin-bf-txt">
        {items?.map((item, index) => (
          <div
            key={index}
            className={`py-7 px-2 lg:filter ${
              index === 0 ? "first-itm" : "lg:blur-[1.5px] scond-itm"
            } hover:blur-0`}
          >
            <div className="flex flex-row xl:flex-col items-center xl:items-start gap-5">
              <Image src={item.icon} alt={item.iconAlt} />
              <h4 className="lg:pl-4">{item.title}</h4>
            </div>
            <p className="pt-2 lg:pt-10 md:pl-16 lg:pl-0 lg:w-[233px] lg:h-[189px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Horizhover;
