import React from "react";
import { Dropdown } from "antd";
import PaymentSubMenu from "./PaymentSubMenu";

function Nav() {
  return (
    <div className="w-[55%]">
      <ul className="flex items-center justify-between">
        <li className="text-xl text-[#404040] font-light cursor-pointer">
          Home
        </li>
        <li className="text-xl text-[#404040] font-light cursor-pointer">
          {/* <Dropdown menu={<></>} placement="bottom" arrow>
            Products
          </Dropdown> */}
        </li>
        <li className="text-xl text-[#404040] font-light cursor-pointer">
          Solutions
        </li>
        <li className="text-xl text-[#404040] font-light cursor-pointer">
          Resources
        </li>
        <li className="text-xl text-[#404040] font-light cursor-pointer">
          Industries
        </li>
        <li className="text-xl text-[#404040] font-light cursor-pointer">
          ROI Calculator
        </li>
        <li className="text-xl text-[#404040] font-light cursor-pointer">
          Pricing
        </li>
        <li>
          <PaymentSubMenu />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
