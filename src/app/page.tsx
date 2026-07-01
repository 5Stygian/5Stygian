import * as c from "./components/index";

import Link from "next/link";

export default function Index() {
  return (
    <c.Content domHeader="Index" subHeader="o algo">
      <Link href="/papers/components">Components</Link>
      <br />
      <Link href="/papers/fllol/hub">Fursona Lore LoL</Link>
      <br />
      <Link href="/papers/conlangs/hub" className="hidden">
        Conlangs Hub
      </Link>
    </c.Content>
  );
}
