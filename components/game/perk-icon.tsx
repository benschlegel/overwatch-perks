import type { Perk } from '@/data/perks';
import Image from 'next/image';

type Props = {
	perk: Perk;
};

const imageFileExt = 'png';
const basePath = '/assets/perks';

export default function PerkIcon({ perk }: Props) {
	// TODO: preload next images
	const imgUrl = perk !== undefined ? `${basePath}/${perk.heroId}_${perk.perkType}_${perk.perkIndex}.${imageFileExt}` : undefined;
	return (
		<div className="relative rounded-full size-20 bg-secondary flex justify-center items-center">
			{imgUrl && <Image src={imgUrl} alt={`${perk.name} icon`} unoptimized={false} quality={100} priority fill className="object-cover rounded-full" />}
		</div>
	);
}
