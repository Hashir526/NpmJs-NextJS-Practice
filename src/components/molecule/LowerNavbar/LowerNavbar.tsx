import React from "react";
import Image from "next/image";
import LNavbarButton from "../../atom/LNavbarButton/LNavbarButton";
import Npm from "./../../../logo/Npm.png";

export default function LowerNavbar() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap sm:h-20 h-40 w-full md:px-28 sm:px-16 px-8 bg-white color text-black text-sm gap-8 ">
      <div className="flex w-full gap-4">
        <div className="flex justify-center self-center ">
          <Image src={Npm} width={120} height={0} alt="Picture of the author" />
        </div>
        <div className="flex w-full self-center">
          <input
            type="text"
            placeholder="Search Packages"
            className="input w-full flex grow rounded-none bg-slate-200"
          />
          <button className="btn btn-black rounded-none text-white">
            Search
          </button>
        </div>
      </div>

      <div className="self-center flex gap-8 ">
        <LNavbarButton
          text="Sign in"
          textbutton={"btn"}
          textbackgroundcolor={"bg-white"}
          textbordercolor={"border-gray-300"}
          textcolor={"text-black"}
          textbordertype={"rounded-none"}
          hoverbackgroundcolor={"hover:bg-white"}
        />
        {/* <button className="    hover:bg-white hover:border-white ">
          Log In
        </button> */}
        <LNavbarButton
          text="Log in"
          textbutton={"btn"}
          textbackgroundcolor={"bg-white"}
          textbordercolor={"border-white"}
          textcolor={"text-black"}
          textbordertype={"rounded-none"}
          hoverbackgroundcolor={"hover:bg-white"}
          hoverbordercolor={"hover:border-white"}
        />
      </div>
    </div>
  );
}
