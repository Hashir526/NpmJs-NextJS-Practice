import Link from "next/link";
import Image from "next/image";
import React from "react";
import IconButton from "../../atom/IconButton/IconButton";
import npm from "../../../logo/Npm.png";
import TextInput from "../../atom/TextInput/TextInput";
import ContentButton from "../../atom/ContentButton/ContentButton";
import TextButton from "../../atom/TextButton/TextButton";

export default function SignUpPage() {
  const TextInputData: any = [
    { TextInputName: "Username *", InputType: "text" },
    {
      TextInputName: "Email Address",
      InputType: "email",
      SideText:
        "Your email address will be added to the metadata of packages that you publish, so it may be seen publicly.",
      SideTextSize: "text-sm",
      SideTextWidth: "w-full",
    },
    {
      TextInputName: "Password",
      InputType: "password",
    },
  ];
  return (
    <main className="bg-slate-200 h-screen">
      <div className="w-full bg-gradient-to-r from-orange-500 to-violet-500 h-3"></div>
      <div className="flex justify-center self-center py-14">
        <Link href="/" className="">
          <IconButton
            image={npm}
            alttext={"next image"}
            height="h-14"
            width="w-40"
          />
        </Link>
      </div>

      <div className="card w-full py-10 text-black  ">
        <div className="card-body justify-center self-center bg-white rounded-lg w-[22rem] md:w-[30rem] ">
          <h2 className="card-title border-b-2">Sign Up</h2>

          {TextInputData.map((item: any) => {
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
          })}

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
    </main>
  );
}
