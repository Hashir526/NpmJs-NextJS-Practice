import React from "react";
import Image from "next/image";
import program from "../../../logo/Program.png";
import github from "../../../logo/github.png";
import next from "../../../logo/next.svg";
import Paragraphs from "../../atom/Paragraphs/Paragraphs";
import ContentButton from "../../atom/ContentButton/ContentButton";
import PackageDetails from "../../atom/PackageDetails/PackageDetails";

const ProUpperMainContent = () => {
  const paragrapghData: any = [
    {
      text: "npm Pro",
      mediumtextsize: "text-6xl",
      fontweight: "font-bold",
    },
    {
      text: "Publish your own packages to the world's most popular software ecosystem",
      mediumtextsize: "md:text-2xl",
      smalltextsize: "sm:text-base",
      extrasmalltextsize: "xs:sm",
      fontweight: "font-bold",
    },
  ];
  const button: any = [
    {
      id: 1,
      text: "Get started",
      backgroudcolor: "bg-red-600",
      bordercolor: "border-b-orange-500 ",
      specificborder: "border-b-8 ",
      specificbordertype: "border-transparent",
      bordertype: "rounded-none",
      textcolor: "text-white",
      hoverbackgroudcolor: "hover:bg-red-600",
      hoverbordercolor: " hover:border-b-orange-500 ",
      hoverspecificborder: "hover:border-b-8",
      hoverspecificbordertype: "hover:border-transparent",
      href: "/",
    },
  ];

  const packagedata: any = [
    {
      image: program,
      altext: "package one",
      firsttext: "Unlimited public packages",
      secondtext:
        "Bring the best of open source JavaScript development to your own projects.",
    },
    {
      image: github,
      altext: "package two",
      firsttext: "Unlimited private packages",
      secondtext:
        "Seamlessly integrate public and private packages into your development cycle.",
    },
    {
      image: next,
      altext: "package three",
      firsttext: "Package-based permissions",
      secondtext:
        "Add collaborators to work on your public and private packages together.",
    },
  ];
  return (
    <div className="bg-white w-full py-8">
      <div className="flex justify-center self-center ">
        <Image src={program} alt={"Picture"} width={250} />
      </div>
      {paragrapghData.map((item: any) => {
        return (
          <Paragraphs
            text={item.text}
            mediumtextsize={item.mediumtextsize}
            smalltextsize={item.smalltextsize}
            extrasmalltextsize={item.extrasmalltextsize}
            textcolor={"text-black"}
            fontweight={item.fontweight}
            textalign={"text-center"}
            paddingyaxis={"py-4"}
          />
        );
      })}
      <div className=" flex justify-center items-center w-full py-8 ">
        <div className="flex flex-wrap sm:flex-row px-6 sm:px-0 justify-center items-center md:w-[35rem] sm:w-[30rem] gap-8 ">
          {button.map((item: any) => {
            if (item.id === 1) {
              return (
                <ContentButton
                  text={item.text}
                  type={"flex"}
                  flextype={"flex-grow"}
                  backgroudcolor={item.backgroudcolor}
                  bordercolor={item.bordercolor}
                  specificborder={item.specificborder}
                  specificbordertype={item.specificbordertype}
                  hoverbackgroudcolor={item.hoverbackgroudcolor}
                  hoverbordercolor={item.hoverbordercolor}
                  hoverspecificborder={item.hoverspecificborder}
                  hoverspecificbordertype={item.specificbordertype}
                  textcolor={item.textcolor}
                  bordertype={item.bordertype}
                  textsize={"text-lg"}
                  fontweigth={"font-bold"}
                  width={"w-60"}
                  href={item.href}
                />
              );
            }
          })}
        </div>
      </div>
      {packagedata.map((item: any) => {
        return (
          <PackageDetails
            image={item.image}
            alttext={item.alltext}
            width={"w-20"}
            height={"h-20"}
            firsttext={item.firsttext}
            firsttextsize={"text-xl"}
            firsttextcolor={"text-black"}
            firsttextalign={"text-center"}
            firstfontweight={"font-bold"}
            secondtext={item.secondtext}
            secondtextsize={"text-sm"}
            secondtextcolor={"text-black"}
            secondtextalign={"text-center"}
            paddingyaxis="py-2"
          />
        );
      })}
    </div>
  );
};

export default ProUpperMainContent;
