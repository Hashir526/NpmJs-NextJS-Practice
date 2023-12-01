import React from "react";
import Image from "next/image";
import next from "../../../logo/next.svg";
import Paragraphs from "../../atom/Paragraphs/Paragraphs";

export default function LowerMainContent() {
  const paragrapghData: any = [
    {
      text: "Bring the best of open source to you, your team, and your company",
      mediumtextsize: "md:text-4xl",
      smalltextsize: "sm:text-lg",
      extrasmalltextsize: "xs:base",
      fontweight: "font-bold",
    },
    {
      text: "Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.",
      mediumtextsize: "md:text-2xl",
      smalltextsize: "sm:text-base",
      extrasmalltextsize: "xs:sm",
    },
  ];

  return (
    <div className="bg-white h-auto py-10 ">
      <div className="flex justify-center self-center ">
        <Image src={next} width={120} height={0} alt="Picture of the NextJs" />
      </div>

      {paragrapghData.map((item: any) => {
        return (
          <Paragraphs
            text={item.text}
            mediumtextsize={item.mediumtextsize}
            smalltextsize={item.smalltextsize}
            extrasmalltextsize={item.extrasmalltextsize}
            textcolor={"text-black"}
            fontweight={item.fontweight}
            textalign={"text-center"}
            paddingyaxis={"py-4"}
          />
        );
      })}
    </div>
  );
}
