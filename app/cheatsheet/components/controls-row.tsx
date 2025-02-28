import ShareButton from '@/app/cheatsheet/components/share-button';
import { Button } from '@/components/ui/button';
import { RefreshCwIcon } from 'lucide-react';
import Link from 'next/link';

export default function ControlsRow() {
	return (
		<div className="flex items-center justify-between w-full">
			<ShareButton />
			<Link href={'/cheatsheet'}>
				<Button variant="outline">
					Change heroes <RefreshCwIcon className="text-text" />
				</Button>
			</Link>
		</div>
	);
}
