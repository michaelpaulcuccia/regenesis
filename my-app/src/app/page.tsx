"use client";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <h2 className="font-medium tracking-tight text-slate-900 text-6xl text-center animate-blur-in">
        Sign up <span className="text-[#2563EB]">made simple</span>
        <br />
        for your business needs
      </h2>
      <br />
      <p className="font-normal tracking-tight text-slate-900 text-md text-center animate-blur-in">
        Explore this applications enrollment process by clicking the{" "}
        <Link href="/signup">
          <span className="text-[#2563EB]">Get Started</span>
        </Link>{" "}
        button.
      </p>
    </>
  );
}
