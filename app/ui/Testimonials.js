import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Profileico from "../../public/Testimonials_img1.png";
import { useState, useEffect } from "react";
import { tinaField } from "tinacms/dist/react";

const CustomCarousel = ({testimon}) => {
  const [isResponsive, setIsResponsive] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkResponsive = () => {
        setIsResponsive(window.innerWidth <= 768);
      };
      checkResponsive();
      window.addEventListener("resize", checkResponsive);
      return () => window.removeEventListener("resize", checkResponsive);
    }
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselItems = [
    {
      image: Profileico,
      altText: "Testimonials",
      name: "Laurent Charpentier",
      position: "COO, Yooz North America",
      quote: (
        <>
          “Checkbook seamlessly enables our clients to send Digital Cheques with
          the{" "}
          <a
            href="https://your-link-here.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            click of a button
          </a>
          . Their APIs are easy to work with, and the Digital Cheque product is
          a great alternative to paper cheques.”
        </>
      ),
    },
    {
      image: Profileico,
      altText: "Testimonials",
      name: "John Doe",
      position: "CTO, TechCorp",
      quote: (
        <>
          “Checkbook seamlessly enables our clients to send Digital Cheques with
          the{" "}
          <a
            href="https://your-link-here.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            click of a button
          </a>
          . Their APIs are easy to work with, and the Digital Cheque product is
          a great alternative to paper cheques.”
        </>
      ),
    },
    {
      image: Profileico,
      altText: "Testimonials",
      name: "Jane Smith",
      position: "CEO, FinTech Solutions",
      quote: (
        <>
          “Checkbook seamlessly enables our clients to send Digital Cheques with
          the{" "}
          <a
            href="https://your-link-here.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            click of a button
          </a>
          . Their APIs are easy to work with, and the Digital Cheque product is
          a great alternative to paper cheques.”
        </>
      ),
    },
  ];
  if (!testimon || !Array.isArray(testimon?.follow)) {
    return <div>No testimonials available</div>;
  }
  return (
    <div className="relative 4xl:w-[1920px] 4xl:m-auto">
      <h3 className="text-center pb-8 lg:pb-14 lg:pb-20 font-inter font-normal text-[35px] leading-[42.36px] xl:text-[46px] xl:leading-[55.67px] text-[#404040]" data-tina-field={tinaField(testimon, "testimonheading")}>{testimon?.testimonheading}</h3>
      <Carousel
        responsive={responsive}
        showDots={true}
        arrows={false}
        renderDotsOutside={true}
        customTransition="transform 300ms ease-in-out"
        centerMode={!isResponsive}
        infinite={true}
        itemClass="carousel-item"
        autoPlay={!isResponsive}
        autoPlaySpeed={3000}
      >
        {testimon?.follow?.map((item, index) => (
          <div
            key={index}
            className="item border-[2px] border-[#FFFFFF] rounded-[25px] xl:rounded-[53px] p-5 md:p-[20px] xl:p-[35px] "
          >
            <div className="bg-white p-5 md:p-[18px] xl:p-[65px] rounded-[14px] xl:rounded-[30px]">
              <div className="flex flex-row items-center">
                <div data-tina-field={tinaField(testimon, `mobile.${index}.testimonimage`)}>
                <Image src={item.image} alt={item.altText} />
                </div>
                <p className="pl-3 md:pl-5 text-[#365B7F] font-[400] text-[14px] md:text-[17px]" data-tina-field={tinaField(testimon, `follow.${index}.testimonquestion`)}>
                  {item.testimonquestion}
                </p>
               
              </div>
              <div className="pl-3 md:pl-5 text-[#365B7F] font-[400] text-[14px] md:text-[17px]" data-tina-field={tinaField(testimon, `follow.${index}.testimonanswer`)}>
                  {item.testimonanswer}
                </div>
              <p className="pt-5 text-[21px] md:text-[17px] 2xl:text-[25px] text-[#404040] font-[300]"                 data-tina-field={tinaField(testimon, `follow.${index}.testimonbutton`)}
              >
          {item.testimonbutton} <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500" data-tina-field={tinaField(testimon, `follow.${index}.testimonanchor`)}>
          {item.testimonanchor}
        </a> 
         {item.testimonbutton1}
        </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
