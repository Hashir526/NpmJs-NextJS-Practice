import React from "react";

const FooterContent = ({
  heading,
  headingtextcolor,
  headingfontweight,
  headingtextsize,
  headingpaddingyaxis,
  btntext1,
  btntext2,
  btntext3,
  btntext4,
  btnpaddingyaxis,
  btntextcolor,
}: {
  heading: string;
  headingtextcolor: string;
  headingfontweight: string;
  headingtextsize: string;
  headingpaddingyaxis: string;
  btntext1: string;
  btntext2: string;
  btntext3: string;
  btntext4?: string;
  btnpaddingyaxis?: string;
  btntextcolor: string;
}) => {
  return (
    <div className="flex flex-col items-start">
      <h1
        className={`${headingtextcolor} ${headingfontweight} ${headingtextsize} ${headingpaddingyaxis}`}
      >
        {heading}
      </h1>
      <button className={`${btnpaddingyaxis} ${btntextcolor}`}>
        {btntext1}
      </button>
      <button className={`${btnpaddingyaxis} ${btntextcolor}`}>
        {btntext2}
      </button>
      <button className={`${btnpaddingyaxis} ${btntextcolor}`}>
        {btntext3}
      </button>
      <button className={`${btnpaddingyaxis} ${btntextcolor}`}>
        {btntext4}
      </button>
    </div>
  );
};

export default FooterContent;
