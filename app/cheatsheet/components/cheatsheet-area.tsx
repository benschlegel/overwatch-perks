import CheatsheetHeroCard from '@/app/cheatsheet/components/hero-card';
import type { HeroId } from '@/data/heroes';

type Props = {
	heroId: HeroId;
};

export default function CheatsheetArea({ heroId }: Props) {
	return (
		<div className="flex flex-col gap-4">
			<CheatsheetHeroCard heroId={heroId} />
		</div>
	);
}
