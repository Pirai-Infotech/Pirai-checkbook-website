import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Profileico from "../../public/Testimonials_img1.png";

const CustomCarousel = () => {
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
      quote:
        "“Checkbook seamlessly enables our clients to send Digital Cheques with the click of a button. Their APIs are easy to work with, and the Digital Cheque product is a great alternative to paper cheques.”",
    },
    {
      image: Profileico,
      altText: "Testimonials",
      name: "John Doe",
      position: "CTO, TechCorp",
      quote:
        "“Checkbook seamlessly enables our clients to send Digital Cheques with the click of a button. Their APIs are easy to work with, and the Digital Cheque product is a great alternative to paper cheques.”",
    },
    {
      image: Profileico,
      altText: "Testimonials",
      name: "Jane Smith",
      position: "CEO, FinTech Solutions",
      quote:
        "“Checkbook seamlessly enables our clients to send Digital Cheques with the click of a button. Their APIs are easy to work with, and the Digital Cheque product is a great alternative to paper cheques.”",
    },
  ];

  return (
    <div>
      <h3 className="text-center pb-20">Testimonials</h3>
      <Carousel
        responsive={responsive}
        showDots={true}
        arrows={false}
        renderDotsOutside={true}
        customTransition="transform 300ms ease-in-out"
        centerMode={true}
        infinite={true}
        itemClass="carousel-item"
      >
        {carouselItems?.map((item, index) => (
          <div
            key={index}
            className="item border-[1px] border-[#afafaf] rounded-lg p-[20px] w-[450px] 2xl:w-[520px] h-[340px] 2xl:h-[400px]"
          >
            <div className="bg-white p-[50px]">
              <div className="flex flex-row items-center">
                <Image src={item.image} alt={item.altText} />
                <p className="pl-5 text-[#365B7F]">
                  {item.name},<br />
                  {item.position}
                </p>
              </div>
              <p className="pt-5  h-[70px]">{item.quote}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
