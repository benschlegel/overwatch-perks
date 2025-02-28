import LinkHeroImage from '@/app/cheatsheet/components/cheatsheet-hero-img';
import { Separator } from '@/components/ui/separator';
import { getHeroName, type HeroId } from '@/data/heroes';
import Link from 'next/link';

type Props = {
	heroId: HeroId;
};

export default function CheatsheetHeroCard({ heroId }: Props) {
	const heroName = getHeroName(heroId);

	return (
		<Link href={'/cheatsheet'}>
			<div className="bg-secondary max-w-[30rem] max-h-[50rem] rounded-lg flex flex-col justify-center items-center hover:outline-none border-none hover:ring-1 hover:ring-secondary-foreground ring-offset-transparent hover:ring-offset-1">
				<LinkHeroImage heroId={heroId} />
				<Separator className="mb-2 h-1 transition-colors duration-300" />
				<div className="flex flex-col items-center justify-center">
					<p className="pb-2 font-bold font-mono text-center">{heroName ?? 'loading'}</p>
				</div>
			</div>
		</Link>
	);
}
