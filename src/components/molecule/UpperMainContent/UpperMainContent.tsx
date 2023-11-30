import React from "react";
import Paragraphs from "../../atom/Paragraphs/Paragraphs";
import ContentButton from "../../atom/ContentButton/ContentButton";

export default function UpperMainContent() {
  const paragrapghData: any = [
    {
      text: "Build amazing things",
      mediumtextsize: "md:text-7xl",
      smalltextsize: "sm:text-2xl",
      extrasmalltextsize: "xs:lg",
      fontweight: "font-bold",
    },
    {
      text: "We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.",
      mediumtextsize: "md:text-2xl",
      smalltextsize: "sm:text-base",
      extrasmalltextsize: "xs:sm",
    },
    {
      text: "Take your JavaScript development up a notch",
      mediumtextsize: "md:text-4xl",
      smalltextsize: "sm:text-lg",
      extrasmalltextsize: "xs:base",
      fontweight: "font-bold",
    },
    {
      text: "Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.",
      mediumtextsize: "md:text-2xl",
      smalltextsize: "sm:text-base",
      extrasmalltextsize: "xs:sm",
    },
  ];

  const button: any = [
    {
      text: "Sign up for free",
      backgroudcolor: "bg-yellow-400",
      bordercolor: "border-yellow-400",
      hoverbackgroudcolor: "hover:bg-yellow-400",
      hoverbordercolor: "hover:border-yellow-400",
      href: "/SignUp",
    },
    {
      text: "Learn about pro",
      backgroudcolor: "bg-orange-600",
      bordercolor: "border-orange-600",
      hoverbackgroudcolor: "hover:bg-orange-600",
      hoverbordercolor: "hover:border-orange-600",
      href: "/Pro",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-violet-500 to-orange-500 h-auto py-10 ">
      {paragrapghData.map((item: any) => {
        return (
          <Paragraphs
            text={item.text}
            mediumtextsize={item.mediumtextsize}
            smalltextsize={item.smalltextsize}
            extrasmalltextsize={item.extrasmalltextsize}
            textcolor={"text-white"}
            fontweight={item.fontweight}
            textalign={"text-center"}
            paddingyaxis={"py-4"}
          />
        );
      })}

      <div className="flex justify-center items-center w-full ">
        <div className="flex flex-wrap sm:flex-row px-6 sm:px-0 justify-center items-center md:w-[35rem] sm:w-[30rem] gap-8 ">
          {button.map((item: any) => {
            return (
              <ContentButton
                text={item.text}
                type={"flex"}
                flextype={"flex-grow"}
                backgroudcolor={item.backgroudcolor}
                bordercolor={item.bordercolor}
                hoverbackgroudcolor={item.hoverbackgroudcolor}
                hoverbordercolor={item.hoverbordercolor}
                textcolor={"text-black"}
                bordertype={"rounded-full"}
                textsize={"text-lg"}
                fontweigth={"font-bold"}
                width={"w-60"}
                href={item.href}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
