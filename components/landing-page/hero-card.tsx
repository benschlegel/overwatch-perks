import HeroImage from '@/components/landing-page/hero-image';
import { Separator } from '@/components/ui/separator';
import { getHeroName, type HeroId } from '@/data/heroes';
import { useMemo } from 'react';

type Props = {
	heroId: HeroId;
};

export default function HeroCard({ heroId }: Props) {
	const heroName = useMemo(() => {
		return getHeroName(heroId);
	}, [heroId]);

	return (
		<div className="bg-secondary max-w-[30rem] max-h-[50rem] rounded-lg flex flex-col">
			<HeroImage heroId={heroId} />

			<Separator className="mb-2 h-1 transition-colors duration-300" />
			<div className="flex flex-col items-center justify-center">
				<p className="pb-2 font-bold font-mono">{heroName}</p>
			</div>
		</div>
	);
}
