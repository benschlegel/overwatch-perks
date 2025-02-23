'use client';
import { GameStateContext } from '@/context/GameStateContext';
import type { Perk } from '@/data/perks';
import { LoaderCircleIcon } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useContext, useEffect, useState } from 'react';

type Props = {
	perk?: Perk;
};

const imageFileExt = 'png';
const basePath = '/assets/perks';

export default function PerkIcon({ perk }: Props) {
	const [isLoading, setLoading] = useState(true);
	const imgUrl = perk !== undefined ? `${basePath}/${perk.heroId}_${perk.perkType}_${perk.perkIndex}.${imageFileExt}` : undefined;
	const [gameState, _] = useContext(GameStateContext);

	useEffect(() => {
		if (gameState === 'in-progress' || gameState === 'starting') {
			setLoading(true);
		}
	}, [gameState]);

	const onLoaded = useCallback(() => {
		setLoading(false);
		console.log('Loaded image.');
	}, []);

	if (!perk || !imgUrl) return <></>;

	return (
		<div className="relative rounded-full size-20 bg-secondary flex justify-center items-center">
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center">
					<LoaderCircleIcon className="w-10 h-10 text-primary animate-spin" aria-label="Loading" />
				</div>
			)}

			<Image
				src={imgUrl}
				alt={`${perk.name} icon`}
				onLoad={onLoaded}
				quality={100}
				priority
				fill
				className={`object-cover rounded-full transition-opacity duration-100 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
			/>
		</div>
	);
}
