"use client";
import Image from "next/image";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import ReadytoGetStart from "./ui/ReadytoGetStart";
import Faq from "./ui/Faq";
import DiscoverInsights from "./ui/DiscoverInsights";
import Testimonials from "./ui/Testimonials";

export default function Home() {
  return (
    <>
      <div className="pt-20"></div>
      <ReadytoGetStart />
      <div className="pt-20"></div>
      <Faq />
      <div className="pt-20"></div>
      <DiscoverInsights />
      <div className="pt-20"></div>
      <Testimonials />
      <div className="pt-20"></div>
      <main className="flex min-h-screen flex-col items-center justify-between"></main>
    </>
  );
}
