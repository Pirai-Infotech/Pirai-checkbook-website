import React from "react";
import CTAButton from "./CTAButton";
import signupArrow from "@/public/signup-arrow-purple.svg";
import logo from "@/public/footer-checkbook-logo.svg";
import Image from "next/image";
import Link from "next/link";

function Footer({ contactFormText }) {
  return (
    <div className="bg-gradient-to-r from-[#9B8DFF] to-[#3E89BD]">
      <div className="container m-auto">
        <h3 className="text-[62px] text-white pt-20 pb-5 text-center font-light">
          {contactFormText}
        </h3>
        <p className="text-[27px] text-white mb-8 text-center font-light px-[370px]">
          Our team is happy to answer your questions. Fill out the form and
          we’ll be in touch as soon as possible.
        </p>
        <div className="flex justify-center w-full pb-24 border-b border-solid border-[#FFF]">
          <CTAButton
            icon={signupArrow}
            backgroundType={""}
            backgroundColor={"bg-[#FFF]"}
            textColor={"text-[#608BD5]"}
            content={"Contact Us"}
          />
        </div>

        <div className="flex justify-between mt-24 pb-14 w-[85%] m-auto">
          <div className="w-[20%]">
            <Image src={logo} alt="Checkbook" />
          </div>
          <div className="w-[70%] flex justify-between">
            <div className="w-[20%]">
              <h4 className="text-[#FFF] text-lg mb-4">Products</h4>
              <ul>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    ACH Payments
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Real-Time Payments
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Instant Payments
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Mail
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Virtual Card
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Print
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[17%]">
              <h4 className="text-[#FFF] text-lg mb-4">Solutions</h4>
              <ul>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Multi-Party
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    PayFac
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Integrationst
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[20%]">
              <h4 className="text-[#FFF] text-lg mb-4">Resources</h4>
              <ul>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[17%]">
              <h4 className="text-[#FFF] text-lg mb-4">Social</h4>
              <ul>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Youtube
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    X
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[20%]">
              <h4 className="text-[#FFF] text-lg mb-4">Industries</h4>
              <ul>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    Customers
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#FFF] text-base font-light mb-1 flex"
                  >
                    ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex pb-10 w-[85%] m-auto">
          <ul className="flex items-center">
            <li className="mr-8">
              <Link href={""} className="text-[#FFF] text-sm font-light">
                Privacy Policy
              </Link>
            </li>
            <li className="mr-8">
              <Link href={""} className="text-[#FFF] text-sm font-light">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href={""} className="text-[#FFF] text-sm font-light">
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
