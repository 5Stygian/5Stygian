"use client";

import Link from "next/link";
import { capitalize, getElementById } from "@/app/scripts/utils";
import { useState, useEffect } from "react";

export default function TableOfContents() {
  const [ids, setIds] = useState<Array<string>>([]);

  useEffect(() => {
    const headerIds: Array<string> = [];
    
    const collapse: HTMLSpanElement = getElementById<HTMLSpanElement>("toc-collapse");
    const collapseText: HTMLDivElement = getElementById<HTMLDivElement>("toc-collapseText");
    const contents: HTMLDivElement = getElementById<HTMLHRElement>("toc-contents");
    let contentsAreCollapsed: boolean = false

    for (let i = 1; i <= 6; i++) {
      const headers = document.getElementsByTagName(`h${i}`);

      for (const header of headers) {
        if (header.id !== "") headerIds.push(header.id);
      }
    }

    setIds(headerIds);

    collapse.addEventListener("click", (): void => {
      contentsAreCollapsed = !contentsAreCollapsed;
      
      if (contentsAreCollapsed) {
        contents.className = "hidden";
        collapseText.className = "rotate-180";
      } else {
        contents.className = "";
        collapseText.className = "";
      }
    });
  }, []);
    
  return (
    <div className="
      fixed top-0 right-0 mt-4 mr-4 p-2.5 bg-zinc-900 border-2 border-zinc-700 z-9001
      translate-y-20 sm:translate-y-0"
    >
      <div>
        <strong>Table of Contents</strong>
        <span
          id="toc-collapse"
          className="
            inline-block z-9002 ml-2 px-2 font-extrabold text-orange-300
            border-l-2 border-l-zinc-500/35 select-none
            hover:cursor-pointer"
        >
          <div id="toc-collapseText">V</div>
        </span>
      </div>
      <div id="toc-contents">
        <hr id="toc-divider" className="my-2" />
        {ids.map((id, index) => {
          const idNameArray: Array<string> = id.split("-");
          const displayName: string = idNameArray
            .map(capitalize)
            .join(" ");

          return (
            <div key={index}>
              <Link href={`#${id}`}>{displayName}</Link>
            </div>
          );
        })}  
      </div>
    </div>
  );
}
