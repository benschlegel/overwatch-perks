import type { HeroId } from '@/data/heroes';
import Link from 'next/link';

type Props = {
	heroId?: HeroId;
};
export default function HeroPage({ heroId }: Props) {
	if (heroId === undefined) {
		heroId = 'tracer';
	}

	console.log(`Hero id: ${heroId}`);
	return (
		<div className="flex flex-col gap-2">
			<p>Slug: {heroId}</p>
			<Link href={'/cheatsheet'} prefetch>
				Go to no slug
			</Link>
			<Link href={'/cheatsheet/ana'} prefetch>
				Go to ana
			</Link>
		</div>
	);
}
