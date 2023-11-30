import React from "react";
import Image from "next/image";

const IconButton = ({
  image,
  alttext,
  height,
  width,
  paddingyaxis,
}: {
  image: any;
  alttext: string;
  height: string;
  width: string;
  paddingyaxis?: string;
}) => {
  return (
    <button className="">
      <Image
        src={image}
        alt={alttext}
        className={`${height} ${width} ${paddingyaxis}`}
      />
    </button>
  );
};

export default IconButton;
