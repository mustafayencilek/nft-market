"use client";
import * as React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import FlippedMonkes from "./FlippedMonkes";
interface DataChoosed {
  image: string;
  name: string;
  priceBTC: string;
}
interface DataItem {
  image: string;
  name: string;
  id1: string;
  id2: string;
  priceBTC: string;
  priceUSD: string;
}
type Props = {
  data: DataItem[];
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
  setChoosedNft: React.Dispatch<React.SetStateAction<DataChoosed>>;
};
export default function FlippedMonkesGroup(props: Props) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/monkes");
        const data = await response.json();
        // setData(data);
        {
          props.setData(data);
        }
        console.log(data);
      } catch (error) {
        console.error("API hatası:", error);
      }
    };

    fetchData();
  }, []);

  const handleSetChoosedNft = (chosenNft: DataChoosed) => {
    props.setChoosedNft(chosenNft);
  };
  return (
    <div className="flex flex-wrap  ">
      {props.data.map((item: any, key: number) => (
        <FlippedMonkes
          key={key}
          image={item.image}
          name={item.name}
          id1={item.id1}
          id2={item.id2}
          priceBTC={item.priceBTC}
          priceUSD={item.priceUSD}
          setChoosedNft={handleSetChoosedNft}
        />
      ))}
    </div>
  );
}
