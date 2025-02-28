import type { Hero } from '@/data/heroes';
import Image from 'next/image';

type Props = {
	hero: Hero;
};

export default function SmallHeroImage({ hero }: Props) {
	return (
		<div className="relative sm:w-[8rem] pb-[120%]">
			<Image
				src={hero.portrait}
				alt={`${hero.name}'s hero portrait`}
				// priority
				fetchPriority="high"
				loading="lazy"
				unoptimized={true}
				fill
				quality={100}
				className="object-cover rounded-t-lg"
			/>
		</div>
	);
}
