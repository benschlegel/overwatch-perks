'use client';
import PlayerSearch from '@/components/landing-page/search';
import { GameStateContext } from '@/context/GameStateContext';
import { useContext } from 'react';

export default function ExactAnswerCard() {
	const [gameState, _] = useContext(GameStateContext);

	return (
		<div className="w-full flex flex-col gap-2">
			<PlayerSearch />
			{gameState === 'won' && <p>Won!</p>}
			{gameState === 'lost' && <p>Lost!</p>}
		</div>
	);
}
