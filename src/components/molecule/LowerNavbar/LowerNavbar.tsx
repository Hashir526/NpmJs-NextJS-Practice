import React from "react";
import Image from "next/image";
import LNavbarButton from "../../atom/LNavbarButton/LNavbarButton";
import Npm from "./../../../logo/Npm.png";
import Link from "next/link";

export default function LowerNavbar() {
  const navbarbutton: any = [
    { text: "SignUp", textbordercolor: "border-gray-300" },
    {
      text: "SignIn",
      textbordercolor: "border-white",
      hoverbordercolor: "hover:border-white",
    },
  ];
  return (
    <div className="flex flex-wrap sm:flex-nowrap sm:h-20 h-40 w-full md:px-28 sm:px-16 px-8 bg-white color text-black text-sm gap-8 ">
      <div className="flex w-full gap-4">
        <div className="flex justify-center self-center ">
          <Link href={"/"}>
            <Image
              src={Npm}
              width={120}
              height={0}
              alt="Picture of the author"
            />
          </Link>
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
        {navbarbutton.map((item: any) => {
          return (
            <LNavbarButton
              text={item.text}
              textbutton={"btn"}
              textbackgroundcolor={"bg-white"}
              textbordercolor={item.textbordercolor}
              textcolor={"text-black"}
              textbordertype={"rounded-none"}
              hoverbackgroundcolor={"hover:bg-white"}
              hoverbordercolor={item.hoverbordercolor}
              width={"w-24"}
            />
          );
        })}
      </div>
    </div>
  );
}
