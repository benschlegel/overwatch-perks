import { getHeroImage, type HeroId } from '@/data/heroes';
import { useMemo } from 'react';
import Image from 'next/image';
import { useSetting } from '@/hooks/use-settings-param';
import { BanIcon } from 'lucide-react';

type Props = {
	heroId?: HeroId;
};

export default function HeroImage({ heroId }: Props) {
	const [showHero, _] = useSetting('showHero');
	if (!heroId) return <div className="relative w-[8rem] pb-[120%]" />;
	const heroSource = useMemo(() => {
		return getHeroImage(heroId);
	}, [heroId]);

	// TODO: use opacity instead of switching component
	return (
		<div className="relative w-[8rem] pb-[120%]">
			{showHero ? (
				<Image src={heroSource} alt={`${heroId}'s hero portrait`} unoptimized={true} quality={100} fill className="object-cover rounded-t-lg" />
			) : (
				<div className="absolute flex justify-center items-center w-full h-full">
					<BanIcon className="size-[3rem] transition-colors" />
				</div>
			)}
		</div>
	);
}
