import * as React from "react";
import Image from "next/image";

export default function FlippedMonkesInfo() {
  return (
    <div className="flex flex-col text-white">
      <div className="flex flex-row items-center justify-start p-4">
        <img src="/RectangleInfo.svg" alt="" width={142} height={142} />
        <div className="flex flex-col ml-10    ">
          <p className="text-3xl">xMonkes Yellow #1</p>
          <div className="mt-4 ">
            <p className="sm:border bg-slate-960 p-2 inline">Rarity #371</p>
          </div>
        </div>
        <button className="ml-auto items-center bg-white text-black  p-2">
          View Collector Profile <img className="inline-block " src="/RightArrow.svg" width={12} height={12} />
        </button>
      </div>
      <div className="flex flex-row justify-start mt-5 mb-10  ">
        <div className="flex-grow border-b border-l border-r border-t bg-slate-960  py-2">
          <button className="px-2 inline-block">View on Magic Eden</button>
          <img className="inline-block " src="/RightArrowWhite.svg" width={12} height={12} />
        </div>
        <div className="flex-grow border-b  border-r border-t bg-slate-960 py-2">
          <button className="px-2 inline-block">View on Ordinals</button>
          <img className="inline-block " src="/RightArrowWhite.svg" width={12} height={12} />
        </div>
        <div className="flex-grow  border-b  border-r border-t bg-slate-960 py-2">
          <button className="px-2 inline-block">View on Ordinals Wallet</button>
          <img className="inline-block " src="/RightArrowWhite.svg" width={12} height={12} />
        </div>
      </div>
      <div className="flex flex-row my-3 mb-10">
        <div className="flex-grow  py-2 ">
          <div className="sm:border pl-2 bg-slate-960">Inscription ID</div>
          <div className="border-b pl-2 border-l border-r bg-slate-960">1381kj2h3k1j2hjk3h..</div>
        </div>
        <div className=" flex-grow  py-2">
          <div className="border-b pl-2 border-r border-t bg-slate-960">Inscription Number</div>
          <div className="border-b pl-2 border-r bg-slate-960">986716</div>
        </div>
        <div className=" flex-grow  py-2">
          <div className="border-b pl-2 border-r border-t bg-slate-960">Sat Rarity</div>
          <div className="border-b pl-2 border-r bg-slate-960">COMMON</div>
        </div>
        <div className=" flex-grow  py-2">
          <div className="border-b pl-2 border-r border-t bg-slate-960">Inscription ID</div>
          <div className="border-b pl-2 border-r bg-slate-960">1381kj2h3k1j2hjk3h..</div>
        </div>
        <div className=" flex-grow  py-2">
          <div className="border-b pl-2 border-r border-t bg-slate-960">Created by</div>
          <div className="border-b pl-2 border-r bg-slate-960">1381kj2h3k1j2hjk3h..</div>
        </div>
      </div>
      <div className="flex flex-row sm:border bg-slate-960 mb-10">
        <div className=" flex-grow border-r">
          <div className="border-b  bg-slate-960 p-2">Headgear</div>
          <div className="flex flex-col p-2 ">
            <div className="pb-2">Headset with Cat Ears</div>
            <button className="bg-[#FF7B00] sm:border mx-4 py-2">7.21%</button>
          </div>
        </div>
        <div className="flex-grow bg-slate-960 border-r ">
          <div className="border-b bg-slate-960 p-2">Face</div>
          <div className="flex flex-col p-2">
            <div className="pb-2">Yellow</div>
            <button className="bg-[#FF7B00] sm:border mx-4 py-2">10.14%</button>
          </div>
        </div>
        <div className="flex-grow  bg-slate-960 border-r  ">
          <div className="border-b bg-slate-960 p-2">Body</div>
          <div className="flex flex-col p-2">
            <div className="pb-2">Purple</div>
            <button className="bg-[#FF7B00] sm:border mx-4 py-2">13.51%</button>
          </div>
        </div>
        <div className="flex-grow  bg-slate-960 border-r">
          <div className="border-b bg-slate-960 p-2">Background</div>
          <div className="flex flex-col p-2">
            <div className="pb-2">Dusk</div>
            <button className="bg-[#FF7B00] sm:border mx-4 py-2">21.17%</button>
          </div>
        </div>
      </div>
    </div>
  );
}
