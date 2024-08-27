import React from "react";
import paymentIcon from "@/public/payment-submenu-icon.png";
import paymentInvoiceIcon from "@/public/payment-invoice-submenu-icon.svg";
import Image from "next/image";
import Link from "next/link";

function PaymentSubMenu() {
  return (
    <>
      <div className="flex items-center">
        <div className="w-[18%]">
          <div className="bg-[#DCD9FF] w-16 h-16 rounded-xl px-2 py-2 flex items-center justify-center">
            <Image src={paymentIcon} alt="paymentIcon" />
          </div>
        </div>
        <div className="w-[80%]">
          <h3 className="text-xl font-black">PAYMENTS</h3>
          <p className="text-lg font-light">
            Send a single check or a million, we have the solution for you
          </p>
        </div>
      </div>
      <div className="flex w-[350px] mt-5">
        <ul className="w-[50%]">
          <li className="">
            <Link href={""} className="text-[#9281FF] underline text-lg">
              ACH Payments
            </Link>
          </li>
          <li>
            <Link href={""} className="text-[#9281FF] underline text-lg">
              Digital Checks
            </Link>
          </li>
          <li>
            <Link href={""} className="text-[#9281FF] underline text-lg">
              Mailed Checks
            </Link>
          </li>
          <li>
            <Link href={""} className="text-[#9281FF] underline text-lg">
              FedNow Payment
            </Link>
          </li>
        </ul>
        <ul className="w-[50%]">
          <li>
            <Link href={""} className="text-[#9281FF] underline text-lg">
              Real-Time
            </Link>
          </li>
          <li>
            <Link href={""} className="text-[#9281FF] underline text-lg">
              Payments Instant
            </Link>
          </li>
          <li>
            <Link href={""} className="text-[#9281FF] underline text-lg">
              Pay Virtual Cards
            </Link>
          </li>
          <li>
            <Link href={""} className="text-[#9281FF] underline text-lg">
              Zelle Payments
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center mt-5">
        <div className="w-[18%]">
          <div className="bg-[#DCD9FF] w-16 h-16 rounded-xl px-2 py-2 flex items-center justify-center">
            <Image src={paymentInvoiceIcon} alt="paymentIcon" />
          </div>
        </div>
        <div className="w-[80%]">
          <h3 className="text-xl font-black">
            Send a Digital Invoice or a million.
          </h3>
          <p className="text-lg font-light">
            Get paid by bank account or credit/debit card
          </p>
        </div>
      </div>
    </>
  );
}

export default PaymentSubMenu;
