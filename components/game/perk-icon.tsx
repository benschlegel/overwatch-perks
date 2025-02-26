'use client';
import { GameStateContext } from '@/context/GameStateContext';
import type { Perk } from '@/data/perks';
import { cn } from '@/lib/utils';
import { LoaderCircleIcon } from 'lucide-react';
import Image from 'next/image';
import { type HTMLAttributes, useCallback, useContext, useEffect, useState } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
	perk?: Perk;
}

const imageFileExt = 'png';
const basePath = '/assets/perks';

export default function PerkIcon({ perk, className }: Props) {
	const [isLoading, setLoading] = useState(true);
	const imgUrl = perk !== undefined ? `${basePath}/${perk.heroId}_${perk.perkType}_${perk.perkIndex}.${imageFileExt}` : undefined;
	const [gameState, _] = useContext(GameStateContext);

	useEffect(() => {
		if (gameState === 'in-progress' || gameState === 'starting') {
			setLoading(true);
		}
	}, [gameState]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: set loading to true every time perk changes so it also works in case the same perk gets rolled twice in a row
	useEffect(() => {
		setLoading(true);
	}, [perk]);

	const onLoaded = useCallback(() => {
		setLoading(false);
		console.log('Loaded image.');
	}, []);

	const onError = useCallback(() => {
		setLoading(false);
		console.error(`Failed to load image: ${imgUrl}`);
	}, [imgUrl]);

	if (!perk || !imgUrl) return <></>;

	return (
		<div className={cn('relative rounded-full size-20 bg-secondary flex justify-center items-center', className)} key={perk.name}>
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center" key={`${perk.name}-loader`}>
					<LoaderCircleIcon className="w-10 h-10 text-primary animate-spin" aria-label="Loading" />
				</div>
			)}

			<Image
				src={imgUrl}
				alt={`${perk.name} icon`}
				onLoad={onLoaded}
				onError={onError}
				quality={100}
				priority
				key={`${perk.name}-${perk.id}-img`}
				fill
				loading="eager"
				unoptimized={true}
				className={`object-cover rounded-full transition-opacity duration-100 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
			/>
		</div>
	);
}
