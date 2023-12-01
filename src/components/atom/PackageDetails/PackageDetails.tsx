import React from "react";
import Image from "next/image";
import program from "../../../logo/Program.png";
import Paragraphs from "../Paragraphs/Paragraphs";

const PackageDetails = () => {
  return (
    <div className="w-full py-8">
      <div className="flex content-center justify-center">
        <div className="w-20 h-20">
          <Image src={program} alt={"package 1"} />
          <Paragraphs
            text={"Unlimited public packages"}
            mediumtextsize={"md:xl"}
            textcolor={"text-black"}
            fontweight={"font-bold"}
            textalign={"text-center"}
            paddingyaxis={"py-4"}
          />
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
