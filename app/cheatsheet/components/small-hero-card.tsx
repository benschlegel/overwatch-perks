import SmallHeroImage from '@/app/cheatsheet/components/small-hero-img';
import { Separator } from '@/components/ui/separator';
import type { Hero } from '@/data/heroes';

type Props = {
	hero: Hero;
};

export default function SmallHeroCard({ hero }: Props) {
	return (
		<div className="bg-secondary rounded-lg flex flex-col justify-center items-center">
			<SmallHeroImage hero={hero} />
			<Separator className="mb-2 h-1 transition-colors duration-300" />
			<div className="flex flex-col items-center justify-center">
				<p className="pb-2 font-bold font-mono">{hero.name ?? 'loading'}</p>
			</div>
		</div>
	);
}
