"use client";
import React from "react";
import logo from "@/public/checkbook-logo.svg";
import cartImage from "@/public/cartBackground.svg"
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import signupArrow from "@/public/signup-arrow.svg";
import ReadytoGetStart from "../ui/ReadytoGetStart";

function page() {
  return (
    <>
    <div className="pt-8 px-5">
      <section className="container m-auto sm:px-4 md:px-8 md:py-12">
        <div className="text-center">
          <div className="font-inter text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-[-2px] text-[#404040]">
            Meet
          </div>
          <span className="font-inter text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-[-2px] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9281FF] via-[#3EA8BD] to-[#89D6FF]">
            Checkbook
          </span>
          <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
            <p className="font-circular-spotify px-[0px] md:px-[60px] lg:px-[120px] xl:px-[170px] 2xl:px-[300px] text-[18px] lg:text-[22px] xl:text-[27px] font-light leading-[25.4px] lg:leading-[38.1px] text-[#666666] text-center">
              We are a dedicated bunch of trailblazers who are passionate about
              innovation in the payments space. We understand payments
              inside-out - from a technical as well as a business perspective.
              Each one of us is closely involved in building products we believe
              in.
            </p>
          </div>
        </div>
      </section>
      <section className="lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white mt-11 sm:mt-8 md:mt-10">
        <div className="py-10 lg:py-0 relative block sm:flex lg:block sm:w-[100%] sm:gap-8">
        <div className="sm:w-[50%] lg:w-auto">
          <div className="block lg:flex lg:w-[100%]">
            <div className="lg:w-[50%] flex lg:items-center lg:justify-center lg:h-[500px] sm:pl-8">
              <div>
                <h2 className="font-inter text-[16px] lg:text-[27px] font-medium leading-[19.36px] lg:leading-[32.68px] text-left text-[#282828]">
                  The future of payments
                </h2>
                <p className="font-circular-spotify text-[16px] lg:text-[18px] font-light leading-[22.58px] lg:leading-[25.4px] text-left text-[#4F535B] mt-4 lg:mt-8 lg:w-[433px]">
                  According to the Federal Reserve Payments Report of 2018,
                  there were more than 15 billion paper checks sent within the
                  US. To address the deficiencies of offline payments, we have
                  built the most efficient push payments platform. It not only
                  provides a solution to the inefficiencies of paper checks, but
                  also provides a flexible way to transmit funds in real-time.
                </p>
              </div>
            </div>
                <div className=" lg:w-[50%] sm:px-0 rounded-[60px] sm:rounded-[50px] lg:rounded-[118px_0px_0px_118px] bg-[#FFFFFF]">
              <div className="px-10 py-10 md:px-0 md:py-8 2xl:pr-64 md:mx-8 lg:mx-[80px] mt-8 md:mt-12 lg:mt-[80px] mb-8 md:mb-12 lg:mb-[80px]">
                <p className="font-inter text-[25px] lg:text-[33px] 2xl:text-[40px] font-normal leading-[33px] lg:leading-[48.41px] text-left text-[#282828] mx-auto lg:mx-0">
                &quot;Our mission is to solve the challenges of push payments by
                  building a payouts platform for the digital age.&quot;
                </p>
                <p className="font-inter text-[23px] lg:text-[27px] font-normal text-left text-[#7F53E8] mt-6 md:mt-8 lg:mt-10">
                  PJ Gupta
                </p>
                <p className="font-circular-spotify text-[17px] md:text-[18px] lg:text-[18px] font-light leading-[22px] md:leading-[25.4px] lg:leading-[29.83px] text-left">
                  CEO & Founder
                </p>
              </div>
              </div>
              <div className="absolute z-[-1] right-[0%] md:right-[7%] lg:right-[14%] top-[200px] md:top-[300px] lg:top-[-100px] xl:top-[-150px] 2xl:top-[-180px]">
                <Image src={cartImage} className="w-[100%] opacity-30 sm:opacity-30 md:opacity-30 lg:opacity-70" alt="cartImage" />
                </div>
            <div className="hidden justify-center mb-10 sm:block lg:hidden sm:pl-8">
              <CTAButton
                icon={signupArrow}
                backgroundType={"bg-gradient-to-r"}
                backgroundColor={"from-[#3D77EB] to-[#D289FF]"}
                textColor={"text-[#FFF]"}
                paddingx={"px-6"}
                paddingy={"py-3 md:py-4"}
                textSize={"text-[17px]"}
                rounderTL={"rounded-tl-none"}
                rounderTR={"rounded-tr-[60px]"}
                rounderBR={"rounded-br-[60px]"}
                rounderBL={"rounded-bl-[40px]"}
                content={"Join the Team"}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-0 lg:mt-28 sm:w-[50%] lg:w-auto mb-10 flex lg:hidden justify-center lg:px-8 xl:px-0 sm:pr-8">
          <div className="rounded-[55px] w-[1385px] p-[40px] sm:p-[30px] md:p-[45px] lg:p-[60px] border-2 border-transparent grad-border borderimage">
            <h2 className="font-inter text-[16px] lg:text-[27px] font-medium leading-[19.36px] md:leading-[32.68px] text-left text-[#282828]">
              Our Story
            </h2>
            <p className="mt-4 lg:mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
             <span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh.
              </span>
              <span className="lg:inline hidden">Nullam mollis. Ut justo. Suspendisse potenti.
              Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
              </span>
            </p>
            <p className="lg:block hidden mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
              mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
              ornare a, lacinia eu, vulputate vel, nisl.
            </p>
            <p className="lg:block hidden mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
              Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
              diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a
              sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem
              lacus, accumsan quis, faucibus non, congue vel, arcu. Ut
              scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris
              eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus
              imperdiet nibh feugiat est. Ut convallis, sem sit amet interdum
              consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed
              augue. Integer eu magna sit amet metus fermentum posuere. Morbi
              sit amet nulla sed dolor elementum imperdiet. Quisque fermentum.
              Cum sociis natoque penatibus et magnis xdis parturient montes,
              nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut
              condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed
              dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus
              nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada
              adipiscing lacus. Donec metus. Curabitur gravida
            </p>
            <div className="flex justify-center my-10 lg:my-14">
              <Image src={logo} className="w-[200px] lg:w-[300px]" height={93} alt="Checkbook" />
            </div>
            <p className="lg:hidden block mt-5 mb-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
            Nullam mollis. Ut justo. Suspendisse potenti.
            </p>
            <h2 className="font-inter text-[16px] md:text-[27px] font-medium leading-[19.36px] md:leading-[32.68px] text-left text-[#282828]">
              Our Values
            </h2>
            <p className="lg:hidden hidden md:block mt-4 lg:mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna.
            </p>
            <p className="lg:hidden block md:hidden mt-5 md:mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
              mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
              ornare a, lacinia eu, vulputate vel, nisl.
            </p>
            <p className="hidden lg:block mt-5 md:mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
          </div>
        </div>
        </div>
      </section>
      <section className="hidden lg:block container m-auto">
      <div className="mt-10 sm:mt-0 lg:mt-28 sm:w-[50%] lg:w-auto mb-10 flex justify-center lg:px-8 xl:px-0 sm:pr-8">
          <div className="rounded-[55px] w-[1385px] p-[40px] lg:p-[60px] border-2 border-transparent grad-border borderimage">
            <h2 className="font-inter text-[16px] md:text-[27px] font-medium leading-[19.36px] md:leading-[32.68px] text-left text-[#282828]">
              Our Story
            </h2>
            <p className="mt-5 lg:mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
             <span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh.
              </span>
              <span className="lg:inline hidden"> Nullam mollis. Ut justo. Suspendisse potenti.
              Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
              </span>
            </p>
            <p className="lg:block hidden mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
              mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
              ornare a, lacinia eu, vulputate vel, nisl.
            </p>
            <p className="lg:block hidden mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
              Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
              diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a
              sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem
              lacus, accumsan quis, faucibus non, congue vel, arcu. Ut
              scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris
              eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus
              imperdiet nibh feugiat est. Ut convallis, sem sit amet interdum
              consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed
              augue. Integer eu magna sit amet metus fermentum posuere. Morbi
              sit amet nulla sed dolor elementum imperdiet. Quisque fermentum.
              Cum sociis natoque penatibus et magnis xdis parturient montes,
              nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut
              condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed
              dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus
              nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada
              adipiscing lacus. Donec metus. Curabitur gravida
            </p>
            <div className="flex justify-center my-10 md:my-14">
              <Image src={logo} className="w-[200px] lg:w-[300px]" height={93} alt="Checkbook" />
            </div>
            <p className="lg:hidden block mt-4 lg:mt-10 mb-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
            Nullam mollis. Ut justo. Suspendisse potenti.
            </p>
            <h2 className="font-inter text-[16px] md:text-[27px] font-medium leading-[19.36px] md:leading-[32.68px] text-left text-[#282828]">
              Our Values
            </h2>
            <p className="lg:hidden hidden md:block mt-5 md:mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna.
            </p>
            <p className="lg:hidden block md:hidden mt-5 md:mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
              mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
              ornare a, lacinia eu, vulputate vel, nisl.
            </p>
            <p className="hidden lg:block mt-5 md:mt-10 font-circular-spotify text-[16px] lg:text-[20px] font-light leading-[22.58px] lg:leading-[31px] text-left text-[#4F535B]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center mb-20 sm:hidden lg:flex">
        <CTAButton
          icon={signupArrow}
          backgroundType={"bg-gradient-to-r"}
          backgroundColor={"from-[#3D77EB] to-[#D289FF]"}
          textColor={"text-[#FFF]"}
          paddingx={"px-6"}
          paddingy={"py-3 md:py-4"}
          textSize={"text-[17px]"}
          rounderTL={"rounded-tl-none"}
          rounderTR={"rounded-tr-[60px]"}
          rounderBR={"rounded-br-[60px]"}
          rounderBL={"rounded-bl-[40px]"}
          content={"Join the Team"}
        />
      </div>
    </div>
    <ReadytoGetStart />
    </>
  );
}

export default page;
