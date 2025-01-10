import React from "react";
import Link from "next/link";
import { GiAngelWings } from "react-icons/gi";
import Button from "./Button";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-12">
        <Link href="/">
          <div className="flex flex-row items-center cursor-pointer">
            <GiAngelWings fontSize={48} />
            <div className="font-semibold text-[35px] leading-[38px] ml-4 text-gray-700">
              Arch<span className="text-blue-500">angel</span>
            </div>
          </div>
        </Link>

        <div className="flex flex-row items-center">
          <div className="text-gray-700 mr-8 hover:text-black hover:font-bold cursor-pointer">
            Features
          </div>
          <div className="text-gray-700 mr-8 hover:text-black hover:font-bold cursor-pointer">
            Testimonials
          </div>
          <div className="text-gray-700 mr-8 hover:text-black hover:font-bold cursor-pointer">
            Pricing
          </div>
        </div>

        <div className="flex flex-row items-center">
          <Button text="Get Started" href="/signup" color="primary" />
        </div>
      </div>
    </>
  );
}
