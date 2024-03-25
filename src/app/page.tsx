"use client";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import NftSideBar from "@/components/NftSideBar";
import FlippedMonkesGroup from "@/components/FlippedMonkesGroup";
import FlippedMonkesInfo from "@/components/FlippedMonkesInfo";
import { useState, useEffect } from "react";
export default function Home() {
  interface DataItem {
    image: string;
    name: string;
    id1: string;
    id2: string;
    priceBTC: string;
    priceUSD: string;
  }
  interface DataChoosed {
    image: string;
    name: string;
    priceBTC: string;
  }
  const [data, setData] = useState<DataItem[]>([]);
  const [choosedNft, setChoosedNft] = useState<DataChoosed>({
    image: "/Rectangle13.svg",
    name: "Creator Name",
    priceBTC: "price of NFT ",
  });
  return (
    <div className="grid grid-cols-3 gap-4 mx-10">
      <div className="col-span-3 row-span-1">
        <Navbar />
      </div>

      <div className="col-span-3">
        <Banner />
      </div>

      <div className="col-span-1">
        <NftSideBar data={choosedNft} />
      </div>

      <div className="col-span-2 relative">
        <FlippedMonkesInfo />
        <div className="relative">
          <FlippedMonkesGroup data={data} setData={setData} setChoosedNft={setChoosedNft} />
        </div>
      </div>
    </div>
  );
}
