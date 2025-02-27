import { getHeroImage, type HeroId } from '@/data/heroes';
import Image from 'next/image';

type Props = {
	heroId?: HeroId;
};

export default function LinkHeroImage({ heroId }: Props) {
	if (!heroId) return <div className="relative w-[8rem] pb-[120%]" />;
	const heroSource = getHeroImage(heroId);

	// TODO: use opacity instead of switching component
	return (
		<div className="relative sm:w-[8rem] w-[6rem] pb-[120%]">
			<Image src={heroSource} alt={`${heroId}'s hero portrait`} loading="eager" unoptimized={true} quality={100} fill className="object-cover rounded-t-lg" />
		</div>
	);
}
