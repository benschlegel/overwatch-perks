'use client';
import CheatsheetArea from '@/app/cheatsheet/components/cheatsheet-area';
import Header from '@/app/cheatsheet/components/header';
import { HeroDialog } from '@/app/cheatsheet/components/hero-dialog';
import Socials from '@/components/socials';
import type { HeroId } from '@/data/heroes';
import { useState } from 'react';

type Props = {
	heroId?: HeroId;
};
export default function HeroPage({ heroId }: Props) {
	const [isOpen, setIsOpen] = useState(heroId === undefined);
	if (heroId === undefined) {
		heroId = 'tracer';
	}

	return (
		<div>
			<HeroDialog open={isOpen} setOpen={setIsOpen} />
			<Socials />
			<Header />
			<CheatsheetArea heroId={heroId} />
		</div>
	);
	// return (
	// 	<div className="flex flex-col gap-2">
	// 		<p>Slug: {heroId}</p>
	// 		<Link href={'/cheatsheet'} prefetch>
	// 			Go to no slug
	// 		</Link>
	// 		<Link href={'/cheatsheet/ana'} prefetch>
	// 			Go to ana
	// 		</Link>
	// 	</div>
	// );
}
