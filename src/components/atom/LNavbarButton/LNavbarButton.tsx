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
}: {
  text: string;
  textbutton: string;
  textbackgroundcolor: string;
  textbordercolor: string;
  textcolor: string;
  textbordertype: string;
  hoverbackgroundcolor?: string;
  hoverbordercolor?: string;
}) => {
  return (
    <button
      className={`${textbutton} ${textbackgroundcolor} ${textbordercolor} ${textcolor} ${textbordertype} ${hoverbackgroundcolor} ${hoverbordercolor}`}
    >
      {text}
    </button>
  );
};

export default LNavbarButton;
