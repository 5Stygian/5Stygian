import * as c from "@/app/components/index";

import Link from "next/link";

export default function NakeHub() {
  return (
    <c.Content domHeader="Nake">
      <table>
        <tbody>
          <tr>
            <th>Page</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>
              <Link href="./nake/reference">Reference</Link>
            </td>
            <td>A reference sheet for the language.</td>
            <td>
              <c.Status status="IN_PROGRESS"></c.Status>
            </td>
          </tr>
        </tbody>
      </table>
    </c.Content>
  );
}
