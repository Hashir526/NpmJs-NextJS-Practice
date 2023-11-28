import React from "react";
import Paragraphs from "../../atom/Paragraphs/Paragraphs";

export default function UpperMainContent() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-orange-500 h-auto py-10 ">
      <Paragraphs
        text="Build amazing things"
        mediumtextsize={"md:text-7xl"}
        smalltextsize={"sm:text-2xl"}
        extrasmalltextsize={"xs:lg"}
        fontweight={"font-bold"}
        textcolor={"text-white"}
        textalign={"text-center"}
        paddingyaxis={"py-4"}
      />

      <Paragraphs
        text="We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you."
        mediumtextsize={"md:text-2xl"}
        smalltextsize={"sm:text-base"}
        extrasmalltextsize={"xs:sm"}
        textcolor={"text-white"}
        textalign={"text-center"}
        paddingyaxis={"py-4"}
      />

      <Paragraphs
        text="Take your JavaScript development up a notch"
        mediumtextsize={"md:text-4xl"}
        smalltextsize={"sm:text-lg"}
        extrasmalltextsize={"xs:base"}
        fontweight={"font-bold"}
        textcolor={"text-white"}
        textalign={"text-center"}
        paddingyaxis={"py-4"}
      />

      <Paragraphs
        text="Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages."
        mediumtextsize={"md:text-2xl"}
        smalltextsize={"sm:text-base"}
        extrasmalltextsize={"xs:sm"}
        textcolor={"text-white"}
        textalign={"text-center"}
        paddingyaxis={"py-4"}
      />
    </div>
  );
}
