import React from "react";
import CTAButton from "./CTAButton";
import signupArrow from "@/public/sign-up-voilet.svg";

function ContactForm() {
  return (
    <div>
      <div class="w-[338px] md:w-[567px] lg:w-auto">
        <form className="lg:flex lg:gap-8">
          <div>
            <div class="mb-4">
              <div class="text-[18px] leading-[28.89px] lg:text-[25.26px] lg:leading-[40.54px] font-normal">
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full p-4 bg-transparent border rounded-[26px] rounded-tl-none border-[#ECF2FB] text-[#ECF2FB] placeholder-[#ECF2FB]"
                  placeholder="Full Name *"
                />
              </div>
            </div>
            <div class="mb-4">
              <div class="text-[18px] leading-[28.89px] lg:text-[25.26px] lg:leading-[40.54px] font-normal">
                <input
                  type="text"
                  id="Company"
                  name="Company"
                  class="w-full p-4 bg-transparent border rounded-[26px] rounded-tl-none border-[#ECF2FB] text-[#ECF2FB]  placeholder-[#ECF2FB]"
                  placeholder="Company *"
                />
              </div>
            </div>
            <div class="mb-4">
              <div class="text-[18px] leading-[28.89px] lg:text-[25.26px] lg:leading-[40.54px] font-normal">
                <input
                  type="text"
                  id="Email"
                  name="Email"
                  class="w-full p-4 bg-transparent border rounded-[26px] rounded-tl-none border-[#ECF2FB] text-[#ECF2FB]  placeholder-[#ECF2FB]"
                  placeholder="E-mail *"
                />
              </div>
            </div>
          </div>
          <div>
            <div class="mb-8">
              <div class="text-[18px] leading-[28.89px] lg:text-[25.26px] lg:leading-[40.54px] font-normal">
                <textarea
                  type="text"
                  id="Message"
                  name="Message"
                  class="w-full h-16 lg:w-[650px] 2xl:w-[755px] lg:h-[257px] p-4 bg-transparent border rounded-[26px] rounded-tl-none border-[#ECF2FB] text-[#ECF2FB]  placeholder-[#ECF2FB]"
                  placeholder="Message *"
                />
              </div>
            </div>
            <div className="flex justify-end w-full">
              <CTAButton
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
