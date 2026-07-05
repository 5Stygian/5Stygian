import Link from "next/link";

export default function TopBar() {
  return (
    <nav className="fixed w-full py-1.25 pl-2 sm:pl-6 bg-zinc-900 border-b-4 border-b-zinc-500/35">
      <Link href="/" className="text-white! cursor-pointer">
        <h1 className="italic">5Stygian</h1>
      </Link>
    </nav>
  );
}
