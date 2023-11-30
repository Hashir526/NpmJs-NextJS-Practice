import React from "react";
import { UpperNavber } from "../../molecule";
import LowerNavbar from "../../molecule/LowerNavbar/LowerNavbar";

const ProPage = () => {
  return (
    <main>
      <div className="w-full bg-gradient-to-r from-orange-500 to-violet-500 h-3"></div>
      <UpperNavber />
      <LowerNavbar />
      <div className="w-full bg-gradient-to-r from-violet-500 to-orange-500 h-3"></div>
    </main>
  );
};

export default ProPage;
