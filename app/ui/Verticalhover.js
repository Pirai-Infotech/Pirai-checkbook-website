import React from "react";
import Image from "next/image";

function Verticalhover({ items, imageSrc }) {
  return (
    <div className="flex flex-row items-center gap-8 py-10 pl-[10%]">
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col xl:flex-row xl:items-start gap-5 lg:filter pt-10 lg:blur-[1.5px] hover:blur-0 opacity-50 hover:opacity-100"
          >
            <h4 className="lg:pl-4 text-[#404040] 2xl:text-[40px] group-hover:text-[#7F53E7]">
              {`0${index + 1}`}
            </h4>
            <div className="group-hover:border-l-2 border-[#7F53E7] pl-4">
              <h4 className="text-[#404040] 2xl:text-[40px] group-hover:text-[#7F53E7]">
                {item.heading}
              </h4>
              <p className="text-[#404040] pt-3 group-hover:text-[#7F53E7]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-grow-1">
        <Image src={imageSrc} alt="Printable Check" />
      </div>
    </div>
  );
}

export default Verticalhover;
