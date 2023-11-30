import Link from "next/link";
import React from "react";

const LNavbarButton = ({
  text,
  textbutton,
  textbackgroundcolor,
  textbordercolor,
  textcolor,
  textbordertype,
  hoverbackgroundcolor,
  hoverbordercolor,
  width,
}: {
  text: string;
  textbutton: string;
  textbackgroundcolor: string;
  textbordercolor: string;
  textcolor: string;
  textbordertype: string;
  hoverbackgroundcolor?: string;
  hoverbordercolor?: string;
  width: string;
}) => {
  return (
    <Link href={`${text}`}>
      <button
        className={`${width} ${textbutton} ${textbackgroundcolor} ${textbordercolor} ${textcolor} ${textbordertype} ${hoverbackgroundcolor} ${hoverbordercolor}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default LNavbarButton;
