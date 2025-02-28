import SmallHeroImage from '@/app/cheatsheet/components/small-hero-img';
import { Separator } from '@/components/ui/separator';
import type { Hero } from '@/data/heroes';
import Link from 'next/link';

type Props = {
	hero: Hero;
};

export default function SmallHeroCard({ hero }: Props) {
	const useSmallFont = hero.name.length > 9;
	return (
		<Link href={`/cheatsheet/${hero.id}`} className="transform transition-transform hover:scale-125 hover:z-[9999] overflow-visible">
			<div className="bg-secondary rounded-lg flex flex-col justify-center items-center hover:outline-none border-none hover:ring-2 hover:ring-border ring-offset-transparent hover:ring-offset-1">
				<SmallHeroImage hero={hero} />
				<Separator className="mb-2 h-1 transition-colors duration-300" />
				<div className="flex flex-col items-center justify-center  overflow-hidden">
					<p className={`pb-2 font-bold font-mono sm:text-base ${useSmallFont && 'text-sm'}`}>{hero.name ?? 'loading'}</p>
				</div>
			</div>
		</Link>
	);
}
