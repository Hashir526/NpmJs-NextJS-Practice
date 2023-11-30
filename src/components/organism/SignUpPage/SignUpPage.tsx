import Link from "next/link";
import Image from "next/image";
import React from "react";
import IconButton from "../../atom/IconButton/IconButton";
import npm from "../../../logo/Npm.png";

export default function SignUpPage() {
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
        <div className="card-body justify-center self-center bg-white rounded-lg w-2/6">
          <h2 className="card-title border-b-2">Sign Up</h2>
          <div className="py-2">
            <p className="font-bold">Username *</p>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full  bg-white"
            />
          </div>
          <div className="py-2">
            <p className="font-bold">Email Address</p>
            <input
              type="email"
              placeholder=""
              className="input input-bordered w-full  bg-white"
            />
            <p className="w-full text-sm">
              Your email address will be added to the metadata of packages that
              you publish, so it may be seen publicly.
            </p>
          </div>
          <div className="py-2">
            <p className="font-bold">Password</p>
            <input
              type="password"
              placeholder=""
              className="input input-bordered w-full  bg-white"
            />
            <p className="text-sm w-full">
              Minimum of 10 characters and must meet our{" "}
              <a href={" "} className="underline">
                password guidelines
              </a>
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
            <button className="btn bg-white w-full text-black">Sign Up</button>
          </div>
        </div>

        <div className="w-full py-4">
          <div className="flex justify-center self-center">
            <p>Already have an account? </p>
            <Link href="/SignIn" className="underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
