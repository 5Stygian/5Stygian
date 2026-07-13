import Link from "next/link";
import Image from "next/image";
import { WBP1Name, TopBarLinkStyle } from "@/app/globals";
import TopBarLinks from "./links";

const Logo = require("@/app/public/stygian_bar.png");

export default function TopBar() {
  return (
    <nav className="fixed w-full bg-zinc-800 border-b-4 border-b-zinc-500/35 z-9001 select-none">
      <Link href="/" id="topbar-logo" className={`${TopBarLinkStyle} inline! pl-2 sm:pl-6`}>
        <Image
          src={Logo}
          width={90}
          height={90}
          alt="Logo"
          className="inline pr-2 -translate-y-3"
        />
        <h1 className="inline pr-6 italic border-r-4 border-r-zinc-500/35">
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
