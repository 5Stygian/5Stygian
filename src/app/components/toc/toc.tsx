"use client";

import Link from "next/link";
import { capitalize } from "@/app/scripts/utils";
import { useState, useEffect } from "react";

export default function TableOfContents() {
  const [ids, setIds] = useState<Array<string>>([]);

  useEffect(() => {
    const headerIds: Array<string> = [];
    
    const collapse: HTMLSpanElement = document.getElementById("toc-collapse") as HTMLSpanElement;
    const divider: HTMLHRElement = document.getElementById("toc-divider") as HTMLHRElement;
    const contents: HTMLDivElement = document.getElementById("toc-contents") as HTMLDivElement;
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

      contentsAreCollapsed ?
        contents.className = "hidden" :
        contents.className = "";
    });
  }, []);
    
  return (
    <div className="fixed top-0 right-0 mt-4 mr-4 p-2.5 bg-zinc-900 border-2 border-zinc-700 z-9001">
      <div>
        <strong>Table of Contents</strong>
        <span
          id="toc-collapse"
          className="ml-2 pl-2 font-extrabold border-l-2 border-l-zinc-500/35 select-none hover:cursor-pointer"
        >
          O
        </span>
      </div>
      <div id="toc-contents">
        <hr id="toc-divider" className="my-2" />
        {ids.map((id, index) => {
          const idNameArray: Array<string> = id.split("-");
          let displayName: string = idNameArray
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
