import React from "react";
import { UpperNavber } from "../../molecule";
import LowerNavbar from "../../molecule/LowerNavbar/LowerNavbar";

const PricingPage = () => {
  return (
    <main>
      <div className="w-full bg-gradient-to-r from-orange-500 to-violet-500 h-3"></div>
      <UpperNavber />
      <LowerNavbar />
    </main>
  );
};

export default PricingPage;
