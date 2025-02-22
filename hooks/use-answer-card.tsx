import { useGameScore } from '@/context/GameScoreContext';
import useGameState from '@/hooks/use-game-state';
import { useState, useCallback, useEffect } from 'react';

type Props = {
	cardId: number;
	isCorrect: boolean;
};

export default function useAnswerCard({ cardId, isCorrect }: Props) {
	const { gameState, setGameState } = useGameState();
	const { incrementCurrent, resetCurrent } = useGameScore();
	const [result, setResult] = useState<boolean | undefined>(undefined);
	const onClick = useCallback(() => {
		if (gameState === 'in-progress') {
			setGameState(isCorrect ? 'won' : 'lost');
			if (!isCorrect) {
				setResult(false);
				resetCurrent();
			} else {
				incrementCurrent();
			}
		}
	}, [isCorrect, setGameState, gameState, incrementCurrent, resetCurrent]);

	const updateCorrectCard = useCallback(() => {
		if (isCorrect) {
			setResult(true);
		}
	}, [isCorrect]);

	const resetResult = useCallback(() => {
		setResult(undefined);
	}, []);

	useEffect(() => {
		if (gameState !== 'in-progress') {
			updateCorrectCard();
		} else if (gameState === 'in-progress') {
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
