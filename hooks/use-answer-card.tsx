import { useGameScore } from '@/context/GameScoreContext';
import type { Perk } from '@/data/perks';
import useGameState from '@/hooks/use-game-state';
import type { GameResult } from '@/types/database';
import type { PlausibleEvents } from '@/types/plausible';
import { usePlausible } from 'next-plausible';
import { useState, useCallback, useEffect } from 'react';

type Props = {
	cardId: number;
	perk: Perk;
	isCorrect: boolean;
};

export default function useAnswerCard({ cardId, perk, isCorrect }: Props) {
	const { gameState, setGameState, currPerk } = useGameState();
	const { incrementCurrent, resetCurrent } = useGameScore();
	const [result, setResult] = useState<boolean | undefined>(undefined);
	const plausible = usePlausible<PlausibleEvents>();

	const onClick = useCallback(async () => {
		if (gameState === 'in-progress' || gameState === 'starting') {
			// Update game/card state
			const gameResult = isCorrect ? 'won' : 'lost';
			setGameState(gameResult);
			if (!isCorrect) {
				setResult(false);
				resetCurrent();
			} else {
				incrementCurrent();
			}

			// Logging
			plausible('finishGame', { props: { result: isCorrect ? 'correct' : 'incorrect' } });
			const loggedGame: GameResult = {
				gameResult,
				guessedPerk: perk.id,
				perkId: currPerk.id,
			};
			await fetch(`/api/save`, { method: 'POST', body: JSON.stringify(loggedGame) });
		}
	}, [isCorrect, setGameState, gameState, incrementCurrent, resetCurrent, plausible, currPerk.id, perk.id]);

	const updateCorrectCard = useCallback(() => {
		if (isCorrect) {
			setResult(true);
		}
	}, [isCorrect]);

	const resetResult = useCallback(() => {
		setResult(undefined);
	}, []);

	useEffect(() => {
		if (gameState === 'won' || gameState === 'lost') {
			updateCorrectCard();
		} else if (gameState === 'starting' || gameState === 'in-progress') {
			resetResult();
		}
	}, [gameState, updateCorrectCard, resetResult]);

	useEffect(() => {
		// Handle hotkeys
		const handleKeyDown = (e: KeyboardEvent) => {
			// reroll on r or space (only trigger if ctrl wasn't pressed so ctrl + r reload still works)
			if (e.key === `${cardId}`) {
				e.preventDefault();

				// Hotkey action
				// Trigger click action if corresponding hotkey was pressed
				onClick();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [onClick, cardId]);

	return { result, onClick };
}
