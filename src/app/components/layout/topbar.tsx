import Link from "next/link";

const LinkStyle: string = "text-white! cursor-pointer";

export default function TopBar() {
  return (
    <nav className="fixed w-full pl-2 sm:pl-6 bg-zinc-900 border-b-4 border-b-zinc-500/35 z-9001">
      <Link href="/" className={LinkStyle}>
        <h1 className="inline pr-6 italic border-r-4 border-r-zinc-500/35">
          5Stygian
        </h1>
      </Link>
      <Link href="/papers/88x31" className={LinkStyle}>
        <h1 className="inline px-6 border-r-4 border-r-zinc-500/35">
          88x31
        </h1>
      </Link>
    </nav>
  );
}
