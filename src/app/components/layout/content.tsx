import React from "react";
import Link from "next/link";

import DomHeader from "./headers/domHeader";
import SubHeader from "./headers/subHeader";

interface ContentProps {
  children: React.ReactNode;
  domHeader: string;
  subHeader?: string | undefined;
}

export default function Content({
  children,
  domHeader,
  subHeader,
}: ContentProps) {
  return (
    <>
      <div className="w-3/5 h-full bg-zinc-900 mx-auto py-8 px-12 shadow-lg shadow-zinc-900">
        <DomHeader text={domHeader} />
        <SubHeader text={subHeader} />
        <hr className="w-4/5 mx-auto my-8" />
        {children}
      </div>
      <hr className="h-6 border-none" />
      <div className="pl-6 text-[14px]">
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
