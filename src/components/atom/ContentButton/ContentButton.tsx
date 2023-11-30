import Link from "next/link";
import React from "react";

const ContentButton = ({
  text,
  type,
  flextype,
  backgroudcolor,
  bordercolor,
  textcolor,
  bordertype,
  textsize,
  fontweigth,
  width,
  hoverbackgroudcolor,
  hoverbordercolor,
  href,
}: {
  text: string;
  type?: string;
  flextype?: string;
  backgroudcolor: string;
  bordercolor?: string;
  textcolor?: string;
  bordertype?: string;
  textsize?: string;
  fontweigth?: string;
  width: string;
  hoverbackgroudcolor?: string;
  hoverbordercolor?: string;
  href?: string;
}) => {
  return (
    <Link href={`${href}`}>
      <button
        className={`btn ${type} ${flextype} ${backgroudcolor} ${bordercolor} ${textcolor} ${bordertype} ${textsize} ${fontweigth} ${width} ${hoverbackgroudcolor} ${hoverbordercolor}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default ContentButton;
