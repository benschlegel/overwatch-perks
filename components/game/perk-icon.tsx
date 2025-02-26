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
	const imgUrl = perk !== undefined ? `${basePath}/${perk.heroId}_${perk.perkType}_${perk.perkIndex}.${imageFileExt}` : undefined;

	if (!perk || !imgUrl) return <></>;

	return (
		<div className={cn('relative rounded-full size-20 bg-secondary flex justify-center items-center', className)} key={perk.name}>
			{/* {isLoading && (
				<div className="absolute inset-0 flex items-center justify-center" key={`${perk.name}-loader`}>
					<LoaderCircleIcon className="w-10 h-10 text-primary animate-spin" aria-label="Loading" />
				</div>
			)} */}

			<Image
				src={imgUrl}
				alt={`${perk.name} icon`}
				quality={100}
				priority
				key={`${perk.name}-${perk.id}-img`}
				fill
				loading="eager"
				unoptimized={true}
				className={`object-cover rounded-full transition-opacity duration-100`}
			/>
		</div>
	);
}
