import React from "react";
import paymentIcon from "@/public/footer-checkbook-logo.svg";
import paymentInvoiceIcon from "@/public/footer-checkbook-logo.svg";
import Image from "next/image";

function PaymentSubMenu() {
  return (
    <div className="flex items-center">
      <div className="bg-[#DCD9FF] w-16 h-16 rounded-xl px-2 py-2">
        <Image src={paymentIcon} alt="paymentIcon" />
      </div>
      <div className="ml-3">
        <h3 className="mb-1 text-xl font-black">PAYMENTS</h3>
        <p className="text-lg font-light">
          Send a single check or a million, we have the solution for you
        </p>
      </div>
    </div>
  );
}

export default PaymentSubMenu;
