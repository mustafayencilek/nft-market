import * as React from "react";
import Image from "next/image";
type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="bg-[#FF7B00] flex flex-row justify-center p-1 ">
      <div className=" flex flex-col justify-center pr-1">
        <Image className="align-middle" src="/Union.svg" alt="FlippedNodeMonkesLogo" width={12} height={12} />
      </div>
      <div>
        This announcement bar can be used to inform visitors of{" "}
        <span className="text-white">something important!</span>
      </div>
    </div>
  );
}
