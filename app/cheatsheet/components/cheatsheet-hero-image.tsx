import LinkHeroImage from '@/app/cheatsheet/components/cheatsheet-hero-img';
import { HeroSelectContext } from '@/app/cheatsheet/context/HeroSelectContext';
import { Separator } from '@/components/ui/separator';
import { getHeroName, type HeroId } from '@/data/heroes';
import { useCallback, useContext } from 'react';

type Props = {
	heroId: HeroId;
};

export default function CheatsheetHeroCard({ heroId }: Props) {
	const heroName = getHeroName(heroId);
	const { setIsOpen } = useContext(HeroSelectContext);

	const onClick = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);
	return (
		<div
			className="bg-secondary max-w-[30rem] max-h-[50rem] rounded-lg flex flex-col justify-center items-center hover:outline-none border-none hover:ring-1 hover:ring-secondary-foreground ring-offset-transparent hover:ring-offset-1"
			tabIndex={0}
			onClick={onClick}
			// biome-ignore lint/a11y/useSemanticElements: easier to keep card styling this way
			role="button"
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					onClick();
				}
			}}>
			<LinkHeroImage heroId={heroId} />
			<Separator className="mb-2 h-1 transition-colors duration-300" />
			<div className="flex flex-col items-center justify-center">
				<p className="pb-2 font-bold font-mono text-center">{heroName ?? 'loading'}</p>
			</div>
		</div>
	);
}
