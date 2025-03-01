import ChangeHeroButton from '@/app/cheatsheet/components/change-hero-button';
import ShareButton from '@/app/cheatsheet/components/share-button';
import { Button } from '@/components/ui/button';
import { CONFIG } from '@/config';
import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function ControlsRow() {
	return (
		<div className="flex items-center justify-between w-full px-2 pb-4">
			<ShareButton />
			<Link href={CONFIG.url} className="sm:ml-12">
				<Button variant={'outline'}>
					<ChevronLeftIcon />
					Go to game
				</Button>
			</Link>
			<ChangeHeroButton />
		</div>
	);
}
