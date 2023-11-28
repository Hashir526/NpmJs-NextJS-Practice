import { UpperNavber } from "../components/molecule";
import LowerNavbar from "../components/molecule/LowerNavbar/LowerNavbar";
import UpperMainContent from "../components/molecule/UpperMainContent/UpperMainContent";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-orange-500 h-3"></div>
      <UpperNavber />
      <LowerNavbar />
      <UpperMainContent />
    </main>
  );
}
