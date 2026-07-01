import * as c from "@/app/components/index";

import Link from "next/link";

export default function Hub() {
  return (
    <c.Content domHeader="Fursona Lore LoL" subHeader="Hub">
      <Link href="/papers/fllol/the-arcoil">
        <h3>The Arcoil (Magic System)</h3>
      </Link>
      <Link href="/papers/fllol/world-history">
        <h3>World History</h3>
      </Link>
    </c.Content>
  );
}
