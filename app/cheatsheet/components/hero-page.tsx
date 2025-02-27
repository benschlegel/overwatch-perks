'use client';
import CheatsheetArea from '@/app/cheatsheet/components/cheatsheet-area';
import Header from '@/app/cheatsheet/components/header';
import Socials from '@/components/socials';
import type { HeroId } from '@/data/heroes';

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
