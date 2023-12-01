import React from "react";
import ContentButton from "../../atom/ContentButton/ContentButton";
import Paragraphs from "../../atom/Paragraphs/Paragraphs";
import TextButton from "../../atom/TextButton/TextButton";

const ProMiddleMainContent = () => {
  const paragrapghData: any = [
    {
      text: "Working on a team?",
      mediumtextsize: "md:text-7xl",
      smalltextsize: "sm:text-2xl",
      extrasmalltextsize: "xs:lg",
      fontweight: "font-bold",
    },
    {
      text: "Try npm Teams.",
      mediumtextsize: "md:text-4xl",
      smalltextsize: "sm:text-lg",
      extrasmalltextsize: "xs:base",
      fontweight: "font-bold",
    },
    {
      text: "Team-based access controls to manage package permissions across your organization.",
      mediumtextsize: "md:text-2xl",
      smalltextsize: "sm:text-base",
      extrasmalltextsize: "xs:sm",
    },
  ];

  const button: any = [
    {
      text: "Learn about Teams",
      backgroudcolor: "bg-red-600",
      bordercolor: "border-white",
      hoverbackgroudcolor: "hover:bg-red-600",
      hoverbordercolor: "hover:border-white",
      href: "/Teams",
    },
  ];
  return (
    <main className="bg-white">
      <div className="bg-gradient-to-r from-violet-500 to-orange-500 h-[40rem] py-10 ">
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
                  textcolor={"text-white"}
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
        <div className="card w-full py-10 text-black ">
          <div className="card py-10 card-body justify-center self-center bg-white rounded-lg w-[22rem] md:w-[30rem] ">
            <h2 className="card-title border-b-2">Sign Up</h2>

            {/* {TextInputData.map((item: any) => {
            return (
              <TextInput
                DivYAxisPadding={"py-2"}
                TextInputName={item.TextInputName}
                InputType={item.InputType}
                InputClassType={"input"}
                InputBorder={"input-bordered"}
                Width={"w-full"}
                InputBackgroundColor={"bg-white"}
                SideText={item.SideText}
                SideTextSize={item.SideTextSize}
                SideTextWidth={item.SideTextWidth}
              />
            );
          })} */}

            <div className="py-2">
              <p className="text-sm w-full">
                Minimum of 10 characters and must meet our{" "}
                <TextButton
                  href={""}
                  TextUnderline={"underline"}
                  Text={"password guidelines"}
                />
              </p>
            </div>

            <div className="flex flex-row py-2">
              <input type="checkbox" className="checkbox px-1" />
              <p className="text-sm w-full">
                I agree to the{" "}
                <a href="" className="underline">
                  End User License Agreement
                </a>{" "}
                and the{" "}
                <a href={""} className="underline">
                  Privacy Policy
                </a>
              </p>
            </div>

            <div className="card-actions justify-center py-2">
              <ContentButton
                text={"Sign Up"}
                backgroudcolor={"bg-white"}
                textcolor="text-black"
                width="w-full"
              />
            </div>
          </div>

          <div className="w-full py-4">
            <div className="flex justify-center self-center">
              <p>Already have an account? </p>
              <TextButton
                href={"/SignIn"}
                TextUnderline={"underline"}
                Text={"Sign In"}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProMiddleMainContent;
