import { HeroDialog } from '@/app/cheatsheet/components/hero-dialog';
import { isValidHeroId, type HeroId } from '@/data/heroes';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Cheatsheet({
	params,
}: {
	params: Promise<{ slug: HeroId[] | undefined }>;
}) {
	// Slug parsing + validation
	const heroIdSlug = (await params).slug;
	let heroId: HeroId | undefined = undefined;
	if (heroIdSlug !== undefined) {
		heroId = heroIdSlug[0];
	}

	const isValid = heroId !== undefined ? isValidHeroId(heroId) : true;
	if (!isValid) {
		notFound();
	}

	return (
		<div className="flex flex-col">
			<p>Slug: {heroId}</p>

			<HeroDialog selectedHeroId={heroId} />
			{heroIdSlug !== undefined ? (
				<Link href={'/cheatsheet'} prefetch>
					Go to no slug
				</Link>
			) : (
				<Link href={'/cheatsheet/ana'} prefetch>
					Go to ana slug
				</Link>
			)}
		</div>
	);
}
