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
    <div className="flex flex-row  px-20 bg-white border-t-2 py-8 gap-16 flex-wrap ">
      <div className="flex flex-row  w-full justify-evenly flex-wrap">
        <div className="flex flex-col">
          {iconsbuttons.map((item: any) => {
            return (
              <>
                <IconButton
                  image={item.image}
                  alttext={`${item.alttext} image`}
                  height={"h-16 "}
                  width={"w-12"}
                  paddingyaxis={"py-2"}
                />
              </>
            );
          })}
        </div>

        {footerbuttons.map((item: any) => {
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
        })}
      </div>
    </div>
  );
};

export default Footer;
