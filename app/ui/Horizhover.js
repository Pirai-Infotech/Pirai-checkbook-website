import React from "react";
import Image from "next/image";

function Horizhover({ heading, description, items }) {
  return (
    <div className="flex flex-col xl:flex-row grad-border bdr-sm-rds items-center gap-3">
      <div className="p-7 flex-grow-1">
        <h4>{heading}</h4>
        <p className="text-left xl:p-5 xl:px-0 pt-5">{description}</p>
      </div>
      <div className="flex flex-col xl:flex-row items-center px-5 lg:px-0 gap-3 lin-bf-txt">
        {items.map((item, index) => (
          <div
            key={index}
            className={`py-7 px-2 lg:filter ${
              index === 0 ? "blur-0" : "md:blur-[1.5px]"
            } hover:blur-0`}
          >
            <div className="flex flex-row xl:flex-col  items-center xl:items-start gap-5">
              <Image src={item.icon} alt={item.iconAlt} />
              <h4 className="lg:pl-4">{item.title}</h4>
            </div>
            <p className="pt-10">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Horizhover;
