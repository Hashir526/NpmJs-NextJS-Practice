import React from "react";
import Image from "next/image";
import program from "../../../logo/Program.png";
import Paragraphs from "../Paragraphs/Paragraphs";

const PackageDetails = ({
  image,
  alttext,
  width,
  height,
  firsttext,
  firsttextsize,
  firsttextcolor,
  firstfontweight,
  firsttextalign,
  secondtext,
  secondtextsize,
  secondtextcolor,
  secondtextalign,
  paddingyaxis,
}: {
  image: string;
  alttext: string;
  width: string;
  height: string;
  firsttext: string;
  firsttextsize: string;
  firsttextcolor: string;
  firstfontweight?: string;
  firsttextalign: string;
  secondtext: string;
  secondtextsize: string;
  secondtextcolor: string;
  secondtextalign: string;
  paddingyaxis?: string;
}) => {
  return (
    <div className="w-full py-8">
      <div className="flex flex-col content-center justify-center">
        <div className={`${width} ${height} self-center`}>
          <Image src={image} alt={alttext} />
        </div>
        <Paragraphs
          text={firsttext}
          mediumtextsize={firsttextsize}
          textcolor={firsttextcolor}
          fontweight={firstfontweight}
          textalign={firsttextalign}
          paddingyaxis={paddingyaxis}
        />
        <Paragraphs
          text={secondtext}
          mediumtextsize={secondtextsize}
          textcolor={secondtextcolor}
          textalign={secondtextalign}
          paddingyaxis={paddingyaxis}
        />
      </div>
    </div>
  );
};

export default PackageDetails;
