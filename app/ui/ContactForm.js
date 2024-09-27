import React from "react";
import CTAButton from "./CTAButton";
import signupArrow from "@/public/sign-up-voilet.svg";
import { useEffect, useRef } from 'react';
import close from '@/public/CloseIcon.svg'
import Image from "next/image";

function ContactForm({showModal, toggleModal}) {

    const modalRef = useRef();

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center z-[100] ${!showModal && 'hidden'}`}>
      <div ref={modalRef} className="bg-gradient-to-r from-[#9B8DFF] to-[#3E89BD] lg:mt-10 py-[45.4px] px-[28px] lg:py-[70.4px] lg:px-[84.33px] rounded-[40px] lg:rounded-[71.04px] w-[370px] lg:w-[812.24px] text-white shadow-lg">
         <div className="flex justify-end mb-5 cursor-pointer" onClick={toggleModal}><Image src={close} width={24} height={24} alt="" /></div>
            <h2 className="text-[40px] leading-[48.41px] font-normal lg:text-[50px] lg:leading-[61.14px] lg:font-bold  mb-6 text-center text-white">
              Contact Us
            </h2>
        <p className="text-[18px] leading-[28.89px] font-light lg:text-[18.94px] lg:leading-[30.41px] lg:font-normal lg:px-[60px] text-center mb-8 text-white">
          Our team is happy to answer your questions. Fill out the form and
          we&apos;ll be in touch as soon as possible.
        </p>
        <form action="#" method="POST">
          <div className="mb-4">
            <div className="floating-label text-[18px] leading-[28.89px] lg:text-[25.26px] lg:leading-[40.54px] font-normal">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 bg-transparent border-b border-gray-300 text-white placeholder-transparent focus:outline-none focus:border-white"
                placeholder=" "
              />
              <label for="name" className="text-gray-300">
                Full Name
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="floating-label text-[18px] leading-[28.89px] lg:text-[25.26px] lg:leading-[40.54px] font-normal">
              <input
                type="text"
                id="Email"
                name="Email"
                className="w-full p-2 bg-transparent border-b border-gray-300 text-white placeholder-transparent focus:outline-none focus:border-white"
                placeholder=" "
              />
              <label for="Email" className="text-gray-300">
                Email address
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="floating-label text-[18px] leading-[28.89px] lg:text-[25.26px] lg:leading-[40.54px] font-normal">
              <input
                type="text"
                id="Phone"
                name="Phone"
                className="w-full p-2 bg-transparent border-b border-gray-300 text-white placeholder-transparent focus:outline-none focus:border-white"
                placeholder=" "
              />
              <label for="Phone" className="text-gray-300">
                Phone number
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="floating-label text-[18px] leading-[28.89px] lg:text-[25.26px] lg:leading-[40.54px] font-normal">
              <textarea
                type="text"
                id="Message"
                name="Message"
                className="w-full h-16 p-2 bg-transparent border-b border-gray-300 text-white placeholder-transparent focus:outline-none focus:border-white"
                placeholder=" "
              />
              <label for="Message" className="text-gray-300">
                Message
              </label>
            </div>
          </div>
          <div classNameName="flex justify-center w-full">
            <CTAButton
              onClick={toggleModal}
              icon={signupArrow}
              backgroundType={""}
              backgroundColor={"bg-[#FFF]"}
              textColor={"text-[#608BD5]"}
              content={"Submit"}
              paddingx={"px-[33px]"}
              paddingy={"py-2 sm:py-[12px]"}
              textSize={"text-[18px] lg:text-[25.26px]"}
              rounderTL={"rounded-tl-none"}
              rounderTR={"rounded-tr-[60px]"}
              rounderBR={"rounded-br-[60px]"}
              rounderBL={"rounded-bl-[40px]"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
