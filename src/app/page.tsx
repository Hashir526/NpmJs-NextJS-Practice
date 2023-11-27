import { UpperNavber } from "@/atom";
import LowerNavbar from "../components/atom/LowerNavbar/LowerNavbar";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-orange-500 h-3"></div>
      <UpperNavber />
      <LowerNavbar />
      <div className="w-full bg-purple-600 h-3"></div>
    </main>
  );
}
