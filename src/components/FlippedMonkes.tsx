import * as React from "react";
import Image from "next/image";
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
type Props = {
  image: string;
  name: string;
  id1: string;
  id2: string;
  priceBTC: string;
  priceUSD: string;
  setChoosedNft: any;
};

export default function FlippedMonkes(props: Props) {
  return (
    <div
      className="flex flex-col w-[250px]  sm:border-2 bg-slate-960 border-black  gap-1"
      onClick={() => {
        props.setChoosedNft({ image: props.image, name: props.name, priceBTC: props.priceBTC });
      }}
    >
      <img src={props.image} alt="FlippedNodeMonkesLogo" className="object-cover w-[250px] h-[250px]" />
      <div className="flex flex-col text-white m-2 p-3">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div>{props.name}</div>
            <div>#{props.id1}</div>
          </div>
          <div className="text-opacity-30">#{props.id2}</div>
        </div>
        <div className="flex flex-row justify-between text-center">
          <div>
            <div className="bg-[#FF7B00] w-6 h-6 inline-block mr-2">₿</div>
            {props.priceBTC}
          </div>

          <div>${props.priceUSD}</div>
        </div>
      </div>
    </div>
  );
}
