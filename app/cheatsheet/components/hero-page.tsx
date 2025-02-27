'use client';
import Header from '@/app/cheatsheet/components/header';
import Socials from '@/components/socials';
import type { HeroId } from '@/data/heroes';
import Link from 'next/link';

type Props = {
	heroId?: HeroId;
};
export default function HeroPage({ heroId }: Props) {
	if (heroId === undefined) {
		heroId = 'tracer';
	}

	return (
		<div>
			<Socials />
			<Header />
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
