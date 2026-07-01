import * as c from "@/app/components/index";
import { WBP1Name } from "@/app/globals";

import Link from "next/link";

export default function Hub() {
  return (
    <c.Content domHeader={WBP1Name} subHeader="Hub">
      <Link href="/papers/wbp1/the-arcoil">
        <h3>The Arcoil (Magic System)</h3>
      </Link>
      <Link href="/papers/wbp1/world-history">
        <h3>World History</h3>
      </Link>
    </c.Content>
  );
}
