import Link from "next/link";
import Image from "next/image";
import React from "react";
import IconButton from "../../atom/IconButton/IconButton";
import npm from "../../../logo/Npm.png";
import prgram from "../../../logo/Program.png";
import ContentButton from "../../atom/ContentButton/ContentButton";
import TextButton from "../../atom/TextButton/TextButton";
import TextInput from "../../atom/TextInput/TextInput";

const SignInPage = () => {
  const TextInputData: any = [
    { TextInputName: "Username", InputType: "text" },
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
          <div className=" justify-center self-center">
            <Image src={prgram} alt={"Picture"} width={200} />
          </div>

          <h2 className="card-title border-b-2">Sign In</h2>

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
              <TextButton
                href={""}
                TextUnderline={"underline"}
                Text={"Forgot Password?"}
              />
            </p>
          </div>

          <div className="card-actions justify-center py-2">
            <ContentButton
              text={"Sign In"}
              backgroudcolor={"bg-white"}
              textcolor="text-black"
              width="w-full"
            />
          </div>
          <div className="w-full py-4">
            <div className="flex justify-center self-center">
              <TextButton
                href={"/SignUp"}
                TextUnderline={"underline"}
                Text={"Create Account"}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
