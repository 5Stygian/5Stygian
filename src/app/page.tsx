import * as c from "./components/index";

import Link from "next/link";
import { WBP1Name } from "./globals";

export default function Index() {
  return (
    <c.Content domHeader="Index" subHeader="o algo">
      <Link href="/papers/components">Components</Link>
      <br />
      <Link href="/papers/wbp1/hub">{WBP1Name}</Link>
      <br />
      <Link href="/papers/conlangs/hub" className="hidden">
        Conlangs Hub
      </Link>
    </c.Content>
  );
}
