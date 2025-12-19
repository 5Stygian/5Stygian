import * as c from "./components/index";

import Link from "next/link";

export default function Index() {
  return (
    <c.Content domHeader="Index" subHeader="o algo">
      <Link href="/papers/components">Components</Link>
    </c.Content>
  );
}
