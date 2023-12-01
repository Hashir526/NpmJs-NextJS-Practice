import React from "react";
import { UpperNavber } from "../../molecule";
import Footer from "../../molecule/Footer/Footer";
import LowerMainContent from "../../molecule/HomeLowerMainContent/HomeLowerMainContent";
import LowerNavbar from "../../molecule/LowerNavbar/LowerNavbar";
import UpperMainContent from "../../molecule/HomeUpperMainContent/HomeUpperMainContent";

const HomePage = () => {
  return (
    <main>
      <div className="w-full bg-gradient-to-r from-orange-500 to-violet-500 h-3"></div>
      <UpperNavber />
      <LowerNavbar />
      <UpperMainContent />
      <LowerMainContent />
      <Footer />
      <div className="w-full bg-gradient-to-r from-orange-500 to-violet-500 h-3"></div>
    </main>
  );
};

export default HomePage;
