import { CONFIG } from '@/config';
import { useGameScore } from '@/context/GameScoreContext';
import type { Perk } from '@/data/perks';
import useCompactSettings from '@/hooks/use-compact-settings';
import { useDialogParams } from '@/hooks/use-dialog-param';
import useGameState from '@/hooks/use-game-state';
import type { GameResult } from '@/types/database';
import type { PlausibleEvents } from '@/types/plausible';
import { usePlausible } from 'next-plausible';
import { useState, useCallback, useEffect, type RefObject } from 'react';

type Props = {
	cardId: number;
	perk: Perk;
	isCorrect: boolean;
	cardRef: RefObject<HTMLDivElement | null>;
};

export default function useAnswerCard({ cardId, perk, isCorrect, cardRef }: Props) {
	const { gameState, setGameState, currPerk } = useGameState();
	const { incrementCurrent, resetCurrent } = useGameScore();
	const [result, setResult] = useState<boolean | undefined>(undefined);
	const plausible = usePlausible<PlausibleEvents>();
	const [dialog, _] = useDialogParams();
	const settings = useCompactSettings();

	const onClick = useCallback(async () => {
		if (gameState === 'in-progress' || gameState === 'starting') {
			// Update game/card state
			const gameResult = isCorrect ? 'won' : 'lost';
			cardRef.current?.focus();
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
				perkId: currPerk?.id ?? -1,
				settings,
			};
			if (CONFIG.pauseLogs === false) {
				await fetch(`/api/save`, { method: 'POST', body: JSON.stringify(loggedGame) });
			}
		}
	}, [isCorrect, setGameState, gameState, incrementCurrent, resetCurrent, plausible, currPerk?.id, perk.id, settings, cardRef.current]);

	const updateCorrectCard = useCallback(() => {
		if (isCorrect) {
			setResult(true);
		}
	}, [isCorrect]);

	const resetResult = useCallback(() => {
		setResult(undefined);
		cardRef.current?.blur();
	}, [cardRef.current]);

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
			if (e.key === `${cardId}` && dialog === 'none') {
				e.preventDefault();

				// Hotkey action
				// Trigger click action if corresponding hotkey was pressed
				onClick();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [onClick, cardId, dialog]);

	return { result, onClick };
}
