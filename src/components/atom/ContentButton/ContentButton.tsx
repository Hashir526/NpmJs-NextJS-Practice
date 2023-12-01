import Link from "next/link";
import React from "react";

const ContentButton = ({
  text,
  type,
  flextype,
  backgroudcolor,
  bordercolor,
  specificborder,
  specificbordertype,
  textcolor,
  bordertype,
  textsize,
  fontweigth,
  width,
  hoverbackgroudcolor,
  hoverbordercolor,
  hoverspecificborder,
  hoverspecificbordertype,
  href,
}: {
  text: string;
  type?: string;
  flextype?: string;
  backgroudcolor: string;
  bordercolor?: string;
  specificborder?: string;
  specificbordertype?: string;
  textcolor?: string;
  bordertype?: string;
  textsize?: string;
  fontweigth?: string;
  width: string;
  hoverbackgroudcolor?: string;
  hoverbordercolor?: string;
  hoverspecificborder?: string;
  hoverspecificbordertype?: string;
  href?: string;
}) => {
  return (
    <Link href={`${href}`}>
      <button
        className={`btn ${type} ${flextype} ${backgroudcolor} ${bordercolor} ${specificborder} ${specificbordertype} ${textcolor} ${bordertype} ${textsize} ${fontweigth} ${width} ${hoverbackgroudcolor} ${hoverbordercolor} ${hoverspecificborder} ${hoverspecificbordertype}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default ContentButton;
