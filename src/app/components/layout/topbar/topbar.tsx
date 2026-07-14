import Link from "next/link";
import Image from "next/image";
import { WBP1Name, TopBarLinkStyle } from "@/app/globals";
import TopBarLinks from "./links";

const Logo = require("@/app/public/stygian_bar.png");

export default function TopBar() {
  return (
    <nav className="fixed w-full bg-zinc-800 border-b-4 border-b-zinc-500/35 z-9000 select-none">
      <Link href="/" id="topbar-logo" className={`${TopBarLinkStyle} inline! pl-2! sm:pl-4!`}>
        {/* I don't like doing it this way but what can you do? */}
        <Image
          src={Logo}
          width={95}
          height={95}
          alt="Logo"
          className="inline not-sm:hidden pr-2 -translate-y-3"
        />
        <Image
          src={Logo}
          width={80}
          height={80}
          alt="Logo"
          className="inline sm:hidden pr-2 -translate-y-2"
        />
        <h1 className="inline pr-4 sm:pr-6 italic not-sm:text-[2.3rem]! border-r-4 border-r-zinc-500/35">
          5Stygian
        </h1>
      </Link>
      <TopBarLinks links={[
        { text: "88x31", path: "/88x31" },
        { text: WBP1Name, path: "/wbp1/hub" }
      ]} />
    </nav>
  );
}
