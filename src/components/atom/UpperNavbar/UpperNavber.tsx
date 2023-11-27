import React from "react";
import { FaHeart } from "react-icons/fa";

export function UpperNavber() {
  return (
    <div className="flex h-12 w-full md:px-32 sm:px-20 px-8 bg-white color text-black text-sm border-b-2 border-gray-600">
      <div className="md:flex md:flex-row w-full justify-center self-center gap-4 hidden">
        <div className="self-center ">
          <FaHeart />
        </div>
        <div className="grow ">Neatly Packaged Magic</div>
      </div>
      <div className="flex justify-center self-center gap-4 font-semibold">
        <div>Pro</div>
        <div>Teams</div>
        <div>Pricing</div>
        <div>Documentation</div>
      </div>
    </div>
  );
}
