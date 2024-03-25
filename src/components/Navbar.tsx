import * as React from "react";
import Image from "next/image";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className=" flex flex-row shadow-sm sticky top-0 left -0 z-50 bg-black text-white p-4 my-3 text-[14px] ">
      <button className="basis-4/6 flex flex-col justify-center">
        <Image src="/FlippedNodeMonkesLogo.svg" alt="FlippedNodeMonkesLogo" width={207} height={23} />
      </button>
      <div className="flex flex-row basis-2/6 justify-around ">
        <button>About us</button>
        <button>Gallery</button>
        <button>Marketplace</button>
        <button className=" bg-white text-black rounded-lg pl-2 pr-2 shadow-sm hover:shadow-lg shadow-slate-200 ">
          → Connect Wallet
        </button>
      </div>
    </nav>
  );
}
