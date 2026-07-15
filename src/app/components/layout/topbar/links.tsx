"use client";

import Link from "next/link";
import { useEffect } from "react";
import { getElementById } from "@/app/scripts/utils";
import { TopBarLinkStyle } from "@/app/globals";

type LinkData = {
  text?: string | undefined,
  path?: string | undefined,
  type?: "DIVIDER" | "HIDDEN" | undefined,
};

interface TopBarLinksProps {
  links: Array<LinkData>;
}

export default function TopBarLinks({ links }: TopBarLinksProps) {
  useEffect((): void => {
    const linksBaseStyle: string = "border-t-4 border-t-zinc-500/35 bg-zinc-900";
    const links: HTMLElement = getElementById("topbar-links");
    const linksToggle: HTMLButtonElement = getElementById("topbar-links-toggle");
    let linksAreShown: boolean = false;

    const TOC: HTMLElement = getElementById("toc");
    let TOCBaseClass: string = "";
    if (TOC !== null) TOCBaseClass = TOC.className;
    let TOCIsHidden: boolean = false

    linksToggle.addEventListener("click", (): void => {
      linksAreShown = !linksAreShown;
      TOCIsHidden = !TOCIsHidden;

      linksAreShown ?
        links.className = linksBaseStyle :
        links.className = `hidden ${linksBaseStyle}`;
      
      if (TOC !== null) TOCIsHidden ?
        TOC.className = `${TOCBaseClass} hidden!` :
        TOC.className = TOCBaseClass;
    });
  }, []);

  return(
    <span id="topbar-links-wrapper">
      <button
        type="button"
        id="topbar-links-toggle"
        className="hover:cursor-pointer"
      >
        <h1 className="inline px-4 sm:px-6 not-sm:text-[2.3rem]! border-r-4 border-r-zinc-500/35">Links</h1>
      </button>
      <nav id="topbar-links" className="hidden">
        {links.map((item, index): React.ReactNode | null => {
          // omg this looks soooo ugly
          switch (item.type) {
            case undefined:
              return (
                <Link href={`/papers/${item.path}`} className={TopBarLinkStyle} key={index}>
                  {item.text}
                </Link>
              );
            case "DIVIDER":
              return <hr className="my-1!" key={index} />;
            case "HIDDEN":
              return null;
          }
        })}
      </nav>
    </span>
  );
}
