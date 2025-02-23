'use client';
import { GameStateContext } from '@/context/GameStateContext';
import type { Perk } from '@/data/perks';
import Image from 'next/image';
import { useContext, useState } from 'react';

type Props = {
	perk?: Perk;
};

const imageFileExt = 'png';
const basePath = '/assets/perks';

export default function PerkIcon({ perk }: Props) {
	// const [loading, setLoading] = useState(true);
	const imgUrl = perk !== undefined ? `${basePath}/${perk.heroId}_${perk.perkType}_${perk.perkIndex}.${imageFileExt}` : undefined;
	const [gameState, _] = useContext(GameStateContext);
	return (
		<div className="relative rounded-full size-20 bg-secondary flex justify-center items-center">
			{imgUrl && perk && <Image src={imgUrl} alt={`${perk.name} icon`} quality={100} priority fill className="object-cover rounded-full" />}
		</div>
	);
}
