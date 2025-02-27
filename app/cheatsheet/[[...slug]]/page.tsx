import HeroPage from '@/app/cheatsheet/components/hero-page';
import { isValidHeroId, type HeroId } from '@/data/heroes';
import { notFound } from 'next/navigation';

// TODO: add hero page to layout, only add dialog to base page

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

	return <HeroPage heroId={heroId} />;
}
