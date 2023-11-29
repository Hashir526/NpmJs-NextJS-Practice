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
}: {
  text: string;
  type: string;
  flextype: string;
  backgroudcolor: string;
  bordercolor: string;
  textcolor: string;
  bordertype: string;
  textsize: string;
  fontweigth: string;
  width: string;
}) => {
  return (
    <button
      className={`btn ${type} ${flextype} ${backgroudcolor} ${bordercolor} ${textcolor} ${bordertype} ${textsize} ${fontweigth} ${width}`}
    >
      {text}
    </button>
  );
};

export default ContentButton;
