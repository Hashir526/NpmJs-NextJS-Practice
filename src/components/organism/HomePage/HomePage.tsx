import React from "react";
import { UpperNavber } from "../../molecule";
import Footer from "../../molecule/Footer/Footer";
import LowerMainContent from "../../molecule/LowerMainContent/LowerMainContent";
import LowerNavbar from "../../molecule/LowerNavbar/LowerNavbar";
import UpperMainContent from "../../molecule/UpperMainContent/UpperMainContent";

const HomePage = () => {
  return (
    <main>
      <div className="w-full bg-gradient-to-r from-violet-500 to-orange-500 h-3"></div>
      <UpperNavber />
      <LowerNavbar />
      <UpperMainContent />
      <LowerMainContent />
      <Footer />
      <div className="w-full bg-gradient-to-r from-violet-500 to-orange-500 h-3"></div>
    </main>
  );
};

export default HomePage;