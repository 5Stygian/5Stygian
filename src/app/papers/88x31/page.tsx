"use client";

import * as c from "@/app/components/index";
import { useEffect } from "react";
import { StygianLink1 } from "./data";

export default function LinkPage() {
  useEffect((): void => {
    const codebox: HTMLDivElement = document.getElementById("codebox") as HTMLDivElement;
    const linkbox1: HTMLDivElement = document.getElementById("5StygianLink1") as HTMLDivElement;

    linkbox1.addEventListener("click", (): void => {
      codebox.innerText = StygianLink1.Code;
    });
  }, []);

  return (
    <c.Content domHeader="88x31">
      <h1>Important</h1>
      <p className="whitespace-pre">
        All elements use TailwindCSS.
        These elements are also made for React.
      </p>
      <div>
        <StygianLink1.Function />
      </div>
      <div id="codebox" className="mt-4 p-2 bg-black border-2 border-white rounded-lg">
        Click on one to get the code.
      </div>
    </c.Content>
  );
}
