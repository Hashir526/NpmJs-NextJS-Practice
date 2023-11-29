import React from "react";
import IconButton from "../../atom/IconButton/IconButton";
import github from "../../../logo/github.png";
import next from "../../../logo/next.svg";
import FooterContent from "../../atom/FooterContent/FooterContent";

const Footer = () => {
  const iconsbuttons: any = [
    { image: github, alttext: "github" },
    { image: next, alttext: "next" },
  ];
  const footerbuttons: any = [
    {
      heading: "Support",
      btntext1: "Help",
      btntext2: "Advisories",
      btntext3: "Status",
      btntext4: "Contact npm",
    },
    {
      heading: "Company",
      btntext1: "About",
      btntext2: "Blog",
      btntext3: "Press",
    },
    {
      heading: "Terms & Policies",
      btntext1: "Policies",
      btntext2: "Terms of Use",
      btntext3: "Code of Conduct",
      btntext4: "Privacy",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap px-20 bg-white border-t-2 py-8 gap-16  justify-evenly">
      <div className="flex flex-col ">
        {iconsbuttons.map((item: any) => {
          return (
            <>
              <IconButton
                image={item.image}
                alttext={`${item.alttext} image`}
                height={"h-14 "}
                width={"w-12"}
                paddingyaxis={"py-2"}
              />
            </>
          );
        })}
      </div>

      <div className="flex flex-row ">
        {/* {footerbuttons.map((item: any) => {
          return (
            <>
              <FooterContent
                heading={item.heading}
                headingtextcolor={"text-black"}
                headingfontweight={"font-bold"}
                headingtextsize={"text-lg"}
                headingpaddingyaxis={"py-2"}
                btntext1={item.btntext1}
                btntext2={item.btntext2}
                btntext3={item.btntext3}
                btntext4={item.btntext4}
                btnpaddingyaxis={"py-2"}
                btntextcolor={"text-black"}
              />
            </>
          );
        })} */}
        <FooterContent
          heading={"Support"}
          headingtextcolor={"text-black"}
          headingfontweight={"font-bold"}
          headingtextsize={"text-lg"}
          headingpaddingyaxis={"py-2"}
          btntext1={"Help"}
          btntext2={"Advisories"}
          btntext3={"Status"}
          btntext4={"Contact npm"}
          btnpaddingyaxis={"py-2"}
          btntextcolor={"text-black"}
        />
      </div>

      <div className="flex flex-col ">
        <FooterContent
          heading={"Company"}
          headingtextcolor={"text-black"}
          headingfontweight={"font-bold"}
          headingtextsize={"text-lg"}
          headingpaddingyaxis={"py-2"}
          btntext1={"About"}
          btntext2={"Blog"}
          btntext3={"Press"}
          btnpaddingyaxis={"py-2"}
          btntextcolor={"text-black"}
        />
      </div>

      <div className="flex flex-col ">
        <FooterContent
          heading={"Terms & Policies"}
          headingtextcolor={"text-black"}
          headingfontweight={"font-bold"}
          headingtextsize={"text-lg"}
          headingpaddingyaxis={"py-2"}
          btntext1={"Policies"}
          btntext2={"Terms of Use"}
          btntext3={"Code of Conduct"}
          btntext4={"Privacy"}
          btnpaddingyaxis={"py-2"}
          btntextcolor={"text-black"}
        />
      </div>
    </div>
  );
};

export default Footer;
