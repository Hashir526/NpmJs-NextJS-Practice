import React from "react";
import Link from "next/link";

const UNavbarButton = ({ text }: { text: string }) => {
  return (
    <Link href={`/${text}`}>
      <button className="">{text}</button>
    </Link>
  );
};

export default UNavbarButton;
