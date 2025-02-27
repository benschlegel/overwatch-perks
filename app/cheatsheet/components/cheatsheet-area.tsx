import CheatsheetHeroCard from '@/app/cheatsheet/components/hero-card';
import type { HeroId } from '@/data/heroes';

type Props = {
	heroId: HeroId;
};

export default function CheatsheetArea({ heroId }: Props) {
	return (
		<div>
			<CheatsheetHeroCard heroId={heroId} />
		</div>
	);
}
