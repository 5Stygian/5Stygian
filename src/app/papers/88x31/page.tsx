"use client";

import * as c from "@/app/components/index";
import { useEffect } from "react";

const StygianLink1HTML: string = `
<div id="5StygianLink1" className="h-7.75 w-22 overflow-hidden">
  <a href="https://5stygian.netlify.app/" target="_blank" className="grid grid-cols-3 h-7.75 w-22 hover:saturate-100! hover:brightness-100! hover:no-underline!">
    <div className="grid grid-cols-4 h-10 w-22 translate-x-1 -translate-y-4 rotate-15 scale-125 saturate-150">
      <span className="h-15 w-110/100 bg-linear-to-t from-[#3593ff] to-[#97c7ff]" />
      <span className="h-15 w-110/100 bg-linear-to-b from-[#8b2dd3] to-[#b566f1]" />
      <span className="h-15 w-110/100 bg-linear-to-t from-[#921249] to-[#eb4c90]" />
      <span className="h-15 w-110/100 bg-[#181818]" />
    </div>
    <div className="grid grid-cols-3">
      <div className="z-4 text-white font-extrabold text-[14px] -translate-x-6.75 -translate-y-0.5">5Stygian</div>
      <div className="z-3 text-white font-extrabold text-[14px] -translate-x-7.75 translate-y-1 opacity-75">5Stygian</div>
      <div className="z-2 text-white font-extrabold text-[14px] -translate-x-8.75 translate-y-2.5 opacity-50">5Stygian</div>
    </div>
  </a>
</div>`;

export function StygianLink1Button() {
  return (
    <div id="5StygianLink1" className="h-7.75 w-22 overflow-hidden hover:cursor-pointer hover:scale-300">
      <div
        className="grid grid-cols-3 h-7.75 w-22\
                   hover:saturate-100! hover:brightness-100! hover:no-underline!"
      >
        <div className="grid grid-cols-4 h-10 w-22 translate-x-1 -translate-y-4 rotate-15 scale-125 saturate-150">
          <span className="h-15 w-110/100 bg-linear-to-t from-[#3593ff] to-[#97c7ff]" />
          <span className="h-15 w-110/100 bg-linear-to-b from-[#8b2dd3] to-[#b566f1]" />
          <span className="h-15 w-110/100 bg-linear-to-t from-[#921249] to-[#eb4c90]" />
          <span className="h-15 w-110/100 bg-[#181818]" />
        </div>
        <div className="grid grid-cols-3">
          <div className="z-4 text-white font-extrabold text-[14px] -translate-x-6.75 -translate-y-0.5">
            5Stygian
          </div>
          <div className="z-3 text-white font-extrabold text-[14px] -translate-x-7.75 translate-y-1 opacity-75">
            5Stygian
          </div>
          <div className="z-2 text-white font-extrabold text-[14px] -translate-x-8.75 translate-y-2.5 opacity-50">
            5Stygian
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LinkPage() {
  useEffect((): void => {
    const codebox: HTMLDivElement = document.getElementById("codebox") as HTMLDivElement;
    const linkbox1: HTMLDivElement = document.getElementById("5StygianLink1") as HTMLDivElement;

    linkbox1.addEventListener("click", (): void => {
      const text: string = StygianLink1HTML
        .replace(new RegExp(/\n/gm), "")
        .replace(new RegExp(/(?<=>)\s+(?=<)/gm), "");

      codebox.innerText = text;
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
        <StygianLink1Button />
      </div>
      <div id="codebox" className="mt-4 p-2 bg-black border-2 border-white rounded-lg">
        Click on one to get the code.
      </div>
    </c.Content>
  );
}
