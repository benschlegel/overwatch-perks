'use client';
import PlayerSearch from '@/components/landing-page/search';
import { GameStateContext } from '@/context/GameStateContext';
import { PerkContext } from '@/context/PerkContext';
import type { Perk } from '@/data/perks';
import { useContext } from 'react';

export default function ExactAnswerCard() {
	const [gameState, _] = useContext(GameStateContext);
	const [perkBacklog, _setter] = useContext(PerkContext);
	const correctPerk = perkBacklog[0];

	return (
		<div className="w-full flex flex-col gap-2">
			<PlayerSearch className="mt-2" />
			{gameState === 'won' && <WinScreen perk={correctPerk} />}
			{gameState === 'lost' && <LossScreen perk={correctPerk} />}
		</div>
	);
}

type Props = {
	perk: Perk;
};

function LossScreen({ perk }: Props) {
	return (
		<div className="flex flex-col gap-2 mb-2 justify-center items-center w-full">
			<p className=" text-3xl font-bold tracking-tight lg:text-3xl">❌ Wrong answer ❌</p>
			<p className=" text-2xl font-regular tracking-tight lg:text-2xl">
				Correct perk: <span className="font-mono font-semibold text-primary-foreground">{perk.name}</span>
			</p>
		</div>
	);
}
function WinScreen({ perk }: Props) {
	return (
		<div className="flex flex-col gap-2 mb-2 justify-center items-center w-full">
			<p className=" text-3xl font-bold tracking-tight lg:text-3xl">🎉 Correct! 🎉</p>
			<p className=" text-2xl font-regular tracking-tight lg:text-2xl">
				<span className="font-mono font-semibold text-primary-foreground">{perk.name}</span>
			</p>
		</div>
	);
}
