import React from "react";
import Image from "next/image";
import Npm-logo from "../"

export default function LowerNavbar() {
  return (
    <div className="flex h-12 w-full md:px-32 sm:px-20 px-8 bg-white color text-black text-sm ">
      <div className="">
        <Image src="../" width={500} height={500} alt="Picture of the author" />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
