"use client";

import Link from "next/link";
import { useEffect } from "react";
import { getElementById } from "@/app/scripts/utils";
import { TopBarLinkStyle } from "@/app/globals";

type LinkData = {
  text: string,
  path: string
};

interface TopBarLinksProps {
  links: Array<LinkData>;
}

export default function TopBarLinks({ links }: TopBarLinksProps) {
  useEffect((): void => {
    const linksBaseStyle: string = "border-t-4 border-t-zinc-500/35 bg-zinc-900";
    const links: HTMLElement = getElementById<HTMLElement>("topbar-links");
    const linksToggle: HTMLHeadingElement = getElementById<HTMLHeadingElement>("topbar-links-toggle");
    let linksAreShown: boolean = false;

    linksToggle.addEventListener("click", (): void => {
      linksAreShown = !linksAreShown;
      
      linksAreShown ?
        links.className = linksBaseStyle :
        links.className = `hidden ${linksBaseStyle}`;
    });
  }, []);

  return(
    <div className="inline hover:cursor-pointer">
      <h1 id="topbar-links-toggle" className="inline px-6 border-r-4 border-r-zinc-500/35">Links</h1>
      <nav id="topbar-links" className="hidden">
        {links.map((item, index): React.ReactNode => {
          return (
            <Link href={`/papers/${item.path}`} className={TopBarLinkStyle} key={index}>
              {item.text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}