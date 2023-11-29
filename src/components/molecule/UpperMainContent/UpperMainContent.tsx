import React from "react";
import Paragraphs from "../../atom/Paragraphs/Paragraphs";
import ContentButton from "../../atom/ContentButton/ContentButton";

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

      <div className="flex justify-center items-center w-full ">
        <div className="flex flex-wrap sm:flex-row px-6 sm:px-0 justify-center items-center md:w-[35rem] sm:w-[30rem] gap-8 ">
          <ContentButton
            text={"Sign up for free"}
            type={"flex"}
            flextype={"flex-grow"}
            backgroudcolor={"bg-yellow-400"}
            bordercolor={"border-yellow-400"}
            textcolor={"text-black"}
            bordertype={"rounded-full"}
            textsize={"text-lg"}
            fontweigth={"font-bold"}
            width={"w-60"}
          />

          <ContentButton
            text={" Learn about pro"}
            type={"flex"}
            flextype={"flex-grow"}
            backgroudcolor={"bg-orange-600"}
            bordercolor={"border-orange-600"}
            textcolor={"text-black"}
            bordertype={"rounded-full"}
            textsize={"text-lg"}
            fontweigth={"font-bold"}
            width={"w-60"}
          />
        </div>
      </div>
    </div>
  );
}
