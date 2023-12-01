import React from "react";
import { UpperNavber } from "../../molecule";
import LowerNavbar from "../../molecule/LowerNavbar/LowerNavbar";
import ProUpperMainContent from "../../molecule/ProUpperMainContent/ProUpperMainContent";
import ProMiddleMainContent from "../../molecule/ProMiddleMainContent/ProMiddleMainContent";

const ProPage = () => {
  return (
    <main>
      <div className="w-full bg-gradient-to-r from-orange-500 to-violet-500 h-3"></div>
      <UpperNavber />
      <LowerNavbar />
      <div className="w-full bg-gradient-to-r from-violet-500 to-orange-500 h-3"></div>
      <ProUpperMainContent />
      <ProMiddleMainContent />
    </main>
  );
};

export default ProPage;
