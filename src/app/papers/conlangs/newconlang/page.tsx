import * as c from '@/app/components/index';

import Link from 'next/link';

export default function NewconlangHub() {
	return (
		<c.Content domHeader='newconlang'>
			<table>
				<tbody>
					<tr>
            <th>Page</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          <tr>
            <td><Link href="./newconlang/reference">Reference</Link></td>
            <td>A reference sheet for the language.</td>
            <td><c.Status status='in-progress'></c.Status></td>
          </tr>
				</tbody>
			</table>
		</c.Content>
	);
}