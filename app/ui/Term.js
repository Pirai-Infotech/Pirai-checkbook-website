"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";

export default function Page(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const tinaData = data?.terms;

  const tacs = tinaData?.conditions;

  return (
    <div className="px-4 md:px-0">
      <section className="container main-con m-auto flex flex-col lg:flex-row gap-10 lg:gap-3 items-center md:py-10 sm:w-[95%] lg:w-[80%] 2xl:w-[70%] px-4 md:px-[0]">
        <div className="flex-1 px-[0%] sm:px-[7%] lg:px-[0%] lg:pr-[5%] 2xl:pr-[2%]">
          <h1 className="text-center text-[45px] xl:text-[70px] 2xl:text-[88px]">
            <span data-tina-field={tinaField(tacs, "tacheading")}>{tacs?.tacheading}</span>
          </h1>
          <p className="pt-[30px] text-center text-[18px] lg:text-[48px]" data-tina-field={tinaField(tacs, "spanheading")}>
          {tacs?.spanheading}
          </p>
        </div>
      </section>
      <section className="container main-con m-auto cb-pp rounded-[20px] lg:rounded-[60px] p-[30px] md:p-[63px] bg-gradient-to-r from-[#E0EBFBCC] to-[#E0EBFB00] sm:w-[99%] lg:w-[80%] 2xl:w-[78%] mb-8 lg:mb-10">
        <div className="lg:border-b-2 lg:border-dashed border-[#9281FF] lg:mb-8">
          <p data-tina-field={tinaField(tacs, "quote")}>
          {tacs?.quote}
            <Link
              href="#"
              className="font-circular-spotify text-[22px] lg:text-[27px] font-light leading-[31.04px] lg:leading-[38.1px] text-[#3D77EA]"
              data-tina-field={tinaField(tacs, "spanquote")}
            >
              {tacs?.spanquote}
            </Link>
          </p>
          <p data-tina-field={tinaField(tacs, "quote2")}>
            {tacs?.quote2}
            <Link
              href="#"
              className="font-circular-spotify text-[22px] lg:text-[27px] font-light leading-[31.04px] lg:leading-[38.1px] text-[#3D77EA]"
              data-tina-field={tinaField(tacs, "spanquote2")}
            >
              {tacs?.spanquote2}
            </Link>
          </p>
          <p data-tina-field={tinaField(tacs, "quote3")}>
          {tacs?.quote3}
            <Link
              href="#"
              className="font-circular-spotify text-[22px] lg:text-[27px] font-light leading-[31.04px] lg:leading-[38.1px] text-[#3D77EA]"
              data-tina-field={tinaField(tacs, "spanquote3")}

            >
              {tacs?.spanquote}3
            </Link>
          </p>
        </div>
        <div>
          <h5 data-tina-field={tinaField(tacs, "tacOne")}>{tacs?.tacOne}</h5>
          <p data-tina-field={tinaField(tacs, "termOne")}>{tacs?.termOne}</p>

          <h5 data-tina-field={tinaField(tacs, "tacTwo")}>{tacs?.tacTwo}</h5>
          <p data-tina-field={tinaField(tacs, "termTwo")}>{tacs?.termOne}</p>
          <h5 data-tina-field={tinaField(tacs, "tacThree")}>
            {tacs?.tacThree}
          </h5>
          <p data-tina-field={tinaField(tacs, "termThree")}>
            {tacs?.termThree}
          </p>

          <h5 data-tina-field={tinaField(tacs, "tacFour")}>{tacs?.tacFour}</h5>
          <p data-tina-field={tinaField(tacs, "termFour")}>{tacs?.termFour}</p>
          <h5 data-tina-field={tinaField(tacs, "tacFive")}>{tacs?.tacFive}</h5>
          <p data-tina-field={tinaField(tacs, "termFive")}>{tacs?.termFive}</p>
          <h5 data-tina-field={tinaField(tacs, "tacSix")}>{tacs?.tacSix}</h5>
          <p data-tina-field={tinaField(tacs, "termSix")}>{tacs?.termSix}</p>
          <h5 data-tina-field={tinaField(tacs, "tacSix2")}>{tacs?.tacSix2}</h5>
          <p data-tina-field={tinaField(tacs, "termSix2")}>{tacs?.termSix2}</p>
          <h5 data-tina-field={tinaField(tacs, "tacSix3")}>{tacs?.tacSix3}</h5>
          <p data-tina-field={tinaField(tacs, "termSix3")}>{tacs?.termSix3}</p>
          <h5 data-tina-field={tinaField(tacs, "tacSix4")}>{tacs?.tacSix4}</h5>
          <p data-tina-field={tinaField(tacs, "termSix4")}>{tacs?.termSix4}</p>
          <h5 data-tina-field={tinaField(tacs, "tacSeven")}>
            {tacs?.tacSeven}
          </h5>
          <p data-tina-field={tinaField(tacs, "termSeven")}>
            {tacs?.termSeven}
          </p>
          <h5 data-tina-field={tinaField(tacs, "tacEight")}>
            {tacs?.tacEight}
          </h5>
          <p data-tina-field={tinaField(tacs, "termEight")}>
            {tacs?.termEight}
          </p>
          <h5 data-tina-field={tinaField(tacs, "tacNine")}>{tacs?.tacNine}</h5>
          <p data-tina-field={tinaField(tacs, "termNine")}>{tacs?.termNine}</p>
          <h5 data-tina-field={tinaField(tacs, "tacTen")}>{tacs?.tacTen}</h5>
          <p data-tina-field={tinaField(tacs, "termTen")}>{tacs?.termTen}</p>
          <h5 data-tina-field={tinaField(tacs, "tacEleven")}>
            {tacs?.tacEleven}
          </h5>
          <p data-tina-field={tinaField(tacs, "termTEleven")}>
            {tacs?.termEleven}
          </p>
          <p data-tina-field={tinaField(tacs, "termEleven2")}>
            <b data-tina-field={tinaField(tacs, "termElevenbold")}>{tacs?.termElevenbold}</b>
            {tacs?.termEleven2}
          </p>
          <p data-tina-field={tinaField(tacs, "termEleven3")}>
            <b data-tina-field={tinaField(tacs, "termElevenbold3")}>{tacs?.termElevenbold3}</b>
            {tacs?.termEleven3}{" "}
          </p>
          <ul>
            <li data-tina-field={tinaField(tacs, "termEleven4")}>
              {tacs?.termEleven4}
              <ul>
                <li data-tina-field={tinaField(tacs, "termEleven5")}>
                  {tacs?.termEleven5}
                </li>
                <li data-tina-field={tinaField(tacs, "termEleven6")}>
                  {tacs?.termEleven6}
                </li>
                <li data-tina-field={tinaField(tacs, "termEleven7")}>
                  {tacs?.termEleven7}
                </li>
                <li data-tina-field={tinaField(tacs, "termEleven8")}>
                  {tacs?.termEleven8}
                </li>
                <li data-tina-field={tinaField(tacs, "termEleven9")}>
                  {tacs?.termEleven9}
                </li>
              </ul>
            </li>

            <li data-tina-field={tinaField(tacs, "termEleven10")}>
              {tacs?.termEleven10}
            </li>
            <li data-tina-field={tinaField(tacs, "termEleven11")}>
              {tacs?.termEleven11}
            </li>
            <li data-tina-field={tinaField(tacs, "termEleven12")}>
              {tacs?.termEleven12}
            </li>
          </ul>
          <p data-tina-field={tinaField(tacs, "termEleven13")}>
            {tacs?.termEleven13}
          </p>
          <h5 data-tina-field={tinaField(tacs, "tacTwelve")}>
            {tacs?.tacTwelve}
          </h5>
          <p data-tina-field={tinaField(tacs, "termTwelve")}>
            {tacs?.termTwelve}
          </p>
          <h5 data-tina-field={tinaField(tacs, "tacThirteen")}>
            {tacs?.tacThirteen}
          </h5>
          <p data-tina-field={tinaField(tacs, "termThirteen")}>
            {tacs?.termThirteen}
          </p>
        </div>
        <div>
          <p data-tina-field={tinaField(tacs, "termThirteen2")}>
            {tacs?.termThirteen2}
          </p>{" "}
        </div>
      </section>

      <ReadytoGetStart  
        rgs={tinaData?.rgs}
        rgstwo={tinaData?.rgstwo}    
        rgsthree={tinaData?.rgsthree}
      />
    </div>
  );
}

// export default page;
