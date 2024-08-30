// import Image from "next/image";
// import React from "react";

// function CTAButton({
//   icon,
//   backgroundType,
//   backgroundColor,
//   textColor,
//   content,
//   onClick,
//   // paddingx,
//   // paddingy,
//   // textSize,
//   // rounderTL,
//   // rounderTR,
//   // rounderBR,
//   // rounderBL,
// }) {
//   return (
//     <>
//       <button
//         onClick={onClick}
//         className={`flex items-center px-9 py-4 rounded-tr-[60px] rounded-br-[60px] rounded-bl-[40px] 
//           rounded-tl-none text-[17px]
//              ${backgroundType} ${backgroundColor} ${textColor}`}
//       >
//         {content}
//         {icon && <Image src={icon} alt="Arrow" className="ml-4" />}
//       </button>
//     </>
//   );
// }

// export default CTAButton;

import Image from "next/image";
import React from "react";

function CTAButton({
  icon,
  backgroundType,
  backgroundColor,
  textColor,
  content,
  paddingx,
  paddingy,
  textSize,
  rounderTL,
  rounderTR,
  rounderBR,
  rounderBL,
}) {
  return (
    <>
      <button
        className={`flex items-center
             ${backgroundType} ${backgroundColor} ${textColor} ${paddingx}
             ${paddingy} ${textSize} ${rounderTL} ${rounderTR} ${rounderBR} ${rounderBL}`}
      >
        {content}
        {icon && <Image src={icon} alt="Arrow" className="ml-4" />}
      </button>
    </>
  );
}

export default CTAButton;
