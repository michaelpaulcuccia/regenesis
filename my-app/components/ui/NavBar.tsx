import React, { useState } from "react";
import Link from "next/link";
import { GiAngelWings } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center mb-32 pt-4 relative">
        <Link href="/">
          <div className="flex flex-row items-center cursor-pointer">
            <GiAngelWings fontSize={48} />
            <div className="font-semibold text-[35px] leading-[38px] ml-4 text-gray-700">
              Arch<span className="text-blue-500">angel</span>
            </div>
          </div>
        </Link>

        {/* Full Menu for large screens */}
        <div className="flex flex-row items-center hidden md:flex">
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

        <div className="flex flex-row items-center hidden md:flex">
          <Button text="Get Started" href="/signup" color="primary" />
        </div>

        {/* Hamburger Button for medium screens */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-black"
          >
            {isMenuOpen ? (
              <AiOutlineClose fontSize={32} />
            ) : (
              <AiOutlineMenu fontSize={32} />
            )}
          </button>
        </div>

        {/* Dropdown Menu for medium screens*/}
        {isMenuOpen && (
          <div className="absolute top-20 right-0 w-full bg-white shadow-lg border border-gray-200 rounded-md md:hidden flex flex-col items-start p-6 z-50">
            <div className="text-gray-700 hover:text-black hover:font-bold cursor-pointer mb-4">
              Features
            </div>
            <div className="text-gray-700 hover:text-black hover:font-bold cursor-pointer mb-4">
              Testimonials
            </div>
            <div className="text-gray-700 hover:text-black hover:font-bold cursor-pointer mb-4">
              Pricing
            </div>
            <Button
              text="Get Started"
              href="/signup"
              color="primary"
              onClick={() => setMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </>
  );
}
