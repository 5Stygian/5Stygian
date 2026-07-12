"use client";

import * as c from "@/app/components/index";
import { useEffect } from "react";
import { StygianLink1, StygianLink2 } from "./data";
import { getElementById } from "@/app/scripts/utils";

export default function LinkPage() {
  useEffect((): void => {
    const codebox: HTMLDivElement = getElementById<HTMLDivElement>("codebox");
    const requiredFonts: HTMLSpanElement = getElementById<HTMLSpanElement>("requiredFonts");

    const linkbox1: HTMLDivElement = getElementById<HTMLDivElement>("5StygianLink1");
    const linkbox2: HTMLDivElement = getElementById<HTMLDivElement>("5StygianLink2");

    linkbox1.addEventListener("click", (): void => {
      codebox.innerText = StygianLink1.Code;
      requiredFonts.innerText = StygianLink1.GetRequiredFontsAsString();
    });

    linkbox2.addEventListener("click", (): void => {
      codebox.innerText = StygianLink2.Code;
      requiredFonts.innerText = StygianLink2.GetRequiredFontsAsString();
    });
  }, []);

  return (
    <c.Content domHeader="88x31" subHeader="Or h-7.75 w-22 if you wanna be techwoke about it">
      <h1>Important</h1>
      <p>
        These elements are made for React with TailwindCSS. Versions for raw HTML may or may not
        be available in 3-5 business days.
      </p>
      <div className="grid grid-cols-2">
        <StygianLink1.Function />
        <StygianLink2.Function />
      </div>
      <div id="codebox" className="mt-10 p-2 bg-black border-2 border-white rounded-lg">
        Click on one to get the code.
      </div>
      <div className="mt-4">
        <strong>Required Fonts: </strong>
        <span id="requiredFonts" />
      </div>
    </c.Content>
  );
}
