import React from "react";

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
    <div className="w-3/5 h-full bg-zinc-900 mx-auto py-8 px-12 shadow-lg shadow-zinc-900">
      <DomHeader text={domHeader} />
      <SubHeader text={subHeader} />
      <hr className="w-4/5 mx-auto my-8" />
      {children}
    </div>
  );
}
