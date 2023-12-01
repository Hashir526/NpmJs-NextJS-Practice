import React from "react";

const Paragraphs = ({
  text,
  mediumtextsize,
  smalltextsize,
  extrasmalltextsize,
  fontweight,
  textcolor,
  textalign,
  paddingyaxis,
}: {
  text: string;
  mediumtextsize: string;
  smalltextsize?: string;
  extrasmalltextsize?: string;
  fontweight?: string;
  textcolor: string;
  textalign: string;
  paddingyaxis?: string;
}) => {
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex justify-center items-center md:w-[40rem] sm:w-[30rem] ">
        <p
          className={`${mediumtextsize} ${smalltextsize} ${extrasmalltextsize} ${fontweight} ${textcolor} ${textalign} ${paddingyaxis}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Paragraphs;
