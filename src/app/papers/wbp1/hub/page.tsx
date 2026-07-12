import * as c from "@/app/components/index";
import { WBP1Name } from "@/app/globals";

import Link from "next/link";

export default function Hub() {
  return (
    <c.Content domHeader={WBP1Name} subHeader="Hub">
      <h1>Overview</h1>
      <p>
        {WBP1Name} is a fantasy world in which two races, one made up of humans, the other
        being made up of anthropomorphic animals (basically furries), called "Anthrans",
        have been separated across dimensions after a devastating war over which
        species was superior.
      </p>
      <hr />
      <h1>Links</h1>
      <Link href="/papers/wbp1/the-arcoil">
        <h3>The Arcoil (Magic System)</h3>
      </Link>
      <Link href="/papers/wbp1/world-history">
        <h3>World History</h3>
      </Link>
    </c.Content>
  );
}
