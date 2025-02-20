import { getHeroImage, type HeroId } from '@/data/heroes';
import { useMemo } from 'react';
import Image from 'next/image';

type Props = {
	heroId: HeroId;
};

export default function HeroImage({ heroId }: Props) {
	if (!heroId) return <></>;
	const heroSource = useMemo(() => {
		return getHeroImage(heroId);
	}, [heroId]);

	return (
		<div className="relative w-[8rem] pb-[120%]">
			<Image src={heroSource} alt={`${heroId}'s hero portrait`} unoptimized={false} quality={100} fill className="object-cover rounded-t-lg" />
		</div>
	);
}
