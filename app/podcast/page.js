"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import Podcastcon from "../ui/Podcastcon";
import GooglePodcasts from "@/public/cb_google.svg";
import AmazonPodcasts from "@/public/cb_amazon.svg";
import ApplePodcasts from "@/public/cb_apple.svg";
import SpotifyPodcasts from "/public/cb_spotify.svg";
import Chronicles from "@/public/cb_chronicles.svg";
import Image from "next/image";

const contentList = [
  {
    date: "Episode 18 | 18:39 | 12.22.2022",
    title: "Perspectives on the role of finance in business transformation",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede lorem ipsum dolor sit quisque.",
    imageUrl: Chronicles,
  },
  {
    date: "Episode 18 | 18:39 | 12.22.2022",
    title: "Vivamus vestibulum ntulla nec ante lorem!",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede lorem ipsum dolor sit quisque.",
    imageUrl: Chronicles,
  },
  {
    date: "Episode 18 | 18:39 | 12.22.2022",
    title: "Integer vitae libero ac risus egestas placerat.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede lorem ipsum dolor sit quisque.",
    imageUrl: Chronicles,
  },
  {
    date: "Episode 18 | 18:39 | 12.22.2022",
    title: "Integer vitae libero ac risus egestas placerat.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede lorem ipsum dolor sit quisque.",
    imageUrl: Chronicles,
  },
  {
    date: "Episode 18 | 18:39 | 12.22.2022",
    title: "Integer vitae libero ac risus egestas placerat.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede lorem ipsum dolor sit quisque.",
    imageUrl: Chronicles,
  },
  {
    date: "Episode 18 | 18:39 | 12.22.2022",
    title: "Integer vitae libero ac risus egestas placerat.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede lorem ipsum dolor sit quisque.",
    imageUrl: Chronicles,
  },
  {
    date: "Episode 18 | 18:39 | 12.22.2022",
    title: "Integer vitae libero ac risus egestas placerat.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede lorem ipsum dolor sit quisque.",
    imageUrl: Chronicles,
  },
  {
    date: "Episode 18 | 18:39 | 12.22.2022",
    title: "Integer vitae libero ac risus egestas placerat.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede lorem ipsum dolor sit quisque.",
    imageUrl: Chronicles,
  },
];
function Page() {
  return (
    <div>
      <section className="container m-auto pb-20">
        <div className="w-[80%] lg:w-[60%] m-auto">
          <h1 className="text-center text-[45px] sm:text-[70px] 2xl:text-[88px] md:px-20 lg:px-0">
            Checkbook <span>Podcast</span>
          </h1>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-5 justify-center py-10">
            <Image alt="" src={GooglePodcasts} className="object-contain" />
            <Image alt="" src={AmazonPodcasts} className="object-contain" />
            <Image alt="" src={ApplePodcasts} className="object-contain" />
            <Image alt="" src={SpotifyPodcasts} className="object-contain" />
          </div>
          <p className="pt-5 lg:pt-[30px] text-center font-[400] text-[18px] lg:text-[20px] 3xl:text-[27px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales.
          </p>
        </div>
      </section>
      <Podcastcon contentList={contentList} />
      <ReadytoGetStart />
    </div>
  );
}

export default Page;
