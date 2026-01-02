import * as c from '@/app/components/index';

import Link from 'next/link';

export default function ConlangsHub() {
	return (
		<c.Content domHeader='Conlangs'>
			<table>
				<tbody>
					<tr><th><Link href="./newconlang">newconlang</Link></th></tr>
				</tbody>
			</table>
		</c.Content>
	);
}