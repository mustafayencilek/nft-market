"use client";
import * as React from "react";
import Image from "next/image";
interface DataChoosed {
  image: string;
  name: string;
  priceBTC: string;
}
type Props = {
  data: DataChoosed;
};
export default function NftSideBar(props: Props) {
  return (
    <div className=" flex flex-col w-[338px] h-screen">
      <div className="w-full h-[338px] p-[32px]  ">
        <img src={props.data.image} alt="FlippedNodeMonkesLogo" width={274} height={274} />
      </div>
      <div className="w-full py-3 pl-3 ">
        <div className="bg-white pl-3 py-3">Details</div>
        <div className="text-white pl-3 py-3 h-[100px]">{props.data.name}</div>
      </div>
      <div className="w-full py-3 pl-3 ">
        <div className="bg-white pl-3 py-3">Properties</div>
        <div className="text-white pl-3 py-3 h-[100px]">{props.data.priceBTC}</div>
      </div>
      <div className="w-full py-3 pl-3 ">
        <div className="bg-white pl-3 py-3">More from this collection</div>
        <div className="text-white pl-3 py-3 h-[100px]"></div>
      </div>
    </div>
  );
}
