import Image from "next/image";
import React from "react";

function CTAButton({
  icon,
  backgroundType,
  backgroundColor,
  textColor,
  content,
  classname,
}) {
  return (
    <>
      <button
        className={`flex items-center justify-center rounded-tl-none rounded-bl-[40px] rounded-tr-[60px] rounded-br-[60px] px-[26px] py-[12px] text-[17px] ${backgroundType} ${backgroundColor} ${textColor} ${classname}`}
      >
        {content}
        <Image src={icon} alt="Arrow" className="ml-4" />
      </button>
    </>
  );
}

export default CTAButton;
