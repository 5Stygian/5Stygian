"use client";

import React from "react";
import Link from "next/link";

import DomHeader from "./headers/domHeader";
import SubHeader from "./headers/subHeader";
import TopBar from "./topbar/topbar";
import Breakpoints from "./breakpoints";

interface ContentProps {
  children: React.ReactNode;
  domHeader: string;
  subHeader?: string | undefined;
  egg?: string | undefined;
}

export default function Content({
  children,
  domHeader,
  subHeader,
  egg,
}: ContentProps) {
  return (
    <>
      <Breakpoints />
      <div id="THE-EGG" className="hidden">{egg}</div>
      <TopBar />
      <div className="sm:w-3/5 h-full mx-auto pt-24 pb-4 px-12 bg-zinc-800 shadow-lg shadow-zinc-800">
        <DomHeader text={domHeader} />
        <SubHeader text={subHeader} />
        <hr className="w-13/16! mx-auto! my-8! border-2! border-zinc-500/35!" />
        {children}
      </div>
      <hr className="h-6 border-none" />
      <div className="pl-4 text-[14px]">
        This website is{" "}
        <Link href="https://github.com/5Stygian/5Stygian">open source!</Link>
        <br />
        Unless otherwise stated, the content of this page is licensed under the{" "}
        <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/S">
          Creative Commons Attribution-NonCommercial-ShareAlike 4.0
          International license.
        </Link>
      </div>
    </>
  );
}
