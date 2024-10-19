import React from "react";
import { Popover } from "antd";
import PaymentSubMenu from "./PaymentSubMenu";
import { tinaField } from "tinacms/dist/react";

function Nav({tinaData}) {
  return (
    <div className="w-[70%]">
      <ul className="flex items-center justify-between w-full">
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]" data-tina-field={tinaField(tinaData?.header, "label1")}>
        {tinaData?.header?.label1}
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]" data-tina-field={tinaField(tinaData?.header, "label2")}>
          <Popover placement="bottom" content={<PaymentSubMenu />}>
          {tinaData?.header?.label2}
          </Popover>
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]"  data-tina-field={tinaField(tinaData?.header, "label3")}>
        {tinaData?.header?.label3}
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]"  data-tina-field={tinaField(tinaData?.header, "label4")}>
        {tinaData?.header?.label4}
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]" data-tina-field={tinaField(tinaData?.header, "label5")}>
        {tinaData?.header?.label5}
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]" data-tina-field={tinaField(tinaData?.header, "label6")}>
        {tinaData?.header?.label6}
        </li>
        <li className="2xl:text-xl xl:text-lg lg:text-base text-[#404040] font-light cursor-pointer hover:text-[#3D77E9]" data-tina-field={tinaField(tinaData?.header, "label7")}>
        {tinaData?.header?.label7}
        </li>
      </ul>
    </div>
  );
}

export default Nav;
